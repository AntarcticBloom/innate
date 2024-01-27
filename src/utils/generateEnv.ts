import path from 'path'
import { config as dotenvConfig } from 'dotenv'

export type Env = {
  DATABASE_URL: string
  TOKEN_SECRET: string
  INITIAL_ADMINISTRATOR_SECRET: string
}

const ROOT_ENV_PATH = path.join(import.meta.dir, '../../.env')

/** A typesafe (asserted not undefined) object of system-specific (won't include default process.env values) environment variables */
export const generateEnv = (path = ROOT_ENV_PATH) => {
  const result = dotenvConfig({
    path,
  })

  if (result.error) {
    throw result.error
  }

  const { parsed: env } = result

  const { DATABASE_URL, TOKEN_SECRET, INITIAL_ADMINISTRATOR_SECRET } =
    env as Record<string, string>

  return {
    DATABASE_URL: (() => {
      if (!DATABASE_URL) {
        throw new Error(
          `The DATABASE_URL environment variable is missing. Please add it to your .env file. Format: postgresql://<user>:<password>@<host>:<port>/<databaseName>`,
        )
      }

      return DATABASE_URL
    })(),
    TOKEN_SECRET: (() => {
      if (!TOKEN_SECRET) {
        throw new Error(
          `The TOKEN_SECRET environment variable is missing. Please add it to your .env file. Format: <randomString>`,
        )
      }

      return TOKEN_SECRET
    })(),
    INITIAL_ADMINISTRATOR_SECRET: (() => {
      if (!INITIAL_ADMINISTRATOR_SECRET) {
        throw new Error(
          `The INITIAL_ADMINISTRATOR_SECRET environment variable is missing. Please add it to your .env file. Format: <randomString>`,
        )
      }

      return INITIAL_ADMINISTRATOR_SECRET
    })(),
  }
}
