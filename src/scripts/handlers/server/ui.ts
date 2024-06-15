import type { Subprocess } from 'bun'
import { DebugLevel, stdout } from '../../../utils'
import { killServerProcess } from '../../../test/utils'

export const startUI = ({
  debug,
}: {
  debug: DebugLevel
}): Subprocess<'inherit', 'inherit', 'inherit'> => {
  const proc = Bun.spawn(['bun', 'run', 'start'], {
    cwd: `${process.cwd()}/ui`,
    stdout: 'inherit',
    stdio: ['inherit', 'inherit', 'inherit'],
  })

  return proc
}
