import {
  generateEnv,
  ERROR_REFERENCE,
  prettyPrintError,
  PrismaErrorCodes,
  findPrismaErrorCode,
  parseDatabaseConnectionString,
} from '../../'
import path from 'path'
import stripAnsi from 'strip-ansi'
import { SyncSubprocess } from 'bun'
import { DebugLevel } from '../types'
import pkg from '../../../../package.json'
import { type Env } from '../../generateEnv'
import { type OptionValues } from 'commander'
import { stdout } from '../../../scripts/utils/debug'
import { CLIOptions } from '../../../scripts/utils/types'

type ErrorDrivenCodepath = {
  description: string
  run: (args: { commandOptions: OptionValues }) => Promise<void>
}

type ErrorDrivenCodepaths = {
  [key in PrismaErrorCodes]?: ErrorDrivenCodepath
}

const errorDrivenCodepaths: ErrorDrivenCodepaths = {
  [PrismaErrorCodes.P1003]: {
    description: 'Database not found, create database',
    run: async ({ commandOptions: { debug, spawnLevel, cwd } }) => {
      const env = generateEnv(path.join(import.meta.dir, '../../../../.env'))
      const { databaseName } = parseDatabaseConnectionString(env.DATABASE_URL)

      await stdout(
        `🤔 Database with name ${databaseName} not found.\n✏️  Creating database...`,
      )

      const createDbProcess = Bun.spawnSync(
        [
          'bun',
          `--cwd=${cwd}`,
          'run',
          'create-db',
          debug ? '--debug' : '--no-debug',
          `--spawn-level=${spawnLevel + 1}`,
        ],
        {
          stdout: debug ? 'inherit' : 'ignore',
        },
      )

      const originalError = createDbProcess.stderr.toString('utf-8')

      if (createDbProcess.exitCode !== 0) {
        handlePrismaCliError({
          env,
          stderr: originalError,
          commandOptions: { debug, spawnLevel, cwd },
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
  [PrismaErrorCodes.P4001]: {
    description: 'Database empty, create default tables',
    run: async ({ commandOptions: { debug, spawnLevel, cwd } }) => {
      await stdout(`🤔 Database empty.\n✏️  Creating ${pkg.name} tables...`)

      const env = generateEnv(path.join(import.meta.dir, '../../../../.env'))

      const initDbProcess = Bun.spawnSync(
        [
          'bun',
          `--cwd=${cwd}`,
          'run',
          'init-db',
          debug ? '--debug' : '--no-debug',
          `--spawn-level=${spawnLevel + 1}`,
        ],
        {
          stdout: debug ? 'inherit' : 'ignore',
        },
      )

      const originalError = initDbProcess.stderr.toString('utf-8')

      if (initDbProcess.exitCode !== 0) {
        await handlePrismaCliError({
          env,
          stderr: originalError,
          commandOptions: { debug, spawnLevel, cwd },
          childProcess: initDbProcess,
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

export const handlePrismaCliError = async ({
  env,
  stderr,
  onUnhandled,
  commandOptions,
}: {
  /** The error written to stderror by the Prisma CLI; may include ANSI */
  stderr: string
  /** The command options from the parent process (i.e., bun run dev) */
  commandOptions: CLIOptions
  /** What to run when the appropriate error handler is not found or yet implemented */
  onUnhandled: () => Promise<void>
  /** The child process that failed */
  childProcess: SyncSubprocess<'inherit' | 'ignore', 'pipe'>
  /** The environment variables the process ran with */
  env: Env
}) => {
  const ansiStrippedStderr = stripAnsi(stderr)
  const errorCode = findPrismaErrorCode(ansiStrippedStderr)
  const errorDrivenCodepath = errorCode
    ? errorDrivenCodepaths[errorCode]
    : undefined

  if (errorCode && commandOptions.debug < DebugLevel.Info)
    prettyPrintError(
      ERROR_REFERENCE.prisma[errorCode]({
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
