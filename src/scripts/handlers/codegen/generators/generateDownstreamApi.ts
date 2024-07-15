import ora from 'ora'
import fs from 'node:fs'
import { join } from 'node:path'
import { prependGeneratedFile } from '..'
import { introspectDb } from '@scripts/handlers'
import { generateClient } from './generateClient'
import { CLIOptions } from '../../../../utils/cli'
import { prismaSchemaTemplate } from '../prismaSchema/template'
import { annotatePrismaSchema, formatPrismaSchemaCase } from '../../../handlers'

export const generateDownstreamApi = async ({
  options,
  schemaName,
  downstreamPath,
}: {
  options: CLIOptions
  /** The PostgreSQL schema for which to generate an API */
  schemaName: string
  /** The path within the downstream directory, usually a semver version in format `n8_v${semver}`; do not include the project path--only the path from src/api/downstream (i.e., v1.0.0) */
  downstreamPath: string
}) => {
  const spinner = ora(`Generating Downstream API ${downstreamPath}`).start()

  const TYPEGRAPHQL_CODEGEN_PATH = '/generated/type-graphql'

  /** Make a directory for the downstream API */
  fs.mkdirSync(
    join(
      import.meta.dir,
      `../../../../../src/api/downstream/${downstreamPath}/${TYPEGRAPHQL_CODEGEN_PATH}`,
    ),
    { recursive: true },
  )

  /** Create the schema.prisma file for the passed API */
  const prismaSchema = prismaSchemaTemplate({
    schemaName,
    outputPath: `./generated/type-graphql`,
  })

  /** Write the schema.prisma to the filesystem */
  fs.writeFileSync(
    join(
      import.meta.dir,
      `../../../../../src/api/downstream/${downstreamPath}/schema.prisma`,
    ),
    prismaSchema,
  )

  const apiDirectory = join(
    import.meta.dir,
    `../../../../api/downstream/${downstreamPath}`,
  )

  await introspectDb(options, apiDirectory)
  await formatPrismaSchemaCase({
    ...options,
    schemaPath: `${apiDirectory}/schema.prisma`,
  })

  await annotatePrismaSchema({ schemaPath: `${apiDirectory}/schema.prisma` })
  await generateClient({ dir: apiDirectory })

  const codegenSrc = `${join(
    import.meta.dir,
    '../../../../../codegen/downstream',
  )}`

  const codegenDest = `${join(
    import.meta.dir,
    `../../../../api/downstream/${downstreamPath}/generated/innate`,
  )}`

  fs.readdirSync(codegenSrc).forEach((file) => {
    /** Copy files from the codegen folder to src/api/admin */
    fs.cpSync(`${codegenSrc}/${file}`, `${codegenDest}/${file}`, {
      recursive: true,
    })
  })

  /**
   * Prepend all copied files with a codegen header to prevent development
   * in the generated files.
   */
  fs.readdir(
    codegenSrc,
    { recursive: true, encoding: 'utf-8' },
    async (error, files) => {
      if (error) console.error({ error })

      for await (const file of files) {
        if (file.endsWith('.ts'))
          await prependGeneratedFile({ path: `${codegenDest}/${file}` })
      }
    },
  )

  spinner.succeed(`Generated Downstream API ${downstreamPath}`)
}
