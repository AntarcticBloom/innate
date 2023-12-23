import postgres from 'postgres'
import { describe, it, expect } from 'bun:test'
import { generateEnv, parseDatabaseConnectionString } from '../utils'
import { waitForHealthcheck } from '../test/utils/waitForHealthcheck'
import { killServerProcess } from '../test/utils/killServerProcess'
import { spawnExampleProcess } from '../test/utils/spawnExampleProcess'
import path from 'path'

describe('`dev` package script', () => {
  it('creates a database with the name specified in the .env, if it does not yet exist', async () => {
    const debug = Boolean(import.meta.env['DEBUG'])

    /**
     * Arrange
     *
     * Ensure that the database specified in the .env does not exist.
     */

    const env = generateEnv(path.resolve('../example/.env'))
    const { databaseName } = parseDatabaseConnectionString(env.DATABASE_URL)

    /**
     * Note: a query with the `postgres` lib is not possible here, and
     * the PostgreSQL-shipped `dropdb` command is used instead. This is
     * because `postgres` requires a connection to the database. PostgreSQL
     * does not allow a database to be dropped while an active connection
     * exists.
     */
    await spawnExampleProcess(['dropdb', databaseName]).exited

    /**
     * Act
     *
     * Run the `dev` script.
     */

    const devProcess = spawnExampleProcess(
      [
        'bun',
        `--cwd=${path.join(import.meta.dir, '../../../example')}`,
        'run',
        'dev',
        debug ? '--debug=0' : '--debug=2',
        '--spawn-level=0',
      ],
      {
        stdout: 'inherit',
      },
    )

    await waitForHealthcheck()

    devProcess.kill()
    await killServerProcess()

    /** Connect to the database */
    const sql = postgres(env.DATABASE_URL)

    /**
     * Assert
     *
     * Ensure that the database specified in the .env now exists.
     */

    const result =
      await sql`SELECT datname FROM pg_catalog.pg_database WHERE lower(datname) = lower(${databaseName})`

    expect(result.length).toEqual(1)
    expect(result[0].datname).toEqual(databaseName)
  }, 100000)
})
