import { readdirSync } from 'node:fs'

export const cleanExampleDir = () => {
  /** TODO: replace with Bun API when Bun readdir implemented */
  readdirSync('../example').forEach((file) => {
    const leaveInPlace = [
      '.env',
      'node_modules',
      'package.json',
      'schema.prisma',
      'package-lock.json',
    ]

    if (!leaveInPlace.includes(file))
      Bun.spawnSync(['rm', '-rf', `../example/${file}`])
  })
}
