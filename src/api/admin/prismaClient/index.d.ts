
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Administrator
 * 
 */
export type Administrator = $Result.DefaultSelection<Prisma.$AdministratorPayload>
/**
 * Model Field
 * 
 */
export type Field = $Result.DefaultSelection<Prisma.$FieldPayload>
/**
 * Model FieldAnnotation
 * 
 */
export type FieldAnnotation = $Result.DefaultSelection<Prisma.$FieldAnnotationPayload>
/**
 * Model RevokedRefreshToken
 * 
 */
export type RevokedRefreshToken = $Result.DefaultSelection<Prisma.$RevokedRefreshTokenPayload>
/**
 * Model Schema
 * 
 */
export type Schema = $Result.DefaultSelection<Prisma.$SchemaPayload>
/**
 * Model Table
 * 
 */
export type Table = $Result.DefaultSelection<Prisma.$TablePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Administrators
 * const administrators = await prisma.administrator.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Administrators
   * const administrators = await prisma.administrator.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.administrator`: Exposes CRUD operations for the **Administrator** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Administrators
    * const administrators = await prisma.administrator.findMany()
    * ```
    */
  get administrator(): Prisma.AdministratorDelegate<ExtArgs>;

  /**
   * `prisma.field`: Exposes CRUD operations for the **Field** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fields
    * const fields = await prisma.field.findMany()
    * ```
    */
  get field(): Prisma.FieldDelegate<ExtArgs>;

  /**
   * `prisma.fieldAnnotation`: Exposes CRUD operations for the **FieldAnnotation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FieldAnnotations
    * const fieldAnnotations = await prisma.fieldAnnotation.findMany()
    * ```
    */
  get fieldAnnotation(): Prisma.FieldAnnotationDelegate<ExtArgs>;

  /**
   * `prisma.revokedRefreshToken`: Exposes CRUD operations for the **RevokedRefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RevokedRefreshTokens
    * const revokedRefreshTokens = await prisma.revokedRefreshToken.findMany()
    * ```
    */
  get revokedRefreshToken(): Prisma.RevokedRefreshTokenDelegate<ExtArgs>;

  /**
   * `prisma.schema`: Exposes CRUD operations for the **Schema** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schemata
    * const schemata = await prisma.schema.findMany()
    * ```
    */
  get schema(): Prisma.SchemaDelegate<ExtArgs>;

  /**
   * `prisma.table`: Exposes CRUD operations for the **Table** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tables
    * const tables = await prisma.table.findMany()
    * ```
    */
  get table(): Prisma.TableDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.7.1
   * Query Engine version: 0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Administrator: 'Administrator',
    Field: 'Field',
    FieldAnnotation: 'FieldAnnotation',
    RevokedRefreshToken: 'RevokedRefreshToken',
    Schema: 'Schema',
    Table: 'Table',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'administrator' | 'field' | 'fieldAnnotation' | 'revokedRefreshToken' | 'schema' | 'table' | 'user'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Administrator: {
        payload: Prisma.$AdministratorPayload<ExtArgs>
        fields: Prisma.AdministratorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdministratorFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdministratorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdministratorFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdministratorPayload>
          }
          findFirst: {
            args: Prisma.AdministratorFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdministratorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdministratorFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdministratorPayload>
          }
          findMany: {
            args: Prisma.AdministratorFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdministratorPayload>[]
          }
          create: {
            args: Prisma.AdministratorCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdministratorPayload>
          }
          createMany: {
            args: Prisma.AdministratorCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AdministratorDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdministratorPayload>
          }
          update: {
            args: Prisma.AdministratorUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdministratorPayload>
          }
          deleteMany: {
            args: Prisma.AdministratorDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AdministratorUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AdministratorUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdministratorPayload>
          }
          aggregate: {
            args: Prisma.AdministratorAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAdministrator>
          }
          groupBy: {
            args: Prisma.AdministratorGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AdministratorGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdministratorCountArgs<ExtArgs>,
            result: $Utils.Optional<AdministratorCountAggregateOutputType> | number
          }
        }
      }
      Field: {
        payload: Prisma.$FieldPayload<ExtArgs>
        fields: Prisma.FieldFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FieldFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FieldPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FieldFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FieldPayload>
          }
          findFirst: {
            args: Prisma.FieldFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FieldPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FieldFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FieldPayload>
          }
          findMany: {
            args: Prisma.FieldFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FieldPayload>[]
          }
          create: {
            args: Prisma.FieldCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FieldPayload>
          }
          createMany: {
            args: Prisma.FieldCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FieldDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FieldPayload>
          }
          update: {
            args: Prisma.FieldUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FieldPayload>
          }
          deleteMany: {
            args: Prisma.FieldDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FieldUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FieldUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FieldPayload>
          }
          aggregate: {
            args: Prisma.FieldAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateField>
          }
          groupBy: {
            args: Prisma.FieldGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FieldGroupByOutputType>[]
          }
          count: {
            args: Prisma.FieldCountArgs<ExtArgs>,
            result: $Utils.Optional<FieldCountAggregateOutputType> | number
          }
        }
      }
      FieldAnnotation: {
        payload: Prisma.$FieldAnnotationPayload<ExtArgs>
        fields: Prisma.FieldAnnotationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FieldAnnotationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FieldAnnotationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FieldAnnotationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FieldAnnotationPayload>
          }
          findFirst: {
            args: Prisma.FieldAnnotationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FieldAnnotationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FieldAnnotationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FieldAnnotationPayload>
          }
          findMany: {
            args: Prisma.FieldAnnotationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FieldAnnotationPayload>[]
          }
          create: {
            args: Prisma.FieldAnnotationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FieldAnnotationPayload>
          }
          createMany: {
            args: Prisma.FieldAnnotationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FieldAnnotationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FieldAnnotationPayload>
          }
          update: {
            args: Prisma.FieldAnnotationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FieldAnnotationPayload>
          }
          deleteMany: {
            args: Prisma.FieldAnnotationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FieldAnnotationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FieldAnnotationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FieldAnnotationPayload>
          }
          aggregate: {
            args: Prisma.FieldAnnotationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFieldAnnotation>
          }
          groupBy: {
            args: Prisma.FieldAnnotationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FieldAnnotationGroupByOutputType>[]
          }
          count: {
            args: Prisma.FieldAnnotationCountArgs<ExtArgs>,
            result: $Utils.Optional<FieldAnnotationCountAggregateOutputType> | number
          }
        }
      }
      RevokedRefreshToken: {
        payload: Prisma.$RevokedRefreshTokenPayload<ExtArgs>
        fields: Prisma.RevokedRefreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RevokedRefreshTokenFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RevokedRefreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RevokedRefreshTokenFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RevokedRefreshTokenPayload>
          }
          findFirst: {
            args: Prisma.RevokedRefreshTokenFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RevokedRefreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RevokedRefreshTokenFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RevokedRefreshTokenPayload>
          }
          findMany: {
            args: Prisma.RevokedRefreshTokenFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RevokedRefreshTokenPayload>[]
          }
          create: {
            args: Prisma.RevokedRefreshTokenCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RevokedRefreshTokenPayload>
          }
          createMany: {
            args: Prisma.RevokedRefreshTokenCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.RevokedRefreshTokenDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RevokedRefreshTokenPayload>
          }
          update: {
            args: Prisma.RevokedRefreshTokenUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RevokedRefreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.RevokedRefreshTokenDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RevokedRefreshTokenUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RevokedRefreshTokenUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RevokedRefreshTokenPayload>
          }
          aggregate: {
            args: Prisma.RevokedRefreshTokenAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRevokedRefreshToken>
          }
          groupBy: {
            args: Prisma.RevokedRefreshTokenGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RevokedRefreshTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.RevokedRefreshTokenCountArgs<ExtArgs>,
            result: $Utils.Optional<RevokedRefreshTokenCountAggregateOutputType> | number
          }
        }
      }
      Schema: {
        payload: Prisma.$SchemaPayload<ExtArgs>
        fields: Prisma.SchemaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SchemaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SchemaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SchemaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SchemaPayload>
          }
          findFirst: {
            args: Prisma.SchemaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SchemaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SchemaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SchemaPayload>
          }
          findMany: {
            args: Prisma.SchemaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SchemaPayload>[]
          }
          create: {
            args: Prisma.SchemaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SchemaPayload>
          }
          createMany: {
            args: Prisma.SchemaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SchemaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SchemaPayload>
          }
          update: {
            args: Prisma.SchemaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SchemaPayload>
          }
          deleteMany: {
            args: Prisma.SchemaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SchemaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SchemaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SchemaPayload>
          }
          aggregate: {
            args: Prisma.SchemaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSchema>
          }
          groupBy: {
            args: Prisma.SchemaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SchemaGroupByOutputType>[]
          }
          count: {
            args: Prisma.SchemaCountArgs<ExtArgs>,
            result: $Utils.Optional<SchemaCountAggregateOutputType> | number
          }
        }
      }
      Table: {
        payload: Prisma.$TablePayload<ExtArgs>
        fields: Prisma.TableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TableFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TableFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          findFirst: {
            args: Prisma.TableFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TableFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          findMany: {
            args: Prisma.TableFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TablePayload>[]
          }
          create: {
            args: Prisma.TableCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          createMany: {
            args: Prisma.TableCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TableDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          update: {
            args: Prisma.TableUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          deleteMany: {
            args: Prisma.TableDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TableUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TableUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          aggregate: {
            args: Prisma.TableAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTable>
          }
          groupBy: {
            args: Prisma.TableGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TableGroupByOutputType>[]
          }
          count: {
            args: Prisma.TableCountArgs<ExtArgs>,
            result: $Utils.Optional<TableCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type FieldCountOutputType
   */

  export type FieldCountOutputType = {
    fieldAnnotations: number
  }

  export type FieldCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fieldAnnotations?: boolean | FieldCountOutputTypeCountFieldAnnotationsArgs
  }

  // Custom InputTypes

  /**
   * FieldCountOutputType without action
   */
  export type FieldCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldCountOutputType
     */
    select?: FieldCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * FieldCountOutputType without action
   */
  export type FieldCountOutputTypeCountFieldAnnotationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FieldAnnotationWhereInput
  }



  /**
   * Count Type SchemaCountOutputType
   */

  export type SchemaCountOutputType = {
    tables: number
  }

  export type SchemaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tables?: boolean | SchemaCountOutputTypeCountTablesArgs
  }

  // Custom InputTypes

  /**
   * SchemaCountOutputType without action
   */
  export type SchemaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchemaCountOutputType
     */
    select?: SchemaCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * SchemaCountOutputType without action
   */
  export type SchemaCountOutputTypeCountTablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TableWhereInput
  }



  /**
   * Count Type TableCountOutputType
   */

  export type TableCountOutputType = {
    fields: number
    fieldAnnotations: number
  }

  export type TableCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fields?: boolean | TableCountOutputTypeCountFieldsArgs
    fieldAnnotations?: boolean | TableCountOutputTypeCountFieldAnnotationsArgs
  }

  // Custom InputTypes

  /**
   * TableCountOutputType without action
   */
  export type TableCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableCountOutputType
     */
    select?: TableCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TableCountOutputType without action
   */
  export type TableCountOutputTypeCountFieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FieldWhereInput
  }


  /**
   * TableCountOutputType without action
   */
  export type TableCountOutputTypeCountFieldAnnotationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FieldAnnotationWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Administrator
   */

  export type AggregateAdministrator = {
    _count: AdministratorCountAggregateOutputType | null
    _min: AdministratorMinAggregateOutputType | null
    _max: AdministratorMaxAggregateOutputType | null
  }

  export type AdministratorMinAggregateOutputType = {
    id: string | null
    hash: string | null
    salt: string | null
    magicLinkToken: string | null
    email: string | null
    banned: boolean | null
    username: string | null
    verified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdministratorMaxAggregateOutputType = {
    id: string | null
    hash: string | null
    salt: string | null
    magicLinkToken: string | null
    email: string | null
    banned: boolean | null
    username: string | null
    verified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdministratorCountAggregateOutputType = {
    id: number
    hash: number
    salt: number
    magicLinkToken: number
    email: number
    banned: number
    username: number
    verified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdministratorMinAggregateInputType = {
    id?: true
    hash?: true
    salt?: true
    magicLinkToken?: true
    email?: true
    banned?: true
    username?: true
    verified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdministratorMaxAggregateInputType = {
    id?: true
    hash?: true
    salt?: true
    magicLinkToken?: true
    email?: true
    banned?: true
    username?: true
    verified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdministratorCountAggregateInputType = {
    id?: true
    hash?: true
    salt?: true
    magicLinkToken?: true
    email?: true
    banned?: true
    username?: true
    verified?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdministratorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Administrator to aggregate.
     */
    where?: AdministratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administrators to fetch.
     */
    orderBy?: AdministratorOrderByWithRelationInput | AdministratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdministratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administrators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administrators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Administrators
    **/
    _count?: true | AdministratorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdministratorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdministratorMaxAggregateInputType
  }

  export type GetAdministratorAggregateType<T extends AdministratorAggregateArgs> = {
        [P in keyof T & keyof AggregateAdministrator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdministrator[P]>
      : GetScalarType<T[P], AggregateAdministrator[P]>
  }




  export type AdministratorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdministratorWhereInput
    orderBy?: AdministratorOrderByWithAggregationInput | AdministratorOrderByWithAggregationInput[]
    by: AdministratorScalarFieldEnum[] | AdministratorScalarFieldEnum
    having?: AdministratorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdministratorCountAggregateInputType | true
    _min?: AdministratorMinAggregateInputType
    _max?: AdministratorMaxAggregateInputType
  }

  export type AdministratorGroupByOutputType = {
    id: string
    hash: string
    salt: string
    magicLinkToken: string | null
    email: string
    banned: boolean | null
    username: string
    verified: boolean | null
    createdAt: Date
    updatedAt: Date
    _count: AdministratorCountAggregateOutputType | null
    _min: AdministratorMinAggregateOutputType | null
    _max: AdministratorMaxAggregateOutputType | null
  }

  type GetAdministratorGroupByPayload<T extends AdministratorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdministratorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdministratorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdministratorGroupByOutputType[P]>
            : GetScalarType<T[P], AdministratorGroupByOutputType[P]>
        }
      >
    >


  export type AdministratorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hash?: boolean
    salt?: boolean
    magicLinkToken?: boolean
    email?: boolean
    banned?: boolean
    username?: boolean
    verified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["administrator"]>

  export type AdministratorSelectScalar = {
    id?: boolean
    hash?: boolean
    salt?: boolean
    magicLinkToken?: boolean
    email?: boolean
    banned?: boolean
    username?: boolean
    verified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $AdministratorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Administrator"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      /**
       * @TypeGraphQL.omit(output: true, input: true)
       */
      hash: string
      /**
       * @TypeGraphQL.omit(output: true, input: true)
       */
      salt: string
      /**
       * @TypeGraphQL.omit(output: true, input: true)
       */
      magicLinkToken: string | null
      email: string
      banned: boolean | null
      username: string
      verified: boolean | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["administrator"]>
    composites: {}
  }


  type AdministratorGetPayload<S extends boolean | null | undefined | AdministratorDefaultArgs> = $Result.GetResult<Prisma.$AdministratorPayload, S>

  type AdministratorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdministratorFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: AdministratorCountAggregateInputType | true
    }

  export interface AdministratorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Administrator'], meta: { name: 'Administrator' } }
    /**
     * Find zero or one Administrator that matches the filter.
     * @param {AdministratorFindUniqueArgs} args - Arguments to find a Administrator
     * @example
     * // Get one Administrator
     * const administrator = await prisma.administrator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AdministratorFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AdministratorFindUniqueArgs<ExtArgs>>
    ): Prisma__AdministratorClient<$Result.GetResult<Prisma.$AdministratorPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Administrator that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AdministratorFindUniqueOrThrowArgs} args - Arguments to find a Administrator
     * @example
     * // Get one Administrator
     * const administrator = await prisma.administrator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AdministratorFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AdministratorFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AdministratorClient<$Result.GetResult<Prisma.$AdministratorPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Administrator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministratorFindFirstArgs} args - Arguments to find a Administrator
     * @example
     * // Get one Administrator
     * const administrator = await prisma.administrator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AdministratorFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AdministratorFindFirstArgs<ExtArgs>>
    ): Prisma__AdministratorClient<$Result.GetResult<Prisma.$AdministratorPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Administrator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministratorFindFirstOrThrowArgs} args - Arguments to find a Administrator
     * @example
     * // Get one Administrator
     * const administrator = await prisma.administrator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AdministratorFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AdministratorFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AdministratorClient<$Result.GetResult<Prisma.$AdministratorPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Administrators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministratorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Administrators
     * const administrators = await prisma.administrator.findMany()
     * 
     * // Get first 10 Administrators
     * const administrators = await prisma.administrator.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const administratorWithIdOnly = await prisma.administrator.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AdministratorFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdministratorFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdministratorPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Administrator.
     * @param {AdministratorCreateArgs} args - Arguments to create a Administrator.
     * @example
     * // Create one Administrator
     * const Administrator = await prisma.administrator.create({
     *   data: {
     *     // ... data to create a Administrator
     *   }
     * })
     * 
    **/
    create<T extends AdministratorCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AdministratorCreateArgs<ExtArgs>>
    ): Prisma__AdministratorClient<$Result.GetResult<Prisma.$AdministratorPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Administrators.
     *     @param {AdministratorCreateManyArgs} args - Arguments to create many Administrators.
     *     @example
     *     // Create many Administrators
     *     const administrator = await prisma.administrator.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AdministratorCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdministratorCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Administrator.
     * @param {AdministratorDeleteArgs} args - Arguments to delete one Administrator.
     * @example
     * // Delete one Administrator
     * const Administrator = await prisma.administrator.delete({
     *   where: {
     *     // ... filter to delete one Administrator
     *   }
     * })
     * 
    **/
    delete<T extends AdministratorDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AdministratorDeleteArgs<ExtArgs>>
    ): Prisma__AdministratorClient<$Result.GetResult<Prisma.$AdministratorPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Administrator.
     * @param {AdministratorUpdateArgs} args - Arguments to update one Administrator.
     * @example
     * // Update one Administrator
     * const administrator = await prisma.administrator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AdministratorUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AdministratorUpdateArgs<ExtArgs>>
    ): Prisma__AdministratorClient<$Result.GetResult<Prisma.$AdministratorPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Administrators.
     * @param {AdministratorDeleteManyArgs} args - Arguments to filter Administrators to delete.
     * @example
     * // Delete a few Administrators
     * const { count } = await prisma.administrator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AdministratorDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdministratorDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Administrators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministratorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Administrators
     * const administrator = await prisma.administrator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AdministratorUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AdministratorUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Administrator.
     * @param {AdministratorUpsertArgs} args - Arguments to update or create a Administrator.
     * @example
     * // Update or create a Administrator
     * const administrator = await prisma.administrator.upsert({
     *   create: {
     *     // ... data to create a Administrator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Administrator we want to update
     *   }
     * })
    **/
    upsert<T extends AdministratorUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AdministratorUpsertArgs<ExtArgs>>
    ): Prisma__AdministratorClient<$Result.GetResult<Prisma.$AdministratorPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Administrators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministratorCountArgs} args - Arguments to filter Administrators to count.
     * @example
     * // Count the number of Administrators
     * const count = await prisma.administrator.count({
     *   where: {
     *     // ... the filter for the Administrators we want to count
     *   }
     * })
    **/
    count<T extends AdministratorCountArgs>(
      args?: Subset<T, AdministratorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdministratorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Administrator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministratorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdministratorAggregateArgs>(args: Subset<T, AdministratorAggregateArgs>): Prisma.PrismaPromise<GetAdministratorAggregateType<T>>

    /**
     * Group by Administrator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministratorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdministratorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdministratorGroupByArgs['orderBy'] }
        : { orderBy?: AdministratorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdministratorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdministratorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Administrator model
   */
  readonly fields: AdministratorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Administrator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdministratorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Administrator model
   */ 
  interface AdministratorFieldRefs {
    readonly id: FieldRef<"Administrator", 'String'>
    readonly hash: FieldRef<"Administrator", 'String'>
    readonly salt: FieldRef<"Administrator", 'String'>
    readonly magicLinkToken: FieldRef<"Administrator", 'String'>
    readonly email: FieldRef<"Administrator", 'String'>
    readonly banned: FieldRef<"Administrator", 'Boolean'>
    readonly username: FieldRef<"Administrator", 'String'>
    readonly verified: FieldRef<"Administrator", 'Boolean'>
    readonly createdAt: FieldRef<"Administrator", 'DateTime'>
    readonly updatedAt: FieldRef<"Administrator", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Administrator findUnique
   */
  export type AdministratorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrator
     */
    select?: AdministratorSelect<ExtArgs> | null
    /**
     * Filter, which Administrator to fetch.
     */
    where: AdministratorWhereUniqueInput
  }


  /**
   * Administrator findUniqueOrThrow
   */
  export type AdministratorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrator
     */
    select?: AdministratorSelect<ExtArgs> | null
    /**
     * Filter, which Administrator to fetch.
     */
    where: AdministratorWhereUniqueInput
  }


  /**
   * Administrator findFirst
   */
  export type AdministratorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrator
     */
    select?: AdministratorSelect<ExtArgs> | null
    /**
     * Filter, which Administrator to fetch.
     */
    where?: AdministratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administrators to fetch.
     */
    orderBy?: AdministratorOrderByWithRelationInput | AdministratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Administrators.
     */
    cursor?: AdministratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administrators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administrators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Administrators.
     */
    distinct?: AdministratorScalarFieldEnum | AdministratorScalarFieldEnum[]
  }


  /**
   * Administrator findFirstOrThrow
   */
  export type AdministratorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrator
     */
    select?: AdministratorSelect<ExtArgs> | null
    /**
     * Filter, which Administrator to fetch.
     */
    where?: AdministratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administrators to fetch.
     */
    orderBy?: AdministratorOrderByWithRelationInput | AdministratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Administrators.
     */
    cursor?: AdministratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administrators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administrators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Administrators.
     */
    distinct?: AdministratorScalarFieldEnum | AdministratorScalarFieldEnum[]
  }


  /**
   * Administrator findMany
   */
  export type AdministratorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrator
     */
    select?: AdministratorSelect<ExtArgs> | null
    /**
     * Filter, which Administrators to fetch.
     */
    where?: AdministratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administrators to fetch.
     */
    orderBy?: AdministratorOrderByWithRelationInput | AdministratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Administrators.
     */
    cursor?: AdministratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administrators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administrators.
     */
    skip?: number
    distinct?: AdministratorScalarFieldEnum | AdministratorScalarFieldEnum[]
  }


  /**
   * Administrator create
   */
  export type AdministratorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrator
     */
    select?: AdministratorSelect<ExtArgs> | null
    /**
     * The data needed to create a Administrator.
     */
    data: XOR<AdministratorCreateInput, AdministratorUncheckedCreateInput>
  }


  /**
   * Administrator createMany
   */
  export type AdministratorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Administrators.
     */
    data: AdministratorCreateManyInput | AdministratorCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Administrator update
   */
  export type AdministratorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrator
     */
    select?: AdministratorSelect<ExtArgs> | null
    /**
     * The data needed to update a Administrator.
     */
    data: XOR<AdministratorUpdateInput, AdministratorUncheckedUpdateInput>
    /**
     * Choose, which Administrator to update.
     */
    where: AdministratorWhereUniqueInput
  }


  /**
   * Administrator updateMany
   */
  export type AdministratorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Administrators.
     */
    data: XOR<AdministratorUpdateManyMutationInput, AdministratorUncheckedUpdateManyInput>
    /**
     * Filter which Administrators to update
     */
    where?: AdministratorWhereInput
  }


  /**
   * Administrator upsert
   */
  export type AdministratorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrator
     */
    select?: AdministratorSelect<ExtArgs> | null
    /**
     * The filter to search for the Administrator to update in case it exists.
     */
    where: AdministratorWhereUniqueInput
    /**
     * In case the Administrator found by the `where` argument doesn't exist, create a new Administrator with this data.
     */
    create: XOR<AdministratorCreateInput, AdministratorUncheckedCreateInput>
    /**
     * In case the Administrator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdministratorUpdateInput, AdministratorUncheckedUpdateInput>
  }


  /**
   * Administrator delete
   */
  export type AdministratorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrator
     */
    select?: AdministratorSelect<ExtArgs> | null
    /**
     * Filter which Administrator to delete.
     */
    where: AdministratorWhereUniqueInput
  }


  /**
   * Administrator deleteMany
   */
  export type AdministratorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Administrators to delete
     */
    where?: AdministratorWhereInput
  }


  /**
   * Administrator without action
   */
  export type AdministratorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrator
     */
    select?: AdministratorSelect<ExtArgs> | null
  }



  /**
   * Model Field
   */

  export type AggregateField = {
    _count: FieldCountAggregateOutputType | null
    _min: FieldMinAggregateOutputType | null
    _max: FieldMaxAggregateOutputType | null
  }

  export type FieldMinAggregateOutputType = {
    id: string | null
    tableId: string | null
    name: string | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FieldMaxAggregateOutputType = {
    id: string | null
    tableId: string | null
    name: string | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FieldCountAggregateOutputType = {
    id: number
    tableId: number
    name: number
    type: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FieldMinAggregateInputType = {
    id?: true
    tableId?: true
    name?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FieldMaxAggregateInputType = {
    id?: true
    tableId?: true
    name?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FieldCountAggregateInputType = {
    id?: true
    tableId?: true
    name?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FieldAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Field to aggregate.
     */
    where?: FieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fields to fetch.
     */
    orderBy?: FieldOrderByWithRelationInput | FieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fields
    **/
    _count?: true | FieldCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FieldMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FieldMaxAggregateInputType
  }

  export type GetFieldAggregateType<T extends FieldAggregateArgs> = {
        [P in keyof T & keyof AggregateField]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateField[P]>
      : GetScalarType<T[P], AggregateField[P]>
  }




  export type FieldGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FieldWhereInput
    orderBy?: FieldOrderByWithAggregationInput | FieldOrderByWithAggregationInput[]
    by: FieldScalarFieldEnum[] | FieldScalarFieldEnum
    having?: FieldScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FieldCountAggregateInputType | true
    _min?: FieldMinAggregateInputType
    _max?: FieldMaxAggregateInputType
  }

  export type FieldGroupByOutputType = {
    id: string
    tableId: string | null
    name: string
    type: string
    createdAt: Date
    updatedAt: Date
    _count: FieldCountAggregateOutputType | null
    _min: FieldMinAggregateOutputType | null
    _max: FieldMaxAggregateOutputType | null
  }

  type GetFieldGroupByPayload<T extends FieldGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FieldGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FieldGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FieldGroupByOutputType[P]>
            : GetScalarType<T[P], FieldGroupByOutputType[P]>
        }
      >
    >


  export type FieldSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tableId?: boolean
    name?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    table?: boolean | Field$tableArgs<ExtArgs>
    fieldAnnotations?: boolean | Field$fieldAnnotationsArgs<ExtArgs>
    _count?: boolean | FieldCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["field"]>

  export type FieldSelectScalar = {
    id?: boolean
    tableId?: boolean
    name?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FieldInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    table?: boolean | Field$tableArgs<ExtArgs>
    fieldAnnotations?: boolean | Field$fieldAnnotationsArgs<ExtArgs>
    _count?: boolean | FieldCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $FieldPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Field"
    objects: {
      table: Prisma.$TablePayload<ExtArgs> | null
      fieldAnnotations: Prisma.$FieldAnnotationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tableId: string | null
      name: string
      type: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["field"]>
    composites: {}
  }


  type FieldGetPayload<S extends boolean | null | undefined | FieldDefaultArgs> = $Result.GetResult<Prisma.$FieldPayload, S>

  type FieldCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FieldFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: FieldCountAggregateInputType | true
    }

  export interface FieldDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Field'], meta: { name: 'Field' } }
    /**
     * Find zero or one Field that matches the filter.
     * @param {FieldFindUniqueArgs} args - Arguments to find a Field
     * @example
     * // Get one Field
     * const field = await prisma.field.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FieldFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FieldFindUniqueArgs<ExtArgs>>
    ): Prisma__FieldClient<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Field that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FieldFindUniqueOrThrowArgs} args - Arguments to find a Field
     * @example
     * // Get one Field
     * const field = await prisma.field.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FieldFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FieldFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FieldClient<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Field that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldFindFirstArgs} args - Arguments to find a Field
     * @example
     * // Get one Field
     * const field = await prisma.field.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FieldFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FieldFindFirstArgs<ExtArgs>>
    ): Prisma__FieldClient<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Field that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldFindFirstOrThrowArgs} args - Arguments to find a Field
     * @example
     * // Get one Field
     * const field = await prisma.field.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FieldFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FieldFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FieldClient<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Fields that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fields
     * const fields = await prisma.field.findMany()
     * 
     * // Get first 10 Fields
     * const fields = await prisma.field.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fieldWithIdOnly = await prisma.field.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FieldFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FieldFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Field.
     * @param {FieldCreateArgs} args - Arguments to create a Field.
     * @example
     * // Create one Field
     * const Field = await prisma.field.create({
     *   data: {
     *     // ... data to create a Field
     *   }
     * })
     * 
    **/
    create<T extends FieldCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FieldCreateArgs<ExtArgs>>
    ): Prisma__FieldClient<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Fields.
     *     @param {FieldCreateManyArgs} args - Arguments to create many Fields.
     *     @example
     *     // Create many Fields
     *     const field = await prisma.field.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FieldCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FieldCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Field.
     * @param {FieldDeleteArgs} args - Arguments to delete one Field.
     * @example
     * // Delete one Field
     * const Field = await prisma.field.delete({
     *   where: {
     *     // ... filter to delete one Field
     *   }
     * })
     * 
    **/
    delete<T extends FieldDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FieldDeleteArgs<ExtArgs>>
    ): Prisma__FieldClient<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Field.
     * @param {FieldUpdateArgs} args - Arguments to update one Field.
     * @example
     * // Update one Field
     * const field = await prisma.field.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FieldUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FieldUpdateArgs<ExtArgs>>
    ): Prisma__FieldClient<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Fields.
     * @param {FieldDeleteManyArgs} args - Arguments to filter Fields to delete.
     * @example
     * // Delete a few Fields
     * const { count } = await prisma.field.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FieldDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FieldDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fields
     * const field = await prisma.field.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FieldUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FieldUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Field.
     * @param {FieldUpsertArgs} args - Arguments to update or create a Field.
     * @example
     * // Update or create a Field
     * const field = await prisma.field.upsert({
     *   create: {
     *     // ... data to create a Field
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Field we want to update
     *   }
     * })
    **/
    upsert<T extends FieldUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FieldUpsertArgs<ExtArgs>>
    ): Prisma__FieldClient<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Fields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldCountArgs} args - Arguments to filter Fields to count.
     * @example
     * // Count the number of Fields
     * const count = await prisma.field.count({
     *   where: {
     *     // ... the filter for the Fields we want to count
     *   }
     * })
    **/
    count<T extends FieldCountArgs>(
      args?: Subset<T, FieldCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FieldCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Field.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FieldAggregateArgs>(args: Subset<T, FieldAggregateArgs>): Prisma.PrismaPromise<GetFieldAggregateType<T>>

    /**
     * Group by Field.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FieldGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FieldGroupByArgs['orderBy'] }
        : { orderBy?: FieldGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FieldGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFieldGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Field model
   */
  readonly fields: FieldFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Field.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FieldClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    table<T extends Field$tableArgs<ExtArgs> = {}>(args?: Subset<T, Field$tableArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    fieldAnnotations<T extends Field$fieldAnnotationsArgs<ExtArgs> = {}>(args?: Subset<T, Field$fieldAnnotationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FieldAnnotationPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Field model
   */ 
  interface FieldFieldRefs {
    readonly id: FieldRef<"Field", 'String'>
    readonly tableId: FieldRef<"Field", 'String'>
    readonly name: FieldRef<"Field", 'String'>
    readonly type: FieldRef<"Field", 'String'>
    readonly createdAt: FieldRef<"Field", 'DateTime'>
    readonly updatedAt: FieldRef<"Field", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Field findUnique
   */
  export type FieldFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FieldInclude<ExtArgs> | null
    /**
     * Filter, which Field to fetch.
     */
    where: FieldWhereUniqueInput
  }


  /**
   * Field findUniqueOrThrow
   */
  export type FieldFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FieldInclude<ExtArgs> | null
    /**
     * Filter, which Field to fetch.
     */
    where: FieldWhereUniqueInput
  }


  /**
   * Field findFirst
   */
  export type FieldFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FieldInclude<ExtArgs> | null
    /**
     * Filter, which Field to fetch.
     */
    where?: FieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fields to fetch.
     */
    orderBy?: FieldOrderByWithRelationInput | FieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fields.
     */
    cursor?: FieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fields.
     */
    distinct?: FieldScalarFieldEnum | FieldScalarFieldEnum[]
  }


  /**
   * Field findFirstOrThrow
   */
  export type FieldFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FieldInclude<ExtArgs> | null
    /**
     * Filter, which Field to fetch.
     */
    where?: FieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fields to fetch.
     */
    orderBy?: FieldOrderByWithRelationInput | FieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fields.
     */
    cursor?: FieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fields.
     */
    distinct?: FieldScalarFieldEnum | FieldScalarFieldEnum[]
  }


  /**
   * Field findMany
   */
  export type FieldFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FieldInclude<ExtArgs> | null
    /**
     * Filter, which Fields to fetch.
     */
    where?: FieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fields to fetch.
     */
    orderBy?: FieldOrderByWithRelationInput | FieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fields.
     */
    cursor?: FieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fields.
     */
    skip?: number
    distinct?: FieldScalarFieldEnum | FieldScalarFieldEnum[]
  }


  /**
   * Field create
   */
  export type FieldCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FieldInclude<ExtArgs> | null
    /**
     * The data needed to create a Field.
     */
    data: XOR<FieldCreateInput, FieldUncheckedCreateInput>
  }


  /**
   * Field createMany
   */
  export type FieldCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fields.
     */
    data: FieldCreateManyInput | FieldCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Field update
   */
  export type FieldUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FieldInclude<ExtArgs> | null
    /**
     * The data needed to update a Field.
     */
    data: XOR<FieldUpdateInput, FieldUncheckedUpdateInput>
    /**
     * Choose, which Field to update.
     */
    where: FieldWhereUniqueInput
  }


  /**
   * Field updateMany
   */
  export type FieldUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fields.
     */
    data: XOR<FieldUpdateManyMutationInput, FieldUncheckedUpdateManyInput>
    /**
     * Filter which Fields to update
     */
    where?: FieldWhereInput
  }


  /**
   * Field upsert
   */
  export type FieldUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FieldInclude<ExtArgs> | null
    /**
     * The filter to search for the Field to update in case it exists.
     */
    where: FieldWhereUniqueInput
    /**
     * In case the Field found by the `where` argument doesn't exist, create a new Field with this data.
     */
    create: XOR<FieldCreateInput, FieldUncheckedCreateInput>
    /**
     * In case the Field was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FieldUpdateInput, FieldUncheckedUpdateInput>
  }


  /**
   * Field delete
   */
  export type FieldDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FieldInclude<ExtArgs> | null
    /**
     * Filter which Field to delete.
     */
    where: FieldWhereUniqueInput
  }


  /**
   * Field deleteMany
   */
  export type FieldDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fields to delete
     */
    where?: FieldWhereInput
  }


  /**
   * Field.table
   */
  export type Field$tableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TableInclude<ExtArgs> | null
    where?: TableWhereInput
  }


  /**
   * Field.fieldAnnotations
   */
  export type Field$fieldAnnotationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldAnnotation
     */
    select?: FieldAnnotationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FieldAnnotationInclude<ExtArgs> | null
    where?: FieldAnnotationWhereInput
    orderBy?: FieldAnnotationOrderByWithRelationInput | FieldAnnotationOrderByWithRelationInput[]
    cursor?: FieldAnnotationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FieldAnnotationScalarFieldEnum | FieldAnnotationScalarFieldEnum[]
  }


  /**
   * Field without action
   */
  export type FieldDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FieldInclude<ExtArgs> | null
  }



  /**
   * Model FieldAnnotation
   */

  export type AggregateFieldAnnotation = {
    _count: FieldAnnotationCountAggregateOutputType | null
    _min: FieldAnnotationMinAggregateOutputType | null
    _max: FieldAnnotationMaxAggregateOutputType | null
  }

  export type FieldAnnotationMinAggregateOutputType = {
    id: string | null
    tableId: string | null
    modelName: string | null
    fieldId: string | null
    fieldName: string | null
    annotation: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FieldAnnotationMaxAggregateOutputType = {
    id: string | null
    tableId: string | null
    modelName: string | null
    fieldId: string | null
    fieldName: string | null
    annotation: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FieldAnnotationCountAggregateOutputType = {
    id: number
    tableId: number
    modelName: number
    fieldId: number
    fieldName: number
    annotation: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FieldAnnotationMinAggregateInputType = {
    id?: true
    tableId?: true
    modelName?: true
    fieldId?: true
    fieldName?: true
    annotation?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FieldAnnotationMaxAggregateInputType = {
    id?: true
    tableId?: true
    modelName?: true
    fieldId?: true
    fieldName?: true
    annotation?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FieldAnnotationCountAggregateInputType = {
    id?: true
    tableId?: true
    modelName?: true
    fieldId?: true
    fieldName?: true
    annotation?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FieldAnnotationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FieldAnnotation to aggregate.
     */
    where?: FieldAnnotationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FieldAnnotations to fetch.
     */
    orderBy?: FieldAnnotationOrderByWithRelationInput | FieldAnnotationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FieldAnnotationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FieldAnnotations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FieldAnnotations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FieldAnnotations
    **/
    _count?: true | FieldAnnotationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FieldAnnotationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FieldAnnotationMaxAggregateInputType
  }

  export type GetFieldAnnotationAggregateType<T extends FieldAnnotationAggregateArgs> = {
        [P in keyof T & keyof AggregateFieldAnnotation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFieldAnnotation[P]>
      : GetScalarType<T[P], AggregateFieldAnnotation[P]>
  }




  export type FieldAnnotationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FieldAnnotationWhereInput
    orderBy?: FieldAnnotationOrderByWithAggregationInput | FieldAnnotationOrderByWithAggregationInput[]
    by: FieldAnnotationScalarFieldEnum[] | FieldAnnotationScalarFieldEnum
    having?: FieldAnnotationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FieldAnnotationCountAggregateInputType | true
    _min?: FieldAnnotationMinAggregateInputType
    _max?: FieldAnnotationMaxAggregateInputType
  }

  export type FieldAnnotationGroupByOutputType = {
    id: string
    tableId: string | null
    modelName: string
    fieldId: string | null
    fieldName: string
    annotation: string
    createdAt: Date
    updatedAt: Date
    _count: FieldAnnotationCountAggregateOutputType | null
    _min: FieldAnnotationMinAggregateOutputType | null
    _max: FieldAnnotationMaxAggregateOutputType | null
  }

  type GetFieldAnnotationGroupByPayload<T extends FieldAnnotationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FieldAnnotationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FieldAnnotationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FieldAnnotationGroupByOutputType[P]>
            : GetScalarType<T[P], FieldAnnotationGroupByOutputType[P]>
        }
      >
    >


  export type FieldAnnotationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tableId?: boolean
    modelName?: boolean
    fieldId?: boolean
    fieldName?: boolean
    annotation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    field?: boolean | FieldAnnotation$fieldArgs<ExtArgs>
    table?: boolean | FieldAnnotation$tableArgs<ExtArgs>
  }, ExtArgs["result"]["fieldAnnotation"]>

  export type FieldAnnotationSelectScalar = {
    id?: boolean
    tableId?: boolean
    modelName?: boolean
    fieldId?: boolean
    fieldName?: boolean
    annotation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FieldAnnotationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    field?: boolean | FieldAnnotation$fieldArgs<ExtArgs>
    table?: boolean | FieldAnnotation$tableArgs<ExtArgs>
  }


  export type $FieldAnnotationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FieldAnnotation"
    objects: {
      field: Prisma.$FieldPayload<ExtArgs> | null
      table: Prisma.$TablePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tableId: string | null
      modelName: string
      fieldId: string | null
      fieldName: string
      annotation: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fieldAnnotation"]>
    composites: {}
  }


  type FieldAnnotationGetPayload<S extends boolean | null | undefined | FieldAnnotationDefaultArgs> = $Result.GetResult<Prisma.$FieldAnnotationPayload, S>

  type FieldAnnotationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FieldAnnotationFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: FieldAnnotationCountAggregateInputType | true
    }

  export interface FieldAnnotationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FieldAnnotation'], meta: { name: 'FieldAnnotation' } }
    /**
     * Find zero or one FieldAnnotation that matches the filter.
     * @param {FieldAnnotationFindUniqueArgs} args - Arguments to find a FieldAnnotation
     * @example
     * // Get one FieldAnnotation
     * const fieldAnnotation = await prisma.fieldAnnotation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FieldAnnotationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FieldAnnotationFindUniqueArgs<ExtArgs>>
    ): Prisma__FieldAnnotationClient<$Result.GetResult<Prisma.$FieldAnnotationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one FieldAnnotation that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FieldAnnotationFindUniqueOrThrowArgs} args - Arguments to find a FieldAnnotation
     * @example
     * // Get one FieldAnnotation
     * const fieldAnnotation = await prisma.fieldAnnotation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FieldAnnotationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FieldAnnotationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FieldAnnotationClient<$Result.GetResult<Prisma.$FieldAnnotationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first FieldAnnotation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldAnnotationFindFirstArgs} args - Arguments to find a FieldAnnotation
     * @example
     * // Get one FieldAnnotation
     * const fieldAnnotation = await prisma.fieldAnnotation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FieldAnnotationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FieldAnnotationFindFirstArgs<ExtArgs>>
    ): Prisma__FieldAnnotationClient<$Result.GetResult<Prisma.$FieldAnnotationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first FieldAnnotation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldAnnotationFindFirstOrThrowArgs} args - Arguments to find a FieldAnnotation
     * @example
     * // Get one FieldAnnotation
     * const fieldAnnotation = await prisma.fieldAnnotation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FieldAnnotationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FieldAnnotationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FieldAnnotationClient<$Result.GetResult<Prisma.$FieldAnnotationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more FieldAnnotations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldAnnotationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FieldAnnotations
     * const fieldAnnotations = await prisma.fieldAnnotation.findMany()
     * 
     * // Get first 10 FieldAnnotations
     * const fieldAnnotations = await prisma.fieldAnnotation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fieldAnnotationWithIdOnly = await prisma.fieldAnnotation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FieldAnnotationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FieldAnnotationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FieldAnnotationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a FieldAnnotation.
     * @param {FieldAnnotationCreateArgs} args - Arguments to create a FieldAnnotation.
     * @example
     * // Create one FieldAnnotation
     * const FieldAnnotation = await prisma.fieldAnnotation.create({
     *   data: {
     *     // ... data to create a FieldAnnotation
     *   }
     * })
     * 
    **/
    create<T extends FieldAnnotationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FieldAnnotationCreateArgs<ExtArgs>>
    ): Prisma__FieldAnnotationClient<$Result.GetResult<Prisma.$FieldAnnotationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many FieldAnnotations.
     *     @param {FieldAnnotationCreateManyArgs} args - Arguments to create many FieldAnnotations.
     *     @example
     *     // Create many FieldAnnotations
     *     const fieldAnnotation = await prisma.fieldAnnotation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FieldAnnotationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FieldAnnotationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FieldAnnotation.
     * @param {FieldAnnotationDeleteArgs} args - Arguments to delete one FieldAnnotation.
     * @example
     * // Delete one FieldAnnotation
     * const FieldAnnotation = await prisma.fieldAnnotation.delete({
     *   where: {
     *     // ... filter to delete one FieldAnnotation
     *   }
     * })
     * 
    **/
    delete<T extends FieldAnnotationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FieldAnnotationDeleteArgs<ExtArgs>>
    ): Prisma__FieldAnnotationClient<$Result.GetResult<Prisma.$FieldAnnotationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one FieldAnnotation.
     * @param {FieldAnnotationUpdateArgs} args - Arguments to update one FieldAnnotation.
     * @example
     * // Update one FieldAnnotation
     * const fieldAnnotation = await prisma.fieldAnnotation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FieldAnnotationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FieldAnnotationUpdateArgs<ExtArgs>>
    ): Prisma__FieldAnnotationClient<$Result.GetResult<Prisma.$FieldAnnotationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more FieldAnnotations.
     * @param {FieldAnnotationDeleteManyArgs} args - Arguments to filter FieldAnnotations to delete.
     * @example
     * // Delete a few FieldAnnotations
     * const { count } = await prisma.fieldAnnotation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FieldAnnotationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FieldAnnotationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FieldAnnotations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldAnnotationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FieldAnnotations
     * const fieldAnnotation = await prisma.fieldAnnotation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FieldAnnotationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FieldAnnotationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FieldAnnotation.
     * @param {FieldAnnotationUpsertArgs} args - Arguments to update or create a FieldAnnotation.
     * @example
     * // Update or create a FieldAnnotation
     * const fieldAnnotation = await prisma.fieldAnnotation.upsert({
     *   create: {
     *     // ... data to create a FieldAnnotation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FieldAnnotation we want to update
     *   }
     * })
    **/
    upsert<T extends FieldAnnotationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FieldAnnotationUpsertArgs<ExtArgs>>
    ): Prisma__FieldAnnotationClient<$Result.GetResult<Prisma.$FieldAnnotationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of FieldAnnotations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldAnnotationCountArgs} args - Arguments to filter FieldAnnotations to count.
     * @example
     * // Count the number of FieldAnnotations
     * const count = await prisma.fieldAnnotation.count({
     *   where: {
     *     // ... the filter for the FieldAnnotations we want to count
     *   }
     * })
    **/
    count<T extends FieldAnnotationCountArgs>(
      args?: Subset<T, FieldAnnotationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FieldAnnotationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FieldAnnotation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldAnnotationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FieldAnnotationAggregateArgs>(args: Subset<T, FieldAnnotationAggregateArgs>): Prisma.PrismaPromise<GetFieldAnnotationAggregateType<T>>

    /**
     * Group by FieldAnnotation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldAnnotationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FieldAnnotationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FieldAnnotationGroupByArgs['orderBy'] }
        : { orderBy?: FieldAnnotationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FieldAnnotationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFieldAnnotationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FieldAnnotation model
   */
  readonly fields: FieldAnnotationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FieldAnnotation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FieldAnnotationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    field<T extends FieldAnnotation$fieldArgs<ExtArgs> = {}>(args?: Subset<T, FieldAnnotation$fieldArgs<ExtArgs>>): Prisma__FieldClient<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    table<T extends FieldAnnotation$tableArgs<ExtArgs> = {}>(args?: Subset<T, FieldAnnotation$tableArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the FieldAnnotation model
   */ 
  interface FieldAnnotationFieldRefs {
    readonly id: FieldRef<"FieldAnnotation", 'String'>
    readonly tableId: FieldRef<"FieldAnnotation", 'String'>
    readonly modelName: FieldRef<"FieldAnnotation", 'String'>
    readonly fieldId: FieldRef<"FieldAnnotation", 'String'>
    readonly fieldName: FieldRef<"FieldAnnotation", 'String'>
    readonly annotation: FieldRef<"FieldAnnotation", 'String'>
    readonly createdAt: FieldRef<"FieldAnnotation", 'DateTime'>
    readonly updatedAt: FieldRef<"FieldAnnotation", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * FieldAnnotation findUnique
   */
  export type FieldAnnotationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldAnnotation
     */
    select?: FieldAnnotationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FieldAnnotationInclude<ExtArgs> | null
    /**
     * Filter, which FieldAnnotation to fetch.
     */
    where: FieldAnnotationWhereUniqueInput
  }


  /**
   * FieldAnnotation findUniqueOrThrow
   */
  export type FieldAnnotationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldAnnotation
     */
    select?: FieldAnnotationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FieldAnnotationInclude<ExtArgs> | null
    /**
     * Filter, which FieldAnnotation to fetch.
     */
    where: FieldAnnotationWhereUniqueInput
  }


  /**
   * FieldAnnotation findFirst
   */
  export type FieldAnnotationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldAnnotation
     */
    select?: FieldAnnotationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FieldAnnotationInclude<ExtArgs> | null
    /**
     * Filter, which FieldAnnotation to fetch.
     */
    where?: FieldAnnotationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FieldAnnotations to fetch.
     */
    orderBy?: FieldAnnotationOrderByWithRelationInput | FieldAnnotationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FieldAnnotations.
     */
    cursor?: FieldAnnotationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FieldAnnotations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FieldAnnotations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FieldAnnotations.
     */
    distinct?: FieldAnnotationScalarFieldEnum | FieldAnnotationScalarFieldEnum[]
  }


  /**
   * FieldAnnotation findFirstOrThrow
   */
  export type FieldAnnotationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldAnnotation
     */
    select?: FieldAnnotationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FieldAnnotationInclude<ExtArgs> | null
    /**
     * Filter, which FieldAnnotation to fetch.
     */
    where?: FieldAnnotationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FieldAnnotations to fetch.
     */
    orderBy?: FieldAnnotationOrderByWithRelationInput | FieldAnnotationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FieldAnnotations.
     */
    cursor?: FieldAnnotationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FieldAnnotations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FieldAnnotations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FieldAnnotations.
     */
    distinct?: FieldAnnotationScalarFieldEnum | FieldAnnotationScalarFieldEnum[]
  }


  /**
   * FieldAnnotation findMany
   */
  export type FieldAnnotationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldAnnotation
     */
    select?: FieldAnnotationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FieldAnnotationInclude<ExtArgs> | null
    /**
     * Filter, which FieldAnnotations to fetch.
     */
    where?: FieldAnnotationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FieldAnnotations to fetch.
     */
    orderBy?: FieldAnnotationOrderByWithRelationInput | FieldAnnotationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FieldAnnotations.
     */
    cursor?: FieldAnnotationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FieldAnnotations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FieldAnnotations.
     */
    skip?: number
    distinct?: FieldAnnotationScalarFieldEnum | FieldAnnotationScalarFieldEnum[]
  }


  /**
   * FieldAnnotation create
   */
  export type FieldAnnotationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldAnnotation
     */
    select?: FieldAnnotationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FieldAnnotationInclude<ExtArgs> | null
    /**
     * The data needed to create a FieldAnnotation.
     */
    data: XOR<FieldAnnotationCreateInput, FieldAnnotationUncheckedCreateInput>
  }


  /**
   * FieldAnnotation createMany
   */
  export type FieldAnnotationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FieldAnnotations.
     */
    data: FieldAnnotationCreateManyInput | FieldAnnotationCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * FieldAnnotation update
   */
  export type FieldAnnotationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldAnnotation
     */
    select?: FieldAnnotationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FieldAnnotationInclude<ExtArgs> | null
    /**
     * The data needed to update a FieldAnnotation.
     */
    data: XOR<FieldAnnotationUpdateInput, FieldAnnotationUncheckedUpdateInput>
    /**
     * Choose, which FieldAnnotation to update.
     */
    where: FieldAnnotationWhereUniqueInput
  }


  /**
   * FieldAnnotation updateMany
   */
  export type FieldAnnotationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FieldAnnotations.
     */
    data: XOR<FieldAnnotationUpdateManyMutationInput, FieldAnnotationUncheckedUpdateManyInput>
    /**
     * Filter which FieldAnnotations to update
     */
    where?: FieldAnnotationWhereInput
  }


  /**
   * FieldAnnotation upsert
   */
  export type FieldAnnotationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldAnnotation
     */
    select?: FieldAnnotationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FieldAnnotationInclude<ExtArgs> | null
    /**
     * The filter to search for the FieldAnnotation to update in case it exists.
     */
    where: FieldAnnotationWhereUniqueInput
    /**
     * In case the FieldAnnotation found by the `where` argument doesn't exist, create a new FieldAnnotation with this data.
     */
    create: XOR<FieldAnnotationCreateInput, FieldAnnotationUncheckedCreateInput>
    /**
     * In case the FieldAnnotation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FieldAnnotationUpdateInput, FieldAnnotationUncheckedUpdateInput>
  }


  /**
   * FieldAnnotation delete
   */
  export type FieldAnnotationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldAnnotation
     */
    select?: FieldAnnotationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FieldAnnotationInclude<ExtArgs> | null
    /**
     * Filter which FieldAnnotation to delete.
     */
    where: FieldAnnotationWhereUniqueInput
  }


  /**
   * FieldAnnotation deleteMany
   */
  export type FieldAnnotationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FieldAnnotations to delete
     */
    where?: FieldAnnotationWhereInput
  }


  /**
   * FieldAnnotation.field
   */
  export type FieldAnnotation$fieldArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FieldInclude<ExtArgs> | null
    where?: FieldWhereInput
  }


  /**
   * FieldAnnotation.table
   */
  export type FieldAnnotation$tableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TableInclude<ExtArgs> | null
    where?: TableWhereInput
  }


  /**
   * FieldAnnotation without action
   */
  export type FieldAnnotationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldAnnotation
     */
    select?: FieldAnnotationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FieldAnnotationInclude<ExtArgs> | null
  }



  /**
   * Model RevokedRefreshToken
   */

  export type AggregateRevokedRefreshToken = {
    _count: RevokedRefreshTokenCountAggregateOutputType | null
    _min: RevokedRefreshTokenMinAggregateOutputType | null
    _max: RevokedRefreshTokenMaxAggregateOutputType | null
  }

  export type RevokedRefreshTokenMinAggregateOutputType = {
    id: string | null
    value: string | null
    actualExpiration: Date | null
  }

  export type RevokedRefreshTokenMaxAggregateOutputType = {
    id: string | null
    value: string | null
    actualExpiration: Date | null
  }

  export type RevokedRefreshTokenCountAggregateOutputType = {
    id: number
    value: number
    actualExpiration: number
    _all: number
  }


  export type RevokedRefreshTokenMinAggregateInputType = {
    id?: true
    value?: true
    actualExpiration?: true
  }

  export type RevokedRefreshTokenMaxAggregateInputType = {
    id?: true
    value?: true
    actualExpiration?: true
  }

  export type RevokedRefreshTokenCountAggregateInputType = {
    id?: true
    value?: true
    actualExpiration?: true
    _all?: true
  }

  export type RevokedRefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RevokedRefreshToken to aggregate.
     */
    where?: RevokedRefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RevokedRefreshTokens to fetch.
     */
    orderBy?: RevokedRefreshTokenOrderByWithRelationInput | RevokedRefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RevokedRefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RevokedRefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RevokedRefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RevokedRefreshTokens
    **/
    _count?: true | RevokedRefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RevokedRefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RevokedRefreshTokenMaxAggregateInputType
  }

  export type GetRevokedRefreshTokenAggregateType<T extends RevokedRefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRevokedRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRevokedRefreshToken[P]>
      : GetScalarType<T[P], AggregateRevokedRefreshToken[P]>
  }




  export type RevokedRefreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RevokedRefreshTokenWhereInput
    orderBy?: RevokedRefreshTokenOrderByWithAggregationInput | RevokedRefreshTokenOrderByWithAggregationInput[]
    by: RevokedRefreshTokenScalarFieldEnum[] | RevokedRefreshTokenScalarFieldEnum
    having?: RevokedRefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RevokedRefreshTokenCountAggregateInputType | true
    _min?: RevokedRefreshTokenMinAggregateInputType
    _max?: RevokedRefreshTokenMaxAggregateInputType
  }

  export type RevokedRefreshTokenGroupByOutputType = {
    id: string
    value: string
    actualExpiration: Date
    _count: RevokedRefreshTokenCountAggregateOutputType | null
    _min: RevokedRefreshTokenMinAggregateOutputType | null
    _max: RevokedRefreshTokenMaxAggregateOutputType | null
  }

  type GetRevokedRefreshTokenGroupByPayload<T extends RevokedRefreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RevokedRefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RevokedRefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RevokedRefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RevokedRefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type RevokedRefreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    actualExpiration?: boolean
  }, ExtArgs["result"]["revokedRefreshToken"]>

  export type RevokedRefreshTokenSelectScalar = {
    id?: boolean
    value?: boolean
    actualExpiration?: boolean
  }


  export type $RevokedRefreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RevokedRefreshToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      value: string
      actualExpiration: Date
    }, ExtArgs["result"]["revokedRefreshToken"]>
    composites: {}
  }


  type RevokedRefreshTokenGetPayload<S extends boolean | null | undefined | RevokedRefreshTokenDefaultArgs> = $Result.GetResult<Prisma.$RevokedRefreshTokenPayload, S>

  type RevokedRefreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RevokedRefreshTokenFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: RevokedRefreshTokenCountAggregateInputType | true
    }

  export interface RevokedRefreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RevokedRefreshToken'], meta: { name: 'RevokedRefreshToken' } }
    /**
     * Find zero or one RevokedRefreshToken that matches the filter.
     * @param {RevokedRefreshTokenFindUniqueArgs} args - Arguments to find a RevokedRefreshToken
     * @example
     * // Get one RevokedRefreshToken
     * const revokedRefreshToken = await prisma.revokedRefreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RevokedRefreshTokenFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RevokedRefreshTokenFindUniqueArgs<ExtArgs>>
    ): Prisma__RevokedRefreshTokenClient<$Result.GetResult<Prisma.$RevokedRefreshTokenPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one RevokedRefreshToken that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RevokedRefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RevokedRefreshToken
     * @example
     * // Get one RevokedRefreshToken
     * const revokedRefreshToken = await prisma.revokedRefreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RevokedRefreshTokenFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RevokedRefreshTokenFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RevokedRefreshTokenClient<$Result.GetResult<Prisma.$RevokedRefreshTokenPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first RevokedRefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevokedRefreshTokenFindFirstArgs} args - Arguments to find a RevokedRefreshToken
     * @example
     * // Get one RevokedRefreshToken
     * const revokedRefreshToken = await prisma.revokedRefreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RevokedRefreshTokenFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RevokedRefreshTokenFindFirstArgs<ExtArgs>>
    ): Prisma__RevokedRefreshTokenClient<$Result.GetResult<Prisma.$RevokedRefreshTokenPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first RevokedRefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevokedRefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RevokedRefreshToken
     * @example
     * // Get one RevokedRefreshToken
     * const revokedRefreshToken = await prisma.revokedRefreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RevokedRefreshTokenFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RevokedRefreshTokenFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RevokedRefreshTokenClient<$Result.GetResult<Prisma.$RevokedRefreshTokenPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more RevokedRefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevokedRefreshTokenFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RevokedRefreshTokens
     * const revokedRefreshTokens = await prisma.revokedRefreshToken.findMany()
     * 
     * // Get first 10 RevokedRefreshTokens
     * const revokedRefreshTokens = await prisma.revokedRefreshToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const revokedRefreshTokenWithIdOnly = await prisma.revokedRefreshToken.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RevokedRefreshTokenFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RevokedRefreshTokenFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RevokedRefreshTokenPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a RevokedRefreshToken.
     * @param {RevokedRefreshTokenCreateArgs} args - Arguments to create a RevokedRefreshToken.
     * @example
     * // Create one RevokedRefreshToken
     * const RevokedRefreshToken = await prisma.revokedRefreshToken.create({
     *   data: {
     *     // ... data to create a RevokedRefreshToken
     *   }
     * })
     * 
    **/
    create<T extends RevokedRefreshTokenCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RevokedRefreshTokenCreateArgs<ExtArgs>>
    ): Prisma__RevokedRefreshTokenClient<$Result.GetResult<Prisma.$RevokedRefreshTokenPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many RevokedRefreshTokens.
     *     @param {RevokedRefreshTokenCreateManyArgs} args - Arguments to create many RevokedRefreshTokens.
     *     @example
     *     // Create many RevokedRefreshTokens
     *     const revokedRefreshToken = await prisma.revokedRefreshToken.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RevokedRefreshTokenCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RevokedRefreshTokenCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RevokedRefreshToken.
     * @param {RevokedRefreshTokenDeleteArgs} args - Arguments to delete one RevokedRefreshToken.
     * @example
     * // Delete one RevokedRefreshToken
     * const RevokedRefreshToken = await prisma.revokedRefreshToken.delete({
     *   where: {
     *     // ... filter to delete one RevokedRefreshToken
     *   }
     * })
     * 
    **/
    delete<T extends RevokedRefreshTokenDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RevokedRefreshTokenDeleteArgs<ExtArgs>>
    ): Prisma__RevokedRefreshTokenClient<$Result.GetResult<Prisma.$RevokedRefreshTokenPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one RevokedRefreshToken.
     * @param {RevokedRefreshTokenUpdateArgs} args - Arguments to update one RevokedRefreshToken.
     * @example
     * // Update one RevokedRefreshToken
     * const revokedRefreshToken = await prisma.revokedRefreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RevokedRefreshTokenUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RevokedRefreshTokenUpdateArgs<ExtArgs>>
    ): Prisma__RevokedRefreshTokenClient<$Result.GetResult<Prisma.$RevokedRefreshTokenPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more RevokedRefreshTokens.
     * @param {RevokedRefreshTokenDeleteManyArgs} args - Arguments to filter RevokedRefreshTokens to delete.
     * @example
     * // Delete a few RevokedRefreshTokens
     * const { count } = await prisma.revokedRefreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RevokedRefreshTokenDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RevokedRefreshTokenDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RevokedRefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevokedRefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RevokedRefreshTokens
     * const revokedRefreshToken = await prisma.revokedRefreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RevokedRefreshTokenUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RevokedRefreshTokenUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RevokedRefreshToken.
     * @param {RevokedRefreshTokenUpsertArgs} args - Arguments to update or create a RevokedRefreshToken.
     * @example
     * // Update or create a RevokedRefreshToken
     * const revokedRefreshToken = await prisma.revokedRefreshToken.upsert({
     *   create: {
     *     // ... data to create a RevokedRefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RevokedRefreshToken we want to update
     *   }
     * })
    **/
    upsert<T extends RevokedRefreshTokenUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RevokedRefreshTokenUpsertArgs<ExtArgs>>
    ): Prisma__RevokedRefreshTokenClient<$Result.GetResult<Prisma.$RevokedRefreshTokenPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of RevokedRefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevokedRefreshTokenCountArgs} args - Arguments to filter RevokedRefreshTokens to count.
     * @example
     * // Count the number of RevokedRefreshTokens
     * const count = await prisma.revokedRefreshToken.count({
     *   where: {
     *     // ... the filter for the RevokedRefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends RevokedRefreshTokenCountArgs>(
      args?: Subset<T, RevokedRefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RevokedRefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RevokedRefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevokedRefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RevokedRefreshTokenAggregateArgs>(args: Subset<T, RevokedRefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetRevokedRefreshTokenAggregateType<T>>

    /**
     * Group by RevokedRefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevokedRefreshTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RevokedRefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RevokedRefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RevokedRefreshTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RevokedRefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRevokedRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RevokedRefreshToken model
   */
  readonly fields: RevokedRefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RevokedRefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RevokedRefreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the RevokedRefreshToken model
   */ 
  interface RevokedRefreshTokenFieldRefs {
    readonly id: FieldRef<"RevokedRefreshToken", 'String'>
    readonly value: FieldRef<"RevokedRefreshToken", 'String'>
    readonly actualExpiration: FieldRef<"RevokedRefreshToken", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * RevokedRefreshToken findUnique
   */
  export type RevokedRefreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevokedRefreshToken
     */
    select?: RevokedRefreshTokenSelect<ExtArgs> | null
    /**
     * Filter, which RevokedRefreshToken to fetch.
     */
    where: RevokedRefreshTokenWhereUniqueInput
  }


  /**
   * RevokedRefreshToken findUniqueOrThrow
   */
  export type RevokedRefreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevokedRefreshToken
     */
    select?: RevokedRefreshTokenSelect<ExtArgs> | null
    /**
     * Filter, which RevokedRefreshToken to fetch.
     */
    where: RevokedRefreshTokenWhereUniqueInput
  }


  /**
   * RevokedRefreshToken findFirst
   */
  export type RevokedRefreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevokedRefreshToken
     */
    select?: RevokedRefreshTokenSelect<ExtArgs> | null
    /**
     * Filter, which RevokedRefreshToken to fetch.
     */
    where?: RevokedRefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RevokedRefreshTokens to fetch.
     */
    orderBy?: RevokedRefreshTokenOrderByWithRelationInput | RevokedRefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RevokedRefreshTokens.
     */
    cursor?: RevokedRefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RevokedRefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RevokedRefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RevokedRefreshTokens.
     */
    distinct?: RevokedRefreshTokenScalarFieldEnum | RevokedRefreshTokenScalarFieldEnum[]
  }


  /**
   * RevokedRefreshToken findFirstOrThrow
   */
  export type RevokedRefreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevokedRefreshToken
     */
    select?: RevokedRefreshTokenSelect<ExtArgs> | null
    /**
     * Filter, which RevokedRefreshToken to fetch.
     */
    where?: RevokedRefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RevokedRefreshTokens to fetch.
     */
    orderBy?: RevokedRefreshTokenOrderByWithRelationInput | RevokedRefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RevokedRefreshTokens.
     */
    cursor?: RevokedRefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RevokedRefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RevokedRefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RevokedRefreshTokens.
     */
    distinct?: RevokedRefreshTokenScalarFieldEnum | RevokedRefreshTokenScalarFieldEnum[]
  }


  /**
   * RevokedRefreshToken findMany
   */
  export type RevokedRefreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevokedRefreshToken
     */
    select?: RevokedRefreshTokenSelect<ExtArgs> | null
    /**
     * Filter, which RevokedRefreshTokens to fetch.
     */
    where?: RevokedRefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RevokedRefreshTokens to fetch.
     */
    orderBy?: RevokedRefreshTokenOrderByWithRelationInput | RevokedRefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RevokedRefreshTokens.
     */
    cursor?: RevokedRefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RevokedRefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RevokedRefreshTokens.
     */
    skip?: number
    distinct?: RevokedRefreshTokenScalarFieldEnum | RevokedRefreshTokenScalarFieldEnum[]
  }


  /**
   * RevokedRefreshToken create
   */
  export type RevokedRefreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevokedRefreshToken
     */
    select?: RevokedRefreshTokenSelect<ExtArgs> | null
    /**
     * The data needed to create a RevokedRefreshToken.
     */
    data: XOR<RevokedRefreshTokenCreateInput, RevokedRefreshTokenUncheckedCreateInput>
  }


  /**
   * RevokedRefreshToken createMany
   */
  export type RevokedRefreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RevokedRefreshTokens.
     */
    data: RevokedRefreshTokenCreateManyInput | RevokedRefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * RevokedRefreshToken update
   */
  export type RevokedRefreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevokedRefreshToken
     */
    select?: RevokedRefreshTokenSelect<ExtArgs> | null
    /**
     * The data needed to update a RevokedRefreshToken.
     */
    data: XOR<RevokedRefreshTokenUpdateInput, RevokedRefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which RevokedRefreshToken to update.
     */
    where: RevokedRefreshTokenWhereUniqueInput
  }


  /**
   * RevokedRefreshToken updateMany
   */
  export type RevokedRefreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RevokedRefreshTokens.
     */
    data: XOR<RevokedRefreshTokenUpdateManyMutationInput, RevokedRefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RevokedRefreshTokens to update
     */
    where?: RevokedRefreshTokenWhereInput
  }


  /**
   * RevokedRefreshToken upsert
   */
  export type RevokedRefreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevokedRefreshToken
     */
    select?: RevokedRefreshTokenSelect<ExtArgs> | null
    /**
     * The filter to search for the RevokedRefreshToken to update in case it exists.
     */
    where: RevokedRefreshTokenWhereUniqueInput
    /**
     * In case the RevokedRefreshToken found by the `where` argument doesn't exist, create a new RevokedRefreshToken with this data.
     */
    create: XOR<RevokedRefreshTokenCreateInput, RevokedRefreshTokenUncheckedCreateInput>
    /**
     * In case the RevokedRefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RevokedRefreshTokenUpdateInput, RevokedRefreshTokenUncheckedUpdateInput>
  }


  /**
   * RevokedRefreshToken delete
   */
  export type RevokedRefreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevokedRefreshToken
     */
    select?: RevokedRefreshTokenSelect<ExtArgs> | null
    /**
     * Filter which RevokedRefreshToken to delete.
     */
    where: RevokedRefreshTokenWhereUniqueInput
  }


  /**
   * RevokedRefreshToken deleteMany
   */
  export type RevokedRefreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RevokedRefreshTokens to delete
     */
    where?: RevokedRefreshTokenWhereInput
  }


  /**
   * RevokedRefreshToken without action
   */
  export type RevokedRefreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevokedRefreshToken
     */
    select?: RevokedRefreshTokenSelect<ExtArgs> | null
  }



  /**
   * Model Schema
   */

  export type AggregateSchema = {
    _count: SchemaCountAggregateOutputType | null
    _min: SchemaMinAggregateOutputType | null
    _max: SchemaMaxAggregateOutputType | null
  }

  export type SchemaMinAggregateOutputType = {
    id: string | null
    name: string | null
    tracked: boolean | null
    baselineVersionOfSchema: string | null
    isNewestProductionVersion: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SchemaMaxAggregateOutputType = {
    id: string | null
    name: string | null
    tracked: boolean | null
    baselineVersionOfSchema: string | null
    isNewestProductionVersion: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SchemaCountAggregateOutputType = {
    id: number
    name: number
    tracked: number
    baselineVersionOfSchema: number
    isNewestProductionVersion: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SchemaMinAggregateInputType = {
    id?: true
    name?: true
    tracked?: true
    baselineVersionOfSchema?: true
    isNewestProductionVersion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SchemaMaxAggregateInputType = {
    id?: true
    name?: true
    tracked?: true
    baselineVersionOfSchema?: true
    isNewestProductionVersion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SchemaCountAggregateInputType = {
    id?: true
    name?: true
    tracked?: true
    baselineVersionOfSchema?: true
    isNewestProductionVersion?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SchemaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schema to aggregate.
     */
    where?: SchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schemata to fetch.
     */
    orderBy?: SchemaOrderByWithRelationInput | SchemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schemata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schemata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schemata
    **/
    _count?: true | SchemaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchemaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchemaMaxAggregateInputType
  }

  export type GetSchemaAggregateType<T extends SchemaAggregateArgs> = {
        [P in keyof T & keyof AggregateSchema]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchema[P]>
      : GetScalarType<T[P], AggregateSchema[P]>
  }




  export type SchemaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchemaWhereInput
    orderBy?: SchemaOrderByWithAggregationInput | SchemaOrderByWithAggregationInput[]
    by: SchemaScalarFieldEnum[] | SchemaScalarFieldEnum
    having?: SchemaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchemaCountAggregateInputType | true
    _min?: SchemaMinAggregateInputType
    _max?: SchemaMaxAggregateInputType
  }

  export type SchemaGroupByOutputType = {
    id: string
    name: string
    tracked: boolean | null
    baselineVersionOfSchema: string | null
    isNewestProductionVersion: boolean | null
    createdAt: Date
    updatedAt: Date
    _count: SchemaCountAggregateOutputType | null
    _min: SchemaMinAggregateOutputType | null
    _max: SchemaMaxAggregateOutputType | null
  }

  type GetSchemaGroupByPayload<T extends SchemaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchemaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchemaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchemaGroupByOutputType[P]>
            : GetScalarType<T[P], SchemaGroupByOutputType[P]>
        }
      >
    >


  export type SchemaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tracked?: boolean
    baselineVersionOfSchema?: boolean
    isNewestProductionVersion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tables?: boolean | Schema$tablesArgs<ExtArgs>
    _count?: boolean | SchemaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schema"]>

  export type SchemaSelectScalar = {
    id?: boolean
    name?: boolean
    tracked?: boolean
    baselineVersionOfSchema?: boolean
    isNewestProductionVersion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SchemaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tables?: boolean | Schema$tablesArgs<ExtArgs>
    _count?: boolean | SchemaCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $SchemaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Schema"
    objects: {
      tables: Prisma.$TablePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      tracked: boolean | null
      baselineVersionOfSchema: string | null
      isNewestProductionVersion: boolean | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["schema"]>
    composites: {}
  }


  type SchemaGetPayload<S extends boolean | null | undefined | SchemaDefaultArgs> = $Result.GetResult<Prisma.$SchemaPayload, S>

  type SchemaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SchemaFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: SchemaCountAggregateInputType | true
    }

  export interface SchemaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Schema'], meta: { name: 'Schema' } }
    /**
     * Find zero or one Schema that matches the filter.
     * @param {SchemaFindUniqueArgs} args - Arguments to find a Schema
     * @example
     * // Get one Schema
     * const schema = await prisma.schema.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SchemaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SchemaFindUniqueArgs<ExtArgs>>
    ): Prisma__SchemaClient<$Result.GetResult<Prisma.$SchemaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Schema that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SchemaFindUniqueOrThrowArgs} args - Arguments to find a Schema
     * @example
     * // Get one Schema
     * const schema = await prisma.schema.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SchemaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SchemaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SchemaClient<$Result.GetResult<Prisma.$SchemaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Schema that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchemaFindFirstArgs} args - Arguments to find a Schema
     * @example
     * // Get one Schema
     * const schema = await prisma.schema.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SchemaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SchemaFindFirstArgs<ExtArgs>>
    ): Prisma__SchemaClient<$Result.GetResult<Prisma.$SchemaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Schema that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchemaFindFirstOrThrowArgs} args - Arguments to find a Schema
     * @example
     * // Get one Schema
     * const schema = await prisma.schema.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SchemaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SchemaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SchemaClient<$Result.GetResult<Prisma.$SchemaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Schemata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchemaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schemata
     * const schemata = await prisma.schema.findMany()
     * 
     * // Get first 10 Schemata
     * const schemata = await prisma.schema.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const schemaWithIdOnly = await prisma.schema.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SchemaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SchemaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchemaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Schema.
     * @param {SchemaCreateArgs} args - Arguments to create a Schema.
     * @example
     * // Create one Schema
     * const Schema = await prisma.schema.create({
     *   data: {
     *     // ... data to create a Schema
     *   }
     * })
     * 
    **/
    create<T extends SchemaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SchemaCreateArgs<ExtArgs>>
    ): Prisma__SchemaClient<$Result.GetResult<Prisma.$SchemaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Schemata.
     *     @param {SchemaCreateManyArgs} args - Arguments to create many Schemata.
     *     @example
     *     // Create many Schemata
     *     const schema = await prisma.schema.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SchemaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SchemaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Schema.
     * @param {SchemaDeleteArgs} args - Arguments to delete one Schema.
     * @example
     * // Delete one Schema
     * const Schema = await prisma.schema.delete({
     *   where: {
     *     // ... filter to delete one Schema
     *   }
     * })
     * 
    **/
    delete<T extends SchemaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SchemaDeleteArgs<ExtArgs>>
    ): Prisma__SchemaClient<$Result.GetResult<Prisma.$SchemaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Schema.
     * @param {SchemaUpdateArgs} args - Arguments to update one Schema.
     * @example
     * // Update one Schema
     * const schema = await prisma.schema.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SchemaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SchemaUpdateArgs<ExtArgs>>
    ): Prisma__SchemaClient<$Result.GetResult<Prisma.$SchemaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Schemata.
     * @param {SchemaDeleteManyArgs} args - Arguments to filter Schemata to delete.
     * @example
     * // Delete a few Schemata
     * const { count } = await prisma.schema.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SchemaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SchemaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schemata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchemaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schemata
     * const schema = await prisma.schema.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SchemaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SchemaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Schema.
     * @param {SchemaUpsertArgs} args - Arguments to update or create a Schema.
     * @example
     * // Update or create a Schema
     * const schema = await prisma.schema.upsert({
     *   create: {
     *     // ... data to create a Schema
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schema we want to update
     *   }
     * })
    **/
    upsert<T extends SchemaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SchemaUpsertArgs<ExtArgs>>
    ): Prisma__SchemaClient<$Result.GetResult<Prisma.$SchemaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Schemata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchemaCountArgs} args - Arguments to filter Schemata to count.
     * @example
     * // Count the number of Schemata
     * const count = await prisma.schema.count({
     *   where: {
     *     // ... the filter for the Schemata we want to count
     *   }
     * })
    **/
    count<T extends SchemaCountArgs>(
      args?: Subset<T, SchemaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchemaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Schema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchemaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SchemaAggregateArgs>(args: Subset<T, SchemaAggregateArgs>): Prisma.PrismaPromise<GetSchemaAggregateType<T>>

    /**
     * Group by Schema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchemaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SchemaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SchemaGroupByArgs['orderBy'] }
        : { orderBy?: SchemaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SchemaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchemaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Schema model
   */
  readonly fields: SchemaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Schema.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SchemaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    tables<T extends Schema$tablesArgs<ExtArgs> = {}>(args?: Subset<T, Schema$tablesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Schema model
   */ 
  interface SchemaFieldRefs {
    readonly id: FieldRef<"Schema", 'String'>
    readonly name: FieldRef<"Schema", 'String'>
    readonly tracked: FieldRef<"Schema", 'Boolean'>
    readonly baselineVersionOfSchema: FieldRef<"Schema", 'String'>
    readonly isNewestProductionVersion: FieldRef<"Schema", 'Boolean'>
    readonly createdAt: FieldRef<"Schema", 'DateTime'>
    readonly updatedAt: FieldRef<"Schema", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Schema findUnique
   */
  export type SchemaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schema
     */
    select?: SchemaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SchemaInclude<ExtArgs> | null
    /**
     * Filter, which Schema to fetch.
     */
    where: SchemaWhereUniqueInput
  }


  /**
   * Schema findUniqueOrThrow
   */
  export type SchemaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schema
     */
    select?: SchemaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SchemaInclude<ExtArgs> | null
    /**
     * Filter, which Schema to fetch.
     */
    where: SchemaWhereUniqueInput
  }


  /**
   * Schema findFirst
   */
  export type SchemaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schema
     */
    select?: SchemaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SchemaInclude<ExtArgs> | null
    /**
     * Filter, which Schema to fetch.
     */
    where?: SchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schemata to fetch.
     */
    orderBy?: SchemaOrderByWithRelationInput | SchemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schemata.
     */
    cursor?: SchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schemata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schemata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schemata.
     */
    distinct?: SchemaScalarFieldEnum | SchemaScalarFieldEnum[]
  }


  /**
   * Schema findFirstOrThrow
   */
  export type SchemaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schema
     */
    select?: SchemaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SchemaInclude<ExtArgs> | null
    /**
     * Filter, which Schema to fetch.
     */
    where?: SchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schemata to fetch.
     */
    orderBy?: SchemaOrderByWithRelationInput | SchemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schemata.
     */
    cursor?: SchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schemata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schemata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schemata.
     */
    distinct?: SchemaScalarFieldEnum | SchemaScalarFieldEnum[]
  }


  /**
   * Schema findMany
   */
  export type SchemaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schema
     */
    select?: SchemaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SchemaInclude<ExtArgs> | null
    /**
     * Filter, which Schemata to fetch.
     */
    where?: SchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schemata to fetch.
     */
    orderBy?: SchemaOrderByWithRelationInput | SchemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schemata.
     */
    cursor?: SchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schemata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schemata.
     */
    skip?: number
    distinct?: SchemaScalarFieldEnum | SchemaScalarFieldEnum[]
  }


  /**
   * Schema create
   */
  export type SchemaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schema
     */
    select?: SchemaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SchemaInclude<ExtArgs> | null
    /**
     * The data needed to create a Schema.
     */
    data: XOR<SchemaCreateInput, SchemaUncheckedCreateInput>
  }


  /**
   * Schema createMany
   */
  export type SchemaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schemata.
     */
    data: SchemaCreateManyInput | SchemaCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Schema update
   */
  export type SchemaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schema
     */
    select?: SchemaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SchemaInclude<ExtArgs> | null
    /**
     * The data needed to update a Schema.
     */
    data: XOR<SchemaUpdateInput, SchemaUncheckedUpdateInput>
    /**
     * Choose, which Schema to update.
     */
    where: SchemaWhereUniqueInput
  }


  /**
   * Schema updateMany
   */
  export type SchemaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schemata.
     */
    data: XOR<SchemaUpdateManyMutationInput, SchemaUncheckedUpdateManyInput>
    /**
     * Filter which Schemata to update
     */
    where?: SchemaWhereInput
  }


  /**
   * Schema upsert
   */
  export type SchemaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schema
     */
    select?: SchemaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SchemaInclude<ExtArgs> | null
    /**
     * The filter to search for the Schema to update in case it exists.
     */
    where: SchemaWhereUniqueInput
    /**
     * In case the Schema found by the `where` argument doesn't exist, create a new Schema with this data.
     */
    create: XOR<SchemaCreateInput, SchemaUncheckedCreateInput>
    /**
     * In case the Schema was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SchemaUpdateInput, SchemaUncheckedUpdateInput>
  }


  /**
   * Schema delete
   */
  export type SchemaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schema
     */
    select?: SchemaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SchemaInclude<ExtArgs> | null
    /**
     * Filter which Schema to delete.
     */
    where: SchemaWhereUniqueInput
  }


  /**
   * Schema deleteMany
   */
  export type SchemaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schemata to delete
     */
    where?: SchemaWhereInput
  }


  /**
   * Schema.tables
   */
  export type Schema$tablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TableInclude<ExtArgs> | null
    where?: TableWhereInput
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    cursor?: TableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[]
  }


  /**
   * Schema without action
   */
  export type SchemaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schema
     */
    select?: SchemaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SchemaInclude<ExtArgs> | null
  }



  /**
   * Model Table
   */

  export type AggregateTable = {
    _count: TableCountAggregateOutputType | null
    _min: TableMinAggregateOutputType | null
    _max: TableMaxAggregateOutputType | null
  }

  export type TableMinAggregateOutputType = {
    id: string | null
    schemaId: string | null
    name: string | null
    modelName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TableMaxAggregateOutputType = {
    id: string | null
    schemaId: string | null
    name: string | null
    modelName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TableCountAggregateOutputType = {
    id: number
    schemaId: number
    name: number
    modelName: number
    relations: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TableMinAggregateInputType = {
    id?: true
    schemaId?: true
    name?: true
    modelName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TableMaxAggregateInputType = {
    id?: true
    schemaId?: true
    name?: true
    modelName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TableCountAggregateInputType = {
    id?: true
    schemaId?: true
    name?: true
    modelName?: true
    relations?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Table to aggregate.
     */
    where?: TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tables to fetch.
     */
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tables
    **/
    _count?: true | TableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TableMaxAggregateInputType
  }

  export type GetTableAggregateType<T extends TableAggregateArgs> = {
        [P in keyof T & keyof AggregateTable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTable[P]>
      : GetScalarType<T[P], AggregateTable[P]>
  }




  export type TableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TableWhereInput
    orderBy?: TableOrderByWithAggregationInput | TableOrderByWithAggregationInput[]
    by: TableScalarFieldEnum[] | TableScalarFieldEnum
    having?: TableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TableCountAggregateInputType | true
    _min?: TableMinAggregateInputType
    _max?: TableMaxAggregateInputType
  }

  export type TableGroupByOutputType = {
    id: string
    schemaId: string | null
    name: string
    modelName: string
    relations: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: TableCountAggregateOutputType | null
    _min: TableMinAggregateOutputType | null
    _max: TableMaxAggregateOutputType | null
  }

  type GetTableGroupByPayload<T extends TableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TableGroupByOutputType[P]>
            : GetScalarType<T[P], TableGroupByOutputType[P]>
        }
      >
    >


  export type TableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schemaId?: boolean
    name?: boolean
    modelName?: boolean
    relations?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fields?: boolean | Table$fieldsArgs<ExtArgs>
    fieldAnnotations?: boolean | Table$fieldAnnotationsArgs<ExtArgs>
    schema?: boolean | Table$schemaArgs<ExtArgs>
    _count?: boolean | TableCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["table"]>

  export type TableSelectScalar = {
    id?: boolean
    schemaId?: boolean
    name?: boolean
    modelName?: boolean
    relations?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fields?: boolean | Table$fieldsArgs<ExtArgs>
    fieldAnnotations?: boolean | Table$fieldAnnotationsArgs<ExtArgs>
    schema?: boolean | Table$schemaArgs<ExtArgs>
    _count?: boolean | TableCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Table"
    objects: {
      fields: Prisma.$FieldPayload<ExtArgs>[]
      fieldAnnotations: Prisma.$FieldAnnotationPayload<ExtArgs>[]
      schema: Prisma.$SchemaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      schemaId: string | null
      name: string
      modelName: string
      relations: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["table"]>
    composites: {}
  }


  type TableGetPayload<S extends boolean | null | undefined | TableDefaultArgs> = $Result.GetResult<Prisma.$TablePayload, S>

  type TableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TableFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: TableCountAggregateInputType | true
    }

  export interface TableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Table'], meta: { name: 'Table' } }
    /**
     * Find zero or one Table that matches the filter.
     * @param {TableFindUniqueArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TableFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TableFindUniqueArgs<ExtArgs>>
    ): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Table that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TableFindUniqueOrThrowArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TableFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TableFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Table that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableFindFirstArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TableFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TableFindFirstArgs<ExtArgs>>
    ): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Table that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableFindFirstOrThrowArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TableFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TableFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tables
     * const tables = await prisma.table.findMany()
     * 
     * // Get first 10 Tables
     * const tables = await prisma.table.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tableWithIdOnly = await prisma.table.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TableFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TableFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Table.
     * @param {TableCreateArgs} args - Arguments to create a Table.
     * @example
     * // Create one Table
     * const Table = await prisma.table.create({
     *   data: {
     *     // ... data to create a Table
     *   }
     * })
     * 
    **/
    create<T extends TableCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TableCreateArgs<ExtArgs>>
    ): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Tables.
     *     @param {TableCreateManyArgs} args - Arguments to create many Tables.
     *     @example
     *     // Create many Tables
     *     const table = await prisma.table.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TableCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TableCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Table.
     * @param {TableDeleteArgs} args - Arguments to delete one Table.
     * @example
     * // Delete one Table
     * const Table = await prisma.table.delete({
     *   where: {
     *     // ... filter to delete one Table
     *   }
     * })
     * 
    **/
    delete<T extends TableDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TableDeleteArgs<ExtArgs>>
    ): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Table.
     * @param {TableUpdateArgs} args - Arguments to update one Table.
     * @example
     * // Update one Table
     * const table = await prisma.table.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TableUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TableUpdateArgs<ExtArgs>>
    ): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tables.
     * @param {TableDeleteManyArgs} args - Arguments to filter Tables to delete.
     * @example
     * // Delete a few Tables
     * const { count } = await prisma.table.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TableDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TableDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tables
     * const table = await prisma.table.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TableUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TableUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Table.
     * @param {TableUpsertArgs} args - Arguments to update or create a Table.
     * @example
     * // Update or create a Table
     * const table = await prisma.table.upsert({
     *   create: {
     *     // ... data to create a Table
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Table we want to update
     *   }
     * })
    **/
    upsert<T extends TableUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TableUpsertArgs<ExtArgs>>
    ): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableCountArgs} args - Arguments to filter Tables to count.
     * @example
     * // Count the number of Tables
     * const count = await prisma.table.count({
     *   where: {
     *     // ... the filter for the Tables we want to count
     *   }
     * })
    **/
    count<T extends TableCountArgs>(
      args?: Subset<T, TableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TableAggregateArgs>(args: Subset<T, TableAggregateArgs>): Prisma.PrismaPromise<GetTableAggregateType<T>>

    /**
     * Group by Table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TableGroupByArgs['orderBy'] }
        : { orderBy?: TableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Table model
   */
  readonly fields: TableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Table.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    fields<T extends Table$fieldsArgs<ExtArgs> = {}>(args?: Subset<T, Table$fieldsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, 'findMany'> | Null>;

    fieldAnnotations<T extends Table$fieldAnnotationsArgs<ExtArgs> = {}>(args?: Subset<T, Table$fieldAnnotationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FieldAnnotationPayload<ExtArgs>, T, 'findMany'> | Null>;

    schema<T extends Table$schemaArgs<ExtArgs> = {}>(args?: Subset<T, Table$schemaArgs<ExtArgs>>): Prisma__SchemaClient<$Result.GetResult<Prisma.$SchemaPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Table model
   */ 
  interface TableFieldRefs {
    readonly id: FieldRef<"Table", 'String'>
    readonly schemaId: FieldRef<"Table", 'String'>
    readonly name: FieldRef<"Table", 'String'>
    readonly modelName: FieldRef<"Table", 'String'>
    readonly relations: FieldRef<"Table", 'Json'>
    readonly createdAt: FieldRef<"Table", 'DateTime'>
    readonly updatedAt: FieldRef<"Table", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Table findUnique
   */
  export type TableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Table to fetch.
     */
    where: TableWhereUniqueInput
  }


  /**
   * Table findUniqueOrThrow
   */
  export type TableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Table to fetch.
     */
    where: TableWhereUniqueInput
  }


  /**
   * Table findFirst
   */
  export type TableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Table to fetch.
     */
    where?: TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tables to fetch.
     */
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tables.
     */
    cursor?: TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tables.
     */
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[]
  }


  /**
   * Table findFirstOrThrow
   */
  export type TableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Table to fetch.
     */
    where?: TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tables to fetch.
     */
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tables.
     */
    cursor?: TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tables.
     */
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[]
  }


  /**
   * Table findMany
   */
  export type TableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Tables to fetch.
     */
    where?: TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tables to fetch.
     */
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tables.
     */
    cursor?: TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tables.
     */
    skip?: number
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[]
  }


  /**
   * Table create
   */
  export type TableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * The data needed to create a Table.
     */
    data: XOR<TableCreateInput, TableUncheckedCreateInput>
  }


  /**
   * Table createMany
   */
  export type TableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tables.
     */
    data: TableCreateManyInput | TableCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Table update
   */
  export type TableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * The data needed to update a Table.
     */
    data: XOR<TableUpdateInput, TableUncheckedUpdateInput>
    /**
     * Choose, which Table to update.
     */
    where: TableWhereUniqueInput
  }


  /**
   * Table updateMany
   */
  export type TableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tables.
     */
    data: XOR<TableUpdateManyMutationInput, TableUncheckedUpdateManyInput>
    /**
     * Filter which Tables to update
     */
    where?: TableWhereInput
  }


  /**
   * Table upsert
   */
  export type TableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * The filter to search for the Table to update in case it exists.
     */
    where: TableWhereUniqueInput
    /**
     * In case the Table found by the `where` argument doesn't exist, create a new Table with this data.
     */
    create: XOR<TableCreateInput, TableUncheckedCreateInput>
    /**
     * In case the Table was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TableUpdateInput, TableUncheckedUpdateInput>
  }


  /**
   * Table delete
   */
  export type TableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter which Table to delete.
     */
    where: TableWhereUniqueInput
  }


  /**
   * Table deleteMany
   */
  export type TableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tables to delete
     */
    where?: TableWhereInput
  }


  /**
   * Table.fields
   */
  export type Table$fieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FieldInclude<ExtArgs> | null
    where?: FieldWhereInput
    orderBy?: FieldOrderByWithRelationInput | FieldOrderByWithRelationInput[]
    cursor?: FieldWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FieldScalarFieldEnum | FieldScalarFieldEnum[]
  }


  /**
   * Table.fieldAnnotations
   */
  export type Table$fieldAnnotationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldAnnotation
     */
    select?: FieldAnnotationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FieldAnnotationInclude<ExtArgs> | null
    where?: FieldAnnotationWhereInput
    orderBy?: FieldAnnotationOrderByWithRelationInput | FieldAnnotationOrderByWithRelationInput[]
    cursor?: FieldAnnotationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FieldAnnotationScalarFieldEnum | FieldAnnotationScalarFieldEnum[]
  }


  /**
   * Table.schema
   */
  export type Table$schemaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schema
     */
    select?: SchemaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SchemaInclude<ExtArgs> | null
    where?: SchemaWhereInput
  }


  /**
   * Table without action
   */
  export type TableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TableInclude<ExtArgs> | null
  }



  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    hash: string | null
    salt: string | null
    magicLinkToken: string | null
    email: string | null
    banned: boolean | null
    username: string | null
    verified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    hash: string | null
    salt: string | null
    magicLinkToken: string | null
    email: string | null
    banned: boolean | null
    username: string | null
    verified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    hash: number
    salt: number
    magicLinkToken: number
    email: number
    banned: number
    username: number
    verified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    hash?: true
    salt?: true
    magicLinkToken?: true
    email?: true
    banned?: true
    username?: true
    verified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    hash?: true
    salt?: true
    magicLinkToken?: true
    email?: true
    banned?: true
    username?: true
    verified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    hash?: true
    salt?: true
    magicLinkToken?: true
    email?: true
    banned?: true
    username?: true
    verified?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    hash: string
    salt: string
    magicLinkToken: string | null
    email: string
    banned: boolean | null
    username: string
    verified: boolean | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hash?: boolean
    salt?: boolean
    magicLinkToken?: boolean
    email?: boolean
    banned?: boolean
    username?: boolean
    verified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    hash?: boolean
    salt?: boolean
    magicLinkToken?: boolean
    email?: boolean
    banned?: boolean
    username?: boolean
    verified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      /**
       * @TypeGraphQL.omit(output: true, input: true)
       */
      hash: string
      /**
       * @TypeGraphQL.omit(output: true, input: true)
       */
      salt: string
      /**
       * @TypeGraphQL.omit(output: true, input: true)
       */
      magicLinkToken: string | null
      email: string
      banned: boolean | null
      username: string
      verified: boolean | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly hash: FieldRef<"User", 'String'>
    readonly salt: FieldRef<"User", 'String'>
    readonly magicLinkToken: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly banned: FieldRef<"User", 'Boolean'>
    readonly username: FieldRef<"User", 'String'>
    readonly verified: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdministratorScalarFieldEnum: {
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

  export type AdministratorScalarFieldEnum = (typeof AdministratorScalarFieldEnum)[keyof typeof AdministratorScalarFieldEnum]


  export const FieldScalarFieldEnum: {
    id: 'id',
    tableId: 'tableId',
    name: 'name',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FieldScalarFieldEnum = (typeof FieldScalarFieldEnum)[keyof typeof FieldScalarFieldEnum]


  export const FieldAnnotationScalarFieldEnum: {
    id: 'id',
    tableId: 'tableId',
    modelName: 'modelName',
    fieldId: 'fieldId',
    fieldName: 'fieldName',
    annotation: 'annotation',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FieldAnnotationScalarFieldEnum = (typeof FieldAnnotationScalarFieldEnum)[keyof typeof FieldAnnotationScalarFieldEnum]


  export const RevokedRefreshTokenScalarFieldEnum: {
    id: 'id',
    value: 'value',
    actualExpiration: 'actualExpiration'
  };

  export type RevokedRefreshTokenScalarFieldEnum = (typeof RevokedRefreshTokenScalarFieldEnum)[keyof typeof RevokedRefreshTokenScalarFieldEnum]


  export const SchemaScalarFieldEnum: {
    id: 'id',
    name: 'name',
    tracked: 'tracked',
    baselineVersionOfSchema: 'baselineVersionOfSchema',
    isNewestProductionVersion: 'isNewestProductionVersion',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SchemaScalarFieldEnum = (typeof SchemaScalarFieldEnum)[keyof typeof SchemaScalarFieldEnum]


  export const TableScalarFieldEnum: {
    id: 'id',
    schemaId: 'schemaId',
    name: 'name',
    modelName: 'modelName',
    relations: 'relations',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TableScalarFieldEnum = (typeof TableScalarFieldEnum)[keyof typeof TableScalarFieldEnum]


  export const UserScalarFieldEnum: {
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

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type AdministratorWhereInput = {
    AND?: AdministratorWhereInput | AdministratorWhereInput[]
    OR?: AdministratorWhereInput[]
    NOT?: AdministratorWhereInput | AdministratorWhereInput[]
    id?: UuidFilter<"Administrator"> | string
    hash?: StringFilter<"Administrator"> | string
    salt?: StringFilter<"Administrator"> | string
    magicLinkToken?: StringNullableFilter<"Administrator"> | string | null
    email?: StringFilter<"Administrator"> | string
    banned?: BoolNullableFilter<"Administrator"> | boolean | null
    username?: StringFilter<"Administrator"> | string
    verified?: BoolNullableFilter<"Administrator"> | boolean | null
    createdAt?: DateTimeFilter<"Administrator"> | Date | string
    updatedAt?: DateTimeFilter<"Administrator"> | Date | string
  }

  export type AdministratorOrderByWithRelationInput = {
    id?: SortOrder
    hash?: SortOrder
    salt?: SortOrder
    magicLinkToken?: SortOrderInput | SortOrder
    email?: SortOrder
    banned?: SortOrderInput | SortOrder
    username?: SortOrder
    verified?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdministratorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: AdministratorWhereInput | AdministratorWhereInput[]
    OR?: AdministratorWhereInput[]
    NOT?: AdministratorWhereInput | AdministratorWhereInput[]
    hash?: StringFilter<"Administrator"> | string
    salt?: StringFilter<"Administrator"> | string
    magicLinkToken?: StringNullableFilter<"Administrator"> | string | null
    banned?: BoolNullableFilter<"Administrator"> | boolean | null
    verified?: BoolNullableFilter<"Administrator"> | boolean | null
    createdAt?: DateTimeFilter<"Administrator"> | Date | string
    updatedAt?: DateTimeFilter<"Administrator"> | Date | string
  }, "id" | "email" | "username">

  export type AdministratorOrderByWithAggregationInput = {
    id?: SortOrder
    hash?: SortOrder
    salt?: SortOrder
    magicLinkToken?: SortOrderInput | SortOrder
    email?: SortOrder
    banned?: SortOrderInput | SortOrder
    username?: SortOrder
    verified?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdministratorCountOrderByAggregateInput
    _max?: AdministratorMaxOrderByAggregateInput
    _min?: AdministratorMinOrderByAggregateInput
  }

  export type AdministratorScalarWhereWithAggregatesInput = {
    AND?: AdministratorScalarWhereWithAggregatesInput | AdministratorScalarWhereWithAggregatesInput[]
    OR?: AdministratorScalarWhereWithAggregatesInput[]
    NOT?: AdministratorScalarWhereWithAggregatesInput | AdministratorScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Administrator"> | string
    hash?: StringWithAggregatesFilter<"Administrator"> | string
    salt?: StringWithAggregatesFilter<"Administrator"> | string
    magicLinkToken?: StringNullableWithAggregatesFilter<"Administrator"> | string | null
    email?: StringWithAggregatesFilter<"Administrator"> | string
    banned?: BoolNullableWithAggregatesFilter<"Administrator"> | boolean | null
    username?: StringWithAggregatesFilter<"Administrator"> | string
    verified?: BoolNullableWithAggregatesFilter<"Administrator"> | boolean | null
    createdAt?: DateTimeWithAggregatesFilter<"Administrator"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Administrator"> | Date | string
  }

  export type FieldWhereInput = {
    AND?: FieldWhereInput | FieldWhereInput[]
    OR?: FieldWhereInput[]
    NOT?: FieldWhereInput | FieldWhereInput[]
    id?: UuidFilter<"Field"> | string
    tableId?: UuidNullableFilter<"Field"> | string | null
    name?: StringFilter<"Field"> | string
    type?: StringFilter<"Field"> | string
    createdAt?: DateTimeFilter<"Field"> | Date | string
    updatedAt?: DateTimeFilter<"Field"> | Date | string
    table?: XOR<TableNullableRelationFilter, TableWhereInput> | null
    fieldAnnotations?: FieldAnnotationListRelationFilter
  }

  export type FieldOrderByWithRelationInput = {
    id?: SortOrder
    tableId?: SortOrderInput | SortOrder
    name?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    table?: TableOrderByWithRelationInput
    fieldAnnotations?: FieldAnnotationOrderByRelationAggregateInput
  }

  export type FieldWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FieldWhereInput | FieldWhereInput[]
    OR?: FieldWhereInput[]
    NOT?: FieldWhereInput | FieldWhereInput[]
    tableId?: UuidNullableFilter<"Field"> | string | null
    name?: StringFilter<"Field"> | string
    type?: StringFilter<"Field"> | string
    createdAt?: DateTimeFilter<"Field"> | Date | string
    updatedAt?: DateTimeFilter<"Field"> | Date | string
    table?: XOR<TableNullableRelationFilter, TableWhereInput> | null
    fieldAnnotations?: FieldAnnotationListRelationFilter
  }, "id">

  export type FieldOrderByWithAggregationInput = {
    id?: SortOrder
    tableId?: SortOrderInput | SortOrder
    name?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FieldCountOrderByAggregateInput
    _max?: FieldMaxOrderByAggregateInput
    _min?: FieldMinOrderByAggregateInput
  }

  export type FieldScalarWhereWithAggregatesInput = {
    AND?: FieldScalarWhereWithAggregatesInput | FieldScalarWhereWithAggregatesInput[]
    OR?: FieldScalarWhereWithAggregatesInput[]
    NOT?: FieldScalarWhereWithAggregatesInput | FieldScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Field"> | string
    tableId?: UuidNullableWithAggregatesFilter<"Field"> | string | null
    name?: StringWithAggregatesFilter<"Field"> | string
    type?: StringWithAggregatesFilter<"Field"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Field"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Field"> | Date | string
  }

  export type FieldAnnotationWhereInput = {
    AND?: FieldAnnotationWhereInput | FieldAnnotationWhereInput[]
    OR?: FieldAnnotationWhereInput[]
    NOT?: FieldAnnotationWhereInput | FieldAnnotationWhereInput[]
    id?: UuidFilter<"FieldAnnotation"> | string
    tableId?: UuidNullableFilter<"FieldAnnotation"> | string | null
    modelName?: StringFilter<"FieldAnnotation"> | string
    fieldId?: UuidNullableFilter<"FieldAnnotation"> | string | null
    fieldName?: StringFilter<"FieldAnnotation"> | string
    annotation?: StringFilter<"FieldAnnotation"> | string
    createdAt?: DateTimeFilter<"FieldAnnotation"> | Date | string
    updatedAt?: DateTimeFilter<"FieldAnnotation"> | Date | string
    field?: XOR<FieldNullableRelationFilter, FieldWhereInput> | null
    table?: XOR<TableNullableRelationFilter, TableWhereInput> | null
  }

  export type FieldAnnotationOrderByWithRelationInput = {
    id?: SortOrder
    tableId?: SortOrderInput | SortOrder
    modelName?: SortOrder
    fieldId?: SortOrderInput | SortOrder
    fieldName?: SortOrder
    annotation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    field?: FieldOrderByWithRelationInput
    table?: TableOrderByWithRelationInput
  }

  export type FieldAnnotationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FieldAnnotationWhereInput | FieldAnnotationWhereInput[]
    OR?: FieldAnnotationWhereInput[]
    NOT?: FieldAnnotationWhereInput | FieldAnnotationWhereInput[]
    tableId?: UuidNullableFilter<"FieldAnnotation"> | string | null
    modelName?: StringFilter<"FieldAnnotation"> | string
    fieldId?: UuidNullableFilter<"FieldAnnotation"> | string | null
    fieldName?: StringFilter<"FieldAnnotation"> | string
    annotation?: StringFilter<"FieldAnnotation"> | string
    createdAt?: DateTimeFilter<"FieldAnnotation"> | Date | string
    updatedAt?: DateTimeFilter<"FieldAnnotation"> | Date | string
    field?: XOR<FieldNullableRelationFilter, FieldWhereInput> | null
    table?: XOR<TableNullableRelationFilter, TableWhereInput> | null
  }, "id">

  export type FieldAnnotationOrderByWithAggregationInput = {
    id?: SortOrder
    tableId?: SortOrderInput | SortOrder
    modelName?: SortOrder
    fieldId?: SortOrderInput | SortOrder
    fieldName?: SortOrder
    annotation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FieldAnnotationCountOrderByAggregateInput
    _max?: FieldAnnotationMaxOrderByAggregateInput
    _min?: FieldAnnotationMinOrderByAggregateInput
  }

  export type FieldAnnotationScalarWhereWithAggregatesInput = {
    AND?: FieldAnnotationScalarWhereWithAggregatesInput | FieldAnnotationScalarWhereWithAggregatesInput[]
    OR?: FieldAnnotationScalarWhereWithAggregatesInput[]
    NOT?: FieldAnnotationScalarWhereWithAggregatesInput | FieldAnnotationScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"FieldAnnotation"> | string
    tableId?: UuidNullableWithAggregatesFilter<"FieldAnnotation"> | string | null
    modelName?: StringWithAggregatesFilter<"FieldAnnotation"> | string
    fieldId?: UuidNullableWithAggregatesFilter<"FieldAnnotation"> | string | null
    fieldName?: StringWithAggregatesFilter<"FieldAnnotation"> | string
    annotation?: StringWithAggregatesFilter<"FieldAnnotation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FieldAnnotation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FieldAnnotation"> | Date | string
  }

  export type RevokedRefreshTokenWhereInput = {
    AND?: RevokedRefreshTokenWhereInput | RevokedRefreshTokenWhereInput[]
    OR?: RevokedRefreshTokenWhereInput[]
    NOT?: RevokedRefreshTokenWhereInput | RevokedRefreshTokenWhereInput[]
    id?: UuidFilter<"RevokedRefreshToken"> | string
    value?: StringFilter<"RevokedRefreshToken"> | string
    actualExpiration?: DateTimeFilter<"RevokedRefreshToken"> | Date | string
  }

  export type RevokedRefreshTokenOrderByWithRelationInput = {
    id?: SortOrder
    value?: SortOrder
    actualExpiration?: SortOrder
  }

  export type RevokedRefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    value?: string
    AND?: RevokedRefreshTokenWhereInput | RevokedRefreshTokenWhereInput[]
    OR?: RevokedRefreshTokenWhereInput[]
    NOT?: RevokedRefreshTokenWhereInput | RevokedRefreshTokenWhereInput[]
    actualExpiration?: DateTimeFilter<"RevokedRefreshToken"> | Date | string
  }, "id" | "value">

  export type RevokedRefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder
    value?: SortOrder
    actualExpiration?: SortOrder
    _count?: RevokedRefreshTokenCountOrderByAggregateInput
    _max?: RevokedRefreshTokenMaxOrderByAggregateInput
    _min?: RevokedRefreshTokenMinOrderByAggregateInput
  }

  export type RevokedRefreshTokenScalarWhereWithAggregatesInput = {
    AND?: RevokedRefreshTokenScalarWhereWithAggregatesInput | RevokedRefreshTokenScalarWhereWithAggregatesInput[]
    OR?: RevokedRefreshTokenScalarWhereWithAggregatesInput[]
    NOT?: RevokedRefreshTokenScalarWhereWithAggregatesInput | RevokedRefreshTokenScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"RevokedRefreshToken"> | string
    value?: StringWithAggregatesFilter<"RevokedRefreshToken"> | string
    actualExpiration?: DateTimeWithAggregatesFilter<"RevokedRefreshToken"> | Date | string
  }

  export type SchemaWhereInput = {
    AND?: SchemaWhereInput | SchemaWhereInput[]
    OR?: SchemaWhereInput[]
    NOT?: SchemaWhereInput | SchemaWhereInput[]
    id?: UuidFilter<"Schema"> | string
    name?: StringFilter<"Schema"> | string
    tracked?: BoolNullableFilter<"Schema"> | boolean | null
    baselineVersionOfSchema?: UuidNullableFilter<"Schema"> | string | null
    isNewestProductionVersion?: BoolNullableFilter<"Schema"> | boolean | null
    createdAt?: DateTimeFilter<"Schema"> | Date | string
    updatedAt?: DateTimeFilter<"Schema"> | Date | string
    tables?: TableListRelationFilter
  }

  export type SchemaOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    tracked?: SortOrderInput | SortOrder
    baselineVersionOfSchema?: SortOrderInput | SortOrder
    isNewestProductionVersion?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tables?: TableOrderByRelationAggregateInput
  }

  export type SchemaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: SchemaWhereInput | SchemaWhereInput[]
    OR?: SchemaWhereInput[]
    NOT?: SchemaWhereInput | SchemaWhereInput[]
    tracked?: BoolNullableFilter<"Schema"> | boolean | null
    baselineVersionOfSchema?: UuidNullableFilter<"Schema"> | string | null
    isNewestProductionVersion?: BoolNullableFilter<"Schema"> | boolean | null
    createdAt?: DateTimeFilter<"Schema"> | Date | string
    updatedAt?: DateTimeFilter<"Schema"> | Date | string
    tables?: TableListRelationFilter
  }, "id" | "name">

  export type SchemaOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    tracked?: SortOrderInput | SortOrder
    baselineVersionOfSchema?: SortOrderInput | SortOrder
    isNewestProductionVersion?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SchemaCountOrderByAggregateInput
    _max?: SchemaMaxOrderByAggregateInput
    _min?: SchemaMinOrderByAggregateInput
  }

  export type SchemaScalarWhereWithAggregatesInput = {
    AND?: SchemaScalarWhereWithAggregatesInput | SchemaScalarWhereWithAggregatesInput[]
    OR?: SchemaScalarWhereWithAggregatesInput[]
    NOT?: SchemaScalarWhereWithAggregatesInput | SchemaScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Schema"> | string
    name?: StringWithAggregatesFilter<"Schema"> | string
    tracked?: BoolNullableWithAggregatesFilter<"Schema"> | boolean | null
    baselineVersionOfSchema?: UuidNullableWithAggregatesFilter<"Schema"> | string | null
    isNewestProductionVersion?: BoolNullableWithAggregatesFilter<"Schema"> | boolean | null
    createdAt?: DateTimeWithAggregatesFilter<"Schema"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Schema"> | Date | string
  }

  export type TableWhereInput = {
    AND?: TableWhereInput | TableWhereInput[]
    OR?: TableWhereInput[]
    NOT?: TableWhereInput | TableWhereInput[]
    id?: UuidFilter<"Table"> | string
    schemaId?: UuidNullableFilter<"Table"> | string | null
    name?: StringFilter<"Table"> | string
    modelName?: StringFilter<"Table"> | string
    relations?: JsonNullableFilter<"Table">
    createdAt?: DateTimeFilter<"Table"> | Date | string
    updatedAt?: DateTimeFilter<"Table"> | Date | string
    fields?: FieldListRelationFilter
    fieldAnnotations?: FieldAnnotationListRelationFilter
    schema?: XOR<SchemaNullableRelationFilter, SchemaWhereInput> | null
  }

  export type TableOrderByWithRelationInput = {
    id?: SortOrder
    schemaId?: SortOrderInput | SortOrder
    name?: SortOrder
    modelName?: SortOrder
    relations?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fields?: FieldOrderByRelationAggregateInput
    fieldAnnotations?: FieldAnnotationOrderByRelationAggregateInput
    schema?: SchemaOrderByWithRelationInput
  }

  export type TableWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TableWhereInput | TableWhereInput[]
    OR?: TableWhereInput[]
    NOT?: TableWhereInput | TableWhereInput[]
    schemaId?: UuidNullableFilter<"Table"> | string | null
    name?: StringFilter<"Table"> | string
    modelName?: StringFilter<"Table"> | string
    relations?: JsonNullableFilter<"Table">
    createdAt?: DateTimeFilter<"Table"> | Date | string
    updatedAt?: DateTimeFilter<"Table"> | Date | string
    fields?: FieldListRelationFilter
    fieldAnnotations?: FieldAnnotationListRelationFilter
    schema?: XOR<SchemaNullableRelationFilter, SchemaWhereInput> | null
  }, "id">

  export type TableOrderByWithAggregationInput = {
    id?: SortOrder
    schemaId?: SortOrderInput | SortOrder
    name?: SortOrder
    modelName?: SortOrder
    relations?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TableCountOrderByAggregateInput
    _max?: TableMaxOrderByAggregateInput
    _min?: TableMinOrderByAggregateInput
  }

  export type TableScalarWhereWithAggregatesInput = {
    AND?: TableScalarWhereWithAggregatesInput | TableScalarWhereWithAggregatesInput[]
    OR?: TableScalarWhereWithAggregatesInput[]
    NOT?: TableScalarWhereWithAggregatesInput | TableScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Table"> | string
    schemaId?: UuidNullableWithAggregatesFilter<"Table"> | string | null
    name?: StringWithAggregatesFilter<"Table"> | string
    modelName?: StringWithAggregatesFilter<"Table"> | string
    relations?: JsonNullableWithAggregatesFilter<"Table">
    createdAt?: DateTimeWithAggregatesFilter<"Table"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Table"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    hash?: StringFilter<"User"> | string
    salt?: StringFilter<"User"> | string
    magicLinkToken?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    banned?: BoolNullableFilter<"User"> | boolean | null
    username?: StringFilter<"User"> | string
    verified?: BoolNullableFilter<"User"> | boolean | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    hash?: SortOrder
    salt?: SortOrder
    magicLinkToken?: SortOrderInput | SortOrder
    email?: SortOrder
    banned?: SortOrderInput | SortOrder
    username?: SortOrder
    verified?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    hash?: StringFilter<"User"> | string
    salt?: StringFilter<"User"> | string
    magicLinkToken?: StringNullableFilter<"User"> | string | null
    banned?: BoolNullableFilter<"User"> | boolean | null
    verified?: BoolNullableFilter<"User"> | boolean | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    hash?: SortOrder
    salt?: SortOrder
    magicLinkToken?: SortOrderInput | SortOrder
    email?: SortOrder
    banned?: SortOrderInput | SortOrder
    username?: SortOrder
    verified?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    hash?: StringWithAggregatesFilter<"User"> | string
    salt?: StringWithAggregatesFilter<"User"> | string
    magicLinkToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    banned?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    username?: StringWithAggregatesFilter<"User"> | string
    verified?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AdministratorCreateInput = {
    id?: string
    hash: string
    salt: string
    magicLinkToken?: string | null
    email: string
    banned?: boolean | null
    username: string
    verified?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdministratorUncheckedCreateInput = {
    id?: string
    hash: string
    salt: string
    magicLinkToken?: string | null
    email: string
    banned?: boolean | null
    username: string
    verified?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdministratorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    magicLinkToken?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    username?: StringFieldUpdateOperationsInput | string
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdministratorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    magicLinkToken?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    username?: StringFieldUpdateOperationsInput | string
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdministratorCreateManyInput = {
    id?: string
    hash: string
    salt: string
    magicLinkToken?: string | null
    email: string
    banned?: boolean | null
    username: string
    verified?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdministratorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    magicLinkToken?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    username?: StringFieldUpdateOperationsInput | string
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdministratorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    magicLinkToken?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    username?: StringFieldUpdateOperationsInput | string
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FieldCreateInput = {
    id?: string
    name: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    table?: TableCreateNestedOneWithoutFieldsInput
    fieldAnnotations?: FieldAnnotationCreateNestedManyWithoutFieldInput
  }

  export type FieldUncheckedCreateInput = {
    id?: string
    tableId?: string | null
    name: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fieldAnnotations?: FieldAnnotationUncheckedCreateNestedManyWithoutFieldInput
  }

  export type FieldUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    table?: TableUpdateOneWithoutFieldsNestedInput
    fieldAnnotations?: FieldAnnotationUpdateManyWithoutFieldNestedInput
  }

  export type FieldUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fieldAnnotations?: FieldAnnotationUncheckedUpdateManyWithoutFieldNestedInput
  }

  export type FieldCreateManyInput = {
    id?: string
    tableId?: string | null
    name: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FieldUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FieldUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FieldAnnotationCreateInput = {
    id?: string
    modelName: string
    fieldName: string
    annotation: string
    createdAt?: Date | string
    updatedAt?: Date | string
    field?: FieldCreateNestedOneWithoutFieldAnnotationsInput
    table?: TableCreateNestedOneWithoutFieldAnnotationsInput
  }

  export type FieldAnnotationUncheckedCreateInput = {
    id?: string
    tableId?: string | null
    modelName: string
    fieldId?: string | null
    fieldName: string
    annotation: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FieldAnnotationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelName?: StringFieldUpdateOperationsInput | string
    fieldName?: StringFieldUpdateOperationsInput | string
    annotation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    field?: FieldUpdateOneWithoutFieldAnnotationsNestedInput
    table?: TableUpdateOneWithoutFieldAnnotationsNestedInput
  }

  export type FieldAnnotationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableId?: NullableStringFieldUpdateOperationsInput | string | null
    modelName?: StringFieldUpdateOperationsInput | string
    fieldId?: NullableStringFieldUpdateOperationsInput | string | null
    fieldName?: StringFieldUpdateOperationsInput | string
    annotation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FieldAnnotationCreateManyInput = {
    id?: string
    tableId?: string | null
    modelName: string
    fieldId?: string | null
    fieldName: string
    annotation: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FieldAnnotationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelName?: StringFieldUpdateOperationsInput | string
    fieldName?: StringFieldUpdateOperationsInput | string
    annotation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FieldAnnotationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableId?: NullableStringFieldUpdateOperationsInput | string | null
    modelName?: StringFieldUpdateOperationsInput | string
    fieldId?: NullableStringFieldUpdateOperationsInput | string | null
    fieldName?: StringFieldUpdateOperationsInput | string
    annotation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevokedRefreshTokenCreateInput = {
    id?: string
    value: string
    actualExpiration?: Date | string
  }

  export type RevokedRefreshTokenUncheckedCreateInput = {
    id?: string
    value: string
    actualExpiration?: Date | string
  }

  export type RevokedRefreshTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    actualExpiration?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevokedRefreshTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    actualExpiration?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevokedRefreshTokenCreateManyInput = {
    id?: string
    value: string
    actualExpiration?: Date | string
  }

  export type RevokedRefreshTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    actualExpiration?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevokedRefreshTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    actualExpiration?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchemaCreateInput = {
    id?: string
    name: string
    tracked?: boolean | null
    baselineVersionOfSchema?: string | null
    isNewestProductionVersion?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tables?: TableCreateNestedManyWithoutSchemaInput
  }

  export type SchemaUncheckedCreateInput = {
    id?: string
    name: string
    tracked?: boolean | null
    baselineVersionOfSchema?: string | null
    isNewestProductionVersion?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tables?: TableUncheckedCreateNestedManyWithoutSchemaInput
  }

  export type SchemaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tracked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    baselineVersionOfSchema?: NullableStringFieldUpdateOperationsInput | string | null
    isNewestProductionVersion?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tables?: TableUpdateManyWithoutSchemaNestedInput
  }

  export type SchemaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tracked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    baselineVersionOfSchema?: NullableStringFieldUpdateOperationsInput | string | null
    isNewestProductionVersion?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tables?: TableUncheckedUpdateManyWithoutSchemaNestedInput
  }

  export type SchemaCreateManyInput = {
    id?: string
    name: string
    tracked?: boolean | null
    baselineVersionOfSchema?: string | null
    isNewestProductionVersion?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SchemaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tracked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    baselineVersionOfSchema?: NullableStringFieldUpdateOperationsInput | string | null
    isNewestProductionVersion?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchemaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tracked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    baselineVersionOfSchema?: NullableStringFieldUpdateOperationsInput | string | null
    isNewestProductionVersion?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TableCreateInput = {
    id?: string
    name: string
    modelName: string
    relations?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    fields?: FieldCreateNestedManyWithoutTableInput
    fieldAnnotations?: FieldAnnotationCreateNestedManyWithoutTableInput
    schema?: SchemaCreateNestedOneWithoutTablesInput
  }

  export type TableUncheckedCreateInput = {
    id?: string
    schemaId?: string | null
    name: string
    modelName: string
    relations?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    fields?: FieldUncheckedCreateNestedManyWithoutTableInput
    fieldAnnotations?: FieldAnnotationUncheckedCreateNestedManyWithoutTableInput
  }

  export type TableUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    modelName?: StringFieldUpdateOperationsInput | string
    relations?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fields?: FieldUpdateManyWithoutTableNestedInput
    fieldAnnotations?: FieldAnnotationUpdateManyWithoutTableNestedInput
    schema?: SchemaUpdateOneWithoutTablesNestedInput
  }

  export type TableUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    schemaId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    modelName?: StringFieldUpdateOperationsInput | string
    relations?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fields?: FieldUncheckedUpdateManyWithoutTableNestedInput
    fieldAnnotations?: FieldAnnotationUncheckedUpdateManyWithoutTableNestedInput
  }

  export type TableCreateManyInput = {
    id?: string
    schemaId?: string | null
    name: string
    modelName: string
    relations?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TableUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    modelName?: StringFieldUpdateOperationsInput | string
    relations?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TableUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    schemaId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    modelName?: StringFieldUpdateOperationsInput | string
    relations?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    hash: string
    salt: string
    magicLinkToken?: string | null
    email: string
    banned?: boolean | null
    username: string
    verified?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    hash: string
    salt: string
    magicLinkToken?: string | null
    email: string
    banned?: boolean | null
    username: string
    verified?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    magicLinkToken?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    username?: StringFieldUpdateOperationsInput | string
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    magicLinkToken?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    username?: StringFieldUpdateOperationsInput | string
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    hash: string
    salt: string
    magicLinkToken?: string | null
    email: string
    banned?: boolean | null
    username: string
    verified?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    magicLinkToken?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    username?: StringFieldUpdateOperationsInput | string
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    magicLinkToken?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    username?: StringFieldUpdateOperationsInput | string
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AdministratorCountOrderByAggregateInput = {
    id?: SortOrder
    hash?: SortOrder
    salt?: SortOrder
    magicLinkToken?: SortOrder
    email?: SortOrder
    banned?: SortOrder
    username?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdministratorMaxOrderByAggregateInput = {
    id?: SortOrder
    hash?: SortOrder
    salt?: SortOrder
    magicLinkToken?: SortOrder
    email?: SortOrder
    banned?: SortOrder
    username?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdministratorMinOrderByAggregateInput = {
    id?: SortOrder
    hash?: SortOrder
    salt?: SortOrder
    magicLinkToken?: SortOrder
    email?: SortOrder
    banned?: SortOrder
    username?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type TableNullableRelationFilter = {
    is?: TableWhereInput | null
    isNot?: TableWhereInput | null
  }

  export type FieldAnnotationListRelationFilter = {
    every?: FieldAnnotationWhereInput
    some?: FieldAnnotationWhereInput
    none?: FieldAnnotationWhereInput
  }

  export type FieldAnnotationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FieldCountOrderByAggregateInput = {
    id?: SortOrder
    tableId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FieldMaxOrderByAggregateInput = {
    id?: SortOrder
    tableId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FieldMinOrderByAggregateInput = {
    id?: SortOrder
    tableId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FieldNullableRelationFilter = {
    is?: FieldWhereInput | null
    isNot?: FieldWhereInput | null
  }

  export type FieldAnnotationCountOrderByAggregateInput = {
    id?: SortOrder
    tableId?: SortOrder
    modelName?: SortOrder
    fieldId?: SortOrder
    fieldName?: SortOrder
    annotation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FieldAnnotationMaxOrderByAggregateInput = {
    id?: SortOrder
    tableId?: SortOrder
    modelName?: SortOrder
    fieldId?: SortOrder
    fieldName?: SortOrder
    annotation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FieldAnnotationMinOrderByAggregateInput = {
    id?: SortOrder
    tableId?: SortOrder
    modelName?: SortOrder
    fieldId?: SortOrder
    fieldName?: SortOrder
    annotation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RevokedRefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    actualExpiration?: SortOrder
  }

  export type RevokedRefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    actualExpiration?: SortOrder
  }

  export type RevokedRefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    actualExpiration?: SortOrder
  }

  export type TableListRelationFilter = {
    every?: TableWhereInput
    some?: TableWhereInput
    none?: TableWhereInput
  }

  export type TableOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SchemaCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tracked?: SortOrder
    baselineVersionOfSchema?: SortOrder
    isNewestProductionVersion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SchemaMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tracked?: SortOrder
    baselineVersionOfSchema?: SortOrder
    isNewestProductionVersion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SchemaMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tracked?: SortOrder
    baselineVersionOfSchema?: SortOrder
    isNewestProductionVersion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type FieldListRelationFilter = {
    every?: FieldWhereInput
    some?: FieldWhereInput
    none?: FieldWhereInput
  }

  export type SchemaNullableRelationFilter = {
    is?: SchemaWhereInput | null
    isNot?: SchemaWhereInput | null
  }

  export type FieldOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TableCountOrderByAggregateInput = {
    id?: SortOrder
    schemaId?: SortOrder
    name?: SortOrder
    modelName?: SortOrder
    relations?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TableMaxOrderByAggregateInput = {
    id?: SortOrder
    schemaId?: SortOrder
    name?: SortOrder
    modelName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TableMinOrderByAggregateInput = {
    id?: SortOrder
    schemaId?: SortOrder
    name?: SortOrder
    modelName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    hash?: SortOrder
    salt?: SortOrder
    magicLinkToken?: SortOrder
    email?: SortOrder
    banned?: SortOrder
    username?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    hash?: SortOrder
    salt?: SortOrder
    magicLinkToken?: SortOrder
    email?: SortOrder
    banned?: SortOrder
    username?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    hash?: SortOrder
    salt?: SortOrder
    magicLinkToken?: SortOrder
    email?: SortOrder
    banned?: SortOrder
    username?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TableCreateNestedOneWithoutFieldsInput = {
    create?: XOR<TableCreateWithoutFieldsInput, TableUncheckedCreateWithoutFieldsInput>
    connectOrCreate?: TableCreateOrConnectWithoutFieldsInput
    connect?: TableWhereUniqueInput
  }

  export type FieldAnnotationCreateNestedManyWithoutFieldInput = {
    create?: XOR<FieldAnnotationCreateWithoutFieldInput, FieldAnnotationUncheckedCreateWithoutFieldInput> | FieldAnnotationCreateWithoutFieldInput[] | FieldAnnotationUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: FieldAnnotationCreateOrConnectWithoutFieldInput | FieldAnnotationCreateOrConnectWithoutFieldInput[]
    createMany?: FieldAnnotationCreateManyFieldInputEnvelope
    connect?: FieldAnnotationWhereUniqueInput | FieldAnnotationWhereUniqueInput[]
  }

  export type FieldAnnotationUncheckedCreateNestedManyWithoutFieldInput = {
    create?: XOR<FieldAnnotationCreateWithoutFieldInput, FieldAnnotationUncheckedCreateWithoutFieldInput> | FieldAnnotationCreateWithoutFieldInput[] | FieldAnnotationUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: FieldAnnotationCreateOrConnectWithoutFieldInput | FieldAnnotationCreateOrConnectWithoutFieldInput[]
    createMany?: FieldAnnotationCreateManyFieldInputEnvelope
    connect?: FieldAnnotationWhereUniqueInput | FieldAnnotationWhereUniqueInput[]
  }

  export type TableUpdateOneWithoutFieldsNestedInput = {
    create?: XOR<TableCreateWithoutFieldsInput, TableUncheckedCreateWithoutFieldsInput>
    connectOrCreate?: TableCreateOrConnectWithoutFieldsInput
    upsert?: TableUpsertWithoutFieldsInput
    disconnect?: TableWhereInput | boolean
    delete?: TableWhereInput | boolean
    connect?: TableWhereUniqueInput
    update?: XOR<XOR<TableUpdateToOneWithWhereWithoutFieldsInput, TableUpdateWithoutFieldsInput>, TableUncheckedUpdateWithoutFieldsInput>
  }

  export type FieldAnnotationUpdateManyWithoutFieldNestedInput = {
    create?: XOR<FieldAnnotationCreateWithoutFieldInput, FieldAnnotationUncheckedCreateWithoutFieldInput> | FieldAnnotationCreateWithoutFieldInput[] | FieldAnnotationUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: FieldAnnotationCreateOrConnectWithoutFieldInput | FieldAnnotationCreateOrConnectWithoutFieldInput[]
    upsert?: FieldAnnotationUpsertWithWhereUniqueWithoutFieldInput | FieldAnnotationUpsertWithWhereUniqueWithoutFieldInput[]
    createMany?: FieldAnnotationCreateManyFieldInputEnvelope
    set?: FieldAnnotationWhereUniqueInput | FieldAnnotationWhereUniqueInput[]
    disconnect?: FieldAnnotationWhereUniqueInput | FieldAnnotationWhereUniqueInput[]
    delete?: FieldAnnotationWhereUniqueInput | FieldAnnotationWhereUniqueInput[]
    connect?: FieldAnnotationWhereUniqueInput | FieldAnnotationWhereUniqueInput[]
    update?: FieldAnnotationUpdateWithWhereUniqueWithoutFieldInput | FieldAnnotationUpdateWithWhereUniqueWithoutFieldInput[]
    updateMany?: FieldAnnotationUpdateManyWithWhereWithoutFieldInput | FieldAnnotationUpdateManyWithWhereWithoutFieldInput[]
    deleteMany?: FieldAnnotationScalarWhereInput | FieldAnnotationScalarWhereInput[]
  }

  export type FieldAnnotationUncheckedUpdateManyWithoutFieldNestedInput = {
    create?: XOR<FieldAnnotationCreateWithoutFieldInput, FieldAnnotationUncheckedCreateWithoutFieldInput> | FieldAnnotationCreateWithoutFieldInput[] | FieldAnnotationUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: FieldAnnotationCreateOrConnectWithoutFieldInput | FieldAnnotationCreateOrConnectWithoutFieldInput[]
    upsert?: FieldAnnotationUpsertWithWhereUniqueWithoutFieldInput | FieldAnnotationUpsertWithWhereUniqueWithoutFieldInput[]
    createMany?: FieldAnnotationCreateManyFieldInputEnvelope
    set?: FieldAnnotationWhereUniqueInput | FieldAnnotationWhereUniqueInput[]
    disconnect?: FieldAnnotationWhereUniqueInput | FieldAnnotationWhereUniqueInput[]
    delete?: FieldAnnotationWhereUniqueInput | FieldAnnotationWhereUniqueInput[]
    connect?: FieldAnnotationWhereUniqueInput | FieldAnnotationWhereUniqueInput[]
    update?: FieldAnnotationUpdateWithWhereUniqueWithoutFieldInput | FieldAnnotationUpdateWithWhereUniqueWithoutFieldInput[]
    updateMany?: FieldAnnotationUpdateManyWithWhereWithoutFieldInput | FieldAnnotationUpdateManyWithWhereWithoutFieldInput[]
    deleteMany?: FieldAnnotationScalarWhereInput | FieldAnnotationScalarWhereInput[]
  }

  export type FieldCreateNestedOneWithoutFieldAnnotationsInput = {
    create?: XOR<FieldCreateWithoutFieldAnnotationsInput, FieldUncheckedCreateWithoutFieldAnnotationsInput>
    connectOrCreate?: FieldCreateOrConnectWithoutFieldAnnotationsInput
    connect?: FieldWhereUniqueInput
  }

  export type TableCreateNestedOneWithoutFieldAnnotationsInput = {
    create?: XOR<TableCreateWithoutFieldAnnotationsInput, TableUncheckedCreateWithoutFieldAnnotationsInput>
    connectOrCreate?: TableCreateOrConnectWithoutFieldAnnotationsInput
    connect?: TableWhereUniqueInput
  }

  export type FieldUpdateOneWithoutFieldAnnotationsNestedInput = {
    create?: XOR<FieldCreateWithoutFieldAnnotationsInput, FieldUncheckedCreateWithoutFieldAnnotationsInput>
    connectOrCreate?: FieldCreateOrConnectWithoutFieldAnnotationsInput
    upsert?: FieldUpsertWithoutFieldAnnotationsInput
    disconnect?: FieldWhereInput | boolean
    delete?: FieldWhereInput | boolean
    connect?: FieldWhereUniqueInput
    update?: XOR<XOR<FieldUpdateToOneWithWhereWithoutFieldAnnotationsInput, FieldUpdateWithoutFieldAnnotationsInput>, FieldUncheckedUpdateWithoutFieldAnnotationsInput>
  }

  export type TableUpdateOneWithoutFieldAnnotationsNestedInput = {
    create?: XOR<TableCreateWithoutFieldAnnotationsInput, TableUncheckedCreateWithoutFieldAnnotationsInput>
    connectOrCreate?: TableCreateOrConnectWithoutFieldAnnotationsInput
    upsert?: TableUpsertWithoutFieldAnnotationsInput
    disconnect?: TableWhereInput | boolean
    delete?: TableWhereInput | boolean
    connect?: TableWhereUniqueInput
    update?: XOR<XOR<TableUpdateToOneWithWhereWithoutFieldAnnotationsInput, TableUpdateWithoutFieldAnnotationsInput>, TableUncheckedUpdateWithoutFieldAnnotationsInput>
  }

  export type TableCreateNestedManyWithoutSchemaInput = {
    create?: XOR<TableCreateWithoutSchemaInput, TableUncheckedCreateWithoutSchemaInput> | TableCreateWithoutSchemaInput[] | TableUncheckedCreateWithoutSchemaInput[]
    connectOrCreate?: TableCreateOrConnectWithoutSchemaInput | TableCreateOrConnectWithoutSchemaInput[]
    createMany?: TableCreateManySchemaInputEnvelope
    connect?: TableWhereUniqueInput | TableWhereUniqueInput[]
  }

  export type TableUncheckedCreateNestedManyWithoutSchemaInput = {
    create?: XOR<TableCreateWithoutSchemaInput, TableUncheckedCreateWithoutSchemaInput> | TableCreateWithoutSchemaInput[] | TableUncheckedCreateWithoutSchemaInput[]
    connectOrCreate?: TableCreateOrConnectWithoutSchemaInput | TableCreateOrConnectWithoutSchemaInput[]
    createMany?: TableCreateManySchemaInputEnvelope
    connect?: TableWhereUniqueInput | TableWhereUniqueInput[]
  }

  export type TableUpdateManyWithoutSchemaNestedInput = {
    create?: XOR<TableCreateWithoutSchemaInput, TableUncheckedCreateWithoutSchemaInput> | TableCreateWithoutSchemaInput[] | TableUncheckedCreateWithoutSchemaInput[]
    connectOrCreate?: TableCreateOrConnectWithoutSchemaInput | TableCreateOrConnectWithoutSchemaInput[]
    upsert?: TableUpsertWithWhereUniqueWithoutSchemaInput | TableUpsertWithWhereUniqueWithoutSchemaInput[]
    createMany?: TableCreateManySchemaInputEnvelope
    set?: TableWhereUniqueInput | TableWhereUniqueInput[]
    disconnect?: TableWhereUniqueInput | TableWhereUniqueInput[]
    delete?: TableWhereUniqueInput | TableWhereUniqueInput[]
    connect?: TableWhereUniqueInput | TableWhereUniqueInput[]
    update?: TableUpdateWithWhereUniqueWithoutSchemaInput | TableUpdateWithWhereUniqueWithoutSchemaInput[]
    updateMany?: TableUpdateManyWithWhereWithoutSchemaInput | TableUpdateManyWithWhereWithoutSchemaInput[]
    deleteMany?: TableScalarWhereInput | TableScalarWhereInput[]
  }

  export type TableUncheckedUpdateManyWithoutSchemaNestedInput = {
    create?: XOR<TableCreateWithoutSchemaInput, TableUncheckedCreateWithoutSchemaInput> | TableCreateWithoutSchemaInput[] | TableUncheckedCreateWithoutSchemaInput[]
    connectOrCreate?: TableCreateOrConnectWithoutSchemaInput | TableCreateOrConnectWithoutSchemaInput[]
    upsert?: TableUpsertWithWhereUniqueWithoutSchemaInput | TableUpsertWithWhereUniqueWithoutSchemaInput[]
    createMany?: TableCreateManySchemaInputEnvelope
    set?: TableWhereUniqueInput | TableWhereUniqueInput[]
    disconnect?: TableWhereUniqueInput | TableWhereUniqueInput[]
    delete?: TableWhereUniqueInput | TableWhereUniqueInput[]
    connect?: TableWhereUniqueInput | TableWhereUniqueInput[]
    update?: TableUpdateWithWhereUniqueWithoutSchemaInput | TableUpdateWithWhereUniqueWithoutSchemaInput[]
    updateMany?: TableUpdateManyWithWhereWithoutSchemaInput | TableUpdateManyWithWhereWithoutSchemaInput[]
    deleteMany?: TableScalarWhereInput | TableScalarWhereInput[]
  }

  export type FieldCreateNestedManyWithoutTableInput = {
    create?: XOR<FieldCreateWithoutTableInput, FieldUncheckedCreateWithoutTableInput> | FieldCreateWithoutTableInput[] | FieldUncheckedCreateWithoutTableInput[]
    connectOrCreate?: FieldCreateOrConnectWithoutTableInput | FieldCreateOrConnectWithoutTableInput[]
    createMany?: FieldCreateManyTableInputEnvelope
    connect?: FieldWhereUniqueInput | FieldWhereUniqueInput[]
  }

  export type FieldAnnotationCreateNestedManyWithoutTableInput = {
    create?: XOR<FieldAnnotationCreateWithoutTableInput, FieldAnnotationUncheckedCreateWithoutTableInput> | FieldAnnotationCreateWithoutTableInput[] | FieldAnnotationUncheckedCreateWithoutTableInput[]
    connectOrCreate?: FieldAnnotationCreateOrConnectWithoutTableInput | FieldAnnotationCreateOrConnectWithoutTableInput[]
    createMany?: FieldAnnotationCreateManyTableInputEnvelope
    connect?: FieldAnnotationWhereUniqueInput | FieldAnnotationWhereUniqueInput[]
  }

  export type SchemaCreateNestedOneWithoutTablesInput = {
    create?: XOR<SchemaCreateWithoutTablesInput, SchemaUncheckedCreateWithoutTablesInput>
    connectOrCreate?: SchemaCreateOrConnectWithoutTablesInput
    connect?: SchemaWhereUniqueInput
  }

  export type FieldUncheckedCreateNestedManyWithoutTableInput = {
    create?: XOR<FieldCreateWithoutTableInput, FieldUncheckedCreateWithoutTableInput> | FieldCreateWithoutTableInput[] | FieldUncheckedCreateWithoutTableInput[]
    connectOrCreate?: FieldCreateOrConnectWithoutTableInput | FieldCreateOrConnectWithoutTableInput[]
    createMany?: FieldCreateManyTableInputEnvelope
    connect?: FieldWhereUniqueInput | FieldWhereUniqueInput[]
  }

  export type FieldAnnotationUncheckedCreateNestedManyWithoutTableInput = {
    create?: XOR<FieldAnnotationCreateWithoutTableInput, FieldAnnotationUncheckedCreateWithoutTableInput> | FieldAnnotationCreateWithoutTableInput[] | FieldAnnotationUncheckedCreateWithoutTableInput[]
    connectOrCreate?: FieldAnnotationCreateOrConnectWithoutTableInput | FieldAnnotationCreateOrConnectWithoutTableInput[]
    createMany?: FieldAnnotationCreateManyTableInputEnvelope
    connect?: FieldAnnotationWhereUniqueInput | FieldAnnotationWhereUniqueInput[]
  }

  export type FieldUpdateManyWithoutTableNestedInput = {
    create?: XOR<FieldCreateWithoutTableInput, FieldUncheckedCreateWithoutTableInput> | FieldCreateWithoutTableInput[] | FieldUncheckedCreateWithoutTableInput[]
    connectOrCreate?: FieldCreateOrConnectWithoutTableInput | FieldCreateOrConnectWithoutTableInput[]
    upsert?: FieldUpsertWithWhereUniqueWithoutTableInput | FieldUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: FieldCreateManyTableInputEnvelope
    set?: FieldWhereUniqueInput | FieldWhereUniqueInput[]
    disconnect?: FieldWhereUniqueInput | FieldWhereUniqueInput[]
    delete?: FieldWhereUniqueInput | FieldWhereUniqueInput[]
    connect?: FieldWhereUniqueInput | FieldWhereUniqueInput[]
    update?: FieldUpdateWithWhereUniqueWithoutTableInput | FieldUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: FieldUpdateManyWithWhereWithoutTableInput | FieldUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: FieldScalarWhereInput | FieldScalarWhereInput[]
  }

  export type FieldAnnotationUpdateManyWithoutTableNestedInput = {
    create?: XOR<FieldAnnotationCreateWithoutTableInput, FieldAnnotationUncheckedCreateWithoutTableInput> | FieldAnnotationCreateWithoutTableInput[] | FieldAnnotationUncheckedCreateWithoutTableInput[]
    connectOrCreate?: FieldAnnotationCreateOrConnectWithoutTableInput | FieldAnnotationCreateOrConnectWithoutTableInput[]
    upsert?: FieldAnnotationUpsertWithWhereUniqueWithoutTableInput | FieldAnnotationUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: FieldAnnotationCreateManyTableInputEnvelope
    set?: FieldAnnotationWhereUniqueInput | FieldAnnotationWhereUniqueInput[]
    disconnect?: FieldAnnotationWhereUniqueInput | FieldAnnotationWhereUniqueInput[]
    delete?: FieldAnnotationWhereUniqueInput | FieldAnnotationWhereUniqueInput[]
    connect?: FieldAnnotationWhereUniqueInput | FieldAnnotationWhereUniqueInput[]
    update?: FieldAnnotationUpdateWithWhereUniqueWithoutTableInput | FieldAnnotationUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: FieldAnnotationUpdateManyWithWhereWithoutTableInput | FieldAnnotationUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: FieldAnnotationScalarWhereInput | FieldAnnotationScalarWhereInput[]
  }

  export type SchemaUpdateOneWithoutTablesNestedInput = {
    create?: XOR<SchemaCreateWithoutTablesInput, SchemaUncheckedCreateWithoutTablesInput>
    connectOrCreate?: SchemaCreateOrConnectWithoutTablesInput
    upsert?: SchemaUpsertWithoutTablesInput
    disconnect?: SchemaWhereInput | boolean
    delete?: SchemaWhereInput | boolean
    connect?: SchemaWhereUniqueInput
    update?: XOR<XOR<SchemaUpdateToOneWithWhereWithoutTablesInput, SchemaUpdateWithoutTablesInput>, SchemaUncheckedUpdateWithoutTablesInput>
  }

  export type FieldUncheckedUpdateManyWithoutTableNestedInput = {
    create?: XOR<FieldCreateWithoutTableInput, FieldUncheckedCreateWithoutTableInput> | FieldCreateWithoutTableInput[] | FieldUncheckedCreateWithoutTableInput[]
    connectOrCreate?: FieldCreateOrConnectWithoutTableInput | FieldCreateOrConnectWithoutTableInput[]
    upsert?: FieldUpsertWithWhereUniqueWithoutTableInput | FieldUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: FieldCreateManyTableInputEnvelope
    set?: FieldWhereUniqueInput | FieldWhereUniqueInput[]
    disconnect?: FieldWhereUniqueInput | FieldWhereUniqueInput[]
    delete?: FieldWhereUniqueInput | FieldWhereUniqueInput[]
    connect?: FieldWhereUniqueInput | FieldWhereUniqueInput[]
    update?: FieldUpdateWithWhereUniqueWithoutTableInput | FieldUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: FieldUpdateManyWithWhereWithoutTableInput | FieldUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: FieldScalarWhereInput | FieldScalarWhereInput[]
  }

  export type FieldAnnotationUncheckedUpdateManyWithoutTableNestedInput = {
    create?: XOR<FieldAnnotationCreateWithoutTableInput, FieldAnnotationUncheckedCreateWithoutTableInput> | FieldAnnotationCreateWithoutTableInput[] | FieldAnnotationUncheckedCreateWithoutTableInput[]
    connectOrCreate?: FieldAnnotationCreateOrConnectWithoutTableInput | FieldAnnotationCreateOrConnectWithoutTableInput[]
    upsert?: FieldAnnotationUpsertWithWhereUniqueWithoutTableInput | FieldAnnotationUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: FieldAnnotationCreateManyTableInputEnvelope
    set?: FieldAnnotationWhereUniqueInput | FieldAnnotationWhereUniqueInput[]
    disconnect?: FieldAnnotationWhereUniqueInput | FieldAnnotationWhereUniqueInput[]
    delete?: FieldAnnotationWhereUniqueInput | FieldAnnotationWhereUniqueInput[]
    connect?: FieldAnnotationWhereUniqueInput | FieldAnnotationWhereUniqueInput[]
    update?: FieldAnnotationUpdateWithWhereUniqueWithoutTableInput | FieldAnnotationUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: FieldAnnotationUpdateManyWithWhereWithoutTableInput | FieldAnnotationUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: FieldAnnotationScalarWhereInput | FieldAnnotationScalarWhereInput[]
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type TableCreateWithoutFieldsInput = {
    id?: string
    name: string
    modelName: string
    relations?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    fieldAnnotations?: FieldAnnotationCreateNestedManyWithoutTableInput
    schema?: SchemaCreateNestedOneWithoutTablesInput
  }

  export type TableUncheckedCreateWithoutFieldsInput = {
    id?: string
    schemaId?: string | null
    name: string
    modelName: string
    relations?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    fieldAnnotations?: FieldAnnotationUncheckedCreateNestedManyWithoutTableInput
  }

  export type TableCreateOrConnectWithoutFieldsInput = {
    where: TableWhereUniqueInput
    create: XOR<TableCreateWithoutFieldsInput, TableUncheckedCreateWithoutFieldsInput>
  }

  export type FieldAnnotationCreateWithoutFieldInput = {
    id?: string
    modelName: string
    fieldName: string
    annotation: string
    createdAt?: Date | string
    updatedAt?: Date | string
    table?: TableCreateNestedOneWithoutFieldAnnotationsInput
  }

  export type FieldAnnotationUncheckedCreateWithoutFieldInput = {
    id?: string
    tableId?: string | null
    modelName: string
    fieldName: string
    annotation: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FieldAnnotationCreateOrConnectWithoutFieldInput = {
    where: FieldAnnotationWhereUniqueInput
    create: XOR<FieldAnnotationCreateWithoutFieldInput, FieldAnnotationUncheckedCreateWithoutFieldInput>
  }

  export type FieldAnnotationCreateManyFieldInputEnvelope = {
    data: FieldAnnotationCreateManyFieldInput | FieldAnnotationCreateManyFieldInput[]
    skipDuplicates?: boolean
  }

  export type TableUpsertWithoutFieldsInput = {
    update: XOR<TableUpdateWithoutFieldsInput, TableUncheckedUpdateWithoutFieldsInput>
    create: XOR<TableCreateWithoutFieldsInput, TableUncheckedCreateWithoutFieldsInput>
    where?: TableWhereInput
  }

  export type TableUpdateToOneWithWhereWithoutFieldsInput = {
    where?: TableWhereInput
    data: XOR<TableUpdateWithoutFieldsInput, TableUncheckedUpdateWithoutFieldsInput>
  }

  export type TableUpdateWithoutFieldsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    modelName?: StringFieldUpdateOperationsInput | string
    relations?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fieldAnnotations?: FieldAnnotationUpdateManyWithoutTableNestedInput
    schema?: SchemaUpdateOneWithoutTablesNestedInput
  }

  export type TableUncheckedUpdateWithoutFieldsInput = {
    id?: StringFieldUpdateOperationsInput | string
    schemaId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    modelName?: StringFieldUpdateOperationsInput | string
    relations?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fieldAnnotations?: FieldAnnotationUncheckedUpdateManyWithoutTableNestedInput
  }

  export type FieldAnnotationUpsertWithWhereUniqueWithoutFieldInput = {
    where: FieldAnnotationWhereUniqueInput
    update: XOR<FieldAnnotationUpdateWithoutFieldInput, FieldAnnotationUncheckedUpdateWithoutFieldInput>
    create: XOR<FieldAnnotationCreateWithoutFieldInput, FieldAnnotationUncheckedCreateWithoutFieldInput>
  }

  export type FieldAnnotationUpdateWithWhereUniqueWithoutFieldInput = {
    where: FieldAnnotationWhereUniqueInput
    data: XOR<FieldAnnotationUpdateWithoutFieldInput, FieldAnnotationUncheckedUpdateWithoutFieldInput>
  }

  export type FieldAnnotationUpdateManyWithWhereWithoutFieldInput = {
    where: FieldAnnotationScalarWhereInput
    data: XOR<FieldAnnotationUpdateManyMutationInput, FieldAnnotationUncheckedUpdateManyWithoutFieldInput>
  }

  export type FieldAnnotationScalarWhereInput = {
    AND?: FieldAnnotationScalarWhereInput | FieldAnnotationScalarWhereInput[]
    OR?: FieldAnnotationScalarWhereInput[]
    NOT?: FieldAnnotationScalarWhereInput | FieldAnnotationScalarWhereInput[]
    id?: UuidFilter<"FieldAnnotation"> | string
    tableId?: UuidNullableFilter<"FieldAnnotation"> | string | null
    modelName?: StringFilter<"FieldAnnotation"> | string
    fieldId?: UuidNullableFilter<"FieldAnnotation"> | string | null
    fieldName?: StringFilter<"FieldAnnotation"> | string
    annotation?: StringFilter<"FieldAnnotation"> | string
    createdAt?: DateTimeFilter<"FieldAnnotation"> | Date | string
    updatedAt?: DateTimeFilter<"FieldAnnotation"> | Date | string
  }

  export type FieldCreateWithoutFieldAnnotationsInput = {
    id?: string
    name: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    table?: TableCreateNestedOneWithoutFieldsInput
  }

  export type FieldUncheckedCreateWithoutFieldAnnotationsInput = {
    id?: string
    tableId?: string | null
    name: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FieldCreateOrConnectWithoutFieldAnnotationsInput = {
    where: FieldWhereUniqueInput
    create: XOR<FieldCreateWithoutFieldAnnotationsInput, FieldUncheckedCreateWithoutFieldAnnotationsInput>
  }

  export type TableCreateWithoutFieldAnnotationsInput = {
    id?: string
    name: string
    modelName: string
    relations?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    fields?: FieldCreateNestedManyWithoutTableInput
    schema?: SchemaCreateNestedOneWithoutTablesInput
  }

  export type TableUncheckedCreateWithoutFieldAnnotationsInput = {
    id?: string
    schemaId?: string | null
    name: string
    modelName: string
    relations?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    fields?: FieldUncheckedCreateNestedManyWithoutTableInput
  }

  export type TableCreateOrConnectWithoutFieldAnnotationsInput = {
    where: TableWhereUniqueInput
    create: XOR<TableCreateWithoutFieldAnnotationsInput, TableUncheckedCreateWithoutFieldAnnotationsInput>
  }

  export type FieldUpsertWithoutFieldAnnotationsInput = {
    update: XOR<FieldUpdateWithoutFieldAnnotationsInput, FieldUncheckedUpdateWithoutFieldAnnotationsInput>
    create: XOR<FieldCreateWithoutFieldAnnotationsInput, FieldUncheckedCreateWithoutFieldAnnotationsInput>
    where?: FieldWhereInput
  }

  export type FieldUpdateToOneWithWhereWithoutFieldAnnotationsInput = {
    where?: FieldWhereInput
    data: XOR<FieldUpdateWithoutFieldAnnotationsInput, FieldUncheckedUpdateWithoutFieldAnnotationsInput>
  }

  export type FieldUpdateWithoutFieldAnnotationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    table?: TableUpdateOneWithoutFieldsNestedInput
  }

  export type FieldUncheckedUpdateWithoutFieldAnnotationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TableUpsertWithoutFieldAnnotationsInput = {
    update: XOR<TableUpdateWithoutFieldAnnotationsInput, TableUncheckedUpdateWithoutFieldAnnotationsInput>
    create: XOR<TableCreateWithoutFieldAnnotationsInput, TableUncheckedCreateWithoutFieldAnnotationsInput>
    where?: TableWhereInput
  }

  export type TableUpdateToOneWithWhereWithoutFieldAnnotationsInput = {
    where?: TableWhereInput
    data: XOR<TableUpdateWithoutFieldAnnotationsInput, TableUncheckedUpdateWithoutFieldAnnotationsInput>
  }

  export type TableUpdateWithoutFieldAnnotationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    modelName?: StringFieldUpdateOperationsInput | string
    relations?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fields?: FieldUpdateManyWithoutTableNestedInput
    schema?: SchemaUpdateOneWithoutTablesNestedInput
  }

  export type TableUncheckedUpdateWithoutFieldAnnotationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    schemaId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    modelName?: StringFieldUpdateOperationsInput | string
    relations?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fields?: FieldUncheckedUpdateManyWithoutTableNestedInput
  }

  export type TableCreateWithoutSchemaInput = {
    id?: string
    name: string
    modelName: string
    relations?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    fields?: FieldCreateNestedManyWithoutTableInput
    fieldAnnotations?: FieldAnnotationCreateNestedManyWithoutTableInput
  }

  export type TableUncheckedCreateWithoutSchemaInput = {
    id?: string
    name: string
    modelName: string
    relations?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    fields?: FieldUncheckedCreateNestedManyWithoutTableInput
    fieldAnnotations?: FieldAnnotationUncheckedCreateNestedManyWithoutTableInput
  }

  export type TableCreateOrConnectWithoutSchemaInput = {
    where: TableWhereUniqueInput
    create: XOR<TableCreateWithoutSchemaInput, TableUncheckedCreateWithoutSchemaInput>
  }

  export type TableCreateManySchemaInputEnvelope = {
    data: TableCreateManySchemaInput | TableCreateManySchemaInput[]
    skipDuplicates?: boolean
  }

  export type TableUpsertWithWhereUniqueWithoutSchemaInput = {
    where: TableWhereUniqueInput
    update: XOR<TableUpdateWithoutSchemaInput, TableUncheckedUpdateWithoutSchemaInput>
    create: XOR<TableCreateWithoutSchemaInput, TableUncheckedCreateWithoutSchemaInput>
  }

  export type TableUpdateWithWhereUniqueWithoutSchemaInput = {
    where: TableWhereUniqueInput
    data: XOR<TableUpdateWithoutSchemaInput, TableUncheckedUpdateWithoutSchemaInput>
  }

  export type TableUpdateManyWithWhereWithoutSchemaInput = {
    where: TableScalarWhereInput
    data: XOR<TableUpdateManyMutationInput, TableUncheckedUpdateManyWithoutSchemaInput>
  }

  export type TableScalarWhereInput = {
    AND?: TableScalarWhereInput | TableScalarWhereInput[]
    OR?: TableScalarWhereInput[]
    NOT?: TableScalarWhereInput | TableScalarWhereInput[]
    id?: UuidFilter<"Table"> | string
    schemaId?: UuidNullableFilter<"Table"> | string | null
    name?: StringFilter<"Table"> | string
    modelName?: StringFilter<"Table"> | string
    relations?: JsonNullableFilter<"Table">
    createdAt?: DateTimeFilter<"Table"> | Date | string
    updatedAt?: DateTimeFilter<"Table"> | Date | string
  }

  export type FieldCreateWithoutTableInput = {
    id?: string
    name: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fieldAnnotations?: FieldAnnotationCreateNestedManyWithoutFieldInput
  }

  export type FieldUncheckedCreateWithoutTableInput = {
    id?: string
    name: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fieldAnnotations?: FieldAnnotationUncheckedCreateNestedManyWithoutFieldInput
  }

  export type FieldCreateOrConnectWithoutTableInput = {
    where: FieldWhereUniqueInput
    create: XOR<FieldCreateWithoutTableInput, FieldUncheckedCreateWithoutTableInput>
  }

  export type FieldCreateManyTableInputEnvelope = {
    data: FieldCreateManyTableInput | FieldCreateManyTableInput[]
    skipDuplicates?: boolean
  }

  export type FieldAnnotationCreateWithoutTableInput = {
    id?: string
    modelName: string
    fieldName: string
    annotation: string
    createdAt?: Date | string
    updatedAt?: Date | string
    field?: FieldCreateNestedOneWithoutFieldAnnotationsInput
  }

  export type FieldAnnotationUncheckedCreateWithoutTableInput = {
    id?: string
    modelName: string
    fieldId?: string | null
    fieldName: string
    annotation: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FieldAnnotationCreateOrConnectWithoutTableInput = {
    where: FieldAnnotationWhereUniqueInput
    create: XOR<FieldAnnotationCreateWithoutTableInput, FieldAnnotationUncheckedCreateWithoutTableInput>
  }

  export type FieldAnnotationCreateManyTableInputEnvelope = {
    data: FieldAnnotationCreateManyTableInput | FieldAnnotationCreateManyTableInput[]
    skipDuplicates?: boolean
  }

  export type SchemaCreateWithoutTablesInput = {
    id?: string
    name: string
    tracked?: boolean | null
    baselineVersionOfSchema?: string | null
    isNewestProductionVersion?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SchemaUncheckedCreateWithoutTablesInput = {
    id?: string
    name: string
    tracked?: boolean | null
    baselineVersionOfSchema?: string | null
    isNewestProductionVersion?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SchemaCreateOrConnectWithoutTablesInput = {
    where: SchemaWhereUniqueInput
    create: XOR<SchemaCreateWithoutTablesInput, SchemaUncheckedCreateWithoutTablesInput>
  }

  export type FieldUpsertWithWhereUniqueWithoutTableInput = {
    where: FieldWhereUniqueInput
    update: XOR<FieldUpdateWithoutTableInput, FieldUncheckedUpdateWithoutTableInput>
    create: XOR<FieldCreateWithoutTableInput, FieldUncheckedCreateWithoutTableInput>
  }

  export type FieldUpdateWithWhereUniqueWithoutTableInput = {
    where: FieldWhereUniqueInput
    data: XOR<FieldUpdateWithoutTableInput, FieldUncheckedUpdateWithoutTableInput>
  }

  export type FieldUpdateManyWithWhereWithoutTableInput = {
    where: FieldScalarWhereInput
    data: XOR<FieldUpdateManyMutationInput, FieldUncheckedUpdateManyWithoutTableInput>
  }

  export type FieldScalarWhereInput = {
    AND?: FieldScalarWhereInput | FieldScalarWhereInput[]
    OR?: FieldScalarWhereInput[]
    NOT?: FieldScalarWhereInput | FieldScalarWhereInput[]
    id?: UuidFilter<"Field"> | string
    tableId?: UuidNullableFilter<"Field"> | string | null
    name?: StringFilter<"Field"> | string
    type?: StringFilter<"Field"> | string
    createdAt?: DateTimeFilter<"Field"> | Date | string
    updatedAt?: DateTimeFilter<"Field"> | Date | string
  }

  export type FieldAnnotationUpsertWithWhereUniqueWithoutTableInput = {
    where: FieldAnnotationWhereUniqueInput
    update: XOR<FieldAnnotationUpdateWithoutTableInput, FieldAnnotationUncheckedUpdateWithoutTableInput>
    create: XOR<FieldAnnotationCreateWithoutTableInput, FieldAnnotationUncheckedCreateWithoutTableInput>
  }

  export type FieldAnnotationUpdateWithWhereUniqueWithoutTableInput = {
    where: FieldAnnotationWhereUniqueInput
    data: XOR<FieldAnnotationUpdateWithoutTableInput, FieldAnnotationUncheckedUpdateWithoutTableInput>
  }

  export type FieldAnnotationUpdateManyWithWhereWithoutTableInput = {
    where: FieldAnnotationScalarWhereInput
    data: XOR<FieldAnnotationUpdateManyMutationInput, FieldAnnotationUncheckedUpdateManyWithoutTableInput>
  }

  export type SchemaUpsertWithoutTablesInput = {
    update: XOR<SchemaUpdateWithoutTablesInput, SchemaUncheckedUpdateWithoutTablesInput>
    create: XOR<SchemaCreateWithoutTablesInput, SchemaUncheckedCreateWithoutTablesInput>
    where?: SchemaWhereInput
  }

  export type SchemaUpdateToOneWithWhereWithoutTablesInput = {
    where?: SchemaWhereInput
    data: XOR<SchemaUpdateWithoutTablesInput, SchemaUncheckedUpdateWithoutTablesInput>
  }

  export type SchemaUpdateWithoutTablesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tracked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    baselineVersionOfSchema?: NullableStringFieldUpdateOperationsInput | string | null
    isNewestProductionVersion?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchemaUncheckedUpdateWithoutTablesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tracked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    baselineVersionOfSchema?: NullableStringFieldUpdateOperationsInput | string | null
    isNewestProductionVersion?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FieldAnnotationCreateManyFieldInput = {
    id?: string
    tableId?: string | null
    modelName: string
    fieldName: string
    annotation: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FieldAnnotationUpdateWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelName?: StringFieldUpdateOperationsInput | string
    fieldName?: StringFieldUpdateOperationsInput | string
    annotation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    table?: TableUpdateOneWithoutFieldAnnotationsNestedInput
  }

  export type FieldAnnotationUncheckedUpdateWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableId?: NullableStringFieldUpdateOperationsInput | string | null
    modelName?: StringFieldUpdateOperationsInput | string
    fieldName?: StringFieldUpdateOperationsInput | string
    annotation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FieldAnnotationUncheckedUpdateManyWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableId?: NullableStringFieldUpdateOperationsInput | string | null
    modelName?: StringFieldUpdateOperationsInput | string
    fieldName?: StringFieldUpdateOperationsInput | string
    annotation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TableCreateManySchemaInput = {
    id?: string
    name: string
    modelName: string
    relations?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TableUpdateWithoutSchemaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    modelName?: StringFieldUpdateOperationsInput | string
    relations?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fields?: FieldUpdateManyWithoutTableNestedInput
    fieldAnnotations?: FieldAnnotationUpdateManyWithoutTableNestedInput
  }

  export type TableUncheckedUpdateWithoutSchemaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    modelName?: StringFieldUpdateOperationsInput | string
    relations?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fields?: FieldUncheckedUpdateManyWithoutTableNestedInput
    fieldAnnotations?: FieldAnnotationUncheckedUpdateManyWithoutTableNestedInput
  }

  export type TableUncheckedUpdateManyWithoutSchemaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    modelName?: StringFieldUpdateOperationsInput | string
    relations?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FieldCreateManyTableInput = {
    id?: string
    name: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FieldAnnotationCreateManyTableInput = {
    id?: string
    modelName: string
    fieldId?: string | null
    fieldName: string
    annotation: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FieldUpdateWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fieldAnnotations?: FieldAnnotationUpdateManyWithoutFieldNestedInput
  }

  export type FieldUncheckedUpdateWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fieldAnnotations?: FieldAnnotationUncheckedUpdateManyWithoutFieldNestedInput
  }

  export type FieldUncheckedUpdateManyWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FieldAnnotationUpdateWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelName?: StringFieldUpdateOperationsInput | string
    fieldName?: StringFieldUpdateOperationsInput | string
    annotation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    field?: FieldUpdateOneWithoutFieldAnnotationsNestedInput
  }

  export type FieldAnnotationUncheckedUpdateWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelName?: StringFieldUpdateOperationsInput | string
    fieldId?: NullableStringFieldUpdateOperationsInput | string | null
    fieldName?: StringFieldUpdateOperationsInput | string
    annotation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FieldAnnotationUncheckedUpdateManyWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelName?: StringFieldUpdateOperationsInput | string
    fieldId?: NullableStringFieldUpdateOperationsInput | string | null
    fieldName?: StringFieldUpdateOperationsInput | string
    annotation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use FieldCountOutputTypeDefaultArgs instead
     */
    export type FieldCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FieldCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SchemaCountOutputTypeDefaultArgs instead
     */
    export type SchemaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SchemaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TableCountOutputTypeDefaultArgs instead
     */
    export type TableCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TableCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdministratorDefaultArgs instead
     */
    export type AdministratorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdministratorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FieldDefaultArgs instead
     */
    export type FieldArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FieldDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FieldAnnotationDefaultArgs instead
     */
    export type FieldAnnotationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FieldAnnotationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RevokedRefreshTokenDefaultArgs instead
     */
    export type RevokedRefreshTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RevokedRefreshTokenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SchemaDefaultArgs instead
     */
    export type SchemaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SchemaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TableDefaultArgs instead
     */
    export type TableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TableDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}