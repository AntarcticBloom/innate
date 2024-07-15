import { type Env } from '../..'
import { InterceptedError, type InterceptedErrorContext } from '../types'

/**
 * Intercept certain errors part of the NodePostgres workflow to contextualize
 * them for this system's workflow.
 *
 * The system is automating much of the NodePostgres workflow and the user
 * may need additional prompting by this system to understand how to
 * resolve the error.
 */
export class InterceptedNodePostgresError extends InterceptedError {
  name: string

  constructor(message: string, context: InterceptedErrorContext) {
    super(message, context)

    /** Indicate that the error thrown was from NodePostgres and enable `error instanceof InterceptedNodePostgresError` */
    this.name = 'InterceptedNodePosgresError'
  }
}

export enum NodePostgresErrorCodes {
  /** Database does not exist */
  '3D000' = '3D000',
  /** Relation does not exist */
  '42P01' = '42P01',
}

export type BaseInterceptedNodePostgresErrorRuntimeContext = {
  originalError: string
  env: Env
}

export type InterceptedNodePostgresErrorType =
  BaseInterceptedNodePostgresErrorRuntimeContext & InterceptedErrorContext

/**
 * NodePostgres error codes that need to be further contextualized by this
 * system to empower the user to resolve the error.
 */
export type InterceptedNodePostgresErrorCodes = {
  [key in NodePostgresErrorCodes]: InterceptedNodePostgresErrorType
}
