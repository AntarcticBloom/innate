import {
  type ErrorReference,
  parseDatabaseConnectionString,
  type BaseInterceptedPrismaErrorRuntimeContext,
} from '../index'

import { SystemErrorCodes } from './'
import { PrismaErrorCodes } from './prisma'
import { NodePostgresErrorCodes } from './nodePostgres'
import { name as appName } from '../../../package.json'

export const ERROR_REFERENCE: ErrorReference = {
  prisma: {
    [PrismaErrorCodes.P1003]: ({ originalError, env }) => ({
      env,
      originalError,
      description: 'The introspected database does not exist.',
      resolutions: [
        `Ensure the database \`${
          parseDatabaseConnectionString(env.DATABASE_URL).databaseName
        }\` is created.`,
        `The ${appName} template includes a .env file with a DATABASE_URL variable.\n  Ensure that the database name in the URL matches the database you created.\n  If you change the database name, you must update the DATABASE_URL value in the .env file.\n  URL format: postgresql://<user>:<password>@<host>:<port>/<databaseName>`,
      ],
    }),

    [PrismaErrorCodes.P4001]: ({ originalError, env }) => ({
      env,
      originalError,
      description: 'The introspected database is empty.',
      resolutions: [
        `Ensure the database ${
          parseDatabaseConnectionString(env.DATABASE_URL).databaseName
        } has at least one table.`,
      ],
    }),
  },
  nodePostgres: {
    [NodePostgresErrorCodes['3D000']]: ({ env, originalError }) => ({
      env,
      originalError,
      description: 'Database does not exist',
      resolutions: [
        'Ensure that the database specified in the DATABASE_URL environment variable exists',
      ],
    }),
  },
  system: {
    [SystemErrorCodes.UnableToCreateDatabase]: ({
      env,
      originalError,
    }: BaseInterceptedPrismaErrorRuntimeContext) => ({
      env,
      originalError,
      description: 'Unable to create database',
      resolutions: [
        'Ensure that `createdb` (run createdb --version) is installed on the host machine. It should come installed with PostgreSQL.',
        'Ensure that your database server is running and reachable at the host and port specified in the DATABASE_URL environment variable',
        'Ensure that the database user has permission to create databases',
        'Ensure that the database user has permission to connect to the database server',
      ],
    }),
    [SystemErrorCodes.UnableToDetectSchemata]: ({
      env,
      originalError,
    }: BaseInterceptedPrismaErrorRuntimeContext) => ({
      env,
      originalError,
      description: 'Unable to detect schemata',
      resolutions: [
        'Ensure that the database server is running and reachable at the host and port specified in the DATABASE_URL environment variable in .env',
        'Ensure that the database user has permission to list schemata',
      ],
    }),
    [SystemErrorCodes.UnableToIntrospectDatabase]: ({
      env,
      originalError,
    }: BaseInterceptedPrismaErrorRuntimeContext) => ({
      env,
      originalError,
      description: 'Unable to introspect database',
      resolutions: [
        'Ensure that `prisma` is installed on the host machine (did you run `bun install`?)',
        'Ensure that your database server is running and reachable at the host and port specified in the DATABASE_URL environment variable in .env',
      ],
    }),
    [SystemErrorCodes.UnableToInitializeDatabase]: ({
      env,
      originalError,
    }: BaseInterceptedPrismaErrorRuntimeContext) => ({
      env,
      originalError,
      description: 'Unable to initialize database',
      resolutions: [
        'Has initialization already been run? If so, you may need to drop the database and re-run initialization.',
        `Does your database include a \`${appName}\` schema? ${appName} namespaces its tables, `,
      ],
    }),
  },
}
