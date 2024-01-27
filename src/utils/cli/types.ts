import { DebugLevel } from '../errors/types'

export type CLIOptions = {
  debug: DebugLevel
  spawnLevel: number
  cwd: string
}
