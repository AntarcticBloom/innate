import 'core-js'
import 'reflect-metadata'

import { beforeAll, afterEach, afterAll } from 'bun:test'
import { BASE_PRISMA_SCHEMA, ENV, BASE_PACKAGE_JSON } from './src/test/fixtures'

import { cleanExampleDir } from './src/test/utils/cleanExampleDir'

beforeAll(async () => {
  ;('before all running')
  Bun.spawnSync(['rm', '-rf', '../example'])
  Bun.spawnSync(['mkdir', '../example'])

  const rsyncProc = Bun.spawnSync([
    'rsync', // cp equivalent, but with ability to exclude files
    '-av',
    // '--exclude=./example', // Exclude example directory, so that we don't recursively copy the example directory
    '--exclude=**.test.**',
    '--exclude=./package.json',
    '--exclude=./tsconfig.json',
    '--exclude=./setup-tests.ts',
    '--exclude=./src/generated',
    './',
    '../example',
  ])

  /** Write base env and schema.prisma; can be overwritten in more specific tests */
  await Promise.all([
    Bun.write(Bun.file('../example/.env'), ENV),
    Bun.write(Bun.file('../example/package.json'), BASE_PACKAGE_JSON),
    Bun.write(Bun.file('../example/schema.prisma'), BASE_PRISMA_SCHEMA),
  ])
})

afterEach(() => {
  /** Leave the example directory intact in debug mode, so that i/o can be inspected */
  if (!Boolean(Bun.env['DEBUG'])) cleanExampleDir()
})

afterAll(() => {
  /** Leave the example directory intact in debug mode, so that i/o can be insspected */
  if (!Boolean(Bun.env['DEBUG']))
    Bun.spawnSync(['rm', '-rf', 'example']) /** Teardown i/o */
})
