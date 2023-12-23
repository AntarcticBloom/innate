import { DebugLevel } from '../../utils/errors/types'

export type CLIOptions = {
  debug: DebugLevel
  spawnLevel: number
  cwd: string
}
