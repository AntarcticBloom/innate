import path from 'path'
import os from 'node:os'
import { config as dotenvConfig } from 'dotenv'

export type Env = {
  NODE_ENV: string
  NETWORK_NAME: string

  APP_NAME: string
  CORS_ORIGIN: string
  DATABASE_URL: string
  TOKEN_SECRET: string
  INITIAL_ADMINISTRATOR_SECRET: string

  SERVER_PORT: string
  ADMIN_SERVER_PORT_WEB: string
  ADMIN_SERVER_PORT_NATIVE: string

  SMTP_HOST: string
  SMTP_PORT: string
  SMTP_USER: string
  SMTP_FROM: string
  SMTP_SECURE: boolean
  SMTP_PASSWORD: string
}

const ROOT_ENV_PATH = path.join(import.meta.dir, '../../.env.development')

const PROGRAMMATIC_IP = os
  .networkInterfaces()
  .en0?.find(({ family }) => family === 'IPv4')
  ?.cidr?.split('/')[0]

/** A typesafe (asserted not undefined) object of system-specific (won't include default process.env values) environment variables */
export const generateEnv = (path = ROOT_ENV_PATH) => {
  const result = dotenvConfig({
    path,
  })

  if (result.error) {
    throw result.error
  }

  const { parsed: env } = result

  const {
    NODE_ENV,
    NETWORK_NAME,
    APP_NAME,
    CORS_ORIGIN,
    DATABASE_URL,
    TOKEN_SECRET,
    INITIAL_ADMINISTRATOR_SECRET,
    IP: CONFIGURED_IP,

    SERVER_PORT,
    ADMIN_SERVER_PORT_WEB,
    ADMIN_SERVER_PORT_NATIVE,

    SMTP_FROM,
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_SECURE,
    SMTP_PASSWORD,
  } = env as Record<string, string>

  return {
    NODE_ENV: (() => {
      if (!NODE_ENV) {
        throw new Error(
          `The NODE_ENV environment variable is missing. Please add it to your .env file. Format: <string>`,
        )
      }

      return NODE_ENV
    })(),
    NETWORK_NAME: (() => {
      if (!NETWORK_NAME) {
        throw new Error(
          `The NETWORK_NAME environment variable is missing. Please add it to your .env file. Format: <string>`,
        )
      }

      return NETWORK_NAME
    })(),
    IP: (() => {
      if (!CONFIGURED_IP && !PROGRAMMATIC_IP) {
        throw new Error(
          `The IP environment variable was not found programmatically. If the process is not run ephemerally, add it manually to the .env. Format: <string>`,
        )
      }

      return CONFIGURED_IP || PROGRAMMATIC_IP
    })(),
    APP_NAME: (() => {
      if (!APP_NAME) {
        throw new Error(
          `The APP_NAME environment variable is missing. Please add it to your .env file. Format: <string>`,
        )
      }

      return APP_NAME
    })(),
    CORS_ORIGIN: (() => {
      if (!CORS_ORIGIN) {
        throw new Error(
          `The CORS_ORIGIN environment variable is missing. Please add it to your .env file. Format: <string>`,
        )
      }

      return CORS_ORIGIN
    })(),
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

    SERVER_PORT: (() => {
      if (!SERVER_PORT) {
        throw new Error(
          `The SERVER_PORT environment variable is missing. Please add it to your .env file. Format: <number>`,
        )
      }

      return SERVER_PORT
    })(),

    ADMIN_SERVER_PORT_WEB: (() => {
      if (!ADMIN_SERVER_PORT_WEB) {
        throw new Error(
          `The ADMIN_SERVER_PORT_WEB environment variable is missing. Please add it to your .env file. Format: <number>`,
        )
      }

      return ADMIN_SERVER_PORT_WEB
    })(),

    ADMIN_SERVER_PORT_NATIVE: (() => {
      if (!ADMIN_SERVER_PORT_NATIVE) {
        throw new Error(
          `The ADMIN_SERVER_PORT_NATIVE environment variable is missing. Please add it to your .env file. Format: <number>`,
        )
      }

      return ADMIN_SERVER_PORT_NATIVE
    })(),

    SMTP_HOST: (() => {
      if (!SMTP_HOST) {
        throw new Error(
          `The SMTP_HOST environment variable is missing. Please add it to your .env file. Format: <string>`,
        )
      }

      return SMTP_HOST
    })(),

    SMTP_PORT: (() => {
      if (!SMTP_PORT) {
        throw new Error(
          `The SMTP_PORT environment variable is missing. Please add it to your .env file. Format: <string>`,
        )
      }

      return SMTP_PORT
    })(),

    SMTP_USER: (() => {
      if (!SMTP_USER) {
        throw new Error(
          `The SMTP_USER environment variable is missing. Please add it to your .env file. Format: <string>`,
        )
      }

      return SMTP_USER
    })(),

    SMTP_FROM: (() => {
      if (!SMTP_FROM) {
        throw new Error(
          `The SMTP_FROM environment variable is missing. Please add it to your .env file. Format: <string>`,
        )
      }

      return SMTP_FROM
    })(),

    SMTP_SECURE: (() => {
      const boolean: boolean | undefined = (() => {
        if (SMTP_SECURE === 'true') return true
        if (SMTP_SECURE === 'false') return false
        return undefined
      })()

      if (boolean === undefined) {
        throw new Error(
          `The SMTP_SECURE environment variable is missing. Please add it to your .env file. Format: <boolean>`,
        )
      }

      return boolean
    })(),

    SMTP_PASSWORD: (() => {
      if (!SMTP_PASSWORD) {
        throw new Error(
          `The SMTP_PASSWORD environment variable is missing. Please add it to your .env file. Format: <string>`,
        )
      }

      return SMTP_PASSWORD
    })(),
  }
}
