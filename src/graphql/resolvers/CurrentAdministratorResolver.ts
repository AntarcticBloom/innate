import { Query, Resolver, Ctx, UseMiddleware, Authorized } from 'type-graphql'

import { Administrator } from '../../generated/type-graphql'
import { CurrentAdministrator } from '../middleware/CurrentAdministrator'

import type { Context } from '../../types/Context'

@Resolver()
export abstract class CurrentAdministratorResolver {
  @Query(() => Administrator)
  @Authorized()
  @UseMiddleware(CurrentAdministrator)
  public async currentAdministrator(@Ctx() { administrator }: Context) {
    return administrator
  }
}
