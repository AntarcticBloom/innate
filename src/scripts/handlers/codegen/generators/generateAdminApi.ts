import fs from 'fs'
import { join } from 'path'
import { type Sql } from 'postgres'
import { prependGeneratedFile } from '..'
import { introspectDb } from '@scripts/handlers'
import { generateClient } from './generateClient'
import { detectSchemata, type CLIOptions } from '@utils'
import { generatePrismaSchema } from '../../../../utils/generateSchemaPrisma'
import { annotatePrismaSchema, formatPrismaSchemaCase } from '../../../handlers'

export const generateAdminApi = async ({
  sql,
  options,
}: {
  sql: Sql<{}>
  options: CLIOptions
}) => {
  /**
   * Base the admin API off of the current innate.schema.is_newest_production_version.
   * This is initially set via a question posed by the CLI and is updated when breaking
   * changes are made to the model and a new API version is required.
   */

  const [{ name: newestProductionSchemaName }] = await sql<
    {
      name: string
    }[]
  >`SELECT name FROM innate.schema WHERE is_newest_production_version = TRUE`

  if (!newestProductionSchemaName) {
    await detectSchemata({ sql, options })
  }

  /**
   * Write Prisma schema for the admin API
   */

  let name = newestProductionSchemaName
  if (!name.startsWith('n8_v')) {
    name = `n8_v${name}`
  }

  const apiDirectory = join(import.meta.dir, '../../../../api/admin')

  generatePrismaSchema({
    dir: apiDirectory,
    version: newestProductionSchemaName,
  })

  await introspectDb(options, apiDirectory)
  await formatPrismaSchemaCase({
    ...options,
    schemaPath: `${apiDirectory}/schema.prisma`,
  })

  await annotatePrismaSchema({ schemaPath: `${apiDirectory}/schema.prisma` })
  await Promise.all([generateClient({ dir: apiDirectory }), codegen()])
}

async function codegen() {
  return new Promise<void>((resolve) => {
    const adminCodegenSrc = `${join(
      import.meta.dir,
      '../../../../../codegen/admin',
    )}`

    const adminCodegenDest = `${join(
      import.meta.dir,
      '../../../../api/admin/generated/innate',
    )}`

    fs.readdirSync(adminCodegenSrc).forEach((file) => {
      /** Copy files from the codegen folder to src/api/admin */
      fs.cpSync(`${adminCodegenSrc}/${file}`, `${adminCodegenDest}/${file}`, {
        recursive: true,
      })
    })

    /**
     * Prepend all copied files with a codegen header to prevent development
     * in the generated files.
     */
    fs.readdir(
      adminCodegenDest,
      { recursive: true, encoding: 'utf-8' },
      async (error, files) => {
        if (error) console.error({ error })

        await Promise.all(
          files.map((file) =>
            file.endsWith('.ts')
              ? prependGeneratedFile({ path: `${adminCodegenDest}/${file}` })
              : Promise.resolve(),
          ),
        )

        return resolve()
      },
    )
  })
}
