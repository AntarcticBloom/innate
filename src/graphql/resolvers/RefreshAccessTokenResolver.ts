import dayjs from 'dayjs'
import cookie from 'cookie'
import { GraphQLError } from 'graphql'
import jwt, { JwtPayload } from 'jsonwebtoken'
import { LogOutResolver } from './LogOutResolver'
import type { Context } from '../../types/Context'
import type { PrismaClient } from '@prisma/client'
import { User } from '../../generated/type-graphql'
import { cookieNames } from '../utility/cookieNames'
import { Mutation, Resolver, Ctx } from 'type-graphql'
import { Env } from '../../utils'

@Resolver()
export abstract class RefreshAccessTokenResolver {
  @Mutation(() => Boolean)
  async refreshAccessToken(
    @Ctx() { prisma, request, env }: Context,
  ): Promise<boolean> {
    const refreshToken = (await request.cookieStore?.get(cookieNames.refresh))
      ?.value

    if (!refreshToken) throw new GraphQLError('Unauthorized - no refresh token')

    const tokenPayload = RefreshAccessTokenResolver.verifyToken({
      env,
      token: refreshToken,
    })

    const user = await prisma.user.findUnique({
      where: {
        id: tokenPayload.id,
      },
    })

    const eligibleUser = await this.eligibleUser({
      user,
      request,
      prisma,
      refreshToken,
    })

    const accessToken = this.signAccessJWT({ user: eligibleUser, env })

    this.issueCookie({ accessToken, request })

    return true
  }

  /** @throws if the token is invalid */
  public static verifyToken({
    token,
    env,
  }: {
    token: string
    env: Env
  }): JwtPayload | never {
    try {
      const payload = jwt.verify(token, env.TOKEN_SECRET) as JwtPayload

      return payload
    } catch (error) {
      throw new GraphQLError('Unauthorized - invalid refresh token')
    }
  }

  /** @throws if no user, the user exists but is banned, or if the token was previously revoked */
  private async eligibleUser({
    user,
    prisma,
    request,
    refreshToken,
  }: {
    user: User | null
    request: Request
    prisma: PrismaClient
    refreshToken: string
  }): Promise<User> | never {
    if (!user) {
      await LogOutResolver.revokeCookies({ request, prisma })
      throw new GraphQLError('Unauthorized - user not found')
    }

    if (user.banned) {
      await LogOutResolver.revokeCookies({ request, prisma })
      throw new GraphQLError('Unauthorized - banned')
    }

    const isRevoked = await RefreshAccessTokenResolver.tokenIsRevoked({
      refreshToken,
      prisma,
    })

    if (isRevoked) {
      await request.cookieStore?.delete(cookieNames.access)
      await request.cookieStore?.delete(cookieNames.refresh)

      throw new GraphQLError('Unauthorized - token expired')
    }

    return user
  }

  static async tokenIsRevoked({
    prisma,
    refreshToken,
  }: {
    refreshToken: string
    prisma: PrismaClient
  }): Promise<boolean> {
    return (
      (
        await prisma.revoked_refresh_token.findMany({
          where: {
            value: refreshToken,
          },
        })
      ).length > 0
    )
  }

  private signAccessJWT({ user, env }: { user: User; env: Env }) {
    return this.signJWT({ id: user.id, expiresInSeconds: 10, env })
  }

  private signJWT({
    id,
    env,
    expiresInSeconds,
  }: {
    env: Env
    id: string
    expiresInSeconds: number
  }) {
    return jwt.sign({ id }, env.TOKEN_SECRET!, {
      expiresIn: expiresInSeconds,
    })
  }

  private async issueCookie({
    request,
    accessToken,
  }: {
    request: Request
    accessToken: string
  }) {
    const options = {
      path: '/',
      secure: true,
      signed: true,
      httpOnly: true,
      sameSite: 'lax' as const,
      expires: dayjs().add(10, 'second').toDate(),
    }
    const serialized = cookie.serialize(
      cookieNames.access,
      accessToken,
      options,
    )
    await request.cookieStore?.set(cookieNames.access, serialized)
  }
}
