import path from 'path'
import type { SpawnOptions } from 'bun'

export const spawnExampleProcess = (
  command: string[],
  options?: SpawnOptions.OptionsObject,
) => {
  const debug = import.meta.env['DEBUG']

  return Bun.spawn(command, {
    stdout: debug ? 'inherit' : 'ignore',
    cwd: path.join(import.meta.dir, '../../../../example'),

    ...(options ?? {}),
  })
}
