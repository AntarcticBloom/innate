import chalk from 'chalk'
import type { Sql } from 'postgres'
import pkg from '../../../../package.json'
import { DebugLevel } from '../../../utils'
import { stdout } from '../../../utils/cli/debug'

export const initModels = async ({
  debugLevel,
  connection,
  schema = pkg.name,
}: {
  schema: string
  connection: Sql<{}>
  debugLevel: DebugLevel
}) => {
  if (debugLevel <= DebugLevel.Info)
    await stdout(chalk.dim('🗄️ Initializing innate tables...'))

  try {
    await connection.unsafe(/* sql */ `
      SET search_path TO ${schema}; -- Execute on the system schema

      CREATE TABLE IF NOT EXISTS schema (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

        name TEXT NOT NULL UNIQUE,

        tracked BOOLEAN DEFAULT NULL,
        baseline_version_of_schema UUID DEFAULT NULL,
        is_newest_production_version BOOLEAN DEFAULT FALSE,


        created_at TIMESTAMP NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMP NOT NULL DEFAULT NOW()

      );

      -- Ensure that only one row in the table has the column "is_newest_production_version" set to true
      CREATE UNIQUE INDEX IF NOT EXISTS only_one_row_with_column_true_uix
        ON schema (is_newest_production_version) 
        WHERE (is_newest_production_version); -- Where is_newest_production_version is true


      CREATE TABLE IF NOT EXISTS innate.table (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        schema_id UUID REFERENCES Schema(id) ON DELETE CASCADE,

        name TEXT NOT NULL, -- The name of the table in the database
        model_name TEXT NOT NULL, -- The name of the model in the Prisma schema / GraphQL Schema
        relations JSONB DEFAULT NULL, -- Type: /innate/src/types/Relation.ts

        created_at TIMESTAMP NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMP NOT NULL DEFAULT NOW()
      );


      CREATE TABLE IF NOT EXISTS field (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        table_id UUID REFERENCES innate.table(id) ON DELETE CASCADE,

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

    if (debugLevel <= DebugLevel.Info)
      stdout(chalk.dim(`✅ Initialized innate tables`))
  } catch (error) {
    console.log({ error })
  }
}
