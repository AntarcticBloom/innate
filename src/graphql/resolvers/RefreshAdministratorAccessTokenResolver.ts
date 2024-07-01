import dayjs from 'dayjs'
import cookie from 'cookie'
import { GraphQLError } from 'graphql'
import type { Env } from '../../utils'
import jwt, { JwtPayload } from 'jsonwebtoken'
import { LogOutResolver } from './LogOutResolver'
import type { Context } from '../../types/Context'
import type { PrismaClient } from '@prisma/client'
import { cookieNames } from '../utility/cookieNames'
import { Mutation, Resolver, Ctx } from 'type-graphql'
import { Administrator } from '../../generated/type-graphql'

@Resolver()
export abstract class RefreshAdministratorAccessTokenResolver {
  @Mutation(() => Boolean)
  async refreshAdministratorAccessToken(
    @Ctx() { prisma, request, env }: Context,
  ): Promise<boolean> {
    const allCookies = await request.cookieStore?.getAll()

    const refreshToken = (await request.cookieStore?.get(cookieNames.refresh))
      ?.value

    if (!refreshToken) throw new GraphQLError('Unauthorized - no refresh token')

    const token = cookie.parse(refreshToken)[cookieNames.refresh]

    const tokenPayload = RefreshAdministratorAccessTokenResolver.verifyToken({
      env,
      token,
    })

    const administrator = await prisma.administrator.findUnique({
      where: {
        id: tokenPayload.id,
      },
    })

    const eligibleUser = await this.eligibleAdministrator({
      prisma,
      request,
      refreshToken,
      administrator,
    })

    const accessToken = this.signAccessJWT({ administrator: eligibleUser, env })

    this.issueCookie({ accessToken, request })

    return true
  }

  /** @throws if the token is invalid */
  public static verifyToken({
    env,
    token,
  }: {
    env: Env
    token: string
  }): JwtPayload | never {
    try {
      const payload = jwt.verify(token, env.TOKEN_SECRET!) as JwtPayload

      return payload
    } catch (error) {
      throw new GraphQLError('Unauthorized - invalid refresh token')
    }
  }

  /** @throws if no administrator, the administrator exists but is banned, or if the token was previously revoked */
  private async eligibleAdministrator({
    prisma,
    request,
    refreshToken,
    administrator,
  }: {
    request: Request
    prisma: PrismaClient
    administrator: Administrator | null
    refreshToken: string
  }): Promise<Administrator> | never {
    if (!administrator) {
      await LogOutResolver.revokeCookies({ request, prisma })
      throw new GraphQLError('Unauthorized - user not found')
    }

    if (administrator.banned) {
      await LogOutResolver.revokeCookies({ request, prisma })
      throw new GraphQLError('Unauthorized - banned')
    }

    const isRevoked =
      await RefreshAdministratorAccessTokenResolver.tokenIsRevoked({
        refreshToken,
        prisma,
      })

    if (isRevoked) {
      await request.cookieStore?.delete(cookieNames.access)
      await request.cookieStore?.delete(cookieNames.refresh)

      throw new GraphQLError('Unauthorized - token expired')
    }

    return administrator
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
        await prisma.revokedRefreshToken.findMany({
          where: {
            value: refreshToken,
          },
        })
      ).length > 0
    )
  }

  private signAccessJWT({
    env,
    administrator,
  }: {
    env: Env
    administrator: Administrator
  }) {
    return this.signJWT({ id: administrator.id, expiresInSeconds: 10, env })
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
    return jwt.sign({ id }, env.TOKEN_SECRET, {
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
      signed: true,
      httpOnly: true,
      sameSite: 'none' as const,
      expires: dayjs().add(10, 'second').toDate(),
      secure: process.env.NODE_ENV === 'production',
    }

    const accessCookie = cookie.serialize(
      cookieNames.access,
      accessToken,
      options,
    )

    await request.cookieStore?.set(cookieNames.access, accessCookie)
  }
}
