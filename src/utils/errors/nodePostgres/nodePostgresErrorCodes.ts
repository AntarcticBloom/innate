import { ENV } from '../../generateEnv'
import { ERROR_REFERENCE } from '../reference'
import {
  NodePostgresErrorCodes,
  type BaseInterceptedNodePostgresErrorRuntimeContext,
} from './types'
import { type InterceptedErrorContext } from '../types'

export const nodePostgresErrorCodes: {
  [key in NodePostgresErrorCodes]: <
    RuntimeContext extends BaseInterceptedNodePostgresErrorRuntimeContext,
  >(
    runtimeContext: RuntimeContext,
  ) => InterceptedErrorContext
} = {
  [NodePostgresErrorCodes['3D000']]: ({ originalError }) =>
    ERROR_REFERENCE.nodePostgres[NodePostgresErrorCodes['3D000']]({
      originalError,
      env: ENV,
    }),
  [NodePostgresErrorCodes['42P01']]: ({ originalError }) =>
    ERROR_REFERENCE.nodePostgres[NodePostgresErrorCodes['42P01']]({
      originalError,
      env: ENV,
    }),
}
