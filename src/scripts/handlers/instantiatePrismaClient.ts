import { PrismaClient } from '@prisma/client'

export const instantiatePrismaClient = () => new PrismaClient()
