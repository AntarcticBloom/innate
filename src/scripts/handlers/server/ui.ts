import path from 'path'
import chalk from 'chalk'
import { watch } from 'fs'
import type { Subprocess } from 'bun'
import { killServerProcess } from '../../../test/utils'
import { pm } from '@api/processManager/ProcessManager'
import { DebugLevel, stdout, type CLIOptions } from '@utils'

const startUI = (): Subprocess<'inherit', 'inherit', 'inherit'> => {
  const proc = Bun.spawn(['bun', 'run', 'start'], {
    cwd: `${process.cwd()}/ui`,
    stdout: 'inherit',
    stdio: ['inherit', 'inherit', 'inherit'],
  })
  return proc
}

export async function startUIServer(options: CLIOptions) {
  const uiProcess = startUI()

  const watcher = watch(
    path.join(import.meta.dir, '../../../'),
    { recursive: true },
    async (_, filename) => {
      if (!filename?.includes('generated/')) {
        killServerProcess()
        uiProcess.kill()

        watcher.close()

        await pm.start({ options })
        await startUIServer(options)
      }
    },
  )

  process.on('SIGINT', () => {
    watcher.close()
    killServerProcess()
    process.exit(0)
  })

  return uiProcess
}
