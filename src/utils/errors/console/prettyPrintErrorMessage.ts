import chalk, { chalkStderr } from 'chalk'
import { memoizedHeading } from './headingSeparator'
import { stderr } from '../../../scripts/utils/debug'

export const prettyPrintErrorMessage = async (errorMessage: string) => {
  await stderr('\n')
  await stderr(chalk.red(memoizedHeading()))
  await stderr(chalk.red('🚫 Error\n'))
  await stderr(chalk.red(memoizedHeading()))
  await stderr(chalk.red(chalkStderr(errorMessage)))
  await stderr('\n')
}
