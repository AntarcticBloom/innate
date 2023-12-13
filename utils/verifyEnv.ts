import { config as dotenvConfig } from 'dotenv'

const verifyEnv = () => {
  const { parsed: env } = dotenvConfig()
  const { DATABASE_URL } = env as Record<string, string>

  return {
    DATABASE_URL: (() => {
      if (!DATABASE_URL) {
        throw new Error(
          `The DATABASE_URL environment variable is missing. Please add it to your .env file. Format: postgresql://<user>:<password>@<host>:<port>/<databaseName>`,
        )
      }

      return DATABASE_URL
    })(),
  }
}

/** A typesafe (asserted not undefined) object of system-specific (won't include default process.env values) environment variables */
export const env = verifyEnv()
