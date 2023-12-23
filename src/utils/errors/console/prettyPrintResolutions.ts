import chalk from 'chalk'
import { memoizedHeading } from './headingSeparator'
import { stderr } from '../../../scripts/utils/debug'

export const prettyPrintErrorResolutions = async (resolutions: string[]) => {
  await stderr('\n')
  await stderr(chalk.red(memoizedHeading()))
  await stderr(chalk.red('💭 Potential Resolutions\n'))
  await stderr(chalk.red(memoizedHeading()))
  await stderr(
    resolutions.map((resolution) => chalk.red(`* ${resolution}`)).join('\n'),
  )
  await stderr('\n')
}
