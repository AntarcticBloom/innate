import {
  PrismaErrorCodes,
  type BaseInterceptedPrismaErrorRuntimeContext,
} from './prisma'
import {
  NodePostgresErrorCodes,
  type BaseInterceptedNodePostgresErrorRuntimeContext,
} from './nodePostgres'
import { type Env } from '..'

export type InterceptedErrorContext = {
  env: Env

  /** A brief description for easy reference */
  description: string

  /** A list of possible resolutions */
  resolutions: string[]

  /** The original error message that was thrown by the intercepted service; may include ANSI */
  originalError: string
}

export class InterceptedError extends Error {
  env?: Env
  description?: string
  resolutions?: string[]
  originalError?: string

  constructor(
    message: string,
    { description, resolutions, originalError, env }: InterceptedErrorContext,
  ) {
    super(message)

    this.env = env
    this.description = description
    this.resolutions = resolutions
    this.originalError = originalError
  }
}

export enum SystemErrorCodes {
  UnableToCreateDatabase = 'UnableToCreateDatabase',
  UnableToDetectSchemata = 'UnableToDetectSchemata',
  UnableToIntrospectDatabase = 'UnableToIntrospectDatabase',
  UnableToInitializeDatabase = 'UnableToInitializeDatabase',
}

export type ErrorReference = {
  prisma: {
    [key in PrismaErrorCodes]: (
      runtimeContext: BaseInterceptedPrismaErrorRuntimeContext,
    ) => InterceptedErrorContext
  }
  nodePostgres: {
    [key in NodePostgresErrorCodes]: (
      runtimeContext: BaseInterceptedNodePostgresErrorRuntimeContext /* | runtime contexts from other external services */,
    ) => InterceptedErrorContext
  }
  system: {
    [key in SystemErrorCodes]: (
      runtimeContext: BaseInterceptedPrismaErrorRuntimeContext /* | runtime contexts from other external services */,
    ) => InterceptedErrorContext
  }
}

export enum DebugLevel {
  Warning = 0,
  Info = 1,
  Error = 2,
}
