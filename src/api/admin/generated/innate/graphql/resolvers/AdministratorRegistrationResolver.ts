/**
 * NOTICE:
 * This file is generated and managed programmatically by Innate.
 * Do not edit this file directly. Edits to this file will be overwritten.
 */

import { randomBytes } from 'crypto'
import { GraphQLError } from 'graphql'
import { type Context } from '@shared/types'
import {
  AdministratorCreationInput,
  AdministratorRegistrationInput,
} from '../types/AdministratorRegistrationInput' // won't resolve until copied to codegen destination
import { InputValidator } from '@shared/utility'
import { Mutation, Resolver, Arg, Ctx } from 'type-graphql'
import { Administrator } from '../../../../generated/type-graphql' // won't resolve until copied to codegen destination
import { SendAdminVerificationEmailResolver } from './SendAdminVerificationEmailResolver' // won't resolve until copied to codegen destination

@Resolver()
export abstract class AdministratorRegistrationResolver {
  @Mutation(() => Administrator, { nullable: true })
  public async registerAdministrator(
    @Arg('AdministratorRegistrationInput', {
      nullable: false,
      description: 'Register a new administrator',
    })
    {
      username,
      email,
      password,
      initialAdministratorSecret,
    }: AdministratorRegistrationInput,

    @Ctx() context: Context,
  ): Promise<Administrator> {
    const { request, env, prisma } = context

    InputValidator.validateEmail(email, request)
    InputValidator.validatePassword(password, request)
    InputValidator.validateDisplayName(username, request)

    const administratorsCount = await prisma.administrator.count()
    if (
      administratorsCount === 0 &&
      initialAdministratorSecret !== env.INITIAL_ADMINISTRATOR_SECRET
    ) {
      throw new GraphQLError('Initial administrator secret is incorrect')
    }

    const salt = randomBytes(16).toString('base64')
    const hash = await Bun.password.hash(`${salt}${password}`)

    const administrator = await this.createAdministrator(
      { hash, salt, email, username },
      context,
    )

    return administrator
  }

  private async createAdministrator(
    { hash, salt, email, username }: AdministratorCreationInput,
    context: Context,
  ): Promise<Administrator> {
    const emailExists = await context.prisma.administrator.findUnique({
      where: {
        email,
      },
    })

    if (emailExists) throw new GraphQLError('Email exists')

    const newAdministrator = await context.prisma.administrator.create({
      data: {
        hash,
        salt,
        email,
        username,
      },
    })

    await SendAdminVerificationEmailResolver.sendAdminVerificationEmail(
      newAdministrator.email,
      context,
    )

    return newAdministrator
  }
}
