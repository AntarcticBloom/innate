import { NonEmptyArray } from 'type-graphql'
import {
  AuthenticateUserResolver,
  UserRegistrationResolver,
  RefreshAccessTokenResolver,
  VerifyEmailAddressResolver,
  SendUserVerificationEmailResolver,
} from '../resolvers'

// @ts-ignore - file will resolve when it is copied into src/api/downstream/** */
import { LogOutResolver } from '@shared/graphql/resolvers'

export const resolvers = (async (): Promise<
  NonEmptyArray<Function> | NonEmptyArray<string>
> => {
  const {
    FindManyTableResolver,
    TableRelationsResolver,
    FindManySchemaResolver,
    SchemaRelationsResolver,
    // @ts-ignore - generated files
  } = await import('../../../generated/type-graphql')

  return [
    /** Generated Resolvers */
    FindManyTableResolver,
    TableRelationsResolver,
    FindManySchemaResolver,
    SchemaRelationsResolver,

    /** Innate Resolvers */
    LogOutResolver,
    AuthenticateUserResolver,
    UserRegistrationResolver,
    RefreshAccessTokenResolver,
    VerifyEmailAddressResolver,
    SendUserVerificationEmailResolver,

    // TODO: get public resolvers from the most recent downstream version
    // ...mostRecentDownstreamResolvers,
  ]
})()
