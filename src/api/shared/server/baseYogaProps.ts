import { ENV } from '@utils'
import { PrismaClient } from '@prisma/client'
import { useReadinessCheck } from 'graphql-yoga'
import { type YogaInitialContext } from 'graphql-yoga'
import { useCookies } from '@whatwg-node/server-plugin-cookies'

export const baseYogaProps = ({
  debug,
  prisma,
}: // TODO: add schema/version/port here to indicate which version of the API is being healthcheked
{
  debug: number
  prisma: PrismaClient
}) => ({
  context: async (ctx: YogaInitialContext) => ({
    prisma,
    env: ENV,
    ...ctx,
  }),
  plugins: [
    useCookies(),
    useReadinessCheck({
      endpoint: '/healthcheck',
      check: async () => true,
    }),
  ],
})
