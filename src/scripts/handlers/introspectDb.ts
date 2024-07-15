import ora from 'ora'
import chalk from 'chalk'
import {
  ERROR_REFERENCE,
  prettyPrintError,
  PrismaErrorCodes,
  handlePrismaCliError,
} from '../../utils/errors'
import { generateEnv } from '../../utils'
import { stdout } from '../../utils/cli/debug'
import type { CLIOptions } from '../../utils/cli/types'

/**
 * Uses error-driven codepaths to recursively try introspecting the database
 * until able to do so:
 *
 * - If the database does not exist, create it.
 * - If the database is empty, create default tables.
 */
export const introspectDb = async (options: CLIOptions, apiDir: string) => {
  const spinner = ora('Introspecting database\n\n').start()

  const introspectDbProcess = Bun.spawnSync(
    [
      'bun',
      `--cwd=${options.cwd}`,
      'run',
      'introspect-db',
      '--',
      '--',
      `--schema`,
      `${apiDir}/schema.prisma`,
    ],
    {
      stdout: options.debug ? 'inherit' : 'ignore',
      cwd: options.cwd,
    },
  )

  const introspectError = introspectDbProcess.stderr.toString('utf-8')

  if (introspectDbProcess.exitCode !== 0) {
    const { errorCode } = await handlePrismaCliError({
      env: generateEnv(`${options.cwd}.env`),
      stderr: introspectError,
      commandOptions: options,
      childProcess: introspectDbProcess,
      onUnhandled: async () => {
        await prettyPrintError(
          ERROR_REFERENCE.system.UnableToIntrospectDatabase({
            originalError: introspectError,
            env: generateEnv(`${options.cwd}.env`),
          }),
        )
      },
    })

    if (!errorCode) return

    const errorResponses: {
      [key in PrismaErrorCodes]: () => Promise<void>
    } = {
      [PrismaErrorCodes.P1003]: async () => {
        await stdout(chalk.dim(`👾 Retrying introspection...`))
        await introspectDb(options, apiDir)
      },
      [PrismaErrorCodes.P4001]: async () => {
        await stdout(chalk.dim(`👾 Retrying introspection...`))
        await introspectDb(options, apiDir)
      },
    }

    if (errorResponses[errorCode]) return await errorResponses[errorCode]()
    return process.exit(1)
  }

  spinner.succeed(`Introspection complete`)
}
