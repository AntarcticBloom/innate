import { isAuthorized } from '@shared'
import { buildSchema } from 'type-graphql'
import { resolvers as asyncResolvers } from './resolvers'

export const downstreamSchema = async () => {
  const resolvers = await asyncResolvers

  const schema = await buildSchema({
    resolvers,
    validate: false,
    authChecker: isAuthorized,
  })

  return schema
}
