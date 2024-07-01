export const modelNameAnnotation = (name: string) =>
  `/// @@TypeGraphQL.type(name: "${name}")`

export const defaultModelAnnotations = {
  user: modelNameAnnotation('User'),
  table: modelNameAnnotation('Table'),
  field: modelNameAnnotation('Field'),
  schema: modelNameAnnotation('Schema'),
  administrator: modelNameAnnotation('Administrator'),
  field_annotation: modelNameAnnotation('FieldAnnotation'),
  model_annotation: modelNameAnnotation('ModelAnnotation'),
  revoked_refresh_token: modelNameAnnotation('RevokedRefreshToken'),
}
