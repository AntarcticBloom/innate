import { DebugLevel, stdout } from '../../utils'

export const formatPrismaSchemaCase = async ({
  debug,
  spawnLevel,
}: {
  debug: DebugLevel
  spawnLevel: number
}) => {
  await stdout('🐍🚫 Formatting Prisma schema case...')

  Bun.spawnSync([
    'prisma-case-format',
    '--table-case',
    'pascal',
    '--field-case',
    'camel',
    '--enum-case',
    'pascal',
    '--pluralize',
  ])
}
