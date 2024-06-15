import type { Sql } from 'postgres'
import pkg from '../../../../package.json'
import { DebugLevel } from '../../../utils'
import { stdout } from '../../../utils/cli/debug'

export const initModels = async ({
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
    await stdout('🗄️  Initializing innate tables...')

  try {
    await connection.unsafe(/* sql */ `
      SET search_path TO ${schema}; -- Execute on the system schema

      CREATE TABLE IF NOT EXISTS schema (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

        name TEXT NOT NULL UNIQUE,
        created_at TIMESTAMP NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMP NOT NULL DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS model (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        schema_id UUID REFERENCES Schema(id) ON DELETE CASCADE,

        name TEXT NOT NULL,
        ui_name TEXT NOT NULL,
        relations JSONB DEFAULT NULL, -- Type: /innate/src/types/Relation.ts

        created_at TIMESTAMP NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMP NOT NULL DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS field (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        model_id UUID REFERENCES Model(id) ON DELETE CASCADE,

        name TEXT NOT NULL,
        type TEXT NOT NULL,

        created_at TIMESTAMP NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMP NOT NULL DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS revoked_refresh_token (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

        value TEXT NOT NULL UNIQUE,
        actual_expiration TIMESTAMP NOT NULL DEFAULT NOW()
      );
  `)

    if (debugLevel <= DebugLevel.Info) stdout(`✅ Initialized innate tables!`)
  } catch (error) {
    console.log({ error })
  }
}
