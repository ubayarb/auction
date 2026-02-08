
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Contract
 * 
 */
export type Contract = $Result.DefaultSelection<Prisma.$ContractPayload>
/**
 * Model ContractVersion
 * 
 */
export type ContractVersion = $Result.DefaultSelection<Prisma.$ContractVersionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ContractType: {
  SALE: 'SALE',
  RENT: 'RENT',
  LEASE: 'LEASE',
  AUCTION_SALE: 'AUCTION_SALE',
  PRELIMINARY: 'PRELIMINARY'
};

export type ContractType = (typeof ContractType)[keyof typeof ContractType]


export const ContractStatus: {
  DRAFT: 'DRAFT',
  PENDING_REVIEW: 'PENDING_REVIEW',
  BUYER_SIGNED: 'BUYER_SIGNED',
  SELLER_SIGNED: 'SELLER_SIGNED',
  BOTH_SIGNED: 'BOTH_SIGNED',
  NOTARIZED: 'NOTARIZED',
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
  EXPIRED: 'EXPIRED',
  DISPUTED: 'DISPUTED'
};

export type ContractStatus = (typeof ContractStatus)[keyof typeof ContractStatus]

}

export type ContractType = $Enums.ContractType

export const ContractType: typeof $Enums.ContractType

export type ContractStatus = $Enums.ContractStatus

