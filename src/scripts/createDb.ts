import { Command } from 'commander'
import pkg from '../../package.json'
import { stdout } from './utils/debug'
import { createDb } from './handlers/createDb'
import { parseDebugLevel, parseCommandInt } from './utils'

const program = new Command()

program
  .name('createDb')
  .description('Generates a GraphQL API from the connected database schema')
  .version(pkg.version)
  .requiredOption(
    '-d, --debug <number>',
    'Run in debug mode',
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

const { debug, spawnLevel } = program.opts()

if (debug) await stdout('👾 Running `createDb` in debug mode')

await createDb({
  debug,
  spawnLevel,
})
