import type { Context } from '@shared/types'
import { Administrator } from '../../../../generated/type-graphql'
import { CurrentAdministrator } from '../middleware/CurrentAdministrator' // won't resolve until copied to codegen destination
import { Query, Resolver, Ctx, UseMiddleware, Authorized } from 'type-graphql'

@Resolver()
export abstract class CurrentAdministratorResolver {
  @Query(() => Administrator)
  @Authorized()
  @UseMiddleware(CurrentAdministrator)
  public async currentAdministrator(@Ctx() { administrator }: Context) {
    return administrator
  }
}
