import {
  ERROR_REFERENCE,
  prettyPrintError,
  PrismaErrorCodes,
  handlePrismaCliError,
} from '../../utils/errors'
import { stdout } from '../utils/debug'
import { generateEnv } from '../../utils'
import type { CLIOptions } from '../utils/types'
import { DebugLevel } from '../../utils/errors/types'

/**
 * Uses error-driven codepaths to recursively try introspecting the database
 * until able to do so:
 *
 * - If the database does not exist, create it.
 * - If the database is empty, create default tables.
 */
export const introspectDb = async (options: CLIOptions) => {
  const introspectDbProcess = Bun.spawnSync(
    ['bun', `--cwd=${options.cwd}`, 'run', 'introspect-db'], // TODO:
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
        await stdout(`👾 Retrying introspection...`)
        await introspectDb(options)
      },
      [PrismaErrorCodes.P4001]: async () => {
        await stdout(`👾 Retrying introspection...`)
        await introspectDb(options)
      },
    }

    if (errorResponses[errorCode]) return await errorResponses[errorCode]()
    return process.exit(1)
  }

  await stdout(`✅ Introspection complete!`)
}
