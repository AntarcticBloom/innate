import { Field, InputType } from 'type-graphql'
import { User } from '../../generated/type-graphql'

@InputType()
export abstract class AuthenticateUserInput implements Partial<User> {
  @Field((_type) => String, { nullable: true })
  email: string

  @Field((_type) => String, { nullable: false })
  password: string
}
