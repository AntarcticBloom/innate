import ora from 'ora'
import chalk from 'chalk'
import { stdout } from '@utils'

export const generateClient = async ({ dir }: { dir: string }) => {
  const spinner = ora('Generating Prisma client').start()

  Bun.spawnSync([
    'npx',
    'prisma',
    'generate',
    '--schema',
    `${dir}/schema.prisma`,
  ])

  spinner.succeed('Prisma client generated')
}
