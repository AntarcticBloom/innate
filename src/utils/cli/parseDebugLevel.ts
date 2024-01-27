import { DebugLevel } from '..'

export const parseDebugLevel = (debugLevel: string): DebugLevel => {
  const parsedDebugLevel = parseInt(debugLevel)

  if (parsedDebugLevel < 0 || parsedDebugLevel > 2) {
    throw new Error(
      `Invalid debug level: ${parsedDebugLevel}. Must be between 0 and 2.`,
    )
  }

  return parsedDebugLevel
}
