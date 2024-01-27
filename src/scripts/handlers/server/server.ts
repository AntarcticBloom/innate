import {
  createYoga,
  useReadinessCheck,
  type YogaInitialContext,
} from 'graphql-yoga'
import { stdout } from '../../../utils/cli/debug'
import { Prisma, PrismaClient } from '@prisma/client'
import type { Context } from '../../../types/Context'
import { DebugLevel, generateEnv } from '../../../utils'
import { useCookies } from '@whatwg-node/server-plugin-cookies'
import { publicSchema, administrativeSchema } from '../../../graphql/schema'

export const startServer = async ({ debug }: { debug: number }) => {
  const prisma = new PrismaClient()

  const baseYogaProps = {
    context: async (ctx: YogaInitialContext) => ({
      prisma,
      env: generateEnv(),
      ...ctx,
    }),
    plugins: [
      useCookies(),
      useReadinessCheck({
        endpoint: '/healthcheck',
        check: async () => {
          if (debug <= DebugLevel.Info) stdout('🎯 Health check endpoint hit')
          return true
        },
      }),
    ],
  }

  const yoga = createYoga<{}, Context>({
    schema: publicSchema,
    ...baseYogaProps,
  })

  const adminYoga = createYoga<{}, Context>({
    schema: administrativeSchema,
    ...baseYogaProps,
  })

  const adminServer = Bun.serve({
    port: 3001,
    development: true,
    fetch: (req) => {
      // TODO: extend Bun server here
      // TODO: https://linear.app/antarcticbloom/issue/AB-17/configurable-cors

      const res = new Response()

      // TODO: https://linear.app/antarcticbloom/issue/AB-17/configurable-cors
      res.headers.set('Access-Control-Allow-Origin', '*')
      res.headers.set(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE, OPTIONS',
      )
      return adminYoga(req, res)
    },
  })

  const server = Bun.serve({
    development: true,
    fetch: (req) => {
      // TODO: extend Bun server here

      const { url } = req
      const { pathname } = new URL(
        url,
        `http://${server.hostname}:${server.port}`,
      )
      const res = new Response(JSON.stringify(Prisma.dmmf.datamodel.models))

      // TODO: secure this endpoint; data model meta format must only be accessible to admin UI
      if (pathname === '/dmmf') {
        // TODO: https://linear.app/antarcticbloom/issue/AB-17/configurable-cors
        res.headers.set('Access-Control-Allow-Origin', '*')
        res.headers.set(
          'Access-Control-Allow-Methods',
          'GET, POST, PUT, DELETE, OPTIONS',
        )

        return res
      }

      return yoga(req)
    },
  })

  stdout(
    `💁 Admin Server is listening at ${new URL(
      yoga.graphqlEndpoint,
      `http://${adminServer.hostname}:${adminServer.port}`,
    )}`,
  )

  stdout(
    `💁 Server is listening at ${new URL(
      yoga.graphqlEndpoint,
      `http://${server.hostname}:${server.port}`,
    )}`,
  )
}
