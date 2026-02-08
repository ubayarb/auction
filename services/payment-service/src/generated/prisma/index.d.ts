
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
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model EscrowAccount
 * 
 */
export type EscrowAccount = $Result.DefaultSelection<Prisma.$EscrowAccountPayload>
/**
 * Model ReleaseCondition
 * 
 */
export type ReleaseCondition = $Result.DefaultSelection<Prisma.$ReleaseConditionPayload>
/**
 * Model LedgerEntry
 * 
 */
export type LedgerEntry = $Result.DefaultSelection<Prisma.$LedgerEntryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PaymentType: {
  PURCHASE: 'PURCHASE',
  RENT: 'RENT',
  DEPOSIT: 'DEPOSIT',
  COMMISSION: 'COMMISSION',
  ESCROW_FUND: 'ESCROW_FUND',
  ESCROW_RELEASE: 'ESCROW_RELEASE',
  REFUND: 'REFUND'
};

export type PaymentType = (typeof PaymentType)[keyof typeof PaymentType]


export const PaymentStatus: {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  CANCELLED: 'CANCELLED',
  REFUNDED: 'REFUNDED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const PaymentMethod: {
  BANK_TRANSFER: 'BANK_TRANSFER',
  CARD: 'CARD',
  QPAY: 'QPAY',
  SOCIALPAY: 'SOCIALPAY',
  MONPAY: 'MONPAY',
  WALLET: 'WALLET'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]


export const EscrowStatus: {
  CREATED: 'CREATED',
  FUNDED: 'FUNDED',
  PARTIALLY_FUNDED: 'PARTIALLY_FUNDED',
  RELEASED: 'RELEASED',
  DISPUTED: 'DISPUTED',
  REFUNDED: 'REFUNDED',
  CLOSED: 'CLOSED'
};

export type EscrowStatus = (typeof EscrowStatus)[keyof typeof EscrowStatus]


export const LedgerType: {
  CREDIT: 'CREDIT',
  DEBIT: 'DEBIT',
  FEE: 'FEE',
  REFUND: 'REFUND'
};

export type LedgerType = (typeof LedgerType)[keyof typeof LedgerType]

}

export type PaymentType = $Enums.PaymentType

export const PaymentType: typeof $Enums.PaymentType

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

export type EscrowStatus = $Enums.EscrowStatus

export const EscrowStatus: typeof $Enums.EscrowStatus

export type LedgerType = $Enums.LedgerType

