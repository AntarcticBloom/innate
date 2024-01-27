import { Prisma } from '@prisma/client'

export type Relations = {
  [key: string]: Relation
}

export type RelationType = 'oneToOne' | 'oneToMany' | 'manyToOne' | 'manyToMany'

export type Relation = {
  isList: boolean
  tableName: string
  relationName: string
  relationType: RelationType

  fk: string | null // dmmf.model.fields.relationFromFields
  pk: string | null // dmmf.model.fields.relationToFields

  behaviorOnDelete: string | null
}
