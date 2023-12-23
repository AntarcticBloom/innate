import 'core-js/proposals'
import 'reflect-metadata'

import { Command } from 'commander'
import pkg from '../../package.json'
import { stdout } from './utils/debug'
import type { CLIOptions } from './utils/types'
import { generateApi } from './handlers/generateApi'
import { introspectDb } from './handlers/introspectDb'
import { parseCommandInt, parseDebugLevel } from './utils'

import { createYoga, useReadinessCheck } from 'graphql-yoga'
import { buildSchema } from 'type-graphql'
import { resolvers } from '../generated/type-graphql'
import path from 'path'
import { PrismaClient } from '@prisma/client'

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

  await stdout('👾 Running `dev` in debug mode\n')

  await introspectDb(options)
  await generateApi()

  const prisma = new PrismaClient()

  type Context = {
    prisma: PrismaClient
  }

  const schema = await buildSchema({
    resolvers,
    validate: false,
  })

  const yoga = createYoga<{}, Context>({
    schema,
    context: async () => ({ prisma }),
    plugins: [
      useReadinessCheck({
        endpoint: '/healthcheck',
        check: async () => {
          stdout('🎯 Health check endpoint hit')
          return true
        },
      }),
    ],
  })

  const server = Bun.serve({ development: true, fetch: yoga })

  stdout(
    `💁 Server is running on ${new URL(
      yoga.graphqlEndpoint,
      `http://${server.hostname}:${server.port}`,
    )} - PID: ${process.pid}`,
  )
})()
