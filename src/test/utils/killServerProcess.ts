import { join } from 'path'
import { readdirSync } from 'fs'
import { ENV } from '../../utils'

export const killServerProcess = () => {
  const pidProcNative = Bun.spawnSync([
    'lsof',
    '-ti',
    `:${ENV.ADMIN_SERVER_PORT_NATIVE}`,
  ])

  const pidProcExpo = Bun.spawnSync(['lsof', '-ti', `:8081`])
  const pidProcExpoWeb = Bun.spawnSync(['lsof', '-ti', `:19006`])

  const pidsNative = parsePid(pidProcNative.stdout)
  const pidsExpo = parsePid(pidProcExpo.stdout)
  const pidsExpoWeb = parsePid(pidProcExpoWeb.stdout)

  Bun.spawnSync(['kill', pidsExpo[0]])
  Bun.spawnSync(['kill', pidsExpoWeb[0]])

  killClientAPIs()

  const pidProcWeb = Bun.spawnSync([
    'lsof',
    '-ti',
    `:${ENV.ADMIN_SERVER_PORT_WEB}`,
  ])
  const pidsWeb = parsePid(pidProcWeb.stdout)
  Bun.spawnSync(['kill', pidsWeb[1]])
  Bun.spawnSync(['kill', pidsNative[0]])
}

function parsePid(buffer: Buffer) {
  return buffer
    .toString('utf-8')
    .split(/\n/)
    .filter((str: string) => !!str)
}

/** There are an indefinite number of server processes for native and web; loop through API instances and kill corresponding process*/
function killClientAPIs() {
  const apiVersions = readdirSync(join(import.meta.dir, '../../api/downstream'))
  let currentPort = parseInt(ENV.SERVER_PORT_RANGE_MIN, 10)
  console.log({ apiVersions })

  for (const _ of apiVersions) {
    console.log({ currentPort })
    const pidProc = Bun.spawnSync(['lsof', '-ti', `:${currentPort}`])
    const pids = parsePid(pidProc.stdout)
    Bun.spawnSync(['kill', pids[0]])
    currentPort += 1
  }
}
