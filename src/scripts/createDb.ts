import ora from 'ora'
import { Command } from 'commander'
import pkg from '../../package.json'
import { DebugLevel } from '../utils'
import { stdout } from '../utils/cli/debug'
import { createDb } from './handlers/createDb'
import { parseDebugLevel, parseCommandInt } from '../utils/cli'

const program = new Command()

program
  .name('createDb')
  .description('Generates a GraphQL API from the connected database schema')
  .version(pkg.version)
  .requiredOption('-d, --debug <number>', 'Set debug level', parseDebugLevel, 1)
  .requiredOption(
    '--spawn-level <number>',
    'Set the spawn level, so that error handling can happen on the appropriate process. 0 indicates the progenitor process.',
    parseCommandInt,
    0,
  )
  .parse()

const { debug, spawnLevel } = program.opts()

const spinner = ora({
  text: '👾 Running `createDb`\n',
  discardStdin: false,
}).start()

if (debug <= DebugLevel.Info) await stdout('👾 Running `createDb`')

await createDb({
  debug,
  spawnLevel,
  options: { ...program.opts(), spinner },
})
