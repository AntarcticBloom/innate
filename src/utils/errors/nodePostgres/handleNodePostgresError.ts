import {
  generateEnv,
  ERROR_REFERENCE,
  prettyPrintError,
  NodePostgresErrorCodes,
  parseDatabaseConnectionString,
} from '../../'
import path from 'path'
import chalk from 'chalk'
import { stdout } from '@cli'
import stripAnsi from 'strip-ansi'
import { SyncSubprocess } from 'bun'
import { DebugLevel } from '../types'
import { type Env } from '../../generateEnv'
import { CLIOptions } from '../../cli/types'
import { type OptionValues } from 'commander'

type ErrorDrivenCodepath = {
  description: string
  run: (args: { commandOptions: OptionValues }) => Promise<void>
}

type ErrorDrivenCodepaths = {
  [key in NodePostgresErrorCodes]?: ErrorDrivenCodepath
}

const errorDrivenCodepaths: ErrorDrivenCodepaths = {
  [NodePostgresErrorCodes['3D000']]: {
    description: 'Database not found, create database',
    run: async ({ commandOptions: { debug, spawnLevel, cwd, spinner } }) => {
      const environment = process.env.NODE_ENV || 'development'

      const env = generateEnv(
        path.join(import.meta.dir, `../../../../.env.${environment}`),
      )

      const { databaseName } = parseDatabaseConnectionString(env.DATABASE_URL)

      const createDbProcess = Bun.spawnSync(
        [
          'bun',
          `--cwd=${cwd}`,
          'run',
          'create-db',
          `--debug=${debug}`,
          `--spawn-level=${spawnLevel + 1}`,
        ],
        {
          stdout: debug ? 'inherit' : 'ignore',
        },
      )

      const originalError = createDbProcess.stderr.toString('utf-8')

      if (createDbProcess.exitCode !== 0) {
        handleNodePostgresCliError({
          env,
          stderr: originalError,
          errorCode: NodePostgresErrorCodes['3D000'],
          commandOptions: { debug, spawnLevel, cwd, spinner },
          childProcess: createDbProcess,
          onUnhandled: async () => {
            await prettyPrintError(
              ERROR_REFERENCE.system.UnableToCreateDatabase({
                originalError,
                env,
              }),
            )
          },
        })
      }
    },
  },
  [NodePostgresErrorCodes['42P01']]: {
    description: 'Database empty, create default tables',
    run: async ({ commandOptions: { debug, spawnLevel, cwd, spinner } }) => {
      await stdout(
        chalk.dim(`🤔 Database empty.\n✏️  Creating innate tables...`),
      )

      const environment = process.env.NODE_ENV || 'development'

      const env = generateEnv(
        path.join(import.meta.dir, `../../../../.env.${environment}`),
      )

      const initDbProcess = Bun.spawnSync(
        [
          'bun',
          `--cwd=${cwd}`,
          'run',
          'init-db',
          `--debug=${debug}`,
          `--spawn-level=${spawnLevel + 1}`,
        ],
        {
          stdout: debug ? 'inherit' : 'ignore',
        },
      )

      const originalError = initDbProcess.stderr.toString('utf-8')

      if (initDbProcess.exitCode !== 0) {
        await handleNodePostgresCliError({
          env,
          stderr: originalError,
          childProcess: initDbProcess,
          errorCode: NodePostgresErrorCodes['42P01'],
          commandOptions: { debug, spawnLevel, cwd, spinner },
          onUnhandled: async () => {
            await prettyPrintError(
              ERROR_REFERENCE.system.UnableToInitializeDatabase({
                originalError,
                env,
              }),
            )
          },
        })
      }
    },
  },
}

export const handleNodePostgresCliError = async ({
  env,
  stderr,
  errorCode,
  onUnhandled,
  commandOptions,
}: {
  errorCode: NodePostgresErrorCodes
  /** The error written to stderror by the NodePostgres CLI; may include ANSI */
  stderr: string
  /** The command options from the parent process (i.e., bun run dev) */
  commandOptions: CLIOptions
  /** What to run when the appropriate error handler is not found or yet implemented */
  onUnhandled: () => Promise<void>
  /** The child process that failed */
  childProcess?: SyncSubprocess<'inherit' | 'ignore', 'pipe'>
  /** The environment variables the process ran with */
  env: Env
  /** The error code supplied by porsager/postgres */
}) => {
  const ansiStrippedStderr = stripAnsi(stderr)

  const errorDrivenCodepath = errorCode
    ? errorDrivenCodepaths[errorCode]
    : undefined

  if (errorCode && commandOptions.debug < DebugLevel.Info)
    prettyPrintError(
      ERROR_REFERENCE.nodePostgres[errorCode]({
        env,
        originalError: ansiStrippedStderr,
      }),
    )

  if (errorDrivenCodepath) {
    await errorDrivenCodepath.run({ commandOptions })
  } else {
    await onUnhandled()
  }

  return {
    errorCode,
    ansiStrippedStderr,
    errorDrivenCodepath,
  }
}