export const LedgerType: typeof $Enums.LedgerType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Payments
 * const payments = await prisma.payment.findMany()
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
   * // Fetch zero or more Payments
   * const payments = await prisma.payment.findMany()
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
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.escrowAccount`: Exposes CRUD operations for the **EscrowAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EscrowAccounts
    * const escrowAccounts = await prisma.escrowAccount.findMany()
    * ```
    */
  get escrowAccount(): Prisma.EscrowAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.releaseCondition`: Exposes CRUD operations for the **ReleaseCondition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReleaseConditions
    * const releaseConditions = await prisma.releaseCondition.findMany()
    * ```
    */
  get releaseCondition(): Prisma.ReleaseConditionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ledgerEntry`: Exposes CRUD operations for the **LedgerEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LedgerEntries
    * const ledgerEntries = await prisma.ledgerEntry.findMany()
    * ```
    */
  get ledgerEntry(): Prisma.LedgerEntryDelegate<ExtArgs, ClientOptions>;
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
    Payment: 'Payment',
    EscrowAccount: 'EscrowAccount',
    ReleaseCondition: 'ReleaseCondition',
    LedgerEntry: 'LedgerEntry'
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
      modelProps: "payment" | "escrowAccount" | "releaseCondition" | "ledgerEntry"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      EscrowAccount: {
        payload: Prisma.$EscrowAccountPayload<ExtArgs>
        fields: Prisma.EscrowAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EscrowAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscrowAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EscrowAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscrowAccountPayload>
          }
          findFirst: {
            args: Prisma.EscrowAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscrowAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EscrowAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscrowAccountPayload>
          }
          findMany: {
            args: Prisma.EscrowAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscrowAccountPayload>[]
          }
          create: {
            args: Prisma.EscrowAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscrowAccountPayload>
          }
          createMany: {
            args: Prisma.EscrowAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EscrowAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscrowAccountPayload>[]
          }
          delete: {
            args: Prisma.EscrowAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscrowAccountPayload>
          }
          update: {
            args: Prisma.EscrowAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscrowAccountPayload>
          }
          deleteMany: {
            args: Prisma.EscrowAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EscrowAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EscrowAccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscrowAccountPayload>[]
          }
          upsert: {
            args: Prisma.EscrowAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscrowAccountPayload>
          }
          aggregate: {
            args: Prisma.EscrowAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEscrowAccount>
          }
          groupBy: {
            args: Prisma.EscrowAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<EscrowAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.EscrowAccountCountArgs<ExtArgs>
            result: $Utils.Optional<EscrowAccountCountAggregateOutputType> | number
          }
        }
      }
      ReleaseCondition: {
        payload: Prisma.$ReleaseConditionPayload<ExtArgs>
        fields: Prisma.ReleaseConditionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReleaseConditionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReleaseConditionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReleaseConditionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReleaseConditionPayload>
          }
          findFirst: {
            args: Prisma.ReleaseConditionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReleaseConditionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReleaseConditionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReleaseConditionPayload>
          }
          findMany: {
            args: Prisma.ReleaseConditionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReleaseConditionPayload>[]
          }
          create: {
            args: Prisma.ReleaseConditionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReleaseConditionPayload>
          }
          createMany: {
            args: Prisma.ReleaseConditionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReleaseConditionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReleaseConditionPayload>[]
          }
          delete: {
            args: Prisma.ReleaseConditionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReleaseConditionPayload>
          }
          update: {
            args: Prisma.ReleaseConditionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReleaseConditionPayload>
          }
          deleteMany: {
            args: Prisma.ReleaseConditionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReleaseConditionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReleaseConditionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReleaseConditionPayload>[]
          }
          upsert: {
            args: Prisma.ReleaseConditionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReleaseConditionPayload>
          }
          aggregate: {
            args: Prisma.ReleaseConditionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReleaseCondition>
          }
          groupBy: {
            args: Prisma.ReleaseConditionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReleaseConditionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReleaseConditionCountArgs<ExtArgs>
            result: $Utils.Optional<ReleaseConditionCountAggregateOutputType> | number
          }
        }
      }
      LedgerEntry: {
        payload: Prisma.$LedgerEntryPayload<ExtArgs>
        fields: Prisma.LedgerEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LedgerEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LedgerEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEntryPayload>
          }
          findFirst: {
            args: Prisma.LedgerEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LedgerEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEntryPayload>
          }
          findMany: {
            args: Prisma.LedgerEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEntryPayload>[]
          }
          create: {
            args: Prisma.LedgerEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEntryPayload>
          }
          createMany: {
            args: Prisma.LedgerEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LedgerEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEntryPayload>[]
          }
          delete: {
            args: Prisma.LedgerEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEntryPayload>
          }
          update: {
            args: Prisma.LedgerEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEntryPayload>
          }
          deleteMany: {
            args: Prisma.LedgerEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LedgerEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LedgerEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEntryPayload>[]
          }
          upsert: {
            args: Prisma.LedgerEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEntryPayload>
          }
          aggregate: {
            args: Prisma.LedgerEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLedgerEntry>
          }
          groupBy: {
            args: Prisma.LedgerEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<LedgerEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.LedgerEntryCountArgs<ExtArgs>
            result: $Utils.Optional<LedgerEntryCountAggregateOutputType> | number
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
    payment?: PaymentOmit
    escrowAccount?: EscrowAccountOmit
    releaseCondition?: ReleaseConditionOmit
    ledgerEntry?: LedgerEntryOmit
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
   * Count Type EscrowAccountCountOutputType
   */

  export type EscrowAccountCountOutputType = {
    payments: number
    conditions: number
    ledgerEntries: number
  }

  export type EscrowAccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | EscrowAccountCountOutputTypeCountPaymentsArgs
    conditions?: boolean | EscrowAccountCountOutputTypeCountConditionsArgs
    ledgerEntries?: boolean | EscrowAccountCountOutputTypeCountLedgerEntriesArgs
  }

  // Custom InputTypes
  /**
   * EscrowAccountCountOutputType without action
   */
  export type EscrowAccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscrowAccountCountOutputType
     */
    select?: EscrowAccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EscrowAccountCountOutputType without action
   */
  export type EscrowAccountCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * EscrowAccountCountOutputType without action
   */
  export type EscrowAccountCountOutputTypeCountConditionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReleaseConditionWhereInput
  }

  /**
   * EscrowAccountCountOutputType without action
   */
  export type EscrowAccountCountOutputTypeCountLedgerEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LedgerEntryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: Decimal | null
    fee: Decimal | null
    netAmount: Decimal | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: Decimal | null
    fee: Decimal | null
    netAmount: Decimal | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    contractId: string | null
    auctionId: string | null
    payerId: string | null
    payeeId: string | null
    escrowId: string | null
    type: $Enums.PaymentType | null
    status: $Enums.PaymentStatus | null
    method: $Enums.PaymentMethod | null
    amount: Decimal | null
    currency: string | null
    fee: Decimal | null
    netAmount: Decimal | null
    description: string | null
    reference: string | null
    externalRef: string | null
    paidAt: Date | null
    failedAt: Date | null
    failureReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    contractId: string | null
    auctionId: string | null
    payerId: string | null
    payeeId: string | null
    escrowId: string | null
    type: $Enums.PaymentType | null
    status: $Enums.PaymentStatus | null
    method: $Enums.PaymentMethod | null
    amount: Decimal | null
    currency: string | null
    fee: Decimal | null
    netAmount: Decimal | null
    description: string | null
    reference: string | null
    externalRef: string | null
    paidAt: Date | null
    failedAt: Date | null
    failureReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    contractId: number
    auctionId: number
    payerId: number
    payeeId: number
    escrowId: number
    type: number
    status: number
    method: number
    amount: number
    currency: number
    fee: number
    netAmount: number
    description: number
    reference: number
    externalRef: number
    paidAt: number
    failedAt: number
    failureReason: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
    fee?: true
    netAmount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
    fee?: true
    netAmount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    contractId?: true
    auctionId?: true
    payerId?: true
    payeeId?: true
    escrowId?: true
    type?: true
    status?: true
    method?: true
    amount?: true
    currency?: true
    fee?: true
    netAmount?: true
    description?: true
    reference?: true
    externalRef?: true
    paidAt?: true
    failedAt?: true
    failureReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    contractId?: true
    auctionId?: true
    payerId?: true
    payeeId?: true
    escrowId?: true
    type?: true
    status?: true
    method?: true
    amount?: true
    currency?: true
    fee?: true
    netAmount?: true
    description?: true
    reference?: true
    externalRef?: true
    paidAt?: true
    failedAt?: true
    failureReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    contractId?: true
    auctionId?: true
    payerId?: true
    payeeId?: true
    escrowId?: true
    type?: true
    status?: true
    method?: true
    amount?: true
    currency?: true
    fee?: true
    netAmount?: true
    description?: true
    reference?: true
    externalRef?: true
    paidAt?: true
    failedAt?: true
    failureReason?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    contractId: string | null
    auctionId: string | null
    payerId: string
    payeeId: string
    escrowId: string | null
    type: $Enums.PaymentType
    status: $Enums.PaymentStatus
    method: $Enums.PaymentMethod | null
    amount: Decimal
    currency: string
    fee: Decimal
    netAmount: Decimal | null
    description: string | null
    reference: string | null
    externalRef: string | null
    paidAt: Date | null
    failedAt: Date | null
    failureReason: string | null
    createdAt: Date
    updatedAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractId?: boolean
    auctionId?: boolean
    payerId?: boolean
    payeeId?: boolean
    escrowId?: boolean
    type?: boolean
    status?: boolean
    method?: boolean
    amount?: boolean
    currency?: boolean
    fee?: boolean
    netAmount?: boolean
    description?: boolean
    reference?: boolean
    externalRef?: boolean
    paidAt?: boolean
    failedAt?: boolean
    failureReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    escrow?: boolean | Payment$escrowArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractId?: boolean
    auctionId?: boolean
    payerId?: boolean
    payeeId?: boolean
    escrowId?: boolean
    type?: boolean
    status?: boolean
    method?: boolean
    amount?: boolean
    currency?: boolean
    fee?: boolean
    netAmount?: boolean
    description?: boolean
    reference?: boolean
    externalRef?: boolean
    paidAt?: boolean
    failedAt?: boolean
    failureReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    escrow?: boolean | Payment$escrowArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractId?: boolean
    auctionId?: boolean
    payerId?: boolean
    payeeId?: boolean
    escrowId?: boolean
    type?: boolean
    status?: boolean
    method?: boolean
    amount?: boolean
    currency?: boolean
    fee?: boolean
    netAmount?: boolean
    description?: boolean
    reference?: boolean
    externalRef?: boolean
    paidAt?: boolean
    failedAt?: boolean
    failureReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    escrow?: boolean | Payment$escrowArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    contractId?: boolean
    auctionId?: boolean
    payerId?: boolean
    payeeId?: boolean
    escrowId?: boolean
    type?: boolean
    status?: boolean
    method?: boolean
    amount?: boolean
    currency?: boolean
    fee?: boolean
    netAmount?: boolean
    description?: boolean
    reference?: boolean
    externalRef?: boolean
    paidAt?: boolean
    failedAt?: boolean
    failureReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contractId" | "auctionId" | "payerId" | "payeeId" | "escrowId" | "type" | "status" | "method" | "amount" | "currency" | "fee" | "netAmount" | "description" | "reference" | "externalRef" | "paidAt" | "failedAt" | "failureReason" | "createdAt" | "updatedAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    escrow?: boolean | Payment$escrowArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    escrow?: boolean | Payment$escrowArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    escrow?: boolean | Payment$escrowArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      escrow: Prisma.$EscrowAccountPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      contractId: string | null
      auctionId: string | null
      payerId: string
      payeeId: string
      escrowId: string | null
      type: $Enums.PaymentType
      status: $Enums.PaymentStatus
      method: $Enums.PaymentMethod | null
      amount: Prisma.Decimal
      currency: string
      fee: Prisma.Decimal
      netAmount: Prisma.Decimal | null
      description: string | null
      reference: string | null
      externalRef: string | null
      paidAt: Date | null
      failedAt: Date | null
      failureReason: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    escrow<T extends Payment$escrowArgs<ExtArgs> = {}>(args?: Subset<T, Payment$escrowArgs<ExtArgs>>): Prisma__EscrowAccountClient<$Result.GetResult<Prisma.$EscrowAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly contractId: FieldRef<"Payment", 'String'>
    readonly auctionId: FieldRef<"Payment", 'String'>
    readonly payerId: FieldRef<"Payment", 'String'>
    readonly payeeId: FieldRef<"Payment", 'String'>
    readonly escrowId: FieldRef<"Payment", 'String'>
    readonly type: FieldRef<"Payment", 'PaymentType'>
    readonly status: FieldRef<"Payment", 'PaymentStatus'>
    readonly method: FieldRef<"Payment", 'PaymentMethod'>
    readonly amount: FieldRef<"Payment", 'Decimal'>
    readonly currency: FieldRef<"Payment", 'String'>
    readonly fee: FieldRef<"Payment", 'Decimal'>
    readonly netAmount: FieldRef<"Payment", 'Decimal'>
    readonly description: FieldRef<"Payment", 'String'>
    readonly reference: FieldRef<"Payment", 'String'>
    readonly externalRef: FieldRef<"Payment", 'String'>
    readonly paidAt: FieldRef<"Payment", 'DateTime'>
    readonly failedAt: FieldRef<"Payment", 'DateTime'>
    readonly failureReason: FieldRef<"Payment", 'String'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment.escrow
   */
  export type Payment$escrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscrowAccount
     */
    select?: EscrowAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EscrowAccount
     */
    omit?: EscrowAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscrowAccountInclude<ExtArgs> | null
    where?: EscrowAccountWhereInput
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model EscrowAccount
   */

  export type AggregateEscrowAccount = {
    _count: EscrowAccountCountAggregateOutputType | null
    _avg: EscrowAccountAvgAggregateOutputType | null
    _sum: EscrowAccountSumAggregateOutputType | null
    _min: EscrowAccountMinAggregateOutputType | null
    _max: EscrowAccountMaxAggregateOutputType | null
  }

  export type EscrowAccountAvgAggregateOutputType = {
    totalAmount: Decimal | null
    fundedAmount: Decimal | null
    releasedAmount: Decimal | null
  }

  export type EscrowAccountSumAggregateOutputType = {
    totalAmount: Decimal | null
    fundedAmount: Decimal | null
    releasedAmount: Decimal | null
  }

  export type EscrowAccountMinAggregateOutputType = {
    id: string | null
    contractId: string | null
    auctionId: string | null
    buyerId: string | null
    sellerId: string | null
    status: $Enums.EscrowStatus | null
    totalAmount: Decimal | null
    fundedAmount: Decimal | null
    releasedAmount: Decimal | null
    currency: string | null
    fundedAt: Date | null
    releasedAt: Date | null
    disputedAt: Date | null
    closedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EscrowAccountMaxAggregateOutputType = {
    id: string | null
    contractId: string | null
    auctionId: string | null
    buyerId: string | null
    sellerId: string | null
    status: $Enums.EscrowStatus | null
    totalAmount: Decimal | null
    fundedAmount: Decimal | null
    releasedAmount: Decimal | null
    currency: string | null
    fundedAt: Date | null
    releasedAt: Date | null
    disputedAt: Date | null
    closedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EscrowAccountCountAggregateOutputType = {
    id: number
    contractId: number
    auctionId: number
    buyerId: number
    sellerId: number
    status: number
    totalAmount: number
    fundedAmount: number
    releasedAmount: number
    currency: number
    fundedAt: number
    releasedAt: number
    disputedAt: number
    closedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EscrowAccountAvgAggregateInputType = {
    totalAmount?: true
    fundedAmount?: true
    releasedAmount?: true
  }

  export type EscrowAccountSumAggregateInputType = {
    totalAmount?: true
    fundedAmount?: true
    releasedAmount?: true
  }

  export type EscrowAccountMinAggregateInputType = {
    id?: true
    contractId?: true
    auctionId?: true
    buyerId?: true
    sellerId?: true
    status?: true
    totalAmount?: true
    fundedAmount?: true
    releasedAmount?: true
    currency?: true
    fundedAt?: true
    releasedAt?: true
    disputedAt?: true
    closedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EscrowAccountMaxAggregateInputType = {
    id?: true
    contractId?: true
    auctionId?: true
    buyerId?: true
    sellerId?: true
    status?: true
    totalAmount?: true
    fundedAmount?: true
    releasedAmount?: true
    currency?: true
    fundedAt?: true
    releasedAt?: true
    disputedAt?: true
    closedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EscrowAccountCountAggregateInputType = {
    id?: true
    contractId?: true
    auctionId?: true
    buyerId?: true
    sellerId?: true
    status?: true
    totalAmount?: true
    fundedAmount?: true
    releasedAmount?: true
    currency?: true
    fundedAt?: true
    releasedAt?: true
    disputedAt?: true
    closedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EscrowAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EscrowAccount to aggregate.
     */
    where?: EscrowAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EscrowAccounts to fetch.
     */
    orderBy?: EscrowAccountOrderByWithRelationInput | EscrowAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EscrowAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EscrowAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EscrowAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EscrowAccounts
    **/
    _count?: true | EscrowAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EscrowAccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EscrowAccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EscrowAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EscrowAccountMaxAggregateInputType
  }

  export type GetEscrowAccountAggregateType<T extends EscrowAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateEscrowAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEscrowAccount[P]>
      : GetScalarType<T[P], AggregateEscrowAccount[P]>
  }




  export type EscrowAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EscrowAccountWhereInput
    orderBy?: EscrowAccountOrderByWithAggregationInput | EscrowAccountOrderByWithAggregationInput[]
    by: EscrowAccountScalarFieldEnum[] | EscrowAccountScalarFieldEnum
    having?: EscrowAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EscrowAccountCountAggregateInputType | true
    _avg?: EscrowAccountAvgAggregateInputType
    _sum?: EscrowAccountSumAggregateInputType
    _min?: EscrowAccountMinAggregateInputType
    _max?: EscrowAccountMaxAggregateInputType
  }

  export type EscrowAccountGroupByOutputType = {
    id: string
    contractId: string | null
    auctionId: string | null
    buyerId: string
    sellerId: string
    status: $Enums.EscrowStatus
    totalAmount: Decimal
    fundedAmount: Decimal
    releasedAmount: Decimal
    currency: string
    fundedAt: Date | null
    releasedAt: Date | null
    disputedAt: Date | null
    closedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: EscrowAccountCountAggregateOutputType | null
    _avg: EscrowAccountAvgAggregateOutputType | null
    _sum: EscrowAccountSumAggregateOutputType | null
    _min: EscrowAccountMinAggregateOutputType | null
    _max: EscrowAccountMaxAggregateOutputType | null
  }

  type GetEscrowAccountGroupByPayload<T extends EscrowAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EscrowAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EscrowAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EscrowAccountGroupByOutputType[P]>
            : GetScalarType<T[P], EscrowAccountGroupByOutputType[P]>
        }
      >
    >


  export type EscrowAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractId?: boolean
    auctionId?: boolean
    buyerId?: boolean
    sellerId?: boolean
    status?: boolean
    totalAmount?: boolean
    fundedAmount?: boolean
    releasedAmount?: boolean
    currency?: boolean
    fundedAt?: boolean
    releasedAt?: boolean
    disputedAt?: boolean
    closedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    payments?: boolean | EscrowAccount$paymentsArgs<ExtArgs>
    conditions?: boolean | EscrowAccount$conditionsArgs<ExtArgs>
    ledgerEntries?: boolean | EscrowAccount$ledgerEntriesArgs<ExtArgs>
    _count?: boolean | EscrowAccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["escrowAccount"]>

  export type EscrowAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractId?: boolean
    auctionId?: boolean
    buyerId?: boolean
    sellerId?: boolean
    status?: boolean
    totalAmount?: boolean
    fundedAmount?: boolean
    releasedAmount?: boolean
    currency?: boolean
    fundedAt?: boolean
    releasedAt?: boolean
    disputedAt?: boolean
    closedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["escrowAccount"]>

  export type EscrowAccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractId?: boolean
    auctionId?: boolean
    buyerId?: boolean
    sellerId?: boolean
    status?: boolean
    totalAmount?: boolean
    fundedAmount?: boolean
    releasedAmount?: boolean
    currency?: boolean
    fundedAt?: boolean
    releasedAt?: boolean
    disputedAt?: boolean
    closedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["escrowAccount"]>

  export type EscrowAccountSelectScalar = {
    id?: boolean
    contractId?: boolean
    auctionId?: boolean
    buyerId?: boolean
    sellerId?: boolean
    status?: boolean
    totalAmount?: boolean
    fundedAmount?: boolean
    releasedAmount?: boolean
    currency?: boolean
    fundedAt?: boolean
    releasedAt?: boolean
    disputedAt?: boolean
    closedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EscrowAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contractId" | "auctionId" | "buyerId" | "sellerId" | "status" | "totalAmount" | "fundedAmount" | "releasedAmount" | "currency" | "fundedAt" | "releasedAt" | "disputedAt" | "closedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["escrowAccount"]>
  export type EscrowAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | EscrowAccount$paymentsArgs<ExtArgs>
    conditions?: boolean | EscrowAccount$conditionsArgs<ExtArgs>
    ledgerEntries?: boolean | EscrowAccount$ledgerEntriesArgs<ExtArgs>
    _count?: boolean | EscrowAccountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EscrowAccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EscrowAccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EscrowAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EscrowAccount"
    objects: {
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      conditions: Prisma.$ReleaseConditionPayload<ExtArgs>[]
      ledgerEntries: Prisma.$LedgerEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      contractId: string | null
      auctionId: string | null
      buyerId: string
      sellerId: string
      status: $Enums.EscrowStatus
      totalAmount: Prisma.Decimal
      fundedAmount: Prisma.Decimal
      releasedAmount: Prisma.Decimal
      currency: string
      fundedAt: Date | null
      releasedAt: Date | null
      disputedAt: Date | null
      closedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["escrowAccount"]>
    composites: {}
  }

  type EscrowAccountGetPayload<S extends boolean | null | undefined | EscrowAccountDefaultArgs> = $Result.GetResult<Prisma.$EscrowAccountPayload, S>

  type EscrowAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EscrowAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EscrowAccountCountAggregateInputType | true
    }

  export interface EscrowAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EscrowAccount'], meta: { name: 'EscrowAccount' } }
    /**
     * Find zero or one EscrowAccount that matches the filter.
     * @param {EscrowAccountFindUniqueArgs} args - Arguments to find a EscrowAccount
     * @example
     * // Get one EscrowAccount
     * const escrowAccount = await prisma.escrowAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EscrowAccountFindUniqueArgs>(args: SelectSubset<T, EscrowAccountFindUniqueArgs<ExtArgs>>): Prisma__EscrowAccountClient<$Result.GetResult<Prisma.$EscrowAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EscrowAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EscrowAccountFindUniqueOrThrowArgs} args - Arguments to find a EscrowAccount
     * @example
     * // Get one EscrowAccount
     * const escrowAccount = await prisma.escrowAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EscrowAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, EscrowAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EscrowAccountClient<$Result.GetResult<Prisma.$EscrowAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EscrowAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscrowAccountFindFirstArgs} args - Arguments to find a EscrowAccount
     * @example
     * // Get one EscrowAccount
     * const escrowAccount = await prisma.escrowAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EscrowAccountFindFirstArgs>(args?: SelectSubset<T, EscrowAccountFindFirstArgs<ExtArgs>>): Prisma__EscrowAccountClient<$Result.GetResult<Prisma.$EscrowAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EscrowAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscrowAccountFindFirstOrThrowArgs} args - Arguments to find a EscrowAccount
     * @example
     * // Get one EscrowAccount
     * const escrowAccount = await prisma.escrowAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EscrowAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, EscrowAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__EscrowAccountClient<$Result.GetResult<Prisma.$EscrowAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EscrowAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscrowAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EscrowAccounts
     * const escrowAccounts = await prisma.escrowAccount.findMany()
     * 
     * // Get first 10 EscrowAccounts
     * const escrowAccounts = await prisma.escrowAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const escrowAccountWithIdOnly = await prisma.escrowAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EscrowAccountFindManyArgs>(args?: SelectSubset<T, EscrowAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EscrowAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EscrowAccount.
     * @param {EscrowAccountCreateArgs} args - Arguments to create a EscrowAccount.
     * @example
     * // Create one EscrowAccount
     * const EscrowAccount = await prisma.escrowAccount.create({
     *   data: {
     *     // ... data to create a EscrowAccount
     *   }
     * })
     * 
     */
    create<T extends EscrowAccountCreateArgs>(args: SelectSubset<T, EscrowAccountCreateArgs<ExtArgs>>): Prisma__EscrowAccountClient<$Result.GetResult<Prisma.$EscrowAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EscrowAccounts.
     * @param {EscrowAccountCreateManyArgs} args - Arguments to create many EscrowAccounts.
     * @example
     * // Create many EscrowAccounts
     * const escrowAccount = await prisma.escrowAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EscrowAccountCreateManyArgs>(args?: SelectSubset<T, EscrowAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EscrowAccounts and returns the data saved in the database.
     * @param {EscrowAccountCreateManyAndReturnArgs} args - Arguments to create many EscrowAccounts.
     * @example
     * // Create many EscrowAccounts
     * const escrowAccount = await prisma.escrowAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EscrowAccounts and only return the `id`
     * const escrowAccountWithIdOnly = await prisma.escrowAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EscrowAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, EscrowAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EscrowAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EscrowAccount.
     * @param {EscrowAccountDeleteArgs} args - Arguments to delete one EscrowAccount.
     * @example
     * // Delete one EscrowAccount
     * const EscrowAccount = await prisma.escrowAccount.delete({
     *   where: {
     *     // ... filter to delete one EscrowAccount
     *   }
     * })
     * 
     */
    delete<T extends EscrowAccountDeleteArgs>(args: SelectSubset<T, EscrowAccountDeleteArgs<ExtArgs>>): Prisma__EscrowAccountClient<$Result.GetResult<Prisma.$EscrowAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EscrowAccount.
     * @param {EscrowAccountUpdateArgs} args - Arguments to update one EscrowAccount.
     * @example
     * // Update one EscrowAccount
     * const escrowAccount = await prisma.escrowAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EscrowAccountUpdateArgs>(args: SelectSubset<T, EscrowAccountUpdateArgs<ExtArgs>>): Prisma__EscrowAccountClient<$Result.GetResult<Prisma.$EscrowAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EscrowAccounts.
     * @param {EscrowAccountDeleteManyArgs} args - Arguments to filter EscrowAccounts to delete.
     * @example
     * // Delete a few EscrowAccounts
     * const { count } = await prisma.escrowAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EscrowAccountDeleteManyArgs>(args?: SelectSubset<T, EscrowAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EscrowAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscrowAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EscrowAccounts
     * const escrowAccount = await prisma.escrowAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EscrowAccountUpdateManyArgs>(args: SelectSubset<T, EscrowAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EscrowAccounts and returns the data updated in the database.
     * @param {EscrowAccountUpdateManyAndReturnArgs} args - Arguments to update many EscrowAccounts.
     * @example
     * // Update many EscrowAccounts
     * const escrowAccount = await prisma.escrowAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EscrowAccounts and only return the `id`
     * const escrowAccountWithIdOnly = await prisma.escrowAccount.updateManyAndReturn({
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
    updateManyAndReturn<T extends EscrowAccountUpdateManyAndReturnArgs>(args: SelectSubset<T, EscrowAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EscrowAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EscrowAccount.
     * @param {EscrowAccountUpsertArgs} args - Arguments to update or create a EscrowAccount.
     * @example
     * // Update or create a EscrowAccount
     * const escrowAccount = await prisma.escrowAccount.upsert({
     *   create: {
     *     // ... data to create a EscrowAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EscrowAccount we want to update
     *   }
     * })
     */
    upsert<T extends EscrowAccountUpsertArgs>(args: SelectSubset<T, EscrowAccountUpsertArgs<ExtArgs>>): Prisma__EscrowAccountClient<$Result.GetResult<Prisma.$EscrowAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EscrowAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscrowAccountCountArgs} args - Arguments to filter EscrowAccounts to count.
     * @example
     * // Count the number of EscrowAccounts
     * const count = await prisma.escrowAccount.count({
     *   where: {
     *     // ... the filter for the EscrowAccounts we want to count
     *   }
     * })
    **/
    count<T extends EscrowAccountCountArgs>(
      args?: Subset<T, EscrowAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EscrowAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EscrowAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscrowAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EscrowAccountAggregateArgs>(args: Subset<T, EscrowAccountAggregateArgs>): Prisma.PrismaPromise<GetEscrowAccountAggregateType<T>>

    /**
     * Group by EscrowAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscrowAccountGroupByArgs} args - Group by arguments.
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
      T extends EscrowAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EscrowAccountGroupByArgs['orderBy'] }
        : { orderBy?: EscrowAccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EscrowAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEscrowAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EscrowAccount model
   */
  readonly fields: EscrowAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EscrowAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EscrowAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payments<T extends EscrowAccount$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, EscrowAccount$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    conditions<T extends EscrowAccount$conditionsArgs<ExtArgs> = {}>(args?: Subset<T, EscrowAccount$conditionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReleaseConditionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ledgerEntries<T extends EscrowAccount$ledgerEntriesArgs<ExtArgs> = {}>(args?: Subset<T, EscrowAccount$ledgerEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the EscrowAccount model
   */
  interface EscrowAccountFieldRefs {
    readonly id: FieldRef<"EscrowAccount", 'String'>
    readonly contractId: FieldRef<"EscrowAccount", 'String'>
    readonly auctionId: FieldRef<"EscrowAccount", 'String'>
    readonly buyerId: FieldRef<"EscrowAccount", 'String'>
    readonly sellerId: FieldRef<"EscrowAccount", 'String'>
    readonly status: FieldRef<"EscrowAccount", 'EscrowStatus'>
    readonly totalAmount: FieldRef<"EscrowAccount", 'Decimal'>
    readonly fundedAmount: FieldRef<"EscrowAccount", 'Decimal'>
    readonly releasedAmount: FieldRef<"EscrowAccount", 'Decimal'>
    readonly currency: FieldRef<"EscrowAccount", 'String'>
    readonly fundedAt: FieldRef<"EscrowAccount", 'DateTime'>
    readonly releasedAt: FieldRef<"EscrowAccount", 'DateTime'>
    readonly disputedAt: FieldRef<"EscrowAccount", 'DateTime'>
    readonly closedAt: FieldRef<"EscrowAccount", 'DateTime'>
    readonly createdAt: FieldRef<"EscrowAccount", 'DateTime'>
    readonly updatedAt: FieldRef<"EscrowAccount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EscrowAccount findUnique
   */
  export type EscrowAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscrowAccount
     */
    select?: EscrowAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EscrowAccount
     */
    omit?: EscrowAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscrowAccountInclude<ExtArgs> | null
    /**
     * Filter, which EscrowAccount to fetch.
     */
    where: EscrowAccountWhereUniqueInput
  }

  /**
   * EscrowAccount findUniqueOrThrow
   */
  export type EscrowAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscrowAccount
     */
    select?: EscrowAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EscrowAccount
     */
    omit?: EscrowAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscrowAccountInclude<ExtArgs> | null
    /**
     * Filter, which EscrowAccount to fetch.
     */
    where: EscrowAccountWhereUniqueInput
  }

  /**
   * EscrowAccount findFirst
   */
  export type EscrowAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscrowAccount
     */
    select?: EscrowAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EscrowAccount
     */
    omit?: EscrowAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscrowAccountInclude<ExtArgs> | null
    /**
     * Filter, which EscrowAccount to fetch.
     */
    where?: EscrowAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EscrowAccounts to fetch.
     */
    orderBy?: EscrowAccountOrderByWithRelationInput | EscrowAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EscrowAccounts.
     */
    cursor?: EscrowAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EscrowAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EscrowAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EscrowAccounts.
     */
    distinct?: EscrowAccountScalarFieldEnum | EscrowAccountScalarFieldEnum[]
  }

  /**
   * EscrowAccount findFirstOrThrow
   */
  export type EscrowAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscrowAccount
     */
    select?: EscrowAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EscrowAccount
     */
    omit?: EscrowAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscrowAccountInclude<ExtArgs> | null
    /**
     * Filter, which EscrowAccount to fetch.
     */
    where?: EscrowAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EscrowAccounts to fetch.
     */
    orderBy?: EscrowAccountOrderByWithRelationInput | EscrowAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EscrowAccounts.
     */
    cursor?: EscrowAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EscrowAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EscrowAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EscrowAccounts.
     */
    distinct?: EscrowAccountScalarFieldEnum | EscrowAccountScalarFieldEnum[]
  }

  /**
   * EscrowAccount findMany
   */
  export type EscrowAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscrowAccount
     */
    select?: EscrowAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EscrowAccount
     */
    omit?: EscrowAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscrowAccountInclude<ExtArgs> | null
    /**
     * Filter, which EscrowAccounts to fetch.
     */
    where?: EscrowAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EscrowAccounts to fetch.
     */
    orderBy?: EscrowAccountOrderByWithRelationInput | EscrowAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EscrowAccounts.
     */
    cursor?: EscrowAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EscrowAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EscrowAccounts.
     */
    skip?: number
    distinct?: EscrowAccountScalarFieldEnum | EscrowAccountScalarFieldEnum[]
  }

  /**
   * EscrowAccount create
   */
  export type EscrowAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscrowAccount
     */
    select?: EscrowAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EscrowAccount
     */
    omit?: EscrowAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscrowAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a EscrowAccount.
     */
    data: XOR<EscrowAccountCreateInput, EscrowAccountUncheckedCreateInput>
  }

  /**
   * EscrowAccount createMany
   */
  export type EscrowAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EscrowAccounts.
     */
    data: EscrowAccountCreateManyInput | EscrowAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EscrowAccount createManyAndReturn
   */
  export type EscrowAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscrowAccount
     */
    select?: EscrowAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EscrowAccount
     */
    omit?: EscrowAccountOmit<ExtArgs> | null
    /**
     * The data used to create many EscrowAccounts.
     */
    data: EscrowAccountCreateManyInput | EscrowAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EscrowAccount update
   */
  export type EscrowAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscrowAccount
     */
    select?: EscrowAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EscrowAccount
     */
    omit?: EscrowAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscrowAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a EscrowAccount.
     */
    data: XOR<EscrowAccountUpdateInput, EscrowAccountUncheckedUpdateInput>
    /**
     * Choose, which EscrowAccount to update.
     */
    where: EscrowAccountWhereUniqueInput
  }

  /**
   * EscrowAccount updateMany
   */
  export type EscrowAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EscrowAccounts.
     */
    data: XOR<EscrowAccountUpdateManyMutationInput, EscrowAccountUncheckedUpdateManyInput>
    /**
     * Filter which EscrowAccounts to update
     */
    where?: EscrowAccountWhereInput
    /**
     * Limit how many EscrowAccounts to update.
     */
    limit?: number
  }

  /**
   * EscrowAccount updateManyAndReturn
   */
  export type EscrowAccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscrowAccount
     */
    select?: EscrowAccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EscrowAccount
     */
    omit?: EscrowAccountOmit<ExtArgs> | null
    /**
     * The data used to update EscrowAccounts.
     */
    data: XOR<EscrowAccountUpdateManyMutationInput, EscrowAccountUncheckedUpdateManyInput>
    /**
     * Filter which EscrowAccounts to update
     */
    where?: EscrowAccountWhereInput
    /**
     * Limit how many EscrowAccounts to update.
     */
    limit?: number
  }

  /**
   * EscrowAccount upsert
   */
  export type EscrowAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscrowAccount
     */
    select?: EscrowAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EscrowAccount
     */
    omit?: EscrowAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscrowAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the EscrowAccount to update in case it exists.
     */
    where: EscrowAccountWhereUniqueInput
    /**
     * In case the EscrowAccount found by the `where` argument doesn't exist, create a new EscrowAccount with this data.
     */
    create: XOR<EscrowAccountCreateInput, EscrowAccountUncheckedCreateInput>
    /**
     * In case the EscrowAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EscrowAccountUpdateInput, EscrowAccountUncheckedUpdateInput>
  }

  /**
   * EscrowAccount delete
   */
  export type EscrowAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscrowAccount
     */
    select?: EscrowAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EscrowAccount
     */
    omit?: EscrowAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscrowAccountInclude<ExtArgs> | null
    /**
     * Filter which EscrowAccount to delete.
     */
    where: EscrowAccountWhereUniqueInput
  }

  /**
   * EscrowAccount deleteMany
   */
  export type EscrowAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EscrowAccounts to delete
     */
    where?: EscrowAccountWhereInput
    /**
     * Limit how many EscrowAccounts to delete.
     */
    limit?: number
  }

  /**
   * EscrowAccount.payments
   */
  export type EscrowAccount$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * EscrowAccount.conditions
   */
  export type EscrowAccount$conditionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReleaseCondition
     */
    select?: ReleaseConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReleaseCondition
     */
    omit?: ReleaseConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReleaseConditionInclude<ExtArgs> | null
    where?: ReleaseConditionWhereInput
    orderBy?: ReleaseConditionOrderByWithRelationInput | ReleaseConditionOrderByWithRelationInput[]
    cursor?: ReleaseConditionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReleaseConditionScalarFieldEnum | ReleaseConditionScalarFieldEnum[]
  }

  /**
   * EscrowAccount.ledgerEntries
   */
  export type EscrowAccount$ledgerEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerEntry
     */
    omit?: LedgerEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryInclude<ExtArgs> | null
    where?: LedgerEntryWhereInput
    orderBy?: LedgerEntryOrderByWithRelationInput | LedgerEntryOrderByWithRelationInput[]
    cursor?: LedgerEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LedgerEntryScalarFieldEnum | LedgerEntryScalarFieldEnum[]
  }

  /**
   * EscrowAccount without action
   */
  export type EscrowAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscrowAccount
     */
    select?: EscrowAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EscrowAccount
     */
    omit?: EscrowAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscrowAccountInclude<ExtArgs> | null
  }


  /**
   * Model ReleaseCondition
   */

  export type AggregateReleaseCondition = {
    _count: ReleaseConditionCountAggregateOutputType | null
    _avg: ReleaseConditionAvgAggregateOutputType | null
    _sum: ReleaseConditionSumAggregateOutputType | null
    _min: ReleaseConditionMinAggregateOutputType | null
    _max: ReleaseConditionMaxAggregateOutputType | null
  }

  export type ReleaseConditionAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type ReleaseConditionSumAggregateOutputType = {
    sortOrder: number | null
  }

  export type ReleaseConditionMinAggregateOutputType = {
    id: string | null
    escrowId: string | null
    name: string | null
    description: string | null
    isMet: boolean | null
    metAt: Date | null
    metBy: string | null
    sortOrder: number | null
    createdAt: Date | null
  }

  export type ReleaseConditionMaxAggregateOutputType = {
    id: string | null
    escrowId: string | null
    name: string | null
    description: string | null
    isMet: boolean | null
    metAt: Date | null
    metBy: string | null
    sortOrder: number | null
    createdAt: Date | null
  }

  export type ReleaseConditionCountAggregateOutputType = {
    id: number
    escrowId: number
    name: number
    description: number
    isMet: number
    metAt: number
    metBy: number
    sortOrder: number
    createdAt: number
    _all: number
  }


  export type ReleaseConditionAvgAggregateInputType = {
    sortOrder?: true
  }

  export type ReleaseConditionSumAggregateInputType = {
    sortOrder?: true
  }

  export type ReleaseConditionMinAggregateInputType = {
    id?: true
    escrowId?: true
    name?: true
    description?: true
    isMet?: true
    metAt?: true
    metBy?: true
    sortOrder?: true
    createdAt?: true
  }

  export type ReleaseConditionMaxAggregateInputType = {
    id?: true
    escrowId?: true
    name?: true
    description?: true
    isMet?: true
    metAt?: true
    metBy?: true
    sortOrder?: true
    createdAt?: true
  }

  export type ReleaseConditionCountAggregateInputType = {
    id?: true
    escrowId?: true
    name?: true
    description?: true
    isMet?: true
    metAt?: true
    metBy?: true
    sortOrder?: true
    createdAt?: true
    _all?: true
  }

  export type ReleaseConditionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReleaseCondition to aggregate.
     */
    where?: ReleaseConditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReleaseConditions to fetch.
     */
    orderBy?: ReleaseConditionOrderByWithRelationInput | ReleaseConditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReleaseConditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReleaseConditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReleaseConditions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReleaseConditions
    **/
    _count?: true | ReleaseConditionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReleaseConditionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReleaseConditionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReleaseConditionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReleaseConditionMaxAggregateInputType
  }

  export type GetReleaseConditionAggregateType<T extends ReleaseConditionAggregateArgs> = {
        [P in keyof T & keyof AggregateReleaseCondition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReleaseCondition[P]>
      : GetScalarType<T[P], AggregateReleaseCondition[P]>
  }




  export type ReleaseConditionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReleaseConditionWhereInput
    orderBy?: ReleaseConditionOrderByWithAggregationInput | ReleaseConditionOrderByWithAggregationInput[]
    by: ReleaseConditionScalarFieldEnum[] | ReleaseConditionScalarFieldEnum
    having?: ReleaseConditionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReleaseConditionCountAggregateInputType | true
    _avg?: ReleaseConditionAvgAggregateInputType
    _sum?: ReleaseConditionSumAggregateInputType
    _min?: ReleaseConditionMinAggregateInputType
    _max?: ReleaseConditionMaxAggregateInputType
  }

  export type ReleaseConditionGroupByOutputType = {
    id: string
    escrowId: string
    name: string
    description: string | null
    isMet: boolean
    metAt: Date | null
    metBy: string | null
    sortOrder: number
    createdAt: Date
    _count: ReleaseConditionCountAggregateOutputType | null
    _avg: ReleaseConditionAvgAggregateOutputType | null
    _sum: ReleaseConditionSumAggregateOutputType | null
    _min: ReleaseConditionMinAggregateOutputType | null
    _max: ReleaseConditionMaxAggregateOutputType | null
  }

  type GetReleaseConditionGroupByPayload<T extends ReleaseConditionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReleaseConditionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReleaseConditionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReleaseConditionGroupByOutputType[P]>
            : GetScalarType<T[P], ReleaseConditionGroupByOutputType[P]>
        }
      >
    >


  export type ReleaseConditionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    escrowId?: boolean
    name?: boolean
    description?: boolean
    isMet?: boolean
    metAt?: boolean
    metBy?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    escrow?: boolean | EscrowAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["releaseCondition"]>

  export type ReleaseConditionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    escrowId?: boolean
    name?: boolean
    description?: boolean
    isMet?: boolean
    metAt?: boolean
    metBy?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    escrow?: boolean | EscrowAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["releaseCondition"]>

  export type ReleaseConditionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    escrowId?: boolean
    name?: boolean
    description?: boolean
    isMet?: boolean
    metAt?: boolean
    metBy?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    escrow?: boolean | EscrowAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["releaseCondition"]>

  export type ReleaseConditionSelectScalar = {
    id?: boolean
    escrowId?: boolean
    name?: boolean
    description?: boolean
    isMet?: boolean
    metAt?: boolean
    metBy?: boolean
    sortOrder?: boolean
    createdAt?: boolean
  }

  export type ReleaseConditionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "escrowId" | "name" | "description" | "isMet" | "metAt" | "metBy" | "sortOrder" | "createdAt", ExtArgs["result"]["releaseCondition"]>
  export type ReleaseConditionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    escrow?: boolean | EscrowAccountDefaultArgs<ExtArgs>
  }
  export type ReleaseConditionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    escrow?: boolean | EscrowAccountDefaultArgs<ExtArgs>
  }
  export type ReleaseConditionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    escrow?: boolean | EscrowAccountDefaultArgs<ExtArgs>
  }

  export type $ReleaseConditionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReleaseCondition"
    objects: {
      escrow: Prisma.$EscrowAccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      escrowId: string
      name: string
      description: string | null
      isMet: boolean
      metAt: Date | null
      metBy: string | null
      sortOrder: number
      createdAt: Date
    }, ExtArgs["result"]["releaseCondition"]>
    composites: {}
  }

  type ReleaseConditionGetPayload<S extends boolean | null | undefined | ReleaseConditionDefaultArgs> = $Result.GetResult<Prisma.$ReleaseConditionPayload, S>

  type ReleaseConditionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReleaseConditionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReleaseConditionCountAggregateInputType | true
    }

  export interface ReleaseConditionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReleaseCondition'], meta: { name: 'ReleaseCondition' } }
    /**
     * Find zero or one ReleaseCondition that matches the filter.
     * @param {ReleaseConditionFindUniqueArgs} args - Arguments to find a ReleaseCondition
     * @example
     * // Get one ReleaseCondition
     * const releaseCondition = await prisma.releaseCondition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReleaseConditionFindUniqueArgs>(args: SelectSubset<T, ReleaseConditionFindUniqueArgs<ExtArgs>>): Prisma__ReleaseConditionClient<$Result.GetResult<Prisma.$ReleaseConditionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReleaseCondition that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReleaseConditionFindUniqueOrThrowArgs} args - Arguments to find a ReleaseCondition
     * @example
     * // Get one ReleaseCondition
     * const releaseCondition = await prisma.releaseCondition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReleaseConditionFindUniqueOrThrowArgs>(args: SelectSubset<T, ReleaseConditionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReleaseConditionClient<$Result.GetResult<Prisma.$ReleaseConditionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReleaseCondition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReleaseConditionFindFirstArgs} args - Arguments to find a ReleaseCondition
     * @example
     * // Get one ReleaseCondition
     * const releaseCondition = await prisma.releaseCondition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReleaseConditionFindFirstArgs>(args?: SelectSubset<T, ReleaseConditionFindFirstArgs<ExtArgs>>): Prisma__ReleaseConditionClient<$Result.GetResult<Prisma.$ReleaseConditionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReleaseCondition that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReleaseConditionFindFirstOrThrowArgs} args - Arguments to find a ReleaseCondition
     * @example
     * // Get one ReleaseCondition
     * const releaseCondition = await prisma.releaseCondition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReleaseConditionFindFirstOrThrowArgs>(args?: SelectSubset<T, ReleaseConditionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReleaseConditionClient<$Result.GetResult<Prisma.$ReleaseConditionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReleaseConditions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReleaseConditionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReleaseConditions
     * const releaseConditions = await prisma.releaseCondition.findMany()
     * 
     * // Get first 10 ReleaseConditions
     * const releaseConditions = await prisma.releaseCondition.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const releaseConditionWithIdOnly = await prisma.releaseCondition.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReleaseConditionFindManyArgs>(args?: SelectSubset<T, ReleaseConditionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReleaseConditionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReleaseCondition.
     * @param {ReleaseConditionCreateArgs} args - Arguments to create a ReleaseCondition.
     * @example
     * // Create one ReleaseCondition
     * const ReleaseCondition = await prisma.releaseCondition.create({
     *   data: {
     *     // ... data to create a ReleaseCondition
     *   }
     * })
     * 
     */
    create<T extends ReleaseConditionCreateArgs>(args: SelectSubset<T, ReleaseConditionCreateArgs<ExtArgs>>): Prisma__ReleaseConditionClient<$Result.GetResult<Prisma.$ReleaseConditionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReleaseConditions.
     * @param {ReleaseConditionCreateManyArgs} args - Arguments to create many ReleaseConditions.
     * @example
     * // Create many ReleaseConditions
     * const releaseCondition = await prisma.releaseCondition.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReleaseConditionCreateManyArgs>(args?: SelectSubset<T, ReleaseConditionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReleaseConditions and returns the data saved in the database.
     * @param {ReleaseConditionCreateManyAndReturnArgs} args - Arguments to create many ReleaseConditions.
     * @example
     * // Create many ReleaseConditions
     * const releaseCondition = await prisma.releaseCondition.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReleaseConditions and only return the `id`
     * const releaseConditionWithIdOnly = await prisma.releaseCondition.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReleaseConditionCreateManyAndReturnArgs>(args?: SelectSubset<T, ReleaseConditionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReleaseConditionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReleaseCondition.
     * @param {ReleaseConditionDeleteArgs} args - Arguments to delete one ReleaseCondition.
     * @example
     * // Delete one ReleaseCondition
     * const ReleaseCondition = await prisma.releaseCondition.delete({
     *   where: {
     *     // ... filter to delete one ReleaseCondition
     *   }
     * })
     * 
     */
    delete<T extends ReleaseConditionDeleteArgs>(args: SelectSubset<T, ReleaseConditionDeleteArgs<ExtArgs>>): Prisma__ReleaseConditionClient<$Result.GetResult<Prisma.$ReleaseConditionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReleaseCondition.
     * @param {ReleaseConditionUpdateArgs} args - Arguments to update one ReleaseCondition.
     * @example
     * // Update one ReleaseCondition
     * const releaseCondition = await prisma.releaseCondition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReleaseConditionUpdateArgs>(args: SelectSubset<T, ReleaseConditionUpdateArgs<ExtArgs>>): Prisma__ReleaseConditionClient<$Result.GetResult<Prisma.$ReleaseConditionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReleaseConditions.
     * @param {ReleaseConditionDeleteManyArgs} args - Arguments to filter ReleaseConditions to delete.
     * @example
     * // Delete a few ReleaseConditions
     * const { count } = await prisma.releaseCondition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReleaseConditionDeleteManyArgs>(args?: SelectSubset<T, ReleaseConditionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReleaseConditions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReleaseConditionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReleaseConditions
     * const releaseCondition = await prisma.releaseCondition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReleaseConditionUpdateManyArgs>(args: SelectSubset<T, ReleaseConditionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReleaseConditions and returns the data updated in the database.
     * @param {ReleaseConditionUpdateManyAndReturnArgs} args - Arguments to update many ReleaseConditions.
     * @example
     * // Update many ReleaseConditions
     * const releaseCondition = await prisma.releaseCondition.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReleaseConditions and only return the `id`
     * const releaseConditionWithIdOnly = await prisma.releaseCondition.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReleaseConditionUpdateManyAndReturnArgs>(args: SelectSubset<T, ReleaseConditionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReleaseConditionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReleaseCondition.
     * @param {ReleaseConditionUpsertArgs} args - Arguments to update or create a ReleaseCondition.
     * @example
     * // Update or create a ReleaseCondition
     * const releaseCondition = await prisma.releaseCondition.upsert({
     *   create: {
     *     // ... data to create a ReleaseCondition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReleaseCondition we want to update
     *   }
     * })
     */
    upsert<T extends ReleaseConditionUpsertArgs>(args: SelectSubset<T, ReleaseConditionUpsertArgs<ExtArgs>>): Prisma__ReleaseConditionClient<$Result.GetResult<Prisma.$ReleaseConditionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReleaseConditions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReleaseConditionCountArgs} args - Arguments to filter ReleaseConditions to count.
     * @example
     * // Count the number of ReleaseConditions
     * const count = await prisma.releaseCondition.count({
     *   where: {
     *     // ... the filter for the ReleaseConditions we want to count
     *   }
     * })
    **/
    count<T extends ReleaseConditionCountArgs>(
      args?: Subset<T, ReleaseConditionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReleaseConditionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReleaseCondition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReleaseConditionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReleaseConditionAggregateArgs>(args: Subset<T, ReleaseConditionAggregateArgs>): Prisma.PrismaPromise<GetReleaseConditionAggregateType<T>>

    /**
     * Group by ReleaseCondition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReleaseConditionGroupByArgs} args - Group by arguments.
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
      T extends ReleaseConditionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReleaseConditionGroupByArgs['orderBy'] }
        : { orderBy?: ReleaseConditionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReleaseConditionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReleaseConditionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReleaseCondition model
   */
  readonly fields: ReleaseConditionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReleaseCondition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReleaseConditionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    escrow<T extends EscrowAccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EscrowAccountDefaultArgs<ExtArgs>>): Prisma__EscrowAccountClient<$Result.GetResult<Prisma.$EscrowAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ReleaseCondition model
   */
  interface ReleaseConditionFieldRefs {
    readonly id: FieldRef<"ReleaseCondition", 'String'>
    readonly escrowId: FieldRef<"ReleaseCondition", 'String'>
    readonly name: FieldRef<"ReleaseCondition", 'String'>
    readonly description: FieldRef<"ReleaseCondition", 'String'>
    readonly isMet: FieldRef<"ReleaseCondition", 'Boolean'>
    readonly metAt: FieldRef<"ReleaseCondition", 'DateTime'>
    readonly metBy: FieldRef<"ReleaseCondition", 'String'>
    readonly sortOrder: FieldRef<"ReleaseCondition", 'Int'>
    readonly createdAt: FieldRef<"ReleaseCondition", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReleaseCondition findUnique
   */
  export type ReleaseConditionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReleaseCondition
     */
    select?: ReleaseConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReleaseCondition
     */
    omit?: ReleaseConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReleaseConditionInclude<ExtArgs> | null
    /**
     * Filter, which ReleaseCondition to fetch.
     */
    where: ReleaseConditionWhereUniqueInput
  }

  /**
   * ReleaseCondition findUniqueOrThrow
   */
  export type ReleaseConditionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReleaseCondition
     */
    select?: ReleaseConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReleaseCondition
     */
    omit?: ReleaseConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReleaseConditionInclude<ExtArgs> | null
    /**
     * Filter, which ReleaseCondition to fetch.
     */
    where: ReleaseConditionWhereUniqueInput
  }

  /**
   * ReleaseCondition findFirst
   */
  export type ReleaseConditionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReleaseCondition
     */
    select?: ReleaseConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReleaseCondition
     */
    omit?: ReleaseConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReleaseConditionInclude<ExtArgs> | null
    /**
     * Filter, which ReleaseCondition to fetch.
     */
    where?: ReleaseConditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReleaseConditions to fetch.
     */
    orderBy?: ReleaseConditionOrderByWithRelationInput | ReleaseConditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReleaseConditions.
     */
    cursor?: ReleaseConditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReleaseConditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReleaseConditions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReleaseConditions.
     */
    distinct?: ReleaseConditionScalarFieldEnum | ReleaseConditionScalarFieldEnum[]
  }

  /**
   * ReleaseCondition findFirstOrThrow
   */
  export type ReleaseConditionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReleaseCondition
     */
    select?: ReleaseConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReleaseCondition
     */
    omit?: ReleaseConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReleaseConditionInclude<ExtArgs> | null
    /**
     * Filter, which ReleaseCondition to fetch.
     */
    where?: ReleaseConditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReleaseConditions to fetch.
     */
    orderBy?: ReleaseConditionOrderByWithRelationInput | ReleaseConditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReleaseConditions.
     */
    cursor?: ReleaseConditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReleaseConditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReleaseConditions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReleaseConditions.
     */
    distinct?: ReleaseConditionScalarFieldEnum | ReleaseConditionScalarFieldEnum[]
  }

  /**
   * ReleaseCondition findMany
   */
  export type ReleaseConditionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReleaseCondition
     */
    select?: ReleaseConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReleaseCondition
     */
    omit?: ReleaseConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReleaseConditionInclude<ExtArgs> | null
    /**
     * Filter, which ReleaseConditions to fetch.
     */
    where?: ReleaseConditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReleaseConditions to fetch.
     */
    orderBy?: ReleaseConditionOrderByWithRelationInput | ReleaseConditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReleaseConditions.
     */
    cursor?: ReleaseConditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReleaseConditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReleaseConditions.
     */
    skip?: number
    distinct?: ReleaseConditionScalarFieldEnum | ReleaseConditionScalarFieldEnum[]
  }

  /**
   * ReleaseCondition create
   */
  export type ReleaseConditionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReleaseCondition
     */
    select?: ReleaseConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReleaseCondition
     */
    omit?: ReleaseConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReleaseConditionInclude<ExtArgs> | null
    /**
     * The data needed to create a ReleaseCondition.
     */
    data: XOR<ReleaseConditionCreateInput, ReleaseConditionUncheckedCreateInput>
  }

  /**
   * ReleaseCondition createMany
   */
  export type ReleaseConditionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReleaseConditions.
     */
    data: ReleaseConditionCreateManyInput | ReleaseConditionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReleaseCondition createManyAndReturn
   */
  export type ReleaseConditionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReleaseCondition
     */
    select?: ReleaseConditionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReleaseCondition
     */
    omit?: ReleaseConditionOmit<ExtArgs> | null
    /**
     * The data used to create many ReleaseConditions.
     */
    data: ReleaseConditionCreateManyInput | ReleaseConditionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReleaseConditionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReleaseCondition update
   */
  export type ReleaseConditionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReleaseCondition
     */
    select?: ReleaseConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReleaseCondition
     */
    omit?: ReleaseConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReleaseConditionInclude<ExtArgs> | null
    /**
     * The data needed to update a ReleaseCondition.
     */
    data: XOR<ReleaseConditionUpdateInput, ReleaseConditionUncheckedUpdateInput>
    /**
     * Choose, which ReleaseCondition to update.
     */
    where: ReleaseConditionWhereUniqueInput
  }

  /**
   * ReleaseCondition updateMany
   */
  export type ReleaseConditionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReleaseConditions.
     */
    data: XOR<ReleaseConditionUpdateManyMutationInput, ReleaseConditionUncheckedUpdateManyInput>
    /**
     * Filter which ReleaseConditions to update
     */
    where?: ReleaseConditionWhereInput
    /**
     * Limit how many ReleaseConditions to update.
     */
    limit?: number
  }

  /**
   * ReleaseCondition updateManyAndReturn
   */
  export type ReleaseConditionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReleaseCondition
     */
    select?: ReleaseConditionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReleaseCondition
     */
    omit?: ReleaseConditionOmit<ExtArgs> | null
    /**
     * The data used to update ReleaseConditions.
     */
    data: XOR<ReleaseConditionUpdateManyMutationInput, ReleaseConditionUncheckedUpdateManyInput>
    /**
     * Filter which ReleaseConditions to update
     */
    where?: ReleaseConditionWhereInput
    /**
     * Limit how many ReleaseConditions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReleaseConditionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReleaseCondition upsert
   */
  export type ReleaseConditionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReleaseCondition
     */
    select?: ReleaseConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReleaseCondition
     */
    omit?: ReleaseConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReleaseConditionInclude<ExtArgs> | null
    /**
     * The filter to search for the ReleaseCondition to update in case it exists.
     */
    where: ReleaseConditionWhereUniqueInput
    /**
     * In case the ReleaseCondition found by the `where` argument doesn't exist, create a new ReleaseCondition with this data.
     */
    create: XOR<ReleaseConditionCreateInput, ReleaseConditionUncheckedCreateInput>
    /**
     * In case the ReleaseCondition was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReleaseConditionUpdateInput, ReleaseConditionUncheckedUpdateInput>
  }

  /**
   * ReleaseCondition delete
   */
  export type ReleaseConditionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReleaseCondition
     */
    select?: ReleaseConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReleaseCondition
     */
    omit?: ReleaseConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReleaseConditionInclude<ExtArgs> | null
    /**
     * Filter which ReleaseCondition to delete.
     */
    where: ReleaseConditionWhereUniqueInput
  }

  /**
   * ReleaseCondition deleteMany
   */
  export type ReleaseConditionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReleaseConditions to delete
     */
    where?: ReleaseConditionWhereInput
    /**
     * Limit how many ReleaseConditions to delete.
     */
    limit?: number
  }

  /**
   * ReleaseCondition without action
   */
  export type ReleaseConditionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReleaseCondition
     */
    select?: ReleaseConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReleaseCondition
     */
    omit?: ReleaseConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReleaseConditionInclude<ExtArgs> | null
  }


  /**
   * Model LedgerEntry
   */

  export type AggregateLedgerEntry = {
    _count: LedgerEntryCountAggregateOutputType | null
    _avg: LedgerEntryAvgAggregateOutputType | null
    _sum: LedgerEntrySumAggregateOutputType | null
    _min: LedgerEntryMinAggregateOutputType | null
    _max: LedgerEntryMaxAggregateOutputType | null
  }

  export type LedgerEntryAvgAggregateOutputType = {
    amount: Decimal | null
    balance: Decimal | null
  }

  export type LedgerEntrySumAggregateOutputType = {
    amount: Decimal | null
    balance: Decimal | null
  }

  export type LedgerEntryMinAggregateOutputType = {
    id: string | null
    escrowId: string | null
    type: $Enums.LedgerType | null
    amount: Decimal | null
    balance: Decimal | null
    description: string | null
    reference: string | null
    createdAt: Date | null
  }

  export type LedgerEntryMaxAggregateOutputType = {
    id: string | null
    escrowId: string | null
    type: $Enums.LedgerType | null
    amount: Decimal | null
    balance: Decimal | null
    description: string | null
    reference: string | null
    createdAt: Date | null
  }

  export type LedgerEntryCountAggregateOutputType = {
    id: number
    escrowId: number
    type: number
    amount: number
    balance: number
    description: number
    reference: number
    createdAt: number
    _all: number
  }


  export type LedgerEntryAvgAggregateInputType = {
    amount?: true
    balance?: true
  }

  export type LedgerEntrySumAggregateInputType = {
    amount?: true
    balance?: true
  }

  export type LedgerEntryMinAggregateInputType = {
    id?: true
    escrowId?: true
    type?: true
    amount?: true
    balance?: true
    description?: true
    reference?: true
    createdAt?: true
  }

  export type LedgerEntryMaxAggregateInputType = {
    id?: true
    escrowId?: true
    type?: true
    amount?: true
    balance?: true
    description?: true
    reference?: true
    createdAt?: true
  }

  export type LedgerEntryCountAggregateInputType = {
    id?: true
    escrowId?: true
    type?: true
    amount?: true
    balance?: true
    description?: true
    reference?: true
    createdAt?: true
    _all?: true
  }

  export type LedgerEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LedgerEntry to aggregate.
     */
    where?: LedgerEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LedgerEntries to fetch.
     */
    orderBy?: LedgerEntryOrderByWithRelationInput | LedgerEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LedgerEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LedgerEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LedgerEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LedgerEntries
    **/
    _count?: true | LedgerEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LedgerEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LedgerEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LedgerEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LedgerEntryMaxAggregateInputType
  }

  export type GetLedgerEntryAggregateType<T extends LedgerEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateLedgerEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLedgerEntry[P]>
      : GetScalarType<T[P], AggregateLedgerEntry[P]>
  }




  export type LedgerEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LedgerEntryWhereInput
    orderBy?: LedgerEntryOrderByWithAggregationInput | LedgerEntryOrderByWithAggregationInput[]
    by: LedgerEntryScalarFieldEnum[] | LedgerEntryScalarFieldEnum
    having?: LedgerEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LedgerEntryCountAggregateInputType | true
    _avg?: LedgerEntryAvgAggregateInputType
    _sum?: LedgerEntrySumAggregateInputType
    _min?: LedgerEntryMinAggregateInputType
    _max?: LedgerEntryMaxAggregateInputType
  }

  export type LedgerEntryGroupByOutputType = {
    id: string
    escrowId: string
    type: $Enums.LedgerType
    amount: Decimal
    balance: Decimal
    description: string | null
    reference: string | null
    createdAt: Date
    _count: LedgerEntryCountAggregateOutputType | null
    _avg: LedgerEntryAvgAggregateOutputType | null
    _sum: LedgerEntrySumAggregateOutputType | null
    _min: LedgerEntryMinAggregateOutputType | null
    _max: LedgerEntryMaxAggregateOutputType | null
  }

  type GetLedgerEntryGroupByPayload<T extends LedgerEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LedgerEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LedgerEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LedgerEntryGroupByOutputType[P]>
            : GetScalarType<T[P], LedgerEntryGroupByOutputType[P]>
        }
      >
    >


  export type LedgerEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    escrowId?: boolean
    type?: boolean
    amount?: boolean
    balance?: boolean
    description?: boolean
    reference?: boolean
    createdAt?: boolean
    escrow?: boolean | EscrowAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ledgerEntry"]>

  export type LedgerEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    escrowId?: boolean
    type?: boolean
    amount?: boolean
    balance?: boolean
    description?: boolean
    reference?: boolean
    createdAt?: boolean
    escrow?: boolean | EscrowAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ledgerEntry"]>

  export type LedgerEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    escrowId?: boolean
    type?: boolean
    amount?: boolean
    balance?: boolean
    description?: boolean
    reference?: boolean
    createdAt?: boolean
    escrow?: boolean | EscrowAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ledgerEntry"]>

  export type LedgerEntrySelectScalar = {
    id?: boolean
    escrowId?: boolean
    type?: boolean
    amount?: boolean
    balance?: boolean
    description?: boolean
    reference?: boolean
    createdAt?: boolean
  }

  export type LedgerEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "escrowId" | "type" | "amount" | "balance" | "description" | "reference" | "createdAt", ExtArgs["result"]["ledgerEntry"]>
  export type LedgerEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    escrow?: boolean | EscrowAccountDefaultArgs<ExtArgs>
  }
  export type LedgerEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    escrow?: boolean | EscrowAccountDefaultArgs<ExtArgs>
  }
  export type LedgerEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    escrow?: boolean | EscrowAccountDefaultArgs<ExtArgs>
  }

  export type $LedgerEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LedgerEntry"
    objects: {
      escrow: Prisma.$EscrowAccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      escrowId: string
      type: $Enums.LedgerType
      amount: Prisma.Decimal
      balance: Prisma.Decimal
      description: string | null
      reference: string | null
      createdAt: Date
    }, ExtArgs["result"]["ledgerEntry"]>
    composites: {}
  }

  type LedgerEntryGetPayload<S extends boolean | null | undefined | LedgerEntryDefaultArgs> = $Result.GetResult<Prisma.$LedgerEntryPayload, S>

  type LedgerEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LedgerEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LedgerEntryCountAggregateInputType | true
    }

  export interface LedgerEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LedgerEntry'], meta: { name: 'LedgerEntry' } }
    /**
     * Find zero or one LedgerEntry that matches the filter.
     * @param {LedgerEntryFindUniqueArgs} args - Arguments to find a LedgerEntry
     * @example
     * // Get one LedgerEntry
     * const ledgerEntry = await prisma.ledgerEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LedgerEntryFindUniqueArgs>(args: SelectSubset<T, LedgerEntryFindUniqueArgs<ExtArgs>>): Prisma__LedgerEntryClient<$Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LedgerEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LedgerEntryFindUniqueOrThrowArgs} args - Arguments to find a LedgerEntry
     * @example
     * // Get one LedgerEntry
     * const ledgerEntry = await prisma.ledgerEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LedgerEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, LedgerEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LedgerEntryClient<$Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LedgerEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerEntryFindFirstArgs} args - Arguments to find a LedgerEntry
     * @example
     * // Get one LedgerEntry
     * const ledgerEntry = await prisma.ledgerEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LedgerEntryFindFirstArgs>(args?: SelectSubset<T, LedgerEntryFindFirstArgs<ExtArgs>>): Prisma__LedgerEntryClient<$Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LedgerEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerEntryFindFirstOrThrowArgs} args - Arguments to find a LedgerEntry
     * @example
     * // Get one LedgerEntry
     * const ledgerEntry = await prisma.ledgerEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LedgerEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, LedgerEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__LedgerEntryClient<$Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LedgerEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LedgerEntries
     * const ledgerEntries = await prisma.ledgerEntry.findMany()
     * 
     * // Get first 10 LedgerEntries
     * const ledgerEntries = await prisma.ledgerEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ledgerEntryWithIdOnly = await prisma.ledgerEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LedgerEntryFindManyArgs>(args?: SelectSubset<T, LedgerEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LedgerEntry.
     * @param {LedgerEntryCreateArgs} args - Arguments to create a LedgerEntry.
     * @example
     * // Create one LedgerEntry
     * const LedgerEntry = await prisma.ledgerEntry.create({
     *   data: {
     *     // ... data to create a LedgerEntry
     *   }
     * })
     * 
     */
    create<T extends LedgerEntryCreateArgs>(args: SelectSubset<T, LedgerEntryCreateArgs<ExtArgs>>): Prisma__LedgerEntryClient<$Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LedgerEntries.
     * @param {LedgerEntryCreateManyArgs} args - Arguments to create many LedgerEntries.
     * @example
     * // Create many LedgerEntries
     * const ledgerEntry = await prisma.ledgerEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LedgerEntryCreateManyArgs>(args?: SelectSubset<T, LedgerEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LedgerEntries and returns the data saved in the database.
     * @param {LedgerEntryCreateManyAndReturnArgs} args - Arguments to create many LedgerEntries.
     * @example
     * // Create many LedgerEntries
     * const ledgerEntry = await prisma.ledgerEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LedgerEntries and only return the `id`
     * const ledgerEntryWithIdOnly = await prisma.ledgerEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LedgerEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, LedgerEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LedgerEntry.
     * @param {LedgerEntryDeleteArgs} args - Arguments to delete one LedgerEntry.
     * @example
     * // Delete one LedgerEntry
     * const LedgerEntry = await prisma.ledgerEntry.delete({
     *   where: {
     *     // ... filter to delete one LedgerEntry
     *   }
     * })
     * 
     */
    delete<T extends LedgerEntryDeleteArgs>(args: SelectSubset<T, LedgerEntryDeleteArgs<ExtArgs>>): Prisma__LedgerEntryClient<$Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LedgerEntry.
     * @param {LedgerEntryUpdateArgs} args - Arguments to update one LedgerEntry.
     * @example
     * // Update one LedgerEntry
     * const ledgerEntry = await prisma.ledgerEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LedgerEntryUpdateArgs>(args: SelectSubset<T, LedgerEntryUpdateArgs<ExtArgs>>): Prisma__LedgerEntryClient<$Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LedgerEntries.
     * @param {LedgerEntryDeleteManyArgs} args - Arguments to filter LedgerEntries to delete.
     * @example
     * // Delete a few LedgerEntries
     * const { count } = await prisma.ledgerEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LedgerEntryDeleteManyArgs>(args?: SelectSubset<T, LedgerEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LedgerEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LedgerEntries
     * const ledgerEntry = await prisma.ledgerEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LedgerEntryUpdateManyArgs>(args: SelectSubset<T, LedgerEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LedgerEntries and returns the data updated in the database.
     * @param {LedgerEntryUpdateManyAndReturnArgs} args - Arguments to update many LedgerEntries.
     * @example
     * // Update many LedgerEntries
     * const ledgerEntry = await prisma.ledgerEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LedgerEntries and only return the `id`
     * const ledgerEntryWithIdOnly = await prisma.ledgerEntry.updateManyAndReturn({
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
    updateManyAndReturn<T extends LedgerEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, LedgerEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LedgerEntry.
     * @param {LedgerEntryUpsertArgs} args - Arguments to update or create a LedgerEntry.
     * @example
     * // Update or create a LedgerEntry
     * const ledgerEntry = await prisma.ledgerEntry.upsert({
     *   create: {
     *     // ... data to create a LedgerEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LedgerEntry we want to update
     *   }
     * })
     */
    upsert<T extends LedgerEntryUpsertArgs>(args: SelectSubset<T, LedgerEntryUpsertArgs<ExtArgs>>): Prisma__LedgerEntryClient<$Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LedgerEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerEntryCountArgs} args - Arguments to filter LedgerEntries to count.
     * @example
     * // Count the number of LedgerEntries
     * const count = await prisma.ledgerEntry.count({
     *   where: {
     *     // ... the filter for the LedgerEntries we want to count
     *   }
     * })
    **/
    count<T extends LedgerEntryCountArgs>(
      args?: Subset<T, LedgerEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LedgerEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LedgerEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LedgerEntryAggregateArgs>(args: Subset<T, LedgerEntryAggregateArgs>): Prisma.PrismaPromise<GetLedgerEntryAggregateType<T>>

    /**
     * Group by LedgerEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerEntryGroupByArgs} args - Group by arguments.
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
      T extends LedgerEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LedgerEntryGroupByArgs['orderBy'] }
        : { orderBy?: LedgerEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LedgerEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLedgerEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LedgerEntry model
   */
  readonly fields: LedgerEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LedgerEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LedgerEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    escrow<T extends EscrowAccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EscrowAccountDefaultArgs<ExtArgs>>): Prisma__EscrowAccountClient<$Result.GetResult<Prisma.$EscrowAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LedgerEntry model
   */
  interface LedgerEntryFieldRefs {
    readonly id: FieldRef<"LedgerEntry", 'String'>
    readonly escrowId: FieldRef<"LedgerEntry", 'String'>
    readonly type: FieldRef<"LedgerEntry", 'LedgerType'>
    readonly amount: FieldRef<"LedgerEntry", 'Decimal'>
    readonly balance: FieldRef<"LedgerEntry", 'Decimal'>
    readonly description: FieldRef<"LedgerEntry", 'String'>
    readonly reference: FieldRef<"LedgerEntry", 'String'>
    readonly createdAt: FieldRef<"LedgerEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LedgerEntry findUnique
   */
  export type LedgerEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerEntry
     */
    omit?: LedgerEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryInclude<ExtArgs> | null
    /**
     * Filter, which LedgerEntry to fetch.
     */
    where: LedgerEntryWhereUniqueInput
  }

  /**
   * LedgerEntry findUniqueOrThrow
   */
  export type LedgerEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerEntry
     */
    omit?: LedgerEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryInclude<ExtArgs> | null
    /**
     * Filter, which LedgerEntry to fetch.
     */
    where: LedgerEntryWhereUniqueInput
  }

  /**
   * LedgerEntry findFirst
   */
  export type LedgerEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerEntry
     */
    omit?: LedgerEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryInclude<ExtArgs> | null
    /**
     * Filter, which LedgerEntry to fetch.
     */
    where?: LedgerEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LedgerEntries to fetch.
     */
    orderBy?: LedgerEntryOrderByWithRelationInput | LedgerEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LedgerEntries.
     */
    cursor?: LedgerEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LedgerEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LedgerEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LedgerEntries.
     */
    distinct?: LedgerEntryScalarFieldEnum | LedgerEntryScalarFieldEnum[]
  }

  /**
   * LedgerEntry findFirstOrThrow
   */
  export type LedgerEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerEntry
     */
    omit?: LedgerEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryInclude<ExtArgs> | null
    /**
     * Filter, which LedgerEntry to fetch.
     */
    where?: LedgerEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LedgerEntries to fetch.
     */
    orderBy?: LedgerEntryOrderByWithRelationInput | LedgerEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LedgerEntries.
     */
    cursor?: LedgerEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LedgerEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LedgerEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LedgerEntries.
     */
    distinct?: LedgerEntryScalarFieldEnum | LedgerEntryScalarFieldEnum[]
  }

  /**
   * LedgerEntry findMany
   */
  export type LedgerEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerEntry
     */
    omit?: LedgerEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryInclude<ExtArgs> | null
    /**
     * Filter, which LedgerEntries to fetch.
     */
    where?: LedgerEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LedgerEntries to fetch.
     */
    orderBy?: LedgerEntryOrderByWithRelationInput | LedgerEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LedgerEntries.
     */
    cursor?: LedgerEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LedgerEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LedgerEntries.
     */
    skip?: number
    distinct?: LedgerEntryScalarFieldEnum | LedgerEntryScalarFieldEnum[]
  }

  /**
   * LedgerEntry create
   */
  export type LedgerEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerEntry
     */
    omit?: LedgerEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a LedgerEntry.
     */
    data: XOR<LedgerEntryCreateInput, LedgerEntryUncheckedCreateInput>
  }

  /**
   * LedgerEntry createMany
   */
  export type LedgerEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LedgerEntries.
     */
    data: LedgerEntryCreateManyInput | LedgerEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LedgerEntry createManyAndReturn
   */
  export type LedgerEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerEntry
     */
    omit?: LedgerEntryOmit<ExtArgs> | null
    /**
     * The data used to create many LedgerEntries.
     */
    data: LedgerEntryCreateManyInput | LedgerEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LedgerEntry update
   */
  export type LedgerEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerEntry
     */
    omit?: LedgerEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a LedgerEntry.
     */
    data: XOR<LedgerEntryUpdateInput, LedgerEntryUncheckedUpdateInput>
    /**
     * Choose, which LedgerEntry to update.
     */
    where: LedgerEntryWhereUniqueInput
  }

  /**
   * LedgerEntry updateMany
   */
  export type LedgerEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LedgerEntries.
     */
    data: XOR<LedgerEntryUpdateManyMutationInput, LedgerEntryUncheckedUpdateManyInput>
    /**
     * Filter which LedgerEntries to update
     */
    where?: LedgerEntryWhereInput
    /**
     * Limit how many LedgerEntries to update.
     */
    limit?: number
  }

  /**
   * LedgerEntry updateManyAndReturn
   */
  export type LedgerEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerEntry
     */
    omit?: LedgerEntryOmit<ExtArgs> | null
    /**
     * The data used to update LedgerEntries.
     */
    data: XOR<LedgerEntryUpdateManyMutationInput, LedgerEntryUncheckedUpdateManyInput>
    /**
     * Filter which LedgerEntries to update
     */
    where?: LedgerEntryWhereInput
    /**
     * Limit how many LedgerEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LedgerEntry upsert
   */
  export type LedgerEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerEntry
     */
    omit?: LedgerEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the LedgerEntry to update in case it exists.
     */
    where: LedgerEntryWhereUniqueInput
    /**
     * In case the LedgerEntry found by the `where` argument doesn't exist, create a new LedgerEntry with this data.
     */
    create: XOR<LedgerEntryCreateInput, LedgerEntryUncheckedCreateInput>
    /**
     * In case the LedgerEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LedgerEntryUpdateInput, LedgerEntryUncheckedUpdateInput>
  }

  /**
   * LedgerEntry delete
   */
  export type LedgerEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerEntry
     */
    omit?: LedgerEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryInclude<ExtArgs> | null
    /**
     * Filter which LedgerEntry to delete.
     */
    where: LedgerEntryWhereUniqueInput
  }

  /**
   * LedgerEntry deleteMany
   */
  export type LedgerEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LedgerEntries to delete
     */
    where?: LedgerEntryWhereInput
    /**
     * Limit how many LedgerEntries to delete.
     */
    limit?: number
  }

  /**
   * LedgerEntry without action
   */
  export type LedgerEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerEntry
     */
    omit?: LedgerEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryInclude<ExtArgs> | null
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


  export const PaymentScalarFieldEnum: {
    id: 'id',
    contractId: 'contractId',
    auctionId: 'auctionId',
    payerId: 'payerId',
    payeeId: 'payeeId',
    escrowId: 'escrowId',
    type: 'type',
    status: 'status',
    method: 'method',
    amount: 'amount',
    currency: 'currency',
    fee: 'fee',
    netAmount: 'netAmount',
    description: 'description',
    reference: 'reference',
    externalRef: 'externalRef',
    paidAt: 'paidAt',
    failedAt: 'failedAt',
    failureReason: 'failureReason',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const EscrowAccountScalarFieldEnum: {
    id: 'id',
    contractId: 'contractId',
    auctionId: 'auctionId',
    buyerId: 'buyerId',
    sellerId: 'sellerId',
    status: 'status',
    totalAmount: 'totalAmount',
    fundedAmount: 'fundedAmount',
    releasedAmount: 'releasedAmount',
    currency: 'currency',
    fundedAt: 'fundedAt',
    releasedAt: 'releasedAt',
    disputedAt: 'disputedAt',
    closedAt: 'closedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EscrowAccountScalarFieldEnum = (typeof EscrowAccountScalarFieldEnum)[keyof typeof EscrowAccountScalarFieldEnum]


  export const ReleaseConditionScalarFieldEnum: {
    id: 'id',
    escrowId: 'escrowId',
    name: 'name',
    description: 'description',
    isMet: 'isMet',
    metAt: 'metAt',
    metBy: 'metBy',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt'
  };

  export type ReleaseConditionScalarFieldEnum = (typeof ReleaseConditionScalarFieldEnum)[keyof typeof ReleaseConditionScalarFieldEnum]


  export const LedgerEntryScalarFieldEnum: {
    id: 'id',
    escrowId: 'escrowId',
    type: 'type',
    amount: 'amount',
    balance: 'balance',
    description: 'description',
    reference: 'reference',
    createdAt: 'createdAt'
  };

  export type LedgerEntryScalarFieldEnum = (typeof LedgerEntryScalarFieldEnum)[keyof typeof LedgerEntryScalarFieldEnum]


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
   * Reference to a field of type 'PaymentType'
   */
  export type EnumPaymentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentType'>
    


  /**
   * Reference to a field of type 'PaymentType[]'
   */
  export type ListEnumPaymentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentType[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    


  /**
   * Reference to a field of type 'PaymentMethod[]'
   */
  export type ListEnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod[]'>
    


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
   * Reference to a field of type 'EscrowStatus'
   */
  export type EnumEscrowStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EscrowStatus'>
    


  /**
   * Reference to a field of type 'EscrowStatus[]'
   */
  export type ListEnumEscrowStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EscrowStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'LedgerType'
   */
  export type EnumLedgerTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LedgerType'>
    


  /**
   * Reference to a field of type 'LedgerType[]'
   */
  export type ListEnumLedgerTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LedgerType[]'>
    


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


  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    contractId?: StringNullableFilter<"Payment"> | string | null
    auctionId?: StringNullableFilter<"Payment"> | string | null
    payerId?: StringFilter<"Payment"> | string
    payeeId?: StringFilter<"Payment"> | string
    escrowId?: StringNullableFilter<"Payment"> | string | null
    type?: EnumPaymentTypeFilter<"Payment"> | $Enums.PaymentType
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    method?: EnumPaymentMethodNullableFilter<"Payment"> | $Enums.PaymentMethod | null
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Payment"> | string
    fee?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    netAmount?: DecimalNullableFilter<"Payment"> | Decimal | DecimalJsLike | number | string | null
    description?: StringNullableFilter<"Payment"> | string | null
    reference?: StringNullableFilter<"Payment"> | string | null
    externalRef?: StringNullableFilter<"Payment"> | string | null
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    failedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    failureReason?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    escrow?: XOR<EscrowAccountNullableScalarRelationFilter, EscrowAccountWhereInput> | null
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    contractId?: SortOrderInput | SortOrder
    auctionId?: SortOrderInput | SortOrder
    payerId?: SortOrder
    payeeId?: SortOrder
    escrowId?: SortOrderInput | SortOrder
    type?: SortOrder
    status?: SortOrder
    method?: SortOrderInput | SortOrder
    amount?: SortOrder
    currency?: SortOrder
    fee?: SortOrder
    netAmount?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    reference?: SortOrderInput | SortOrder
    externalRef?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    failedAt?: SortOrderInput | SortOrder
    failureReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    escrow?: EscrowAccountOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    reference?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    contractId?: StringNullableFilter<"Payment"> | string | null
    auctionId?: StringNullableFilter<"Payment"> | string | null
    payerId?: StringFilter<"Payment"> | string
    payeeId?: StringFilter<"Payment"> | string
    escrowId?: StringNullableFilter<"Payment"> | string | null
    type?: EnumPaymentTypeFilter<"Payment"> | $Enums.PaymentType
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    method?: EnumPaymentMethodNullableFilter<"Payment"> | $Enums.PaymentMethod | null
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Payment"> | string
    fee?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    netAmount?: DecimalNullableFilter<"Payment"> | Decimal | DecimalJsLike | number | string | null
    description?: StringNullableFilter<"Payment"> | string | null
    externalRef?: StringNullableFilter<"Payment"> | string | null
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    failedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    failureReason?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    escrow?: XOR<EscrowAccountNullableScalarRelationFilter, EscrowAccountWhereInput> | null
  }, "id" | "reference">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    contractId?: SortOrderInput | SortOrder
    auctionId?: SortOrderInput | SortOrder
    payerId?: SortOrder
    payeeId?: SortOrder
    escrowId?: SortOrderInput | SortOrder
    type?: SortOrder
    status?: SortOrder
    method?: SortOrderInput | SortOrder
    amount?: SortOrder
    currency?: SortOrder
    fee?: SortOrder
    netAmount?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    reference?: SortOrderInput | SortOrder
    externalRef?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    failedAt?: SortOrderInput | SortOrder
    failureReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    contractId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    auctionId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    payerId?: StringWithAggregatesFilter<"Payment"> | string
    payeeId?: StringWithAggregatesFilter<"Payment"> | string
    escrowId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    type?: EnumPaymentTypeWithAggregatesFilter<"Payment"> | $Enums.PaymentType
    status?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    method?: EnumPaymentMethodNullableWithAggregatesFilter<"Payment"> | $Enums.PaymentMethod | null
    amount?: DecimalWithAggregatesFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    currency?: StringWithAggregatesFilter<"Payment"> | string
    fee?: DecimalWithAggregatesFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    netAmount?: DecimalNullableWithAggregatesFilter<"Payment"> | Decimal | DecimalJsLike | number | string | null
    description?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    reference?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    externalRef?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    paidAt?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    failedAt?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    failureReason?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type EscrowAccountWhereInput = {
    AND?: EscrowAccountWhereInput | EscrowAccountWhereInput[]
    OR?: EscrowAccountWhereInput[]
    NOT?: EscrowAccountWhereInput | EscrowAccountWhereInput[]
    id?: StringFilter<"EscrowAccount"> | string
    contractId?: StringNullableFilter<"EscrowAccount"> | string | null
    auctionId?: StringNullableFilter<"EscrowAccount"> | string | null
    buyerId?: StringFilter<"EscrowAccount"> | string
    sellerId?: StringFilter<"EscrowAccount"> | string
    status?: EnumEscrowStatusFilter<"EscrowAccount"> | $Enums.EscrowStatus
    totalAmount?: DecimalFilter<"EscrowAccount"> | Decimal | DecimalJsLike | number | string
    fundedAmount?: DecimalFilter<"EscrowAccount"> | Decimal | DecimalJsLike | number | string
    releasedAmount?: DecimalFilter<"EscrowAccount"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"EscrowAccount"> | string
    fundedAt?: DateTimeNullableFilter<"EscrowAccount"> | Date | string | null
    releasedAt?: DateTimeNullableFilter<"EscrowAccount"> | Date | string | null
    disputedAt?: DateTimeNullableFilter<"EscrowAccount"> | Date | string | null
    closedAt?: DateTimeNullableFilter<"EscrowAccount"> | Date | string | null
    createdAt?: DateTimeFilter<"EscrowAccount"> | Date | string
    updatedAt?: DateTimeFilter<"EscrowAccount"> | Date | string
    payments?: PaymentListRelationFilter
    conditions?: ReleaseConditionListRelationFilter
    ledgerEntries?: LedgerEntryListRelationFilter
  }

  export type EscrowAccountOrderByWithRelationInput = {
    id?: SortOrder
    contractId?: SortOrderInput | SortOrder
    auctionId?: SortOrderInput | SortOrder
    buyerId?: SortOrder
    sellerId?: SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    fundedAmount?: SortOrder
    releasedAmount?: SortOrder
    currency?: SortOrder
    fundedAt?: SortOrderInput | SortOrder
    releasedAt?: SortOrderInput | SortOrder
    disputedAt?: SortOrderInput | SortOrder
    closedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    payments?: PaymentOrderByRelationAggregateInput
    conditions?: ReleaseConditionOrderByRelationAggregateInput
    ledgerEntries?: LedgerEntryOrderByRelationAggregateInput
  }

  export type EscrowAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EscrowAccountWhereInput | EscrowAccountWhereInput[]
    OR?: EscrowAccountWhereInput[]
    NOT?: EscrowAccountWhereInput | EscrowAccountWhereInput[]
    contractId?: StringNullableFilter<"EscrowAccount"> | string | null
    auctionId?: StringNullableFilter<"EscrowAccount"> | string | null
    buyerId?: StringFilter<"EscrowAccount"> | string
    sellerId?: StringFilter<"EscrowAccount"> | string
    status?: EnumEscrowStatusFilter<"EscrowAccount"> | $Enums.EscrowStatus
    totalAmount?: DecimalFilter<"EscrowAccount"> | Decimal | DecimalJsLike | number | string
    fundedAmount?: DecimalFilter<"EscrowAccount"> | Decimal | DecimalJsLike | number | string
    releasedAmount?: DecimalFilter<"EscrowAccount"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"EscrowAccount"> | string
    fundedAt?: DateTimeNullableFilter<"EscrowAccount"> | Date | string | null
    releasedAt?: DateTimeNullableFilter<"EscrowAccount"> | Date | string | null
    disputedAt?: DateTimeNullableFilter<"EscrowAccount"> | Date | string | null
    closedAt?: DateTimeNullableFilter<"EscrowAccount"> | Date | string | null
    createdAt?: DateTimeFilter<"EscrowAccount"> | Date | string
    updatedAt?: DateTimeFilter<"EscrowAccount"> | Date | string
    payments?: PaymentListRelationFilter
    conditions?: ReleaseConditionListRelationFilter
    ledgerEntries?: LedgerEntryListRelationFilter
  }, "id">

  export type EscrowAccountOrderByWithAggregationInput = {
    id?: SortOrder
    contractId?: SortOrderInput | SortOrder
    auctionId?: SortOrderInput | SortOrder
    buyerId?: SortOrder
    sellerId?: SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    fundedAmount?: SortOrder
    releasedAmount?: SortOrder
    currency?: SortOrder
    fundedAt?: SortOrderInput | SortOrder
    releasedAt?: SortOrderInput | SortOrder
    disputedAt?: SortOrderInput | SortOrder
    closedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EscrowAccountCountOrderByAggregateInput
    _avg?: EscrowAccountAvgOrderByAggregateInput
    _max?: EscrowAccountMaxOrderByAggregateInput
    _min?: EscrowAccountMinOrderByAggregateInput
    _sum?: EscrowAccountSumOrderByAggregateInput
  }

  export type EscrowAccountScalarWhereWithAggregatesInput = {
    AND?: EscrowAccountScalarWhereWithAggregatesInput | EscrowAccountScalarWhereWithAggregatesInput[]
    OR?: EscrowAccountScalarWhereWithAggregatesInput[]
    NOT?: EscrowAccountScalarWhereWithAggregatesInput | EscrowAccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EscrowAccount"> | string
    contractId?: StringNullableWithAggregatesFilter<"EscrowAccount"> | string | null
    auctionId?: StringNullableWithAggregatesFilter<"EscrowAccount"> | string | null
    buyerId?: StringWithAggregatesFilter<"EscrowAccount"> | string
    sellerId?: StringWithAggregatesFilter<"EscrowAccount"> | string
    status?: EnumEscrowStatusWithAggregatesFilter<"EscrowAccount"> | $Enums.EscrowStatus
    totalAmount?: DecimalWithAggregatesFilter<"EscrowAccount"> | Decimal | DecimalJsLike | number | string
    fundedAmount?: DecimalWithAggregatesFilter<"EscrowAccount"> | Decimal | DecimalJsLike | number | string
    releasedAmount?: DecimalWithAggregatesFilter<"EscrowAccount"> | Decimal | DecimalJsLike | number | string
    currency?: StringWithAggregatesFilter<"EscrowAccount"> | string
    fundedAt?: DateTimeNullableWithAggregatesFilter<"EscrowAccount"> | Date | string | null
    releasedAt?: DateTimeNullableWithAggregatesFilter<"EscrowAccount"> | Date | string | null
    disputedAt?: DateTimeNullableWithAggregatesFilter<"EscrowAccount"> | Date | string | null
    closedAt?: DateTimeNullableWithAggregatesFilter<"EscrowAccount"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"EscrowAccount"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EscrowAccount"> | Date | string
  }

  export type ReleaseConditionWhereInput = {
    AND?: ReleaseConditionWhereInput | ReleaseConditionWhereInput[]
    OR?: ReleaseConditionWhereInput[]
    NOT?: ReleaseConditionWhereInput | ReleaseConditionWhereInput[]
    id?: StringFilter<"ReleaseCondition"> | string
    escrowId?: StringFilter<"ReleaseCondition"> | string
    name?: StringFilter<"ReleaseCondition"> | string
    description?: StringNullableFilter<"ReleaseCondition"> | string | null
    isMet?: BoolFilter<"ReleaseCondition"> | boolean
    metAt?: DateTimeNullableFilter<"ReleaseCondition"> | Date | string | null
    metBy?: StringNullableFilter<"ReleaseCondition"> | string | null
    sortOrder?: IntFilter<"ReleaseCondition"> | number
    createdAt?: DateTimeFilter<"ReleaseCondition"> | Date | string
    escrow?: XOR<EscrowAccountScalarRelationFilter, EscrowAccountWhereInput>
  }

  export type ReleaseConditionOrderByWithRelationInput = {
    id?: SortOrder
    escrowId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isMet?: SortOrder
    metAt?: SortOrderInput | SortOrder
    metBy?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    escrow?: EscrowAccountOrderByWithRelationInput
  }

  export type ReleaseConditionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReleaseConditionWhereInput | ReleaseConditionWhereInput[]
    OR?: ReleaseConditionWhereInput[]
    NOT?: ReleaseConditionWhereInput | ReleaseConditionWhereInput[]
    escrowId?: StringFilter<"ReleaseCondition"> | string
    name?: StringFilter<"ReleaseCondition"> | string
    description?: StringNullableFilter<"ReleaseCondition"> | string | null
    isMet?: BoolFilter<"ReleaseCondition"> | boolean
    metAt?: DateTimeNullableFilter<"ReleaseCondition"> | Date | string | null
    metBy?: StringNullableFilter<"ReleaseCondition"> | string | null
    sortOrder?: IntFilter<"ReleaseCondition"> | number
    createdAt?: DateTimeFilter<"ReleaseCondition"> | Date | string
    escrow?: XOR<EscrowAccountScalarRelationFilter, EscrowAccountWhereInput>
  }, "id">

  export type ReleaseConditionOrderByWithAggregationInput = {
    id?: SortOrder
    escrowId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isMet?: SortOrder
    metAt?: SortOrderInput | SortOrder
    metBy?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    _count?: ReleaseConditionCountOrderByAggregateInput
    _avg?: ReleaseConditionAvgOrderByAggregateInput
    _max?: ReleaseConditionMaxOrderByAggregateInput
    _min?: ReleaseConditionMinOrderByAggregateInput
    _sum?: ReleaseConditionSumOrderByAggregateInput
  }

  export type ReleaseConditionScalarWhereWithAggregatesInput = {
    AND?: ReleaseConditionScalarWhereWithAggregatesInput | ReleaseConditionScalarWhereWithAggregatesInput[]
    OR?: ReleaseConditionScalarWhereWithAggregatesInput[]
    NOT?: ReleaseConditionScalarWhereWithAggregatesInput | ReleaseConditionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReleaseCondition"> | string
    escrowId?: StringWithAggregatesFilter<"ReleaseCondition"> | string
    name?: StringWithAggregatesFilter<"ReleaseCondition"> | string
    description?: StringNullableWithAggregatesFilter<"ReleaseCondition"> | string | null
    isMet?: BoolWithAggregatesFilter<"ReleaseCondition"> | boolean
    metAt?: DateTimeNullableWithAggregatesFilter<"ReleaseCondition"> | Date | string | null
    metBy?: StringNullableWithAggregatesFilter<"ReleaseCondition"> | string | null
    sortOrder?: IntWithAggregatesFilter<"ReleaseCondition"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ReleaseCondition"> | Date | string
  }

  export type LedgerEntryWhereInput = {
    AND?: LedgerEntryWhereInput | LedgerEntryWhereInput[]
    OR?: LedgerEntryWhereInput[]
    NOT?: LedgerEntryWhereInput | LedgerEntryWhereInput[]
    id?: StringFilter<"LedgerEntry"> | string
    escrowId?: StringFilter<"LedgerEntry"> | string
    type?: EnumLedgerTypeFilter<"LedgerEntry"> | $Enums.LedgerType
    amount?: DecimalFilter<"LedgerEntry"> | Decimal | DecimalJsLike | number | string
    balance?: DecimalFilter<"LedgerEntry"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"LedgerEntry"> | string | null
    reference?: StringNullableFilter<"LedgerEntry"> | string | null
    createdAt?: DateTimeFilter<"LedgerEntry"> | Date | string
    escrow?: XOR<EscrowAccountScalarRelationFilter, EscrowAccountWhereInput>
  }

  export type LedgerEntryOrderByWithRelationInput = {
    id?: SortOrder
    escrowId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    balance?: SortOrder
    description?: SortOrderInput | SortOrder
    reference?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    escrow?: EscrowAccountOrderByWithRelationInput
  }

  export type LedgerEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LedgerEntryWhereInput | LedgerEntryWhereInput[]
    OR?: LedgerEntryWhereInput[]
    NOT?: LedgerEntryWhereInput | LedgerEntryWhereInput[]
    escrowId?: StringFilter<"LedgerEntry"> | string
    type?: EnumLedgerTypeFilter<"LedgerEntry"> | $Enums.LedgerType
    amount?: DecimalFilter<"LedgerEntry"> | Decimal | DecimalJsLike | number | string
    balance?: DecimalFilter<"LedgerEntry"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"LedgerEntry"> | string | null
    reference?: StringNullableFilter<"LedgerEntry"> | string | null
    createdAt?: DateTimeFilter<"LedgerEntry"> | Date | string
    escrow?: XOR<EscrowAccountScalarRelationFilter, EscrowAccountWhereInput>
  }, "id">

  export type LedgerEntryOrderByWithAggregationInput = {
    id?: SortOrder
    escrowId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    balance?: SortOrder
    description?: SortOrderInput | SortOrder
    reference?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: LedgerEntryCountOrderByAggregateInput
    _avg?: LedgerEntryAvgOrderByAggregateInput
    _max?: LedgerEntryMaxOrderByAggregateInput
    _min?: LedgerEntryMinOrderByAggregateInput
    _sum?: LedgerEntrySumOrderByAggregateInput
  }

  export type LedgerEntryScalarWhereWithAggregatesInput = {
    AND?: LedgerEntryScalarWhereWithAggregatesInput | LedgerEntryScalarWhereWithAggregatesInput[]
    OR?: LedgerEntryScalarWhereWithAggregatesInput[]
    NOT?: LedgerEntryScalarWhereWithAggregatesInput | LedgerEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LedgerEntry"> | string
    escrowId?: StringWithAggregatesFilter<"LedgerEntry"> | string
    type?: EnumLedgerTypeWithAggregatesFilter<"LedgerEntry"> | $Enums.LedgerType
    amount?: DecimalWithAggregatesFilter<"LedgerEntry"> | Decimal | DecimalJsLike | number | string
    balance?: DecimalWithAggregatesFilter<"LedgerEntry"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableWithAggregatesFilter<"LedgerEntry"> | string | null
    reference?: StringNullableWithAggregatesFilter<"LedgerEntry"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"LedgerEntry"> | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    contractId?: string | null
    auctionId?: string | null
    payerId: string
    payeeId: string
    type: $Enums.PaymentType
    status?: $Enums.PaymentStatus
    method?: $Enums.PaymentMethod | null
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    fee?: Decimal | DecimalJsLike | number | string
    netAmount?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    reference?: string | null
    externalRef?: string | null
    paidAt?: Date | string | null
    failedAt?: Date | string | null
    failureReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    escrow?: EscrowAccountCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    contractId?: string | null
    auctionId?: string | null
    payerId: string
    payeeId: string
    escrowId?: string | null
    type: $Enums.PaymentType
    status?: $Enums.PaymentStatus
    method?: $Enums.PaymentMethod | null
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    fee?: Decimal | DecimalJsLike | number | string
    netAmount?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    reference?: string | null
    externalRef?: string | null
    paidAt?: Date | string | null
    failedAt?: Date | string | null
    failureReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractId?: NullableStringFieldUpdateOperationsInput | string | null
    auctionId?: NullableStringFieldUpdateOperationsInput | string | null
    payerId?: StringFieldUpdateOperationsInput | string
    payeeId?: StringFieldUpdateOperationsInput | string
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    method?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    externalRef?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    escrow?: EscrowAccountUpdateOneWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractId?: NullableStringFieldUpdateOperationsInput | string | null
    auctionId?: NullableStringFieldUpdateOperationsInput | string | null
    payerId?: StringFieldUpdateOperationsInput | string
    payeeId?: StringFieldUpdateOperationsInput | string
    escrowId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    method?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    externalRef?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    contractId?: string | null
    auctionId?: string | null
    payerId: string
    payeeId: string
    escrowId?: string | null
    type: $Enums.PaymentType
    status?: $Enums.PaymentStatus
    method?: $Enums.PaymentMethod | null
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    fee?: Decimal | DecimalJsLike | number | string
    netAmount?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    reference?: string | null
    externalRef?: string | null
    paidAt?: Date | string | null
    failedAt?: Date | string | null
    failureReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractId?: NullableStringFieldUpdateOperationsInput | string | null
    auctionId?: NullableStringFieldUpdateOperationsInput | string | null
    payerId?: StringFieldUpdateOperationsInput | string
    payeeId?: StringFieldUpdateOperationsInput | string
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    method?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    externalRef?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractId?: NullableStringFieldUpdateOperationsInput | string | null
    auctionId?: NullableStringFieldUpdateOperationsInput | string | null
    payerId?: StringFieldUpdateOperationsInput | string
    payeeId?: StringFieldUpdateOperationsInput | string
    escrowId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    method?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    externalRef?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EscrowAccountCreateInput = {
    id?: string
    contractId?: string | null
    auctionId?: string | null
    buyerId: string
    sellerId: string
    status?: $Enums.EscrowStatus
    totalAmount: Decimal | DecimalJsLike | number | string
    fundedAmount?: Decimal | DecimalJsLike | number | string
    releasedAmount?: Decimal | DecimalJsLike | number | string
    currency?: string
    fundedAt?: Date | string | null
    releasedAt?: Date | string | null
    disputedAt?: Date | string | null
    closedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentCreateNestedManyWithoutEscrowInput
    conditions?: ReleaseConditionCreateNestedManyWithoutEscrowInput
    ledgerEntries?: LedgerEntryCreateNestedManyWithoutEscrowInput
  }

  export type EscrowAccountUncheckedCreateInput = {
    id?: string
    contractId?: string | null
    auctionId?: string | null
    buyerId: string
    sellerId: string
    status?: $Enums.EscrowStatus
    totalAmount: Decimal | DecimalJsLike | number | string
    fundedAmount?: Decimal | DecimalJsLike | number | string
    releasedAmount?: Decimal | DecimalJsLike | number | string
    currency?: string
    fundedAt?: Date | string | null
    releasedAt?: Date | string | null
    disputedAt?: Date | string | null
    closedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutEscrowInput
    conditions?: ReleaseConditionUncheckedCreateNestedManyWithoutEscrowInput
    ledgerEntries?: LedgerEntryUncheckedCreateNestedManyWithoutEscrowInput
  }

  export type EscrowAccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractId?: NullableStringFieldUpdateOperationsInput | string | null
    auctionId?: NullableStringFieldUpdateOperationsInput | string | null
    buyerId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    status?: EnumEscrowStatusFieldUpdateOperationsInput | $Enums.EscrowStatus
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fundedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    releasedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    fundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disputedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUpdateManyWithoutEscrowNestedInput
    conditions?: ReleaseConditionUpdateManyWithoutEscrowNestedInput
    ledgerEntries?: LedgerEntryUpdateManyWithoutEscrowNestedInput
  }

  export type EscrowAccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractId?: NullableStringFieldUpdateOperationsInput | string | null
    auctionId?: NullableStringFieldUpdateOperationsInput | string | null
    buyerId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    status?: EnumEscrowStatusFieldUpdateOperationsInput | $Enums.EscrowStatus
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fundedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    releasedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    fundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disputedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutEscrowNestedInput
    conditions?: ReleaseConditionUncheckedUpdateManyWithoutEscrowNestedInput
    ledgerEntries?: LedgerEntryUncheckedUpdateManyWithoutEscrowNestedInput
  }

  export type EscrowAccountCreateManyInput = {
    id?: string
    contractId?: string | null
    auctionId?: string | null
    buyerId: string
    sellerId: string
    status?: $Enums.EscrowStatus
    totalAmount: Decimal | DecimalJsLike | number | string
    fundedAmount?: Decimal | DecimalJsLike | number | string
    releasedAmount?: Decimal | DecimalJsLike | number | string
    currency?: string
    fundedAt?: Date | string | null
    releasedAt?: Date | string | null
    disputedAt?: Date | string | null
    closedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EscrowAccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractId?: NullableStringFieldUpdateOperationsInput | string | null
    auctionId?: NullableStringFieldUpdateOperationsInput | string | null
    buyerId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    status?: EnumEscrowStatusFieldUpdateOperationsInput | $Enums.EscrowStatus
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fundedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    releasedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    fundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disputedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EscrowAccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractId?: NullableStringFieldUpdateOperationsInput | string | null
    auctionId?: NullableStringFieldUpdateOperationsInput | string | null
    buyerId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    status?: EnumEscrowStatusFieldUpdateOperationsInput | $Enums.EscrowStatus
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fundedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    releasedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    fundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disputedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReleaseConditionCreateInput = {
    id?: string
    name: string
    description?: string | null
    isMet?: boolean
    metAt?: Date | string | null
    metBy?: string | null
    sortOrder?: number
    createdAt?: Date | string
    escrow: EscrowAccountCreateNestedOneWithoutConditionsInput
  }

  export type ReleaseConditionUncheckedCreateInput = {
    id?: string
    escrowId: string
    name: string
    description?: string | null
    isMet?: boolean
    metAt?: Date | string | null
    metBy?: string | null
    sortOrder?: number
    createdAt?: Date | string
  }

  export type ReleaseConditionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isMet?: BoolFieldUpdateOperationsInput | boolean
    metAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metBy?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    escrow?: EscrowAccountUpdateOneRequiredWithoutConditionsNestedInput
  }

  export type ReleaseConditionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    escrowId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isMet?: BoolFieldUpdateOperationsInput | boolean
    metAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metBy?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReleaseConditionCreateManyInput = {
    id?: string
    escrowId: string
    name: string
    description?: string | null
    isMet?: boolean
    metAt?: Date | string | null
    metBy?: string | null
    sortOrder?: number
    createdAt?: Date | string
  }

  export type ReleaseConditionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isMet?: BoolFieldUpdateOperationsInput | boolean
    metAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metBy?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReleaseConditionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    escrowId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isMet?: BoolFieldUpdateOperationsInput | boolean
    metAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metBy?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LedgerEntryCreateInput = {
    id?: string
    type: $Enums.LedgerType
    amount: Decimal | DecimalJsLike | number | string
    balance: Decimal | DecimalJsLike | number | string
    description?: string | null
    reference?: string | null
    createdAt?: Date | string
    escrow: EscrowAccountCreateNestedOneWithoutLedgerEntriesInput
  }

  export type LedgerEntryUncheckedCreateInput = {
    id?: string
    escrowId: string
    type: $Enums.LedgerType
    amount: Decimal | DecimalJsLike | number | string
    balance: Decimal | DecimalJsLike | number | string
    description?: string | null
    reference?: string | null
    createdAt?: Date | string
  }

  export type LedgerEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    escrow?: EscrowAccountUpdateOneRequiredWithoutLedgerEntriesNestedInput
  }

  export type LedgerEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    escrowId?: StringFieldUpdateOperationsInput | string
    type?: EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LedgerEntryCreateManyInput = {
    id?: string
    escrowId: string
    type: $Enums.LedgerType
    amount: Decimal | DecimalJsLike | number | string
    balance: Decimal | DecimalJsLike | number | string
    description?: string | null
    reference?: string | null
    createdAt?: Date | string
  }

  export type LedgerEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LedgerEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    escrowId?: StringFieldUpdateOperationsInput | string
    type?: EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type EnumPaymentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentTypeFilter<$PrismaModel> | $Enums.PaymentType
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type EnumPaymentMethodNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPaymentMethodNullableFilter<$PrismaModel> | $Enums.PaymentMethod | null
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

  export type EscrowAccountNullableScalarRelationFilter = {
    is?: EscrowAccountWhereInput | null
    isNot?: EscrowAccountWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    auctionId?: SortOrder
    payerId?: SortOrder
    payeeId?: SortOrder
    escrowId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    method?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    fee?: SortOrder
    netAmount?: SortOrder
    description?: SortOrder
    reference?: SortOrder
    externalRef?: SortOrder
    paidAt?: SortOrder
    failedAt?: SortOrder
    failureReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
    fee?: SortOrder
    netAmount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    auctionId?: SortOrder
    payerId?: SortOrder
    payeeId?: SortOrder
    escrowId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    method?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    fee?: SortOrder
    netAmount?: SortOrder
    description?: SortOrder
    reference?: SortOrder
    externalRef?: SortOrder
    paidAt?: SortOrder
    failedAt?: SortOrder
    failureReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    auctionId?: SortOrder
    payerId?: SortOrder
    payeeId?: SortOrder
    escrowId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    method?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    fee?: SortOrder
    netAmount?: SortOrder
    description?: SortOrder
    reference?: SortOrder
    externalRef?: SortOrder
    paidAt?: SortOrder
    failedAt?: SortOrder
    failureReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
    fee?: SortOrder
    netAmount?: SortOrder
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

  export type EnumPaymentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentTypeWithAggregatesFilter<$PrismaModel> | $Enums.PaymentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentTypeFilter<$PrismaModel>
    _max?: NestedEnumPaymentTypeFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type EnumPaymentMethodNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPaymentMethodNullableWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodNullableFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodNullableFilter<$PrismaModel>
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

  export type EnumEscrowStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EscrowStatus | EnumEscrowStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EscrowStatus[] | ListEnumEscrowStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EscrowStatus[] | ListEnumEscrowStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEscrowStatusFilter<$PrismaModel> | $Enums.EscrowStatus
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type ReleaseConditionListRelationFilter = {
    every?: ReleaseConditionWhereInput
    some?: ReleaseConditionWhereInput
    none?: ReleaseConditionWhereInput
  }

  export type LedgerEntryListRelationFilter = {
    every?: LedgerEntryWhereInput
    some?: LedgerEntryWhereInput
    none?: LedgerEntryWhereInput
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReleaseConditionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LedgerEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EscrowAccountCountOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    auctionId?: SortOrder
    buyerId?: SortOrder
    sellerId?: SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    fundedAmount?: SortOrder
    releasedAmount?: SortOrder
    currency?: SortOrder
    fundedAt?: SortOrder
    releasedAt?: SortOrder
    disputedAt?: SortOrder
    closedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EscrowAccountAvgOrderByAggregateInput = {
    totalAmount?: SortOrder
    fundedAmount?: SortOrder
    releasedAmount?: SortOrder
  }

  export type EscrowAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    auctionId?: SortOrder
    buyerId?: SortOrder
    sellerId?: SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    fundedAmount?: SortOrder
    releasedAmount?: SortOrder
    currency?: SortOrder
    fundedAt?: SortOrder
    releasedAt?: SortOrder
    disputedAt?: SortOrder
    closedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EscrowAccountMinOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    auctionId?: SortOrder
    buyerId?: SortOrder
    sellerId?: SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    fundedAmount?: SortOrder
    releasedAmount?: SortOrder
    currency?: SortOrder
    fundedAt?: SortOrder
    releasedAt?: SortOrder
    disputedAt?: SortOrder
    closedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EscrowAccountSumOrderByAggregateInput = {
    totalAmount?: SortOrder
    fundedAmount?: SortOrder
    releasedAmount?: SortOrder
  }

  export type EnumEscrowStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EscrowStatus | EnumEscrowStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EscrowStatus[] | ListEnumEscrowStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EscrowStatus[] | ListEnumEscrowStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEscrowStatusWithAggregatesFilter<$PrismaModel> | $Enums.EscrowStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEscrowStatusFilter<$PrismaModel>
    _max?: NestedEnumEscrowStatusFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type EscrowAccountScalarRelationFilter = {
    is?: EscrowAccountWhereInput
    isNot?: EscrowAccountWhereInput
  }

  export type ReleaseConditionCountOrderByAggregateInput = {
    id?: SortOrder
    escrowId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isMet?: SortOrder
    metAt?: SortOrder
    metBy?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type ReleaseConditionAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type ReleaseConditionMaxOrderByAggregateInput = {
    id?: SortOrder
    escrowId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isMet?: SortOrder
    metAt?: SortOrder
    metBy?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type ReleaseConditionMinOrderByAggregateInput = {
    id?: SortOrder
    escrowId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isMet?: SortOrder
    metAt?: SortOrder
    metBy?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type ReleaseConditionSumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumLedgerTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerType | EnumLedgerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LedgerType[] | ListEnumLedgerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LedgerType[] | ListEnumLedgerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLedgerTypeFilter<$PrismaModel> | $Enums.LedgerType
  }

  export type LedgerEntryCountOrderByAggregateInput = {
    id?: SortOrder
    escrowId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    balance?: SortOrder
    description?: SortOrder
    reference?: SortOrder
    createdAt?: SortOrder
  }

  export type LedgerEntryAvgOrderByAggregateInput = {
    amount?: SortOrder
    balance?: SortOrder
  }

  export type LedgerEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    escrowId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    balance?: SortOrder
    description?: SortOrder
    reference?: SortOrder
    createdAt?: SortOrder
  }

  export type LedgerEntryMinOrderByAggregateInput = {
    id?: SortOrder
    escrowId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    balance?: SortOrder
    description?: SortOrder
    reference?: SortOrder
    createdAt?: SortOrder
  }

  export type LedgerEntrySumOrderByAggregateInput = {
    amount?: SortOrder
    balance?: SortOrder
  }

  export type EnumLedgerTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerType | EnumLedgerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LedgerType[] | ListEnumLedgerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LedgerType[] | ListEnumLedgerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLedgerTypeWithAggregatesFilter<$PrismaModel> | $Enums.LedgerType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLedgerTypeFilter<$PrismaModel>
    _max?: NestedEnumLedgerTypeFilter<$PrismaModel>
  }

  export type EscrowAccountCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<EscrowAccountCreateWithoutPaymentsInput, EscrowAccountUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: EscrowAccountCreateOrConnectWithoutPaymentsInput
    connect?: EscrowAccountWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumPaymentTypeFieldUpdateOperationsInput = {
    set?: $Enums.PaymentType
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type NullableEnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod | null
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

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EscrowAccountUpdateOneWithoutPaymentsNestedInput = {
    create?: XOR<EscrowAccountCreateWithoutPaymentsInput, EscrowAccountUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: EscrowAccountCreateOrConnectWithoutPaymentsInput
    upsert?: EscrowAccountUpsertWithoutPaymentsInput
    disconnect?: EscrowAccountWhereInput | boolean
    delete?: EscrowAccountWhereInput | boolean
    connect?: EscrowAccountWhereUniqueInput
    update?: XOR<XOR<EscrowAccountUpdateToOneWithWhereWithoutPaymentsInput, EscrowAccountUpdateWithoutPaymentsInput>, EscrowAccountUncheckedUpdateWithoutPaymentsInput>
  }

  export type PaymentCreateNestedManyWithoutEscrowInput = {
    create?: XOR<PaymentCreateWithoutEscrowInput, PaymentUncheckedCreateWithoutEscrowInput> | PaymentCreateWithoutEscrowInput[] | PaymentUncheckedCreateWithoutEscrowInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutEscrowInput | PaymentCreateOrConnectWithoutEscrowInput[]
    createMany?: PaymentCreateManyEscrowInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type ReleaseConditionCreateNestedManyWithoutEscrowInput = {
    create?: XOR<ReleaseConditionCreateWithoutEscrowInput, ReleaseConditionUncheckedCreateWithoutEscrowInput> | ReleaseConditionCreateWithoutEscrowInput[] | ReleaseConditionUncheckedCreateWithoutEscrowInput[]
    connectOrCreate?: ReleaseConditionCreateOrConnectWithoutEscrowInput | ReleaseConditionCreateOrConnectWithoutEscrowInput[]
    createMany?: ReleaseConditionCreateManyEscrowInputEnvelope
    connect?: ReleaseConditionWhereUniqueInput | ReleaseConditionWhereUniqueInput[]
  }

  export type LedgerEntryCreateNestedManyWithoutEscrowInput = {
    create?: XOR<LedgerEntryCreateWithoutEscrowInput, LedgerEntryUncheckedCreateWithoutEscrowInput> | LedgerEntryCreateWithoutEscrowInput[] | LedgerEntryUncheckedCreateWithoutEscrowInput[]
    connectOrCreate?: LedgerEntryCreateOrConnectWithoutEscrowInput | LedgerEntryCreateOrConnectWithoutEscrowInput[]
    createMany?: LedgerEntryCreateManyEscrowInputEnvelope
    connect?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutEscrowInput = {
    create?: XOR<PaymentCreateWithoutEscrowInput, PaymentUncheckedCreateWithoutEscrowInput> | PaymentCreateWithoutEscrowInput[] | PaymentUncheckedCreateWithoutEscrowInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutEscrowInput | PaymentCreateOrConnectWithoutEscrowInput[]
    createMany?: PaymentCreateManyEscrowInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type ReleaseConditionUncheckedCreateNestedManyWithoutEscrowInput = {
    create?: XOR<ReleaseConditionCreateWithoutEscrowInput, ReleaseConditionUncheckedCreateWithoutEscrowInput> | ReleaseConditionCreateWithoutEscrowInput[] | ReleaseConditionUncheckedCreateWithoutEscrowInput[]
    connectOrCreate?: ReleaseConditionCreateOrConnectWithoutEscrowInput | ReleaseConditionCreateOrConnectWithoutEscrowInput[]
    createMany?: ReleaseConditionCreateManyEscrowInputEnvelope
    connect?: ReleaseConditionWhereUniqueInput | ReleaseConditionWhereUniqueInput[]
  }

  export type LedgerEntryUncheckedCreateNestedManyWithoutEscrowInput = {
    create?: XOR<LedgerEntryCreateWithoutEscrowInput, LedgerEntryUncheckedCreateWithoutEscrowInput> | LedgerEntryCreateWithoutEscrowInput[] | LedgerEntryUncheckedCreateWithoutEscrowInput[]
    connectOrCreate?: LedgerEntryCreateOrConnectWithoutEscrowInput | LedgerEntryCreateOrConnectWithoutEscrowInput[]
    createMany?: LedgerEntryCreateManyEscrowInputEnvelope
    connect?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
  }

  export type EnumEscrowStatusFieldUpdateOperationsInput = {
    set?: $Enums.EscrowStatus
  }

  export type PaymentUpdateManyWithoutEscrowNestedInput = {
    create?: XOR<PaymentCreateWithoutEscrowInput, PaymentUncheckedCreateWithoutEscrowInput> | PaymentCreateWithoutEscrowInput[] | PaymentUncheckedCreateWithoutEscrowInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutEscrowInput | PaymentCreateOrConnectWithoutEscrowInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutEscrowInput | PaymentUpsertWithWhereUniqueWithoutEscrowInput[]
    createMany?: PaymentCreateManyEscrowInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutEscrowInput | PaymentUpdateWithWhereUniqueWithoutEscrowInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutEscrowInput | PaymentUpdateManyWithWhereWithoutEscrowInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type ReleaseConditionUpdateManyWithoutEscrowNestedInput = {
    create?: XOR<ReleaseConditionCreateWithoutEscrowInput, ReleaseConditionUncheckedCreateWithoutEscrowInput> | ReleaseConditionCreateWithoutEscrowInput[] | ReleaseConditionUncheckedCreateWithoutEscrowInput[]
    connectOrCreate?: ReleaseConditionCreateOrConnectWithoutEscrowInput | ReleaseConditionCreateOrConnectWithoutEscrowInput[]
    upsert?: ReleaseConditionUpsertWithWhereUniqueWithoutEscrowInput | ReleaseConditionUpsertWithWhereUniqueWithoutEscrowInput[]
    createMany?: ReleaseConditionCreateManyEscrowInputEnvelope
    set?: ReleaseConditionWhereUniqueInput | ReleaseConditionWhereUniqueInput[]
    disconnect?: ReleaseConditionWhereUniqueInput | ReleaseConditionWhereUniqueInput[]
    delete?: ReleaseConditionWhereUniqueInput | ReleaseConditionWhereUniqueInput[]
    connect?: ReleaseConditionWhereUniqueInput | ReleaseConditionWhereUniqueInput[]
    update?: ReleaseConditionUpdateWithWhereUniqueWithoutEscrowInput | ReleaseConditionUpdateWithWhereUniqueWithoutEscrowInput[]
    updateMany?: ReleaseConditionUpdateManyWithWhereWithoutEscrowInput | ReleaseConditionUpdateManyWithWhereWithoutEscrowInput[]
    deleteMany?: ReleaseConditionScalarWhereInput | ReleaseConditionScalarWhereInput[]
  }

  export type LedgerEntryUpdateManyWithoutEscrowNestedInput = {
    create?: XOR<LedgerEntryCreateWithoutEscrowInput, LedgerEntryUncheckedCreateWithoutEscrowInput> | LedgerEntryCreateWithoutEscrowInput[] | LedgerEntryUncheckedCreateWithoutEscrowInput[]
    connectOrCreate?: LedgerEntryCreateOrConnectWithoutEscrowInput | LedgerEntryCreateOrConnectWithoutEscrowInput[]
    upsert?: LedgerEntryUpsertWithWhereUniqueWithoutEscrowInput | LedgerEntryUpsertWithWhereUniqueWithoutEscrowInput[]
    createMany?: LedgerEntryCreateManyEscrowInputEnvelope
    set?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
    disconnect?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
    delete?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
    connect?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
    update?: LedgerEntryUpdateWithWhereUniqueWithoutEscrowInput | LedgerEntryUpdateWithWhereUniqueWithoutEscrowInput[]
    updateMany?: LedgerEntryUpdateManyWithWhereWithoutEscrowInput | LedgerEntryUpdateManyWithWhereWithoutEscrowInput[]
    deleteMany?: LedgerEntryScalarWhereInput | LedgerEntryScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutEscrowNestedInput = {
    create?: XOR<PaymentCreateWithoutEscrowInput, PaymentUncheckedCreateWithoutEscrowInput> | PaymentCreateWithoutEscrowInput[] | PaymentUncheckedCreateWithoutEscrowInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutEscrowInput | PaymentCreateOrConnectWithoutEscrowInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutEscrowInput | PaymentUpsertWithWhereUniqueWithoutEscrowInput[]
    createMany?: PaymentCreateManyEscrowInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutEscrowInput | PaymentUpdateWithWhereUniqueWithoutEscrowInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutEscrowInput | PaymentUpdateManyWithWhereWithoutEscrowInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type ReleaseConditionUncheckedUpdateManyWithoutEscrowNestedInput = {
    create?: XOR<ReleaseConditionCreateWithoutEscrowInput, ReleaseConditionUncheckedCreateWithoutEscrowInput> | ReleaseConditionCreateWithoutEscrowInput[] | ReleaseConditionUncheckedCreateWithoutEscrowInput[]
    connectOrCreate?: ReleaseConditionCreateOrConnectWithoutEscrowInput | ReleaseConditionCreateOrConnectWithoutEscrowInput[]
    upsert?: ReleaseConditionUpsertWithWhereUniqueWithoutEscrowInput | ReleaseConditionUpsertWithWhereUniqueWithoutEscrowInput[]
    createMany?: ReleaseConditionCreateManyEscrowInputEnvelope
    set?: ReleaseConditionWhereUniqueInput | ReleaseConditionWhereUniqueInput[]
    disconnect?: ReleaseConditionWhereUniqueInput | ReleaseConditionWhereUniqueInput[]
    delete?: ReleaseConditionWhereUniqueInput | ReleaseConditionWhereUniqueInput[]
    connect?: ReleaseConditionWhereUniqueInput | ReleaseConditionWhereUniqueInput[]
    update?: ReleaseConditionUpdateWithWhereUniqueWithoutEscrowInput | ReleaseConditionUpdateWithWhereUniqueWithoutEscrowInput[]
    updateMany?: ReleaseConditionUpdateManyWithWhereWithoutEscrowInput | ReleaseConditionUpdateManyWithWhereWithoutEscrowInput[]
    deleteMany?: ReleaseConditionScalarWhereInput | ReleaseConditionScalarWhereInput[]
  }

  export type LedgerEntryUncheckedUpdateManyWithoutEscrowNestedInput = {
    create?: XOR<LedgerEntryCreateWithoutEscrowInput, LedgerEntryUncheckedCreateWithoutEscrowInput> | LedgerEntryCreateWithoutEscrowInput[] | LedgerEntryUncheckedCreateWithoutEscrowInput[]
    connectOrCreate?: LedgerEntryCreateOrConnectWithoutEscrowInput | LedgerEntryCreateOrConnectWithoutEscrowInput[]
    upsert?: LedgerEntryUpsertWithWhereUniqueWithoutEscrowInput | LedgerEntryUpsertWithWhereUniqueWithoutEscrowInput[]
    createMany?: LedgerEntryCreateManyEscrowInputEnvelope
    set?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
    disconnect?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
    delete?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
    connect?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
    update?: LedgerEntryUpdateWithWhereUniqueWithoutEscrowInput | LedgerEntryUpdateWithWhereUniqueWithoutEscrowInput[]
    updateMany?: LedgerEntryUpdateManyWithWhereWithoutEscrowInput | LedgerEntryUpdateManyWithWhereWithoutEscrowInput[]
    deleteMany?: LedgerEntryScalarWhereInput | LedgerEntryScalarWhereInput[]
  }

  export type EscrowAccountCreateNestedOneWithoutConditionsInput = {
    create?: XOR<EscrowAccountCreateWithoutConditionsInput, EscrowAccountUncheckedCreateWithoutConditionsInput>
    connectOrCreate?: EscrowAccountCreateOrConnectWithoutConditionsInput
    connect?: EscrowAccountWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EscrowAccountUpdateOneRequiredWithoutConditionsNestedInput = {
    create?: XOR<EscrowAccountCreateWithoutConditionsInput, EscrowAccountUncheckedCreateWithoutConditionsInput>
    connectOrCreate?: EscrowAccountCreateOrConnectWithoutConditionsInput
    upsert?: EscrowAccountUpsertWithoutConditionsInput
    connect?: EscrowAccountWhereUniqueInput
    update?: XOR<XOR<EscrowAccountUpdateToOneWithWhereWithoutConditionsInput, EscrowAccountUpdateWithoutConditionsInput>, EscrowAccountUncheckedUpdateWithoutConditionsInput>
  }

  export type EscrowAccountCreateNestedOneWithoutLedgerEntriesInput = {
    create?: XOR<EscrowAccountCreateWithoutLedgerEntriesInput, EscrowAccountUncheckedCreateWithoutLedgerEntriesInput>
    connectOrCreate?: EscrowAccountCreateOrConnectWithoutLedgerEntriesInput
    connect?: EscrowAccountWhereUniqueInput
  }

  export type EnumLedgerTypeFieldUpdateOperationsInput = {
    set?: $Enums.LedgerType
  }

  export type EscrowAccountUpdateOneRequiredWithoutLedgerEntriesNestedInput = {
    create?: XOR<EscrowAccountCreateWithoutLedgerEntriesInput, EscrowAccountUncheckedCreateWithoutLedgerEntriesInput>
    connectOrCreate?: EscrowAccountCreateOrConnectWithoutLedgerEntriesInput
    upsert?: EscrowAccountUpsertWithoutLedgerEntriesInput
    connect?: EscrowAccountWhereUniqueInput
    update?: XOR<XOR<EscrowAccountUpdateToOneWithWhereWithoutLedgerEntriesInput, EscrowAccountUpdateWithoutLedgerEntriesInput>, EscrowAccountUncheckedUpdateWithoutLedgerEntriesInput>
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

  export type NestedEnumPaymentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentTypeFilter<$PrismaModel> | $Enums.PaymentType
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentMethodNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPaymentMethodNullableFilter<$PrismaModel> | $Enums.PaymentMethod | null
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

  export type NestedEnumPaymentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentTypeWithAggregatesFilter<$PrismaModel> | $Enums.PaymentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentTypeFilter<$PrismaModel>
    _max?: NestedEnumPaymentTypeFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentMethodNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPaymentMethodNullableWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodNullableFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodNullableFilter<$PrismaModel>
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

  export type NestedEnumEscrowStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EscrowStatus | EnumEscrowStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EscrowStatus[] | ListEnumEscrowStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EscrowStatus[] | ListEnumEscrowStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEscrowStatusFilter<$PrismaModel> | $Enums.EscrowStatus
  }

  export type NestedEnumEscrowStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EscrowStatus | EnumEscrowStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EscrowStatus[] | ListEnumEscrowStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EscrowStatus[] | ListEnumEscrowStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEscrowStatusWithAggregatesFilter<$PrismaModel> | $Enums.EscrowStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEscrowStatusFilter<$PrismaModel>
    _max?: NestedEnumEscrowStatusFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumLedgerTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerType | EnumLedgerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LedgerType[] | ListEnumLedgerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LedgerType[] | ListEnumLedgerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLedgerTypeFilter<$PrismaModel> | $Enums.LedgerType
  }

  export type NestedEnumLedgerTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerType | EnumLedgerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LedgerType[] | ListEnumLedgerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LedgerType[] | ListEnumLedgerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLedgerTypeWithAggregatesFilter<$PrismaModel> | $Enums.LedgerType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLedgerTypeFilter<$PrismaModel>
    _max?: NestedEnumLedgerTypeFilter<$PrismaModel>
  }

  export type EscrowAccountCreateWithoutPaymentsInput = {
    id?: string
    contractId?: string | null
    auctionId?: string | null
    buyerId: string
    sellerId: string
    status?: $Enums.EscrowStatus
    totalAmount: Decimal | DecimalJsLike | number | string
    fundedAmount?: Decimal | DecimalJsLike | number | string
    releasedAmount?: Decimal | DecimalJsLike | number | string
    currency?: string
    fundedAt?: Date | string | null
    releasedAt?: Date | string | null
    disputedAt?: Date | string | null
    closedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    conditions?: ReleaseConditionCreateNestedManyWithoutEscrowInput
    ledgerEntries?: LedgerEntryCreateNestedManyWithoutEscrowInput
  }

  export type EscrowAccountUncheckedCreateWithoutPaymentsInput = {
    id?: string
    contractId?: string | null
    auctionId?: string | null
    buyerId: string
    sellerId: string
    status?: $Enums.EscrowStatus
    totalAmount: Decimal | DecimalJsLike | number | string
    fundedAmount?: Decimal | DecimalJsLike | number | string
    releasedAmount?: Decimal | DecimalJsLike | number | string
    currency?: string
    fundedAt?: Date | string | null
    releasedAt?: Date | string | null
    disputedAt?: Date | string | null
    closedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    conditions?: ReleaseConditionUncheckedCreateNestedManyWithoutEscrowInput
    ledgerEntries?: LedgerEntryUncheckedCreateNestedManyWithoutEscrowInput
  }

  export type EscrowAccountCreateOrConnectWithoutPaymentsInput = {
    where: EscrowAccountWhereUniqueInput
    create: XOR<EscrowAccountCreateWithoutPaymentsInput, EscrowAccountUncheckedCreateWithoutPaymentsInput>
  }

  export type EscrowAccountUpsertWithoutPaymentsInput = {
    update: XOR<EscrowAccountUpdateWithoutPaymentsInput, EscrowAccountUncheckedUpdateWithoutPaymentsInput>
    create: XOR<EscrowAccountCreateWithoutPaymentsInput, EscrowAccountUncheckedCreateWithoutPaymentsInput>
    where?: EscrowAccountWhereInput
  }

  export type EscrowAccountUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: EscrowAccountWhereInput
    data: XOR<EscrowAccountUpdateWithoutPaymentsInput, EscrowAccountUncheckedUpdateWithoutPaymentsInput>
  }

  export type EscrowAccountUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractId?: NullableStringFieldUpdateOperationsInput | string | null
    auctionId?: NullableStringFieldUpdateOperationsInput | string | null
    buyerId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    status?: EnumEscrowStatusFieldUpdateOperationsInput | $Enums.EscrowStatus
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fundedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    releasedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    fundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disputedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conditions?: ReleaseConditionUpdateManyWithoutEscrowNestedInput
    ledgerEntries?: LedgerEntryUpdateManyWithoutEscrowNestedInput
  }

  export type EscrowAccountUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractId?: NullableStringFieldUpdateOperationsInput | string | null
    auctionId?: NullableStringFieldUpdateOperationsInput | string | null
    buyerId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    status?: EnumEscrowStatusFieldUpdateOperationsInput | $Enums.EscrowStatus
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fundedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    releasedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    fundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disputedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conditions?: ReleaseConditionUncheckedUpdateManyWithoutEscrowNestedInput
    ledgerEntries?: LedgerEntryUncheckedUpdateManyWithoutEscrowNestedInput
  }

  export type PaymentCreateWithoutEscrowInput = {
    id?: string
    contractId?: string | null
    auctionId?: string | null
    payerId: string
    payeeId: string
    type: $Enums.PaymentType
    status?: $Enums.PaymentStatus
    method?: $Enums.PaymentMethod | null
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    fee?: Decimal | DecimalJsLike | number | string
    netAmount?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    reference?: string | null
    externalRef?: string | null
    paidAt?: Date | string | null
    failedAt?: Date | string | null
    failureReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUncheckedCreateWithoutEscrowInput = {
    id?: string
    contractId?: string | null
    auctionId?: string | null
    payerId: string
    payeeId: string
    type: $Enums.PaymentType
    status?: $Enums.PaymentStatus
    method?: $Enums.PaymentMethod | null
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    fee?: Decimal | DecimalJsLike | number | string
    netAmount?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    reference?: string | null
    externalRef?: string | null
    paidAt?: Date | string | null
    failedAt?: Date | string | null
    failureReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutEscrowInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutEscrowInput, PaymentUncheckedCreateWithoutEscrowInput>
  }

  export type PaymentCreateManyEscrowInputEnvelope = {
    data: PaymentCreateManyEscrowInput | PaymentCreateManyEscrowInput[]
    skipDuplicates?: boolean
  }

  export type ReleaseConditionCreateWithoutEscrowInput = {
    id?: string
    name: string
    description?: string | null
    isMet?: boolean
    metAt?: Date | string | null
    metBy?: string | null
    sortOrder?: number
    createdAt?: Date | string
  }

  export type ReleaseConditionUncheckedCreateWithoutEscrowInput = {
    id?: string
    name: string
    description?: string | null
    isMet?: boolean
    metAt?: Date | string | null
    metBy?: string | null
    sortOrder?: number
    createdAt?: Date | string
  }

  export type ReleaseConditionCreateOrConnectWithoutEscrowInput = {
    where: ReleaseConditionWhereUniqueInput
    create: XOR<ReleaseConditionCreateWithoutEscrowInput, ReleaseConditionUncheckedCreateWithoutEscrowInput>
  }

  export type ReleaseConditionCreateManyEscrowInputEnvelope = {
    data: ReleaseConditionCreateManyEscrowInput | ReleaseConditionCreateManyEscrowInput[]
    skipDuplicates?: boolean
  }

  export type LedgerEntryCreateWithoutEscrowInput = {
    id?: string
    type: $Enums.LedgerType
    amount: Decimal | DecimalJsLike | number | string
    balance: Decimal | DecimalJsLike | number | string
    description?: string | null
    reference?: string | null
    createdAt?: Date | string
  }

  export type LedgerEntryUncheckedCreateWithoutEscrowInput = {
    id?: string
    type: $Enums.LedgerType
    amount: Decimal | DecimalJsLike | number | string
    balance: Decimal | DecimalJsLike | number | string
    description?: string | null
    reference?: string | null
    createdAt?: Date | string
  }

  export type LedgerEntryCreateOrConnectWithoutEscrowInput = {
    where: LedgerEntryWhereUniqueInput
    create: XOR<LedgerEntryCreateWithoutEscrowInput, LedgerEntryUncheckedCreateWithoutEscrowInput>
  }

  export type LedgerEntryCreateManyEscrowInputEnvelope = {
    data: LedgerEntryCreateManyEscrowInput | LedgerEntryCreateManyEscrowInput[]
    skipDuplicates?: boolean
  }

  export type PaymentUpsertWithWhereUniqueWithoutEscrowInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutEscrowInput, PaymentUncheckedUpdateWithoutEscrowInput>
    create: XOR<PaymentCreateWithoutEscrowInput, PaymentUncheckedCreateWithoutEscrowInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutEscrowInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutEscrowInput, PaymentUncheckedUpdateWithoutEscrowInput>
  }

  export type PaymentUpdateManyWithWhereWithoutEscrowInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutEscrowInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    contractId?: StringNullableFilter<"Payment"> | string | null
    auctionId?: StringNullableFilter<"Payment"> | string | null
    payerId?: StringFilter<"Payment"> | string
    payeeId?: StringFilter<"Payment"> | string
    escrowId?: StringNullableFilter<"Payment"> | string | null
    type?: EnumPaymentTypeFilter<"Payment"> | $Enums.PaymentType
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    method?: EnumPaymentMethodNullableFilter<"Payment"> | $Enums.PaymentMethod | null
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Payment"> | string
    fee?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    netAmount?: DecimalNullableFilter<"Payment"> | Decimal | DecimalJsLike | number | string | null
    description?: StringNullableFilter<"Payment"> | string | null
    reference?: StringNullableFilter<"Payment"> | string | null
    externalRef?: StringNullableFilter<"Payment"> | string | null
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    failedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    failureReason?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type ReleaseConditionUpsertWithWhereUniqueWithoutEscrowInput = {
    where: ReleaseConditionWhereUniqueInput
    update: XOR<ReleaseConditionUpdateWithoutEscrowInput, ReleaseConditionUncheckedUpdateWithoutEscrowInput>
    create: XOR<ReleaseConditionCreateWithoutEscrowInput, ReleaseConditionUncheckedCreateWithoutEscrowInput>
  }

  export type ReleaseConditionUpdateWithWhereUniqueWithoutEscrowInput = {
    where: ReleaseConditionWhereUniqueInput
    data: XOR<ReleaseConditionUpdateWithoutEscrowInput, ReleaseConditionUncheckedUpdateWithoutEscrowInput>
  }

  export type ReleaseConditionUpdateManyWithWhereWithoutEscrowInput = {
    where: ReleaseConditionScalarWhereInput
    data: XOR<ReleaseConditionUpdateManyMutationInput, ReleaseConditionUncheckedUpdateManyWithoutEscrowInput>
  }

  export type ReleaseConditionScalarWhereInput = {
    AND?: ReleaseConditionScalarWhereInput | ReleaseConditionScalarWhereInput[]
    OR?: ReleaseConditionScalarWhereInput[]
    NOT?: ReleaseConditionScalarWhereInput | ReleaseConditionScalarWhereInput[]
    id?: StringFilter<"ReleaseCondition"> | string
    escrowId?: StringFilter<"ReleaseCondition"> | string
    name?: StringFilter<"ReleaseCondition"> | string
    description?: StringNullableFilter<"ReleaseCondition"> | string | null
    isMet?: BoolFilter<"ReleaseCondition"> | boolean
    metAt?: DateTimeNullableFilter<"ReleaseCondition"> | Date | string | null
    metBy?: StringNullableFilter<"ReleaseCondition"> | string | null
    sortOrder?: IntFilter<"ReleaseCondition"> | number
    createdAt?: DateTimeFilter<"ReleaseCondition"> | Date | string
  }

  export type LedgerEntryUpsertWithWhereUniqueWithoutEscrowInput = {
    where: LedgerEntryWhereUniqueInput
    update: XOR<LedgerEntryUpdateWithoutEscrowInput, LedgerEntryUncheckedUpdateWithoutEscrowInput>
    create: XOR<LedgerEntryCreateWithoutEscrowInput, LedgerEntryUncheckedCreateWithoutEscrowInput>
  }

  export type LedgerEntryUpdateWithWhereUniqueWithoutEscrowInput = {
    where: LedgerEntryWhereUniqueInput
    data: XOR<LedgerEntryUpdateWithoutEscrowInput, LedgerEntryUncheckedUpdateWithoutEscrowInput>
  }

  export type LedgerEntryUpdateManyWithWhereWithoutEscrowInput = {
    where: LedgerEntryScalarWhereInput
    data: XOR<LedgerEntryUpdateManyMutationInput, LedgerEntryUncheckedUpdateManyWithoutEscrowInput>
  }

  export type LedgerEntryScalarWhereInput = {
    AND?: LedgerEntryScalarWhereInput | LedgerEntryScalarWhereInput[]
    OR?: LedgerEntryScalarWhereInput[]
    NOT?: LedgerEntryScalarWhereInput | LedgerEntryScalarWhereInput[]
    id?: StringFilter<"LedgerEntry"> | string
    escrowId?: StringFilter<"LedgerEntry"> | string
    type?: EnumLedgerTypeFilter<"LedgerEntry"> | $Enums.LedgerType
    amount?: DecimalFilter<"LedgerEntry"> | Decimal | DecimalJsLike | number | string
    balance?: DecimalFilter<"LedgerEntry"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"LedgerEntry"> | string | null
    reference?: StringNullableFilter<"LedgerEntry"> | string | null
    createdAt?: DateTimeFilter<"LedgerEntry"> | Date | string
  }

  export type EscrowAccountCreateWithoutConditionsInput = {
    id?: string
    contractId?: string | null
    auctionId?: string | null
    buyerId: string
    sellerId: string
    status?: $Enums.EscrowStatus
    totalAmount: Decimal | DecimalJsLike | number | string
    fundedAmount?: Decimal | DecimalJsLike | number | string
    releasedAmount?: Decimal | DecimalJsLike | number | string
    currency?: string
    fundedAt?: Date | string | null
    releasedAt?: Date | string | null
    disputedAt?: Date | string | null
    closedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentCreateNestedManyWithoutEscrowInput
    ledgerEntries?: LedgerEntryCreateNestedManyWithoutEscrowInput
  }

  export type EscrowAccountUncheckedCreateWithoutConditionsInput = {
    id?: string
    contractId?: string | null
    auctionId?: string | null
    buyerId: string
    sellerId: string
    status?: $Enums.EscrowStatus
    totalAmount: Decimal | DecimalJsLike | number | string
    fundedAmount?: Decimal | DecimalJsLike | number | string
    releasedAmount?: Decimal | DecimalJsLike | number | string
    currency?: string
    fundedAt?: Date | string | null
    releasedAt?: Date | string | null
    disputedAt?: Date | string | null
    closedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutEscrowInput
    ledgerEntries?: LedgerEntryUncheckedCreateNestedManyWithoutEscrowInput
  }

  export type EscrowAccountCreateOrConnectWithoutConditionsInput = {
    where: EscrowAccountWhereUniqueInput
    create: XOR<EscrowAccountCreateWithoutConditionsInput, EscrowAccountUncheckedCreateWithoutConditionsInput>
  }

  export type EscrowAccountUpsertWithoutConditionsInput = {
    update: XOR<EscrowAccountUpdateWithoutConditionsInput, EscrowAccountUncheckedUpdateWithoutConditionsInput>
    create: XOR<EscrowAccountCreateWithoutConditionsInput, EscrowAccountUncheckedCreateWithoutConditionsInput>
    where?: EscrowAccountWhereInput
  }

  export type EscrowAccountUpdateToOneWithWhereWithoutConditionsInput = {
    where?: EscrowAccountWhereInput
    data: XOR<EscrowAccountUpdateWithoutConditionsInput, EscrowAccountUncheckedUpdateWithoutConditionsInput>
  }

  export type EscrowAccountUpdateWithoutConditionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractId?: NullableStringFieldUpdateOperationsInput | string | null
    auctionId?: NullableStringFieldUpdateOperationsInput | string | null
    buyerId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    status?: EnumEscrowStatusFieldUpdateOperationsInput | $Enums.EscrowStatus
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fundedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    releasedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    fundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disputedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUpdateManyWithoutEscrowNestedInput
    ledgerEntries?: LedgerEntryUpdateManyWithoutEscrowNestedInput
  }

  export type EscrowAccountUncheckedUpdateWithoutConditionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractId?: NullableStringFieldUpdateOperationsInput | string | null
    auctionId?: NullableStringFieldUpdateOperationsInput | string | null
    buyerId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    status?: EnumEscrowStatusFieldUpdateOperationsInput | $Enums.EscrowStatus
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fundedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    releasedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    fundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disputedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutEscrowNestedInput
    ledgerEntries?: LedgerEntryUncheckedUpdateManyWithoutEscrowNestedInput
  }

  export type EscrowAccountCreateWithoutLedgerEntriesInput = {
    id?: string
    contractId?: string | null
    auctionId?: string | null
    buyerId: string
    sellerId: string
    status?: $Enums.EscrowStatus
    totalAmount: Decimal | DecimalJsLike | number | string
    fundedAmount?: Decimal | DecimalJsLike | number | string
    releasedAmount?: Decimal | DecimalJsLike | number | string
    currency?: string
    fundedAt?: Date | string | null
    releasedAt?: Date | string | null
    disputedAt?: Date | string | null
    closedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentCreateNestedManyWithoutEscrowInput
    conditions?: ReleaseConditionCreateNestedManyWithoutEscrowInput
  }

  export type EscrowAccountUncheckedCreateWithoutLedgerEntriesInput = {
    id?: string
    contractId?: string | null
    auctionId?: string | null
    buyerId: string
    sellerId: string
    status?: $Enums.EscrowStatus
    totalAmount: Decimal | DecimalJsLike | number | string
    fundedAmount?: Decimal | DecimalJsLike | number | string
    releasedAmount?: Decimal | DecimalJsLike | number | string
    currency?: string
    fundedAt?: Date | string | null
    releasedAt?: Date | string | null
    disputedAt?: Date | string | null
    closedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutEscrowInput
    conditions?: ReleaseConditionUncheckedCreateNestedManyWithoutEscrowInput
  }

  export type EscrowAccountCreateOrConnectWithoutLedgerEntriesInput = {
    where: EscrowAccountWhereUniqueInput
    create: XOR<EscrowAccountCreateWithoutLedgerEntriesInput, EscrowAccountUncheckedCreateWithoutLedgerEntriesInput>
  }

  export type EscrowAccountUpsertWithoutLedgerEntriesInput = {
    update: XOR<EscrowAccountUpdateWithoutLedgerEntriesInput, EscrowAccountUncheckedUpdateWithoutLedgerEntriesInput>
    create: XOR<EscrowAccountCreateWithoutLedgerEntriesInput, EscrowAccountUncheckedCreateWithoutLedgerEntriesInput>
    where?: EscrowAccountWhereInput
  }

  export type EscrowAccountUpdateToOneWithWhereWithoutLedgerEntriesInput = {
    where?: EscrowAccountWhereInput
    data: XOR<EscrowAccountUpdateWithoutLedgerEntriesInput, EscrowAccountUncheckedUpdateWithoutLedgerEntriesInput>
  }

  export type EscrowAccountUpdateWithoutLedgerEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractId?: NullableStringFieldUpdateOperationsInput | string | null
    auctionId?: NullableStringFieldUpdateOperationsInput | string | null
    buyerId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    status?: EnumEscrowStatusFieldUpdateOperationsInput | $Enums.EscrowStatus
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fundedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    releasedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    fundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disputedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUpdateManyWithoutEscrowNestedInput
    conditions?: ReleaseConditionUpdateManyWithoutEscrowNestedInput
  }

  export type EscrowAccountUncheckedUpdateWithoutLedgerEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractId?: NullableStringFieldUpdateOperationsInput | string | null
    auctionId?: NullableStringFieldUpdateOperationsInput | string | null
    buyerId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    status?: EnumEscrowStatusFieldUpdateOperationsInput | $Enums.EscrowStatus
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fundedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    releasedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    fundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disputedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutEscrowNestedInput
    conditions?: ReleaseConditionUncheckedUpdateManyWithoutEscrowNestedInput
  }

  export type PaymentCreateManyEscrowInput = {
    id?: string
    contractId?: string | null
    auctionId?: string | null
    payerId: string
    payeeId: string
    type: $Enums.PaymentType
    status?: $Enums.PaymentStatus
    method?: $Enums.PaymentMethod | null
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    fee?: Decimal | DecimalJsLike | number | string
    netAmount?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    reference?: string | null
    externalRef?: string | null
    paidAt?: Date | string | null
    failedAt?: Date | string | null
    failureReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReleaseConditionCreateManyEscrowInput = {
    id?: string
    name: string
    description?: string | null
    isMet?: boolean
    metAt?: Date | string | null
    metBy?: string | null
    sortOrder?: number
    createdAt?: Date | string
  }

  export type LedgerEntryCreateManyEscrowInput = {
    id?: string
    type: $Enums.LedgerType
    amount: Decimal | DecimalJsLike | number | string
    balance: Decimal | DecimalJsLike | number | string
    description?: string | null
    reference?: string | null
    createdAt?: Date | string
  }

  export type PaymentUpdateWithoutEscrowInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractId?: NullableStringFieldUpdateOperationsInput | string | null
    auctionId?: NullableStringFieldUpdateOperationsInput | string | null
    payerId?: StringFieldUpdateOperationsInput | string
    payeeId?: StringFieldUpdateOperationsInput | string
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    method?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    externalRef?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateWithoutEscrowInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractId?: NullableStringFieldUpdateOperationsInput | string | null
    auctionId?: NullableStringFieldUpdateOperationsInput | string | null
    payerId?: StringFieldUpdateOperationsInput | string
    payeeId?: StringFieldUpdateOperationsInput | string
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    method?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    externalRef?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutEscrowInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractId?: NullableStringFieldUpdateOperationsInput | string | null
    auctionId?: NullableStringFieldUpdateOperationsInput | string | null
    payerId?: StringFieldUpdateOperationsInput | string
    payeeId?: StringFieldUpdateOperationsInput | string
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    method?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    externalRef?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReleaseConditionUpdateWithoutEscrowInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isMet?: BoolFieldUpdateOperationsInput | boolean
    metAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metBy?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReleaseConditionUncheckedUpdateWithoutEscrowInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isMet?: BoolFieldUpdateOperationsInput | boolean
    metAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metBy?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReleaseConditionUncheckedUpdateManyWithoutEscrowInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isMet?: BoolFieldUpdateOperationsInput | boolean
    metAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metBy?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LedgerEntryUpdateWithoutEscrowInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LedgerEntryUncheckedUpdateWithoutEscrowInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LedgerEntryUncheckedUpdateManyWithoutEscrowInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
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