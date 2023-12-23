export const killServerProcess = async () => {
  const pidProc = Bun.spawnSync(['lsof', '-ti', ':3000'])

  const pids = pidProc.stdout
    .toString('utf-8')
    .split(/\n/)
    .filter((str) => !!str)

  Bun.spawnSync(['kill', pids[1]])
}
