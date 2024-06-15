import { stdout } from '../../../utils'
import { addGeneratedComment, excludeFieldsFromApi } from '.'

export const annotatePrismaSchema = async () => {
  await stdout('📝 Annotating Prisma schema')

  await addGeneratedComment()
  await excludeFieldsFromApi()
}
