import { stdout } from '../../utils/cli/debug'

export const generateApi = async () => {
  await stdout('👾 Generating API...')
  const prismaGenerate = Bun.spawn(['prisma', 'generate'])
  await prismaGenerate.exited
}
