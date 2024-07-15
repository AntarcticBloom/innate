import fs from 'node:fs'
import path from 'node:path'
import postgres from 'postgres'
import { ENV } from '../../../utils'
import pkg from '../../../../package.json'

export const annotateModels = async () => {
  const sql = postgres(ENV.DATABASE_URL)
  const schemaPath = path.join(import.meta.dir, '../../../../schema.prisma')

  let schemaValue = fs.readFileSync(schemaPath, 'utf-8')

  const annotations = await sql.unsafe(/* sql */ `
    SELECT * FROM "${pkg.name}".model_annotation;
  `)

  for (const { table_name: modelName, annotation } of annotations) {
    const [beforeModel, annotatedModelLine, afterModel] = captureModelLine({
      modelName,
      schemaValue,
    })

    const shouldNotDuplicateAnnotation = annotationAlreadyExists({
      annotation,
      annotatedModelLine,
      stringToSearch: `${beforeModel}${annotatedModelLine}`, // We're interested in whether the before string contains the annotation, so we pass the before string and the annotated model line
    })

    if (shouldNotDuplicateAnnotation) continue

    const newModelLineValue = `\n${annotation}\n${annotatedModelLine}`

    schemaValue = `${beforeModel}${newModelLineValue}${afterModel}`
  }

  fs.writeFileSync(schemaPath, schemaValue)
}

function captureModelLine({
  modelName,
  schemaValue,
}: {
  modelName: string
  schemaValue: string
}): string[] {
  const modelSearchRegEx = new RegExp(`model ${modelName} {`)
  const modelStringMatches = schemaValue.match(modelSearchRegEx)

  if (!modelStringMatches)
    throw new Error(`Model ${modelName} not found in schema`)

  const modelString = modelStringMatches[0]

  const [beforeModel, afterModel] = schemaValue.split(modelString)

  return [beforeModel, modelString, afterModel]
}

function annotationAlreadyExists({
  annotation,
  stringToSearch,
  annotatedModelLine,
}: {
  annotation: string
  stringToSearch: string
  annotatedModelLine: string
}): boolean {
  const annotationRegEx = new RegExp(
    `${annotation
      .replace('(', '\\(')
      .replace(')', '\\)')
      .replace('.', '\\.')}\\n${annotatedModelLine}`,
  )

  const annotationMatches = stringToSearch.match(annotationRegEx)

  return !!annotationMatches
}
