import ora from 'ora'
import { DebugLevel } from '../../../../utils'

export const formatPrismaSchemaCase = async ({
  debug,
  spawnLevel,
  schemaPath,
}: {
  debug: DebugLevel
  spawnLevel: number
  schemaPath: string
}) => {
  const spinner = ora(
    'Converting PostgreSQL snake casings to something a little more JavaScripty',
  ).start()

  Bun.spawnSync([
    'prisma-case-format',
    '--file',
    `${schemaPath}`,
    '--table-case',
    'pascal',
    '--field-case',
    'camel',
    '--enum-case',
    'pascal',
    '--pluralize',
  ])

  spinner.succeed('PostgreSQL casings converted to camel')
}
