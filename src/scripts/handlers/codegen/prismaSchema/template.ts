export const prismaSchemaTemplate = ({
  schemaName,
  outputPath,
}: {
  /** When the user utilized schemata prior to using innate, there may be user-created schemata other than those version managed by Innate, but this is most likely an Innate-managed version number in the format `n8_v${semver}`. */
  schemaName: string
  /** Relative path indicating where the generated prisma-typegraphql code is written */
  outputPath: string
}) => `generator client {
  provider        = "prisma-client-js"
  previewFeatures = ["multiSchema"]
}

generator typegraphql {
  provider           = "typegraphql-prisma"
  output             = "${outputPath}"
  emitTranspiledCode = "true"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
  schemas  = ["innate", "${schemaName}"]
}`
