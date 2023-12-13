import chalk, { chalkStderr } from 'chalk'
import { memoizedHeading } from './headingSeparator'

export const prettyPrintOriginalError = async (originalError: string) => {
  await Bun.write(Bun.stderr, '\n')
  await Bun.write(Bun.stderr, chalk.red(memoizedHeading()))
  await Bun.write(Bun.stderr, chalk.red('🎾 Original Error\n'))
  await Bun.write(Bun.stderr, chalk.red(memoizedHeading()))
  await Bun.write(Bun.stderr, chalk.red(chalkStderr(originalError)))
  await Bun.write(Bun.stderr, '\n')
}
