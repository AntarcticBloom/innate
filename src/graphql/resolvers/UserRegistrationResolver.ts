import { GraphQLError } from 'graphql'
import { Context } from '../../types/Context'
import { User } from '../../generated/type-graphql'
import { InputValidator } from '../utility/InputValidator'
import { Mutation, Resolver, Arg, Field, InputType, Ctx } from 'type-graphql'
import { SendUserConfirmationEmailResolver } from './SendUserVerificationEmailResolver'

@InputType()
abstract class UserRegistrationInput {
  @Field((_type) => String, { nullable: false })
  displayName: string

  @Field((_type) => String, { nullable: false })
  email: string

  @Field((_type) => String, { nullable: false })
  password: string
}

@Resolver()
export abstract class UserRegistrationResolver {
  @Mutation(() => Boolean, { nullable: true })
  public async registerUser(
    @Arg('UserRegistrationInput', {
      validate: true,
      nullable: false,
      description: 'Register a new user',
    })
    { displayName, email, password }: UserRegistrationInput,

    @Ctx() context: Context,
  ): Promise<boolean> {
    const { request } = context

    InputValidator.validateEmail(email, request)
    InputValidator.validatePassword(password, request)
    InputValidator.validateDisplayName(displayName, request)

    const hash = await Bun.password.hash(password)

    await this.createUser({ password: hash, email, displayName }, context)

    return true
  }

  private async createUser(
    { password, email, displayName }: UserRegistrationInput,
    context: Context,
  ): Promise<User | null> {
    try {
      const emailExists = await context.prisma.user.findUnique({
        where: {
          email,
        },
      })

      if (emailExists) throw new Error('Email exists')

      const newUser = await context.prisma.user.create({
        data: {
          email,
          displayName,
          password,

          emailIsVerified: false,
          banned: false,
        },
      })

      await SendUserConfirmationEmailResolver.sendUserConfirmationEmail(
        newUser.email,
        context,
      )

      return newUser
    } catch (error: any) {
      if (error.message === 'Username exists') {
        throw new Error(
          'A user with that displayName already exists. Please try another.',
        )
      }

      if (
        error.code === 'P2002' && // Prisma unique contraint error code
        error.meta.target.includes('email')
      ) {
        const accountOwner = await context.prisma.user.findUnique({
          where: {
            email,
          },
        })

        /* c8 ignore start */

        /**
         * This isn't likely to ever happen because this db search
         * is triggered when the user exists already
         */
        if (!accountOwner) {
          throw new GraphQLError('An unknown error occurred')
        }

        /* c8 ignore stop */
      }

      return null
    }
  }
}
