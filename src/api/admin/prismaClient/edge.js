
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require('./runtime/edge')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.7.1
 * Query Engine version: 0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5
 */
Prisma.prismaVersion = {
  client: "5.7.1",
  engine: "0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AdministratorScalarFieldEnum = {
  id: 'id',
  hash: 'hash',
  salt: 'salt',
  magicLinkToken: 'magicLinkToken',
  email: 'email',
  banned: 'banned',
  username: 'username',
  verified: 'verified',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.FieldScalarFieldEnum = {
  id: 'id',
  tableId: 'tableId',
  name: 'name',
  type: 'type',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.FieldAnnotationScalarFieldEnum = {
  id: 'id',
  tableId: 'tableId',
  modelName: 'modelName',
  fieldId: 'fieldId',
  fieldName: 'fieldName',
  annotation: 'annotation',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.RevokedRefreshTokenScalarFieldEnum = {
  id: 'id',
  value: 'value',
  actualExpiration: 'actualExpiration'
};

exports.Prisma.SchemaScalarFieldEnum = {
  id: 'id',
  name: 'name',
  tracked: 'tracked',
  baselineVersionOfSchema: 'baselineVersionOfSchema',
  isNewestProductionVersion: 'isNewestProductionVersion',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.TableScalarFieldEnum = {
  id: 'id',
  schemaId: 'schemaId',
  name: 'name',
  modelName: 'modelName',
  relations: 'relations',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  hash: 'hash',
  salt: 'salt',
  magicLinkToken: 'magicLinkToken',
  email: 'email',
  banned: 'banned',
  username: 'username',
  verified: 'verified',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};


exports.Prisma.ModelName = {
  Administrator: 'Administrator',
  Field: 'Field',
  FieldAnnotation: 'FieldAnnotation',
  RevokedRefreshToken: 'RevokedRefreshToken',
  Schema: 'Schema',
  Table: 'Table',
  User: 'User'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/jefferyreynolds/innate-project/innate/src/api/admin/prismaClient",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin-arm64",
        "native": true
      }
    ],
    "previewFeatures": [
      "multiSchema"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../../.env",
    "schemaEnvPath": "../../../../.env"
  },
  "relativePath": "..",
  "clientVersion": "5.7.1",
  "engineVersion": "0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgICAgICAgID0gInByaXNtYS1jbGllbnQtanMiCiAgb3V0cHV0ICAgICAgICAgID0gIi9Vc2Vycy9qZWZmZXJ5cmV5bm9sZHMvaW5uYXRlLXByb2plY3QvaW5uYXRlL3NyYy9hcGkvYWRtaW4vcHJpc21hQ2xpZW50IgogIHByZXZpZXdGZWF0dXJlcyA9IFsibXVsdGlTY2hlbWEiXQp9CgpnZW5lcmF0b3IgdHlwZWdyYXBocWwgewogIHByb3ZpZGVyICAgICAgICAgICA9ICJ0eXBlZ3JhcGhxbC1wcmlzbWEiCiAgb3V0cHV0ICAgICAgICAgICAgID0gIi9Vc2Vycy9qZWZmZXJ5cmV5bm9sZHMvaW5uYXRlLXByb2plY3QvaW5uYXRlL3NyYy9hcGkvYWRtaW4vZ2VuZXJhdGVkL3R5cGUtZ3JhcGhxbCIKICBlbWl0VHJhbnNwaWxlZENvZGUgPSAidHJ1ZSIKfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAicG9zdGdyZXNxbCIKICB1cmwgICAgICA9IGVudigiREFUQUJBU0VfVVJMIikKICBzY2hlbWFzICA9IFsiaW5uYXRlIiwgIm44X3YwXzBfMCJdCn0KCm1vZGVsIEFkbWluaXN0cmF0b3IgewogIGlkICAgICAgICAgICAgIFN0cmluZyAgIEBpZCBAZGVmYXVsdChkYmdlbmVyYXRlZCgiaW5uYXRlLnV1aWRfZ2VuZXJhdGVfdjQoKSIpKSBAZGIuVXVpZAogIC8vLyBAVHlwZUdyYXBoUUwub21pdChvdXRwdXQ6IHRydWUsIGlucHV0OiB0cnVlKQogIGhhc2ggICAgICAgICAgIFN0cmluZwogIC8vLyBAVHlwZUdyYXBoUUwub21pdChvdXRwdXQ6IHRydWUsIGlucHV0OiB0cnVlKQogIHNhbHQgICAgICAgICAgIFN0cmluZwogIC8vLyBAVHlwZUdyYXBoUUwub21pdChvdXRwdXQ6IHRydWUsIGlucHV0OiB0cnVlKQogIG1hZ2ljTGlua1Rva2VuIFN0cmluZz8gIEBtYXAoIm1hZ2ljX2xpbmtfdG9rZW4iKQogIGVtYWlsICAgICAgICAgIFN0cmluZyAgIEB1bmlxdWUKICBiYW5uZWQgICAgICAgICBCb29sZWFuPyBAZGVmYXVsdChmYWxzZSkKICB1c2VybmFtZSAgICAgICBTdHJpbmcgICBAdW5pcXVlCiAgdmVyaWZpZWQgICAgICAgQm9vbGVhbj8gQGRlZmF1bHQoZmFsc2UpCiAgY3JlYXRlZEF0ICAgICAgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpIEBtYXAoImNyZWF0ZWRfYXQiKSBAZGIuVGltZXN0YW1wKDYpCiAgdXBkYXRlZEF0ICAgICAgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpIEBtYXAoInVwZGF0ZWRfYXQiKSBAZGIuVGltZXN0YW1wKDYpCgogIEBAbWFwKCJhZG1pbmlzdHJhdG9yIikKICBAQHNjaGVtYSgiaW5uYXRlIikKfQoKbW9kZWwgRmllbGQgewogIGlkICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGRiZ2VuZXJhdGVkKCJpbm5hdGUudXVpZF9nZW5lcmF0ZV92NCgpIikpIEBkYi5VdWlkCiAgdGFibGVJZCAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICBAbWFwKCJ0YWJsZV9pZCIpIEBkYi5VdWlkCiAgbmFtZSAgICAgICAgICAgICBTdHJpbmcKICB0eXBlICAgICAgICAgICAgIFN0cmluZwogIGNyZWF0ZWRBdCAgICAgICAgRGF0ZVRpbWUgICAgICAgICAgQGRlZmF1bHQobm93KCkpIEBtYXAoImNyZWF0ZWRfYXQiKSBAZGIuVGltZXN0YW1wKDYpCiAgdXBkYXRlZEF0ICAgICAgICBEYXRlVGltZSAgICAgICAgICBAZGVmYXVsdChub3coKSkgQG1hcCgidXBkYXRlZF9hdCIpIEBkYi5UaW1lc3RhbXAoNikKICB0YWJsZSAgICAgICAgICAgIFRhYmxlPyAgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFt0YWJsZUlkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUsIG9uVXBkYXRlOiBOb0FjdGlvbikKICBmaWVsZEFubm90YXRpb25zIEZpZWxkQW5ub3RhdGlvbltdCgogIEBAbWFwKCJmaWVsZCIpCiAgQEBzY2hlbWEoImlubmF0ZSIpCn0KCm1vZGVsIEZpZWxkQW5ub3RhdGlvbiB7CiAgaWQgICAgICAgICBTdHJpbmcgICBAaWQgQGRlZmF1bHQoZGJnZW5lcmF0ZWQoImlubmF0ZS51dWlkX2dlbmVyYXRlX3Y0KCkiKSkgQGRiLlV1aWQKICB0YWJsZUlkICAgIFN0cmluZz8gIEBtYXAoInRhYmxlX2lkIikgQGRiLlV1aWQKICBtb2RlbE5hbWUgIFN0cmluZyAgIEBtYXAoIm1vZGVsX25hbWUiKQogIGZpZWxkSWQgICAgU3RyaW5nPyAgQG1hcCgiZmllbGRfaWQiKSBAZGIuVXVpZAogIGZpZWxkTmFtZSAgU3RyaW5nICAgQG1hcCgiZmllbGRfbmFtZSIpCiAgYW5ub3RhdGlvbiBTdHJpbmcKICBjcmVhdGVkQXQgIERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKSBAbWFwKCJjcmVhdGVkX2F0IikgQGRiLlRpbWVzdGFtcCg2KQogIHVwZGF0ZWRBdCAgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpIEBtYXAoInVwZGF0ZWRfYXQiKSBAZGIuVGltZXN0YW1wKDYpCiAgZmllbGQgICAgICBGaWVsZD8gICBAcmVsYXRpb24oZmllbGRzOiBbZmllbGRJZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlLCBvblVwZGF0ZTogTm9BY3Rpb24pCiAgdGFibGUgICAgICBUYWJsZT8gICBAcmVsYXRpb24oZmllbGRzOiBbdGFibGVJZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlLCBvblVwZGF0ZTogTm9BY3Rpb24pCgogIEBAbWFwKCJmaWVsZF9hbm5vdGF0aW9uIikKICBAQHNjaGVtYSgiaW5uYXRlIikKfQoKbW9kZWwgUmV2b2tlZFJlZnJlc2hUb2tlbiB7CiAgaWQgICAgICAgICAgICAgICBTdHJpbmcgICBAaWQgQGRlZmF1bHQoZGJnZW5lcmF0ZWQoImlubmF0ZS51dWlkX2dlbmVyYXRlX3Y0KCkiKSkgQGRiLlV1aWQKICB2YWx1ZSAgICAgICAgICAgIFN0cmluZyAgIEB1bmlxdWUKICBhY3R1YWxFeHBpcmF0aW9uIERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKSBAbWFwKCJhY3R1YWxfZXhwaXJhdGlvbiIpIEBkYi5UaW1lc3RhbXAoNikKCiAgQEBtYXAoInJldm9rZWRfcmVmcmVzaF90b2tlbiIpCiAgQEBzY2hlbWEoImlubmF0ZSIpCn0KCm1vZGVsIFNjaGVtYSB7CiAgaWQgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICBAaWQgQGRlZmF1bHQoZGJnZW5lcmF0ZWQoImlubmF0ZS51dWlkX2dlbmVyYXRlX3Y0KCkiKSkgQGRiLlV1aWQKICBuYW1lICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgIEB1bmlxdWUKICB0cmFja2VkICAgICAgICAgICAgICAgICAgIEJvb2xlYW4/CiAgYmFzZWxpbmVWZXJzaW9uT2ZTY2hlbWEgICBTdHJpbmc/ICBAbWFwKCJiYXNlbGluZV92ZXJzaW9uX29mX3NjaGVtYSIpIEBkYi5VdWlkCiAgaXNOZXdlc3RQcm9kdWN0aW9uVmVyc2lvbiBCb29sZWFuPyBAZGVmYXVsdChmYWxzZSkgQG1hcCgiaXNfbmV3ZXN0X3Byb2R1Y3Rpb25fdmVyc2lvbiIpCiAgY3JlYXRlZEF0ICAgICAgICAgICAgICAgICBEYXRlVGltZSBAZGVmYXVsdChub3coKSkgQG1hcCgiY3JlYXRlZF9hdCIpIEBkYi5UaW1lc3RhbXAoNikKICB1cGRhdGVkQXQgICAgICAgICAgICAgICAgIERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKSBAbWFwKCJ1cGRhdGVkX2F0IikgQGRiLlRpbWVzdGFtcCg2KQogIHRhYmxlcyAgICAgICAgICAgICAgICAgICAgVGFibGVbXQoKICBAQG1hcCgic2NoZW1hIikKICBAQHNjaGVtYSgiaW5uYXRlIikKfQoKbW9kZWwgVGFibGUgewogIGlkICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGRiZ2VuZXJhdGVkKCJpbm5hdGUudXVpZF9nZW5lcmF0ZV92NCgpIikpIEBkYi5VdWlkCiAgc2NoZW1hSWQgICAgICAgICBTdHJpbmc/ICAgICAgICAgICBAbWFwKCJzY2hlbWFfaWQiKSBAZGIuVXVpZAogIG5hbWUgICAgICAgICAgICAgU3RyaW5nCiAgbW9kZWxOYW1lICAgICAgICBTdHJpbmcgICAgICAgICAgICBAbWFwKCJtb2RlbF9uYW1lIikKICByZWxhdGlvbnMgICAgICAgIEpzb24/CiAgY3JlYXRlZEF0ICAgICAgICBEYXRlVGltZSAgICAgICAgICBAZGVmYXVsdChub3coKSkgQG1hcCgiY3JlYXRlZF9hdCIpIEBkYi5UaW1lc3RhbXAoNikKICB1cGRhdGVkQXQgICAgICAgIERhdGVUaW1lICAgICAgICAgIEBkZWZhdWx0KG5vdygpKSBAbWFwKCJ1cGRhdGVkX2F0IikgQGRiLlRpbWVzdGFtcCg2KQogIGZpZWxkcyAgICAgICAgICAgRmllbGRbXQogIGZpZWxkQW5ub3RhdGlvbnMgRmllbGRBbm5vdGF0aW9uW10KICBzY2hlbWEgICAgICAgICAgIFNjaGVtYT8gICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtzY2hlbWFJZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlLCBvblVwZGF0ZTogTm9BY3Rpb24pCgogIEBAbWFwKCJ0YWJsZSIpCiAgQEBzY2hlbWEoImlubmF0ZSIpCn0KCm1vZGVsIFVzZXIgewogIGlkICAgICAgICAgICAgIFN0cmluZyAgIEBpZCBAZGVmYXVsdChkYmdlbmVyYXRlZCgiaW5uYXRlLnV1aWRfZ2VuZXJhdGVfdjQoKSIpKSBAZGIuVXVpZAogIC8vLyBAVHlwZUdyYXBoUUwub21pdChvdXRwdXQ6IHRydWUsIGlucHV0OiB0cnVlKQogIGhhc2ggICAgICAgICAgIFN0cmluZwogIC8vLyBAVHlwZUdyYXBoUUwub21pdChvdXRwdXQ6IHRydWUsIGlucHV0OiB0cnVlKQogIHNhbHQgICAgICAgICAgIFN0cmluZwogIC8vLyBAVHlwZUdyYXBoUUwub21pdChvdXRwdXQ6IHRydWUsIGlucHV0OiB0cnVlKQogIG1hZ2ljTGlua1Rva2VuIFN0cmluZz8gIEBtYXAoIm1hZ2ljX2xpbmtfdG9rZW4iKQogIGVtYWlsICAgICAgICAgIFN0cmluZyAgIEB1bmlxdWUKICBiYW5uZWQgICAgICAgICBCb29sZWFuPyBAZGVmYXVsdChmYWxzZSkKICB1c2VybmFtZSAgICAgICBTdHJpbmcgICBAdW5pcXVlCiAgdmVyaWZpZWQgICAgICAgQm9vbGVhbj8gQGRlZmF1bHQoZmFsc2UpCiAgY3JlYXRlZEF0ICAgICAgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpIEBtYXAoImNyZWF0ZWRfYXQiKSBAZGIuVGltZXN0YW1wKDYpCiAgdXBkYXRlZEF0ICAgICAgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpIEBtYXAoInVwZGF0ZWRfYXQiKSBAZGIuVGltZXN0YW1wKDYpCgogIEBAbWFwKCJ1c2VyIikKICBAQHNjaGVtYSgiaW5uYXRlIikKfQoKZW51bSBDbG9uZXBhcm1zIHsKICBEQVRBCiAgTk9EQVRBCiAgRERMT05MWQogIE5PT1dORVIKICBOT0FDTAogIFZFUkJPU0UKICBERUJVRwogIEZJTEVDT1BZCgogIEBAbWFwKCJjbG9uZXBhcm1zIikKICBAQHNjaGVtYSgibjhfdjBfMF8wIikKfQoKZW51bSBPYmpUeXBlIHsKICBUQUJMRQogIFZJRVcKICBDT0xVTU4KICBTRVFVRU5DRQogIEZVTkNUSU9OCiAgU0NIRU1BCiAgREFUQUJBU0UKCiAgQEBtYXAoIm9ial90eXBlIikKICBAQHNjaGVtYSgibjhfdjBfMF8wIikKfQoKZW51bSBQZXJtVHlwZSB7CiAgU0VMRUNUCiAgSU5TRVJUCiAgVVBEQVRFCiAgREVMRVRFCiAgVFJVTkNBVEUKICBSRUZFUkVOQ0VTCiAgVFJJR0dFUgogIFVTQUdFCiAgQ1JFQVRFCiAgRVhFQ1VURQogIENPTk5FQ1QKICBURU1QT1JBUlkKCiAgQEBtYXAoInBlcm1fdHlwZSIpCiAgQEBzY2hlbWEoIm44X3YwXzBfMCIpCn0KCmVudW0gVGFibGVkZWZzIHsKICBQS0VZX0lOVEVSTkFMCiAgUEtFWV9FWFRFUk5BTAogIEZLRVlTX0lOVEVSTkFMCiAgRktFWVNfRVhURVJOQUwKICBDT01NRU5UUwogIEZLRVlTX05PTkUKICBJTkNMVURFX1RSSUdHRVJTCiAgTk9fVFJJR0dFUlMKCiAgQEBtYXAoInRhYmxlZGVmcyIpCiAgQEBzY2hlbWEoIm44X3YwXzBfMCIpCn0K",
  "inlineSchemaHash": "9573fd2cb89fa5ca1f7b026cb26fd8c141f009d8af8f595ebe75981739935d5e",
  "noEngine": false
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Administrator\":{\"dbName\":\"administrator\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"innate.uuid_generate_v4()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@TypeGraphQL.omit(output: true, input: true)\"},{\"name\":\"salt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@TypeGraphQL.omit(output: true, input: true)\"},{\"name\":\"magicLinkToken\",\"dbName\":\"magic_link_token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@TypeGraphQL.omit(output: true, input: true)\"},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"banned\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Field\":{\"dbName\":\"field\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"innate.uuid_generate_v4()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tableId\",\"dbName\":\"table_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"table\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Table\",\"relationName\":\"FieldToTable\",\"relationFromFields\":[\"tableId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fieldAnnotations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"FieldAnnotation\",\"relationName\":\"FieldToFieldAnnotation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"FieldAnnotation\":{\"dbName\":\"field_annotation\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"innate.uuid_generate_v4()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tableId\",\"dbName\":\"table_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modelName\",\"dbName\":\"model_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fieldId\",\"dbName\":\"field_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fieldName\",\"dbName\":\"field_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"annotation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"field\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Field\",\"relationName\":\"FieldToFieldAnnotation\",\"relationFromFields\":[\"fieldId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"table\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Table\",\"relationName\":\"FieldAnnotationToTable\",\"relationFromFields\":[\"tableId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"RevokedRefreshToken\":{\"dbName\":\"revoked_refresh_token\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"innate.uuid_generate_v4()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"actualExpiration\",\"dbName\":\"actual_expiration\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Schema\":{\"dbName\":\"schema\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"innate.uuid_generate_v4()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tracked\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"baselineVersionOfSchema\",\"dbName\":\"baseline_version_of_schema\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isNewestProductionVersion\",\"dbName\":\"is_newest_production_version\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tables\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Table\",\"relationName\":\"SchemaToTable\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Table\":{\"dbName\":\"table\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"innate.uuid_generate_v4()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"schemaId\",\"dbName\":\"schema_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modelName\",\"dbName\":\"model_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"relations\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fields\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Field\",\"relationName\":\"FieldToTable\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fieldAnnotations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"FieldAnnotation\",\"relationName\":\"FieldAnnotationToTable\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"schema\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Schema\",\"relationName\":\"SchemaToTable\",\"relationFromFields\":[\"schemaId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"User\":{\"dbName\":\"user\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"innate.uuid_generate_v4()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@TypeGraphQL.omit(output: true, input: true)\"},{\"name\":\"salt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@TypeGraphQL.omit(output: true, input: true)\"},{\"name\":\"magicLinkToken\",\"dbName\":\"magic_link_token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@TypeGraphQL.omit(output: true, input: true)\"},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"banned\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"Cloneparms\":{\"values\":[{\"name\":\"DATA\",\"dbName\":null},{\"name\":\"NODATA\",\"dbName\":null},{\"name\":\"DDLONLY\",\"dbName\":null},{\"name\":\"NOOWNER\",\"dbName\":null},{\"name\":\"NOACL\",\"dbName\":null},{\"name\":\"VERBOSE\",\"dbName\":null},{\"name\":\"DEBUG\",\"dbName\":null},{\"name\":\"FILECOPY\",\"dbName\":null}],\"dbName\":\"cloneparms\"},\"ObjType\":{\"values\":[{\"name\":\"TABLE\",\"dbName\":null},{\"name\":\"VIEW\",\"dbName\":null},{\"name\":\"COLUMN\",\"dbName\":null},{\"name\":\"SEQUENCE\",\"dbName\":null},{\"name\":\"FUNCTION\",\"dbName\":null},{\"name\":\"SCHEMA\",\"dbName\":null},{\"name\":\"DATABASE\",\"dbName\":null}],\"dbName\":\"obj_type\"},\"PermType\":{\"values\":[{\"name\":\"SELECT\",\"dbName\":null},{\"name\":\"INSERT\",\"dbName\":null},{\"name\":\"UPDATE\",\"dbName\":null},{\"name\":\"DELETE\",\"dbName\":null},{\"name\":\"TRUNCATE\",\"dbName\":null},{\"name\":\"REFERENCES\",\"dbName\":null},{\"name\":\"TRIGGER\",\"dbName\":null},{\"name\":\"USAGE\",\"dbName\":null},{\"name\":\"CREATE\",\"dbName\":null},{\"name\":\"EXECUTE\",\"dbName\":null},{\"name\":\"CONNECT\",\"dbName\":null},{\"name\":\"TEMPORARY\",\"dbName\":null}],\"dbName\":\"perm_type\"},\"Tabledefs\":{\"values\":[{\"name\":\"PKEY_INTERNAL\",\"dbName\":null},{\"name\":\"PKEY_EXTERNAL\",\"dbName\":null},{\"name\":\"FKEYS_INTERNAL\",\"dbName\":null},{\"name\":\"FKEYS_EXTERNAL\",\"dbName\":null},{\"name\":\"COMMENTS\",\"dbName\":null},{\"name\":\"FKEYS_NONE\",\"dbName\":null},{\"name\":\"INCLUDE_TRIGGERS\",\"dbName\":null},{\"name\":\"NO_TRIGGERS\",\"dbName\":null}],\"dbName\":\"tabledefs\"}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

