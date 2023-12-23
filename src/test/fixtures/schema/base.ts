/**
 * The bare minimum schema.prisma necessary to
 * connect to a database for introspection
 */
export const BASE_PRISMA_SCHEMA = `generator client {
  provider        = "prisma-client-js"
  previewFeatures = ["multiSchema"]
}

generator typegraphql {
  provider           = "typegraphql-prisma"
  output             = "./src/generated/type-graphql"
  emitTranspiledCode = "true"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
  schemas  = ["innate", "public"]
}
`
