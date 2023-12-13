import {
  prettyPrintErrorMessage,
  prettyPrintOriginalError,
  prettyPrintErrorResolutions,
} from '.'
import stripAnsi from 'strip-ansi'
import { type InterceptedErrorContext } from '../types'

export const prettyPrintError = async (
  { description, resolutions, originalError }: InterceptedErrorContext,
  isDebugMode: boolean,
) => {
  await prettyPrintErrorMessage(description)
  await prettyPrintErrorResolutions(resolutions)
  if (isDebugMode) await prettyPrintOriginalError(stripAnsi(originalError))
}
