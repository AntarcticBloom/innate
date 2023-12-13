import chalk, { chalkStderr } from 'chalk'
import { memoizedHeading } from './headingSeparator'

export const prettyPrintErrorMessage = async (errorMessage: string) => {
  await Bun.write(Bun.stderr, '\n')
  await Bun.write(Bun.stderr, chalk.red(memoizedHeading()))
  await Bun.write(Bun.stderr, chalk.red('🚫 Error\n'))
  await Bun.write(Bun.stderr, chalk.red(memoizedHeading()))
  await Bun.write(Bun.stderr, chalk.red(chalkStderr(errorMessage)))
  await Bun.write(Bun.stderr, '\n')
}
