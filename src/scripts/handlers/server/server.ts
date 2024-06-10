import fs from 'fs'
import {
  createYoga,
  useReadinessCheck,
  YogaServerInstance,
  type YogaInitialContext,
} from 'graphql-yoga'
import { stdout } from '../../../utils/cli/debug'
import { Prisma, PrismaClient } from '@prisma/client'
import type { Context } from '../../../types/Context'
import { DebugLevel, generateEnv } from '../../../utils'
import { useCookies } from '@whatwg-node/server-plugin-cookies'
import { publicSchema, administrativeSchema } from '../../../graphql/schema'

export const startServer = async ({ debug }: { debug: number }) => {
  const env = generateEnv()
  const prisma = new PrismaClient()

  const baseYogaProps = {
    context: async (ctx: YogaInitialContext) => ({
      env,
      prisma,
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

  const instantiateServer = ({
    serverInstance,
    config: { port, useTLS },
  }: {
    serverInstance: YogaServerInstance<{}, Context>
    config: {
      port: string
      useTLS: boolean
    }
  }) => ({
    port: port,
    development: true,
    ...(useTLS
      ? {
          tls: {
            key: Bun.file(`${process.cwd()}/certs/innate.test.key`),
            cert: Bun.file(`${process.cwd()}/certs/innate.test.crt`),
          },
        }
      : {}),
    fetch: (req: Request) => {
      const { url } = req
      const { pathname } = new URL(
        url,
        `http://${server.hostname}:${server.port}`,
      )

      // TODO: extend Bun server here
      // TODO: https://linear.app/antarcticbloom/issue/AB-17/configurable-cors

      const res = new Response()

      // TODO: https://linear.app/antarcticbloom/issue/AB-17/configurable-cors
      res.headers.set('Access-Control-Allow-Origin', '*')
      res.headers.set(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE, OPTIONS',
      )
      res.headers.set('Access-Control-Allow-Credentials', 'true')

      // TODO: secure this endpoint; data model meta format must only be accessible to admin UI
      if (pathname === '/dmmf') {
        // TODO: https://linear.app/antarcticbloom/issue/AB-17/configurable-cors
        const res = new Response(JSON.stringify(Prisma.dmmf.datamodel.models))

        res.headers.set('Access-Control-Allow-Origin', '*')
        res.headers.set(
          'Access-Control-Allow-Methods',
          'GET, POST, PUT, DELETE, OPTIONS',
        )

        return res
      }

      return serverInstance(req, res)
    },
  })

  const adminWebServer = Bun.serve(
    instantiateServer({
      serverInstance: adminYoga,
      config: {
        useTLS: true,
        port: env.ADMIN_SERVER_PORT_WEB,
      },
    }),
  )

  const adminNativeServer = Bun.serve(
    instantiateServer({
      serverInstance: adminYoga,
      config: {
        useTLS: false,
        port: env.ADMIN_SERVER_PORT_NATIVE,
      },
    }),
  )

  const server = Bun.serve(
    instantiateServer({
      serverInstance: yoga,
      config: {
        useTLS: true,
        port: env.SERVER_PORT,
      },
    }),
  )

  stdout(
    `💁 Admin Server for Web is listening at ${new URL(
      yoga.graphqlEndpoint,
      adminWebServer.url,
    )}`,
  )

  stdout(
    `💁 Admin Server for Native is listening at ${new URL(
      yoga.graphqlEndpoint,
      adminNativeServer.url,
    )}`,
  )

  stdout(
    `💁 Server for clients is listening at ${new URL(
      yoga.graphqlEndpoint,
      server.url,
    )}`,
  )
}
