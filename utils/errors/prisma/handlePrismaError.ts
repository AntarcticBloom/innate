import stripAnsi from 'strip-ansi'
import { SyncSubprocess } from 'bun'
import { prettyPrintError } from '../console'
import { type OptionValues } from 'commander'
import { ERROR_REFERENCE } from '../reference'
import { PrismaErrorCodes, findPrismaErrorCode } from '.'
import { databaseConnection } from '../../../db/parseDatabaseConnectionStr'

type ErrorDrivenCodepath = {
  description: string
  run: (args: { commandOptions: OptionValues }) => Promise<void>
}

type ErrorDrivenCodepaths = {
  [key in PrismaErrorCodes]?: ErrorDrivenCodepath
}
const { databaseName } = databaseConnection

const errorDrivenCodepaths: ErrorDrivenCodepaths = {
  [PrismaErrorCodes.P1003]: {
    description: 'Database not found, create database',
    run: async ({ commandOptions: { debug } }) => {
      await Bun.write(
        Bun.stdout,
        `🤔 Database with name ${databaseName} not found.\n✏️ Creating database...\n`,
      )

      const createDbProcess = Bun.spawnSync(
        ['bun', 'run', 'dev:create-db', debug ? '--debug' : '--no-debug'],
        {
          stdout: debug ? 'inherit' : 'ignore',
        },
      )

      const originalError = createDbProcess.stderr.toString('utf-8')

      if (createDbProcess.exitCode !== 0) {
        handlePrismaCliError({
          stderr: originalError,
          commandOptions: { debug },
          childProcess: createDbProcess,
          onUnhandled: async () => {
            await prettyPrintError(
              ERROR_REFERENCE.system.UnableToCreateDatabase({ originalError }),
              debug,
            )
          },
        })
      }
    },
  },
  [PrismaErrorCodes.P4001]: {
    description: 'Database empty, create default tables',
    run: async ({ commandOptions: { debug } }) => {
      await Bun.write(
        Bun.stdout,
        `🤔 Database empty.\n✏️  Creating default tables...\n`,
      )
    },
  },
}

export const handlePrismaCliError = async ({
  stderr,
  onUnhandled,
  commandOptions,
}: {
  /** The error written to stderror by the Prisma CLI; may include ANSI */
  stderr: string
  /** The command options from the parent process (i.e., bun run dev) */
  commandOptions: any
  /** What to run when the appropriate error handler is not found or yet implemented */
  onUnhandled: () => Promise<void>
  /** The child process that failed */
  childProcess: SyncSubprocess<'inherit' | 'ignore', 'pipe'>
}) => {
  const ansiStrippedStderr = stripAnsi(stderr)
  const errorCode = findPrismaErrorCode(ansiStrippedStderr)
  const errorDrivenCodepath = errorCode
    ? errorDrivenCodepaths[errorCode]
    : undefined

  if (errorDrivenCodepath)
    return await errorDrivenCodepath.run({ commandOptions })

  return onUnhandled()
}
