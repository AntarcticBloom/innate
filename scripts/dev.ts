import pkg from '../package.json'
import { Command } from 'commander'
import { parseCommandInt } from './utils/parseSpawnLevel'
import { prettyPrintError } from '../utils/errors/console'
import { ERROR_REFERENCE } from '../utils/errors/reference'
import { handlePrismaCliError } from '../utils/errors/prisma/handlePrismaError'

const program = new Command()

program
  .name('dev')
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

const options = program.opts()

if (options.debug) await Bun.write(Bun.stdout, 'Running in debug mode\n')

const introspectDbProcess = Bun.spawnSync(['bun', 'run', 'dev:introspect-db'], {
  stdout: options.debug ? 'inherit' : 'ignore',
})

const originalError = introspectDbProcess.stderr.toString('utf-8')

if (introspectDbProcess.exitCode !== 0) {
  await handlePrismaCliError({
    stderr: originalError,
    commandOptions: options,
    childProcess: introspectDbProcess,
    onUnhandled: async () => {
      await prettyPrintError(
        ERROR_REFERENCE.system.UnableToIntrospectDatabase({ originalError }),
        options.debug,
      )
    },
  })
}
