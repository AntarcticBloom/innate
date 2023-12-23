import {
  ERROR_REFERENCE,
  prettyPrintError,
  parseDatabaseConnectionString,
} from '../../utils'
import postgres from 'postgres'
import pkg from '../../../package.json'
import { stdout } from '../utils/debug'
import { generateEnv } from '../../utils/generateEnv'
import { DebugLevel } from '../../utils/errors/types'

export const createDb = async ({
  debug,
  spawnLevel,
}: {
  debug: DebugLevel
  spawnLevel: number
}) => {
  const env = generateEnv()
  const databaseConnection = parseDatabaseConnectionString(env.DATABASE_URL)
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
      ERROR_REFERENCE.system.UnableToCreateDatabase({ originalError, env }),
    )
  }

  if (debug <= DebugLevel.Info)
    await stdout(`✅ Database created.\n✏️  Creating ${pkg.name} schema..`)

  /** Install uuid extension */
  const sql = postgres(env.DATABASE_URL, {
    onnotice: ({ message }) => {
      if (message === 'extension "uuid-ossp" already exists, skipping')
        stdout('🤔 Extension "uuid-ossp" already exists, skipping...')
    },
  })

  /** Add system-identifying schema */
  await sql.unsafe(`CREATE SCHEMA IF NOT EXISTS ${pkg.name};`)
  await sql.unsafe(`SET search_path TO ${pkg.name};`)

  if (debug <= DebugLevel.Info)
    await stdout(`✅ Schema created.\n✏️  Installing "uuid-ossp" extension...`)

  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`

  if (debug <= DebugLevel.Info)
    await stdout(`✅ "uuid-ossp" extension installed`)

  await sql.end()
}
