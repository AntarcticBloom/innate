import { Query, Ctx } from 'type-graphql'
import type { Context } from '../../types/Context'

export abstract class AdministratorExistsResolver {
  @Query(() => Boolean, {
    name: 'administratorsExist',
    description: 'Returns true if at least one administrator exists',
  })
  public async administratorsExist(
    @Ctx() { prisma }: Context,
  ): Promise<boolean> {
    const administratorCount = await prisma.administrator.count()
    return administratorCount > 0
  }
}
