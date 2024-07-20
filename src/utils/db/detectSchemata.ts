import chalk from 'chalk'
import { join } from 'path'
import {
  ERROR_REFERENCE,
  prettyPrintError,
  NodePostgresErrorCodes,
  handleNodePostgresCliError,
} from '../../utils/errors'
import { type Sql } from 'postgres'
import ora, { type Ora } from 'ora'
import select from '@inquirer/select'
import confirm from '@inquirer/confirm'
import checkbox from '@inquirer/checkbox'
import { generateEnv, ENV } from '../../utils'
import { stdout } from '../../utils/cli/debug'
import { textbox, type CLIOptions } from '../../utils/cli'

export async function detectSchemata({
  sql,
  options,
}: {
  sql: Sql<{}>
  options: CLIOptions
}) {
  const spinner = ora({
    text: 'Detecting schemata',
  }).start()

  try {
    const newSchemata = await getNewSchemata(sql)
    const dbOnlyUsesPublicSchema =
      newSchemata.length === 1 && newSchemata[0] === 'public'

    if (dbOnlyUsesPublicSchema)
      return await handlePublicSchema({ sql, spinner })

    const [schemataExist] = await sql<
      { id: string }[]
    >`SELECT id FROM "innate".schema`

    if (!schemataExist)
      return await handleFirstRun({ sql, spinner, newSchemata })

    if (newSchemata.length)
      return await handleNewSchemata({
        sql,
        spinner,
        newSchemata: newSchemata,
      })

    spinner.succeed('No new schemata detected\n')
  } catch (error: any) {
    spinner.stop()

    return new Promise(async (resolve) => {
      return await handleSchemataDetectionError({
        error,
        options,
        taskToRerun: async () => {
          const context = await detectSchemata({ sql, options })
          resolve(context)
        },
      })
    })
  }
}

async function handlePublicSchema({
  sql,
  spinner,
}: {
  sql: Sql<{}>
  spinner: Ora
}) {
  spinner.stop()

  await stdout(
    chalk.dim(
      `\n🔍 The connected database only uses the default public schema. Setting \`public\` as baseline v0.0.0.`,
    ),
  )

  await sql`
    INSERT INTO innate.schema (name, tracked, is_newest_production_version)
    VALUES ('public', TRUE, TRUE)
    ON CONFLICT (name) DO UPDATE
    SET tracked = TRUE
  `

  await baselineNewSchema({
    sql,
    baselineSchema: 'public',
  })

  spinner.succeed('Schemata recorded\n')
  return
}

async function handleFirstRun({
  sql,
  spinner,
  newSchemata,
}: {
  spinner: Ora
  sql: Sql<{}>
  newSchemata: string[]
}) {
  spinner.stop()

  await textbox(
    `ℹ️ Innate uses PostgreSQL schemata to track changes to your database schema over time. It creates schemata with a \`n8_v\${semver}\` naming convention and spins up an API for each one.
      
You will likely run into issues if your existing schemata happen to use the same naming convention, which is especially likely if another instance of Innate was connected to this database without ejection.
      
If the connected database utilized schemata other than \`public\` prior to connecting with Innate, please specify which schemata you'd like Innate to track. Innate will create an API for each selected schema as if it is a version of your API.
      
You will want to use Innate's tooling to collapse these schemata into a future version to reduce the number of API versions you have to manage and save on compute costs.`,
  )

  /**  Ask user whether innate should track each detected schema */
  const userIncludedSchemata = await checkbox<string>({
    required: true,
    message: 'Which schemata should innate track?',
    choices: newSchemata.map((name: string) => ({
      name,
      value: name,
    })),
  })

  await textbox(
    "ℹ️ Innate needs to know which schema you consider to be the current or newest production schema. It will create a v0.0.0 API version for the schema you select. Breaking changes you make via Innate's UI will create and spin up new versions of your API. Additional schemata can be merged with Innate's tooling later.",
  )

  const newestProductionSchema =
    userIncludedSchemata.length === 1
      ? userIncludedSchemata[0]
      : await select({
          message:
            'Which schema should Innate consider to be the newest production schema?',
          choices: userIncludedSchemata.map((name: string) => ({
            name,
            value: name,
          })),
        })

  /** With the new is_newest_production_version selected, we must find any existing one that is true and set its value to false prior to setting the new one to true (unique true constraint) */
  await sql`
    UPDATE "innate".schema
    SET is_newest_production_version = FALSE
    WHERE is_newest_production_version = TRUE
  `

  for await (const schema of newSchemata) {
    await sql`
      INSERT INTO innate.schema (name, tracked, is_newest_production_version)
      VALUES (
        ${schema}, 
        ${userIncludedSchemata.includes(schema)},
        ${schema === newestProductionSchema}
      )
      ON CONFLICT (name) DO UPDATE
      SET tracked = ${userIncludedSchemata.includes(schema)}
    `
  }

  await baselineNewSchema({
    sql,
    baselineSchema: newestProductionSchema,
  })

  return
}

