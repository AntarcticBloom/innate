import {
  PrismaErrorCodes,
  type BaseInterceptedPrismaErrorRuntimeContext,
} from './prisma'
import { name as appName } from '../../package.json'
import { type ErrorReference, SystemErrorCodes } from './types'
import { databaseConnection } from '../../db/parseDatabaseConnectionStr'

const { databaseName } = databaseConnection

export const ERROR_REFERENCE: ErrorReference = {
  prisma: {
    [PrismaErrorCodes.P1003]: ({ originalError }) => ({
      description: 'The introspected database does not exist.',
      resolutions: [
        `Ensure the database \`${databaseName}\` is created.`,
        `The ${appName} template includes a .env file with a DATABASE_URL variable.\n  Ensure that the database name in the URL matches the database you created.\n  If you change the database name, you must update the DATABASE_URL value in the .env file.\n  URL format: postgresql://<user>:<password>@<host>:<port>/<databaseName>`,
      ],
      originalError,
    }),

    [PrismaErrorCodes.P4001]: ({ originalError }) => ({
      description: 'The introspected database is empty.',
      resolutions: [
        `Ensure the database ${databaseName} has at least one table.`,
      ],
      originalError,
    }),
  },
  system: {
    [SystemErrorCodes.UnableToCreateDatabase]: ({
      originalError,
    }: BaseInterceptedPrismaErrorRuntimeContext) => ({
      description: 'Unable to create database',
      resolutions: [
        'Ensure that `createdb` (run createdb --version) is installed on the host machine. It should come installed with PostgreSQL.',
        'Ensure that your database server is running and reachable at the host and port specified in the DATABASE_URL environment variable',
        'Ensure that the database user has permission to create databases',
        'Ensure that the database user has permission to connect to the database server',
      ],
      originalError,
    }),
    [SystemErrorCodes.UnableToIntrospectDatabase]: ({
      originalError,
    }: BaseInterceptedPrismaErrorRuntimeContext) => ({
      description: 'Unable to introspect database',
      resolutions: [
        'Ensure that `prisma` is installed on the host machine (did you run `bun install`?)',
        'Ensure that your database server is running and reachable at the host and port specified in the DATABASE_URL environment variable in .env',
      ],
      originalError,
    }),
  },
}
