import ora from 'ora'
import { excludeFieldsFromApi } from '.'

export const annotatePrismaSchema = async ({
  schemaPath,
}: {
  schemaPath: string
}) => {
  const spinner = ora('Annotating Prisma Schema').start()
  await excludeFieldsFromApi({ schemaPath })
  /** ... additional annotations */

  spinner.succeed('Prisma Schema annotated')
}
