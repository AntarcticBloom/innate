import dayjs from 'dayjs'
import cookie from 'cookie'
import { Env } from '../../utils'
import { sign } from 'jsonwebtoken'
import { GraphQLError } from 'graphql'
import { JwtPayload } from 'jsonwebtoken'
import { LogOutResolver } from './LogOutResolver'
import type { PrismaClient } from '@prisma/client'
import type { Context } from '../../types/Context'
import { User } from '../../generated/type-graphql'
import { cookieNames } from '../utility/cookieNames'
import { Arg, Ctx, Mutation, Resolver } from 'type-graphql'
import type { Administrator } from '../../generated/type-graphql'
import { AuthenticateUserInput } from '../types/AuthenticateUserInput'
import { RefreshAccessTokenResolver } from './RefreshAccessTokenResolver'

@Resolver()
export abstract class AuthenticateAdministratorResolver {
  @Mutation(() => User, { nullable: false })
  async authenticateAdministrator(
    @Arg('AuthenticateAdministratorInput', {
      nullable: false,
      description: 'Authenticate administrator',
    })
    { email, password }: AuthenticateUserInput,
    @Ctx() { prisma, request, env }: Context,
  ): Promise<User> {
    const existingRefreshToken = (
      await request.cookieStore?.get(cookieNames.refresh)
    )?.value

    /* Prevent the user from using this mutation to obtain multiple refresh tokens */
    if (existingRefreshToken) {
      const deserialized = cookie.parse(existingRefreshToken)

      /** Ensure the token in the cookie is not revoked */
      const isRevoked = await RefreshAccessTokenResolver.tokenIsRevoked({
        prisma,
        refreshToken: deserialized.refresh,
      })

      let validToken: JwtPayload | null
      try {
        validToken = RefreshAccessTokenResolver.verifyToken({
          env,
          token: deserialized.refresh,
        })
      } catch (error) {
        console.log({ error })
        validToken = null
        await LogOutResolver.revokeCookies({ request, prisma })
      }

      if (!isRevoked && validToken)
        return await this.getAdministrator({ prisma, email })
    }

    const user = await this.getAdministrator({
      prisma,
      email,
    })

    /* c8 ignore start */

    /** Not sure this would ever happen - password is not
     * nullable in the database, but Prisma marks it as
     * string | undefined, likely because it is omitted
     * from the SDL schema
     */
    if (!user.hash) {
      console.error('Hash undefined')
      throw new GraphQLError('An unknown error occurred')
    }
    /* c8 ignore stop */

    await this.comparePasswords({
      input: password,
      salt: user.salt,
      hash: user.hash,
    })

    const refreshToken = this.signRefreshJWT({ administrator: user, env })

    this.issueCookie({ refreshToken, request })

    return user
  }

  private async getAdministrator({
    email,
    prisma,
  }: {
    prisma: PrismaClient
    email: string
  }): Promise<Administrator> | never {
    console.log({ email })
    const administrator = await prisma.administrator.findUnique({
      where: {
        email,
      },
    })

    if (!administrator) {
      throw new GraphQLError('Unable to find user with provided credentials.')
    }

    return administrator
  }

  private async comparePasswords({
    hash,
    salt,
    input,
  }: {
    hash: string
    salt: string
    input: string
  }): Promise<true> | never {
    const passwordMatches = await Bun.password.verify(`${salt}${input}`, hash)

    console.log({ passwordMatches })

    if (!passwordMatches) {
      throw new GraphQLError('Unable to find user with provided credentials.')
    }

    return true
  }

  private signRefreshJWT({
    env,
    administrator,
  }: {
    env: Env
    administrator: Administrator
  }) {
    return this.signJWT({
      env,
      id: administrator.id,
      expiresIn: 60 * 60 * 24 * 7,
    })
  }

  private signJWT({
    id,
    env,
    expiresIn,
  }: {
    id: string
    env: Env
    expiresIn: number
  }) {
    return sign({ id }, env.TOKEN_SECRET!, {
      expiresIn,
    })
  }

  private async issueCookie({
    request,
    refreshToken,
  }: {
    request: Request
    refreshToken: string
  }) {
    const options = {
      path: '/',
      httpOnly: true,
      sameSite: false,
      expires: dayjs().add(7, 'day').toDate(),
      secure: process.env.NODE_ENV === 'production',

      domain: (() => {
        // TODO: Make this configurable via .env
        switch (true) {
          default:
            return 'localhost'
        }
      })(),
    }

    const serialized = cookie.serialize(
      cookieNames.refresh,
      refreshToken,
      options,
    )

    await request.cookieStore?.set(cookieNames.refresh, serialized)
  }
}
