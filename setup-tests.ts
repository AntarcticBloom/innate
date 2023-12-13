import { BASE_PRISMA_SCHEMA, ENV } from './test/fixtures'
import { beforeAll, beforeEach, afterEach } from 'bun:test'

beforeAll(() => {
  Bun.spawnSync(['rm', '-rf', 'example'])
})

beforeEach(async () => {
  const exampleDir = Bun.file('./example')
  const exampleDirExists = await exampleDir.exists()

  if (!exampleDirExists)
    Bun.spawnSync([
      'rsync', // cp equivalent, but with ability to exclude files
      '-av',
      `--exclude=example`, // Exclude example directory, so that we don't recursively copy the example directory
      `--exclude=setup-tests.ts`,
      './',
      'example',
    ])

  Bun.write(Bun.file('example/schema.prisma'), BASE_PRISMA_SCHEMA)
  Bun.write(Bun.file('example/.env'), ENV)
})

afterEach(() => {
  /** Leave the example directory intact in debug mode, so that i/o can be inspected */
  if (!Boolean(Bun.env['DEBUG']))
    Bun.spawnSync(['rm', '-rf', 'example']) /** Teardown i/o */
})
