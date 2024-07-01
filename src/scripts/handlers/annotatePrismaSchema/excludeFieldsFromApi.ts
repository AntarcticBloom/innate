import fs from 'node:fs'
import path from 'node:path'
import pkg from '../../../../package.json'
import { generateEnv } from '../../../utils'
import postgres, { type Sql } from 'postgres'

export const excludeFieldsFromApi = async () => {
  const env = generateEnv()
  const sql = postgres(env.DATABASE_URL)
  const schemaPath = path.join(import.meta.dir, '../../../../schema.prisma')

  let schemaValue = fs.readFileSync(schemaPath, 'utf-8')

  const annotations = await sql.unsafe(/* sql */ `
    SELECT * FROM "${pkg.name}".field_annotation;
  `)

  for (const {
    model_name: modelName,
    field_name: fieldName,
    annotation,
  } of annotations) {
    const [beforeModel, modelString, afterModel] = captureModel({
      modelName,
      schemaValue,
    })

    const [beforeAnnotation, annotatedFieldLine, afterAnnotation] =
      captureField({
        fieldName,
        modelName,
        modelString,
      })

    const shouldNotDuplicateAnnotation = annotationAlreadyExists({
      annotation,
      annotatedFieldLine,
      modelString,
    })

    if (shouldNotDuplicateAnnotation) continue

    const newModelValue = `${beforeAnnotation}  ${annotation}\n${annotatedFieldLine}${afterAnnotation}`

    schemaValue = `${beforeModel}${newModelValue}${afterModel}`
  }

  fs.writeFileSync(schemaPath, schemaValue)
}

function captureModel({
  modelName,
  schemaValue,
}: {
  modelName: string
  schemaValue: string
}): string[] {
  const modelSearchRegEx = new RegExp(`model ${modelName} {[^}]*}`)
  const modelStringMatches = schemaValue.match(modelSearchRegEx)

  if (!modelStringMatches)
    throw new Error(`Model ${modelName} not found in schema`)

  const modelString = modelStringMatches[0]

  const [beforeModel, afterModel] = schemaValue.split(modelString)

  return [beforeModel, modelString, afterModel]
}

function captureField({
  fieldName,
  modelName,
  modelString,
}: {
  fieldName: string
  modelName: string
  modelString: string
}): string[] {
  /** Captures the entire line of field because it does not match \n char; no need to know datatype */
  const annotatedFieldLineRegEx = new RegExp(`\\s\\s${fieldName}.*`)

  const annotatedFieldLineMatches = modelString.match(annotatedFieldLineRegEx)

  if (!annotatedFieldLineMatches)
    throw new Error(`Field ${fieldName} not found in model ${modelName}`)

  const annotatedFieldLine = annotatedFieldLineMatches[0]

  const [beforeAnnotation, afterAnnotation] =
    modelString.split(annotatedFieldLine)

  return [beforeAnnotation, annotatedFieldLine, afterAnnotation]
}

function annotationAlreadyExists({
  annotation,
  modelString,
  annotatedFieldLine,
}: {
  annotation: string
  modelString: string
  annotatedFieldLine: string
}): boolean {
  const annotationRegEx = new RegExp(
    `${escapeRegExpCharacters(annotation)}\\n${escapeRegExpCharacters(
      annotatedFieldLine,
    )}`,
  )

  const annotationMatches = modelString.match(annotationRegEx)

  return !!annotationMatches
}

function escapeRegExpCharacters(string: string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}
