import {
  CLIOptions,
  ERROR_REFERENCE,
  prettyPrintError,
  parseDatabaseConnectionString,
} from '../../utils'
import postgres from 'postgres'
import pkg from '../../../package.json'
import { ENV } from '../../utils/generateEnv'
import { stdout } from '../../utils/cli/debug'
import { DebugLevel } from '../../utils/errors/types'
import chalk from 'chalk'

export const createDb = async ({
  debug,
  options,
  spawnLevel,
}: {
  debug: DebugLevel
  spawnLevel: number
  options: CLIOptions
}) => {
  const databaseConnection = parseDatabaseConnectionString(ENV.DATABASE_URL)
  const { databaseName, username, host, port } = databaseConnection

  /** Create the database */
  const createDbProcess = Bun.spawnSync([
    'createdb',
    `--host=${host}`,
    `--port=${port}`,
    `--username=${username}`,
    `${databaseName}`,
  ])

  /** Handle errors if on the progenitor process */
  if (createDbProcess.exitCode !== 0 && spawnLevel === 0) {
    const originalError = createDbProcess.stderr.toString('utf-8')

    await prettyPrintError(
      ERROR_REFERENCE.system.UnableToCreateDatabase({
        env: ENV,
        originalError,
      }),
    )
  }

  // await stdout(chalk.dim(`✅ Database created.`))
  // await stdout(chalk.dim(`✏️ Creating \`innate\` schema...`))

  /** Install uuid extension */
  const sql = postgres(ENV.DATABASE_URL, {
    onnotice: ({ message }) => {
      if (message === 'extension "uuid-ossp" already exists, skipping')
        stdout(
          chalk.dim('🤔 Extension "uuid-ossp" already exists, skipping...'),
        )
    },
  })

  /** Add system-identifying schema */
  await sql.unsafe(`CREATE SCHEMA IF NOT EXISTS innate;`)
  await sql.unsafe(`SET search_path TO innate;`)

  // await stdout(chalk.dim(`✅ Schema created.`))
  // await stdout(chalk.dim(`✏️ Installing "uuid-ossp" extension...`))

  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`

  // if (debug <= DebugLevel.Info)
  //   await stdout(chalk.dim(`✅ "uuid-ossp" extension installed`))

  await sql.end()
  options.spinner.stop()
}
