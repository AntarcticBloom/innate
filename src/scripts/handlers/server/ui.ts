import { DebugLevel, stdout, generateUIEnv } from '../../../utils'

export const startUI = async ({ debug }: { debug: DebugLevel }) => {
  await generateUIEnv()
  if (debug <= DebugLevel.Info) await stdout('👾 Starting UI...\n')

  Bun.spawn(['bun', 'run', 'start'], {
    cwd: `${process.cwd()}/ui`,
    stdout: 'inherit',
    stdio: ['inherit', 'inherit', 'inherit'],
    /** Exit the entire process when this process exits; prevents the user from having to Ctrl + C twice. */
    onExit: () => process.exit(0),
  })
}
