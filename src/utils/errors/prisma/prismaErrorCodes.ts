import {
  PrismaErrorCodes,
  type InterceptedPrismaErrorCodes,
  type BaseInterceptedPrismaErrorRuntimeContext,
} from './types'
import { ENV } from '../../generateEnv'
import { ERROR_REFERENCE } from '../reference'
import { type InterceptedErrorContext } from '../types'

export const prismaErrorCodes: {
  [key in PrismaErrorCodes]: <
    RuntimeContext extends BaseInterceptedPrismaErrorRuntimeContext,
  >(
    runtimeContext: RuntimeContext,
  ) => InterceptedErrorContext
} = {
  [PrismaErrorCodes.P1003]: ({ originalError }) =>
    ERROR_REFERENCE.prisma[PrismaErrorCodes.P1003]({ originalError, env: ENV }),
  [PrismaErrorCodes.P4001]: ({ originalError }) =>
    ERROR_REFERENCE.prisma[PrismaErrorCodes.P4001]({ originalError, env: ENV }),
}

export const findPrismaErrorCode = (
  stderr: string,
): keyof InterceptedPrismaErrorCodes | undefined => {
  let currentPrismaErrorCode: PrismaErrorCodes | undefined

  const doesContainErrorCode = Object.keys(prismaErrorCodes).some(
    (prismaErrorCode) => {
      currentPrismaErrorCode = prismaErrorCode as PrismaErrorCodes
      return new RegExp(`Error: \n${prismaErrorCode}`).test(stderr)
    },
  )

  return doesContainErrorCode ? currentPrismaErrorCode : undefined
}
