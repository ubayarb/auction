
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
 * Model Auction
 * 
 */
export type Auction = $Result.DefaultSelection<Prisma.$AuctionPayload>
/**
 * Model Bid
 * 
 */
export type Bid = $Result.DefaultSelection<Prisma.$BidPayload>
/**
 * Model AuctionDeposit
 * 
 */
export type AuctionDeposit = $Result.DefaultSelection<Prisma.$AuctionDepositPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AuctionType: {
  ENGLISH: 'ENGLISH',
  DUTCH: 'DUTCH',
  SEALED: 'SEALED',
  VICKREY: 'VICKREY'
};

export type AuctionType = (typeof AuctionType)[keyof typeof AuctionType]


export const AuctionStatus: {
  DRAFT: 'DRAFT',
  PENDING_APPROVAL: 'PENDING_APPROVAL',
  APPROVED: 'APPROVED',
  SCHEDULED: 'SCHEDULED',
  ACTIVE: 'ACTIVE',
  EXTENDED: 'EXTENDED',
  ENDED: 'ENDED',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
  FAILED: 'FAILED'
};

export type AuctionStatus = (typeof AuctionStatus)[keyof typeof AuctionStatus]


export const BidStatus: {
  ACTIVE: 'ACTIVE',
  OUTBID: 'OUTBID',
  WINNING: 'WINNING',
  WON: 'WON',
  CANCELLED: 'CANCELLED',
  INVALID: 'INVALID'
};

export type BidStatus = (typeof BidStatus)[keyof typeof BidStatus]


export const DepositStatus: {
  PENDING: 'PENDING',
  PAID: 'PAID',
  REFUNDED: 'REFUNDED',
  FORFEITED: 'FORFEITED'
};

export type DepositStatus = (typeof DepositStatus)[keyof typeof DepositStatus]

}

export type AuctionType = $Enums.AuctionType

export const AuctionType: typeof $Enums.AuctionType

export type AuctionStatus = $Enums.AuctionStatus

export const AuctionStatus: typeof $Enums.AuctionStatus

export type BidStatus = $Enums.BidStatus

export const BidStatus: typeof $Enums.BidStatus

export type DepositStatus = $Enums.DepositStatus

