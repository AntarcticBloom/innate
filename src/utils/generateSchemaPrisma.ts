import fs from 'fs'

export const generatePrismaSchema = async ({
  dir,
  version,
}: {
  dir: string
  version: string
}) => {
  const schemaValue = templateSchema({
    version,
    clientOutputPath: `${dir}/prismaClient`,
    resolversOutputPath: `${dir}/generated/type-graphql`,
  })

  fs.writeFileSync(`${dir}/schema.prisma`, schemaValue)
}

function templateSchema({
  version,
  clientOutputPath,
  resolversOutputPath,
}: {
  version: string
  clientOutputPath: string
  resolversOutputPath: string
}) {
  return `generator client {
  provider        = "prisma-client-js"
  output          = "${clientOutputPath}"
  previewFeatures = ["multiSchema"]
}

generator typegraphql {
  provider           = "typegraphql-prisma"
  output             = "${resolversOutputPath}"
  emitTranspiledCode = "true"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
  schemas  = ["innate", "${version}"]
}
`
}
