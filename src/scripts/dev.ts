import 'core-js/proposals'
import 'reflect-metadata'

import path from 'path'
import { watch } from 'fs'
import { Command } from 'commander'
import pkg from '../../package.json'
import { DebugLevel, generateUIEnv } from '../utils'
import { stdout } from '../utils/cli/debug'
import { syncModels } from './handlers/syncModels'
import type { CLIOptions } from '../utils/cli/types'
import {
  startUI,
  generateApi,
  introspectDb,
  annotatePrismaSchema,
} from './handlers'
import { parseCommandInt, parseDebugLevel } from '../utils/cli'
import { waitForHealthcheck, killServerProcess } from '../test/utils'

const program = new Command()

program
  .name('dev')
  .description('Generates a GraphQL API from the connected database schema')
  .version(pkg.version)
  .requiredOption(
    '-d, --debug <number>',
    'Set the debug mode',
    parseDebugLevel,
    1,
  )
  .requiredOption(
    '--spawn-level <number>',
    'Set the spawn level, so that error handling can happen on the appropriate process. 0 indicates the progenitor process.',
    parseCommandInt,
    0,
  )
  .parse()
;(async () => {
  const options = program.opts<CLIOptions>()
  options.cwd = path.join(import.meta.dir, '../../')

  if (options.debug <= DebugLevel.Info) await stdout('👾 Running `dev`\n')

  await introspectDb(options)
  await annotatePrismaSchema()
  await generateApi()
  await syncModels({ debug: options.debug })
  await startServer({ options })

  generateUIEnv()
  await startUIServer({ options })
})()

async function startServer({ options }: { options: CLIOptions }) {
  Bun.spawn(
    [
      'dotenv',
      '-e',
      '.env.development',
      'bun',
      'run',
      './src/scripts/handlers/server/server.ts',
    ],
    {
      stdout: 'inherit',
      cwd: options.cwd,
    },
  )

  await waitForHealthcheck()
}

async function startUIServer({ options }: { options: CLIOptions }) {
  if (options.debug <= DebugLevel.Info) await stdout('👾 Starting UI...\n')

  const uiProcess = startUI({ debug: options.debug })

  const watcher = watch(
    path.join(import.meta.dir, '../../src/'),
    { recursive: true },
    async (_, filename) => {
      if (!filename?.includes('generated/')) {
        await killServerProcess()
        uiProcess.kill()

        watcher.close()

        await startServer({ options })
        await startUIServer({ options })
      }
    },
  )

  process.on('SIGINT', () => {
    // close watcher when Ctrl-C is pressed
    watcher.close()

    process.exit(0)
  })

  return uiProcess
}
