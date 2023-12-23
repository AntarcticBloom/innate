import type { Sql } from 'postgres'
import pkg from '../../../../package.json'
import { stdout } from '../../utils/debug'

export const initAdministrators = async ({
  debug,
  spawnLevel,
  connection,
  schema = pkg.name,
}: {
  debug: boolean
  schema: string
  spawnLevel: number
  connection: Sql<{}>
}) => {
  if (debug) await stdout('👑 Initializing administrators table...')

  try {
    await connection.unsafe(/* sql */ `
      SET search_path TO ${schema}; -- Execute on the system schema

      CREATE TABLE IF NOT EXISTS administrators (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        
        password TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        username TEXT NOT NULL UNIQUE,
        created_at TIMESTAMP NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMP NOT NULL DEFAULT NOW()
      );
  `)

    if (debug) stdout(`✅ Initialized administrator table in ${schema} schema`)
  } catch (error) {
    console.log({ error })
  }
}
