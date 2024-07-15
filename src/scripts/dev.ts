// ORDER MATTERS FOR THESE IMPORTS
import 'core-js/proposals'
import 'reflect-metadata'
// ORDER MATTERS FOR THESE IMPORTS

import path from 'path'
import Listr from 'listr'
import postgres from 'postgres'
import { stdout } from '../utils'
import { Command } from 'commander'
import pkg from '../../package.json'
import { generateUIEnv } from '../utils'
import { generateApis } from './handlers'
import { startUIServer } from './handlers/server'
import { detectSchemata, ENV } from '../utils'
import { syncTables } from './handlers/syncTables'
import { printLogo } from '../utils/cli/printLogo'
import type { CLIOptions } from '../utils/cli/types'
import { generateAdminApi } from './handlers/codegen'
import { parseCommandInt, parseDebugLevel } from '@utils'
import { pm } from '../api/processManager/ProcessManager'

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
  const sql = postgres(ENV.DATABASE_URL)
  const options = program.opts<CLIOptions>()
  options.cwd = path.join(import.meta.dir, '../../')

  console.clear()
  await printLogo()

  stdout('\n🚀 Starting dev\n')

  await detectSchemata({ sql, options })

  await Promise.all([
    generateApis({ options, sql }),
    generateAdminApi({ options, sql }),
  ])

  await Promise.all([
    syncTables({ debug: options.debug, sql }),
    pm.start({ options }),
  ])

  await stdout('\n🚀 Starting UI server...\n')
  generateUIEnv()
  startUIServer(options)
})()
