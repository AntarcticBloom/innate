import chalk from 'chalk'
import { table } from 'table'
import { stdout } from '../../utils/cli/debug'

const magenta = chalk.hex('#FF0056')
export const textbox = async (text: string) =>
  await stdout(
    magenta(
      table([[chalk.visible(chalk.dim(text))]], {
        columnDefault: {
          width: 60,
          wrapWord: true,
        },
      }),
    ),
  )
