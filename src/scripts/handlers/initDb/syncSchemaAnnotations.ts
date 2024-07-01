import { PrismaClient } from '@prisma/client'

/**
 * A chicken/egg problem exists between annotations in the schema.prisma and database records that represent them.
 * Default annotations are created in the database from default configuration, but at that point, only the model and
 * field names are known and database field and model records have not been created yet. This means that the annotations
 * in the database are not associated with the models and fields they should be associated with. These relations are
 * important for the UI to know which annotations belong to which models and fields.
 */
export const syncSchemaAnnotations = async ({
  prisma,
}: {
  prisma: PrismaClient
}) => {
  await syncFieldAnnotations({ prisma })
}

async function syncFieldAnnotations({ prisma }: { prisma: PrismaClient }) {
  const allFieldAnnotations = await prisma.fieldAnnotation.findMany({
    where: {
      OR: [
        {
          fieldId: {
            equals: null,
          },
        },
        {
          tableId: {
            equals: null,
          },
        },
      ],
    },
  })

  for await (const annotation of allFieldAnnotations) {
    const table = await prisma.table.findFirst({
      where: {
        modelName: annotation.modelName,
      },
    })

    if (!table) continue

    const field = await prisma.field.findFirst({
      where: {
        tableId: table.id,
      },
    })

    if (!field) continue

    await prisma.fieldAnnotation.update({
      where: {
        id: annotation.id,
      },
      data: {
        tableId: table.id,
        fieldId: field.id,
      },
    })
  }
}