export const DepositStatus: typeof $Enums.DepositStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Auctions
 * const auctions = await prisma.auction.findMany()
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
   * // Fetch zero or more Auctions
   * const auctions = await prisma.auction.findMany()
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
   * `prisma.auction`: Exposes CRUD operations for the **Auction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Auctions
    * const auctions = await prisma.auction.findMany()
    * ```
    */
  get auction(): Prisma.AuctionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bid`: Exposes CRUD operations for the **Bid** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bids
    * const bids = await prisma.bid.findMany()
    * ```
    */
  get bid(): Prisma.BidDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auctionDeposit`: Exposes CRUD operations for the **AuctionDeposit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuctionDeposits
    * const auctionDeposits = await prisma.auctionDeposit.findMany()
    * ```
    */
  get auctionDeposit(): Prisma.AuctionDepositDelegate<ExtArgs, ClientOptions>;
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
    Auction: 'Auction',
    Bid: 'Bid',
    AuctionDeposit: 'AuctionDeposit'
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
      modelProps: "auction" | "bid" | "auctionDeposit"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Auction: {
        payload: Prisma.$AuctionPayload<ExtArgs>
        fields: Prisma.AuctionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuctionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuctionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload>
          }
          findFirst: {
            args: Prisma.AuctionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuctionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload>
          }
          findMany: {
            args: Prisma.AuctionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload>[]
          }
          create: {
            args: Prisma.AuctionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload>
          }
          createMany: {
            args: Prisma.AuctionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuctionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload>[]
          }
          delete: {
            args: Prisma.AuctionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload>
          }
          update: {
            args: Prisma.AuctionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload>
          }
          deleteMany: {
            args: Prisma.AuctionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuctionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuctionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload>[]
          }
          upsert: {
            args: Prisma.AuctionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload>
          }
          aggregate: {
            args: Prisma.AuctionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuction>
          }
          groupBy: {
            args: Prisma.AuctionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuctionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuctionCountArgs<ExtArgs>
            result: $Utils.Optional<AuctionCountAggregateOutputType> | number
          }
        }
      }
      Bid: {
        payload: Prisma.$BidPayload<ExtArgs>
        fields: Prisma.BidFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BidFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BidFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          findFirst: {
            args: Prisma.BidFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BidFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          findMany: {
            args: Prisma.BidFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>[]
          }
          create: {
            args: Prisma.BidCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          createMany: {
            args: Prisma.BidCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BidCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>[]
          }
          delete: {
            args: Prisma.BidDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          update: {
            args: Prisma.BidUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          deleteMany: {
            args: Prisma.BidDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BidUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BidUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>[]
          }
          upsert: {
            args: Prisma.BidUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          aggregate: {
            args: Prisma.BidAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBid>
          }
          groupBy: {
            args: Prisma.BidGroupByArgs<ExtArgs>
            result: $Utils.Optional<BidGroupByOutputType>[]
          }
          count: {
            args: Prisma.BidCountArgs<ExtArgs>
            result: $Utils.Optional<BidCountAggregateOutputType> | number
          }
        }
      }
      AuctionDeposit: {
        payload: Prisma.$AuctionDepositPayload<ExtArgs>
        fields: Prisma.AuctionDepositFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuctionDepositFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionDepositPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuctionDepositFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionDepositPayload>
          }
          findFirst: {
            args: Prisma.AuctionDepositFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionDepositPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuctionDepositFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionDepositPayload>
          }
          findMany: {
            args: Prisma.AuctionDepositFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionDepositPayload>[]
          }
          create: {
            args: Prisma.AuctionDepositCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionDepositPayload>
          }
          createMany: {
            args: Prisma.AuctionDepositCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuctionDepositCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionDepositPayload>[]
          }
          delete: {
            args: Prisma.AuctionDepositDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionDepositPayload>
          }
          update: {
            args: Prisma.AuctionDepositUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionDepositPayload>
          }
          deleteMany: {
            args: Prisma.AuctionDepositDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuctionDepositUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuctionDepositUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionDepositPayload>[]
          }
          upsert: {
            args: Prisma.AuctionDepositUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionDepositPayload>
          }
          aggregate: {
            args: Prisma.AuctionDepositAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuctionDeposit>
          }
          groupBy: {
            args: Prisma.AuctionDepositGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuctionDepositGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuctionDepositCountArgs<ExtArgs>
            result: $Utils.Optional<AuctionDepositCountAggregateOutputType> | number
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
    auction?: AuctionOmit
    bid?: BidOmit
    auctionDeposit?: AuctionDepositOmit
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
   * Count Type AuctionCountOutputType
   */

  export type AuctionCountOutputType = {
    bids: number
    deposits: number
  }

  export type AuctionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bids?: boolean | AuctionCountOutputTypeCountBidsArgs
    deposits?: boolean | AuctionCountOutputTypeCountDepositsArgs
  }

  // Custom InputTypes
  /**
   * AuctionCountOutputType without action
   */
  export type AuctionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuctionCountOutputType
     */
    select?: AuctionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AuctionCountOutputType without action
   */
  export type AuctionCountOutputTypeCountBidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BidWhereInput
  }

  /**
   * AuctionCountOutputType without action
   */
  export type AuctionCountOutputTypeCountDepositsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuctionDepositWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Auction
   */

  export type AggregateAuction = {
    _count: AuctionCountAggregateOutputType | null
    _avg: AuctionAvgAggregateOutputType | null
    _sum: AuctionSumAggregateOutputType | null
    _min: AuctionMinAggregateOutputType | null
    _max: AuctionMaxAggregateOutputType | null
  }

  export type AuctionAvgAggregateOutputType = {
    startingPrice: Decimal | null
    reservePrice: Decimal | null
    currentPrice: Decimal | null
    bidIncrement: Decimal | null
    buyNowPrice: Decimal | null
    extensionMinutes: number | null
    depositAmount: Decimal | null
    depositPercent: number | null
    bidCount: number | null
    participantCount: number | null
    viewCount: number | null
    winningPrice: Decimal | null
    antiSnipingMinutes: number | null
    maxExtensions: number | null
    extensionsUsed: number | null
  }

  export type AuctionSumAggregateOutputType = {
    startingPrice: Decimal | null
    reservePrice: Decimal | null
    currentPrice: Decimal | null
    bidIncrement: Decimal | null
    buyNowPrice: Decimal | null
    extensionMinutes: number | null
    depositAmount: Decimal | null
    depositPercent: number | null
    bidCount: number | null
    participantCount: number | null
    viewCount: number | null
    winningPrice: Decimal | null
    antiSnipingMinutes: number | null
    maxExtensions: number | null
    extensionsUsed: number | null
  }

  export type AuctionMinAggregateOutputType = {
    id: string | null
    propertyId: string | null
    sellerId: string | null
    title: string | null
    description: string | null
    type: $Enums.AuctionType | null
    status: $Enums.AuctionStatus | null
    startingPrice: Decimal | null
    reservePrice: Decimal | null
    currentPrice: Decimal | null
    bidIncrement: Decimal | null
    buyNowPrice: Decimal | null
    currency: string | null
    startTime: Date | null
    endTime: Date | null
    originalEndTime: Date | null
    extensionMinutes: number | null
    depositRequired: boolean | null
    depositAmount: Decimal | null
    depositPercent: number | null
    bidCount: number | null
    participantCount: number | null
    viewCount: number | null
    winnerId: string | null
    winningBidId: string | null
    winningPrice: Decimal | null
    antiSnipingEnabled: boolean | null
    antiSnipingMinutes: number | null
    terms: string | null
    isPublic: boolean | null
    autoExtend: boolean | null
    maxExtensions: number | null
    extensionsUsed: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuctionMaxAggregateOutputType = {
    id: string | null
    propertyId: string | null
    sellerId: string | null
    title: string | null
    description: string | null
    type: $Enums.AuctionType | null
    status: $Enums.AuctionStatus | null
    startingPrice: Decimal | null
    reservePrice: Decimal | null
    currentPrice: Decimal | null
    bidIncrement: Decimal | null
    buyNowPrice: Decimal | null
    currency: string | null
    startTime: Date | null
    endTime: Date | null
    originalEndTime: Date | null
    extensionMinutes: number | null
    depositRequired: boolean | null
    depositAmount: Decimal | null
    depositPercent: number | null
    bidCount: number | null
    participantCount: number | null
    viewCount: number | null
    winnerId: string | null
    winningBidId: string | null
    winningPrice: Decimal | null
    antiSnipingEnabled: boolean | null
    antiSnipingMinutes: number | null
    terms: string | null
    isPublic: boolean | null
    autoExtend: boolean | null
    maxExtensions: number | null
    extensionsUsed: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuctionCountAggregateOutputType = {
    id: number
    propertyId: number
    sellerId: number
    title: number
    description: number
    type: number
    status: number
    startingPrice: number
    reservePrice: number
    currentPrice: number
    bidIncrement: number
    buyNowPrice: number
    currency: number
    startTime: number
    endTime: number
    originalEndTime: number
    extensionMinutes: number
    depositRequired: number
    depositAmount: number
    depositPercent: number
    bidCount: number
    participantCount: number
    viewCount: number
    winnerId: number
    winningBidId: number
    winningPrice: number
    antiSnipingEnabled: number
    antiSnipingMinutes: number
    terms: number
    isPublic: number
    autoExtend: number
    maxExtensions: number
    extensionsUsed: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AuctionAvgAggregateInputType = {
    startingPrice?: true
    reservePrice?: true
    currentPrice?: true
    bidIncrement?: true
    buyNowPrice?: true
    extensionMinutes?: true
    depositAmount?: true
    depositPercent?: true
    bidCount?: true
    participantCount?: true
    viewCount?: true
    winningPrice?: true
    antiSnipingMinutes?: true
    maxExtensions?: true
    extensionsUsed?: true
  }

  export type AuctionSumAggregateInputType = {
    startingPrice?: true
    reservePrice?: true
    currentPrice?: true
    bidIncrement?: true
    buyNowPrice?: true
    extensionMinutes?: true
    depositAmount?: true
    depositPercent?: true
    bidCount?: true
    participantCount?: true
    viewCount?: true
    winningPrice?: true
    antiSnipingMinutes?: true
    maxExtensions?: true
    extensionsUsed?: true
  }

  export type AuctionMinAggregateInputType = {
    id?: true
    propertyId?: true
    sellerId?: true
    title?: true
    description?: true
    type?: true
    status?: true
    startingPrice?: true
    reservePrice?: true
    currentPrice?: true
    bidIncrement?: true
    buyNowPrice?: true
    currency?: true
    startTime?: true
    endTime?: true
    originalEndTime?: true
    extensionMinutes?: true
    depositRequired?: true
    depositAmount?: true
    depositPercent?: true
    bidCount?: true
    participantCount?: true
    viewCount?: true
    winnerId?: true
    winningBidId?: true
    winningPrice?: true
    antiSnipingEnabled?: true
    antiSnipingMinutes?: true
    terms?: true
    isPublic?: true
    autoExtend?: true
    maxExtensions?: true
    extensionsUsed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuctionMaxAggregateInputType = {
    id?: true
    propertyId?: true
    sellerId?: true
    title?: true
    description?: true
    type?: true
    status?: true
    startingPrice?: true
    reservePrice?: true
    currentPrice?: true
    bidIncrement?: true
    buyNowPrice?: true
    currency?: true
    startTime?: true
    endTime?: true
    originalEndTime?: true
    extensionMinutes?: true
    depositRequired?: true
    depositAmount?: true
    depositPercent?: true
    bidCount?: true
    participantCount?: true
    viewCount?: true
    winnerId?: true
    winningBidId?: true
    winningPrice?: true
    antiSnipingEnabled?: true
    antiSnipingMinutes?: true
    terms?: true
    isPublic?: true
    autoExtend?: true
    maxExtensions?: true
    extensionsUsed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuctionCountAggregateInputType = {
    id?: true
    propertyId?: true
    sellerId?: true
    title?: true
    description?: true
    type?: true
    status?: true
    startingPrice?: true
    reservePrice?: true
    currentPrice?: true
    bidIncrement?: true
    buyNowPrice?: true
    currency?: true
    startTime?: true
    endTime?: true
    originalEndTime?: true
    extensionMinutes?: true
    depositRequired?: true
    depositAmount?: true
    depositPercent?: true
    bidCount?: true
    participantCount?: true
    viewCount?: true
    winnerId?: true
    winningBidId?: true
    winningPrice?: true
    antiSnipingEnabled?: true
    antiSnipingMinutes?: true
    terms?: true
    isPublic?: true
    autoExtend?: true
    maxExtensions?: true
    extensionsUsed?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AuctionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Auction to aggregate.
     */
    where?: AuctionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auctions to fetch.
     */
    orderBy?: AuctionOrderByWithRelationInput | AuctionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuctionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auctions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auctions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Auctions
    **/
    _count?: true | AuctionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuctionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuctionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuctionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuctionMaxAggregateInputType
  }

  export type GetAuctionAggregateType<T extends AuctionAggregateArgs> = {
        [P in keyof T & keyof AggregateAuction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuction[P]>
      : GetScalarType<T[P], AggregateAuction[P]>
  }




  export type AuctionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuctionWhereInput
    orderBy?: AuctionOrderByWithAggregationInput | AuctionOrderByWithAggregationInput[]
    by: AuctionScalarFieldEnum[] | AuctionScalarFieldEnum
    having?: AuctionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuctionCountAggregateInputType | true
    _avg?: AuctionAvgAggregateInputType
    _sum?: AuctionSumAggregateInputType
    _min?: AuctionMinAggregateInputType
    _max?: AuctionMaxAggregateInputType
  }

  export type AuctionGroupByOutputType = {
    id: string
    propertyId: string
    sellerId: string
    title: string
    description: string | null
    type: $Enums.AuctionType
    status: $Enums.AuctionStatus
    startingPrice: Decimal
    reservePrice: Decimal | null
    currentPrice: Decimal | null
    bidIncrement: Decimal
    buyNowPrice: Decimal | null
    currency: string
    startTime: Date
    endTime: Date
    originalEndTime: Date
    extensionMinutes: number
    depositRequired: boolean
    depositAmount: Decimal | null
    depositPercent: number | null
    bidCount: number
    participantCount: number
    viewCount: number
    winnerId: string | null
    winningBidId: string | null
    winningPrice: Decimal | null
    antiSnipingEnabled: boolean
    antiSnipingMinutes: number
    terms: string | null
    isPublic: boolean
    autoExtend: boolean
    maxExtensions: number
    extensionsUsed: number
    createdAt: Date
    updatedAt: Date
    _count: AuctionCountAggregateOutputType | null
    _avg: AuctionAvgAggregateOutputType | null
    _sum: AuctionSumAggregateOutputType | null
    _min: AuctionMinAggregateOutputType | null
    _max: AuctionMaxAggregateOutputType | null
  }

  type GetAuctionGroupByPayload<T extends AuctionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuctionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuctionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuctionGroupByOutputType[P]>
            : GetScalarType<T[P], AuctionGroupByOutputType[P]>
        }
      >
    >


  export type AuctionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    sellerId?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    status?: boolean
    startingPrice?: boolean
    reservePrice?: boolean
    currentPrice?: boolean
    bidIncrement?: boolean
    buyNowPrice?: boolean
    currency?: boolean
    startTime?: boolean
    endTime?: boolean
    originalEndTime?: boolean
    extensionMinutes?: boolean
    depositRequired?: boolean
    depositAmount?: boolean
    depositPercent?: boolean
    bidCount?: boolean
    participantCount?: boolean
    viewCount?: boolean
    winnerId?: boolean
    winningBidId?: boolean
    winningPrice?: boolean
    antiSnipingEnabled?: boolean
    antiSnipingMinutes?: boolean
    terms?: boolean
    isPublic?: boolean
    autoExtend?: boolean
    maxExtensions?: boolean
    extensionsUsed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bids?: boolean | Auction$bidsArgs<ExtArgs>
    deposits?: boolean | Auction$depositsArgs<ExtArgs>
    _count?: boolean | AuctionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auction"]>

  export type AuctionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    sellerId?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    status?: boolean
    startingPrice?: boolean
    reservePrice?: boolean
    currentPrice?: boolean
    bidIncrement?: boolean
    buyNowPrice?: boolean
    currency?: boolean
    startTime?: boolean
    endTime?: boolean
    originalEndTime?: boolean
    extensionMinutes?: boolean
    depositRequired?: boolean
    depositAmount?: boolean
    depositPercent?: boolean
    bidCount?: boolean
    participantCount?: boolean
    viewCount?: boolean
    winnerId?: boolean
    winningBidId?: boolean
    winningPrice?: boolean
    antiSnipingEnabled?: boolean
    antiSnipingMinutes?: boolean
    terms?: boolean
    isPublic?: boolean
    autoExtend?: boolean
    maxExtensions?: boolean
    extensionsUsed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["auction"]>

  export type AuctionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    sellerId?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    status?: boolean
    startingPrice?: boolean
    reservePrice?: boolean
    currentPrice?: boolean
    bidIncrement?: boolean
    buyNowPrice?: boolean
    currency?: boolean
    startTime?: boolean
    endTime?: boolean
    originalEndTime?: boolean
    extensionMinutes?: boolean
    depositRequired?: boolean
    depositAmount?: boolean
    depositPercent?: boolean
    bidCount?: boolean
    participantCount?: boolean
    viewCount?: boolean
    winnerId?: boolean
    winningBidId?: boolean
    winningPrice?: boolean
    antiSnipingEnabled?: boolean
    antiSnipingMinutes?: boolean
    terms?: boolean
    isPublic?: boolean
    autoExtend?: boolean
    maxExtensions?: boolean
    extensionsUsed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["auction"]>

  export type AuctionSelectScalar = {
    id?: boolean
    propertyId?: boolean
    sellerId?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    status?: boolean
    startingPrice?: boolean
    reservePrice?: boolean
    currentPrice?: boolean
    bidIncrement?: boolean
    buyNowPrice?: boolean
    currency?: boolean
    startTime?: boolean
    endTime?: boolean
    originalEndTime?: boolean
    extensionMinutes?: boolean
    depositRequired?: boolean
    depositAmount?: boolean
    depositPercent?: boolean
    bidCount?: boolean
    participantCount?: boolean
    viewCount?: boolean
    winnerId?: boolean
    winningBidId?: boolean
    winningPrice?: boolean
    antiSnipingEnabled?: boolean
    antiSnipingMinutes?: boolean
    terms?: boolean
    isPublic?: boolean
    autoExtend?: boolean
    maxExtensions?: boolean
    extensionsUsed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AuctionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "propertyId" | "sellerId" | "title" | "description" | "type" | "status" | "startingPrice" | "reservePrice" | "currentPrice" | "bidIncrement" | "buyNowPrice" | "currency" | "startTime" | "endTime" | "originalEndTime" | "extensionMinutes" | "depositRequired" | "depositAmount" | "depositPercent" | "bidCount" | "participantCount" | "viewCount" | "winnerId" | "winningBidId" | "winningPrice" | "antiSnipingEnabled" | "antiSnipingMinutes" | "terms" | "isPublic" | "autoExtend" | "maxExtensions" | "extensionsUsed" | "createdAt" | "updatedAt", ExtArgs["result"]["auction"]>
  export type AuctionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bids?: boolean | Auction$bidsArgs<ExtArgs>
    deposits?: boolean | Auction$depositsArgs<ExtArgs>
    _count?: boolean | AuctionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AuctionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AuctionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AuctionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Auction"
    objects: {
      bids: Prisma.$BidPayload<ExtArgs>[]
      deposits: Prisma.$AuctionDepositPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      propertyId: string
      sellerId: string
      title: string
      description: string | null
      type: $Enums.AuctionType
      status: $Enums.AuctionStatus
      startingPrice: Prisma.Decimal
      reservePrice: Prisma.Decimal | null
      currentPrice: Prisma.Decimal | null
      bidIncrement: Prisma.Decimal
      buyNowPrice: Prisma.Decimal | null
      currency: string
      startTime: Date
      endTime: Date
      originalEndTime: Date
      extensionMinutes: number
      depositRequired: boolean
      depositAmount: Prisma.Decimal | null
      depositPercent: number | null
      bidCount: number
      participantCount: number
      viewCount: number
      winnerId: string | null
      winningBidId: string | null
      winningPrice: Prisma.Decimal | null
      antiSnipingEnabled: boolean
      antiSnipingMinutes: number
      terms: string | null
      isPublic: boolean
      autoExtend: boolean
      maxExtensions: number
      extensionsUsed: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["auction"]>
    composites: {}
  }

  type AuctionGetPayload<S extends boolean | null | undefined | AuctionDefaultArgs> = $Result.GetResult<Prisma.$AuctionPayload, S>

  type AuctionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuctionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuctionCountAggregateInputType | true
    }

  export interface AuctionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Auction'], meta: { name: 'Auction' } }
    /**
     * Find zero or one Auction that matches the filter.
     * @param {AuctionFindUniqueArgs} args - Arguments to find a Auction
     * @example
     * // Get one Auction
     * const auction = await prisma.auction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuctionFindUniqueArgs>(args: SelectSubset<T, AuctionFindUniqueArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Auction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuctionFindUniqueOrThrowArgs} args - Arguments to find a Auction
     * @example
     * // Get one Auction
     * const auction = await prisma.auction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuctionFindUniqueOrThrowArgs>(args: SelectSubset<T, AuctionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionFindFirstArgs} args - Arguments to find a Auction
     * @example
     * // Get one Auction
     * const auction = await prisma.auction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuctionFindFirstArgs>(args?: SelectSubset<T, AuctionFindFirstArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionFindFirstOrThrowArgs} args - Arguments to find a Auction
     * @example
     * // Get one Auction
     * const auction = await prisma.auction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuctionFindFirstOrThrowArgs>(args?: SelectSubset<T, AuctionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Auctions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Auctions
     * const auctions = await prisma.auction.findMany()
     * 
     * // Get first 10 Auctions
     * const auctions = await prisma.auction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auctionWithIdOnly = await prisma.auction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuctionFindManyArgs>(args?: SelectSubset<T, AuctionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Auction.
     * @param {AuctionCreateArgs} args - Arguments to create a Auction.
     * @example
     * // Create one Auction
     * const Auction = await prisma.auction.create({
     *   data: {
     *     // ... data to create a Auction
     *   }
     * })
     * 
     */
    create<T extends AuctionCreateArgs>(args: SelectSubset<T, AuctionCreateArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Auctions.
     * @param {AuctionCreateManyArgs} args - Arguments to create many Auctions.
     * @example
     * // Create many Auctions
     * const auction = await prisma.auction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuctionCreateManyArgs>(args?: SelectSubset<T, AuctionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Auctions and returns the data saved in the database.
     * @param {AuctionCreateManyAndReturnArgs} args - Arguments to create many Auctions.
     * @example
     * // Create many Auctions
     * const auction = await prisma.auction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Auctions and only return the `id`
     * const auctionWithIdOnly = await prisma.auction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuctionCreateManyAndReturnArgs>(args?: SelectSubset<T, AuctionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Auction.
     * @param {AuctionDeleteArgs} args - Arguments to delete one Auction.
     * @example
     * // Delete one Auction
     * const Auction = await prisma.auction.delete({
     *   where: {
     *     // ... filter to delete one Auction
     *   }
     * })
     * 
     */
    delete<T extends AuctionDeleteArgs>(args: SelectSubset<T, AuctionDeleteArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Auction.
     * @param {AuctionUpdateArgs} args - Arguments to update one Auction.
     * @example
     * // Update one Auction
     * const auction = await prisma.auction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuctionUpdateArgs>(args: SelectSubset<T, AuctionUpdateArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Auctions.
     * @param {AuctionDeleteManyArgs} args - Arguments to filter Auctions to delete.
     * @example
     * // Delete a few Auctions
     * const { count } = await prisma.auction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuctionDeleteManyArgs>(args?: SelectSubset<T, AuctionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auctions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Auctions
     * const auction = await prisma.auction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuctionUpdateManyArgs>(args: SelectSubset<T, AuctionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auctions and returns the data updated in the database.
     * @param {AuctionUpdateManyAndReturnArgs} args - Arguments to update many Auctions.
     * @example
     * // Update many Auctions
     * const auction = await prisma.auction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Auctions and only return the `id`
     * const auctionWithIdOnly = await prisma.auction.updateManyAndReturn({
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
    updateManyAndReturn<T extends AuctionUpdateManyAndReturnArgs>(args: SelectSubset<T, AuctionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Auction.
     * @param {AuctionUpsertArgs} args - Arguments to update or create a Auction.
     * @example
     * // Update or create a Auction
     * const auction = await prisma.auction.upsert({
     *   create: {
     *     // ... data to create a Auction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Auction we want to update
     *   }
     * })
     */
    upsert<T extends AuctionUpsertArgs>(args: SelectSubset<T, AuctionUpsertArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Auctions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionCountArgs} args - Arguments to filter Auctions to count.
     * @example
     * // Count the number of Auctions
     * const count = await prisma.auction.count({
     *   where: {
     *     // ... the filter for the Auctions we want to count
     *   }
     * })
    **/
    count<T extends AuctionCountArgs>(
      args?: Subset<T, AuctionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuctionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Auction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuctionAggregateArgs>(args: Subset<T, AuctionAggregateArgs>): Prisma.PrismaPromise<GetAuctionAggregateType<T>>

    /**
     * Group by Auction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionGroupByArgs} args - Group by arguments.
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
      T extends AuctionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuctionGroupByArgs['orderBy'] }
        : { orderBy?: AuctionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuctionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuctionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Auction model
   */
  readonly fields: AuctionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Auction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuctionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bids<T extends Auction$bidsArgs<ExtArgs> = {}>(args?: Subset<T, Auction$bidsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    deposits<T extends Auction$depositsArgs<ExtArgs> = {}>(args?: Subset<T, Auction$depositsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuctionDepositPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Auction model
   */
  interface AuctionFieldRefs {
    readonly id: FieldRef<"Auction", 'String'>
    readonly propertyId: FieldRef<"Auction", 'String'>
    readonly sellerId: FieldRef<"Auction", 'String'>
    readonly title: FieldRef<"Auction", 'String'>
    readonly description: FieldRef<"Auction", 'String'>
    readonly type: FieldRef<"Auction", 'AuctionType'>
    readonly status: FieldRef<"Auction", 'AuctionStatus'>
    readonly startingPrice: FieldRef<"Auction", 'Decimal'>
    readonly reservePrice: FieldRef<"Auction", 'Decimal'>
    readonly currentPrice: FieldRef<"Auction", 'Decimal'>
    readonly bidIncrement: FieldRef<"Auction", 'Decimal'>
    readonly buyNowPrice: FieldRef<"Auction", 'Decimal'>
    readonly currency: FieldRef<"Auction", 'String'>
    readonly startTime: FieldRef<"Auction", 'DateTime'>
    readonly endTime: FieldRef<"Auction", 'DateTime'>
    readonly originalEndTime: FieldRef<"Auction", 'DateTime'>
    readonly extensionMinutes: FieldRef<"Auction", 'Int'>
    readonly depositRequired: FieldRef<"Auction", 'Boolean'>
    readonly depositAmount: FieldRef<"Auction", 'Decimal'>
    readonly depositPercent: FieldRef<"Auction", 'Float'>
    readonly bidCount: FieldRef<"Auction", 'Int'>
    readonly participantCount: FieldRef<"Auction", 'Int'>
    readonly viewCount: FieldRef<"Auction", 'Int'>
    readonly winnerId: FieldRef<"Auction", 'String'>
    readonly winningBidId: FieldRef<"Auction", 'String'>
    readonly winningPrice: FieldRef<"Auction", 'Decimal'>
    readonly antiSnipingEnabled: FieldRef<"Auction", 'Boolean'>
    readonly antiSnipingMinutes: FieldRef<"Auction", 'Int'>
    readonly terms: FieldRef<"Auction", 'String'>
    readonly isPublic: FieldRef<"Auction", 'Boolean'>
    readonly autoExtend: FieldRef<"Auction", 'Boolean'>
    readonly maxExtensions: FieldRef<"Auction", 'Int'>
    readonly extensionsUsed: FieldRef<"Auction", 'Int'>
    readonly createdAt: FieldRef<"Auction", 'DateTime'>
    readonly updatedAt: FieldRef<"Auction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Auction findUnique
   */
  export type AuctionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auction
     */
    omit?: AuctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    /**
     * Filter, which Auction to fetch.
     */
    where: AuctionWhereUniqueInput
  }

  /**
   * Auction findUniqueOrThrow
   */
  export type AuctionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auction
     */
    omit?: AuctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    /**
     * Filter, which Auction to fetch.
     */
    where: AuctionWhereUniqueInput
  }

  /**
   * Auction findFirst
   */
  export type AuctionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auction
     */
    omit?: AuctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    /**
     * Filter, which Auction to fetch.
     */
    where?: AuctionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auctions to fetch.
     */
    orderBy?: AuctionOrderByWithRelationInput | AuctionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Auctions.
     */
    cursor?: AuctionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auctions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auctions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Auctions.
     */
    distinct?: AuctionScalarFieldEnum | AuctionScalarFieldEnum[]
  }

  /**
   * Auction findFirstOrThrow
   */
  export type AuctionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auction
     */
    omit?: AuctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    /**
     * Filter, which Auction to fetch.
     */
    where?: AuctionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auctions to fetch.
     */
    orderBy?: AuctionOrderByWithRelationInput | AuctionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Auctions.
     */
    cursor?: AuctionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auctions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auctions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Auctions.
     */
    distinct?: AuctionScalarFieldEnum | AuctionScalarFieldEnum[]
  }

  /**
   * Auction findMany
   */
  export type AuctionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auction
     */
    omit?: AuctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    /**
     * Filter, which Auctions to fetch.
     */
    where?: AuctionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auctions to fetch.
     */
    orderBy?: AuctionOrderByWithRelationInput | AuctionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Auctions.
     */
    cursor?: AuctionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auctions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auctions.
     */
    skip?: number
    distinct?: AuctionScalarFieldEnum | AuctionScalarFieldEnum[]
  }

  /**
   * Auction create
   */
  export type AuctionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auction
     */
    omit?: AuctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    /**
     * The data needed to create a Auction.
     */
    data: XOR<AuctionCreateInput, AuctionUncheckedCreateInput>
  }

  /**
   * Auction createMany
   */
  export type AuctionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Auctions.
     */
    data: AuctionCreateManyInput | AuctionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Auction createManyAndReturn
   */
  export type AuctionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Auction
     */
    omit?: AuctionOmit<ExtArgs> | null
    /**
     * The data used to create many Auctions.
     */
    data: AuctionCreateManyInput | AuctionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Auction update
   */
  export type AuctionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auction
     */
    omit?: AuctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    /**
     * The data needed to update a Auction.
     */
    data: XOR<AuctionUpdateInput, AuctionUncheckedUpdateInput>
    /**
     * Choose, which Auction to update.
     */
    where: AuctionWhereUniqueInput
  }

  /**
   * Auction updateMany
   */
  export type AuctionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Auctions.
     */
    data: XOR<AuctionUpdateManyMutationInput, AuctionUncheckedUpdateManyInput>
    /**
     * Filter which Auctions to update
     */
    where?: AuctionWhereInput
    /**
     * Limit how many Auctions to update.
     */
    limit?: number
  }

  /**
   * Auction updateManyAndReturn
   */
  export type AuctionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Auction
     */
    omit?: AuctionOmit<ExtArgs> | null
    /**
     * The data used to update Auctions.
     */
    data: XOR<AuctionUpdateManyMutationInput, AuctionUncheckedUpdateManyInput>
    /**
     * Filter which Auctions to update
     */
    where?: AuctionWhereInput
    /**
     * Limit how many Auctions to update.
     */
    limit?: number
  }

  /**
   * Auction upsert
   */
  export type AuctionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auction
     */
    omit?: AuctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    /**
     * The filter to search for the Auction to update in case it exists.
     */
    where: AuctionWhereUniqueInput
    /**
     * In case the Auction found by the `where` argument doesn't exist, create a new Auction with this data.
     */
    create: XOR<AuctionCreateInput, AuctionUncheckedCreateInput>
    /**
     * In case the Auction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuctionUpdateInput, AuctionUncheckedUpdateInput>
  }

  /**
   * Auction delete
   */
  export type AuctionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auction
     */
    omit?: AuctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    /**
     * Filter which Auction to delete.
     */
    where: AuctionWhereUniqueInput
  }

  /**
   * Auction deleteMany
   */
  export type AuctionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Auctions to delete
     */
    where?: AuctionWhereInput
    /**
     * Limit how many Auctions to delete.
     */
    limit?: number
  }

  /**
   * Auction.bids
   */
  export type Auction$bidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    where?: BidWhereInput
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    cursor?: BidWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BidScalarFieldEnum | BidScalarFieldEnum[]
  }

  /**
   * Auction.deposits
   */
  export type Auction$depositsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuctionDeposit
     */
    select?: AuctionDepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuctionDeposit
     */
    omit?: AuctionDepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionDepositInclude<ExtArgs> | null
    where?: AuctionDepositWhereInput
    orderBy?: AuctionDepositOrderByWithRelationInput | AuctionDepositOrderByWithRelationInput[]
    cursor?: AuctionDepositWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuctionDepositScalarFieldEnum | AuctionDepositScalarFieldEnum[]
  }

  /**
   * Auction without action
   */
  export type AuctionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auction
     */
    omit?: AuctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
  }


  /**
   * Model Bid
   */

  export type AggregateBid = {
    _count: BidCountAggregateOutputType | null
    _avg: BidAvgAggregateOutputType | null
    _sum: BidSumAggregateOutputType | null
    _min: BidMinAggregateOutputType | null
    _max: BidMaxAggregateOutputType | null
  }

  export type BidAvgAggregateOutputType = {
    amount: Decimal | null
    maxAmount: Decimal | null
  }

  export type BidSumAggregateOutputType = {
    amount: Decimal | null
    maxAmount: Decimal | null
  }

  export type BidMinAggregateOutputType = {
    id: string | null
    auctionId: string | null
    bidderId: string | null
    amount: Decimal | null
    status: $Enums.BidStatus | null
    isAutoBid: boolean | null
    maxAmount: Decimal | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
  }

  export type BidMaxAggregateOutputType = {
    id: string | null
    auctionId: string | null
    bidderId: string | null
    amount: Decimal | null
    status: $Enums.BidStatus | null
    isAutoBid: boolean | null
    maxAmount: Decimal | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
  }

  export type BidCountAggregateOutputType = {
    id: number
    auctionId: number
    bidderId: number
    amount: number
    status: number
    isAutoBid: number
    maxAmount: number
    ipAddress: number
    userAgent: number
    createdAt: number
    _all: number
  }


  export type BidAvgAggregateInputType = {
    amount?: true
    maxAmount?: true
  }

  export type BidSumAggregateInputType = {
    amount?: true
    maxAmount?: true
  }

  export type BidMinAggregateInputType = {
    id?: true
    auctionId?: true
    bidderId?: true
    amount?: true
    status?: true
    isAutoBid?: true
    maxAmount?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
  }

  export type BidMaxAggregateInputType = {
    id?: true
    auctionId?: true
    bidderId?: true
    amount?: true
    status?: true
    isAutoBid?: true
    maxAmount?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
  }

  export type BidCountAggregateInputType = {
    id?: true
    auctionId?: true
    bidderId?: true
    amount?: true
    status?: true
    isAutoBid?: true
    maxAmount?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    _all?: true
  }

  export type BidAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bid to aggregate.
     */
    where?: BidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bids to fetch.
     */
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bids
    **/
    _count?: true | BidCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BidAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BidSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BidMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BidMaxAggregateInputType
  }

  export type GetBidAggregateType<T extends BidAggregateArgs> = {
        [P in keyof T & keyof AggregateBid]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBid[P]>
      : GetScalarType<T[P], AggregateBid[P]>
  }




  export type BidGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BidWhereInput
    orderBy?: BidOrderByWithAggregationInput | BidOrderByWithAggregationInput[]
    by: BidScalarFieldEnum[] | BidScalarFieldEnum
    having?: BidScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BidCountAggregateInputType | true
    _avg?: BidAvgAggregateInputType
    _sum?: BidSumAggregateInputType
    _min?: BidMinAggregateInputType
    _max?: BidMaxAggregateInputType
  }

  export type BidGroupByOutputType = {
    id: string
    auctionId: string
    bidderId: string
    amount: Decimal
    status: $Enums.BidStatus
    isAutoBid: boolean
    maxAmount: Decimal | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date
    _count: BidCountAggregateOutputType | null
    _avg: BidAvgAggregateOutputType | null
    _sum: BidSumAggregateOutputType | null
    _min: BidMinAggregateOutputType | null
    _max: BidMaxAggregateOutputType | null
  }

  type GetBidGroupByPayload<T extends BidGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BidGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BidGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BidGroupByOutputType[P]>
            : GetScalarType<T[P], BidGroupByOutputType[P]>
        }
      >
    >


  export type BidSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    auctionId?: boolean
    bidderId?: boolean
    amount?: boolean
    status?: boolean
    isAutoBid?: boolean
    maxAmount?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    auction?: boolean | AuctionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bid"]>

  export type BidSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    auctionId?: boolean
    bidderId?: boolean
    amount?: boolean
    status?: boolean
    isAutoBid?: boolean
    maxAmount?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    auction?: boolean | AuctionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bid"]>

  export type BidSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    auctionId?: boolean
    bidderId?: boolean
    amount?: boolean
    status?: boolean
    isAutoBid?: boolean
    maxAmount?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    auction?: boolean | AuctionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bid"]>

  export type BidSelectScalar = {
    id?: boolean
    auctionId?: boolean
    bidderId?: boolean
    amount?: boolean
    status?: boolean
    isAutoBid?: boolean
    maxAmount?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
  }

  export type BidOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "auctionId" | "bidderId" | "amount" | "status" | "isAutoBid" | "maxAmount" | "ipAddress" | "userAgent" | "createdAt", ExtArgs["result"]["bid"]>
  export type BidInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auction?: boolean | AuctionDefaultArgs<ExtArgs>
  }
  export type BidIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auction?: boolean | AuctionDefaultArgs<ExtArgs>
  }
  export type BidIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auction?: boolean | AuctionDefaultArgs<ExtArgs>
  }

  export type $BidPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bid"
    objects: {
      auction: Prisma.$AuctionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      auctionId: string
      bidderId: string
      amount: Prisma.Decimal
      status: $Enums.BidStatus
      isAutoBid: boolean
      maxAmount: Prisma.Decimal | null
      ipAddress: string | null
      userAgent: string | null
      createdAt: Date
    }, ExtArgs["result"]["bid"]>
    composites: {}
  }

  type BidGetPayload<S extends boolean | null | undefined | BidDefaultArgs> = $Result.GetResult<Prisma.$BidPayload, S>

  type BidCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BidFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BidCountAggregateInputType | true
    }

  export interface BidDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bid'], meta: { name: 'Bid' } }
    /**
     * Find zero or one Bid that matches the filter.
     * @param {BidFindUniqueArgs} args - Arguments to find a Bid
     * @example
     * // Get one Bid
     * const bid = await prisma.bid.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BidFindUniqueArgs>(args: SelectSubset<T, BidFindUniqueArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bid that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BidFindUniqueOrThrowArgs} args - Arguments to find a Bid
     * @example
     * // Get one Bid
     * const bid = await prisma.bid.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BidFindUniqueOrThrowArgs>(args: SelectSubset<T, BidFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bid that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidFindFirstArgs} args - Arguments to find a Bid
     * @example
     * // Get one Bid
     * const bid = await prisma.bid.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BidFindFirstArgs>(args?: SelectSubset<T, BidFindFirstArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bid that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidFindFirstOrThrowArgs} args - Arguments to find a Bid
     * @example
     * // Get one Bid
     * const bid = await prisma.bid.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BidFindFirstOrThrowArgs>(args?: SelectSubset<T, BidFindFirstOrThrowArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bids that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bids
     * const bids = await prisma.bid.findMany()
     * 
     * // Get first 10 Bids
     * const bids = await prisma.bid.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bidWithIdOnly = await prisma.bid.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BidFindManyArgs>(args?: SelectSubset<T, BidFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bid.
     * @param {BidCreateArgs} args - Arguments to create a Bid.
     * @example
     * // Create one Bid
     * const Bid = await prisma.bid.create({
     *   data: {
     *     // ... data to create a Bid
     *   }
     * })
     * 
     */
    create<T extends BidCreateArgs>(args: SelectSubset<T, BidCreateArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bids.
     * @param {BidCreateManyArgs} args - Arguments to create many Bids.
     * @example
     * // Create many Bids
     * const bid = await prisma.bid.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BidCreateManyArgs>(args?: SelectSubset<T, BidCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bids and returns the data saved in the database.
     * @param {BidCreateManyAndReturnArgs} args - Arguments to create many Bids.
     * @example
     * // Create many Bids
     * const bid = await prisma.bid.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bids and only return the `id`
     * const bidWithIdOnly = await prisma.bid.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BidCreateManyAndReturnArgs>(args?: SelectSubset<T, BidCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bid.
     * @param {BidDeleteArgs} args - Arguments to delete one Bid.
     * @example
     * // Delete one Bid
     * const Bid = await prisma.bid.delete({
     *   where: {
     *     // ... filter to delete one Bid
     *   }
     * })
     * 
     */
    delete<T extends BidDeleteArgs>(args: SelectSubset<T, BidDeleteArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bid.
     * @param {BidUpdateArgs} args - Arguments to update one Bid.
     * @example
     * // Update one Bid
     * const bid = await prisma.bid.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BidUpdateArgs>(args: SelectSubset<T, BidUpdateArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bids.
     * @param {BidDeleteManyArgs} args - Arguments to filter Bids to delete.
     * @example
     * // Delete a few Bids
     * const { count } = await prisma.bid.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BidDeleteManyArgs>(args?: SelectSubset<T, BidDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bids
     * const bid = await prisma.bid.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BidUpdateManyArgs>(args: SelectSubset<T, BidUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bids and returns the data updated in the database.
     * @param {BidUpdateManyAndReturnArgs} args - Arguments to update many Bids.
     * @example
     * // Update many Bids
     * const bid = await prisma.bid.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bids and only return the `id`
     * const bidWithIdOnly = await prisma.bid.updateManyAndReturn({
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
    updateManyAndReturn<T extends BidUpdateManyAndReturnArgs>(args: SelectSubset<T, BidUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bid.
     * @param {BidUpsertArgs} args - Arguments to update or create a Bid.
     * @example
     * // Update or create a Bid
     * const bid = await prisma.bid.upsert({
     *   create: {
     *     // ... data to create a Bid
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bid we want to update
     *   }
     * })
     */
    upsert<T extends BidUpsertArgs>(args: SelectSubset<T, BidUpsertArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidCountArgs} args - Arguments to filter Bids to count.
     * @example
     * // Count the number of Bids
     * const count = await prisma.bid.count({
     *   where: {
     *     // ... the filter for the Bids we want to count
     *   }
     * })
    **/
    count<T extends BidCountArgs>(
      args?: Subset<T, BidCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BidCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bid.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BidAggregateArgs>(args: Subset<T, BidAggregateArgs>): Prisma.PrismaPromise<GetBidAggregateType<T>>

    /**
     * Group by Bid.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidGroupByArgs} args - Group by arguments.
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
      T extends BidGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BidGroupByArgs['orderBy'] }
        : { orderBy?: BidGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BidGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBidGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bid model
   */
  readonly fields: BidFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bid.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BidClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auction<T extends AuctionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuctionDefaultArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Bid model
   */
  interface BidFieldRefs {
    readonly id: FieldRef<"Bid", 'String'>
    readonly auctionId: FieldRef<"Bid", 'String'>
    readonly bidderId: FieldRef<"Bid", 'String'>
    readonly amount: FieldRef<"Bid", 'Decimal'>
    readonly status: FieldRef<"Bid", 'BidStatus'>
    readonly isAutoBid: FieldRef<"Bid", 'Boolean'>
    readonly maxAmount: FieldRef<"Bid", 'Decimal'>
    readonly ipAddress: FieldRef<"Bid", 'String'>
    readonly userAgent: FieldRef<"Bid", 'String'>
    readonly createdAt: FieldRef<"Bid", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bid findUnique
   */
  export type BidFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter, which Bid to fetch.
     */
    where: BidWhereUniqueInput
  }

  /**
   * Bid findUniqueOrThrow
   */
  export type BidFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter, which Bid to fetch.
     */
    where: BidWhereUniqueInput
  }

  /**
   * Bid findFirst
   */
  export type BidFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter, which Bid to fetch.
     */
    where?: BidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bids to fetch.
     */
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bids.
     */
    cursor?: BidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bids.
     */
    distinct?: BidScalarFieldEnum | BidScalarFieldEnum[]
  }

  /**
   * Bid findFirstOrThrow
   */
  export type BidFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter, which Bid to fetch.
     */
    where?: BidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bids to fetch.
     */
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bids.
     */
    cursor?: BidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bids.
     */
    distinct?: BidScalarFieldEnum | BidScalarFieldEnum[]
  }

  /**
   * Bid findMany
   */
  export type BidFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter, which Bids to fetch.
     */
    where?: BidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bids to fetch.
     */
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bids.
     */
    cursor?: BidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bids.
     */
    skip?: number
    distinct?: BidScalarFieldEnum | BidScalarFieldEnum[]
  }

  /**
   * Bid create
   */
  export type BidCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * The data needed to create a Bid.
     */
    data: XOR<BidCreateInput, BidUncheckedCreateInput>
  }

  /**
   * Bid createMany
   */
  export type BidCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bids.
     */
    data: BidCreateManyInput | BidCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bid createManyAndReturn
   */
  export type BidCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * The data used to create many Bids.
     */
    data: BidCreateManyInput | BidCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bid update
   */
  export type BidUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * The data needed to update a Bid.
     */
    data: XOR<BidUpdateInput, BidUncheckedUpdateInput>
    /**
     * Choose, which Bid to update.
     */
    where: BidWhereUniqueInput
  }

  /**
   * Bid updateMany
   */
  export type BidUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bids.
     */
    data: XOR<BidUpdateManyMutationInput, BidUncheckedUpdateManyInput>
    /**
     * Filter which Bids to update
     */
    where?: BidWhereInput
    /**
     * Limit how many Bids to update.
     */
    limit?: number
  }

  /**
   * Bid updateManyAndReturn
   */
  export type BidUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * The data used to update Bids.
     */
    data: XOR<BidUpdateManyMutationInput, BidUncheckedUpdateManyInput>
    /**
     * Filter which Bids to update
     */
    where?: BidWhereInput
    /**
     * Limit how many Bids to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bid upsert
   */
  export type BidUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * The filter to search for the Bid to update in case it exists.
     */
    where: BidWhereUniqueInput
    /**
     * In case the Bid found by the `where` argument doesn't exist, create a new Bid with this data.
     */
    create: XOR<BidCreateInput, BidUncheckedCreateInput>
    /**
     * In case the Bid was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BidUpdateInput, BidUncheckedUpdateInput>
  }

  /**
   * Bid delete
   */
  export type BidDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter which Bid to delete.
     */
    where: BidWhereUniqueInput
  }

  /**
   * Bid deleteMany
   */
  export type BidDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bids to delete
     */
    where?: BidWhereInput
    /**
     * Limit how many Bids to delete.
     */
    limit?: number
  }

  /**
   * Bid without action
   */
  export type BidDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
  }


  /**
   * Model AuctionDeposit
   */

  export type AggregateAuctionDeposit = {
    _count: AuctionDepositCountAggregateOutputType | null
    _avg: AuctionDepositAvgAggregateOutputType | null
    _sum: AuctionDepositSumAggregateOutputType | null
    _min: AuctionDepositMinAggregateOutputType | null
    _max: AuctionDepositMaxAggregateOutputType | null
  }

  export type AuctionDepositAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type AuctionDepositSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type AuctionDepositMinAggregateOutputType = {
    id: string | null
    auctionId: string | null
    userId: string | null
    amount: Decimal | null
    status: $Enums.DepositStatus | null
    paidAt: Date | null
    refundedAt: Date | null
    createdAt: Date | null
  }

  export type AuctionDepositMaxAggregateOutputType = {
    id: string | null
    auctionId: string | null
    userId: string | null
    amount: Decimal | null
    status: $Enums.DepositStatus | null
    paidAt: Date | null
    refundedAt: Date | null
    createdAt: Date | null
  }

  export type AuctionDepositCountAggregateOutputType = {
    id: number
    auctionId: number
    userId: number
    amount: number
    status: number
    paidAt: number
    refundedAt: number
    createdAt: number
    _all: number
  }


  export type AuctionDepositAvgAggregateInputType = {
    amount?: true
  }

  export type AuctionDepositSumAggregateInputType = {
    amount?: true
  }

  export type AuctionDepositMinAggregateInputType = {
    id?: true
    auctionId?: true
    userId?: true
    amount?: true
    status?: true
    paidAt?: true
    refundedAt?: true
    createdAt?: true
  }

  export type AuctionDepositMaxAggregateInputType = {
    id?: true
    auctionId?: true
    userId?: true
    amount?: true
    status?: true
    paidAt?: true
    refundedAt?: true
    createdAt?: true
  }

  export type AuctionDepositCountAggregateInputType = {
    id?: true
    auctionId?: true
    userId?: true
    amount?: true
    status?: true
    paidAt?: true
    refundedAt?: true
    createdAt?: true
    _all?: true
  }

  export type AuctionDepositAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuctionDeposit to aggregate.
     */
    where?: AuctionDepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuctionDeposits to fetch.
     */
    orderBy?: AuctionDepositOrderByWithRelationInput | AuctionDepositOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuctionDepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuctionDeposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuctionDeposits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuctionDeposits
    **/
    _count?: true | AuctionDepositCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuctionDepositAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuctionDepositSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuctionDepositMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuctionDepositMaxAggregateInputType
  }

  export type GetAuctionDepositAggregateType<T extends AuctionDepositAggregateArgs> = {
        [P in keyof T & keyof AggregateAuctionDeposit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuctionDeposit[P]>
      : GetScalarType<T[P], AggregateAuctionDeposit[P]>
  }




  export type AuctionDepositGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuctionDepositWhereInput
    orderBy?: AuctionDepositOrderByWithAggregationInput | AuctionDepositOrderByWithAggregationInput[]
    by: AuctionDepositScalarFieldEnum[] | AuctionDepositScalarFieldEnum
    having?: AuctionDepositScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuctionDepositCountAggregateInputType | true
    _avg?: AuctionDepositAvgAggregateInputType
    _sum?: AuctionDepositSumAggregateInputType
    _min?: AuctionDepositMinAggregateInputType
    _max?: AuctionDepositMaxAggregateInputType
  }

  export type AuctionDepositGroupByOutputType = {
    id: string
    auctionId: string
    userId: string
    amount: Decimal
    status: $Enums.DepositStatus
    paidAt: Date | null
    refundedAt: Date | null
    createdAt: Date
    _count: AuctionDepositCountAggregateOutputType | null
    _avg: AuctionDepositAvgAggregateOutputType | null
    _sum: AuctionDepositSumAggregateOutputType | null
    _min: AuctionDepositMinAggregateOutputType | null
    _max: AuctionDepositMaxAggregateOutputType | null
  }

  type GetAuctionDepositGroupByPayload<T extends AuctionDepositGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuctionDepositGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuctionDepositGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuctionDepositGroupByOutputType[P]>
            : GetScalarType<T[P], AuctionDepositGroupByOutputType[P]>
        }
      >
    >


  export type AuctionDepositSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    auctionId?: boolean
    userId?: boolean
    amount?: boolean
    status?: boolean
    paidAt?: boolean
    refundedAt?: boolean
    createdAt?: boolean
    auction?: boolean | AuctionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auctionDeposit"]>

  export type AuctionDepositSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    auctionId?: boolean
    userId?: boolean
    amount?: boolean
    status?: boolean
    paidAt?: boolean
    refundedAt?: boolean
    createdAt?: boolean
    auction?: boolean | AuctionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auctionDeposit"]>

  export type AuctionDepositSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    auctionId?: boolean
    userId?: boolean
    amount?: boolean
    status?: boolean
    paidAt?: boolean
    refundedAt?: boolean
    createdAt?: boolean
    auction?: boolean | AuctionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auctionDeposit"]>

  export type AuctionDepositSelectScalar = {
    id?: boolean
    auctionId?: boolean
    userId?: boolean
    amount?: boolean
    status?: boolean
    paidAt?: boolean
    refundedAt?: boolean
    createdAt?: boolean
  }

  export type AuctionDepositOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "auctionId" | "userId" | "amount" | "status" | "paidAt" | "refundedAt" | "createdAt", ExtArgs["result"]["auctionDeposit"]>
  export type AuctionDepositInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auction?: boolean | AuctionDefaultArgs<ExtArgs>
  }
  export type AuctionDepositIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auction?: boolean | AuctionDefaultArgs<ExtArgs>
  }
  export type AuctionDepositIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auction?: boolean | AuctionDefaultArgs<ExtArgs>
  }

  export type $AuctionDepositPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuctionDeposit"
    objects: {
      auction: Prisma.$AuctionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      auctionId: string
      userId: string
      amount: Prisma.Decimal
      status: $Enums.DepositStatus
      paidAt: Date | null
      refundedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["auctionDeposit"]>
    composites: {}
  }

  type AuctionDepositGetPayload<S extends boolean | null | undefined | AuctionDepositDefaultArgs> = $Result.GetResult<Prisma.$AuctionDepositPayload, S>

  type AuctionDepositCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuctionDepositFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuctionDepositCountAggregateInputType | true
    }

  export interface AuctionDepositDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuctionDeposit'], meta: { name: 'AuctionDeposit' } }
    /**
     * Find zero or one AuctionDeposit that matches the filter.
     * @param {AuctionDepositFindUniqueArgs} args - Arguments to find a AuctionDeposit
     * @example
     * // Get one AuctionDeposit
     * const auctionDeposit = await prisma.auctionDeposit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuctionDepositFindUniqueArgs>(args: SelectSubset<T, AuctionDepositFindUniqueArgs<ExtArgs>>): Prisma__AuctionDepositClient<$Result.GetResult<Prisma.$AuctionDepositPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuctionDeposit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuctionDepositFindUniqueOrThrowArgs} args - Arguments to find a AuctionDeposit
     * @example
     * // Get one AuctionDeposit
     * const auctionDeposit = await prisma.auctionDeposit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuctionDepositFindUniqueOrThrowArgs>(args: SelectSubset<T, AuctionDepositFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuctionDepositClient<$Result.GetResult<Prisma.$AuctionDepositPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuctionDeposit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionDepositFindFirstArgs} args - Arguments to find a AuctionDeposit
     * @example
     * // Get one AuctionDeposit
     * const auctionDeposit = await prisma.auctionDeposit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuctionDepositFindFirstArgs>(args?: SelectSubset<T, AuctionDepositFindFirstArgs<ExtArgs>>): Prisma__AuctionDepositClient<$Result.GetResult<Prisma.$AuctionDepositPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuctionDeposit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionDepositFindFirstOrThrowArgs} args - Arguments to find a AuctionDeposit
     * @example
     * // Get one AuctionDeposit
     * const auctionDeposit = await prisma.auctionDeposit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuctionDepositFindFirstOrThrowArgs>(args?: SelectSubset<T, AuctionDepositFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuctionDepositClient<$Result.GetResult<Prisma.$AuctionDepositPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuctionDeposits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionDepositFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuctionDeposits
     * const auctionDeposits = await prisma.auctionDeposit.findMany()
     * 
     * // Get first 10 AuctionDeposits
     * const auctionDeposits = await prisma.auctionDeposit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auctionDepositWithIdOnly = await prisma.auctionDeposit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuctionDepositFindManyArgs>(args?: SelectSubset<T, AuctionDepositFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuctionDepositPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuctionDeposit.
     * @param {AuctionDepositCreateArgs} args - Arguments to create a AuctionDeposit.
     * @example
     * // Create one AuctionDeposit
     * const AuctionDeposit = await prisma.auctionDeposit.create({
     *   data: {
     *     // ... data to create a AuctionDeposit
     *   }
     * })
     * 
     */
    create<T extends AuctionDepositCreateArgs>(args: SelectSubset<T, AuctionDepositCreateArgs<ExtArgs>>): Prisma__AuctionDepositClient<$Result.GetResult<Prisma.$AuctionDepositPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuctionDeposits.
     * @param {AuctionDepositCreateManyArgs} args - Arguments to create many AuctionDeposits.
     * @example
     * // Create many AuctionDeposits
     * const auctionDeposit = await prisma.auctionDeposit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuctionDepositCreateManyArgs>(args?: SelectSubset<T, AuctionDepositCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuctionDeposits and returns the data saved in the database.
     * @param {AuctionDepositCreateManyAndReturnArgs} args - Arguments to create many AuctionDeposits.
     * @example
     * // Create many AuctionDeposits
     * const auctionDeposit = await prisma.auctionDeposit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuctionDeposits and only return the `id`
     * const auctionDepositWithIdOnly = await prisma.auctionDeposit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuctionDepositCreateManyAndReturnArgs>(args?: SelectSubset<T, AuctionDepositCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuctionDepositPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuctionDeposit.
     * @param {AuctionDepositDeleteArgs} args - Arguments to delete one AuctionDeposit.
     * @example
     * // Delete one AuctionDeposit
     * const AuctionDeposit = await prisma.auctionDeposit.delete({
     *   where: {
     *     // ... filter to delete one AuctionDeposit
     *   }
     * })
     * 
     */
    delete<T extends AuctionDepositDeleteArgs>(args: SelectSubset<T, AuctionDepositDeleteArgs<ExtArgs>>): Prisma__AuctionDepositClient<$Result.GetResult<Prisma.$AuctionDepositPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuctionDeposit.
     * @param {AuctionDepositUpdateArgs} args - Arguments to update one AuctionDeposit.
     * @example
     * // Update one AuctionDeposit
     * const auctionDeposit = await prisma.auctionDeposit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuctionDepositUpdateArgs>(args: SelectSubset<T, AuctionDepositUpdateArgs<ExtArgs>>): Prisma__AuctionDepositClient<$Result.GetResult<Prisma.$AuctionDepositPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuctionDeposits.
     * @param {AuctionDepositDeleteManyArgs} args - Arguments to filter AuctionDeposits to delete.
     * @example
     * // Delete a few AuctionDeposits
     * const { count } = await prisma.auctionDeposit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuctionDepositDeleteManyArgs>(args?: SelectSubset<T, AuctionDepositDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuctionDeposits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionDepositUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuctionDeposits
     * const auctionDeposit = await prisma.auctionDeposit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuctionDepositUpdateManyArgs>(args: SelectSubset<T, AuctionDepositUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuctionDeposits and returns the data updated in the database.
     * @param {AuctionDepositUpdateManyAndReturnArgs} args - Arguments to update many AuctionDeposits.
     * @example
     * // Update many AuctionDeposits
     * const auctionDeposit = await prisma.auctionDeposit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuctionDeposits and only return the `id`
     * const auctionDepositWithIdOnly = await prisma.auctionDeposit.updateManyAndReturn({
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
    updateManyAndReturn<T extends AuctionDepositUpdateManyAndReturnArgs>(args: SelectSubset<T, AuctionDepositUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuctionDepositPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuctionDeposit.
     * @param {AuctionDepositUpsertArgs} args - Arguments to update or create a AuctionDeposit.
     * @example
     * // Update or create a AuctionDeposit
     * const auctionDeposit = await prisma.auctionDeposit.upsert({
     *   create: {
     *     // ... data to create a AuctionDeposit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuctionDeposit we want to update
     *   }
     * })
     */
    upsert<T extends AuctionDepositUpsertArgs>(args: SelectSubset<T, AuctionDepositUpsertArgs<ExtArgs>>): Prisma__AuctionDepositClient<$Result.GetResult<Prisma.$AuctionDepositPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuctionDeposits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionDepositCountArgs} args - Arguments to filter AuctionDeposits to count.
     * @example
     * // Count the number of AuctionDeposits
     * const count = await prisma.auctionDeposit.count({
     *   where: {
     *     // ... the filter for the AuctionDeposits we want to count
     *   }
     * })
    **/
    count<T extends AuctionDepositCountArgs>(
      args?: Subset<T, AuctionDepositCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuctionDepositCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuctionDeposit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionDepositAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuctionDepositAggregateArgs>(args: Subset<T, AuctionDepositAggregateArgs>): Prisma.PrismaPromise<GetAuctionDepositAggregateType<T>>

    /**
     * Group by AuctionDeposit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionDepositGroupByArgs} args - Group by arguments.
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
      T extends AuctionDepositGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuctionDepositGroupByArgs['orderBy'] }
        : { orderBy?: AuctionDepositGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuctionDepositGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuctionDepositGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuctionDeposit model
   */
  readonly fields: AuctionDepositFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuctionDeposit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuctionDepositClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auction<T extends AuctionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuctionDefaultArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AuctionDeposit model
   */
  interface AuctionDepositFieldRefs {
    readonly id: FieldRef<"AuctionDeposit", 'String'>
    readonly auctionId: FieldRef<"AuctionDeposit", 'String'>
    readonly userId: FieldRef<"AuctionDeposit", 'String'>
    readonly amount: FieldRef<"AuctionDeposit", 'Decimal'>
    readonly status: FieldRef<"AuctionDeposit", 'DepositStatus'>
    readonly paidAt: FieldRef<"AuctionDeposit", 'DateTime'>
    readonly refundedAt: FieldRef<"AuctionDeposit", 'DateTime'>
    readonly createdAt: FieldRef<"AuctionDeposit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuctionDeposit findUnique
   */
  export type AuctionDepositFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuctionDeposit
     */
    select?: AuctionDepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuctionDeposit
     */
    omit?: AuctionDepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionDepositInclude<ExtArgs> | null
    /**
     * Filter, which AuctionDeposit to fetch.
     */
    where: AuctionDepositWhereUniqueInput
  }

  /**
   * AuctionDeposit findUniqueOrThrow
   */
  export type AuctionDepositFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuctionDeposit
     */
    select?: AuctionDepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuctionDeposit
     */
    omit?: AuctionDepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionDepositInclude<ExtArgs> | null
    /**
     * Filter, which AuctionDeposit to fetch.
     */
    where: AuctionDepositWhereUniqueInput
  }

  /**
   * AuctionDeposit findFirst
   */
  export type AuctionDepositFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuctionDeposit
     */
    select?: AuctionDepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuctionDeposit
     */
    omit?: AuctionDepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionDepositInclude<ExtArgs> | null
    /**
     * Filter, which AuctionDeposit to fetch.
     */
    where?: AuctionDepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuctionDeposits to fetch.
     */
    orderBy?: AuctionDepositOrderByWithRelationInput | AuctionDepositOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuctionDeposits.
     */
    cursor?: AuctionDepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuctionDeposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuctionDeposits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuctionDeposits.
     */
    distinct?: AuctionDepositScalarFieldEnum | AuctionDepositScalarFieldEnum[]
  }

  /**
   * AuctionDeposit findFirstOrThrow
   */
  export type AuctionDepositFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuctionDeposit
     */
    select?: AuctionDepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuctionDeposit
     */
    omit?: AuctionDepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionDepositInclude<ExtArgs> | null
    /**
     * Filter, which AuctionDeposit to fetch.
     */
    where?: AuctionDepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuctionDeposits to fetch.
     */
    orderBy?: AuctionDepositOrderByWithRelationInput | AuctionDepositOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuctionDeposits.
     */
    cursor?: AuctionDepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuctionDeposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuctionDeposits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuctionDeposits.
     */
    distinct?: AuctionDepositScalarFieldEnum | AuctionDepositScalarFieldEnum[]
  }

  /**
   * AuctionDeposit findMany
   */
  export type AuctionDepositFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuctionDeposit
     */
    select?: AuctionDepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuctionDeposit
     */
    omit?: AuctionDepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionDepositInclude<ExtArgs> | null
    /**
     * Filter, which AuctionDeposits to fetch.
     */
    where?: AuctionDepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuctionDeposits to fetch.
     */
    orderBy?: AuctionDepositOrderByWithRelationInput | AuctionDepositOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuctionDeposits.
     */
    cursor?: AuctionDepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuctionDeposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuctionDeposits.
     */
    skip?: number
    distinct?: AuctionDepositScalarFieldEnum | AuctionDepositScalarFieldEnum[]
  }

  /**
   * AuctionDeposit create
   */
  export type AuctionDepositCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuctionDeposit
     */
    select?: AuctionDepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuctionDeposit
     */
    omit?: AuctionDepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionDepositInclude<ExtArgs> | null
    /**
     * The data needed to create a AuctionDeposit.
     */
    data: XOR<AuctionDepositCreateInput, AuctionDepositUncheckedCreateInput>
  }

  /**
   * AuctionDeposit createMany
   */
  export type AuctionDepositCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuctionDeposits.
     */
    data: AuctionDepositCreateManyInput | AuctionDepositCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuctionDeposit createManyAndReturn
   */
  export type AuctionDepositCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuctionDeposit
     */
    select?: AuctionDepositSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuctionDeposit
     */
    omit?: AuctionDepositOmit<ExtArgs> | null
    /**
     * The data used to create many AuctionDeposits.
     */
    data: AuctionDepositCreateManyInput | AuctionDepositCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionDepositIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuctionDeposit update
   */
  export type AuctionDepositUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuctionDeposit
     */
    select?: AuctionDepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuctionDeposit
     */
    omit?: AuctionDepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionDepositInclude<ExtArgs> | null
    /**
     * The data needed to update a AuctionDeposit.
     */
    data: XOR<AuctionDepositUpdateInput, AuctionDepositUncheckedUpdateInput>
    /**
     * Choose, which AuctionDeposit to update.
     */
    where: AuctionDepositWhereUniqueInput
  }

  /**
   * AuctionDeposit updateMany
   */
  export type AuctionDepositUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuctionDeposits.
     */
    data: XOR<AuctionDepositUpdateManyMutationInput, AuctionDepositUncheckedUpdateManyInput>
    /**
     * Filter which AuctionDeposits to update
     */
    where?: AuctionDepositWhereInput
    /**
     * Limit how many AuctionDeposits to update.
     */
    limit?: number
  }

  /**
   * AuctionDeposit updateManyAndReturn
   */
  export type AuctionDepositUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuctionDeposit
     */
    select?: AuctionDepositSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuctionDeposit
     */
    omit?: AuctionDepositOmit<ExtArgs> | null
    /**
     * The data used to update AuctionDeposits.
     */
    data: XOR<AuctionDepositUpdateManyMutationInput, AuctionDepositUncheckedUpdateManyInput>
    /**
     * Filter which AuctionDeposits to update
     */
    where?: AuctionDepositWhereInput
    /**
     * Limit how many AuctionDeposits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionDepositIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuctionDeposit upsert
   */
  export type AuctionDepositUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuctionDeposit
     */
    select?: AuctionDepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuctionDeposit
     */
    omit?: AuctionDepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionDepositInclude<ExtArgs> | null
    /**
     * The filter to search for the AuctionDeposit to update in case it exists.
     */
    where: AuctionDepositWhereUniqueInput
    /**
     * In case the AuctionDeposit found by the `where` argument doesn't exist, create a new AuctionDeposit with this data.
     */
    create: XOR<AuctionDepositCreateInput, AuctionDepositUncheckedCreateInput>
    /**
     * In case the AuctionDeposit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuctionDepositUpdateInput, AuctionDepositUncheckedUpdateInput>
  }

  /**
   * AuctionDeposit delete
   */
  export type AuctionDepositDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuctionDeposit
     */
    select?: AuctionDepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuctionDeposit
     */
    omit?: AuctionDepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionDepositInclude<ExtArgs> | null
    /**
     * Filter which AuctionDeposit to delete.
     */
    where: AuctionDepositWhereUniqueInput
  }

  /**
   * AuctionDeposit deleteMany
   */
  export type AuctionDepositDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuctionDeposits to delete
     */
    where?: AuctionDepositWhereInput
    /**
     * Limit how many AuctionDeposits to delete.
     */
    limit?: number
  }

  /**
   * AuctionDeposit without action
   */
  export type AuctionDepositDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuctionDeposit
     */
    select?: AuctionDepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuctionDeposit
     */
    omit?: AuctionDepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionDepositInclude<ExtArgs> | null
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


  export const AuctionScalarFieldEnum: {
    id: 'id',
    propertyId: 'propertyId',
    sellerId: 'sellerId',
    title: 'title',
    description: 'description',
    type: 'type',
    status: 'status',
    startingPrice: 'startingPrice',
    reservePrice: 'reservePrice',
    currentPrice: 'currentPrice',
    bidIncrement: 'bidIncrement',
    buyNowPrice: 'buyNowPrice',
    currency: 'currency',
    startTime: 'startTime',
    endTime: 'endTime',
    originalEndTime: 'originalEndTime',
    extensionMinutes: 'extensionMinutes',
    depositRequired: 'depositRequired',
    depositAmount: 'depositAmount',
    depositPercent: 'depositPercent',
    bidCount: 'bidCount',
    participantCount: 'participantCount',
    viewCount: 'viewCount',
    winnerId: 'winnerId',
    winningBidId: 'winningBidId',
    winningPrice: 'winningPrice',
    antiSnipingEnabled: 'antiSnipingEnabled',
    antiSnipingMinutes: 'antiSnipingMinutes',
    terms: 'terms',
    isPublic: 'isPublic',
    autoExtend: 'autoExtend',
    maxExtensions: 'maxExtensions',
    extensionsUsed: 'extensionsUsed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AuctionScalarFieldEnum = (typeof AuctionScalarFieldEnum)[keyof typeof AuctionScalarFieldEnum]


  export const BidScalarFieldEnum: {
    id: 'id',
    auctionId: 'auctionId',
    bidderId: 'bidderId',
    amount: 'amount',
    status: 'status',
    isAutoBid: 'isAutoBid',
    maxAmount: 'maxAmount',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    createdAt: 'createdAt'
  };

  export type BidScalarFieldEnum = (typeof BidScalarFieldEnum)[keyof typeof BidScalarFieldEnum]


  export const AuctionDepositScalarFieldEnum: {
    id: 'id',
    auctionId: 'auctionId',
    userId: 'userId',
    amount: 'amount',
    status: 'status',
    paidAt: 'paidAt',
    refundedAt: 'refundedAt',
    createdAt: 'createdAt'
  };

  export type AuctionDepositScalarFieldEnum = (typeof AuctionDepositScalarFieldEnum)[keyof typeof AuctionDepositScalarFieldEnum]


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
   * Reference to a field of type 'AuctionType'
   */
  export type EnumAuctionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuctionType'>
    


  /**
   * Reference to a field of type 'AuctionType[]'
   */
  export type ListEnumAuctionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuctionType[]'>
    


  /**
   * Reference to a field of type 'AuctionStatus'
   */
  export type EnumAuctionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuctionStatus'>
    


  /**
   * Reference to a field of type 'AuctionStatus[]'
   */
  export type ListEnumAuctionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuctionStatus[]'>
    


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'BidStatus'
   */
  export type EnumBidStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BidStatus'>
    


  /**
   * Reference to a field of type 'BidStatus[]'
   */
  export type ListEnumBidStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BidStatus[]'>
    


  /**
   * Reference to a field of type 'DepositStatus'
   */
  export type EnumDepositStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DepositStatus'>
    


  /**
   * Reference to a field of type 'DepositStatus[]'
   */
  export type ListEnumDepositStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DepositStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type AuctionWhereInput = {
    AND?: AuctionWhereInput | AuctionWhereInput[]
    OR?: AuctionWhereInput[]
    NOT?: AuctionWhereInput | AuctionWhereInput[]
    id?: StringFilter<"Auction"> | string
    propertyId?: StringFilter<"Auction"> | string
    sellerId?: StringFilter<"Auction"> | string
    title?: StringFilter<"Auction"> | string
    description?: StringNullableFilter<"Auction"> | string | null
    type?: EnumAuctionTypeFilter<"Auction"> | $Enums.AuctionType
    status?: EnumAuctionStatusFilter<"Auction"> | $Enums.AuctionStatus
    startingPrice?: DecimalFilter<"Auction"> | Decimal | DecimalJsLike | number | string
    reservePrice?: DecimalNullableFilter<"Auction"> | Decimal | DecimalJsLike | number | string | null
    currentPrice?: DecimalNullableFilter<"Auction"> | Decimal | DecimalJsLike | number | string | null
    bidIncrement?: DecimalFilter<"Auction"> | Decimal | DecimalJsLike | number | string
    buyNowPrice?: DecimalNullableFilter<"Auction"> | Decimal | DecimalJsLike | number | string | null
    currency?: StringFilter<"Auction"> | string
    startTime?: DateTimeFilter<"Auction"> | Date | string
    endTime?: DateTimeFilter<"Auction"> | Date | string
    originalEndTime?: DateTimeFilter<"Auction"> | Date | string
    extensionMinutes?: IntFilter<"Auction"> | number
    depositRequired?: BoolFilter<"Auction"> | boolean
    depositAmount?: DecimalNullableFilter<"Auction"> | Decimal | DecimalJsLike | number | string | null
    depositPercent?: FloatNullableFilter<"Auction"> | number | null
    bidCount?: IntFilter<"Auction"> | number
    participantCount?: IntFilter<"Auction"> | number
    viewCount?: IntFilter<"Auction"> | number
    winnerId?: StringNullableFilter<"Auction"> | string | null
    winningBidId?: StringNullableFilter<"Auction"> | string | null
    winningPrice?: DecimalNullableFilter<"Auction"> | Decimal | DecimalJsLike | number | string | null
    antiSnipingEnabled?: BoolFilter<"Auction"> | boolean
    antiSnipingMinutes?: IntFilter<"Auction"> | number
    terms?: StringNullableFilter<"Auction"> | string | null
    isPublic?: BoolFilter<"Auction"> | boolean
    autoExtend?: BoolFilter<"Auction"> | boolean
    maxExtensions?: IntFilter<"Auction"> | number
    extensionsUsed?: IntFilter<"Auction"> | number
    createdAt?: DateTimeFilter<"Auction"> | Date | string
    updatedAt?: DateTimeFilter<"Auction"> | Date | string
    bids?: BidListRelationFilter
    deposits?: AuctionDepositListRelationFilter
  }

  export type AuctionOrderByWithRelationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    sellerId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    status?: SortOrder
    startingPrice?: SortOrder
    reservePrice?: SortOrderInput | SortOrder
    currentPrice?: SortOrderInput | SortOrder
    bidIncrement?: SortOrder
    buyNowPrice?: SortOrderInput | SortOrder
    currency?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    originalEndTime?: SortOrder
    extensionMinutes?: SortOrder
    depositRequired?: SortOrder
    depositAmount?: SortOrderInput | SortOrder
    depositPercent?: SortOrderInput | SortOrder
    bidCount?: SortOrder
    participantCount?: SortOrder
    viewCount?: SortOrder
    winnerId?: SortOrderInput | SortOrder
    winningBidId?: SortOrderInput | SortOrder
    winningPrice?: SortOrderInput | SortOrder
    antiSnipingEnabled?: SortOrder
    antiSnipingMinutes?: SortOrder
    terms?: SortOrderInput | SortOrder
    isPublic?: SortOrder
    autoExtend?: SortOrder
    maxExtensions?: SortOrder
    extensionsUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bids?: BidOrderByRelationAggregateInput
    deposits?: AuctionDepositOrderByRelationAggregateInput
  }

  export type AuctionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuctionWhereInput | AuctionWhereInput[]
    OR?: AuctionWhereInput[]
    NOT?: AuctionWhereInput | AuctionWhereInput[]
    propertyId?: StringFilter<"Auction"> | string
    sellerId?: StringFilter<"Auction"> | string
    title?: StringFilter<"Auction"> | string
    description?: StringNullableFilter<"Auction"> | string | null
    type?: EnumAuctionTypeFilter<"Auction"> | $Enums.AuctionType
    status?: EnumAuctionStatusFilter<"Auction"> | $Enums.AuctionStatus
    startingPrice?: DecimalFilter<"Auction"> | Decimal | DecimalJsLike | number | string
    reservePrice?: DecimalNullableFilter<"Auction"> | Decimal | DecimalJsLike | number | string | null
    currentPrice?: DecimalNullableFilter<"Auction"> | Decimal | DecimalJsLike | number | string | null
    bidIncrement?: DecimalFilter<"Auction"> | Decimal | DecimalJsLike | number | string
    buyNowPrice?: DecimalNullableFilter<"Auction"> | Decimal | DecimalJsLike | number | string | null
    currency?: StringFilter<"Auction"> | string
    startTime?: DateTimeFilter<"Auction"> | Date | string
    endTime?: DateTimeFilter<"Auction"> | Date | string
    originalEndTime?: DateTimeFilter<"Auction"> | Date | string
    extensionMinutes?: IntFilter<"Auction"> | number
    depositRequired?: BoolFilter<"Auction"> | boolean
    depositAmount?: DecimalNullableFilter<"Auction"> | Decimal | DecimalJsLike | number | string | null
    depositPercent?: FloatNullableFilter<"Auction"> | number | null
    bidCount?: IntFilter<"Auction"> | number
    participantCount?: IntFilter<"Auction"> | number
    viewCount?: IntFilter<"Auction"> | number
    winnerId?: StringNullableFilter<"Auction"> | string | null
    winningBidId?: StringNullableFilter<"Auction"> | string | null
    winningPrice?: DecimalNullableFilter<"Auction"> | Decimal | DecimalJsLike | number | string | null
    antiSnipingEnabled?: BoolFilter<"Auction"> | boolean
    antiSnipingMinutes?: IntFilter<"Auction"> | number
    terms?: StringNullableFilter<"Auction"> | string | null
    isPublic?: BoolFilter<"Auction"> | boolean
    autoExtend?: BoolFilter<"Auction"> | boolean
    maxExtensions?: IntFilter<"Auction"> | number
    extensionsUsed?: IntFilter<"Auction"> | number
    createdAt?: DateTimeFilter<"Auction"> | Date | string
    updatedAt?: DateTimeFilter<"Auction"> | Date | string
    bids?: BidListRelationFilter
    deposits?: AuctionDepositListRelationFilter
  }, "id">

  export type AuctionOrderByWithAggregationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    sellerId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    status?: SortOrder
    startingPrice?: SortOrder
    reservePrice?: SortOrderInput | SortOrder
    currentPrice?: SortOrderInput | SortOrder
    bidIncrement?: SortOrder
    buyNowPrice?: SortOrderInput | SortOrder
    currency?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    originalEndTime?: SortOrder
    extensionMinutes?: SortOrder
    depositRequired?: SortOrder
    depositAmount?: SortOrderInput | SortOrder
    depositPercent?: SortOrderInput | SortOrder
    bidCount?: SortOrder
    participantCount?: SortOrder
    viewCount?: SortOrder
    winnerId?: SortOrderInput | SortOrder
    winningBidId?: SortOrderInput | SortOrder
    winningPrice?: SortOrderInput | SortOrder
    antiSnipingEnabled?: SortOrder
    antiSnipingMinutes?: SortOrder
    terms?: SortOrderInput | SortOrder
    isPublic?: SortOrder
    autoExtend?: SortOrder
    maxExtensions?: SortOrder
    extensionsUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AuctionCountOrderByAggregateInput
    _avg?: AuctionAvgOrderByAggregateInput
    _max?: AuctionMaxOrderByAggregateInput
    _min?: AuctionMinOrderByAggregateInput
    _sum?: AuctionSumOrderByAggregateInput
  }

  export type AuctionScalarWhereWithAggregatesInput = {
    AND?: AuctionScalarWhereWithAggregatesInput | AuctionScalarWhereWithAggregatesInput[]
    OR?: AuctionScalarWhereWithAggregatesInput[]
    NOT?: AuctionScalarWhereWithAggregatesInput | AuctionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Auction"> | string
    propertyId?: StringWithAggregatesFilter<"Auction"> | string
    sellerId?: StringWithAggregatesFilter<"Auction"> | string
    title?: StringWithAggregatesFilter<"Auction"> | string
    description?: StringNullableWithAggregatesFilter<"Auction"> | string | null
    type?: EnumAuctionTypeWithAggregatesFilter<"Auction"> | $Enums.AuctionType
    status?: EnumAuctionStatusWithAggregatesFilter<"Auction"> | $Enums.AuctionStatus
    startingPrice?: DecimalWithAggregatesFilter<"Auction"> | Decimal | DecimalJsLike | number | string
    reservePrice?: DecimalNullableWithAggregatesFilter<"Auction"> | Decimal | DecimalJsLike | number | string | null
    currentPrice?: DecimalNullableWithAggregatesFilter<"Auction"> | Decimal | DecimalJsLike | number | string | null
    bidIncrement?: DecimalWithAggregatesFilter<"Auction"> | Decimal | DecimalJsLike | number | string
    buyNowPrice?: DecimalNullableWithAggregatesFilter<"Auction"> | Decimal | DecimalJsLike | number | string | null
    currency?: StringWithAggregatesFilter<"Auction"> | string
    startTime?: DateTimeWithAggregatesFilter<"Auction"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"Auction"> | Date | string
    originalEndTime?: DateTimeWithAggregatesFilter<"Auction"> | Date | string
    extensionMinutes?: IntWithAggregatesFilter<"Auction"> | number
    depositRequired?: BoolWithAggregatesFilter<"Auction"> | boolean
    depositAmount?: DecimalNullableWithAggregatesFilter<"Auction"> | Decimal | DecimalJsLike | number | string | null
    depositPercent?: FloatNullableWithAggregatesFilter<"Auction"> | number | null
    bidCount?: IntWithAggregatesFilter<"Auction"> | number
    participantCount?: IntWithAggregatesFilter<"Auction"> | number
    viewCount?: IntWithAggregatesFilter<"Auction"> | number
    winnerId?: StringNullableWithAggregatesFilter<"Auction"> | string | null
    winningBidId?: StringNullableWithAggregatesFilter<"Auction"> | string | null
    winningPrice?: DecimalNullableWithAggregatesFilter<"Auction"> | Decimal | DecimalJsLike | number | string | null
    antiSnipingEnabled?: BoolWithAggregatesFilter<"Auction"> | boolean
    antiSnipingMinutes?: IntWithAggregatesFilter<"Auction"> | number
    terms?: StringNullableWithAggregatesFilter<"Auction"> | string | null
    isPublic?: BoolWithAggregatesFilter<"Auction"> | boolean
    autoExtend?: BoolWithAggregatesFilter<"Auction"> | boolean
    maxExtensions?: IntWithAggregatesFilter<"Auction"> | number
    extensionsUsed?: IntWithAggregatesFilter<"Auction"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Auction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Auction"> | Date | string
  }

  export type BidWhereInput = {
    AND?: BidWhereInput | BidWhereInput[]
    OR?: BidWhereInput[]
    NOT?: BidWhereInput | BidWhereInput[]
    id?: StringFilter<"Bid"> | string
    auctionId?: StringFilter<"Bid"> | string
    bidderId?: StringFilter<"Bid"> | string
    amount?: DecimalFilter<"Bid"> | Decimal | DecimalJsLike | number | string
    status?: EnumBidStatusFilter<"Bid"> | $Enums.BidStatus
    isAutoBid?: BoolFilter<"Bid"> | boolean
    maxAmount?: DecimalNullableFilter<"Bid"> | Decimal | DecimalJsLike | number | string | null
    ipAddress?: StringNullableFilter<"Bid"> | string | null
    userAgent?: StringNullableFilter<"Bid"> | string | null
    createdAt?: DateTimeFilter<"Bid"> | Date | string
    auction?: XOR<AuctionScalarRelationFilter, AuctionWhereInput>
  }

  export type BidOrderByWithRelationInput = {
    id?: SortOrder
    auctionId?: SortOrder
    bidderId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    isAutoBid?: SortOrder
    maxAmount?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    auction?: AuctionOrderByWithRelationInput
  }

  export type BidWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BidWhereInput | BidWhereInput[]
    OR?: BidWhereInput[]
    NOT?: BidWhereInput | BidWhereInput[]
    auctionId?: StringFilter<"Bid"> | string
    bidderId?: StringFilter<"Bid"> | string
    amount?: DecimalFilter<"Bid"> | Decimal | DecimalJsLike | number | string
    status?: EnumBidStatusFilter<"Bid"> | $Enums.BidStatus
    isAutoBid?: BoolFilter<"Bid"> | boolean
    maxAmount?: DecimalNullableFilter<"Bid"> | Decimal | DecimalJsLike | number | string | null
    ipAddress?: StringNullableFilter<"Bid"> | string | null
    userAgent?: StringNullableFilter<"Bid"> | string | null
    createdAt?: DateTimeFilter<"Bid"> | Date | string
    auction?: XOR<AuctionScalarRelationFilter, AuctionWhereInput>
  }, "id">

  export type BidOrderByWithAggregationInput = {
    id?: SortOrder
    auctionId?: SortOrder
    bidderId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    isAutoBid?: SortOrder
    maxAmount?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: BidCountOrderByAggregateInput
    _avg?: BidAvgOrderByAggregateInput
    _max?: BidMaxOrderByAggregateInput
    _min?: BidMinOrderByAggregateInput
    _sum?: BidSumOrderByAggregateInput
  }

  export type BidScalarWhereWithAggregatesInput = {
    AND?: BidScalarWhereWithAggregatesInput | BidScalarWhereWithAggregatesInput[]
    OR?: BidScalarWhereWithAggregatesInput[]
    NOT?: BidScalarWhereWithAggregatesInput | BidScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Bid"> | string
    auctionId?: StringWithAggregatesFilter<"Bid"> | string
    bidderId?: StringWithAggregatesFilter<"Bid"> | string
    amount?: DecimalWithAggregatesFilter<"Bid"> | Decimal | DecimalJsLike | number | string
    status?: EnumBidStatusWithAggregatesFilter<"Bid"> | $Enums.BidStatus
    isAutoBid?: BoolWithAggregatesFilter<"Bid"> | boolean
    maxAmount?: DecimalNullableWithAggregatesFilter<"Bid"> | Decimal | DecimalJsLike | number | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"Bid"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Bid"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Bid"> | Date | string
  }

  export type AuctionDepositWhereInput = {
    AND?: AuctionDepositWhereInput | AuctionDepositWhereInput[]
    OR?: AuctionDepositWhereInput[]
    NOT?: AuctionDepositWhereInput | AuctionDepositWhereInput[]
    id?: StringFilter<"AuctionDeposit"> | string
    auctionId?: StringFilter<"AuctionDeposit"> | string
    userId?: StringFilter<"AuctionDeposit"> | string
    amount?: DecimalFilter<"AuctionDeposit"> | Decimal | DecimalJsLike | number | string
    status?: EnumDepositStatusFilter<"AuctionDeposit"> | $Enums.DepositStatus
    paidAt?: DateTimeNullableFilter<"AuctionDeposit"> | Date | string | null
    refundedAt?: DateTimeNullableFilter<"AuctionDeposit"> | Date | string | null
    createdAt?: DateTimeFilter<"AuctionDeposit"> | Date | string
    auction?: XOR<AuctionScalarRelationFilter, AuctionWhereInput>
  }

  export type AuctionDepositOrderByWithRelationInput = {
    id?: SortOrder
    auctionId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    refundedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    auction?: AuctionOrderByWithRelationInput
  }

  export type AuctionDepositWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    auctionId_userId?: AuctionDepositAuctionIdUserIdCompoundUniqueInput
    AND?: AuctionDepositWhereInput | AuctionDepositWhereInput[]
    OR?: AuctionDepositWhereInput[]
    NOT?: AuctionDepositWhereInput | AuctionDepositWhereInput[]
    auctionId?: StringFilter<"AuctionDeposit"> | string
    userId?: StringFilter<"AuctionDeposit"> | string
    amount?: DecimalFilter<"AuctionDeposit"> | Decimal | DecimalJsLike | number | string
    status?: EnumDepositStatusFilter<"AuctionDeposit"> | $Enums.DepositStatus
    paidAt?: DateTimeNullableFilter<"AuctionDeposit"> | Date | string | null
    refundedAt?: DateTimeNullableFilter<"AuctionDeposit"> | Date | string | null
    createdAt?: DateTimeFilter<"AuctionDeposit"> | Date | string
    auction?: XOR<AuctionScalarRelationFilter, AuctionWhereInput>
  }, "id" | "auctionId_userId">

  export type AuctionDepositOrderByWithAggregationInput = {
    id?: SortOrder
    auctionId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    refundedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuctionDepositCountOrderByAggregateInput
    _avg?: AuctionDepositAvgOrderByAggregateInput
    _max?: AuctionDepositMaxOrderByAggregateInput
    _min?: AuctionDepositMinOrderByAggregateInput
    _sum?: AuctionDepositSumOrderByAggregateInput
  }

  export type AuctionDepositScalarWhereWithAggregatesInput = {
    AND?: AuctionDepositScalarWhereWithAggregatesInput | AuctionDepositScalarWhereWithAggregatesInput[]
    OR?: AuctionDepositScalarWhereWithAggregatesInput[]
    NOT?: AuctionDepositScalarWhereWithAggregatesInput | AuctionDepositScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuctionDeposit"> | string
    auctionId?: StringWithAggregatesFilter<"AuctionDeposit"> | string
    userId?: StringWithAggregatesFilter<"AuctionDeposit"> | string
    amount?: DecimalWithAggregatesFilter<"AuctionDeposit"> | Decimal | DecimalJsLike | number | string
    status?: EnumDepositStatusWithAggregatesFilter<"AuctionDeposit"> | $Enums.DepositStatus
    paidAt?: DateTimeNullableWithAggregatesFilter<"AuctionDeposit"> | Date | string | null
    refundedAt?: DateTimeNullableWithAggregatesFilter<"AuctionDeposit"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AuctionDeposit"> | Date | string
  }

  export type AuctionCreateInput = {
    id?: string
    propertyId: string
    sellerId: string
    title: string
    description?: string | null
    type?: $Enums.AuctionType
    status?: $Enums.AuctionStatus
    startingPrice: Decimal | DecimalJsLike | number | string
    reservePrice?: Decimal | DecimalJsLike | number | string | null
    currentPrice?: Decimal | DecimalJsLike | number | string | null
    bidIncrement: Decimal | DecimalJsLike | number | string
    buyNowPrice?: Decimal | DecimalJsLike | number | string | null
    currency?: string
    startTime: Date | string
    endTime: Date | string
    originalEndTime: Date | string
    extensionMinutes?: number
    depositRequired?: boolean
    depositAmount?: Decimal | DecimalJsLike | number | string | null
    depositPercent?: number | null
    bidCount?: number
    participantCount?: number
    viewCount?: number
    winnerId?: string | null
    winningBidId?: string | null
    winningPrice?: Decimal | DecimalJsLike | number | string | null
    antiSnipingEnabled?: boolean
    antiSnipingMinutes?: number
    terms?: string | null
    isPublic?: boolean
    autoExtend?: boolean
    maxExtensions?: number
    extensionsUsed?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bids?: BidCreateNestedManyWithoutAuctionInput
    deposits?: AuctionDepositCreateNestedManyWithoutAuctionInput
  }

  export type AuctionUncheckedCreateInput = {
    id?: string
    propertyId: string
    sellerId: string
    title: string
    description?: string | null
    type?: $Enums.AuctionType
    status?: $Enums.AuctionStatus
    startingPrice: Decimal | DecimalJsLike | number | string
    reservePrice?: Decimal | DecimalJsLike | number | string | null
    currentPrice?: Decimal | DecimalJsLike | number | string | null
    bidIncrement: Decimal | DecimalJsLike | number | string
    buyNowPrice?: Decimal | DecimalJsLike | number | string | null
    currency?: string
    startTime: Date | string
    endTime: Date | string
    originalEndTime: Date | string
    extensionMinutes?: number
    depositRequired?: boolean
    depositAmount?: Decimal | DecimalJsLike | number | string | null
    depositPercent?: number | null
    bidCount?: number
    participantCount?: number
    viewCount?: number
    winnerId?: string | null
    winningBidId?: string | null
    winningPrice?: Decimal | DecimalJsLike | number | string | null
    antiSnipingEnabled?: boolean
    antiSnipingMinutes?: number
    terms?: string | null
    isPublic?: boolean
    autoExtend?: boolean
    maxExtensions?: number
    extensionsUsed?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bids?: BidUncheckedCreateNestedManyWithoutAuctionInput
    deposits?: AuctionDepositUncheckedCreateNestedManyWithoutAuctionInput
  }

  export type AuctionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAuctionTypeFieldUpdateOperationsInput | $Enums.AuctionType
    status?: EnumAuctionStatusFieldUpdateOperationsInput | $Enums.AuctionStatus
    startingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reservePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currentPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bidIncrement?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    buyNowPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    originalEndTime?: DateTimeFieldUpdateOperationsInput | Date | string
    extensionMinutes?: IntFieldUpdateOperationsInput | number
    depositRequired?: BoolFieldUpdateOperationsInput | boolean
    depositAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    depositPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    bidCount?: IntFieldUpdateOperationsInput | number
    participantCount?: IntFieldUpdateOperationsInput | number
    viewCount?: IntFieldUpdateOperationsInput | number
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    winningBidId?: NullableStringFieldUpdateOperationsInput | string | null
    winningPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    antiSnipingEnabled?: BoolFieldUpdateOperationsInput | boolean
    antiSnipingMinutes?: IntFieldUpdateOperationsInput | number
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    autoExtend?: BoolFieldUpdateOperationsInput | boolean
    maxExtensions?: IntFieldUpdateOperationsInput | number
    extensionsUsed?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bids?: BidUpdateManyWithoutAuctionNestedInput
    deposits?: AuctionDepositUpdateManyWithoutAuctionNestedInput
  }

  export type AuctionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAuctionTypeFieldUpdateOperationsInput | $Enums.AuctionType
    status?: EnumAuctionStatusFieldUpdateOperationsInput | $Enums.AuctionStatus
    startingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reservePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currentPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bidIncrement?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    buyNowPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    originalEndTime?: DateTimeFieldUpdateOperationsInput | Date | string
    extensionMinutes?: IntFieldUpdateOperationsInput | number
    depositRequired?: BoolFieldUpdateOperationsInput | boolean
    depositAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    depositPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    bidCount?: IntFieldUpdateOperationsInput | number
    participantCount?: IntFieldUpdateOperationsInput | number
    viewCount?: IntFieldUpdateOperationsInput | number
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    winningBidId?: NullableStringFieldUpdateOperationsInput | string | null
    winningPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    antiSnipingEnabled?: BoolFieldUpdateOperationsInput | boolean
    antiSnipingMinutes?: IntFieldUpdateOperationsInput | number
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    autoExtend?: BoolFieldUpdateOperationsInput | boolean
    maxExtensions?: IntFieldUpdateOperationsInput | number
    extensionsUsed?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bids?: BidUncheckedUpdateManyWithoutAuctionNestedInput
    deposits?: AuctionDepositUncheckedUpdateManyWithoutAuctionNestedInput
  }

  export type AuctionCreateManyInput = {
    id?: string
    propertyId: string
    sellerId: string
    title: string
    description?: string | null
    type?: $Enums.AuctionType
    status?: $Enums.AuctionStatus
    startingPrice: Decimal | DecimalJsLike | number | string
    reservePrice?: Decimal | DecimalJsLike | number | string | null
    currentPrice?: Decimal | DecimalJsLike | number | string | null
    bidIncrement: Decimal | DecimalJsLike | number | string
    buyNowPrice?: Decimal | DecimalJsLike | number | string | null
    currency?: string
    startTime: Date | string
    endTime: Date | string
    originalEndTime: Date | string
    extensionMinutes?: number
    depositRequired?: boolean
    depositAmount?: Decimal | DecimalJsLike | number | string | null
    depositPercent?: number | null
    bidCount?: number
    participantCount?: number
    viewCount?: number
    winnerId?: string | null
    winningBidId?: string | null
    winningPrice?: Decimal | DecimalJsLike | number | string | null
    antiSnipingEnabled?: boolean
    antiSnipingMinutes?: number
    terms?: string | null
    isPublic?: boolean
    autoExtend?: boolean
    maxExtensions?: number
    extensionsUsed?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuctionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAuctionTypeFieldUpdateOperationsInput | $Enums.AuctionType
    status?: EnumAuctionStatusFieldUpdateOperationsInput | $Enums.AuctionStatus
    startingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reservePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currentPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bidIncrement?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    buyNowPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    originalEndTime?: DateTimeFieldUpdateOperationsInput | Date | string
    extensionMinutes?: IntFieldUpdateOperationsInput | number
    depositRequired?: BoolFieldUpdateOperationsInput | boolean
    depositAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    depositPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    bidCount?: IntFieldUpdateOperationsInput | number
    participantCount?: IntFieldUpdateOperationsInput | number
    viewCount?: IntFieldUpdateOperationsInput | number
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    winningBidId?: NullableStringFieldUpdateOperationsInput | string | null
    winningPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    antiSnipingEnabled?: BoolFieldUpdateOperationsInput | boolean
    antiSnipingMinutes?: IntFieldUpdateOperationsInput | number
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    autoExtend?: BoolFieldUpdateOperationsInput | boolean
    maxExtensions?: IntFieldUpdateOperationsInput | number
    extensionsUsed?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuctionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAuctionTypeFieldUpdateOperationsInput | $Enums.AuctionType
    status?: EnumAuctionStatusFieldUpdateOperationsInput | $Enums.AuctionStatus
    startingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reservePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currentPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bidIncrement?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    buyNowPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    originalEndTime?: DateTimeFieldUpdateOperationsInput | Date | string
    extensionMinutes?: IntFieldUpdateOperationsInput | number
    depositRequired?: BoolFieldUpdateOperationsInput | boolean
    depositAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    depositPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    bidCount?: IntFieldUpdateOperationsInput | number
    participantCount?: IntFieldUpdateOperationsInput | number
    viewCount?: IntFieldUpdateOperationsInput | number
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    winningBidId?: NullableStringFieldUpdateOperationsInput | string | null
    winningPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    antiSnipingEnabled?: BoolFieldUpdateOperationsInput | boolean
    antiSnipingMinutes?: IntFieldUpdateOperationsInput | number
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    autoExtend?: BoolFieldUpdateOperationsInput | boolean
    maxExtensions?: IntFieldUpdateOperationsInput | number
    extensionsUsed?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BidCreateInput = {
    id?: string
    bidderId: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.BidStatus
    isAutoBid?: boolean
    maxAmount?: Decimal | DecimalJsLike | number | string | null
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    auction: AuctionCreateNestedOneWithoutBidsInput
  }

  export type BidUncheckedCreateInput = {
    id?: string
    auctionId: string
    bidderId: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.BidStatus
    isAutoBid?: boolean
    maxAmount?: Decimal | DecimalJsLike | number | string | null
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type BidUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bidderId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBidStatusFieldUpdateOperationsInput | $Enums.BidStatus
    isAutoBid?: BoolFieldUpdateOperationsInput | boolean
    maxAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auction?: AuctionUpdateOneRequiredWithoutBidsNestedInput
  }

  export type BidUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    auctionId?: StringFieldUpdateOperationsInput | string
    bidderId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBidStatusFieldUpdateOperationsInput | $Enums.BidStatus
    isAutoBid?: BoolFieldUpdateOperationsInput | boolean
    maxAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BidCreateManyInput = {
    id?: string
    auctionId: string
    bidderId: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.BidStatus
    isAutoBid?: boolean
    maxAmount?: Decimal | DecimalJsLike | number | string | null
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type BidUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bidderId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBidStatusFieldUpdateOperationsInput | $Enums.BidStatus
    isAutoBid?: BoolFieldUpdateOperationsInput | boolean
    maxAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BidUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    auctionId?: StringFieldUpdateOperationsInput | string
    bidderId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBidStatusFieldUpdateOperationsInput | $Enums.BidStatus
    isAutoBid?: BoolFieldUpdateOperationsInput | boolean
    maxAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuctionDepositCreateInput = {
    id?: string
    userId: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.DepositStatus
    paidAt?: Date | string | null
    refundedAt?: Date | string | null
    createdAt?: Date | string
    auction: AuctionCreateNestedOneWithoutDepositsInput
  }

  export type AuctionDepositUncheckedCreateInput = {
    id?: string
    auctionId: string
    userId: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.DepositStatus
    paidAt?: Date | string | null
    refundedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type AuctionDepositUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumDepositStatusFieldUpdateOperationsInput | $Enums.DepositStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auction?: AuctionUpdateOneRequiredWithoutDepositsNestedInput
  }

  export type AuctionDepositUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    auctionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumDepositStatusFieldUpdateOperationsInput | $Enums.DepositStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuctionDepositCreateManyInput = {
    id?: string
    auctionId: string
    userId: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.DepositStatus
    paidAt?: Date | string | null
    refundedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type AuctionDepositUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumDepositStatusFieldUpdateOperationsInput | $Enums.DepositStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuctionDepositUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    auctionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumDepositStatusFieldUpdateOperationsInput | $Enums.DepositStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type EnumAuctionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AuctionType | EnumAuctionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AuctionType[] | ListEnumAuctionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuctionType[] | ListEnumAuctionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAuctionTypeFilter<$PrismaModel> | $Enums.AuctionType
  }

  export type EnumAuctionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AuctionStatus | EnumAuctionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AuctionStatus[] | ListEnumAuctionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuctionStatus[] | ListEnumAuctionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAuctionStatusFilter<$PrismaModel> | $Enums.AuctionStatus
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BidListRelationFilter = {
    every?: BidWhereInput
    some?: BidWhereInput
    none?: BidWhereInput
  }

  export type AuctionDepositListRelationFilter = {
    every?: AuctionDepositWhereInput
    some?: AuctionDepositWhereInput
    none?: AuctionDepositWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BidOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuctionDepositOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuctionCountOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    sellerId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    status?: SortOrder
    startingPrice?: SortOrder
    reservePrice?: SortOrder
    currentPrice?: SortOrder
    bidIncrement?: SortOrder
    buyNowPrice?: SortOrder
    currency?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    originalEndTime?: SortOrder
    extensionMinutes?: SortOrder
    depositRequired?: SortOrder
    depositAmount?: SortOrder
    depositPercent?: SortOrder
    bidCount?: SortOrder
    participantCount?: SortOrder
    viewCount?: SortOrder
    winnerId?: SortOrder
    winningBidId?: SortOrder
    winningPrice?: SortOrder
    antiSnipingEnabled?: SortOrder
    antiSnipingMinutes?: SortOrder
    terms?: SortOrder
    isPublic?: SortOrder
    autoExtend?: SortOrder
    maxExtensions?: SortOrder
    extensionsUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuctionAvgOrderByAggregateInput = {
    startingPrice?: SortOrder
    reservePrice?: SortOrder
    currentPrice?: SortOrder
    bidIncrement?: SortOrder
    buyNowPrice?: SortOrder
    extensionMinutes?: SortOrder
    depositAmount?: SortOrder
    depositPercent?: SortOrder
    bidCount?: SortOrder
    participantCount?: SortOrder
    viewCount?: SortOrder
    winningPrice?: SortOrder
    antiSnipingMinutes?: SortOrder
    maxExtensions?: SortOrder
    extensionsUsed?: SortOrder
  }

  export type AuctionMaxOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    sellerId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    status?: SortOrder
    startingPrice?: SortOrder
    reservePrice?: SortOrder
    currentPrice?: SortOrder
    bidIncrement?: SortOrder
    buyNowPrice?: SortOrder
    currency?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    originalEndTime?: SortOrder
    extensionMinutes?: SortOrder
    depositRequired?: SortOrder
    depositAmount?: SortOrder
    depositPercent?: SortOrder
    bidCount?: SortOrder
    participantCount?: SortOrder
    viewCount?: SortOrder
    winnerId?: SortOrder
    winningBidId?: SortOrder
    winningPrice?: SortOrder
    antiSnipingEnabled?: SortOrder
    antiSnipingMinutes?: SortOrder
    terms?: SortOrder
    isPublic?: SortOrder
    autoExtend?: SortOrder
    maxExtensions?: SortOrder
    extensionsUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuctionMinOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    sellerId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    status?: SortOrder
    startingPrice?: SortOrder
    reservePrice?: SortOrder
    currentPrice?: SortOrder
    bidIncrement?: SortOrder
    buyNowPrice?: SortOrder
    currency?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    originalEndTime?: SortOrder
    extensionMinutes?: SortOrder
    depositRequired?: SortOrder
    depositAmount?: SortOrder
    depositPercent?: SortOrder
    bidCount?: SortOrder
    participantCount?: SortOrder
    viewCount?: SortOrder
    winnerId?: SortOrder
    winningBidId?: SortOrder
    winningPrice?: SortOrder
    antiSnipingEnabled?: SortOrder
    antiSnipingMinutes?: SortOrder
    terms?: SortOrder
    isPublic?: SortOrder
    autoExtend?: SortOrder
    maxExtensions?: SortOrder
    extensionsUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuctionSumOrderByAggregateInput = {
    startingPrice?: SortOrder
    reservePrice?: SortOrder
    currentPrice?: SortOrder
    bidIncrement?: SortOrder
    buyNowPrice?: SortOrder
    extensionMinutes?: SortOrder
    depositAmount?: SortOrder
    depositPercent?: SortOrder
    bidCount?: SortOrder
    participantCount?: SortOrder
    viewCount?: SortOrder
    winningPrice?: SortOrder
    antiSnipingMinutes?: SortOrder
    maxExtensions?: SortOrder
    extensionsUsed?: SortOrder
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

  export type EnumAuctionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuctionType | EnumAuctionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AuctionType[] | ListEnumAuctionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuctionType[] | ListEnumAuctionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAuctionTypeWithAggregatesFilter<$PrismaModel> | $Enums.AuctionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuctionTypeFilter<$PrismaModel>
    _max?: NestedEnumAuctionTypeFilter<$PrismaModel>
  }

  export type EnumAuctionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuctionStatus | EnumAuctionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AuctionStatus[] | ListEnumAuctionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuctionStatus[] | ListEnumAuctionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAuctionStatusWithAggregatesFilter<$PrismaModel> | $Enums.AuctionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuctionStatusFilter<$PrismaModel>
    _max?: NestedEnumAuctionStatusFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumBidStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BidStatus | EnumBidStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BidStatus[] | ListEnumBidStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BidStatus[] | ListEnumBidStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBidStatusFilter<$PrismaModel> | $Enums.BidStatus
  }

  export type AuctionScalarRelationFilter = {
    is?: AuctionWhereInput
    isNot?: AuctionWhereInput
  }

  export type BidCountOrderByAggregateInput = {
    id?: SortOrder
    auctionId?: SortOrder
    bidderId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    isAutoBid?: SortOrder
    maxAmount?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type BidAvgOrderByAggregateInput = {
    amount?: SortOrder
    maxAmount?: SortOrder
  }

  export type BidMaxOrderByAggregateInput = {
    id?: SortOrder
    auctionId?: SortOrder
    bidderId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    isAutoBid?: SortOrder
    maxAmount?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type BidMinOrderByAggregateInput = {
    id?: SortOrder
    auctionId?: SortOrder
    bidderId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    isAutoBid?: SortOrder
    maxAmount?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type BidSumOrderByAggregateInput = {
    amount?: SortOrder
    maxAmount?: SortOrder
  }

  export type EnumBidStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BidStatus | EnumBidStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BidStatus[] | ListEnumBidStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BidStatus[] | ListEnumBidStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBidStatusWithAggregatesFilter<$PrismaModel> | $Enums.BidStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBidStatusFilter<$PrismaModel>
    _max?: NestedEnumBidStatusFilter<$PrismaModel>
  }

  export type EnumDepositStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DepositStatus | EnumDepositStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DepositStatus[] | ListEnumDepositStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DepositStatus[] | ListEnumDepositStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDepositStatusFilter<$PrismaModel> | $Enums.DepositStatus
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

  export type AuctionDepositAuctionIdUserIdCompoundUniqueInput = {
    auctionId: string
    userId: string
  }

  export type AuctionDepositCountOrderByAggregateInput = {
    id?: SortOrder
    auctionId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paidAt?: SortOrder
    refundedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type AuctionDepositAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type AuctionDepositMaxOrderByAggregateInput = {
    id?: SortOrder
    auctionId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paidAt?: SortOrder
    refundedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type AuctionDepositMinOrderByAggregateInput = {
    id?: SortOrder
    auctionId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paidAt?: SortOrder
    refundedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type AuctionDepositSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumDepositStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DepositStatus | EnumDepositStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DepositStatus[] | ListEnumDepositStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DepositStatus[] | ListEnumDepositStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDepositStatusWithAggregatesFilter<$PrismaModel> | $Enums.DepositStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDepositStatusFilter<$PrismaModel>
    _max?: NestedEnumDepositStatusFilter<$PrismaModel>
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

  export type BidCreateNestedManyWithoutAuctionInput = {
    create?: XOR<BidCreateWithoutAuctionInput, BidUncheckedCreateWithoutAuctionInput> | BidCreateWithoutAuctionInput[] | BidUncheckedCreateWithoutAuctionInput[]
    connectOrCreate?: BidCreateOrConnectWithoutAuctionInput | BidCreateOrConnectWithoutAuctionInput[]
    createMany?: BidCreateManyAuctionInputEnvelope
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
  }

  export type AuctionDepositCreateNestedManyWithoutAuctionInput = {
    create?: XOR<AuctionDepositCreateWithoutAuctionInput, AuctionDepositUncheckedCreateWithoutAuctionInput> | AuctionDepositCreateWithoutAuctionInput[] | AuctionDepositUncheckedCreateWithoutAuctionInput[]
    connectOrCreate?: AuctionDepositCreateOrConnectWithoutAuctionInput | AuctionDepositCreateOrConnectWithoutAuctionInput[]
    createMany?: AuctionDepositCreateManyAuctionInputEnvelope
    connect?: AuctionDepositWhereUniqueInput | AuctionDepositWhereUniqueInput[]
  }

  export type BidUncheckedCreateNestedManyWithoutAuctionInput = {
    create?: XOR<BidCreateWithoutAuctionInput, BidUncheckedCreateWithoutAuctionInput> | BidCreateWithoutAuctionInput[] | BidUncheckedCreateWithoutAuctionInput[]
    connectOrCreate?: BidCreateOrConnectWithoutAuctionInput | BidCreateOrConnectWithoutAuctionInput[]
    createMany?: BidCreateManyAuctionInputEnvelope
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
  }

  export type AuctionDepositUncheckedCreateNestedManyWithoutAuctionInput = {
    create?: XOR<AuctionDepositCreateWithoutAuctionInput, AuctionDepositUncheckedCreateWithoutAuctionInput> | AuctionDepositCreateWithoutAuctionInput[] | AuctionDepositUncheckedCreateWithoutAuctionInput[]
    connectOrCreate?: AuctionDepositCreateOrConnectWithoutAuctionInput | AuctionDepositCreateOrConnectWithoutAuctionInput[]
    createMany?: AuctionDepositCreateManyAuctionInputEnvelope
    connect?: AuctionDepositWhereUniqueInput | AuctionDepositWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumAuctionTypeFieldUpdateOperationsInput = {
    set?: $Enums.AuctionType
  }

  export type EnumAuctionStatusFieldUpdateOperationsInput = {
    set?: $Enums.AuctionStatus
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BidUpdateManyWithoutAuctionNestedInput = {
    create?: XOR<BidCreateWithoutAuctionInput, BidUncheckedCreateWithoutAuctionInput> | BidCreateWithoutAuctionInput[] | BidUncheckedCreateWithoutAuctionInput[]
    connectOrCreate?: BidCreateOrConnectWithoutAuctionInput | BidCreateOrConnectWithoutAuctionInput[]
    upsert?: BidUpsertWithWhereUniqueWithoutAuctionInput | BidUpsertWithWhereUniqueWithoutAuctionInput[]
    createMany?: BidCreateManyAuctionInputEnvelope
    set?: BidWhereUniqueInput | BidWhereUniqueInput[]
    disconnect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    delete?: BidWhereUniqueInput | BidWhereUniqueInput[]
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    update?: BidUpdateWithWhereUniqueWithoutAuctionInput | BidUpdateWithWhereUniqueWithoutAuctionInput[]
    updateMany?: BidUpdateManyWithWhereWithoutAuctionInput | BidUpdateManyWithWhereWithoutAuctionInput[]
    deleteMany?: BidScalarWhereInput | BidScalarWhereInput[]
  }

  export type AuctionDepositUpdateManyWithoutAuctionNestedInput = {
    create?: XOR<AuctionDepositCreateWithoutAuctionInput, AuctionDepositUncheckedCreateWithoutAuctionInput> | AuctionDepositCreateWithoutAuctionInput[] | AuctionDepositUncheckedCreateWithoutAuctionInput[]
    connectOrCreate?: AuctionDepositCreateOrConnectWithoutAuctionInput | AuctionDepositCreateOrConnectWithoutAuctionInput[]
    upsert?: AuctionDepositUpsertWithWhereUniqueWithoutAuctionInput | AuctionDepositUpsertWithWhereUniqueWithoutAuctionInput[]
    createMany?: AuctionDepositCreateManyAuctionInputEnvelope
    set?: AuctionDepositWhereUniqueInput | AuctionDepositWhereUniqueInput[]
    disconnect?: AuctionDepositWhereUniqueInput | AuctionDepositWhereUniqueInput[]
    delete?: AuctionDepositWhereUniqueInput | AuctionDepositWhereUniqueInput[]
    connect?: AuctionDepositWhereUniqueInput | AuctionDepositWhereUniqueInput[]
    update?: AuctionDepositUpdateWithWhereUniqueWithoutAuctionInput | AuctionDepositUpdateWithWhereUniqueWithoutAuctionInput[]
    updateMany?: AuctionDepositUpdateManyWithWhereWithoutAuctionInput | AuctionDepositUpdateManyWithWhereWithoutAuctionInput[]
    deleteMany?: AuctionDepositScalarWhereInput | AuctionDepositScalarWhereInput[]
  }

  export type BidUncheckedUpdateManyWithoutAuctionNestedInput = {
    create?: XOR<BidCreateWithoutAuctionInput, BidUncheckedCreateWithoutAuctionInput> | BidCreateWithoutAuctionInput[] | BidUncheckedCreateWithoutAuctionInput[]
    connectOrCreate?: BidCreateOrConnectWithoutAuctionInput | BidCreateOrConnectWithoutAuctionInput[]
    upsert?: BidUpsertWithWhereUniqueWithoutAuctionInput | BidUpsertWithWhereUniqueWithoutAuctionInput[]
    createMany?: BidCreateManyAuctionInputEnvelope
    set?: BidWhereUniqueInput | BidWhereUniqueInput[]
    disconnect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    delete?: BidWhereUniqueInput | BidWhereUniqueInput[]
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    update?: BidUpdateWithWhereUniqueWithoutAuctionInput | BidUpdateWithWhereUniqueWithoutAuctionInput[]
    updateMany?: BidUpdateManyWithWhereWithoutAuctionInput | BidUpdateManyWithWhereWithoutAuctionInput[]
    deleteMany?: BidScalarWhereInput | BidScalarWhereInput[]
  }

  export type AuctionDepositUncheckedUpdateManyWithoutAuctionNestedInput = {
    create?: XOR<AuctionDepositCreateWithoutAuctionInput, AuctionDepositUncheckedCreateWithoutAuctionInput> | AuctionDepositCreateWithoutAuctionInput[] | AuctionDepositUncheckedCreateWithoutAuctionInput[]
    connectOrCreate?: AuctionDepositCreateOrConnectWithoutAuctionInput | AuctionDepositCreateOrConnectWithoutAuctionInput[]
    upsert?: AuctionDepositUpsertWithWhereUniqueWithoutAuctionInput | AuctionDepositUpsertWithWhereUniqueWithoutAuctionInput[]
    createMany?: AuctionDepositCreateManyAuctionInputEnvelope
    set?: AuctionDepositWhereUniqueInput | AuctionDepositWhereUniqueInput[]
    disconnect?: AuctionDepositWhereUniqueInput | AuctionDepositWhereUniqueInput[]
    delete?: AuctionDepositWhereUniqueInput | AuctionDepositWhereUniqueInput[]
    connect?: AuctionDepositWhereUniqueInput | AuctionDepositWhereUniqueInput[]
    update?: AuctionDepositUpdateWithWhereUniqueWithoutAuctionInput | AuctionDepositUpdateWithWhereUniqueWithoutAuctionInput[]
    updateMany?: AuctionDepositUpdateManyWithWhereWithoutAuctionInput | AuctionDepositUpdateManyWithWhereWithoutAuctionInput[]
    deleteMany?: AuctionDepositScalarWhereInput | AuctionDepositScalarWhereInput[]
  }

  export type AuctionCreateNestedOneWithoutBidsInput = {
    create?: XOR<AuctionCreateWithoutBidsInput, AuctionUncheckedCreateWithoutBidsInput>
    connectOrCreate?: AuctionCreateOrConnectWithoutBidsInput
    connect?: AuctionWhereUniqueInput
  }

  export type EnumBidStatusFieldUpdateOperationsInput = {
    set?: $Enums.BidStatus
  }

  export type AuctionUpdateOneRequiredWithoutBidsNestedInput = {
    create?: XOR<AuctionCreateWithoutBidsInput, AuctionUncheckedCreateWithoutBidsInput>
    connectOrCreate?: AuctionCreateOrConnectWithoutBidsInput
    upsert?: AuctionUpsertWithoutBidsInput
    connect?: AuctionWhereUniqueInput
    update?: XOR<XOR<AuctionUpdateToOneWithWhereWithoutBidsInput, AuctionUpdateWithoutBidsInput>, AuctionUncheckedUpdateWithoutBidsInput>
  }

  export type AuctionCreateNestedOneWithoutDepositsInput = {
    create?: XOR<AuctionCreateWithoutDepositsInput, AuctionUncheckedCreateWithoutDepositsInput>
    connectOrCreate?: AuctionCreateOrConnectWithoutDepositsInput
    connect?: AuctionWhereUniqueInput
  }

  export type EnumDepositStatusFieldUpdateOperationsInput = {
    set?: $Enums.DepositStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AuctionUpdateOneRequiredWithoutDepositsNestedInput = {
    create?: XOR<AuctionCreateWithoutDepositsInput, AuctionUncheckedCreateWithoutDepositsInput>
    connectOrCreate?: AuctionCreateOrConnectWithoutDepositsInput
    upsert?: AuctionUpsertWithoutDepositsInput
    connect?: AuctionWhereUniqueInput
    update?: XOR<XOR<AuctionUpdateToOneWithWhereWithoutDepositsInput, AuctionUpdateWithoutDepositsInput>, AuctionUncheckedUpdateWithoutDepositsInput>
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

  export type NestedEnumAuctionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AuctionType | EnumAuctionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AuctionType[] | ListEnumAuctionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuctionType[] | ListEnumAuctionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAuctionTypeFilter<$PrismaModel> | $Enums.AuctionType
  }

  export type NestedEnumAuctionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AuctionStatus | EnumAuctionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AuctionStatus[] | ListEnumAuctionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuctionStatus[] | ListEnumAuctionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAuctionStatusFilter<$PrismaModel> | $Enums.AuctionStatus
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumAuctionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuctionType | EnumAuctionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AuctionType[] | ListEnumAuctionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuctionType[] | ListEnumAuctionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAuctionTypeWithAggregatesFilter<$PrismaModel> | $Enums.AuctionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuctionTypeFilter<$PrismaModel>
    _max?: NestedEnumAuctionTypeFilter<$PrismaModel>
  }

  export type NestedEnumAuctionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuctionStatus | EnumAuctionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AuctionStatus[] | ListEnumAuctionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuctionStatus[] | ListEnumAuctionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAuctionStatusWithAggregatesFilter<$PrismaModel> | $Enums.AuctionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuctionStatusFilter<$PrismaModel>
    _max?: NestedEnumAuctionStatusFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumBidStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BidStatus | EnumBidStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BidStatus[] | ListEnumBidStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BidStatus[] | ListEnumBidStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBidStatusFilter<$PrismaModel> | $Enums.BidStatus
  }

  export type NestedEnumBidStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BidStatus | EnumBidStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BidStatus[] | ListEnumBidStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BidStatus[] | ListEnumBidStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBidStatusWithAggregatesFilter<$PrismaModel> | $Enums.BidStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBidStatusFilter<$PrismaModel>
    _max?: NestedEnumBidStatusFilter<$PrismaModel>
  }

  export type NestedEnumDepositStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DepositStatus | EnumDepositStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DepositStatus[] | ListEnumDepositStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DepositStatus[] | ListEnumDepositStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDepositStatusFilter<$PrismaModel> | $Enums.DepositStatus
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

  export type NestedEnumDepositStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DepositStatus | EnumDepositStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DepositStatus[] | ListEnumDepositStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DepositStatus[] | ListEnumDepositStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDepositStatusWithAggregatesFilter<$PrismaModel> | $Enums.DepositStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDepositStatusFilter<$PrismaModel>
    _max?: NestedEnumDepositStatusFilter<$PrismaModel>
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

  export type BidCreateWithoutAuctionInput = {
    id?: string
    bidderId: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.BidStatus
    isAutoBid?: boolean
    maxAmount?: Decimal | DecimalJsLike | number | string | null
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type BidUncheckedCreateWithoutAuctionInput = {
    id?: string
    bidderId: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.BidStatus
    isAutoBid?: boolean
    maxAmount?: Decimal | DecimalJsLike | number | string | null
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type BidCreateOrConnectWithoutAuctionInput = {
    where: BidWhereUniqueInput
    create: XOR<BidCreateWithoutAuctionInput, BidUncheckedCreateWithoutAuctionInput>
  }

  export type BidCreateManyAuctionInputEnvelope = {
    data: BidCreateManyAuctionInput | BidCreateManyAuctionInput[]
    skipDuplicates?: boolean
  }

  export type AuctionDepositCreateWithoutAuctionInput = {
    id?: string
    userId: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.DepositStatus
    paidAt?: Date | string | null
    refundedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type AuctionDepositUncheckedCreateWithoutAuctionInput = {
    id?: string
    userId: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.DepositStatus
    paidAt?: Date | string | null
    refundedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type AuctionDepositCreateOrConnectWithoutAuctionInput = {
    where: AuctionDepositWhereUniqueInput
    create: XOR<AuctionDepositCreateWithoutAuctionInput, AuctionDepositUncheckedCreateWithoutAuctionInput>
  }

  export type AuctionDepositCreateManyAuctionInputEnvelope = {
    data: AuctionDepositCreateManyAuctionInput | AuctionDepositCreateManyAuctionInput[]
    skipDuplicates?: boolean
  }

  export type BidUpsertWithWhereUniqueWithoutAuctionInput = {
    where: BidWhereUniqueInput
    update: XOR<BidUpdateWithoutAuctionInput, BidUncheckedUpdateWithoutAuctionInput>
    create: XOR<BidCreateWithoutAuctionInput, BidUncheckedCreateWithoutAuctionInput>
  }

  export type BidUpdateWithWhereUniqueWithoutAuctionInput = {
    where: BidWhereUniqueInput
    data: XOR<BidUpdateWithoutAuctionInput, BidUncheckedUpdateWithoutAuctionInput>
  }

  export type BidUpdateManyWithWhereWithoutAuctionInput = {
    where: BidScalarWhereInput
    data: XOR<BidUpdateManyMutationInput, BidUncheckedUpdateManyWithoutAuctionInput>
  }

  export type BidScalarWhereInput = {
    AND?: BidScalarWhereInput | BidScalarWhereInput[]
    OR?: BidScalarWhereInput[]
    NOT?: BidScalarWhereInput | BidScalarWhereInput[]
    id?: StringFilter<"Bid"> | string
    auctionId?: StringFilter<"Bid"> | string
    bidderId?: StringFilter<"Bid"> | string
    amount?: DecimalFilter<"Bid"> | Decimal | DecimalJsLike | number | string
    status?: EnumBidStatusFilter<"Bid"> | $Enums.BidStatus
    isAutoBid?: BoolFilter<"Bid"> | boolean
    maxAmount?: DecimalNullableFilter<"Bid"> | Decimal | DecimalJsLike | number | string | null
    ipAddress?: StringNullableFilter<"Bid"> | string | null
    userAgent?: StringNullableFilter<"Bid"> | string | null
    createdAt?: DateTimeFilter<"Bid"> | Date | string
  }

  export type AuctionDepositUpsertWithWhereUniqueWithoutAuctionInput = {
    where: AuctionDepositWhereUniqueInput
    update: XOR<AuctionDepositUpdateWithoutAuctionInput, AuctionDepositUncheckedUpdateWithoutAuctionInput>
    create: XOR<AuctionDepositCreateWithoutAuctionInput, AuctionDepositUncheckedCreateWithoutAuctionInput>
  }

  export type AuctionDepositUpdateWithWhereUniqueWithoutAuctionInput = {
    where: AuctionDepositWhereUniqueInput
    data: XOR<AuctionDepositUpdateWithoutAuctionInput, AuctionDepositUncheckedUpdateWithoutAuctionInput>
  }

  export type AuctionDepositUpdateManyWithWhereWithoutAuctionInput = {
    where: AuctionDepositScalarWhereInput
    data: XOR<AuctionDepositUpdateManyMutationInput, AuctionDepositUncheckedUpdateManyWithoutAuctionInput>
  }

  export type AuctionDepositScalarWhereInput = {
    AND?: AuctionDepositScalarWhereInput | AuctionDepositScalarWhereInput[]
    OR?: AuctionDepositScalarWhereInput[]
    NOT?: AuctionDepositScalarWhereInput | AuctionDepositScalarWhereInput[]
    id?: StringFilter<"AuctionDeposit"> | string
    auctionId?: StringFilter<"AuctionDeposit"> | string
    userId?: StringFilter<"AuctionDeposit"> | string
    amount?: DecimalFilter<"AuctionDeposit"> | Decimal | DecimalJsLike | number | string
    status?: EnumDepositStatusFilter<"AuctionDeposit"> | $Enums.DepositStatus
    paidAt?: DateTimeNullableFilter<"AuctionDeposit"> | Date | string | null
    refundedAt?: DateTimeNullableFilter<"AuctionDeposit"> | Date | string | null
    createdAt?: DateTimeFilter<"AuctionDeposit"> | Date | string
  }

  export type AuctionCreateWithoutBidsInput = {
    id?: string
    propertyId: string
    sellerId: string
    title: string
    description?: string | null
    type?: $Enums.AuctionType
    status?: $Enums.AuctionStatus
    startingPrice: Decimal | DecimalJsLike | number | string
    reservePrice?: Decimal | DecimalJsLike | number | string | null
    currentPrice?: Decimal | DecimalJsLike | number | string | null
    bidIncrement: Decimal | DecimalJsLike | number | string
    buyNowPrice?: Decimal | DecimalJsLike | number | string | null
    currency?: string
    startTime: Date | string
    endTime: Date | string
    originalEndTime: Date | string
    extensionMinutes?: number
    depositRequired?: boolean
    depositAmount?: Decimal | DecimalJsLike | number | string | null
    depositPercent?: number | null
    bidCount?: number
    participantCount?: number
    viewCount?: number
    winnerId?: string | null
    winningBidId?: string | null
    winningPrice?: Decimal | DecimalJsLike | number | string | null
    antiSnipingEnabled?: boolean
    antiSnipingMinutes?: number
    terms?: string | null
    isPublic?: boolean
    autoExtend?: boolean
    maxExtensions?: number
    extensionsUsed?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deposits?: AuctionDepositCreateNestedManyWithoutAuctionInput
  }

  export type AuctionUncheckedCreateWithoutBidsInput = {
    id?: string
    propertyId: string
    sellerId: string
    title: string
    description?: string | null
    type?: $Enums.AuctionType
    status?: $Enums.AuctionStatus
    startingPrice: Decimal | DecimalJsLike | number | string
    reservePrice?: Decimal | DecimalJsLike | number | string | null
    currentPrice?: Decimal | DecimalJsLike | number | string | null
    bidIncrement: Decimal | DecimalJsLike | number | string
    buyNowPrice?: Decimal | DecimalJsLike | number | string | null
    currency?: string
    startTime: Date | string
    endTime: Date | string
    originalEndTime: Date | string
    extensionMinutes?: number
    depositRequired?: boolean
    depositAmount?: Decimal | DecimalJsLike | number | string | null
    depositPercent?: number | null
    bidCount?: number
    participantCount?: number
    viewCount?: number
    winnerId?: string | null
    winningBidId?: string | null
    winningPrice?: Decimal | DecimalJsLike | number | string | null
    antiSnipingEnabled?: boolean
    antiSnipingMinutes?: number
    terms?: string | null
    isPublic?: boolean
    autoExtend?: boolean
    maxExtensions?: number
    extensionsUsed?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deposits?: AuctionDepositUncheckedCreateNestedManyWithoutAuctionInput
  }

  export type AuctionCreateOrConnectWithoutBidsInput = {
    where: AuctionWhereUniqueInput
    create: XOR<AuctionCreateWithoutBidsInput, AuctionUncheckedCreateWithoutBidsInput>
  }

  export type AuctionUpsertWithoutBidsInput = {
    update: XOR<AuctionUpdateWithoutBidsInput, AuctionUncheckedUpdateWithoutBidsInput>
    create: XOR<AuctionCreateWithoutBidsInput, AuctionUncheckedCreateWithoutBidsInput>
    where?: AuctionWhereInput
  }

  export type AuctionUpdateToOneWithWhereWithoutBidsInput = {
    where?: AuctionWhereInput
    data: XOR<AuctionUpdateWithoutBidsInput, AuctionUncheckedUpdateWithoutBidsInput>
  }

  export type AuctionUpdateWithoutBidsInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAuctionTypeFieldUpdateOperationsInput | $Enums.AuctionType
    status?: EnumAuctionStatusFieldUpdateOperationsInput | $Enums.AuctionStatus
    startingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reservePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currentPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bidIncrement?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    buyNowPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    originalEndTime?: DateTimeFieldUpdateOperationsInput | Date | string
    extensionMinutes?: IntFieldUpdateOperationsInput | number
    depositRequired?: BoolFieldUpdateOperationsInput | boolean
    depositAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    depositPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    bidCount?: IntFieldUpdateOperationsInput | number
    participantCount?: IntFieldUpdateOperationsInput | number
    viewCount?: IntFieldUpdateOperationsInput | number
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    winningBidId?: NullableStringFieldUpdateOperationsInput | string | null
    winningPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    antiSnipingEnabled?: BoolFieldUpdateOperationsInput | boolean
    antiSnipingMinutes?: IntFieldUpdateOperationsInput | number
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    autoExtend?: BoolFieldUpdateOperationsInput | boolean
    maxExtensions?: IntFieldUpdateOperationsInput | number
    extensionsUsed?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deposits?: AuctionDepositUpdateManyWithoutAuctionNestedInput
  }

  export type AuctionUncheckedUpdateWithoutBidsInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAuctionTypeFieldUpdateOperationsInput | $Enums.AuctionType
    status?: EnumAuctionStatusFieldUpdateOperationsInput | $Enums.AuctionStatus
    startingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reservePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currentPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bidIncrement?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    buyNowPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    originalEndTime?: DateTimeFieldUpdateOperationsInput | Date | string
    extensionMinutes?: IntFieldUpdateOperationsInput | number
    depositRequired?: BoolFieldUpdateOperationsInput | boolean
    depositAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    depositPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    bidCount?: IntFieldUpdateOperationsInput | number
    participantCount?: IntFieldUpdateOperationsInput | number
    viewCount?: IntFieldUpdateOperationsInput | number
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    winningBidId?: NullableStringFieldUpdateOperationsInput | string | null
    winningPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    antiSnipingEnabled?: BoolFieldUpdateOperationsInput | boolean
    antiSnipingMinutes?: IntFieldUpdateOperationsInput | number
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    autoExtend?: BoolFieldUpdateOperationsInput | boolean
    maxExtensions?: IntFieldUpdateOperationsInput | number
    extensionsUsed?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deposits?: AuctionDepositUncheckedUpdateManyWithoutAuctionNestedInput
  }

  export type AuctionCreateWithoutDepositsInput = {
    id?: string
    propertyId: string
    sellerId: string
    title: string
    description?: string | null
    type?: $Enums.AuctionType
    status?: $Enums.AuctionStatus
    startingPrice: Decimal | DecimalJsLike | number | string
    reservePrice?: Decimal | DecimalJsLike | number | string | null
    currentPrice?: Decimal | DecimalJsLike | number | string | null
    bidIncrement: Decimal | DecimalJsLike | number | string
    buyNowPrice?: Decimal | DecimalJsLike | number | string | null
    currency?: string
    startTime: Date | string
    endTime: Date | string
    originalEndTime: Date | string
    extensionMinutes?: number
    depositRequired?: boolean
    depositAmount?: Decimal | DecimalJsLike | number | string | null
    depositPercent?: number | null
    bidCount?: number
    participantCount?: number
    viewCount?: number
    winnerId?: string | null
    winningBidId?: string | null
    winningPrice?: Decimal | DecimalJsLike | number | string | null
    antiSnipingEnabled?: boolean
    antiSnipingMinutes?: number
    terms?: string | null
    isPublic?: boolean
    autoExtend?: boolean
    maxExtensions?: number
    extensionsUsed?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bids?: BidCreateNestedManyWithoutAuctionInput
  }

  export type AuctionUncheckedCreateWithoutDepositsInput = {
    id?: string
    propertyId: string
    sellerId: string
    title: string
    description?: string | null
    type?: $Enums.AuctionType
    status?: $Enums.AuctionStatus
    startingPrice: Decimal | DecimalJsLike | number | string
    reservePrice?: Decimal | DecimalJsLike | number | string | null
    currentPrice?: Decimal | DecimalJsLike | number | string | null
    bidIncrement: Decimal | DecimalJsLike | number | string
    buyNowPrice?: Decimal | DecimalJsLike | number | string | null
    currency?: string
    startTime: Date | string
    endTime: Date | string
    originalEndTime: Date | string
    extensionMinutes?: number
    depositRequired?: boolean
    depositAmount?: Decimal | DecimalJsLike | number | string | null
    depositPercent?: number | null
    bidCount?: number
    participantCount?: number
    viewCount?: number
    winnerId?: string | null
    winningBidId?: string | null
    winningPrice?: Decimal | DecimalJsLike | number | string | null
    antiSnipingEnabled?: boolean
    antiSnipingMinutes?: number
    terms?: string | null
    isPublic?: boolean
    autoExtend?: boolean
    maxExtensions?: number
    extensionsUsed?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bids?: BidUncheckedCreateNestedManyWithoutAuctionInput
  }

  export type AuctionCreateOrConnectWithoutDepositsInput = {
    where: AuctionWhereUniqueInput
    create: XOR<AuctionCreateWithoutDepositsInput, AuctionUncheckedCreateWithoutDepositsInput>
  }

  export type AuctionUpsertWithoutDepositsInput = {
    update: XOR<AuctionUpdateWithoutDepositsInput, AuctionUncheckedUpdateWithoutDepositsInput>
    create: XOR<AuctionCreateWithoutDepositsInput, AuctionUncheckedCreateWithoutDepositsInput>
    where?: AuctionWhereInput
  }

  export type AuctionUpdateToOneWithWhereWithoutDepositsInput = {
    where?: AuctionWhereInput
    data: XOR<AuctionUpdateWithoutDepositsInput, AuctionUncheckedUpdateWithoutDepositsInput>
  }

  export type AuctionUpdateWithoutDepositsInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAuctionTypeFieldUpdateOperationsInput | $Enums.AuctionType
    status?: EnumAuctionStatusFieldUpdateOperationsInput | $Enums.AuctionStatus
    startingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reservePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currentPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bidIncrement?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    buyNowPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    originalEndTime?: DateTimeFieldUpdateOperationsInput | Date | string
    extensionMinutes?: IntFieldUpdateOperationsInput | number
    depositRequired?: BoolFieldUpdateOperationsInput | boolean
    depositAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    depositPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    bidCount?: IntFieldUpdateOperationsInput | number
    participantCount?: IntFieldUpdateOperationsInput | number
    viewCount?: IntFieldUpdateOperationsInput | number
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    winningBidId?: NullableStringFieldUpdateOperationsInput | string | null
    winningPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    antiSnipingEnabled?: BoolFieldUpdateOperationsInput | boolean
    antiSnipingMinutes?: IntFieldUpdateOperationsInput | number
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    autoExtend?: BoolFieldUpdateOperationsInput | boolean
    maxExtensions?: IntFieldUpdateOperationsInput | number
    extensionsUsed?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bids?: BidUpdateManyWithoutAuctionNestedInput
  }

  export type AuctionUncheckedUpdateWithoutDepositsInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAuctionTypeFieldUpdateOperationsInput | $Enums.AuctionType
    status?: EnumAuctionStatusFieldUpdateOperationsInput | $Enums.AuctionStatus
    startingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reservePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currentPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bidIncrement?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    buyNowPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    originalEndTime?: DateTimeFieldUpdateOperationsInput | Date | string
    extensionMinutes?: IntFieldUpdateOperationsInput | number
    depositRequired?: BoolFieldUpdateOperationsInput | boolean
    depositAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    depositPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    bidCount?: IntFieldUpdateOperationsInput | number
    participantCount?: IntFieldUpdateOperationsInput | number
    viewCount?: IntFieldUpdateOperationsInput | number
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    winningBidId?: NullableStringFieldUpdateOperationsInput | string | null
    winningPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    antiSnipingEnabled?: BoolFieldUpdateOperationsInput | boolean
    antiSnipingMinutes?: IntFieldUpdateOperationsInput | number
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    autoExtend?: BoolFieldUpdateOperationsInput | boolean
    maxExtensions?: IntFieldUpdateOperationsInput | number
    extensionsUsed?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bids?: BidUncheckedUpdateManyWithoutAuctionNestedInput
  }

  export type BidCreateManyAuctionInput = {
    id?: string
    bidderId: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.BidStatus
    isAutoBid?: boolean
    maxAmount?: Decimal | DecimalJsLike | number | string | null
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type AuctionDepositCreateManyAuctionInput = {
    id?: string
    userId: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.DepositStatus
    paidAt?: Date | string | null
    refundedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type BidUpdateWithoutAuctionInput = {
    id?: StringFieldUpdateOperationsInput | string
    bidderId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBidStatusFieldUpdateOperationsInput | $Enums.BidStatus
    isAutoBid?: BoolFieldUpdateOperationsInput | boolean
    maxAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BidUncheckedUpdateWithoutAuctionInput = {
    id?: StringFieldUpdateOperationsInput | string
    bidderId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBidStatusFieldUpdateOperationsInput | $Enums.BidStatus
    isAutoBid?: BoolFieldUpdateOperationsInput | boolean
    maxAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BidUncheckedUpdateManyWithoutAuctionInput = {
    id?: StringFieldUpdateOperationsInput | string
    bidderId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBidStatusFieldUpdateOperationsInput | $Enums.BidStatus
    isAutoBid?: BoolFieldUpdateOperationsInput | boolean
    maxAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuctionDepositUpdateWithoutAuctionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumDepositStatusFieldUpdateOperationsInput | $Enums.DepositStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuctionDepositUncheckedUpdateWithoutAuctionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumDepositStatusFieldUpdateOperationsInput | $Enums.DepositStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuctionDepositUncheckedUpdateManyWithoutAuctionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumDepositStatusFieldUpdateOperationsInput | $Enums.DepositStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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