export const hideFieldAnnotation = `/// @TypeGraphQL.omit(output: true, input: true)`

export const renameFieldAnnotation = ({ newName }: { newName: string }) =>
  `/// @TypeGraphQL.field("${newName}")`

export const defaultFieldAnnotations: {
  [tableName: string]: {
    fieldName: string
    annotation: string
  }[]
} = {
  User: [
    {
      fieldName: 'hash',
      annotation: hideFieldAnnotation,
    },
    {
      fieldName: 'salt',
      annotation: hideFieldAnnotation,
    },
    {
      fieldName: 'magicLinkToken',
      annotation: hideFieldAnnotation,
    },
  ],
  Administrator: [
    {
      fieldName: 'hash',
      annotation: hideFieldAnnotation,
    },
    {
      fieldName: 'salt',
      annotation: hideFieldAnnotation,
    },
    {
      fieldName: 'magicLinkToken',
      annotation: hideFieldAnnotation,
    },
  ],
}
