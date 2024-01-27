import {
  LogOutResolver,
  RefreshAccessTokenResolver,
  CurrentAdministratorResolver,
  AdministratorRegistrationResolver,
  AuthenticateAdministratorResolver,
  RefreshAdministratorAccessTokenResolver,
} from '../resolvers'
import { type NonEmptyArray } from 'type-graphql'

export const publicResolvers: NonEmptyArray<Function> | NonEmptyArray<string> =
  [LogOutResolver, RefreshAccessTokenResolver]

export const administrativeResolvers:
  | NonEmptyArray<Function>
  | NonEmptyArray<string> = [
  CurrentAdministratorResolver,
  AdministratorRegistrationResolver,
  AuthenticateAdministratorResolver,
  RefreshAdministratorAccessTokenResolver,
  ...publicResolvers,
]