async function handleNewSchemata({
  sql,
  spinner,
  newSchemata,
}: {
  spinner: Ora
  sql: Sql<{}>
  newSchemata: string[]
}) {
  spinner.stop()

  /**  Ask user whether innate should track each detected schema */
  const userIncludedSchemata = await checkbox<string>({
    required: true,
    message: 'Which schema(ta) should innate track?',
    choices: newSchemata.map((name: string) => ({
      name,
      value: name,
    })),
  })

  for await (const schema of newSchemata) {
    await sql`
      INSERT INTO innate.schema (name, tracked, is_newest_production_version)
      VALUES (
        ${schema}, 
        ${userIncludedSchemata.includes(schema)},
        FALSE
      )
      ON CONFLICT (name) DO UPDATE
      SET tracked = ${userIncludedSchemata.includes(schema)}
    `
  }

  // return spinner.succeed('Schemata recorded!\n\n\n')
}

async function getNewSchemata(sql: Sql) {
  /**
   * New schemata could be schemata in the "innate".schema table whose `tracked` field is NULL
   * (not explicitly FALSE) or schemata in the connected database that are not in the
   * "innate".schema table yet (and are being introspected in this function). This mechanism
   * allows the UI to track previously untracked schemata.
   */

  const introspectedSchemata = await sql<{ name: string }[]>`
    SELECT schema_name AS name
    FROM information_schema.schemata
    WHERE schema_name NOT IN ('information_schema', 'pg_catalog', 'pg_toast')
  `

  const newSchemata: string[] = []
  for await (const { name } of introspectedSchemata) {
    /** Don't allow innate schema to be tracked  */
    if (name === 'innate') continue

    /** Skip innate-managed schemata */
    if (name.startsWith('n8_v')) continue

    const [nameMatch] = await sql<{ name: string; tracked: boolean }[]>`
      SELECT name, tracked
      FROM "innate".schema
      WHERE name = ${name}
    `

    if (!nameMatch || nameMatch.tracked === null) {
      newSchemata.push(name)
    }
  }

  return newSchemata
}

async function baselineNewSchema({
  sql,
  baselineSchema,
}: {
  sql: Sql<{}>
  baselineSchema: string
}) {
  await textbox(
    `Innate will now create a new baseline version from the \`${baselineSchema}\` schema as the newest production schema. In order for Innate to be reliably ejectable from the connected database, this requires duplicating all sequences, tables, data, views, and functions within the \`${baselineSchema}\` schema, which isn't always feasible.`,
  )

  const confirmResponse = await confirm({
    message: `Are you sure you would like to proceed with duplicating schema \`${baselineSchema}\` and using it as Innate's versioning baseline?`,
  })

  if (!confirmResponse) {
    await textbox(
      'Thank you for trying Innate. We invite you to try Innate with an empty database and migrate any existing data manually until migration tools are built.',
    )
    return process.exit(0)
  }

  /** PostgreSQL does not support . chars in table/schema names as in n8_v0.0.0 */
  const v0SchemaName = `n8_v0_0_0`

  try {
    await sql.unsafe(`SET search_path TO ${baselineSchema}`)

    await sql.file(join(import.meta.dir, './cloneSchema.sql'))

    /** Clone the baseline schema as n8_v0.0.0 */
    await sql`SELECT "innate".clone_schema(${baselineSchema}, ${v0SchemaName}, 'DATA')`

    /** Get the id of the copied schema */
    const [{ id: copiedSchemaId }] = await sql<{ id: string }[]>`
      SELECT id FROM "innate".schema
      WHERE name = ${baselineSchema}
    `

    /**
     * Mark n8_v0.0.0 schema as a copy of the selected baselined schema;
     * mark n8_v0_0_0 as the newest production version (remove that
     * designation from the baselined schema first because of unique index).
     * Mark the baselined schema as not tracked, since v0.0.0 is a copy and
     * all future versions will be based on v0.0.0.
     */

    await sql`
      UPDATE "innate".schema
      SET (is_newest_production_version, tracked) = (FALSE, FALSE)
      WHERE is_newest_production_version = TRUE;
    `

    await sql`
      INSERT INTO "innate".schema
        (name, tracked, is_newest_production_version, baseline_version_of_schema) 
      VALUES 
        (${v0SchemaName}, TRUE, TRUE, ${copiedSchemaId})
    `
  } catch (error) {
    console.log({ error })
  }
}

async function handleSchemataDetectionError({
  error,
  options,
  taskToRerun,
}: {
  error: any
  options: CLIOptions
  taskToRerun: () => Promise<any>
}) {
  const schemaDetectionError = error.toString('utf-8')

  const { errorCode } = await handleNodePostgresCliError({
    env: ENV,
    errorCode: error.code,
    commandOptions: options,
    stderr: schemaDetectionError,
    onUnhandled: async () => {
      await prettyPrintError(
        ERROR_REFERENCE.system.UnableToDetectSchemata({
          originalError: schemaDetectionError,
          env: generateEnv(`${options.cwd}.env`),
        }),
      )
    },
  })

  if (!errorCode) return

  const errorResponses: {
    [key in NodePostgresErrorCodes]: () => Promise<void>
  } = {
    [NodePostgresErrorCodes['3D000']]: async () => await taskToRerun(),
    [NodePostgresErrorCodes['42P01']]: async () => await taskToRerun(),
  }

  if (errorResponses[errorCode]) return await errorResponses[errorCode]()
  return process.exit(1)
}
