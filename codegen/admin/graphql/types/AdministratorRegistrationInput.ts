import { Field, InputType } from 'type-graphql'
import { Administrator } from '../../../../generated/type-graphql' // won't resolve until copied to codegen destination

@InputType()
export abstract class AdministratorRegistrationInput
  implements Pick<Administrator, 'username' | 'email'>
{
  @Field((_type) => String, { nullable: false })
  username: string

  @Field((_type) => String, { nullable: false })
  email: string

  @Field((_type) => String, { nullable: false })
  password: string

  @Field((_type) => String, { nullable: true })
  initialAdministratorSecret?: string
}

@InputType()
export abstract class AdministratorCreationInput
  implements Pick<Administrator, 'username' | 'email' | 'hash' | 'salt'>
{
  @Field((_type) => String, { nullable: false })
  username: string

  @Field((_type) => String, { nullable: false })
  email: string

  @Field((_type) => String, { nullable: false })
  hash: string

  @Field((_type) => String, { nullable: false })
  salt: string
}
