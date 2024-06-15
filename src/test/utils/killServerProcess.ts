import { generateEnv } from '../../utils'

export const killServerProcess = async () => {
  const env = generateEnv()

  const pidProcWeb = Bun.spawnSync([
    'lsof',
    '-ti',
    `:${env.ADMIN_SERVER_PORT_WEB}`,
  ])

  const pidProcNative = Bun.spawnSync([
    'lsof',
    '-ti',
    `:${env.ADMIN_SERVER_PORT_NATIVE}`,
  ])

  const pidProcExpo = Bun.spawnSync(['lsof', '-ti', `:8081`])
  const pidProcExpoWeb = Bun.spawnSync(['lsof', '-ti', `:19006`])

  const pidsWeb = parsePid(pidProcWeb.stdout)
  const pidsNative = parsePid(pidProcNative.stdout)
  const pidsExpo = parsePid(pidProcExpo.stdout)
  const pidsExpoWeb = parsePid(pidProcExpoWeb.stdout)

  Bun.spawnSync(['kill', pidsWeb[1]])
  Bun.spawnSync(['kill', pidsNative[0]])
  Bun.spawnSync(['kill', pidsExpo[0]])
  Bun.spawnSync(['kill', pidsExpoWeb[0]])
}

function parsePid(buffer: Buffer) {
  return buffer
    .toString('utf-8')
    .split(/\n/)
    .filter((str: string) => !!str)
}
