import { DebugLevel } from '../errors/types'
import { type Ora } from 'ora'

export type CLIOptions = {
  cwd: string
  spinner: Ora
  port?: number
  debug: DebugLevel
  spawnLevel: number
}
