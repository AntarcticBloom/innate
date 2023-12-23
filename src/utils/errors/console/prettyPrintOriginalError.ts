import chalk, { chalkStderr } from 'chalk'
import { memoizedHeading } from './headingSeparator'
import { stderr } from '../../../scripts/utils/debug'

export const prettyPrintOriginalError = async (originalError: string) => {
  await stderr('\n')
  await stderr(chalk.red(memoizedHeading()))
  await stderr(chalk.red('🎾 Original Error\n'))
  await stderr(chalk.red(memoizedHeading()))
  await stderr(chalk.red(chalkStderr(originalError)))
  await stderr('\n')
}
