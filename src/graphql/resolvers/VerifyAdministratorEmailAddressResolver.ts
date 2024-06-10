import { GraphQLError } from 'graphql'
import { timingSafeEqual } from 'crypto'
import type { PrismaClient } from '@prisma/client'
import type { Context } from '../../types/Context'
import { InputValidator } from '../utility/InputValidator'
import { Resolver, Mutation, Arg, Ctx } from 'type-graphql'
import { Administrator } from '../../generated/type-graphql'
import { VerifyAdministratorEmailInput } from '../types/VerifyAdministratorEmailInput'

@Resolver()
export abstract class VerifyAdministratorEmailResolver {
  @Mutation(() => Boolean, { nullable: false })
  async verifyAdministratorEmail(
    @Arg('VerifyAdministratorEmailInput', {
      nullable: false,
    })
    { email, token }: VerifyAdministratorEmailInput,

    @Ctx() { prisma, request }: Context,
  ): Promise<boolean> {
    const decodedEmail = decodeURIComponent(email)

    /**
     * Format validation
     */

    InputValidator.validateEmail(decodedEmail, request)
    const tokenPayload = InputValidator.verifyJWT(token, request)

    const userToUpdate = await prisma.administrator.findUnique({
      where: {
        id: tokenPayload.id,
      },
    })

    try {
      this.validateInput(userToUpdate, token, decodedEmail)
      const administrator = await this.updateUser(tokenPayload, prisma)
      await this.invalidateSingleUseToken(administrator, prisma)
      return true
    } catch (error: any) {
      /**
       * If a administrator can be identified, ensure they can only use this
       * mutation once before going back and having to reissue
       * themselves another token.
       */
      if (userToUpdate) this.invalidateSingleUseToken(userToUpdate, prisma)

      throw new GraphQLError(error.message)
    }
  }

  private validateInput(
    userToUpdate: Administrator | null,
    token: string,
    email: string,
  ): void | never {
    if (!userToUpdate) {
      throw new GraphQLError(
        `Unable to find administrator specified in magic link. Was the administrator deleted recently?`,
      )
    }

    if (!userToUpdate.magic_link_token) {
      throw new Error('Token in magic link was used already')
    }

    if (userToUpdate.email !== email) {
      throw new Error(
        'User from the provided token and email address do not match.',
      )
    }

    if (
      // Timing-safe comparison requires equal byte lengths
      Buffer.from(token).length !==
        Buffer.from(userToUpdate.magic_link_token).length ||
      !timingSafeEqual(
        Buffer.from(token),
        Buffer.from(userToUpdate.magic_link_token),
      )
    ) {
      throw new GraphQLError(
        'Token in magic link does not match the one that was most recently issued',
      )
    }
  }

  private async invalidateSingleUseToken(
    administrator: Administrator,
    prisma: PrismaClient,
  ): Promise<void> {
    await prisma.administrator.update({
      where: {
        id: administrator.id,
      },
      data: {
        magic_link_token: null,
      },
    })
  }

  /**
   *
   * @param tokenPayload
   * @param email
   * @param prisma
   *
   * @description Ensure the administrator from the email address arg and the token
   * payload is one and the same.
   */
  private async updateUser(
    tokenPayload: any,
    prisma: PrismaClient,
  ): Promise<Administrator> {
    return await prisma.administrator.update({
      where: {
        id: tokenPayload.id,
      },
      data: {
        verified: true,
        magic_link_token: null,
      },
    })
  }
}
