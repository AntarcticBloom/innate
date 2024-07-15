import cookie from 'cookie'
import { GraphQLError } from 'graphql'
import type { Context } from '@shared/types'
import { cookieNames } from '@shared/utility'
import jwt, { JwtPayload } from 'jsonwebtoken'
import { YogaInitialContext } from 'graphql-yoga'
import type { PrismaClient } from '@prisma/client'
import type { AuthChecker, ResolverData } from 'type-graphql'

/**
 * Here, "checkAuthorization" refers to checking the role(s)
 * required to perform a mutation / query / field resolver.
 *
 * @param administratorId - The user id from the token payload
 * @param roles - The roles required by the @AdminAuthorized() decorator
 * @param prisma - The ORM instance
 * @returns boolean
 */
const checkAuthorization = async ({
  roles,
  prisma,
  administratorId,
}: {
  roles: string[]
  prisma: PrismaClient
  administratorId: string
}): Promise<boolean> => {
  if (roles.length === 0) return true

  const administrator = await prisma.administrator.findUnique({
    where: {
      id: administratorId,
    },
  })

  // TODO: Check if the user has the required role(s)

  return !!administrator
}

export const unsignCookie = async ({
  request,
  cookieName,
}: {
  cookieName: string
  request: YogaInitialContext['request']
}) => {
  const cookie = (await request.cookieStore?.get(cookieNames.access))?.value

  if (!cookie) throw new GraphQLError(`Unauthorized - no ${cookieName} cookie`)

  return cookie
}

export const isAdminAuthorized: AuthChecker<Context> = async (
  { context }: ResolverData<Context>,
  roles: string[], // The roles passed into the @Authorized() decorator
): Promise<boolean> => {
  const { request, prisma, env } = context

  const cookieValue = await unsignCookie({
    request,
    cookieName: cookieNames.access,
  })

  const token = cookie.parse(cookieValue)[cookieNames.access]

  try {
    const { id }: JwtPayload = jwt.verify(token, env.TOKEN_SECRET) as JwtPayload

    // Make the admin id available in Context
    context.administratorId = id

    return await checkAuthorization({ administratorId: id, roles, prisma })
  } catch (error) {
    throw new GraphQLError('Unauthorized - invalid access token')
  }
}
