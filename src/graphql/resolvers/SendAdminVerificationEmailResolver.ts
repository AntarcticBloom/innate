import { sign } from 'jsonwebtoken'
import nodemailer from 'nodemailer'
import { GraphQLError } from 'graphql'
import { type Env } from '../../utils'
import type { PrismaClient } from '@prisma/client'
import type { Context } from '../../types/Context'
import { User } from '../../generated/type-graphql'
import { InputValidator } from '../utility/InputValidator'
import { Resolver, Mutation, Arg, Ctx } from 'type-graphql'

@Resolver()
export abstract class SendAdminVerificationEmailResolver {
  @Mutation(() => Boolean, { nullable: false })
  async sendAdminVerificationEmail(
    @Arg('email', {
      nullable: false,
      validate: true,
      description: 'Email address',
    })
    email: string,

    @Ctx() context: Context,
  ): Promise<boolean> {
    console.log('😁 SendAdminVerificationEmailResolver hit')

    return await SendAdminVerificationEmailResolver.sendAdminVerificationEmail(
      email,
      context,
    )
  }

  public static async sendAdminVerificationEmail(
    email: string,
    { request, prisma, env }: Context,
  ): Promise<boolean | never> {
    InputValidator.validateEmail(email, request)

    const { id, verified } =
      await SendAdminVerificationEmailResolver.getAdministrator({
        email,
        prisma,
      })

    if (verified) return true

    const token = await SendAdminVerificationEmailResolver.issueToken({
      env,
      prisma,
      userId: id,
    })

    await this.sendConfirmationEmail({ email, token, env })

    return true
  }

  private static async sendConfirmationEmail({
    env,
    email,
    token,
  }: {
    env: Env
    email: string
    token: string
  }): Promise<void> | never {
    try {
      let transporter = nodemailer.createTransport({
        auth: {
          user: env.SMTP_USER,
          pass: env.SMTP_PASSWORD,
        },
        host: env.SMTP_HOST,
        port: env.SMTP_PORT,
        secure: env.SMTP_SECURE,
      } as any)

      transporter.sendMail(
        {
          to: email,
          subject: 'Verify your email address for use with Innate CMS',
          from: 'Antarctic Bloom <jeff@antarcticbloom.net>',
          html: `
          <div>
            <h1>Confirm your email address for use with Innate CMS</h1>
            <p>Click the link below to confirm your email address:</p>
            <a href="${
              env.CORS_ORIGIN
            }/verify-administrator-email-callback?token=${token}&email=${encodeURIComponent(
            email,
          )}">Verify your email address</a>
`,
        },
        (err, info) => {
          console.log({ err, info })
          if (err) throw new Error(err.message)
        },
      )
    } catch (error) {
      console.error(error)
      throw new Error('An unknown error occurred')
    }
  }

  private static async issueToken({
    env,
    userId,
    prisma,
  }: {
    env: Env
    userId: string
    prisma: PrismaClient
  }): Promise<string> {
    const token = sign({ id: userId }, env.TOKEN_SECRET, {
      expiresIn: 60 * 5, // 5 minutes
    })

    /**
     * Make token single-use by saving the token value to the administrator, allowing it to checked and deleted after use
     */
    await prisma.administrator.update({
      where: {
        id: userId,
      },
      data: {
        magic_link_token: token,
      },
    })

    return token
  }

  private static async getAdministrator({
    email,
    prisma,
  }: {
    email: string
    prisma: PrismaClient
  }): Promise<User> | never {
    const administrator = await prisma.administrator.findUnique({
      where: {
        email,
      },
    })

    if (!administrator) {
      throw new GraphQLError(
        'Unable to find administrator with provided credentials.',
      )
    }

    return administrator
  }
}
