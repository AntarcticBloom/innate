import { Field, InputType } from 'type-graphql'

@InputType()
export abstract class VerifyAdministratorEmailInput {
  @Field((_type) => String, { nullable: false })
  email: string

  @Field((_type) => String, { nullable: false })
  token: string
}
