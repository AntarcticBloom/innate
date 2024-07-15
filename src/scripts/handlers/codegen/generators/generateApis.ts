import { type Sql } from 'postgres'
import type { CLIOptions } from '@utils'
import { generateDownstreamApi } from '..'

export const generateApis = async ({
  sql,
  options,
}: {
  options: CLIOptions
  sql: Sql<{}>
}) => {
  /**
   * Get all tracked schemata. We don't have PrismaClient available at this point, so a raw query is necessary;
   * the detectSchemata step should have already been run, so we can assume that the innate.schema table exists.
   */
  const schemata = await sql<
    { name: string }[]
  >`SELECT name FROM innate.schema WHERE tracked = true;`

  await Promise.all(
    schemata.map(async ({ name: schemaName }) =>
      generateDownstreamApi({
        options,
        schemaName,
        downstreamPath: schemaName,
      }),
    ),
  )
}
