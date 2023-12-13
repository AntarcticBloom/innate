import { InterceptedError, type InterceptedErrorContext } from '../types'

/**
 * Intercept certain errors part of the Prisma workflow to contextualize
 * them for this system's workflow.
 *
 * The system is automating much of the Prisma workflow and the user
 * may need additional prompting by this system to understand how to
 * resolve the error.
 */
export class InterceptedPrismaError extends InterceptedError {
  name: string

  constructor(message: string, context: InterceptedErrorContext) {
    super(message, context)

    /** Indicate that the error thrown was from Prisma and enable `error instanceof InterceptedPrismaError` */
    this.name = 'InterceptedPrismaError'
  }
}

export enum PrismaErrorCodes {
  P1003 = 'P1003', // Database not found
  P4001 = 'P4001', // Database empty; requires at least one table
}

export type BaseInterceptedPrismaErrorRuntimeContext = {
  originalError: string
}

export type InterceptedPrismaErrorType =
  BaseInterceptedPrismaErrorRuntimeContext & InterceptedErrorContext

/**
 * Prisma error codes that need to be further contextualized by this
 * system to empower the user to resolve the error.
 */
export type InterceptedPrismaErrorCodes = {
  [key in PrismaErrorCodes]: InterceptedPrismaErrorType
}
