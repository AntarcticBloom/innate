import {
  PrismaErrorCodes,
  type InterceptedPrismaErrorCodes,
  type BaseInterceptedPrismaErrorRuntimeContext,
} from './types'
import { type InterceptedErrorContext } from '../types'
import { ERROR_REFERENCE } from '../reference'

export const prismaErrorCodes: {
  [key in PrismaErrorCodes]: <
    RuntimeContext extends BaseInterceptedPrismaErrorRuntimeContext,
  >(
    runtimeContext: RuntimeContext,
  ) => InterceptedErrorContext
} = {
  [PrismaErrorCodes.P1003]: ({ originalError }) =>
    ERROR_REFERENCE.prisma[PrismaErrorCodes.P1003]({ originalError }),
  [PrismaErrorCodes.P4001]: ({ originalError }) =>
    ERROR_REFERENCE.prisma[PrismaErrorCodes.P4001]({ originalError }),
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
