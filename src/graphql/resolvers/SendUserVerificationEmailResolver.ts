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
export abstract class SendUserVerificationEmailResolver {
  @Mutation(() => Boolean, { nullable: false })
  async sendUserConfirmationEmail(
    @Arg('email', {
      nullable: false,
      validate: true,
      description: 'Email address',
    })
    email: string,

    @Ctx() context: Context,
  ): Promise<boolean> {
    return await SendUserVerificationEmailResolver.sendUserConfirmationEmail(
      email,
      context,
    )
  }

  public static async sendUserConfirmationEmail(
    email: string,
    { request, prisma, env }: Context,
  ): Promise<boolean | never> {
    InputValidator.validateEmail(email, request)

    const { id, verified } = await SendUserVerificationEmailResolver.getUser({
      email,
      prisma,
    })

    if (verified) return true

    const token = await SendUserVerificationEmailResolver.issueToken({
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
          subject: `Verify your email address for use with ${env.APP_NAME}`,
          from: 'Antarctic Bloom <jeff@antarcticbloom.net>',
          html: `
          <div>
            <h1>Confirm your email address for use with ${env.APP_NAME}</h1>
            <p>Click the link below to confirm your email address:</p>
            <a href="${
              env.CORS_ORIGIN
            }/verify-user-email?token=${token}&email=${encodeURIComponent(
            email,
          )}">Verify your email address</a>
`,
        },
        (err, info) => {
          if (err) throw new Error(err.message)
        },
      )
    } catch (error) {
      console.error(error)
      throw new Error('An unknown error occurred')
    }
  }

  // private static async sendConfirmationEmail(
  //   email: string,
  //   token: string,
  // ): Promise<void> | never {
  //   try {
  //     const message = {
  //       to: email,
  //       hideWarnings: false,
  //       templateId: 'd-dea8373d1d144972b19bd299156f8064',
  //       from: {
  //         email: 'jefferydreynolds@gmail.com',
  //         name: 'Joist',
  //       },
  //       dynamicTemplateData: {
  //         url: `${process.env
  //           .CORS_ORIGIN!}/confirm-user-callback?token=${token}&email=${encodeURIComponent(
  //           email,
  //         )}`,
  //       },
  //     }
  //     sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  //     /* c8 ignore start */
  //     if (process.env.NODE_ENV !== 'test') {
  //       await sgMail.send(message)
  //     }
  //   } catch (error: any) {
  //     console.error(error)
  //     throw new ErrorWithProps('An unknown error occurred')
  //   }
  //   /* c8 ignore stop */
  // }

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
     * Make token single-use by saving the token value to the user, allowing it to checked and deleted after use
     */
    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        magic_link_token: token,
      },
    })

    return token
  }

  private static async getUser({
    email,
    prisma,
  }: {
    email: string
    prisma: PrismaClient
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
}
