import { Command } from 'commander'
import pkg from '../../package.json'
import { stdout } from './utils/debug'
import { initDb } from './handlers/initDb'
import { parseDebugLevel, parseCommandInt } from './utils'

const program = new Command()

program
  .name('init-db')
  .description(
    `Initializes the database specified in the .env with ${pkg.name} access control and authentication tables`,
  )
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

if (debug) await stdout("👾 Running 'init-db' in debug mode")

await initDb({
  debug,
  spawnLevel,
})
