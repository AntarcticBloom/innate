import {
  LogOutResolver,
  RefreshAccessTokenResolver,
  AdministratorExistsResolver,
  CurrentAdministratorResolver,
  VerifyAdministratorEmailResolver,
  AdministratorRegistrationResolver,
  AuthenticateAdministratorResolver,
  SendUserVerificationEmailResolver,
  SendAdminVerificationEmailResolver,
  RefreshAdministratorAccessTokenResolver,
} from '../resolvers'

import { FindManyModelResolver } from '../../generated/type-graphql'

import { type NonEmptyArray } from 'type-graphql'

export const publicResolvers: NonEmptyArray<Function> | NonEmptyArray<string> =
  [
    LogOutResolver,
    RefreshAccessTokenResolver,
    SendUserVerificationEmailResolver,
  ]

export const administrativeResolvers:
  | NonEmptyArray<Function>
  | NonEmptyArray<string> = [
  FindManyModelResolver,
  AdministratorExistsResolver,
  CurrentAdministratorResolver,
  VerifyAdministratorEmailResolver,
  AdministratorRegistrationResolver,
  AuthenticateAdministratorResolver,
  SendAdminVerificationEmailResolver,
  RefreshAdministratorAccessTokenResolver,
  ...publicResolvers,
]
