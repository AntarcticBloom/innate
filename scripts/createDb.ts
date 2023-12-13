import pkg from '../package.json'
import { Command } from 'commander'
import { parseCommandInt } from './utils/parseSpawnLevel'
import { prettyPrintError } from '../utils/errors/console'
import { ERROR_REFERENCE } from '../utils/errors/reference'
import { databaseConnection } from '../db/parseDatabaseConnectionStr'

const program = new Command()

program
  .name('createDb')
  .description('Generates a GraphQL API from the connected database schema')
  .version(pkg.version)
  .requiredOption('-d, --debug', 'Run in debug mode', false)
  .requiredOption('--no-debug', 'Run in production mode', true)
  .requiredOption(
    '--spawn-level <number>',
    'Set the spawn level, so that error handling can happen on the appropriate process. 0 indicates the progenitor process.',
    parseCommandInt,
    0,
  )
  .parse()

const { debug, spawnLevel } = program.opts()

const { databaseName, username, host, port } = databaseConnection

/** Execute the SQL file. */
const createDbProcess = Bun.spawnSync([
  'createdb',
  `--host=${host}`,
  `--port=${port}`,
  `--username=${username}`,
  `${databaseName}`,
])

/** Ensure error handling runs on the progenitor process, if possible, to prevent spawning many descendant processes */
if (spawnLevel !== 0) process.exit(createDbProcess.exitCode)

/** Handle errors if on the progenitor process */
if (createDbProcess.exitCode !== 0) {
  const originalError = createDbProcess.stderr.toString('utf-8')

  await prettyPrintError(
    ERROR_REFERENCE.system.UnableToCreateDatabase({ originalError }),
    debug,
  )
}

process.exit(0)
