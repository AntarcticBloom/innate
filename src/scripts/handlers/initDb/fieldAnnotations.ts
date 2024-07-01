import type { Sql } from 'postgres'
import pkg from '../../../../package.json'
import { DebugLevel } from '../../../utils'
import { stdout } from '../../../utils/cli/debug'
import { defaultFieldAnnotations } from '../../../config'

export const initFieldAnnotations = async ({
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
    await stdout('📝 Initializing FieldAnnotations table...')

  try {
    await connection.unsafe(/* sql */ `
      SET search_path TO ${schema}; -- Execute on the system schema

      CREATE TABLE IF NOT EXISTS "field_annotation" (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

        table_id UUID REFERENCES innate.table(id) ON DELETE CASCADE,
        model_name TEXT NOT NULL,

        field_id UUID REFERENCES field(id) ON DELETE CASCADE,
        field_name TEXT NOT NULL,

        annotation TEXT NOT NULL,

        created_at TIMESTAMP NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMP NOT NULL DEFAULT NOW()
      );
  `)

    for await (const [modelName, fieldData] of Object.entries(
      defaultFieldAnnotations,
    )) {
      for await (const { fieldName, annotation } of fieldData) {
        if (
          await annotationExists({
            modelName,
            fieldName,
            annotation,
            connection,
          })
        )
          continue

        await connection.unsafe(`
          INSERT INTO field_annotation ("model_name", "field_name", "annotation")
          VALUES ('${modelName}', '${fieldName}', '${annotation}');
        `)
      }
    }

    if (debugLevel <= DebugLevel.Info)
      stdout(`✅ Initialized FieldAnnotations table in ${schema} schema`)
  } catch (error) {
    console.log({ error })
  }
}

async function annotationExists({
  modelName,
  fieldName,
  annotation,
  connection,
}: {
  modelName: string
  fieldName: string
  annotation: string
  connection: Sql<{}>
}) {
  const existingAnnotations = await connection.unsafe(/* sql */ `
    SELECT id FROM field_annotation WHERE model_name = '${modelName}' AND field_name = '${fieldName}' AND annotation = '${annotation}';
  `)

  return existingAnnotations.length > 0
}
