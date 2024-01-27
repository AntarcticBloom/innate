import 'core-js/proposals'
import 'reflect-metadata'

import path from 'path'
import { Command } from 'commander'
import pkg from '../../package.json'
import { DebugLevel } from '../utils'
import { stdout } from '../utils/cli/debug'
import type { CLIOptions } from '../utils/cli/types'
import { parseCommandInt, parseDebugLevel } from '../utils/cli'
import { waitForHealthcheck } from '../test/utils/waitForHealthcheck'
import { startUI, startServer, generateApi, introspectDb } from './handlers'
import { syncModels } from './handlers/syncModels'

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
  await generateApi()

  await syncModels({ debug: options.debug })

  startServer({ debug: options.debug })

  await waitForHealthcheck()
  await startUI({ debug: options.debug })
})()
