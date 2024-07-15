import { Env } from '@utils'
import type { PrismaClient } from '@prisma/client'
import type { YogaInitialContext } from 'graphql-yoga'

// @ts-ignore - generated files
import { Administrator, User } from '../../generated/type-graphql'

export type Context = YogaInitialContext & {
  env: Env
  prisma: PrismaClient

  userId?: string
  administratorId?: string

  user?: User
  administrator?: Administrator
}
