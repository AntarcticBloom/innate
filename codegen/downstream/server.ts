// ORDER MATTERS HERE
import 'core-js/proposals'
import 'reflect-metadata'
// ORDER MATTERS HERE

import { stdout } from '@utils' // won'tresolve until copied to destination location
import { createYoga } from 'graphql-yoga'
import { downstreamSchema } from './schema'
import { PrismaClient } from '@prisma/client'
import { type Context, baseYogaProps, instantiateServer } from '@shared' // won'tresolve until copied to destination location

startDownstreamServer({ debug: 1 })

export async function startDownstreamServer({ debug }: { debug: number }) {
  const portArg = Bun.argv.findIndex((arg) => arg === '--port')
  const port = Bun.argv[portArg + 1]

  const prisma = new PrismaClient()

  const yoga = createYoga<{}, Context>({
    graphiql: true,
    schema: downstreamSchema,
    ...baseYogaProps({ prisma, debug }),
  })

  const server = Bun.serve(
    instantiateServer({
      serverInstance: yoga,
      config: {
        port,
        useTLS: false,
      },
    }),
  )
}
