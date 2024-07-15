import {
  AdministratorExistsResolver,
  CurrentAdministratorResolver,
  VerifyAdministratorEmailResolver,
  AdministratorRegistrationResolver,
  AuthenticateAdministratorResolver,
  SendAdminVerificationEmailResolver,
  RefreshAdministratorAccessTokenResolver,
} from '../resolvers' // won't resolve until copied to codegen destination

import { NonEmptyArray } from 'type-graphql'
import { LogOutResolver } from '@shared/graphql/resolvers' // won't resolve until copied to codegen destination

export const resolvers = (async (): Promise<
  NonEmptyArray<Function> | NonEmptyArray<string>
> => {
  const {
    FindManyTableResolver,
    TableRelationsResolver,
    FindManySchemaResolver,
    SchemaRelationsResolver,
    // @ts-ignore - generated files
  } = await import('../../../../generated/type-graphql')

  return [
    /** Generated Resolvers */
    FindManyTableResolver,
    TableRelationsResolver,
    FindManySchemaResolver,
    SchemaRelationsResolver,

    /** Custom Resolvers */
    LogOutResolver,
    AdministratorExistsResolver,
    CurrentAdministratorResolver,
    VerifyAdministratorEmailResolver,
    AdministratorRegistrationResolver,
    AuthenticateAdministratorResolver,
    SendAdminVerificationEmailResolver,
    RefreshAdministratorAccessTokenResolver,

    // TODO: get public resolvers from the most recent downstream version
    // ...mostRecentDownstreamResolvers,
  ]
})()
