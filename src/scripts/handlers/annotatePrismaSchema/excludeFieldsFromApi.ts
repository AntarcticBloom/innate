import fs from 'node:fs'
import path from 'node:path'

export const excludeFieldsFromApi = async () => {
  const hideFieldAnnotation = `/// @TypeGraphQL.omit(output: true)`

  const innateFields = {
    user: [
      {
        fieldName: 'hash',
        annotation: hideFieldAnnotation,
      },
      { fieldName: 'salt', annotation: hideFieldAnnotation },
    ],
    administrator: [
      {
        fieldName: 'hash',
        annotation: hideFieldAnnotation,
      },
      { fieldName: 'salt', annotation: hideFieldAnnotation },
    ],
  }

  const schemaPath = path.join(import.meta.dir, '../../../../schema.prisma')

  let schemaValue = fs.readFileSync(schemaPath, 'utf-8')

  for (const [modelName, fields] of Object.entries(innateFields)) {
    for (const [_, { fieldName, annotation }] of Object.entries(fields)) {
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

      /** Do not make modifications if annotation already exists, immediately preceding the field declaration */
      if (
        annotationAlreadyExists({ annotation, annotatedFieldLine, modelString })
      )
        continue

      const newModelValue = `${beforeAnnotation}  ${annotation}\n${annotatedFieldLine}${afterAnnotation}`

      schemaValue = `${beforeModel}${newModelValue}${afterModel}`
    }
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
    `${annotation
      .replace('(', '\\(')
      .replace(')', '\\)')
      .replace('.', '\\.')}\\n${annotatedFieldLine}`,
  )
  const annotationMatches = modelString.match(annotationRegEx)

  return !!annotationMatches
}
