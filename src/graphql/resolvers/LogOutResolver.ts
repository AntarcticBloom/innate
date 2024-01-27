import dayjs from 'dayjs'
import jwt, { JwtPayload } from 'jsonwebtoken'
import type { Context } from '../../types/Context'
import type { PrismaClient } from '@prisma/client'
import { cookieNames } from '../utility/cookieNames'
import { Ctx, Mutation, Resolver } from 'type-graphql'

@Resolver()
export abstract class LogOutResolver {
  @Mutation(() => Boolean)
  public async logOut(@Ctx() { request, prisma }: Context): Promise<boolean> {
    return await LogOutResolver.revokeCookies({ request, prisma })
  }

  public static async revokeCookies({
    prisma,
    request,
  }: {
    request: Request
    prisma: PrismaClient
  }): Promise<boolean> {
    await LogOutResolver.revokeRefreshCookie({ request, prisma })

    request.cookieStore?.delete(cookieNames.access)

    return true
  }

  public static async revokeRefreshCookie({
    prisma,
    request,
  }: {
    request: Request
    prisma: PrismaClient
  }): Promise<boolean> {
    const refreshCookie = await request.cookieStore?.get(cookieNames.refresh)

    if (!refreshCookie) return true

    request.cookieStore?.delete(cookieNames.refresh)

    return true
  }

  public static async revokeRefreshToken({
    prisma,
    tokenValue,
  }: {
    tokenValue: string
    prisma: PrismaClient
  }): Promise<void> {
    let decoded: JwtPayload

    try {
      decoded = jwt.verify(tokenValue, process.env.TOKEN_SECRET!) as JwtPayload
    } catch (error) {
      return
    }

    /* c8 ignore start */
    if (!decoded.exp && process.env.NODE_ENV !== 'production') {
      throw new Error(
        'Implementation error: exp missing from JWT payload. Token does not expire.',
      )
    }
    /* c8 ignore stop */

    const actualExpiration = dayjs.unix(decoded.exp!).toDate()

    await prisma.revoked_refresh_token.create({
      data: {
        value: tokenValue,
        actual_expiration: actualExpiration,
      },
    })
  }
}
