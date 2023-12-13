import {
  PrismaErrorCodes,
  type BaseInterceptedPrismaErrorRuntimeContext,
} from './prisma'

export type InterceptedErrorContext = {
  /** A brief description for easy reference */
  description: string

  /** A list of possible resolutions */
  resolutions: string[]

  /** The original error message that was thrown by the intercepted service; may include ANSI */
  originalError: string
}

export class InterceptedError extends Error {
  description?: string
  resolutions?: string[]
  originalError?: string

  constructor(
    message: string,
    { description, resolutions, originalError }: InterceptedErrorContext,
  ) {
    super(message)

    this.description = description
    this.resolutions = resolutions
    this.originalError = originalError
  }
}

export enum SystemErrorCodes {
  UnableToCreateDatabase = 'UnableToCreateDatabase',
  UnableToIntrospectDatabase = 'UnableToIntrospectDatabase',
}

export type ErrorReference = {
  prisma: {
    [key in PrismaErrorCodes]: (
      runtimeContext: BaseInterceptedPrismaErrorRuntimeContext,
    ) => InterceptedErrorContext
  }
  system: {
    [key in SystemErrorCodes]: (
      runtimeContext: BaseInterceptedPrismaErrorRuntimeContext /* | runtime contexts from other external services */,
    ) => InterceptedErrorContext
  }
}
