import chalk from 'chalk'
import { memoizedHeading } from './headingSeparator'

export const prettyPrintErrorResolutions = async (resolutions: string[]) => {
  await Bun.write(Bun.stderr, '\n')
  await Bun.write(Bun.stderr, chalk.red(memoizedHeading()))
  await Bun.write(Bun.stderr, chalk.red('💭 Potential Resolutions\n'))
  await Bun.write(Bun.stderr, chalk.red(memoizedHeading()))
  await Bun.write(
    Bun.stderr,
    resolutions.map((resolution) => chalk.red(`* ${resolution}`)).join('\n'),
  )
  await Bun.write(Bun.stderr, '\n')
}
