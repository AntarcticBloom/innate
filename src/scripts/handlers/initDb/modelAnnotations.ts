import type { Sql } from 'postgres'
import pkg from '../../../../package.json'
import { DebugLevel } from '../../../utils'
import { stdout } from '../../../utils/cli/debug'
import { defaultModelAnnotations } from '../../../config'

export const initModelAnnotations = async ({
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
    await stdout('📝 Initializing ModelAnnotations table...')

  try {
    await connection.unsafe(/* sql */ `
      SET search_path TO ${schema}; -- Execute on the system schema

      CREATE TABLE IF NOT EXISTS "model_annotation" (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

        table_id UUID REFERENCES innate.table(id) ON DELETE CASCADE,
        table_name TEXT NOT NULL,

        schema_id UUID REFERENCES schema(id) ON DELETE CASCADE,

        annotation TEXT NOT NULL,

        created_at TIMESTAMP NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMP NOT NULL DEFAULT NOW()
      );
  `)

    for await (const [modelName, annotation] of Object.entries(
      defaultModelAnnotations,
    )) {
      if (
        await annotationExists({
          modelName,
          annotation,
          connection,
        })
      )
        continue

      await connection.unsafe(`
        INSERT INTO model_annotation ("table_name", "annotation")
        VALUES ('${modelName}', '${annotation}');
    `)
    }

    if (debugLevel <= DebugLevel.Info)
      stdout(`✅ Initialized ModelAnnotations table in ${schema} schema`)
  } catch (error) {
    console.log({ error })
  }
}

async function annotationExists({
  modelName,
  annotation,
  connection,
}: {
  modelName: string
  annotation: string
  connection: Sql<{}>
}) {
  const existingAnnotations = await connection.unsafe(/* sql */ `
SELECT id FROM field_annotation WHERE table_name = '${modelName}' AND annotation = '${annotation}';
`)

  return existingAnnotations.length > 0
}
