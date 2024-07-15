import { Field, InputType } from 'type-graphql'
import { User } from '../../../../generated/type-graphql' // won't resolve until copied to codegen destination

@InputType()
export abstract class AuthenticateUserInput implements Partial<User> {
  @Field((_type) => String, { nullable: true })
  email: string

  @Field((_type) => String, { nullable: false })
  password: string
}
