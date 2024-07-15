import { GraphQLError } from 'graphql'
import jwt, { JwtPayload } from 'jsonwebtoken'
import { YogaInitialContext } from 'graphql-yoga'
import type { Context } from '../../../../types/Context'
import type { PrismaClient } from '@prisma/client'
import type { AuthChecker, ResolverData } from 'type-graphql'
import { cookieNames } from '../utility/cookieNames'

/**
 * Here, "checkAuthorization" refers to checking the role(s)
 * required to perform a mutation / query / field resolver.
 *
 * @param userId - The user id from the token payload
 * @param roles - The roles required by the @Authorized() decorator
 * @param prisma - The ORM instance
 * @returns boolean
 */
const checkAuthorization = async (
  userId: string,
  roles: string[],
  prisma: PrismaClient,
): Promise<boolean> => {
  if (roles.length === 0) return true

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  })

  return !!user
}

export const unsignCookie = async (
  request: YogaInitialContext['request'],
  cookieName: string,
) => {
  const cookie = await request.cookieStore?.get(cookieName)

  if (!cookie) {
    throw new GraphQLError(`Unauthorized - no ${cookieName} cookie`)
  }

  return cookie.value
}

export const isAuthorized: AuthChecker<Context> = async (
  { context }: ResolverData<Context>,
  roles: string[], // The roles passed into the @Authorized() decorator
): Promise<boolean> => {
  const { request, prisma } = context

  const accessCookie = await unsignCookie(request, cookieNames.access)

  try {
    const { id }: JwtPayload = jwt.verify(
      accessCookie,
      process.env.TOKEN_SECRET!,
    ) as JwtPayload

    // Make the userId available in Context
    context.userId = id

    return await checkAuthorization(id, roles, prisma)
  } catch (error) {
    throw new GraphQLError('Unauthorized - invalid access token')
  }
}
