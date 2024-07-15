import chalk from 'chalk'
import type { Sql } from 'postgres'
import pkg from '../../../../package.json'
import { DebugLevel } from '../../../utils'
import { stdout } from '../../../utils/cli/debug'

export const initAdministrators = async ({
  debugLevel,
  spawnLevel,
  connection,
  schema = pkg.name,
}: {
  schema: string
  spawnLevel: number
  connection: Sql<{}>
  debugLevel: DebugLevel
}) => {
  if (debugLevel <= DebugLevel.Info)
    await stdout(chalk.dim('👑 Initializing Administrators table...'))

  try {
    await connection.unsafe(/* sql */ `
      SET search_path TO ${schema}; -- Execute on the system schema

      CREATE TABLE IF NOT EXISTS "administrator" (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        hash TEXT NOT NULL,
        salt TEXT NOT NULL,
        magic_link_token TEXT,
        email TEXT NOT NULL UNIQUE,
        banned BOOLEAN DEFAULT FALSE,
        username TEXT NOT NULL UNIQUE,
        verified BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMP NOT NULL DEFAULT NOW()
      );
  `)

    if (debugLevel <= DebugLevel.Info)
      stdout(
        chalk.dim(`✅ Initialized Administrators table in ${schema} schema`),
      )
  } catch (error) {
    console.log({ error })
  }
}
