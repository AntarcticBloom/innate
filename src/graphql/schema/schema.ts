import { buildSchema } from 'type-graphql'
import { administrativeResolvers } from './resolvers'
import { isAuthorized } from '../middleware/isAuthorized'
import { isAdminAuthorized } from '../middleware/isAdminAuthorized'

// const publicResolvers: NonEmptyArray<Function> | NonEmptyArray<string> = [
//   CurrentUserResolver,
// ]

export const publicSchema = async () => {
  const schema = await buildSchema({
    validate: false,
    authChecker: isAuthorized,
    resolvers: administrativeResolvers, // TODO: restrict
  })

  return schema
}

export const administrativeSchema = async () => {
  const schema = await buildSchema({
    validate: false,
    authChecker: isAdminAuthorized,
    resolvers: administrativeResolvers,
  })

  return schema
}
