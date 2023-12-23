import { stdout } from '../utils/debug'

export const generateApi = async () => {
  const prismaGenerate = Bun.spawn(['prisma', 'generate'])
  await stdout('👾 Generating API...')
  await prismaGenerate.exited
}
