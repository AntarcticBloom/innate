import {
  prettyPrintErrorMessage,
  prettyPrintOriginalError,
  prettyPrintErrorResolutions,
} from '.'
import stripAnsi from 'strip-ansi'
import { type InterceptedErrorContext } from '../types'

export const prettyPrintError = async ({
  description,
  resolutions,
  originalError,
}: InterceptedErrorContext) => {
  await prettyPrintErrorMessage(description)
  await prettyPrintErrorResolutions(resolutions)
  await prettyPrintOriginalError(stripAnsi(originalError))
}
