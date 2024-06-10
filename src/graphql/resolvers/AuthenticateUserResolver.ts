import dayjs from 'dayjs'
import cookie from 'cookie'
import { GraphQLError } from 'graphql'
import jwt, { JwtPayload } from 'jsonwebtoken'
import { LogOutResolver } from './LogOutResolver'
import type { Context } from '../../types/Context'
import type { PrismaClient } from '@prisma/client'
import { User } from '../../generated/type-graphql'
import { cookieNames } from '../utility/cookieNames'
import { RefreshAccessTokenResolver } from './RefreshAccessTokenResolver'
import { Arg, Ctx, Field, Mutation, Resolver, InputType } from 'type-graphql'

const { sign } = jwt

@InputType()
abstract class AuthenticateUserInput implements Partial<User> {
  @Field((_type) => String, { nullable: true })
  email: string

  @Field((_type) => String, { nullable: false })
  password: string
}

@Resolver()
export abstract class AuthenticateUserResolver {
  @Mutation(() => User, { nullable: false })
  async authenticateUser(
    @Arg('AuthenticateUserInput', {
      nullable: false,
      description: 'Authenticate user',
      validate: true,
    })
    { email, password }: AuthenticateUserInput,
    @Ctx() { prisma, request, env }: Context,
  ): Promise<User> {
    const existingRefreshToken = (
      await request.cookieStore?.get(cookieNames.refresh)
    )?.value

    /* Prevent the user from using this mutation to obtain multiple refresh tokens */
    if (existingRefreshToken) {
      /** Ensure the token in the cookie is not revoked */
      const isRevoked = await RefreshAccessTokenResolver.tokenIsRevoked({
        prisma,
        refreshToken: existingRefreshToken,
      })

      let validToken: JwtPayload | null
      try {
        validToken = RefreshAccessTokenResolver.verifyToken({
          env,
          token: existingRefreshToken,
        })
      } catch (error) {
        validToken = null
        console.log({ error })
        await LogOutResolver.revokeCookies({ request, prisma })
      }

      if (!isRevoked && validToken)
        throw new GraphQLError('User is already authenticated.')
    }

    const user = await this.getUser({
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
      salt: user.salt,
      hash: user.hash,
      input: password,
    })

    const refreshToken = this.signRefreshJWT(user)

    this.issueCookie({ refreshToken, request })

    return user
  }

  private async getUser({
    prisma,
    email,
  }: {
    prisma: PrismaClient
    email: string
  }): Promise<User> | never {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (!user) {
      throw new GraphQLError('Unable to find user with provided credentials.')
    }

    return user
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

    if (!passwordMatches) {
      throw new GraphQLError('Unable to find user with provided credentials.')
    }

    return true
  }

  private signRefreshJWT(user: User) {
    return this.signJWT(user.id, 60 * 60 * 24 * 7)
  }

  private signJWT(id: string, expiresIn: number) {
    return sign({ id }, process.env.TOKEN_SECRET!, {
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
      secure: true,
      httpOnly: true,
      sameSite: 'lax' as const,
      expires: dayjs().add(7, 'day').toDate(),

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
