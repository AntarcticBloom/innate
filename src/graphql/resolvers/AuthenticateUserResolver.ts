import dayjs from 'dayjs'
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
  @Mutation(() => Boolean, { nullable: false })
  async authenticateUser(
    @Arg('AuthenticateUserInput', {
      nullable: false,
      description: 'Authenticate user',
      validate: true,
    })
    { email, password }: AuthenticateUserInput,
    @Ctx() { prisma, request }: Context,
  ): Promise<boolean> {
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
          request,
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
    if (!user.password) {
      console.error('Hash undefined')
      throw new ErrorWithProps('An unknown error occurred')
    }
    /* c8 ignore stop */

    await this.comparePasswords(password, user.password)

    const refreshToken = this.signRefreshJWT(user)

    this.issueCookie(refreshToken, res)

    return true
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
      throw new ErrorWithProps('Unable to find user with provided credentials.')
    }

    return user
  }

  private async comparePasswords(
    input: string,
    hash: string,
  ): Promise<true> | never {
    const passwordMatches = await bcrypt.compare(input, hash)

    if (!passwordMatches) {
      throw new ErrorWithProps('Unable to find user with provided credentials.')
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

  private issueCookie(refreshToken: string, res: FastifyReply) {
    const options: CookieSerializeOptions = {
      path: '/',
      secure: true,
      httpOnly: true,
      sameSite: 'lax' as const,
      domain: (() => {
        switch (true) {
          case process.env.NODE_ENV === 'production':
            return 'bedbug.app'

          case process.env.NEXT_PUBLIC_ETC_HOSTS === 'true':
            return 'bedbug.com'

          default:
            return 'localhost'
        }
      })(),
    }

    res.setCookie(cookieNames.refresh, refreshToken, {
      ...options,
      expires: dayjs().add(7, 'day').toDate(),
    })
  }
}
