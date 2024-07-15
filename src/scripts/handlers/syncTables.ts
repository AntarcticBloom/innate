import ora from 'ora'
import { type Sql } from 'postgres'
import { Prisma, PrismaClient } from '@prisma/client'
import type { Relations } from '../../types/Relation'
import { syncSchemaAnnotations } from './initDb/syncSchemaAnnotations'

/**
 * Creates database records in schema.innate.models for all introspected models.
 * Used to power the UI.
 */
export const syncTables = async ({
  debug,
  sql,
}: {
  debug: number
  sql: Sql<{}>
}) => {
  const spinner = ora('Syncing models').start()

  const prisma = new PrismaClient()

  const dmmf = Prisma.dmmf.datamodel.models

  const schemata =
    await sql`SELECT schema_name FROM information_schema.schemata;`

  const systemExcludedSchemata = [
    'innate',
    'pg_toast',
    'pg_catalog',
    'information_schema',
  ]

  for await (const schema of schemata) {
    /**
     * Skip default PostgreSQL schemata
     */
    if (systemExcludedSchemata.includes(schema.schema_name)) continue

    /**
     * Upsert introspected schemata
     */

    const schemaRecord = await prisma.schema.upsert({
      where: {
        name: schema.schema_name,
      },
      create: {
        name: schema.schema_name,
      },
      update: {
        name: schema.schema_name,
      },
    })

    const introspectedTables =
      await sql`SELECT tablename FROM pg_tables WHERE schemaname=${schema.schema_name};`

    /**
     * Create new models detected from introspection that don't already exist as database records
     */

    for await (const table of introspectedTables) {
      const existingModel = await prisma.table.findFirst({
        where: {
          name: table.tablename,
          schemaId: schemaRecord.id,
        },
      })

      const dmmfModel = dmmf.find((model) => model.dbName === table.tablename)
      if (!dmmfModel) continue // This should never happen; all models present in the prisma dmmf should be present in the database

      const relations: Relations | undefined = dmmfModel.fields.reduce(
        (acc: Relations | undefined, fieldObj) => {
          const relations: Relations = {}

          if ('relationName' in fieldObj) {
            relations[fieldObj.name] = {
              isList: fieldObj.isList,
              tableName: fieldObj.name,
              /** Prisma's dmmf object always represents the relationship in the same way (i.e., bookToauthor), when it should be represented both ways depending on which model we're talking about (i.e., bookToauthor and authorTobook)  */
              relationName: (() => {
                const prismaRelationName = fieldObj.relationName
                const arr = (prismaRelationName as string).split('To')
                const [a, b] = arr

                if (a === fieldObj.name) return fieldObj.relationName as string
                return `${b}To${a}`
              })(),
              relationType: (() => {
                // Get the isList prop in THIS model
                const isList = fieldObj.isList

                // Find this model in the related model and check its isList prop
                const relatedModel = dmmf.find(
                  (model) => model.name === fieldObj.name,
                )

                const relatedField = relatedModel?.fields.find(
                  (field) => field.name === table.tablename,
                )

                const relatedIsList = relatedField?.isList

                switch (true) {
                  case isList && relatedIsList:
                    return 'manyToMany'
                  case isList && !relatedIsList:
                    return 'manyToOne'
                  case !isList && relatedIsList:
                    return 'oneToMany'
                  default:
                    return 'oneToOne'
                }
              })(),
              behaviorOnDelete: fieldObj.relationOnDelete ?? null,
              fk:
                (fieldObj.relationFromFields &&
                  fieldObj.relationFromFields[0]) ??
                null,
              pk:
                (fieldObj.relationToFields && fieldObj.relationToFields[0]) ??
                null,
            }
          }

          if (Object.keys(relations).length > 0) acc = relations
          return acc
        },
        undefined,
      )

      let modelRecord

      if (existingModel) {
        modelRecord = await prisma.table.update({
          where: {
            id: existingModel.id,
          },
          data: {
            relations,
            name: table.tablename,
            schemaId: schemaRecord.id,
            modelName: dmmfModel.name,
          },
        })
      } else {
        modelRecord = await prisma.table.create({
          data: {
            relations,
            name: table.tablename,
            schemaId: schemaRecord.id,
            modelName: dmmfModel.name,
          },
        })
      }

      const introspectedColumns = await sql`
          SELECT 
            column_name 
            AS columnName,
            udt_name
            AS dataType 
          FROM information_schema.columns 
          WHERE table_schema=${schema.schema_name}
            AND table_name=${table.tablename};
      `

      /**
       * Create new fields detected from introspection that don't already exist as database records
       */

      for await (const column of introspectedColumns) {
        const existingField = await prisma.field.findFirst({
          where: {
            name: table.tablename,
            tableId: schemaRecord.id,
          },
        })

        if (existingField) {
          await prisma.field.update({
            where: {
              id: existingField.id,
            },
            data: {
              type: column.datatype,
              name: column.columnname,
              tableId: existingField.id,
            },
          })
        } else {
          await prisma.field.create({
            data: {
              type: column.datatype,
              name: column.columnname,
              tableId: modelRecord.id,
            },
          })
        }
      }
    }
  }

  await syncSchemaAnnotations({
    prisma,
  })

  spinner.succeed('Models synced')
}
