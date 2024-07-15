// ORDER MATTERS HERE
import 'core-js/proposals'
import 'reflect-metadata'
// ORDER MATTERS HERE

import { createYoga } from 'graphql-yoga'
import { PrismaClient } from '@prisma/client'
import { stdout } from '../../utils/cli/debug'
import type { Context } from '../../../codegen/downstream/types/Context'
import { baseYogaProps } from '../../../codegen/shared/server/baseYogaProps'
import { instantiateServer } from '../shared/server/instantiateServer'

async function startDownstreamServer({ debug }: { debug: number }) {
  const portArg = Bun.argv.findIndex((arg) => arg === '--port')
  const port = Bun.argv[portArg + 1]

  const prisma = new PrismaClient() // TODO: problematic - which one?

  const yoga = createYoga<{}, Context>({
    schema: downstreamSchema, // TODO: problematic - which one?
    ...baseYogaProps({ prisma, debug }),
  })

  const server = Bun.serve(
    instantiateServer({
      serverInstance: yoga,
      config: {
        port,
        useTLS: true,
      },
    }),
  )

  stdout(
    `💁 Server for clients is listening at ${new URL(
      yoga.graphqlEndpoint,
      server.url,
    )}`,
  )
}
