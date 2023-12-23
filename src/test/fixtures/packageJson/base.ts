export const BASE_PACKAGE_JSON = /* JSON */ `
{
  "name": "innate",
  "version": "0.0.1",
  "module": "index.ts",
  "type": "module",
  "prisma": {
    "schema": "./schema.prisma"
  },
  "devDependencies": {
    "bun-types": "latest",
    "commander": "^11.1.0",
    "concurrently": "^8.2.2"
  },
  "peerDependencies": {
    "typescript": "^5.0.0"
  },
  "scripts": {
    "dev": "dotenv -e .env -- bun src/scripts/dev.ts",
    "introspect-db": "dotenv -e .env -- ./node_modules/.bin/prisma db pull --schema=./schema.prisma",
    "create-db": "bun src/scripts/createDb.ts",
    "init-db": "bun src/scripts/initDb.ts",
    "prisma:generate": "dotenv -e .env prisma generate"
  },
  "dependencies": {
    "@prisma/client": "5.7.0",
    "chalk": "^5.3.0",
    "dotenv": "^16.3.1",
    "postgres": "^3.4.3",
    "prisma": "^5.7.0",
    "strip-ansi": "^7.1.0"
  }
}
`