export const ContractStatus: typeof $Enums.ContractStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Contracts
 * const contracts = await prisma.contract.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Contracts
   * const contracts = await prisma.contract.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.contract`: Exposes CRUD operations for the **Contract** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contracts
    * const contracts = await prisma.contract.findMany()
    * ```
    */
  get contract(): Prisma.ContractDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contractVersion`: Exposes CRUD operations for the **ContractVersion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContractVersions
    * const contractVersions = await prisma.contractVersion.findMany()
    * ```
    */
  get contractVersion(): Prisma.ContractVersionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Contract: 'Contract',
    ContractVersion: 'ContractVersion'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "contract" | "contractVersion"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Contract: {
        payload: Prisma.$ContractPayload<ExtArgs>
        fields: Prisma.ContractFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContractFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContractFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          findFirst: {
            args: Prisma.ContractFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContractFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          findMany: {
            args: Prisma.ContractFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>[]
          }
          create: {
            args: Prisma.ContractCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          createMany: {
            args: Prisma.ContractCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContractCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>[]
          }
          delete: {
            args: Prisma.ContractDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          update: {
            args: Prisma.ContractUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          deleteMany: {
            args: Prisma.ContractDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContractUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContractUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>[]
          }
          upsert: {
            args: Prisma.ContractUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          aggregate: {
            args: Prisma.ContractAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContract>
          }
          groupBy: {
            args: Prisma.ContractGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContractGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContractCountArgs<ExtArgs>
            result: $Utils.Optional<ContractCountAggregateOutputType> | number
          }
        }
      }
      ContractVersion: {
        payload: Prisma.$ContractVersionPayload<ExtArgs>
        fields: Prisma.ContractVersionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContractVersionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractVersionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContractVersionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractVersionPayload>
          }
          findFirst: {
            args: Prisma.ContractVersionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractVersionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContractVersionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractVersionPayload>
          }
          findMany: {
            args: Prisma.ContractVersionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractVersionPayload>[]
          }
          create: {
            args: Prisma.ContractVersionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractVersionPayload>
          }
          createMany: {
            args: Prisma.ContractVersionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContractVersionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractVersionPayload>[]
          }
          delete: {
            args: Prisma.ContractVersionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractVersionPayload>
          }
          update: {
            args: Prisma.ContractVersionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractVersionPayload>
          }
          deleteMany: {
            args: Prisma.ContractVersionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContractVersionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContractVersionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractVersionPayload>[]
          }
          upsert: {
            args: Prisma.ContractVersionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractVersionPayload>
          }
          aggregate: {
            args: Prisma.ContractVersionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContractVersion>
          }
          groupBy: {
            args: Prisma.ContractVersionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContractVersionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContractVersionCountArgs<ExtArgs>
            result: $Utils.Optional<ContractVersionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    contract?: ContractOmit
    contractVersion?: ContractVersionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type ContractCountOutputType
   */

  export type ContractCountOutputType = {
    versions: number
  }

  export type ContractCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    versions?: boolean | ContractCountOutputTypeCountVersionsArgs
  }

  // Custom InputTypes
  /**
   * ContractCountOutputType without action
   */
  export type ContractCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractCountOutputType
     */
    select?: ContractCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContractCountOutputType without action
   */
  export type ContractCountOutputTypeCountVersionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractVersionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Contract
   */

  export type AggregateContract = {
    _count: ContractCountAggregateOutputType | null
    _avg: ContractAvgAggregateOutputType | null
    _sum: ContractSumAggregateOutputType | null
    _min: ContractMinAggregateOutputType | null
    _max: ContractMaxAggregateOutputType | null
  }

  export type ContractAvgAggregateOutputType = {
    totalAmount: Decimal | null
    monthlyRent: Decimal | null
    deposit: Decimal | null
    rentDuration: number | null
  }

  export type ContractSumAggregateOutputType = {
    totalAmount: Decimal | null
    monthlyRent: Decimal | null
    deposit: Decimal | null
    rentDuration: number | null
  }

  export type ContractMinAggregateOutputType = {
    id: string | null
    propertyId: string | null
    buyerId: string | null
    sellerId: string | null
    agentId: string | null
    notaryId: string | null
    type: $Enums.ContractType | null
    status: $Enums.ContractStatus | null
    contractNumber: string | null
    title: string | null
    totalAmount: Decimal | null
    currency: string | null
    terms: string | null
    specialConditions: string | null
    startDate: Date | null
    endDate: Date | null
    signingDeadline: Date | null
    monthlyRent: Decimal | null
    deposit: Decimal | null
    rentDuration: number | null
    buyerSignedAt: Date | null
    sellerSignedAt: Date | null
    notarySignedAt: Date | null
    documentUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContractMaxAggregateOutputType = {
    id: string | null
    propertyId: string | null
    buyerId: string | null
    sellerId: string | null
    agentId: string | null
    notaryId: string | null
    type: $Enums.ContractType | null
    status: $Enums.ContractStatus | null
    contractNumber: string | null
    title: string | null
    totalAmount: Decimal | null
    currency: string | null
    terms: string | null
    specialConditions: string | null
    startDate: Date | null
    endDate: Date | null
    signingDeadline: Date | null
    monthlyRent: Decimal | null
    deposit: Decimal | null
    rentDuration: number | null
    buyerSignedAt: Date | null
    sellerSignedAt: Date | null
    notarySignedAt: Date | null
    documentUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContractCountAggregateOutputType = {
    id: number
    propertyId: number
    buyerId: number
    sellerId: number
    agentId: number
    notaryId: number
    type: number
    status: number
    contractNumber: number
    title: number
    totalAmount: number
    currency: number
    terms: number
    specialConditions: number
    startDate: number
    endDate: number
    signingDeadline: number
    monthlyRent: number
    deposit: number
    rentDuration: number
    buyerSignedAt: number
    sellerSignedAt: number
    notarySignedAt: number
    documentUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContractAvgAggregateInputType = {
    totalAmount?: true
    monthlyRent?: true
    deposit?: true
    rentDuration?: true
  }

  export type ContractSumAggregateInputType = {
    totalAmount?: true
    monthlyRent?: true
    deposit?: true
    rentDuration?: true
  }

  export type ContractMinAggregateInputType = {
    id?: true
    propertyId?: true
    buyerId?: true
    sellerId?: true
    agentId?: true
    notaryId?: true
    type?: true
    status?: true
    contractNumber?: true
    title?: true
    totalAmount?: true
    currency?: true
    terms?: true
    specialConditions?: true
    startDate?: true
    endDate?: true
    signingDeadline?: true
    monthlyRent?: true
    deposit?: true
    rentDuration?: true
    buyerSignedAt?: true
    sellerSignedAt?: true
    notarySignedAt?: true
    documentUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContractMaxAggregateInputType = {
    id?: true
    propertyId?: true
    buyerId?: true
    sellerId?: true
    agentId?: true
    notaryId?: true
    type?: true
    status?: true
    contractNumber?: true
    title?: true
    totalAmount?: true
    currency?: true
    terms?: true
    specialConditions?: true
    startDate?: true
    endDate?: true
    signingDeadline?: true
    monthlyRent?: true
    deposit?: true
    rentDuration?: true
    buyerSignedAt?: true
    sellerSignedAt?: true
    notarySignedAt?: true
    documentUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContractCountAggregateInputType = {
    id?: true
    propertyId?: true
    buyerId?: true
    sellerId?: true
    agentId?: true
    notaryId?: true
    type?: true
    status?: true
    contractNumber?: true
    title?: true
    totalAmount?: true
    currency?: true
    terms?: true
    specialConditions?: true
    startDate?: true
    endDate?: true
    signingDeadline?: true
    monthlyRent?: true
    deposit?: true
    rentDuration?: true
    buyerSignedAt?: true
    sellerSignedAt?: true
    notarySignedAt?: true
    documentUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContractAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contract to aggregate.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contracts
    **/
    _count?: true | ContractCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContractAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContractSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContractMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContractMaxAggregateInputType
  }

  export type GetContractAggregateType<T extends ContractAggregateArgs> = {
        [P in keyof T & keyof AggregateContract]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContract[P]>
      : GetScalarType<T[P], AggregateContract[P]>
  }




  export type ContractGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractWhereInput
    orderBy?: ContractOrderByWithAggregationInput | ContractOrderByWithAggregationInput[]
    by: ContractScalarFieldEnum[] | ContractScalarFieldEnum
    having?: ContractScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContractCountAggregateInputType | true
    _avg?: ContractAvgAggregateInputType
    _sum?: ContractSumAggregateInputType
    _min?: ContractMinAggregateInputType
    _max?: ContractMaxAggregateInputType
  }

  export type ContractGroupByOutputType = {
    id: string
    propertyId: string
    buyerId: string
    sellerId: string
    agentId: string | null
    notaryId: string | null
    type: $Enums.ContractType
    status: $Enums.ContractStatus
    contractNumber: string | null
    title: string
    totalAmount: Decimal
    currency: string
    terms: string | null
    specialConditions: string | null
    startDate: Date | null
    endDate: Date | null
    signingDeadline: Date | null
    monthlyRent: Decimal | null
    deposit: Decimal | null
    rentDuration: number | null
    buyerSignedAt: Date | null
    sellerSignedAt: Date | null
    notarySignedAt: Date | null
    documentUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: ContractCountAggregateOutputType | null
    _avg: ContractAvgAggregateOutputType | null
    _sum: ContractSumAggregateOutputType | null
    _min: ContractMinAggregateOutputType | null
    _max: ContractMaxAggregateOutputType | null
  }

  type GetContractGroupByPayload<T extends ContractGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContractGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContractGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContractGroupByOutputType[P]>
            : GetScalarType<T[P], ContractGroupByOutputType[P]>
        }
      >
    >


  export type ContractSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    buyerId?: boolean
    sellerId?: boolean
    agentId?: boolean
    notaryId?: boolean
    type?: boolean
    status?: boolean
    contractNumber?: boolean
    title?: boolean
    totalAmount?: boolean
    currency?: boolean
    terms?: boolean
    specialConditions?: boolean
    startDate?: boolean
    endDate?: boolean
    signingDeadline?: boolean
    monthlyRent?: boolean
    deposit?: boolean
    rentDuration?: boolean
    buyerSignedAt?: boolean
    sellerSignedAt?: boolean
    notarySignedAt?: boolean
    documentUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    versions?: boolean | Contract$versionsArgs<ExtArgs>
    _count?: boolean | ContractCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contract"]>

  export type ContractSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    buyerId?: boolean
    sellerId?: boolean
    agentId?: boolean
    notaryId?: boolean
    type?: boolean
    status?: boolean
    contractNumber?: boolean
    title?: boolean
    totalAmount?: boolean
    currency?: boolean
    terms?: boolean
    specialConditions?: boolean
    startDate?: boolean
    endDate?: boolean
    signingDeadline?: boolean
    monthlyRent?: boolean
    deposit?: boolean
    rentDuration?: boolean
    buyerSignedAt?: boolean
    sellerSignedAt?: boolean
    notarySignedAt?: boolean
    documentUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contract"]>

  export type ContractSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    buyerId?: boolean
    sellerId?: boolean
    agentId?: boolean
    notaryId?: boolean
    type?: boolean
    status?: boolean
    contractNumber?: boolean
    title?: boolean
    totalAmount?: boolean
    currency?: boolean
    terms?: boolean
    specialConditions?: boolean
    startDate?: boolean
    endDate?: boolean
    signingDeadline?: boolean
    monthlyRent?: boolean
    deposit?: boolean
    rentDuration?: boolean
    buyerSignedAt?: boolean
    sellerSignedAt?: boolean
    notarySignedAt?: boolean
    documentUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contract"]>

  export type ContractSelectScalar = {
    id?: boolean
    propertyId?: boolean
    buyerId?: boolean
    sellerId?: boolean
    agentId?: boolean
    notaryId?: boolean
    type?: boolean
    status?: boolean
    contractNumber?: boolean
    title?: boolean
    totalAmount?: boolean
    currency?: boolean
    terms?: boolean
    specialConditions?: boolean
    startDate?: boolean
    endDate?: boolean
    signingDeadline?: boolean
    monthlyRent?: boolean
    deposit?: boolean
    rentDuration?: boolean
    buyerSignedAt?: boolean
    sellerSignedAt?: boolean
    notarySignedAt?: boolean
    documentUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContractOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "propertyId" | "buyerId" | "sellerId" | "agentId" | "notaryId" | "type" | "status" | "contractNumber" | "title" | "totalAmount" | "currency" | "terms" | "specialConditions" | "startDate" | "endDate" | "signingDeadline" | "monthlyRent" | "deposit" | "rentDuration" | "buyerSignedAt" | "sellerSignedAt" | "notarySignedAt" | "documentUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["contract"]>
  export type ContractInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    versions?: boolean | Contract$versionsArgs<ExtArgs>
    _count?: boolean | ContractCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ContractIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ContractIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ContractPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contract"
    objects: {
      versions: Prisma.$ContractVersionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      propertyId: string
      buyerId: string
      sellerId: string
      agentId: string | null
      notaryId: string | null
      type: $Enums.ContractType
      status: $Enums.ContractStatus
      contractNumber: string | null
      title: string
      totalAmount: Prisma.Decimal
      currency: string
      terms: string | null
      specialConditions: string | null
      startDate: Date | null
      endDate: Date | null
      signingDeadline: Date | null
      monthlyRent: Prisma.Decimal | null
      deposit: Prisma.Decimal | null
      rentDuration: number | null
      buyerSignedAt: Date | null
      sellerSignedAt: Date | null
      notarySignedAt: Date | null
      documentUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contract"]>
    composites: {}
  }

  type ContractGetPayload<S extends boolean | null | undefined | ContractDefaultArgs> = $Result.GetResult<Prisma.$ContractPayload, S>

  type ContractCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContractFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContractCountAggregateInputType | true
    }

  export interface ContractDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contract'], meta: { name: 'Contract' } }
    /**
     * Find zero or one Contract that matches the filter.
     * @param {ContractFindUniqueArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContractFindUniqueArgs>(args: SelectSubset<T, ContractFindUniqueArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contract that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContractFindUniqueOrThrowArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContractFindUniqueOrThrowArgs>(args: SelectSubset<T, ContractFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contract that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindFirstArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContractFindFirstArgs>(args?: SelectSubset<T, ContractFindFirstArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contract that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindFirstOrThrowArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContractFindFirstOrThrowArgs>(args?: SelectSubset<T, ContractFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contracts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contracts
     * const contracts = await prisma.contract.findMany()
     * 
     * // Get first 10 Contracts
     * const contracts = await prisma.contract.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contractWithIdOnly = await prisma.contract.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContractFindManyArgs>(args?: SelectSubset<T, ContractFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contract.
     * @param {ContractCreateArgs} args - Arguments to create a Contract.
     * @example
     * // Create one Contract
     * const Contract = await prisma.contract.create({
     *   data: {
     *     // ... data to create a Contract
     *   }
     * })
     * 
     */
    create<T extends ContractCreateArgs>(args: SelectSubset<T, ContractCreateArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contracts.
     * @param {ContractCreateManyArgs} args - Arguments to create many Contracts.
     * @example
     * // Create many Contracts
     * const contract = await prisma.contract.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContractCreateManyArgs>(args?: SelectSubset<T, ContractCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contracts and returns the data saved in the database.
     * @param {ContractCreateManyAndReturnArgs} args - Arguments to create many Contracts.
     * @example
     * // Create many Contracts
     * const contract = await prisma.contract.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contracts and only return the `id`
     * const contractWithIdOnly = await prisma.contract.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContractCreateManyAndReturnArgs>(args?: SelectSubset<T, ContractCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contract.
     * @param {ContractDeleteArgs} args - Arguments to delete one Contract.
     * @example
     * // Delete one Contract
     * const Contract = await prisma.contract.delete({
     *   where: {
     *     // ... filter to delete one Contract
     *   }
     * })
     * 
     */
    delete<T extends ContractDeleteArgs>(args: SelectSubset<T, ContractDeleteArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contract.
     * @param {ContractUpdateArgs} args - Arguments to update one Contract.
     * @example
     * // Update one Contract
     * const contract = await prisma.contract.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContractUpdateArgs>(args: SelectSubset<T, ContractUpdateArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contracts.
     * @param {ContractDeleteManyArgs} args - Arguments to filter Contracts to delete.
     * @example
     * // Delete a few Contracts
     * const { count } = await prisma.contract.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContractDeleteManyArgs>(args?: SelectSubset<T, ContractDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contracts
     * const contract = await prisma.contract.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContractUpdateManyArgs>(args: SelectSubset<T, ContractUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contracts and returns the data updated in the database.
     * @param {ContractUpdateManyAndReturnArgs} args - Arguments to update many Contracts.
     * @example
     * // Update many Contracts
     * const contract = await prisma.contract.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contracts and only return the `id`
     * const contractWithIdOnly = await prisma.contract.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContractUpdateManyAndReturnArgs>(args: SelectSubset<T, ContractUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contract.
     * @param {ContractUpsertArgs} args - Arguments to update or create a Contract.
     * @example
     * // Update or create a Contract
     * const contract = await prisma.contract.upsert({
     *   create: {
     *     // ... data to create a Contract
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contract we want to update
     *   }
     * })
     */
    upsert<T extends ContractUpsertArgs>(args: SelectSubset<T, ContractUpsertArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractCountArgs} args - Arguments to filter Contracts to count.
     * @example
     * // Count the number of Contracts
     * const count = await prisma.contract.count({
     *   where: {
     *     // ... the filter for the Contracts we want to count
     *   }
     * })
    **/
    count<T extends ContractCountArgs>(
      args?: Subset<T, ContractCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContractCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContractAggregateArgs>(args: Subset<T, ContractAggregateArgs>): Prisma.PrismaPromise<GetContractAggregateType<T>>

    /**
     * Group by Contract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractGroupByArgs} args - Group by arguments.
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
      T extends ContractGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContractGroupByArgs['orderBy'] }
        : { orderBy?: ContractGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContractGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContractGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contract model
   */
  readonly fields: ContractFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contract.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContractClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    versions<T extends Contract$versionsArgs<ExtArgs> = {}>(args?: Subset<T, Contract$versionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Contract model
   */
  interface ContractFieldRefs {
    readonly id: FieldRef<"Contract", 'String'>
    readonly propertyId: FieldRef<"Contract", 'String'>
    readonly buyerId: FieldRef<"Contract", 'String'>
    readonly sellerId: FieldRef<"Contract", 'String'>
    readonly agentId: FieldRef<"Contract", 'String'>
    readonly notaryId: FieldRef<"Contract", 'String'>
    readonly type: FieldRef<"Contract", 'ContractType'>
    readonly status: FieldRef<"Contract", 'ContractStatus'>
    readonly contractNumber: FieldRef<"Contract", 'String'>
    readonly title: FieldRef<"Contract", 'String'>
    readonly totalAmount: FieldRef<"Contract", 'Decimal'>
    readonly currency: FieldRef<"Contract", 'String'>
    readonly terms: FieldRef<"Contract", 'String'>
    readonly specialConditions: FieldRef<"Contract", 'String'>
    readonly startDate: FieldRef<"Contract", 'DateTime'>
    readonly endDate: FieldRef<"Contract", 'DateTime'>
    readonly signingDeadline: FieldRef<"Contract", 'DateTime'>
    readonly monthlyRent: FieldRef<"Contract", 'Decimal'>
    readonly deposit: FieldRef<"Contract", 'Decimal'>
    readonly rentDuration: FieldRef<"Contract", 'Int'>
    readonly buyerSignedAt: FieldRef<"Contract", 'DateTime'>
    readonly sellerSignedAt: FieldRef<"Contract", 'DateTime'>
    readonly notarySignedAt: FieldRef<"Contract", 'DateTime'>
    readonly documentUrl: FieldRef<"Contract", 'String'>
    readonly createdAt: FieldRef<"Contract", 'DateTime'>
    readonly updatedAt: FieldRef<"Contract", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contract findUnique
   */
  export type ContractFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract findUniqueOrThrow
   */
  export type ContractFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract findFirst
   */
  export type ContractFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contracts.
     */
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Contract findFirstOrThrow
   */
  export type ContractFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contracts.
     */
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Contract findMany
   */
  export type ContractFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contracts to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Contract create
   */
  export type ContractCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * The data needed to create a Contract.
     */
    data: XOR<ContractCreateInput, ContractUncheckedCreateInput>
  }

  /**
   * Contract createMany
   */
  export type ContractCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contracts.
     */
    data: ContractCreateManyInput | ContractCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contract createManyAndReturn
   */
  export type ContractCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * The data used to create many Contracts.
     */
    data: ContractCreateManyInput | ContractCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contract update
   */
  export type ContractUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * The data needed to update a Contract.
     */
    data: XOR<ContractUpdateInput, ContractUncheckedUpdateInput>
    /**
     * Choose, which Contract to update.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract updateMany
   */
  export type ContractUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contracts.
     */
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyInput>
    /**
     * Filter which Contracts to update
     */
    where?: ContractWhereInput
    /**
     * Limit how many Contracts to update.
     */
    limit?: number
  }

  /**
   * Contract updateManyAndReturn
   */
  export type ContractUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * The data used to update Contracts.
     */
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyInput>
    /**
     * Filter which Contracts to update
     */
    where?: ContractWhereInput
    /**
     * Limit how many Contracts to update.
     */
    limit?: number
  }

  /**
   * Contract upsert
   */
  export type ContractUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * The filter to search for the Contract to update in case it exists.
     */
    where: ContractWhereUniqueInput
    /**
     * In case the Contract found by the `where` argument doesn't exist, create a new Contract with this data.
     */
    create: XOR<ContractCreateInput, ContractUncheckedCreateInput>
    /**
     * In case the Contract was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContractUpdateInput, ContractUncheckedUpdateInput>
  }

  /**
   * Contract delete
   */
  export type ContractDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter which Contract to delete.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract deleteMany
   */
  export type ContractDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contracts to delete
     */
    where?: ContractWhereInput
    /**
     * Limit how many Contracts to delete.
     */
    limit?: number
  }

  /**
   * Contract.versions
   */
  export type Contract$versionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractVersion
     */
    select?: ContractVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractVersion
     */
    omit?: ContractVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractVersionInclude<ExtArgs> | null
    where?: ContractVersionWhereInput
    orderBy?: ContractVersionOrderByWithRelationInput | ContractVersionOrderByWithRelationInput[]
    cursor?: ContractVersionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContractVersionScalarFieldEnum | ContractVersionScalarFieldEnum[]
  }

  /**
   * Contract without action
   */
  export type ContractDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
  }


  /**
   * Model ContractVersion
   */

  export type AggregateContractVersion = {
    _count: ContractVersionCountAggregateOutputType | null
    _avg: ContractVersionAvgAggregateOutputType | null
    _sum: ContractVersionSumAggregateOutputType | null
    _min: ContractVersionMinAggregateOutputType | null
    _max: ContractVersionMaxAggregateOutputType | null
  }

  export type ContractVersionAvgAggregateOutputType = {
    version: number | null
  }

  export type ContractVersionSumAggregateOutputType = {
    version: number | null
  }

  export type ContractVersionMinAggregateOutputType = {
    id: string | null
    contractId: string | null
    version: number | null
    content: string | null
    changedBy: string | null
    changeNote: string | null
    createdAt: Date | null
  }

  export type ContractVersionMaxAggregateOutputType = {
    id: string | null
    contractId: string | null
    version: number | null
    content: string | null
    changedBy: string | null
    changeNote: string | null
    createdAt: Date | null
  }

  export type ContractVersionCountAggregateOutputType = {
    id: number
    contractId: number
    version: number
    content: number
    changedBy: number
    changeNote: number
    createdAt: number
    _all: number
  }


  export type ContractVersionAvgAggregateInputType = {
    version?: true
  }

  export type ContractVersionSumAggregateInputType = {
    version?: true
  }

  export type ContractVersionMinAggregateInputType = {
    id?: true
    contractId?: true
    version?: true
    content?: true
    changedBy?: true
    changeNote?: true
    createdAt?: true
  }

  export type ContractVersionMaxAggregateInputType = {
    id?: true
    contractId?: true
    version?: true
    content?: true
    changedBy?: true
    changeNote?: true
    createdAt?: true
  }

  export type ContractVersionCountAggregateInputType = {
    id?: true
    contractId?: true
    version?: true
    content?: true
    changedBy?: true
    changeNote?: true
    createdAt?: true
    _all?: true
  }

  export type ContractVersionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContractVersion to aggregate.
     */
    where?: ContractVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractVersions to fetch.
     */
    orderBy?: ContractVersionOrderByWithRelationInput | ContractVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContractVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContractVersions
    **/
    _count?: true | ContractVersionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContractVersionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContractVersionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContractVersionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContractVersionMaxAggregateInputType
  }

  export type GetContractVersionAggregateType<T extends ContractVersionAggregateArgs> = {
        [P in keyof T & keyof AggregateContractVersion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContractVersion[P]>
      : GetScalarType<T[P], AggregateContractVersion[P]>
  }




  export type ContractVersionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractVersionWhereInput
    orderBy?: ContractVersionOrderByWithAggregationInput | ContractVersionOrderByWithAggregationInput[]
    by: ContractVersionScalarFieldEnum[] | ContractVersionScalarFieldEnum
    having?: ContractVersionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContractVersionCountAggregateInputType | true
    _avg?: ContractVersionAvgAggregateInputType
    _sum?: ContractVersionSumAggregateInputType
    _min?: ContractVersionMinAggregateInputType
    _max?: ContractVersionMaxAggregateInputType
  }

  export type ContractVersionGroupByOutputType = {
    id: string
    contractId: string
    version: number
    content: string
    changedBy: string
    changeNote: string | null
    createdAt: Date
    _count: ContractVersionCountAggregateOutputType | null
    _avg: ContractVersionAvgAggregateOutputType | null
    _sum: ContractVersionSumAggregateOutputType | null
    _min: ContractVersionMinAggregateOutputType | null
    _max: ContractVersionMaxAggregateOutputType | null
  }

  type GetContractVersionGroupByPayload<T extends ContractVersionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContractVersionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContractVersionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContractVersionGroupByOutputType[P]>
            : GetScalarType<T[P], ContractVersionGroupByOutputType[P]>
        }
      >
    >


  export type ContractVersionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractId?: boolean
    version?: boolean
    content?: boolean
    changedBy?: boolean
    changeNote?: boolean
    createdAt?: boolean
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contractVersion"]>

  export type ContractVersionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractId?: boolean
    version?: boolean
    content?: boolean
    changedBy?: boolean
    changeNote?: boolean
    createdAt?: boolean
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contractVersion"]>

  export type ContractVersionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractId?: boolean
    version?: boolean
    content?: boolean
    changedBy?: boolean
    changeNote?: boolean
    createdAt?: boolean
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contractVersion"]>

  export type ContractVersionSelectScalar = {
    id?: boolean
    contractId?: boolean
    version?: boolean
    content?: boolean
    changedBy?: boolean
    changeNote?: boolean
    createdAt?: boolean
  }

  export type ContractVersionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contractId" | "version" | "content" | "changedBy" | "changeNote" | "createdAt", ExtArgs["result"]["contractVersion"]>
  export type ContractVersionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }
  export type ContractVersionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }
  export type ContractVersionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }

  export type $ContractVersionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContractVersion"
    objects: {
      contract: Prisma.$ContractPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      contractId: string
      version: number
      content: string
      changedBy: string
      changeNote: string | null
      createdAt: Date
    }, ExtArgs["result"]["contractVersion"]>
    composites: {}
  }

  type ContractVersionGetPayload<S extends boolean | null | undefined | ContractVersionDefaultArgs> = $Result.GetResult<Prisma.$ContractVersionPayload, S>

  type ContractVersionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContractVersionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContractVersionCountAggregateInputType | true
    }

  export interface ContractVersionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContractVersion'], meta: { name: 'ContractVersion' } }
    /**
     * Find zero or one ContractVersion that matches the filter.
     * @param {ContractVersionFindUniqueArgs} args - Arguments to find a ContractVersion
     * @example
     * // Get one ContractVersion
     * const contractVersion = await prisma.contractVersion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContractVersionFindUniqueArgs>(args: SelectSubset<T, ContractVersionFindUniqueArgs<ExtArgs>>): Prisma__ContractVersionClient<$Result.GetResult<Prisma.$ContractVersionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContractVersion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContractVersionFindUniqueOrThrowArgs} args - Arguments to find a ContractVersion
     * @example
     * // Get one ContractVersion
     * const contractVersion = await prisma.contractVersion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContractVersionFindUniqueOrThrowArgs>(args: SelectSubset<T, ContractVersionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContractVersionClient<$Result.GetResult<Prisma.$ContractVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContractVersion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractVersionFindFirstArgs} args - Arguments to find a ContractVersion
     * @example
     * // Get one ContractVersion
     * const contractVersion = await prisma.contractVersion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContractVersionFindFirstArgs>(args?: SelectSubset<T, ContractVersionFindFirstArgs<ExtArgs>>): Prisma__ContractVersionClient<$Result.GetResult<Prisma.$ContractVersionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContractVersion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractVersionFindFirstOrThrowArgs} args - Arguments to find a ContractVersion
     * @example
     * // Get one ContractVersion
     * const contractVersion = await prisma.contractVersion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContractVersionFindFirstOrThrowArgs>(args?: SelectSubset<T, ContractVersionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContractVersionClient<$Result.GetResult<Prisma.$ContractVersionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContractVersions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractVersionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContractVersions
     * const contractVersions = await prisma.contractVersion.findMany()
     * 
     * // Get first 10 ContractVersions
     * const contractVersions = await prisma.contractVersion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contractVersionWithIdOnly = await prisma.contractVersion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContractVersionFindManyArgs>(args?: SelectSubset<T, ContractVersionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContractVersion.
     * @param {ContractVersionCreateArgs} args - Arguments to create a ContractVersion.
     * @example
     * // Create one ContractVersion
     * const ContractVersion = await prisma.contractVersion.create({
     *   data: {
     *     // ... data to create a ContractVersion
     *   }
     * })
     * 
     */
    create<T extends ContractVersionCreateArgs>(args: SelectSubset<T, ContractVersionCreateArgs<ExtArgs>>): Prisma__ContractVersionClient<$Result.GetResult<Prisma.$ContractVersionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContractVersions.
     * @param {ContractVersionCreateManyArgs} args - Arguments to create many ContractVersions.
     * @example
     * // Create many ContractVersions
     * const contractVersion = await prisma.contractVersion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContractVersionCreateManyArgs>(args?: SelectSubset<T, ContractVersionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContractVersions and returns the data saved in the database.
     * @param {ContractVersionCreateManyAndReturnArgs} args - Arguments to create many ContractVersions.
     * @example
     * // Create many ContractVersions
     * const contractVersion = await prisma.contractVersion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContractVersions and only return the `id`
     * const contractVersionWithIdOnly = await prisma.contractVersion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContractVersionCreateManyAndReturnArgs>(args?: SelectSubset<T, ContractVersionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractVersionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContractVersion.
     * @param {ContractVersionDeleteArgs} args - Arguments to delete one ContractVersion.
     * @example
     * // Delete one ContractVersion
     * const ContractVersion = await prisma.contractVersion.delete({
     *   where: {
     *     // ... filter to delete one ContractVersion
     *   }
     * })
     * 
     */
    delete<T extends ContractVersionDeleteArgs>(args: SelectSubset<T, ContractVersionDeleteArgs<ExtArgs>>): Prisma__ContractVersionClient<$Result.GetResult<Prisma.$ContractVersionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContractVersion.
     * @param {ContractVersionUpdateArgs} args - Arguments to update one ContractVersion.
     * @example
     * // Update one ContractVersion
     * const contractVersion = await prisma.contractVersion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContractVersionUpdateArgs>(args: SelectSubset<T, ContractVersionUpdateArgs<ExtArgs>>): Prisma__ContractVersionClient<$Result.GetResult<Prisma.$ContractVersionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContractVersions.
     * @param {ContractVersionDeleteManyArgs} args - Arguments to filter ContractVersions to delete.
     * @example
     * // Delete a few ContractVersions
     * const { count } = await prisma.contractVersion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContractVersionDeleteManyArgs>(args?: SelectSubset<T, ContractVersionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContractVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractVersionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContractVersions
     * const contractVersion = await prisma.contractVersion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContractVersionUpdateManyArgs>(args: SelectSubset<T, ContractVersionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContractVersions and returns the data updated in the database.
     * @param {ContractVersionUpdateManyAndReturnArgs} args - Arguments to update many ContractVersions.
     * @example
     * // Update many ContractVersions
     * const contractVersion = await prisma.contractVersion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContractVersions and only return the `id`
     * const contractVersionWithIdOnly = await prisma.contractVersion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContractVersionUpdateManyAndReturnArgs>(args: SelectSubset<T, ContractVersionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractVersionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContractVersion.
     * @param {ContractVersionUpsertArgs} args - Arguments to update or create a ContractVersion.
     * @example
     * // Update or create a ContractVersion
     * const contractVersion = await prisma.contractVersion.upsert({
     *   create: {
     *     // ... data to create a ContractVersion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContractVersion we want to update
     *   }
     * })
     */
    upsert<T extends ContractVersionUpsertArgs>(args: SelectSubset<T, ContractVersionUpsertArgs<ExtArgs>>): Prisma__ContractVersionClient<$Result.GetResult<Prisma.$ContractVersionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContractVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractVersionCountArgs} args - Arguments to filter ContractVersions to count.
     * @example
     * // Count the number of ContractVersions
     * const count = await prisma.contractVersion.count({
     *   where: {
     *     // ... the filter for the ContractVersions we want to count
     *   }
     * })
    **/
    count<T extends ContractVersionCountArgs>(
      args?: Subset<T, ContractVersionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContractVersionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContractVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractVersionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContractVersionAggregateArgs>(args: Subset<T, ContractVersionAggregateArgs>): Prisma.PrismaPromise<GetContractVersionAggregateType<T>>

    /**
     * Group by ContractVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractVersionGroupByArgs} args - Group by arguments.
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
      T extends ContractVersionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContractVersionGroupByArgs['orderBy'] }
        : { orderBy?: ContractVersionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContractVersionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContractVersionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContractVersion model
   */
  readonly fields: ContractVersionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContractVersion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContractVersionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contract<T extends ContractDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContractDefaultArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContractVersion model
   */
  interface ContractVersionFieldRefs {
    readonly id: FieldRef<"ContractVersion", 'String'>
    readonly contractId: FieldRef<"ContractVersion", 'String'>
    readonly version: FieldRef<"ContractVersion", 'Int'>
    readonly content: FieldRef<"ContractVersion", 'String'>
    readonly changedBy: FieldRef<"ContractVersion", 'String'>
    readonly changeNote: FieldRef<"ContractVersion", 'String'>
    readonly createdAt: FieldRef<"ContractVersion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContractVersion findUnique
   */
  export type ContractVersionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractVersion
     */
    select?: ContractVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractVersion
     */
    omit?: ContractVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractVersionInclude<ExtArgs> | null
    /**
     * Filter, which ContractVersion to fetch.
     */
    where: ContractVersionWhereUniqueInput
  }

  /**
   * ContractVersion findUniqueOrThrow
   */
  export type ContractVersionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractVersion
     */
    select?: ContractVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractVersion
     */
    omit?: ContractVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractVersionInclude<ExtArgs> | null
    /**
     * Filter, which ContractVersion to fetch.
     */
    where: ContractVersionWhereUniqueInput
  }

  /**
   * ContractVersion findFirst
   */
  export type ContractVersionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractVersion
     */
    select?: ContractVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractVersion
     */
    omit?: ContractVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractVersionInclude<ExtArgs> | null
    /**
     * Filter, which ContractVersion to fetch.
     */
    where?: ContractVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractVersions to fetch.
     */
    orderBy?: ContractVersionOrderByWithRelationInput | ContractVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContractVersions.
     */
    cursor?: ContractVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContractVersions.
     */
    distinct?: ContractVersionScalarFieldEnum | ContractVersionScalarFieldEnum[]
  }

  /**
   * ContractVersion findFirstOrThrow
   */
  export type ContractVersionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractVersion
     */
    select?: ContractVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractVersion
     */
    omit?: ContractVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractVersionInclude<ExtArgs> | null
    /**
     * Filter, which ContractVersion to fetch.
     */
    where?: ContractVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractVersions to fetch.
     */
    orderBy?: ContractVersionOrderByWithRelationInput | ContractVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContractVersions.
     */
    cursor?: ContractVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContractVersions.
     */
    distinct?: ContractVersionScalarFieldEnum | ContractVersionScalarFieldEnum[]
  }

  /**
   * ContractVersion findMany
   */
  export type ContractVersionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractVersion
     */
    select?: ContractVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractVersion
     */
    omit?: ContractVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractVersionInclude<ExtArgs> | null
    /**
     * Filter, which ContractVersions to fetch.
     */
    where?: ContractVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractVersions to fetch.
     */
    orderBy?: ContractVersionOrderByWithRelationInput | ContractVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContractVersions.
     */
    cursor?: ContractVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractVersions.
     */
    skip?: number
    distinct?: ContractVersionScalarFieldEnum | ContractVersionScalarFieldEnum[]
  }

  /**
   * ContractVersion create
   */
  export type ContractVersionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractVersion
     */
    select?: ContractVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractVersion
     */
    omit?: ContractVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractVersionInclude<ExtArgs> | null
    /**
     * The data needed to create a ContractVersion.
     */
    data: XOR<ContractVersionCreateInput, ContractVersionUncheckedCreateInput>
  }

  /**
   * ContractVersion createMany
   */
  export type ContractVersionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContractVersions.
     */
    data: ContractVersionCreateManyInput | ContractVersionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContractVersion createManyAndReturn
   */
  export type ContractVersionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractVersion
     */
    select?: ContractVersionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContractVersion
     */
    omit?: ContractVersionOmit<ExtArgs> | null
    /**
     * The data used to create many ContractVersions.
     */
    data: ContractVersionCreateManyInput | ContractVersionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractVersionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContractVersion update
   */
  export type ContractVersionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractVersion
     */
    select?: ContractVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractVersion
     */
    omit?: ContractVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractVersionInclude<ExtArgs> | null
    /**
     * The data needed to update a ContractVersion.
     */
    data: XOR<ContractVersionUpdateInput, ContractVersionUncheckedUpdateInput>
    /**
     * Choose, which ContractVersion to update.
     */
    where: ContractVersionWhereUniqueInput
  }

  /**
   * ContractVersion updateMany
   */
  export type ContractVersionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContractVersions.
     */
    data: XOR<ContractVersionUpdateManyMutationInput, ContractVersionUncheckedUpdateManyInput>
    /**
     * Filter which ContractVersions to update
     */
    where?: ContractVersionWhereInput
    /**
     * Limit how many ContractVersions to update.
     */
    limit?: number
  }

  /**
   * ContractVersion updateManyAndReturn
   */
  export type ContractVersionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractVersion
     */
    select?: ContractVersionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContractVersion
     */
    omit?: ContractVersionOmit<ExtArgs> | null
    /**
     * The data used to update ContractVersions.
     */
    data: XOR<ContractVersionUpdateManyMutationInput, ContractVersionUncheckedUpdateManyInput>
    /**
     * Filter which ContractVersions to update
     */
    where?: ContractVersionWhereInput
    /**
     * Limit how many ContractVersions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractVersionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContractVersion upsert
   */
  export type ContractVersionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractVersion
     */
    select?: ContractVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractVersion
     */
    omit?: ContractVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractVersionInclude<ExtArgs> | null
    /**
     * The filter to search for the ContractVersion to update in case it exists.
     */
    where: ContractVersionWhereUniqueInput
    /**
     * In case the ContractVersion found by the `where` argument doesn't exist, create a new ContractVersion with this data.
     */
    create: XOR<ContractVersionCreateInput, ContractVersionUncheckedCreateInput>
    /**
     * In case the ContractVersion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContractVersionUpdateInput, ContractVersionUncheckedUpdateInput>
  }

  /**
   * ContractVersion delete
   */
  export type ContractVersionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractVersion
     */
    select?: ContractVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractVersion
     */
    omit?: ContractVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractVersionInclude<ExtArgs> | null
    /**
     * Filter which ContractVersion to delete.
     */
    where: ContractVersionWhereUniqueInput
  }

  /**
   * ContractVersion deleteMany
   */
  export type ContractVersionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContractVersions to delete
     */
    where?: ContractVersionWhereInput
    /**
     * Limit how many ContractVersions to delete.
     */
    limit?: number
  }

  /**
   * ContractVersion without action
   */
  export type ContractVersionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractVersion
     */
    select?: ContractVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractVersion
     */
    omit?: ContractVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractVersionInclude<ExtArgs> | null
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


  export const ContractScalarFieldEnum: {
    id: 'id',
    propertyId: 'propertyId',
    buyerId: 'buyerId',
    sellerId: 'sellerId',
    agentId: 'agentId',
    notaryId: 'notaryId',
    type: 'type',
    status: 'status',
    contractNumber: 'contractNumber',
    title: 'title',
    totalAmount: 'totalAmount',
    currency: 'currency',
    terms: 'terms',
    specialConditions: 'specialConditions',
    startDate: 'startDate',
    endDate: 'endDate',
    signingDeadline: 'signingDeadline',
    monthlyRent: 'monthlyRent',
    deposit: 'deposit',
    rentDuration: 'rentDuration',
    buyerSignedAt: 'buyerSignedAt',
    sellerSignedAt: 'sellerSignedAt',
    notarySignedAt: 'notarySignedAt',
    documentUrl: 'documentUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContractScalarFieldEnum = (typeof ContractScalarFieldEnum)[keyof typeof ContractScalarFieldEnum]


  export const ContractVersionScalarFieldEnum: {
    id: 'id',
    contractId: 'contractId',
    version: 'version',
    content: 'content',
    changedBy: 'changedBy',
    changeNote: 'changeNote',
    createdAt: 'createdAt'
  };

  export type ContractVersionScalarFieldEnum = (typeof ContractVersionScalarFieldEnum)[keyof typeof ContractVersionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'ContractType'
   */
  export type EnumContractTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContractType'>
    


  /**
   * Reference to a field of type 'ContractType[]'
   */
  export type ListEnumContractTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContractType[]'>
    


  /**
   * Reference to a field of type 'ContractStatus'
   */
  export type EnumContractStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContractStatus'>
    


  /**
   * Reference to a field of type 'ContractStatus[]'
   */
  export type ListEnumContractStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContractStatus[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ContractWhereInput = {
    AND?: ContractWhereInput | ContractWhereInput[]
    OR?: ContractWhereInput[]
    NOT?: ContractWhereInput | ContractWhereInput[]
    id?: StringFilter<"Contract"> | string
    propertyId?: StringFilter<"Contract"> | string
    buyerId?: StringFilter<"Contract"> | string
    sellerId?: StringFilter<"Contract"> | string
    agentId?: StringNullableFilter<"Contract"> | string | null
    notaryId?: StringNullableFilter<"Contract"> | string | null
    type?: EnumContractTypeFilter<"Contract"> | $Enums.ContractType
    status?: EnumContractStatusFilter<"Contract"> | $Enums.ContractStatus
    contractNumber?: StringNullableFilter<"Contract"> | string | null
    title?: StringFilter<"Contract"> | string
    totalAmount?: DecimalFilter<"Contract"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Contract"> | string
    terms?: StringNullableFilter<"Contract"> | string | null
    specialConditions?: StringNullableFilter<"Contract"> | string | null
    startDate?: DateTimeNullableFilter<"Contract"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Contract"> | Date | string | null
    signingDeadline?: DateTimeNullableFilter<"Contract"> | Date | string | null
    monthlyRent?: DecimalNullableFilter<"Contract"> | Decimal | DecimalJsLike | number | string | null
    deposit?: DecimalNullableFilter<"Contract"> | Decimal | DecimalJsLike | number | string | null
    rentDuration?: IntNullableFilter<"Contract"> | number | null
    buyerSignedAt?: DateTimeNullableFilter<"Contract"> | Date | string | null
    sellerSignedAt?: DateTimeNullableFilter<"Contract"> | Date | string | null
    notarySignedAt?: DateTimeNullableFilter<"Contract"> | Date | string | null
    documentUrl?: StringNullableFilter<"Contract"> | string | null
    createdAt?: DateTimeFilter<"Contract"> | Date | string
    updatedAt?: DateTimeFilter<"Contract"> | Date | string
    versions?: ContractVersionListRelationFilter
  }

  export type ContractOrderByWithRelationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    buyerId?: SortOrder
    sellerId?: SortOrder
    agentId?: SortOrderInput | SortOrder
    notaryId?: SortOrderInput | SortOrder
    type?: SortOrder
    status?: SortOrder
    contractNumber?: SortOrderInput | SortOrder
    title?: SortOrder
    totalAmount?: SortOrder
    currency?: SortOrder
    terms?: SortOrderInput | SortOrder
    specialConditions?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    signingDeadline?: SortOrderInput | SortOrder
    monthlyRent?: SortOrderInput | SortOrder
    deposit?: SortOrderInput | SortOrder
    rentDuration?: SortOrderInput | SortOrder
    buyerSignedAt?: SortOrderInput | SortOrder
    sellerSignedAt?: SortOrderInput | SortOrder
    notarySignedAt?: SortOrderInput | SortOrder
    documentUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    versions?: ContractVersionOrderByRelationAggregateInput
  }

  export type ContractWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    contractNumber?: string
    AND?: ContractWhereInput | ContractWhereInput[]
    OR?: ContractWhereInput[]
    NOT?: ContractWhereInput | ContractWhereInput[]
    propertyId?: StringFilter<"Contract"> | string
    buyerId?: StringFilter<"Contract"> | string
    sellerId?: StringFilter<"Contract"> | string
    agentId?: StringNullableFilter<"Contract"> | string | null
    notaryId?: StringNullableFilter<"Contract"> | string | null
    type?: EnumContractTypeFilter<"Contract"> | $Enums.ContractType
    status?: EnumContractStatusFilter<"Contract"> | $Enums.ContractStatus
    title?: StringFilter<"Contract"> | string
    totalAmount?: DecimalFilter<"Contract"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Contract"> | string
    terms?: StringNullableFilter<"Contract"> | string | null
    specialConditions?: StringNullableFilter<"Contract"> | string | null
    startDate?: DateTimeNullableFilter<"Contract"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Contract"> | Date | string | null
    signingDeadline?: DateTimeNullableFilter<"Contract"> | Date | string | null
    monthlyRent?: DecimalNullableFilter<"Contract"> | Decimal | DecimalJsLike | number | string | null
    deposit?: DecimalNullableFilter<"Contract"> | Decimal | DecimalJsLike | number | string | null
    rentDuration?: IntNullableFilter<"Contract"> | number | null
    buyerSignedAt?: DateTimeNullableFilter<"Contract"> | Date | string | null
    sellerSignedAt?: DateTimeNullableFilter<"Contract"> | Date | string | null
    notarySignedAt?: DateTimeNullableFilter<"Contract"> | Date | string | null
    documentUrl?: StringNullableFilter<"Contract"> | string | null
    createdAt?: DateTimeFilter<"Contract"> | Date | string
    updatedAt?: DateTimeFilter<"Contract"> | Date | string
    versions?: ContractVersionListRelationFilter
  }, "id" | "contractNumber">

  export type ContractOrderByWithAggregationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    buyerId?: SortOrder
    sellerId?: SortOrder
    agentId?: SortOrderInput | SortOrder
    notaryId?: SortOrderInput | SortOrder
    type?: SortOrder
    status?: SortOrder
    contractNumber?: SortOrderInput | SortOrder
    title?: SortOrder
    totalAmount?: SortOrder
    currency?: SortOrder
    terms?: SortOrderInput | SortOrder
    specialConditions?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    signingDeadline?: SortOrderInput | SortOrder
    monthlyRent?: SortOrderInput | SortOrder
    deposit?: SortOrderInput | SortOrder
    rentDuration?: SortOrderInput | SortOrder
    buyerSignedAt?: SortOrderInput | SortOrder
    sellerSignedAt?: SortOrderInput | SortOrder
    notarySignedAt?: SortOrderInput | SortOrder
    documentUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContractCountOrderByAggregateInput
    _avg?: ContractAvgOrderByAggregateInput
    _max?: ContractMaxOrderByAggregateInput
    _min?: ContractMinOrderByAggregateInput
    _sum?: ContractSumOrderByAggregateInput
  }

  export type ContractScalarWhereWithAggregatesInput = {
    AND?: ContractScalarWhereWithAggregatesInput | ContractScalarWhereWithAggregatesInput[]
    OR?: ContractScalarWhereWithAggregatesInput[]
    NOT?: ContractScalarWhereWithAggregatesInput | ContractScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Contract"> | string
    propertyId?: StringWithAggregatesFilter<"Contract"> | string
    buyerId?: StringWithAggregatesFilter<"Contract"> | string
    sellerId?: StringWithAggregatesFilter<"Contract"> | string
    agentId?: StringNullableWithAggregatesFilter<"Contract"> | string | null
    notaryId?: StringNullableWithAggregatesFilter<"Contract"> | string | null
    type?: EnumContractTypeWithAggregatesFilter<"Contract"> | $Enums.ContractType
    status?: EnumContractStatusWithAggregatesFilter<"Contract"> | $Enums.ContractStatus
    contractNumber?: StringNullableWithAggregatesFilter<"Contract"> | string | null
    title?: StringWithAggregatesFilter<"Contract"> | string
    totalAmount?: DecimalWithAggregatesFilter<"Contract"> | Decimal | DecimalJsLike | number | string
    currency?: StringWithAggregatesFilter<"Contract"> | string
    terms?: StringNullableWithAggregatesFilter<"Contract"> | string | null
    specialConditions?: StringNullableWithAggregatesFilter<"Contract"> | string | null
    startDate?: DateTimeNullableWithAggregatesFilter<"Contract"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"Contract"> | Date | string | null
    signingDeadline?: DateTimeNullableWithAggregatesFilter<"Contract"> | Date | string | null
    monthlyRent?: DecimalNullableWithAggregatesFilter<"Contract"> | Decimal | DecimalJsLike | number | string | null
    deposit?: DecimalNullableWithAggregatesFilter<"Contract"> | Decimal | DecimalJsLike | number | string | null
    rentDuration?: IntNullableWithAggregatesFilter<"Contract"> | number | null
    buyerSignedAt?: DateTimeNullableWithAggregatesFilter<"Contract"> | Date | string | null
    sellerSignedAt?: DateTimeNullableWithAggregatesFilter<"Contract"> | Date | string | null
    notarySignedAt?: DateTimeNullableWithAggregatesFilter<"Contract"> | Date | string | null
    documentUrl?: StringNullableWithAggregatesFilter<"Contract"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Contract"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Contract"> | Date | string
  }

  export type ContractVersionWhereInput = {
    AND?: ContractVersionWhereInput | ContractVersionWhereInput[]
    OR?: ContractVersionWhereInput[]
    NOT?: ContractVersionWhereInput | ContractVersionWhereInput[]
    id?: StringFilter<"ContractVersion"> | string
    contractId?: StringFilter<"ContractVersion"> | string
    version?: IntFilter<"ContractVersion"> | number
    content?: StringFilter<"ContractVersion"> | string
    changedBy?: StringFilter<"ContractVersion"> | string
    changeNote?: StringNullableFilter<"ContractVersion"> | string | null
    createdAt?: DateTimeFilter<"ContractVersion"> | Date | string
    contract?: XOR<ContractScalarRelationFilter, ContractWhereInput>
  }

  export type ContractVersionOrderByWithRelationInput = {
    id?: SortOrder
    contractId?: SortOrder
    version?: SortOrder
    content?: SortOrder
    changedBy?: SortOrder
    changeNote?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    contract?: ContractOrderByWithRelationInput
  }

  export type ContractVersionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    contractId_version?: ContractVersionContractIdVersionCompoundUniqueInput
    AND?: ContractVersionWhereInput | ContractVersionWhereInput[]
    OR?: ContractVersionWhereInput[]
    NOT?: ContractVersionWhereInput | ContractVersionWhereInput[]
    contractId?: StringFilter<"ContractVersion"> | string
    version?: IntFilter<"ContractVersion"> | number
    content?: StringFilter<"ContractVersion"> | string
    changedBy?: StringFilter<"ContractVersion"> | string
    changeNote?: StringNullableFilter<"ContractVersion"> | string | null
    createdAt?: DateTimeFilter<"ContractVersion"> | Date | string
    contract?: XOR<ContractScalarRelationFilter, ContractWhereInput>
  }, "id" | "contractId_version">

  export type ContractVersionOrderByWithAggregationInput = {
    id?: SortOrder
    contractId?: SortOrder
    version?: SortOrder
    content?: SortOrder
    changedBy?: SortOrder
    changeNote?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ContractVersionCountOrderByAggregateInput
    _avg?: ContractVersionAvgOrderByAggregateInput
    _max?: ContractVersionMaxOrderByAggregateInput
    _min?: ContractVersionMinOrderByAggregateInput
    _sum?: ContractVersionSumOrderByAggregateInput
  }

  export type ContractVersionScalarWhereWithAggregatesInput = {
    AND?: ContractVersionScalarWhereWithAggregatesInput | ContractVersionScalarWhereWithAggregatesInput[]
    OR?: ContractVersionScalarWhereWithAggregatesInput[]
    NOT?: ContractVersionScalarWhereWithAggregatesInput | ContractVersionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContractVersion"> | string
    contractId?: StringWithAggregatesFilter<"ContractVersion"> | string
    version?: IntWithAggregatesFilter<"ContractVersion"> | number
    content?: StringWithAggregatesFilter<"ContractVersion"> | string
    changedBy?: StringWithAggregatesFilter<"ContractVersion"> | string
    changeNote?: StringNullableWithAggregatesFilter<"ContractVersion"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ContractVersion"> | Date | string
  }

  export type ContractCreateInput = {
    id?: string
    propertyId: string
    buyerId: string
    sellerId: string
    agentId?: string | null
    notaryId?: string | null
    type: $Enums.ContractType
    status?: $Enums.ContractStatus
    contractNumber?: string | null
    title: string
    totalAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    terms?: string | null
    specialConditions?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    signingDeadline?: Date | string | null
    monthlyRent?: Decimal | DecimalJsLike | number | string | null
    deposit?: Decimal | DecimalJsLike | number | string | null
    rentDuration?: number | null
    buyerSignedAt?: Date | string | null
    sellerSignedAt?: Date | string | null
    notarySignedAt?: Date | string | null
    documentUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: ContractVersionCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateInput = {
    id?: string
    propertyId: string
    buyerId: string
    sellerId: string
    agentId?: string | null
    notaryId?: string | null
    type: $Enums.ContractType
    status?: $Enums.ContractStatus
    contractNumber?: string | null
    title: string
    totalAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    terms?: string | null
    specialConditions?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    signingDeadline?: Date | string | null
    monthlyRent?: Decimal | DecimalJsLike | number | string | null
    deposit?: Decimal | DecimalJsLike | number | string | null
    rentDuration?: number | null
    buyerSignedAt?: Date | string | null
    sellerSignedAt?: Date | string | null
    notarySignedAt?: Date | string | null
    documentUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: ContractVersionUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    notaryId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    contractNumber?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    specialConditions?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    signingDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monthlyRent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deposit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rentDuration?: NullableIntFieldUpdateOperationsInput | number | null
    buyerSignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sellerSignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notarySignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: ContractVersionUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    notaryId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    contractNumber?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    specialConditions?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    signingDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monthlyRent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deposit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rentDuration?: NullableIntFieldUpdateOperationsInput | number | null
    buyerSignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sellerSignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notarySignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: ContractVersionUncheckedUpdateManyWithoutContractNestedInput
  }

  export type ContractCreateManyInput = {
    id?: string
    propertyId: string
    buyerId: string
    sellerId: string
    agentId?: string | null
    notaryId?: string | null
    type: $Enums.ContractType
    status?: $Enums.ContractStatus
    contractNumber?: string | null
    title: string
    totalAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    terms?: string | null
    specialConditions?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    signingDeadline?: Date | string | null
    monthlyRent?: Decimal | DecimalJsLike | number | string | null
    deposit?: Decimal | DecimalJsLike | number | string | null
    rentDuration?: number | null
    buyerSignedAt?: Date | string | null
    sellerSignedAt?: Date | string | null
    notarySignedAt?: Date | string | null
    documentUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContractUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    notaryId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    contractNumber?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    specialConditions?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    signingDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monthlyRent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deposit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rentDuration?: NullableIntFieldUpdateOperationsInput | number | null
    buyerSignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sellerSignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notarySignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    notaryId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    contractNumber?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    specialConditions?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    signingDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monthlyRent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deposit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rentDuration?: NullableIntFieldUpdateOperationsInput | number | null
    buyerSignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sellerSignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notarySignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractVersionCreateInput = {
    id?: string
    version: number
    content: string
    changedBy: string
    changeNote?: string | null
    createdAt?: Date | string
    contract: ContractCreateNestedOneWithoutVersionsInput
  }

  export type ContractVersionUncheckedCreateInput = {
    id?: string
    contractId: string
    version: number
    content: string
    changedBy: string
    changeNote?: string | null
    createdAt?: Date | string
  }

  export type ContractVersionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    changedBy?: StringFieldUpdateOperationsInput | string
    changeNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contract?: ContractUpdateOneRequiredWithoutVersionsNestedInput
  }

  export type ContractVersionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractId?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    changedBy?: StringFieldUpdateOperationsInput | string
    changeNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractVersionCreateManyInput = {
    id?: string
    contractId: string
    version: number
    content: string
    changedBy: string
    changeNote?: string | null
    createdAt?: Date | string
  }

  export type ContractVersionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    changedBy?: StringFieldUpdateOperationsInput | string
    changeNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractVersionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractId?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    changedBy?: StringFieldUpdateOperationsInput | string
    changeNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumContractTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractType | EnumContractTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContractType[] | ListEnumContractTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContractType[] | ListEnumContractTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContractTypeFilter<$PrismaModel> | $Enums.ContractType
  }

  export type EnumContractStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractStatus | EnumContractStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ContractStatus[] | ListEnumContractStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContractStatus[] | ListEnumContractStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumContractStatusFilter<$PrismaModel> | $Enums.ContractStatus
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type ContractVersionListRelationFilter = {
    every?: ContractVersionWhereInput
    some?: ContractVersionWhereInput
    none?: ContractVersionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ContractVersionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContractCountOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    buyerId?: SortOrder
    sellerId?: SortOrder
    agentId?: SortOrder
    notaryId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    contractNumber?: SortOrder
    title?: SortOrder
    totalAmount?: SortOrder
    currency?: SortOrder
    terms?: SortOrder
    specialConditions?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    signingDeadline?: SortOrder
    monthlyRent?: SortOrder
    deposit?: SortOrder
    rentDuration?: SortOrder
    buyerSignedAt?: SortOrder
    sellerSignedAt?: SortOrder
    notarySignedAt?: SortOrder
    documentUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContractAvgOrderByAggregateInput = {
    totalAmount?: SortOrder
    monthlyRent?: SortOrder
    deposit?: SortOrder
    rentDuration?: SortOrder
  }

  export type ContractMaxOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    buyerId?: SortOrder
    sellerId?: SortOrder
    agentId?: SortOrder
    notaryId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    contractNumber?: SortOrder
    title?: SortOrder
    totalAmount?: SortOrder
    currency?: SortOrder
    terms?: SortOrder
    specialConditions?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    signingDeadline?: SortOrder
    monthlyRent?: SortOrder
    deposit?: SortOrder
    rentDuration?: SortOrder
    buyerSignedAt?: SortOrder
    sellerSignedAt?: SortOrder
    notarySignedAt?: SortOrder
    documentUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContractMinOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    buyerId?: SortOrder
    sellerId?: SortOrder
    agentId?: SortOrder
    notaryId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    contractNumber?: SortOrder
    title?: SortOrder
    totalAmount?: SortOrder
    currency?: SortOrder
    terms?: SortOrder
    specialConditions?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    signingDeadline?: SortOrder
    monthlyRent?: SortOrder
    deposit?: SortOrder
    rentDuration?: SortOrder
    buyerSignedAt?: SortOrder
    sellerSignedAt?: SortOrder
    notarySignedAt?: SortOrder
    documentUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContractSumOrderByAggregateInput = {
    totalAmount?: SortOrder
    monthlyRent?: SortOrder
    deposit?: SortOrder
    rentDuration?: SortOrder
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

  export type EnumContractTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractType | EnumContractTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContractType[] | ListEnumContractTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContractType[] | ListEnumContractTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContractTypeWithAggregatesFilter<$PrismaModel> | $Enums.ContractType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContractTypeFilter<$PrismaModel>
    _max?: NestedEnumContractTypeFilter<$PrismaModel>
  }

  export type EnumContractStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractStatus | EnumContractStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ContractStatus[] | ListEnumContractStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContractStatus[] | ListEnumContractStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumContractStatusWithAggregatesFilter<$PrismaModel> | $Enums.ContractStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContractStatusFilter<$PrismaModel>
    _max?: NestedEnumContractStatusFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ContractScalarRelationFilter = {
    is?: ContractWhereInput
    isNot?: ContractWhereInput
  }

  export type ContractVersionContractIdVersionCompoundUniqueInput = {
    contractId: string
    version: number
  }

  export type ContractVersionCountOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    version?: SortOrder
    content?: SortOrder
    changedBy?: SortOrder
    changeNote?: SortOrder
    createdAt?: SortOrder
  }

  export type ContractVersionAvgOrderByAggregateInput = {
    version?: SortOrder
  }

  export type ContractVersionMaxOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    version?: SortOrder
    content?: SortOrder
    changedBy?: SortOrder
    changeNote?: SortOrder
    createdAt?: SortOrder
  }

  export type ContractVersionMinOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    version?: SortOrder
    content?: SortOrder
    changedBy?: SortOrder
    changeNote?: SortOrder
    createdAt?: SortOrder
  }

  export type ContractVersionSumOrderByAggregateInput = {
    version?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ContractVersionCreateNestedManyWithoutContractInput = {
    create?: XOR<ContractVersionCreateWithoutContractInput, ContractVersionUncheckedCreateWithoutContractInput> | ContractVersionCreateWithoutContractInput[] | ContractVersionUncheckedCreateWithoutContractInput[]
    connectOrCreate?: ContractVersionCreateOrConnectWithoutContractInput | ContractVersionCreateOrConnectWithoutContractInput[]
    createMany?: ContractVersionCreateManyContractInputEnvelope
    connect?: ContractVersionWhereUniqueInput | ContractVersionWhereUniqueInput[]
  }

  export type ContractVersionUncheckedCreateNestedManyWithoutContractInput = {
    create?: XOR<ContractVersionCreateWithoutContractInput, ContractVersionUncheckedCreateWithoutContractInput> | ContractVersionCreateWithoutContractInput[] | ContractVersionUncheckedCreateWithoutContractInput[]
    connectOrCreate?: ContractVersionCreateOrConnectWithoutContractInput | ContractVersionCreateOrConnectWithoutContractInput[]
    createMany?: ContractVersionCreateManyContractInputEnvelope
    connect?: ContractVersionWhereUniqueInput | ContractVersionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumContractTypeFieldUpdateOperationsInput = {
    set?: $Enums.ContractType
  }

  export type EnumContractStatusFieldUpdateOperationsInput = {
    set?: $Enums.ContractStatus
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ContractVersionUpdateManyWithoutContractNestedInput = {
    create?: XOR<ContractVersionCreateWithoutContractInput, ContractVersionUncheckedCreateWithoutContractInput> | ContractVersionCreateWithoutContractInput[] | ContractVersionUncheckedCreateWithoutContractInput[]
    connectOrCreate?: ContractVersionCreateOrConnectWithoutContractInput | ContractVersionCreateOrConnectWithoutContractInput[]
    upsert?: ContractVersionUpsertWithWhereUniqueWithoutContractInput | ContractVersionUpsertWithWhereUniqueWithoutContractInput[]
    createMany?: ContractVersionCreateManyContractInputEnvelope
    set?: ContractVersionWhereUniqueInput | ContractVersionWhereUniqueInput[]
    disconnect?: ContractVersionWhereUniqueInput | ContractVersionWhereUniqueInput[]
    delete?: ContractVersionWhereUniqueInput | ContractVersionWhereUniqueInput[]
    connect?: ContractVersionWhereUniqueInput | ContractVersionWhereUniqueInput[]
    update?: ContractVersionUpdateWithWhereUniqueWithoutContractInput | ContractVersionUpdateWithWhereUniqueWithoutContractInput[]
    updateMany?: ContractVersionUpdateManyWithWhereWithoutContractInput | ContractVersionUpdateManyWithWhereWithoutContractInput[]
    deleteMany?: ContractVersionScalarWhereInput | ContractVersionScalarWhereInput[]
  }

  export type ContractVersionUncheckedUpdateManyWithoutContractNestedInput = {
    create?: XOR<ContractVersionCreateWithoutContractInput, ContractVersionUncheckedCreateWithoutContractInput> | ContractVersionCreateWithoutContractInput[] | ContractVersionUncheckedCreateWithoutContractInput[]
    connectOrCreate?: ContractVersionCreateOrConnectWithoutContractInput | ContractVersionCreateOrConnectWithoutContractInput[]
    upsert?: ContractVersionUpsertWithWhereUniqueWithoutContractInput | ContractVersionUpsertWithWhereUniqueWithoutContractInput[]
    createMany?: ContractVersionCreateManyContractInputEnvelope
    set?: ContractVersionWhereUniqueInput | ContractVersionWhereUniqueInput[]
    disconnect?: ContractVersionWhereUniqueInput | ContractVersionWhereUniqueInput[]
    delete?: ContractVersionWhereUniqueInput | ContractVersionWhereUniqueInput[]
    connect?: ContractVersionWhereUniqueInput | ContractVersionWhereUniqueInput[]
    update?: ContractVersionUpdateWithWhereUniqueWithoutContractInput | ContractVersionUpdateWithWhereUniqueWithoutContractInput[]
    updateMany?: ContractVersionUpdateManyWithWhereWithoutContractInput | ContractVersionUpdateManyWithWhereWithoutContractInput[]
    deleteMany?: ContractVersionScalarWhereInput | ContractVersionScalarWhereInput[]
  }

  export type ContractCreateNestedOneWithoutVersionsInput = {
    create?: XOR<ContractCreateWithoutVersionsInput, ContractUncheckedCreateWithoutVersionsInput>
    connectOrCreate?: ContractCreateOrConnectWithoutVersionsInput
    connect?: ContractWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ContractUpdateOneRequiredWithoutVersionsNestedInput = {
    create?: XOR<ContractCreateWithoutVersionsInput, ContractUncheckedCreateWithoutVersionsInput>
    connectOrCreate?: ContractCreateOrConnectWithoutVersionsInput
    upsert?: ContractUpsertWithoutVersionsInput
    connect?: ContractWhereUniqueInput
    update?: XOR<XOR<ContractUpdateToOneWithWhereWithoutVersionsInput, ContractUpdateWithoutVersionsInput>, ContractUncheckedUpdateWithoutVersionsInput>
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

  export type NestedEnumContractTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractType | EnumContractTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContractType[] | ListEnumContractTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContractType[] | ListEnumContractTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContractTypeFilter<$PrismaModel> | $Enums.ContractType
  }

  export type NestedEnumContractStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractStatus | EnumContractStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ContractStatus[] | ListEnumContractStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContractStatus[] | ListEnumContractStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumContractStatusFilter<$PrismaModel> | $Enums.ContractStatus
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
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

  export type NestedEnumContractTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractType | EnumContractTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContractType[] | ListEnumContractTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContractType[] | ListEnumContractTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContractTypeWithAggregatesFilter<$PrismaModel> | $Enums.ContractType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContractTypeFilter<$PrismaModel>
    _max?: NestedEnumContractTypeFilter<$PrismaModel>
  }

  export type NestedEnumContractStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractStatus | EnumContractStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ContractStatus[] | ListEnumContractStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContractStatus[] | ListEnumContractStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumContractStatusWithAggregatesFilter<$PrismaModel> | $Enums.ContractStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContractStatusFilter<$PrismaModel>
    _max?: NestedEnumContractStatusFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ContractVersionCreateWithoutContractInput = {
    id?: string
    version: number
    content: string
    changedBy: string
    changeNote?: string | null
    createdAt?: Date | string
  }

  export type ContractVersionUncheckedCreateWithoutContractInput = {
    id?: string
    version: number
    content: string
    changedBy: string
    changeNote?: string | null
    createdAt?: Date | string
  }

  export type ContractVersionCreateOrConnectWithoutContractInput = {
    where: ContractVersionWhereUniqueInput
    create: XOR<ContractVersionCreateWithoutContractInput, ContractVersionUncheckedCreateWithoutContractInput>
  }

  export type ContractVersionCreateManyContractInputEnvelope = {
    data: ContractVersionCreateManyContractInput | ContractVersionCreateManyContractInput[]
    skipDuplicates?: boolean
  }

  export type ContractVersionUpsertWithWhereUniqueWithoutContractInput = {
    where: ContractVersionWhereUniqueInput
    update: XOR<ContractVersionUpdateWithoutContractInput, ContractVersionUncheckedUpdateWithoutContractInput>
    create: XOR<ContractVersionCreateWithoutContractInput, ContractVersionUncheckedCreateWithoutContractInput>
  }

  export type ContractVersionUpdateWithWhereUniqueWithoutContractInput = {
    where: ContractVersionWhereUniqueInput
    data: XOR<ContractVersionUpdateWithoutContractInput, ContractVersionUncheckedUpdateWithoutContractInput>
  }

  export type ContractVersionUpdateManyWithWhereWithoutContractInput = {
    where: ContractVersionScalarWhereInput
    data: XOR<ContractVersionUpdateManyMutationInput, ContractVersionUncheckedUpdateManyWithoutContractInput>
  }

  export type ContractVersionScalarWhereInput = {
    AND?: ContractVersionScalarWhereInput | ContractVersionScalarWhereInput[]
    OR?: ContractVersionScalarWhereInput[]
    NOT?: ContractVersionScalarWhereInput | ContractVersionScalarWhereInput[]
    id?: StringFilter<"ContractVersion"> | string
    contractId?: StringFilter<"ContractVersion"> | string
    version?: IntFilter<"ContractVersion"> | number
    content?: StringFilter<"ContractVersion"> | string
    changedBy?: StringFilter<"ContractVersion"> | string
    changeNote?: StringNullableFilter<"ContractVersion"> | string | null
    createdAt?: DateTimeFilter<"ContractVersion"> | Date | string
  }

  export type ContractCreateWithoutVersionsInput = {
    id?: string
    propertyId: string
    buyerId: string
    sellerId: string
    agentId?: string | null
    notaryId?: string | null
    type: $Enums.ContractType
    status?: $Enums.ContractStatus
    contractNumber?: string | null
    title: string
    totalAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    terms?: string | null
    specialConditions?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    signingDeadline?: Date | string | null
    monthlyRent?: Decimal | DecimalJsLike | number | string | null
    deposit?: Decimal | DecimalJsLike | number | string | null
    rentDuration?: number | null
    buyerSignedAt?: Date | string | null
    sellerSignedAt?: Date | string | null
    notarySignedAt?: Date | string | null
    documentUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContractUncheckedCreateWithoutVersionsInput = {
    id?: string
    propertyId: string
    buyerId: string
    sellerId: string
    agentId?: string | null
    notaryId?: string | null
    type: $Enums.ContractType
    status?: $Enums.ContractStatus
    contractNumber?: string | null
    title: string
    totalAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    terms?: string | null
    specialConditions?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    signingDeadline?: Date | string | null
    monthlyRent?: Decimal | DecimalJsLike | number | string | null
    deposit?: Decimal | DecimalJsLike | number | string | null
    rentDuration?: number | null
    buyerSignedAt?: Date | string | null
    sellerSignedAt?: Date | string | null
    notarySignedAt?: Date | string | null
    documentUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContractCreateOrConnectWithoutVersionsInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutVersionsInput, ContractUncheckedCreateWithoutVersionsInput>
  }

  export type ContractUpsertWithoutVersionsInput = {
    update: XOR<ContractUpdateWithoutVersionsInput, ContractUncheckedUpdateWithoutVersionsInput>
    create: XOR<ContractCreateWithoutVersionsInput, ContractUncheckedCreateWithoutVersionsInput>
    where?: ContractWhereInput
  }

  export type ContractUpdateToOneWithWhereWithoutVersionsInput = {
    where?: ContractWhereInput
    data: XOR<ContractUpdateWithoutVersionsInput, ContractUncheckedUpdateWithoutVersionsInput>
  }

  export type ContractUpdateWithoutVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    notaryId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    contractNumber?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    specialConditions?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    signingDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monthlyRent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deposit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rentDuration?: NullableIntFieldUpdateOperationsInput | number | null
    buyerSignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sellerSignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notarySignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractUncheckedUpdateWithoutVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    notaryId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    contractNumber?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    specialConditions?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    signingDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monthlyRent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deposit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rentDuration?: NullableIntFieldUpdateOperationsInput | number | null
    buyerSignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sellerSignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notarySignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractVersionCreateManyContractInput = {
    id?: string
    version: number
    content: string
    changedBy: string
    changeNote?: string | null
    createdAt?: Date | string
  }

  export type ContractVersionUpdateWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    changedBy?: StringFieldUpdateOperationsInput | string
    changeNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractVersionUncheckedUpdateWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    changedBy?: StringFieldUpdateOperationsInput | string
    changeNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractVersionUncheckedUpdateManyWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    changedBy?: StringFieldUpdateOperationsInput | string
    changeNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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