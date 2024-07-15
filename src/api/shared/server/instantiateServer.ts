import type { Context } from '@shared/types'
import { YogaServerInstance } from 'graphql-yoga'
import { configureCORS } from '../../../api/shared/cors'

export function instantiateServer({
  serverInstance,
  config: { port, useTLS },
}: {
  serverInstance: YogaServerInstance<{}, Context>
  config: {
    port: string
    useTLS: boolean
  }
}) {
  return {
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
      const res = new Response()
      configureCORS(res)

      return serverInstance(req, res)
    },
  }
}
