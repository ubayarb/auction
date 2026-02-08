
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
 * Model Property
 * 
 */
export type Property = $Result.DefaultSelection<Prisma.$PropertyPayload>
/**
 * Model PropertyMedia
 * 
 */
export type PropertyMedia = $Result.DefaultSelection<Prisma.$PropertyMediaPayload>
/**
 * Model PropertyPriceHistory
 * 
 */
export type PropertyPriceHistory = $Result.DefaultSelection<Prisma.$PropertyPriceHistoryPayload>
/**
 * Model PropertyAmenity
 * 
 */
export type PropertyAmenity = $Result.DefaultSelection<Prisma.$PropertyAmenityPayload>
/**
 * Model Favorite
 * 
 */
export type Favorite = $Result.DefaultSelection<Prisma.$FavoritePayload>
/**
 * Model Inquiry
 * 
 */
export type Inquiry = $Result.DefaultSelection<Prisma.$InquiryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PropertyType: {
  APARTMENT: 'APARTMENT',
  HOUSE: 'HOUSE',
  LAND: 'LAND',
  OFFICE: 'OFFICE',
  COMMERCIAL: 'COMMERCIAL',
  WAREHOUSE: 'WAREHOUSE',
  GARAGE: 'GARAGE',
  GERS_DISTRICT: 'GERS_DISTRICT',
  OTHER: 'OTHER'
};

export type PropertyType = (typeof PropertyType)[keyof typeof PropertyType]


export const TransactionType: {
  SALE: 'SALE',
  RENT: 'RENT',
  DAILY_RENT: 'DAILY_RENT',
  AUCTION: 'AUCTION',
  LEASE: 'LEASE'
};

export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType]


export const PropertyStatus: {
  DRAFT: 'DRAFT',
  PENDING_REVIEW: 'PENDING_REVIEW',
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  SOLD: 'SOLD',
  RENTED: 'RENTED',
  EXPIRED: 'EXPIRED',
  REJECTED: 'REJECTED',
  ARCHIVED: 'ARCHIVED'
};

export type PropertyStatus = (typeof PropertyStatus)[keyof typeof PropertyStatus]


export const HeatingType: {
  CENTRAL: 'CENTRAL',
  ELECTRIC: 'ELECTRIC',
  GAS: 'GAS',
  WOOD: 'WOOD',
  SOLAR: 'SOLAR',
  NONE: 'NONE'
};

export type HeatingType = (typeof HeatingType)[keyof typeof HeatingType]


export const PropertyCondition: {
  NEW: 'NEW',
  EXCELLENT: 'EXCELLENT',
  GOOD: 'GOOD',
  FAIR: 'FAIR',
  NEEDS_RENOVATION: 'NEEDS_RENOVATION',
  UNDER_CONSTRUCTION: 'UNDER_CONSTRUCTION'
};

export type PropertyCondition = (typeof PropertyCondition)[keyof typeof PropertyCondition]


export const FurnitureStatus: {
  FULLY_FURNISHED: 'FULLY_FURNISHED',
  PARTIALLY_FURNISHED: 'PARTIALLY_FURNISHED',
  UNFURNISHED: 'UNFURNISHED'
};

export type FurnitureStatus = (typeof FurnitureStatus)[keyof typeof FurnitureStatus]


export const MediaType: {
  IMAGE: 'IMAGE',
  VIDEO: 'VIDEO',
  VIRTUAL_TOUR: 'VIRTUAL_TOUR',
  FLOOR_PLAN: 'FLOOR_PLAN',
  DOCUMENT: 'DOCUMENT'
};

export type MediaType = (typeof MediaType)[keyof typeof MediaType]


export const InquiryStatus: {
  PENDING: 'PENDING',
  READ: 'READ',
  REPLIED: 'REPLIED',
  CLOSED: 'CLOSED'
};

export type InquiryStatus = (typeof InquiryStatus)[keyof typeof InquiryStatus]

}

export type PropertyType = $Enums.PropertyType

export const PropertyType: typeof $Enums.PropertyType

export type TransactionType = $Enums.TransactionType

export const TransactionType: typeof $Enums.TransactionType

export type PropertyStatus = $Enums.PropertyStatus

export const PropertyStatus: typeof $Enums.PropertyStatus

export type HeatingType = $Enums.HeatingType

export const HeatingType: typeof $Enums.HeatingType

export type PropertyCondition = $Enums.PropertyCondition

export const PropertyCondition: typeof $Enums.PropertyCondition

export type FurnitureStatus = $Enums.FurnitureStatus

export const FurnitureStatus: typeof $Enums.FurnitureStatus

export type MediaType = $Enums.MediaType

export const MediaType: typeof $Enums.MediaType

export type InquiryStatus = $Enums.InquiryStatus

export const InquiryStatus: typeof $Enums.InquiryStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Properties
 * const properties = await prisma.property.findMany()
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
   * // Fetch zero or more Properties
   * const properties = await prisma.property.findMany()
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
   * `prisma.property`: Exposes CRUD operations for the **Property** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Properties
    * const properties = await prisma.property.findMany()
    * ```
    */
  get property(): Prisma.PropertyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.propertyMedia`: Exposes CRUD operations for the **PropertyMedia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PropertyMedias
    * const propertyMedias = await prisma.propertyMedia.findMany()
    * ```
    */
  get propertyMedia(): Prisma.PropertyMediaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.propertyPriceHistory`: Exposes CRUD operations for the **PropertyPriceHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PropertyPriceHistories
    * const propertyPriceHistories = await prisma.propertyPriceHistory.findMany()
    * ```
    */
  get propertyPriceHistory(): Prisma.PropertyPriceHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.propertyAmenity`: Exposes CRUD operations for the **PropertyAmenity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PropertyAmenities
    * const propertyAmenities = await prisma.propertyAmenity.findMany()
    * ```
    */
  get propertyAmenity(): Prisma.PropertyAmenityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favorite`: Exposes CRUD operations for the **Favorite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favorites
    * const favorites = await prisma.favorite.findMany()
    * ```
    */
  get favorite(): Prisma.FavoriteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inquiry`: Exposes CRUD operations for the **Inquiry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inquiries
    * const inquiries = await prisma.inquiry.findMany()
    * ```
    */
  get inquiry(): Prisma.InquiryDelegate<ExtArgs, ClientOptions>;
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
    Property: 'Property',
    PropertyMedia: 'PropertyMedia',
    PropertyPriceHistory: 'PropertyPriceHistory',
    PropertyAmenity: 'PropertyAmenity',
    Favorite: 'Favorite',
    Inquiry: 'Inquiry'
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
      modelProps: "property" | "propertyMedia" | "propertyPriceHistory" | "propertyAmenity" | "favorite" | "inquiry"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Property: {
        payload: Prisma.$PropertyPayload<ExtArgs>
        fields: Prisma.PropertyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findFirst: {
            args: Prisma.PropertyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findMany: {
            args: Prisma.PropertyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          create: {
            args: Prisma.PropertyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          createMany: {
            args: Prisma.PropertyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropertyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          delete: {
            args: Prisma.PropertyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          update: {
            args: Prisma.PropertyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          deleteMany: {
            args: Prisma.PropertyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PropertyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          upsert: {
            args: Prisma.PropertyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          aggregate: {
            args: Prisma.PropertyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProperty>
          }
          groupBy: {
            args: Prisma.PropertyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyCountAggregateOutputType> | number
          }
        }
      }
      PropertyMedia: {
        payload: Prisma.$PropertyMediaPayload<ExtArgs>
        fields: Prisma.PropertyMediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyMediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyMediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyMediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyMediaPayload>
          }
          findFirst: {
            args: Prisma.PropertyMediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyMediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyMediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyMediaPayload>
          }
          findMany: {
            args: Prisma.PropertyMediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyMediaPayload>[]
          }
          create: {
            args: Prisma.PropertyMediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyMediaPayload>
          }
          createMany: {
            args: Prisma.PropertyMediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropertyMediaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyMediaPayload>[]
          }
          delete: {
            args: Prisma.PropertyMediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyMediaPayload>
          }
          update: {
            args: Prisma.PropertyMediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyMediaPayload>
          }
          deleteMany: {
            args: Prisma.PropertyMediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyMediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PropertyMediaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyMediaPayload>[]
          }
          upsert: {
            args: Prisma.PropertyMediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyMediaPayload>
          }
          aggregate: {
            args: Prisma.PropertyMediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePropertyMedia>
          }
          groupBy: {
            args: Prisma.PropertyMediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyMediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyMediaCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyMediaCountAggregateOutputType> | number
          }
        }
      }
      PropertyPriceHistory: {
        payload: Prisma.$PropertyPriceHistoryPayload<ExtArgs>
        fields: Prisma.PropertyPriceHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyPriceHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPriceHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyPriceHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPriceHistoryPayload>
          }
          findFirst: {
            args: Prisma.PropertyPriceHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPriceHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyPriceHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPriceHistoryPayload>
          }
          findMany: {
            args: Prisma.PropertyPriceHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPriceHistoryPayload>[]
          }
          create: {
            args: Prisma.PropertyPriceHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPriceHistoryPayload>
          }
          createMany: {
            args: Prisma.PropertyPriceHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropertyPriceHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPriceHistoryPayload>[]
          }
          delete: {
            args: Prisma.PropertyPriceHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPriceHistoryPayload>
          }
          update: {
            args: Prisma.PropertyPriceHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPriceHistoryPayload>
          }
          deleteMany: {
            args: Prisma.PropertyPriceHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyPriceHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PropertyPriceHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPriceHistoryPayload>[]
          }
          upsert: {
            args: Prisma.PropertyPriceHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPriceHistoryPayload>
          }
          aggregate: {
            args: Prisma.PropertyPriceHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePropertyPriceHistory>
          }
          groupBy: {
            args: Prisma.PropertyPriceHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyPriceHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyPriceHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyPriceHistoryCountAggregateOutputType> | number
          }
        }
      }
      PropertyAmenity: {
        payload: Prisma.$PropertyAmenityPayload<ExtArgs>
        fields: Prisma.PropertyAmenityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyAmenityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyAmenityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyAmenityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyAmenityPayload>
          }
          findFirst: {
            args: Prisma.PropertyAmenityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyAmenityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyAmenityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyAmenityPayload>
          }
          findMany: {
            args: Prisma.PropertyAmenityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyAmenityPayload>[]
          }
          create: {
            args: Prisma.PropertyAmenityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyAmenityPayload>
          }
          createMany: {
            args: Prisma.PropertyAmenityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropertyAmenityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyAmenityPayload>[]
          }
          delete: {
            args: Prisma.PropertyAmenityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyAmenityPayload>
          }
          update: {
            args: Prisma.PropertyAmenityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyAmenityPayload>
          }
          deleteMany: {
            args: Prisma.PropertyAmenityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyAmenityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PropertyAmenityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyAmenityPayload>[]
          }
          upsert: {
            args: Prisma.PropertyAmenityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyAmenityPayload>
          }
          aggregate: {
            args: Prisma.PropertyAmenityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePropertyAmenity>
          }
          groupBy: {
            args: Prisma.PropertyAmenityGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyAmenityGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyAmenityCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyAmenityCountAggregateOutputType> | number
          }
        }
      }
      Favorite: {
        payload: Prisma.$FavoritePayload<ExtArgs>
        fields: Prisma.FavoriteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavoriteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoriteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          findFirst: {
            args: Prisma.FavoriteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoriteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          findMany: {
            args: Prisma.FavoriteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          create: {
            args: Prisma.FavoriteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          createMany: {
            args: Prisma.FavoriteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FavoriteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          delete: {
            args: Prisma.FavoriteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          update: {
            args: Prisma.FavoriteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          deleteMany: {
            args: Prisma.FavoriteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavoriteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FavoriteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          upsert: {
            args: Prisma.FavoriteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          aggregate: {
            args: Prisma.FavoriteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavorite>
          }
          groupBy: {
            args: Prisma.FavoriteGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavoriteGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavoriteCountArgs<ExtArgs>
            result: $Utils.Optional<FavoriteCountAggregateOutputType> | number
          }
        }
      }
      Inquiry: {
        payload: Prisma.$InquiryPayload<ExtArgs>
        fields: Prisma.InquiryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InquiryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InquiryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          findFirst: {
            args: Prisma.InquiryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InquiryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          findMany: {
            args: Prisma.InquiryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>[]
          }
          create: {
            args: Prisma.InquiryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          createMany: {
            args: Prisma.InquiryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InquiryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>[]
          }
          delete: {
            args: Prisma.InquiryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          update: {
            args: Prisma.InquiryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          deleteMany: {
            args: Prisma.InquiryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InquiryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InquiryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>[]
          }
          upsert: {
            args: Prisma.InquiryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          aggregate: {
            args: Prisma.InquiryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInquiry>
          }
          groupBy: {
            args: Prisma.InquiryGroupByArgs<ExtArgs>
            result: $Utils.Optional<InquiryGroupByOutputType>[]
          }
          count: {
            args: Prisma.InquiryCountArgs<ExtArgs>
            result: $Utils.Optional<InquiryCountAggregateOutputType> | number
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
    property?: PropertyOmit
    propertyMedia?: PropertyMediaOmit
    propertyPriceHistory?: PropertyPriceHistoryOmit
    propertyAmenity?: PropertyAmenityOmit
    favorite?: FavoriteOmit
    inquiry?: InquiryOmit
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
   * Count Type PropertyCountOutputType
   */

  export type PropertyCountOutputType = {
    media: number
    priceHistory: number
    favorites: number
    inquiries: number
    amenities: number
  }

  export type PropertyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media?: boolean | PropertyCountOutputTypeCountMediaArgs
    priceHistory?: boolean | PropertyCountOutputTypeCountPriceHistoryArgs
    favorites?: boolean | PropertyCountOutputTypeCountFavoritesArgs
    inquiries?: boolean | PropertyCountOutputTypeCountInquiriesArgs
    amenities?: boolean | PropertyCountOutputTypeCountAmenitiesArgs
  }

  // Custom InputTypes
  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCountOutputType
     */
    select?: PropertyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyMediaWhereInput
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountPriceHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyPriceHistoryWhereInput
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountInquiriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InquiryWhereInput
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountAmenitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyAmenityWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Property
   */

  export type AggregateProperty = {
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  export type PropertyAvgAggregateOutputType = {
    price: Decimal | null
    pricePerSqm: Decimal | null
    totalArea: number | null
    livingArea: number | null
    landArea: number | null
    rooms: number | null
    bedrooms: number | null
    bathrooms: number | null
    floor: number | null
    totalFloors: number | null
    buildingYear: number | null
    parkingSpaces: number | null
    latitude: number | null
    longitude: number | null
    viewCount: number | null
    favoriteCount: number | null
    inquiryCount: number | null
  }

  export type PropertySumAggregateOutputType = {
    price: Decimal | null
    pricePerSqm: Decimal | null
    totalArea: number | null
    livingArea: number | null
    landArea: number | null
    rooms: number | null
    bedrooms: number | null
    bathrooms: number | null
    floor: number | null
    totalFloors: number | null
    buildingYear: number | null
    parkingSpaces: number | null
    latitude: number | null
    longitude: number | null
    viewCount: number | null
    favoriteCount: number | null
    inquiryCount: number | null
  }

  export type PropertyMinAggregateOutputType = {
    id: string | null
    ownerId: string | null
    agentId: string | null
    title: string | null
    slug: string | null
    description: string | null
    type: $Enums.PropertyType | null
    transaction: $Enums.TransactionType | null
    status: $Enums.PropertyStatus | null
    price: Decimal | null
    pricePerSqm: Decimal | null
    currency: string | null
    isPriceNegotiable: boolean | null
    totalArea: number | null
    livingArea: number | null
    landArea: number | null
    rooms: number | null
    bedrooms: number | null
    bathrooms: number | null
    floor: number | null
    totalFloors: number | null
    buildingYear: number | null
    parkingSpaces: number | null
    heating: $Enums.HeatingType | null
    condition: $Enums.PropertyCondition | null
    furniture: $Enums.FurnitureStatus | null
    balcony: boolean | null
    elevator: boolean | null
    garage: boolean | null
    security: boolean | null
    playground: boolean | null
    address: string | null
    city: string | null
    district: string | null
    khoroo: string | null
    zipCode: string | null
    latitude: number | null
    longitude: number | null
    cadastralNumber: string | null
    ownershipType: string | null
    landUseType: string | null
    viewCount: number | null
    favoriteCount: number | null
    inquiryCount: number | null
    isFeatured: boolean | null
    isVerified: boolean | null
    verifiedAt: Date | null
    verifiedBy: string | null
    publishedAt: Date | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyMaxAggregateOutputType = {
    id: string | null
    ownerId: string | null
    agentId: string | null
    title: string | null
    slug: string | null
    description: string | null
    type: $Enums.PropertyType | null
    transaction: $Enums.TransactionType | null
    status: $Enums.PropertyStatus | null
    price: Decimal | null
    pricePerSqm: Decimal | null
    currency: string | null
    isPriceNegotiable: boolean | null
    totalArea: number | null
    livingArea: number | null
    landArea: number | null
    rooms: number | null
    bedrooms: number | null
    bathrooms: number | null
    floor: number | null
    totalFloors: number | null
    buildingYear: number | null
    parkingSpaces: number | null
    heating: $Enums.HeatingType | null
    condition: $Enums.PropertyCondition | null
    furniture: $Enums.FurnitureStatus | null
    balcony: boolean | null
    elevator: boolean | null
    garage: boolean | null
    security: boolean | null
    playground: boolean | null
    address: string | null
    city: string | null
    district: string | null
    khoroo: string | null
    zipCode: string | null
    latitude: number | null
    longitude: number | null
    cadastralNumber: string | null
    ownershipType: string | null
    landUseType: string | null
    viewCount: number | null
    favoriteCount: number | null
    inquiryCount: number | null
    isFeatured: boolean | null
    isVerified: boolean | null
    verifiedAt: Date | null
    verifiedBy: string | null
    publishedAt: Date | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyCountAggregateOutputType = {
    id: number
    ownerId: number
    agentId: number
    title: number
    slug: number
    description: number
    type: number
    transaction: number
    status: number
    price: number
    pricePerSqm: number
    currency: number
    isPriceNegotiable: number
    totalArea: number
    livingArea: number
    landArea: number
    rooms: number
    bedrooms: number
    bathrooms: number
    floor: number
    totalFloors: number
    buildingYear: number
    parkingSpaces: number
    heating: number
    condition: number
    furniture: number
    balcony: number
    elevator: number
    garage: number
    security: number
    playground: number
    address: number
    city: number
    district: number
    khoroo: number
    zipCode: number
    latitude: number
    longitude: number
    cadastralNumber: number
    ownershipType: number
    landUseType: number
    viewCount: number
    favoriteCount: number
    inquiryCount: number
    isFeatured: number
    isVerified: number
    verifiedAt: number
    verifiedBy: number
    publishedAt: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PropertyAvgAggregateInputType = {
    price?: true
    pricePerSqm?: true
    totalArea?: true
    livingArea?: true
    landArea?: true
    rooms?: true
    bedrooms?: true
    bathrooms?: true
    floor?: true
    totalFloors?: true
    buildingYear?: true
    parkingSpaces?: true
    latitude?: true
    longitude?: true
    viewCount?: true
    favoriteCount?: true
    inquiryCount?: true
  }

  export type PropertySumAggregateInputType = {
    price?: true
    pricePerSqm?: true
    totalArea?: true
    livingArea?: true
    landArea?: true
    rooms?: true
    bedrooms?: true
    bathrooms?: true
    floor?: true
    totalFloors?: true
    buildingYear?: true
    parkingSpaces?: true
    latitude?: true
    longitude?: true
    viewCount?: true
    favoriteCount?: true
    inquiryCount?: true
  }

  export type PropertyMinAggregateInputType = {
    id?: true
    ownerId?: true
    agentId?: true
    title?: true
    slug?: true
    description?: true
    type?: true
    transaction?: true
    status?: true
    price?: true
    pricePerSqm?: true
    currency?: true
    isPriceNegotiable?: true
    totalArea?: true
    livingArea?: true
    landArea?: true
    rooms?: true
    bedrooms?: true
    bathrooms?: true
    floor?: true
    totalFloors?: true
    buildingYear?: true
    parkingSpaces?: true
    heating?: true
    condition?: true
    furniture?: true
    balcony?: true
    elevator?: true
    garage?: true
    security?: true
    playground?: true
    address?: true
    city?: true
    district?: true
    khoroo?: true
    zipCode?: true
    latitude?: true
    longitude?: true
    cadastralNumber?: true
    ownershipType?: true
    landUseType?: true
    viewCount?: true
    favoriteCount?: true
    inquiryCount?: true
    isFeatured?: true
    isVerified?: true
    verifiedAt?: true
    verifiedBy?: true
    publishedAt?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyMaxAggregateInputType = {
    id?: true
    ownerId?: true
    agentId?: true
    title?: true
    slug?: true
    description?: true
    type?: true
    transaction?: true
    status?: true
    price?: true
    pricePerSqm?: true
    currency?: true
    isPriceNegotiable?: true
    totalArea?: true
    livingArea?: true
    landArea?: true
    rooms?: true
    bedrooms?: true
    bathrooms?: true
    floor?: true
    totalFloors?: true
    buildingYear?: true
    parkingSpaces?: true
    heating?: true
    condition?: true
    furniture?: true
    balcony?: true
    elevator?: true
    garage?: true
    security?: true
    playground?: true
    address?: true
    city?: true
    district?: true
    khoroo?: true
    zipCode?: true
    latitude?: true
    longitude?: true
    cadastralNumber?: true
    ownershipType?: true
    landUseType?: true
    viewCount?: true
    favoriteCount?: true
    inquiryCount?: true
    isFeatured?: true
    isVerified?: true
    verifiedAt?: true
    verifiedBy?: true
    publishedAt?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyCountAggregateInputType = {
    id?: true
    ownerId?: true
    agentId?: true
    title?: true
    slug?: true
    description?: true
    type?: true
    transaction?: true
    status?: true
    price?: true
    pricePerSqm?: true
    currency?: true
    isPriceNegotiable?: true
    totalArea?: true
    livingArea?: true
    landArea?: true
    rooms?: true
    bedrooms?: true
    bathrooms?: true
    floor?: true
    totalFloors?: true
    buildingYear?: true
    parkingSpaces?: true
    heating?: true
    condition?: true
    furniture?: true
    balcony?: true
    elevator?: true
    garage?: true
    security?: true
    playground?: true
    address?: true
    city?: true
    district?: true
    khoroo?: true
    zipCode?: true
    latitude?: true
    longitude?: true
    cadastralNumber?: true
    ownershipType?: true
    landUseType?: true
    viewCount?: true
    favoriteCount?: true
    inquiryCount?: true
    isFeatured?: true
    isVerified?: true
    verifiedAt?: true
    verifiedBy?: true
    publishedAt?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PropertyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Property to aggregate.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Properties
    **/
    _count?: true | PropertyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyMaxAggregateInputType
  }

  export type GetPropertyAggregateType<T extends PropertyAggregateArgs> = {
        [P in keyof T & keyof AggregateProperty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProperty[P]>
      : GetScalarType<T[P], AggregateProperty[P]>
  }




  export type PropertyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithAggregationInput | PropertyOrderByWithAggregationInput[]
    by: PropertyScalarFieldEnum[] | PropertyScalarFieldEnum
    having?: PropertyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyCountAggregateInputType | true
    _avg?: PropertyAvgAggregateInputType
    _sum?: PropertySumAggregateInputType
    _min?: PropertyMinAggregateInputType
    _max?: PropertyMaxAggregateInputType
  }

  export type PropertyGroupByOutputType = {
    id: string
    ownerId: string
    agentId: string | null
    title: string
    slug: string
    description: string
    type: $Enums.PropertyType
    transaction: $Enums.TransactionType
    status: $Enums.PropertyStatus
    price: Decimal
    pricePerSqm: Decimal | null
    currency: string
    isPriceNegotiable: boolean
    totalArea: number | null
    livingArea: number | null
    landArea: number | null
    rooms: number | null
    bedrooms: number | null
    bathrooms: number | null
    floor: number | null
    totalFloors: number | null
    buildingYear: number | null
    parkingSpaces: number | null
    heating: $Enums.HeatingType | null
    condition: $Enums.PropertyCondition | null
    furniture: $Enums.FurnitureStatus | null
    balcony: boolean
    elevator: boolean
    garage: boolean
    security: boolean
    playground: boolean
    address: string
    city: string
    district: string
    khoroo: string | null
    zipCode: string | null
    latitude: number | null
    longitude: number | null
    cadastralNumber: string | null
    ownershipType: string | null
    landUseType: string | null
    viewCount: number
    favoriteCount: number
    inquiryCount: number
    isFeatured: boolean
    isVerified: boolean
    verifiedAt: Date | null
    verifiedBy: string | null
    publishedAt: Date | null
    expiresAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  type GetPropertyGroupByPayload<T extends PropertyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyGroupByOutputType[P]>
        }
      >
    >


  export type PropertySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    agentId?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    type?: boolean
    transaction?: boolean
    status?: boolean
    price?: boolean
    pricePerSqm?: boolean
    currency?: boolean
    isPriceNegotiable?: boolean
    totalArea?: boolean
    livingArea?: boolean
    landArea?: boolean
    rooms?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    floor?: boolean
    totalFloors?: boolean
    buildingYear?: boolean
    parkingSpaces?: boolean
    heating?: boolean
    condition?: boolean
    furniture?: boolean
    balcony?: boolean
    elevator?: boolean
    garage?: boolean
    security?: boolean
    playground?: boolean
    address?: boolean
    city?: boolean
    district?: boolean
    khoroo?: boolean
    zipCode?: boolean
    latitude?: boolean
    longitude?: boolean
    cadastralNumber?: boolean
    ownershipType?: boolean
    landUseType?: boolean
    viewCount?: boolean
    favoriteCount?: boolean
    inquiryCount?: boolean
    isFeatured?: boolean
    isVerified?: boolean
    verifiedAt?: boolean
    verifiedBy?: boolean
    publishedAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    media?: boolean | Property$mediaArgs<ExtArgs>
    priceHistory?: boolean | Property$priceHistoryArgs<ExtArgs>
    favorites?: boolean | Property$favoritesArgs<ExtArgs>
    inquiries?: boolean | Property$inquiriesArgs<ExtArgs>
    amenities?: boolean | Property$amenitiesArgs<ExtArgs>
    _count?: boolean | PropertyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    agentId?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    type?: boolean
    transaction?: boolean
    status?: boolean
    price?: boolean
    pricePerSqm?: boolean
    currency?: boolean
    isPriceNegotiable?: boolean
    totalArea?: boolean
    livingArea?: boolean
    landArea?: boolean
    rooms?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    floor?: boolean
    totalFloors?: boolean
    buildingYear?: boolean
    parkingSpaces?: boolean
    heating?: boolean
    condition?: boolean
    furniture?: boolean
    balcony?: boolean
    elevator?: boolean
    garage?: boolean
    security?: boolean
    playground?: boolean
    address?: boolean
    city?: boolean
    district?: boolean
    khoroo?: boolean
    zipCode?: boolean
    latitude?: boolean
    longitude?: boolean
    cadastralNumber?: boolean
    ownershipType?: boolean
    landUseType?: boolean
    viewCount?: boolean
    favoriteCount?: boolean
    inquiryCount?: boolean
    isFeatured?: boolean
    isVerified?: boolean
    verifiedAt?: boolean
    verifiedBy?: boolean
    publishedAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["property"]>

  export type PropertySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    agentId?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    type?: boolean
    transaction?: boolean
    status?: boolean
    price?: boolean
    pricePerSqm?: boolean
    currency?: boolean
    isPriceNegotiable?: boolean
    totalArea?: boolean
    livingArea?: boolean
    landArea?: boolean
    rooms?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    floor?: boolean
    totalFloors?: boolean
    buildingYear?: boolean
    parkingSpaces?: boolean
    heating?: boolean
    condition?: boolean
    furniture?: boolean
    balcony?: boolean
    elevator?: boolean
    garage?: boolean
    security?: boolean
    playground?: boolean
    address?: boolean
    city?: boolean
    district?: boolean
    khoroo?: boolean
    zipCode?: boolean
    latitude?: boolean
    longitude?: boolean
    cadastralNumber?: boolean
    ownershipType?: boolean
    landUseType?: boolean
    viewCount?: boolean
    favoriteCount?: boolean
    inquiryCount?: boolean
    isFeatured?: boolean
    isVerified?: boolean
    verifiedAt?: boolean
    verifiedBy?: boolean
    publishedAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["property"]>

  export type PropertySelectScalar = {
    id?: boolean
    ownerId?: boolean
    agentId?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    type?: boolean
    transaction?: boolean
    status?: boolean
    price?: boolean
    pricePerSqm?: boolean
    currency?: boolean
    isPriceNegotiable?: boolean
    totalArea?: boolean
    livingArea?: boolean
    landArea?: boolean
    rooms?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    floor?: boolean
    totalFloors?: boolean
    buildingYear?: boolean
    parkingSpaces?: boolean
    heating?: boolean
    condition?: boolean
    furniture?: boolean
    balcony?: boolean
    elevator?: boolean
    garage?: boolean
    security?: boolean
    playground?: boolean
    address?: boolean
    city?: boolean
    district?: boolean
    khoroo?: boolean
    zipCode?: boolean
    latitude?: boolean
    longitude?: boolean
    cadastralNumber?: boolean
    ownershipType?: boolean
    landUseType?: boolean
    viewCount?: boolean
    favoriteCount?: boolean
    inquiryCount?: boolean
    isFeatured?: boolean
    isVerified?: boolean
    verifiedAt?: boolean
    verifiedBy?: boolean
    publishedAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PropertyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerId" | "agentId" | "title" | "slug" | "description" | "type" | "transaction" | "status" | "price" | "pricePerSqm" | "currency" | "isPriceNegotiable" | "totalArea" | "livingArea" | "landArea" | "rooms" | "bedrooms" | "bathrooms" | "floor" | "totalFloors" | "buildingYear" | "parkingSpaces" | "heating" | "condition" | "furniture" | "balcony" | "elevator" | "garage" | "security" | "playground" | "address" | "city" | "district" | "khoroo" | "zipCode" | "latitude" | "longitude" | "cadastralNumber" | "ownershipType" | "landUseType" | "viewCount" | "favoriteCount" | "inquiryCount" | "isFeatured" | "isVerified" | "verifiedAt" | "verifiedBy" | "publishedAt" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["property"]>
  export type PropertyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media?: boolean | Property$mediaArgs<ExtArgs>
    priceHistory?: boolean | Property$priceHistoryArgs<ExtArgs>
    favorites?: boolean | Property$favoritesArgs<ExtArgs>
    inquiries?: boolean | Property$inquiriesArgs<ExtArgs>
    amenities?: boolean | Property$amenitiesArgs<ExtArgs>
    _count?: boolean | PropertyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PropertyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PropertyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PropertyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Property"
    objects: {
      media: Prisma.$PropertyMediaPayload<ExtArgs>[]
      priceHistory: Prisma.$PropertyPriceHistoryPayload<ExtArgs>[]
      favorites: Prisma.$FavoritePayload<ExtArgs>[]
      inquiries: Prisma.$InquiryPayload<ExtArgs>[]
      amenities: Prisma.$PropertyAmenityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ownerId: string
      agentId: string | null
      title: string
      slug: string
      description: string
      type: $Enums.PropertyType
      transaction: $Enums.TransactionType
      status: $Enums.PropertyStatus
      price: Prisma.Decimal
      pricePerSqm: Prisma.Decimal | null
      currency: string
      isPriceNegotiable: boolean
      totalArea: number | null
      livingArea: number | null
      landArea: number | null
      rooms: number | null
      bedrooms: number | null
      bathrooms: number | null
      floor: number | null
      totalFloors: number | null
      buildingYear: number | null
      parkingSpaces: number | null
      heating: $Enums.HeatingType | null
      condition: $Enums.PropertyCondition | null
      furniture: $Enums.FurnitureStatus | null
      balcony: boolean
      elevator: boolean
      garage: boolean
      security: boolean
      playground: boolean
      address: string
      city: string
      district: string
      khoroo: string | null
      zipCode: string | null
      latitude: number | null
      longitude: number | null
      cadastralNumber: string | null
      ownershipType: string | null
      landUseType: string | null
      viewCount: number
      favoriteCount: number
      inquiryCount: number
      isFeatured: boolean
      isVerified: boolean
      verifiedAt: Date | null
      verifiedBy: string | null
      publishedAt: Date | null
      expiresAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["property"]>
    composites: {}
  }

  type PropertyGetPayload<S extends boolean | null | undefined | PropertyDefaultArgs> = $Result.GetResult<Prisma.$PropertyPayload, S>

  type PropertyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropertyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropertyCountAggregateInputType | true
    }

  export interface PropertyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Property'], meta: { name: 'Property' } }
    /**
     * Find zero or one Property that matches the filter.
     * @param {PropertyFindUniqueArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyFindUniqueArgs>(args: SelectSubset<T, PropertyFindUniqueArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Property that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropertyFindUniqueOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Property that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyFindFirstArgs>(args?: SelectSubset<T, PropertyFindFirstArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Property that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Properties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Properties
     * const properties = await prisma.property.findMany()
     * 
     * // Get first 10 Properties
     * const properties = await prisma.property.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyWithIdOnly = await prisma.property.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyFindManyArgs>(args?: SelectSubset<T, PropertyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Property.
     * @param {PropertyCreateArgs} args - Arguments to create a Property.
     * @example
     * // Create one Property
     * const Property = await prisma.property.create({
     *   data: {
     *     // ... data to create a Property
     *   }
     * })
     * 
     */
    create<T extends PropertyCreateArgs>(args: SelectSubset<T, PropertyCreateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Properties.
     * @param {PropertyCreateManyArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyCreateManyArgs>(args?: SelectSubset<T, PropertyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Properties and returns the data saved in the database.
     * @param {PropertyCreateManyAndReturnArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Properties and only return the `id`
     * const propertyWithIdOnly = await prisma.property.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropertyCreateManyAndReturnArgs>(args?: SelectSubset<T, PropertyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Property.
     * @param {PropertyDeleteArgs} args - Arguments to delete one Property.
     * @example
     * // Delete one Property
     * const Property = await prisma.property.delete({
     *   where: {
     *     // ... filter to delete one Property
     *   }
     * })
     * 
     */
    delete<T extends PropertyDeleteArgs>(args: SelectSubset<T, PropertyDeleteArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Property.
     * @param {PropertyUpdateArgs} args - Arguments to update one Property.
     * @example
     * // Update one Property
     * const property = await prisma.property.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyUpdateArgs>(args: SelectSubset<T, PropertyUpdateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Properties.
     * @param {PropertyDeleteManyArgs} args - Arguments to filter Properties to delete.
     * @example
     * // Delete a few Properties
     * const { count } = await prisma.property.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyDeleteManyArgs>(args?: SelectSubset<T, PropertyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyUpdateManyArgs>(args: SelectSubset<T, PropertyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties and returns the data updated in the database.
     * @param {PropertyUpdateManyAndReturnArgs} args - Arguments to update many Properties.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Properties and only return the `id`
     * const propertyWithIdOnly = await prisma.property.updateManyAndReturn({
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
    updateManyAndReturn<T extends PropertyUpdateManyAndReturnArgs>(args: SelectSubset<T, PropertyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Property.
     * @param {PropertyUpsertArgs} args - Arguments to update or create a Property.
     * @example
     * // Update or create a Property
     * const property = await prisma.property.upsert({
     *   create: {
     *     // ... data to create a Property
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Property we want to update
     *   }
     * })
     */
    upsert<T extends PropertyUpsertArgs>(args: SelectSubset<T, PropertyUpsertArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCountArgs} args - Arguments to filter Properties to count.
     * @example
     * // Count the number of Properties
     * const count = await prisma.property.count({
     *   where: {
     *     // ... the filter for the Properties we want to count
     *   }
     * })
    **/
    count<T extends PropertyCountArgs>(
      args?: Subset<T, PropertyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PropertyAggregateArgs>(args: Subset<T, PropertyAggregateArgs>): Prisma.PrismaPromise<GetPropertyAggregateType<T>>

    /**
     * Group by Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyGroupByArgs} args - Group by arguments.
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
      T extends PropertyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyGroupByArgs['orderBy'] }
        : { orderBy?: PropertyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PropertyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Property model
   */
  readonly fields: PropertyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Property.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    media<T extends Property$mediaArgs<ExtArgs> = {}>(args?: Subset<T, Property$mediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyMediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    priceHistory<T extends Property$priceHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Property$priceHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPriceHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favorites<T extends Property$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, Property$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inquiries<T extends Property$inquiriesArgs<ExtArgs> = {}>(args?: Subset<T, Property$inquiriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    amenities<T extends Property$amenitiesArgs<ExtArgs> = {}>(args?: Subset<T, Property$amenitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyAmenityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Property model
   */
  interface PropertyFieldRefs {
    readonly id: FieldRef<"Property", 'String'>
    readonly ownerId: FieldRef<"Property", 'String'>
    readonly agentId: FieldRef<"Property", 'String'>
    readonly title: FieldRef<"Property", 'String'>
    readonly slug: FieldRef<"Property", 'String'>
    readonly description: FieldRef<"Property", 'String'>
    readonly type: FieldRef<"Property", 'PropertyType'>
    readonly transaction: FieldRef<"Property", 'TransactionType'>
    readonly status: FieldRef<"Property", 'PropertyStatus'>
    readonly price: FieldRef<"Property", 'Decimal'>
    readonly pricePerSqm: FieldRef<"Property", 'Decimal'>
    readonly currency: FieldRef<"Property", 'String'>
    readonly isPriceNegotiable: FieldRef<"Property", 'Boolean'>
    readonly totalArea: FieldRef<"Property", 'Float'>
    readonly livingArea: FieldRef<"Property", 'Float'>
    readonly landArea: FieldRef<"Property", 'Float'>
    readonly rooms: FieldRef<"Property", 'Int'>
    readonly bedrooms: FieldRef<"Property", 'Int'>
    readonly bathrooms: FieldRef<"Property", 'Int'>
    readonly floor: FieldRef<"Property", 'Int'>
    readonly totalFloors: FieldRef<"Property", 'Int'>
    readonly buildingYear: FieldRef<"Property", 'Int'>
    readonly parkingSpaces: FieldRef<"Property", 'Int'>
    readonly heating: FieldRef<"Property", 'HeatingType'>
    readonly condition: FieldRef<"Property", 'PropertyCondition'>
    readonly furniture: FieldRef<"Property", 'FurnitureStatus'>
    readonly balcony: FieldRef<"Property", 'Boolean'>
    readonly elevator: FieldRef<"Property", 'Boolean'>
    readonly garage: FieldRef<"Property", 'Boolean'>
    readonly security: FieldRef<"Property", 'Boolean'>
    readonly playground: FieldRef<"Property", 'Boolean'>
    readonly address: FieldRef<"Property", 'String'>
    readonly city: FieldRef<"Property", 'String'>
    readonly district: FieldRef<"Property", 'String'>
    readonly khoroo: FieldRef<"Property", 'String'>
    readonly zipCode: FieldRef<"Property", 'String'>
    readonly latitude: FieldRef<"Property", 'Float'>
    readonly longitude: FieldRef<"Property", 'Float'>
    readonly cadastralNumber: FieldRef<"Property", 'String'>
    readonly ownershipType: FieldRef<"Property", 'String'>
    readonly landUseType: FieldRef<"Property", 'String'>
    readonly viewCount: FieldRef<"Property", 'Int'>
    readonly favoriteCount: FieldRef<"Property", 'Int'>
    readonly inquiryCount: FieldRef<"Property", 'Int'>
    readonly isFeatured: FieldRef<"Property", 'Boolean'>
    readonly isVerified: FieldRef<"Property", 'Boolean'>
    readonly verifiedAt: FieldRef<"Property", 'DateTime'>
    readonly verifiedBy: FieldRef<"Property", 'String'>
    readonly publishedAt: FieldRef<"Property", 'DateTime'>
    readonly expiresAt: FieldRef<"Property", 'DateTime'>
    readonly createdAt: FieldRef<"Property", 'DateTime'>
    readonly updatedAt: FieldRef<"Property", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Property findUnique
   */
  export type PropertyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findUniqueOrThrow
   */
  export type PropertyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findFirst
   */
  export type PropertyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findFirstOrThrow
   */
  export type PropertyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findMany
   */
  export type PropertyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Properties to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property create
   */
  export type PropertyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to create a Property.
     */
    data: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
  }

  /**
   * Property createMany
   */
  export type PropertyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Property createManyAndReturn
   */
  export type PropertyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Property update
   */
  export type PropertyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to update a Property.
     */
    data: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
    /**
     * Choose, which Property to update.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property updateMany
   */
  export type PropertyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Properties.
     */
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyInput>
    /**
     * Filter which Properties to update
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to update.
     */
    limit?: number
  }

  /**
   * Property updateManyAndReturn
   */
  export type PropertyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * The data used to update Properties.
     */
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyInput>
    /**
     * Filter which Properties to update
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to update.
     */
    limit?: number
  }

  /**
   * Property upsert
   */
  export type PropertyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The filter to search for the Property to update in case it exists.
     */
    where: PropertyWhereUniqueInput
    /**
     * In case the Property found by the `where` argument doesn't exist, create a new Property with this data.
     */
    create: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
    /**
     * In case the Property was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
  }

  /**
   * Property delete
   */
  export type PropertyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter which Property to delete.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property deleteMany
   */
  export type PropertyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Properties to delete
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to delete.
     */
    limit?: number
  }

  /**
   * Property.media
   */
  export type Property$mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyMedia
     */
    select?: PropertyMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyMedia
     */
    omit?: PropertyMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyMediaInclude<ExtArgs> | null
    where?: PropertyMediaWhereInput
    orderBy?: PropertyMediaOrderByWithRelationInput | PropertyMediaOrderByWithRelationInput[]
    cursor?: PropertyMediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyMediaScalarFieldEnum | PropertyMediaScalarFieldEnum[]
  }

  /**
   * Property.priceHistory
   */
  export type Property$priceHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyPriceHistory
     */
    select?: PropertyPriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyPriceHistory
     */
    omit?: PropertyPriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyPriceHistoryInclude<ExtArgs> | null
    where?: PropertyPriceHistoryWhereInput
    orderBy?: PropertyPriceHistoryOrderByWithRelationInput | PropertyPriceHistoryOrderByWithRelationInput[]
    cursor?: PropertyPriceHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyPriceHistoryScalarFieldEnum | PropertyPriceHistoryScalarFieldEnum[]
  }

  /**
   * Property.favorites
   */
  export type Property$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    cursor?: FavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Property.inquiries
   */
  export type Property$inquiriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    where?: InquiryWhereInput
    orderBy?: InquiryOrderByWithRelationInput | InquiryOrderByWithRelationInput[]
    cursor?: InquiryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InquiryScalarFieldEnum | InquiryScalarFieldEnum[]
  }

  /**
   * Property.amenities
   */
  export type Property$amenitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyAmenity
     */
    select?: PropertyAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyAmenity
     */
    omit?: PropertyAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyAmenityInclude<ExtArgs> | null
    where?: PropertyAmenityWhereInput
    orderBy?: PropertyAmenityOrderByWithRelationInput | PropertyAmenityOrderByWithRelationInput[]
    cursor?: PropertyAmenityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyAmenityScalarFieldEnum | PropertyAmenityScalarFieldEnum[]
  }

  /**
   * Property without action
   */
  export type PropertyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
  }


  /**
   * Model PropertyMedia
   */

  export type AggregatePropertyMedia = {
    _count: PropertyMediaCountAggregateOutputType | null
    _avg: PropertyMediaAvgAggregateOutputType | null
    _sum: PropertyMediaSumAggregateOutputType | null
    _min: PropertyMediaMinAggregateOutputType | null
    _max: PropertyMediaMaxAggregateOutputType | null
  }

  export type PropertyMediaAvgAggregateOutputType = {
    sortOrder: number | null
    fileSize: number | null
    width: number | null
    height: number | null
  }

  export type PropertyMediaSumAggregateOutputType = {
    sortOrder: number | null
    fileSize: number | null
    width: number | null
    height: number | null
  }

  export type PropertyMediaMinAggregateOutputType = {
    id: string | null
    propertyId: string | null
    url: string | null
    thumbnailUrl: string | null
    type: $Enums.MediaType | null
    title: string | null
    sortOrder: number | null
    isPrimary: boolean | null
    fileSize: number | null
    width: number | null
    height: number | null
    createdAt: Date | null
  }

  export type PropertyMediaMaxAggregateOutputType = {
    id: string | null
    propertyId: string | null
    url: string | null
    thumbnailUrl: string | null
    type: $Enums.MediaType | null
    title: string | null
    sortOrder: number | null
    isPrimary: boolean | null
    fileSize: number | null
    width: number | null
    height: number | null
    createdAt: Date | null
  }

  export type PropertyMediaCountAggregateOutputType = {
    id: number
    propertyId: number
    url: number
    thumbnailUrl: number
    type: number
    title: number
    sortOrder: number
    isPrimary: number
    fileSize: number
    width: number
    height: number
    createdAt: number
    _all: number
  }


  export type PropertyMediaAvgAggregateInputType = {
    sortOrder?: true
    fileSize?: true
    width?: true
    height?: true
  }

  export type PropertyMediaSumAggregateInputType = {
    sortOrder?: true
    fileSize?: true
    width?: true
    height?: true
  }

  export type PropertyMediaMinAggregateInputType = {
    id?: true
    propertyId?: true
    url?: true
    thumbnailUrl?: true
    type?: true
    title?: true
    sortOrder?: true
    isPrimary?: true
    fileSize?: true
    width?: true
    height?: true
    createdAt?: true
  }

  export type PropertyMediaMaxAggregateInputType = {
    id?: true
    propertyId?: true
    url?: true
    thumbnailUrl?: true
    type?: true
    title?: true
    sortOrder?: true
    isPrimary?: true
    fileSize?: true
    width?: true
    height?: true
    createdAt?: true
  }

  export type PropertyMediaCountAggregateInputType = {
    id?: true
    propertyId?: true
    url?: true
    thumbnailUrl?: true
    type?: true
    title?: true
    sortOrder?: true
    isPrimary?: true
    fileSize?: true
    width?: true
    height?: true
    createdAt?: true
    _all?: true
  }

  export type PropertyMediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyMedia to aggregate.
     */
    where?: PropertyMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyMedias to fetch.
     */
    orderBy?: PropertyMediaOrderByWithRelationInput | PropertyMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PropertyMedias
    **/
    _count?: true | PropertyMediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertyMediaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertyMediaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyMediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyMediaMaxAggregateInputType
  }

  export type GetPropertyMediaAggregateType<T extends PropertyMediaAggregateArgs> = {
        [P in keyof T & keyof AggregatePropertyMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePropertyMedia[P]>
      : GetScalarType<T[P], AggregatePropertyMedia[P]>
  }




  export type PropertyMediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyMediaWhereInput
    orderBy?: PropertyMediaOrderByWithAggregationInput | PropertyMediaOrderByWithAggregationInput[]
    by: PropertyMediaScalarFieldEnum[] | PropertyMediaScalarFieldEnum
    having?: PropertyMediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyMediaCountAggregateInputType | true
    _avg?: PropertyMediaAvgAggregateInputType
    _sum?: PropertyMediaSumAggregateInputType
    _min?: PropertyMediaMinAggregateInputType
    _max?: PropertyMediaMaxAggregateInputType
  }

  export type PropertyMediaGroupByOutputType = {
    id: string
    propertyId: string
    url: string
    thumbnailUrl: string | null
    type: $Enums.MediaType
    title: string | null
    sortOrder: number
    isPrimary: boolean
    fileSize: number | null
    width: number | null
    height: number | null
    createdAt: Date
    _count: PropertyMediaCountAggregateOutputType | null
    _avg: PropertyMediaAvgAggregateOutputType | null
    _sum: PropertyMediaSumAggregateOutputType | null
    _min: PropertyMediaMinAggregateOutputType | null
    _max: PropertyMediaMaxAggregateOutputType | null
  }

  type GetPropertyMediaGroupByPayload<T extends PropertyMediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyMediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyMediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyMediaGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyMediaGroupByOutputType[P]>
        }
      >
    >


  export type PropertyMediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    url?: boolean
    thumbnailUrl?: boolean
    type?: boolean
    title?: boolean
    sortOrder?: boolean
    isPrimary?: boolean
    fileSize?: boolean
    width?: boolean
    height?: boolean
    createdAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyMedia"]>

  export type PropertyMediaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    url?: boolean
    thumbnailUrl?: boolean
    type?: boolean
    title?: boolean
    sortOrder?: boolean
    isPrimary?: boolean
    fileSize?: boolean
    width?: boolean
    height?: boolean
    createdAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyMedia"]>

  export type PropertyMediaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    url?: boolean
    thumbnailUrl?: boolean
    type?: boolean
    title?: boolean
    sortOrder?: boolean
    isPrimary?: boolean
    fileSize?: boolean
    width?: boolean
    height?: boolean
    createdAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyMedia"]>

  export type PropertyMediaSelectScalar = {
    id?: boolean
    propertyId?: boolean
    url?: boolean
    thumbnailUrl?: boolean
    type?: boolean
    title?: boolean
    sortOrder?: boolean
    isPrimary?: boolean
    fileSize?: boolean
    width?: boolean
    height?: boolean
    createdAt?: boolean
  }

  export type PropertyMediaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "propertyId" | "url" | "thumbnailUrl" | "type" | "title" | "sortOrder" | "isPrimary" | "fileSize" | "width" | "height" | "createdAt", ExtArgs["result"]["propertyMedia"]>
  export type PropertyMediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type PropertyMediaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type PropertyMediaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }

  export type $PropertyMediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PropertyMedia"
    objects: {
      property: Prisma.$PropertyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      propertyId: string
      url: string
      thumbnailUrl: string | null
      type: $Enums.MediaType
      title: string | null
      sortOrder: number
      isPrimary: boolean
      fileSize: number | null
      width: number | null
      height: number | null
      createdAt: Date
    }, ExtArgs["result"]["propertyMedia"]>
    composites: {}
  }

  type PropertyMediaGetPayload<S extends boolean | null | undefined | PropertyMediaDefaultArgs> = $Result.GetResult<Prisma.$PropertyMediaPayload, S>

  type PropertyMediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropertyMediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropertyMediaCountAggregateInputType | true
    }

  export interface PropertyMediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PropertyMedia'], meta: { name: 'PropertyMedia' } }
    /**
     * Find zero or one PropertyMedia that matches the filter.
     * @param {PropertyMediaFindUniqueArgs} args - Arguments to find a PropertyMedia
     * @example
     * // Get one PropertyMedia
     * const propertyMedia = await prisma.propertyMedia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyMediaFindUniqueArgs>(args: SelectSubset<T, PropertyMediaFindUniqueArgs<ExtArgs>>): Prisma__PropertyMediaClient<$Result.GetResult<Prisma.$PropertyMediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PropertyMedia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropertyMediaFindUniqueOrThrowArgs} args - Arguments to find a PropertyMedia
     * @example
     * // Get one PropertyMedia
     * const propertyMedia = await prisma.propertyMedia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyMediaFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyMediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyMediaClient<$Result.GetResult<Prisma.$PropertyMediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropertyMedia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyMediaFindFirstArgs} args - Arguments to find a PropertyMedia
     * @example
     * // Get one PropertyMedia
     * const propertyMedia = await prisma.propertyMedia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyMediaFindFirstArgs>(args?: SelectSubset<T, PropertyMediaFindFirstArgs<ExtArgs>>): Prisma__PropertyMediaClient<$Result.GetResult<Prisma.$PropertyMediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropertyMedia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyMediaFindFirstOrThrowArgs} args - Arguments to find a PropertyMedia
     * @example
     * // Get one PropertyMedia
     * const propertyMedia = await prisma.propertyMedia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyMediaFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyMediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyMediaClient<$Result.GetResult<Prisma.$PropertyMediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PropertyMedias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyMediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PropertyMedias
     * const propertyMedias = await prisma.propertyMedia.findMany()
     * 
     * // Get first 10 PropertyMedias
     * const propertyMedias = await prisma.propertyMedia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyMediaWithIdOnly = await prisma.propertyMedia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyMediaFindManyArgs>(args?: SelectSubset<T, PropertyMediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyMediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PropertyMedia.
     * @param {PropertyMediaCreateArgs} args - Arguments to create a PropertyMedia.
     * @example
     * // Create one PropertyMedia
     * const PropertyMedia = await prisma.propertyMedia.create({
     *   data: {
     *     // ... data to create a PropertyMedia
     *   }
     * })
     * 
     */
    create<T extends PropertyMediaCreateArgs>(args: SelectSubset<T, PropertyMediaCreateArgs<ExtArgs>>): Prisma__PropertyMediaClient<$Result.GetResult<Prisma.$PropertyMediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PropertyMedias.
     * @param {PropertyMediaCreateManyArgs} args - Arguments to create many PropertyMedias.
     * @example
     * // Create many PropertyMedias
     * const propertyMedia = await prisma.propertyMedia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyMediaCreateManyArgs>(args?: SelectSubset<T, PropertyMediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PropertyMedias and returns the data saved in the database.
     * @param {PropertyMediaCreateManyAndReturnArgs} args - Arguments to create many PropertyMedias.
     * @example
     * // Create many PropertyMedias
     * const propertyMedia = await prisma.propertyMedia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PropertyMedias and only return the `id`
     * const propertyMediaWithIdOnly = await prisma.propertyMedia.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropertyMediaCreateManyAndReturnArgs>(args?: SelectSubset<T, PropertyMediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyMediaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PropertyMedia.
     * @param {PropertyMediaDeleteArgs} args - Arguments to delete one PropertyMedia.
     * @example
     * // Delete one PropertyMedia
     * const PropertyMedia = await prisma.propertyMedia.delete({
     *   where: {
     *     // ... filter to delete one PropertyMedia
     *   }
     * })
     * 
     */
    delete<T extends PropertyMediaDeleteArgs>(args: SelectSubset<T, PropertyMediaDeleteArgs<ExtArgs>>): Prisma__PropertyMediaClient<$Result.GetResult<Prisma.$PropertyMediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PropertyMedia.
     * @param {PropertyMediaUpdateArgs} args - Arguments to update one PropertyMedia.
     * @example
     * // Update one PropertyMedia
     * const propertyMedia = await prisma.propertyMedia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyMediaUpdateArgs>(args: SelectSubset<T, PropertyMediaUpdateArgs<ExtArgs>>): Prisma__PropertyMediaClient<$Result.GetResult<Prisma.$PropertyMediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PropertyMedias.
     * @param {PropertyMediaDeleteManyArgs} args - Arguments to filter PropertyMedias to delete.
     * @example
     * // Delete a few PropertyMedias
     * const { count } = await prisma.propertyMedia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyMediaDeleteManyArgs>(args?: SelectSubset<T, PropertyMediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropertyMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyMediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PropertyMedias
     * const propertyMedia = await prisma.propertyMedia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyMediaUpdateManyArgs>(args: SelectSubset<T, PropertyMediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropertyMedias and returns the data updated in the database.
     * @param {PropertyMediaUpdateManyAndReturnArgs} args - Arguments to update many PropertyMedias.
     * @example
     * // Update many PropertyMedias
     * const propertyMedia = await prisma.propertyMedia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PropertyMedias and only return the `id`
     * const propertyMediaWithIdOnly = await prisma.propertyMedia.updateManyAndReturn({
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
    updateManyAndReturn<T extends PropertyMediaUpdateManyAndReturnArgs>(args: SelectSubset<T, PropertyMediaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyMediaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PropertyMedia.
     * @param {PropertyMediaUpsertArgs} args - Arguments to update or create a PropertyMedia.
     * @example
     * // Update or create a PropertyMedia
     * const propertyMedia = await prisma.propertyMedia.upsert({
     *   create: {
     *     // ... data to create a PropertyMedia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PropertyMedia we want to update
     *   }
     * })
     */
    upsert<T extends PropertyMediaUpsertArgs>(args: SelectSubset<T, PropertyMediaUpsertArgs<ExtArgs>>): Prisma__PropertyMediaClient<$Result.GetResult<Prisma.$PropertyMediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PropertyMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyMediaCountArgs} args - Arguments to filter PropertyMedias to count.
     * @example
     * // Count the number of PropertyMedias
     * const count = await prisma.propertyMedia.count({
     *   where: {
     *     // ... the filter for the PropertyMedias we want to count
     *   }
     * })
    **/
    count<T extends PropertyMediaCountArgs>(
      args?: Subset<T, PropertyMediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyMediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PropertyMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyMediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PropertyMediaAggregateArgs>(args: Subset<T, PropertyMediaAggregateArgs>): Prisma.PrismaPromise<GetPropertyMediaAggregateType<T>>

    /**
     * Group by PropertyMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyMediaGroupByArgs} args - Group by arguments.
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
      T extends PropertyMediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyMediaGroupByArgs['orderBy'] }
        : { orderBy?: PropertyMediaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PropertyMediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PropertyMedia model
   */
  readonly fields: PropertyMediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PropertyMedia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyMediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PropertyMedia model
   */
  interface PropertyMediaFieldRefs {
    readonly id: FieldRef<"PropertyMedia", 'String'>
    readonly propertyId: FieldRef<"PropertyMedia", 'String'>
    readonly url: FieldRef<"PropertyMedia", 'String'>
    readonly thumbnailUrl: FieldRef<"PropertyMedia", 'String'>
    readonly type: FieldRef<"PropertyMedia", 'MediaType'>
    readonly title: FieldRef<"PropertyMedia", 'String'>
    readonly sortOrder: FieldRef<"PropertyMedia", 'Int'>
    readonly isPrimary: FieldRef<"PropertyMedia", 'Boolean'>
    readonly fileSize: FieldRef<"PropertyMedia", 'Int'>
    readonly width: FieldRef<"PropertyMedia", 'Int'>
    readonly height: FieldRef<"PropertyMedia", 'Int'>
    readonly createdAt: FieldRef<"PropertyMedia", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PropertyMedia findUnique
   */
  export type PropertyMediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyMedia
     */
    select?: PropertyMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyMedia
     */
    omit?: PropertyMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyMediaInclude<ExtArgs> | null
    /**
     * Filter, which PropertyMedia to fetch.
     */
    where: PropertyMediaWhereUniqueInput
  }

  /**
   * PropertyMedia findUniqueOrThrow
   */
  export type PropertyMediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyMedia
     */
    select?: PropertyMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyMedia
     */
    omit?: PropertyMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyMediaInclude<ExtArgs> | null
    /**
     * Filter, which PropertyMedia to fetch.
     */
    where: PropertyMediaWhereUniqueInput
  }

  /**
   * PropertyMedia findFirst
   */
  export type PropertyMediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyMedia
     */
    select?: PropertyMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyMedia
     */
    omit?: PropertyMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyMediaInclude<ExtArgs> | null
    /**
     * Filter, which PropertyMedia to fetch.
     */
    where?: PropertyMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyMedias to fetch.
     */
    orderBy?: PropertyMediaOrderByWithRelationInput | PropertyMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyMedias.
     */
    cursor?: PropertyMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyMedias.
     */
    distinct?: PropertyMediaScalarFieldEnum | PropertyMediaScalarFieldEnum[]
  }

  /**
   * PropertyMedia findFirstOrThrow
   */
  export type PropertyMediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyMedia
     */
    select?: PropertyMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyMedia
     */
    omit?: PropertyMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyMediaInclude<ExtArgs> | null
    /**
     * Filter, which PropertyMedia to fetch.
     */
    where?: PropertyMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyMedias to fetch.
     */
    orderBy?: PropertyMediaOrderByWithRelationInput | PropertyMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyMedias.
     */
    cursor?: PropertyMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyMedias.
     */
    distinct?: PropertyMediaScalarFieldEnum | PropertyMediaScalarFieldEnum[]
  }

  /**
   * PropertyMedia findMany
   */
  export type PropertyMediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyMedia
     */
    select?: PropertyMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyMedia
     */
    omit?: PropertyMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyMediaInclude<ExtArgs> | null
    /**
     * Filter, which PropertyMedias to fetch.
     */
    where?: PropertyMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyMedias to fetch.
     */
    orderBy?: PropertyMediaOrderByWithRelationInput | PropertyMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PropertyMedias.
     */
    cursor?: PropertyMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyMedias.
     */
    skip?: number
    distinct?: PropertyMediaScalarFieldEnum | PropertyMediaScalarFieldEnum[]
  }

  /**
   * PropertyMedia create
   */
  export type PropertyMediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyMedia
     */
    select?: PropertyMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyMedia
     */
    omit?: PropertyMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyMediaInclude<ExtArgs> | null
    /**
     * The data needed to create a PropertyMedia.
     */
    data: XOR<PropertyMediaCreateInput, PropertyMediaUncheckedCreateInput>
  }

  /**
   * PropertyMedia createMany
   */
  export type PropertyMediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PropertyMedias.
     */
    data: PropertyMediaCreateManyInput | PropertyMediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PropertyMedia createManyAndReturn
   */
  export type PropertyMediaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyMedia
     */
    select?: PropertyMediaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyMedia
     */
    omit?: PropertyMediaOmit<ExtArgs> | null
    /**
     * The data used to create many PropertyMedias.
     */
    data: PropertyMediaCreateManyInput | PropertyMediaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyMediaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PropertyMedia update
   */
  export type PropertyMediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyMedia
     */
    select?: PropertyMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyMedia
     */
    omit?: PropertyMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyMediaInclude<ExtArgs> | null
    /**
     * The data needed to update a PropertyMedia.
     */
    data: XOR<PropertyMediaUpdateInput, PropertyMediaUncheckedUpdateInput>
    /**
     * Choose, which PropertyMedia to update.
     */
    where: PropertyMediaWhereUniqueInput
  }

  /**
   * PropertyMedia updateMany
   */
  export type PropertyMediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PropertyMedias.
     */
    data: XOR<PropertyMediaUpdateManyMutationInput, PropertyMediaUncheckedUpdateManyInput>
    /**
     * Filter which PropertyMedias to update
     */
    where?: PropertyMediaWhereInput
    /**
     * Limit how many PropertyMedias to update.
     */
    limit?: number
  }

  /**
   * PropertyMedia updateManyAndReturn
   */
  export type PropertyMediaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyMedia
     */
    select?: PropertyMediaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyMedia
     */
    omit?: PropertyMediaOmit<ExtArgs> | null
    /**
     * The data used to update PropertyMedias.
     */
    data: XOR<PropertyMediaUpdateManyMutationInput, PropertyMediaUncheckedUpdateManyInput>
    /**
     * Filter which PropertyMedias to update
     */
    where?: PropertyMediaWhereInput
    /**
     * Limit how many PropertyMedias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyMediaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PropertyMedia upsert
   */
  export type PropertyMediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyMedia
     */
    select?: PropertyMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyMedia
     */
    omit?: PropertyMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyMediaInclude<ExtArgs> | null
    /**
     * The filter to search for the PropertyMedia to update in case it exists.
     */
    where: PropertyMediaWhereUniqueInput
    /**
     * In case the PropertyMedia found by the `where` argument doesn't exist, create a new PropertyMedia with this data.
     */
    create: XOR<PropertyMediaCreateInput, PropertyMediaUncheckedCreateInput>
    /**
     * In case the PropertyMedia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyMediaUpdateInput, PropertyMediaUncheckedUpdateInput>
  }

  /**
   * PropertyMedia delete
   */
  export type PropertyMediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyMedia
     */
    select?: PropertyMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyMedia
     */
    omit?: PropertyMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyMediaInclude<ExtArgs> | null
    /**
     * Filter which PropertyMedia to delete.
     */
    where: PropertyMediaWhereUniqueInput
  }

  /**
   * PropertyMedia deleteMany
   */
  export type PropertyMediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyMedias to delete
     */
    where?: PropertyMediaWhereInput
    /**
     * Limit how many PropertyMedias to delete.
     */
    limit?: number
  }

  /**
   * PropertyMedia without action
   */
  export type PropertyMediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyMedia
     */
    select?: PropertyMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyMedia
     */
    omit?: PropertyMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyMediaInclude<ExtArgs> | null
  }


  /**
   * Model PropertyPriceHistory
   */

  export type AggregatePropertyPriceHistory = {
    _count: PropertyPriceHistoryCountAggregateOutputType | null
    _avg: PropertyPriceHistoryAvgAggregateOutputType | null
    _sum: PropertyPriceHistorySumAggregateOutputType | null
    _min: PropertyPriceHistoryMinAggregateOutputType | null
    _max: PropertyPriceHistoryMaxAggregateOutputType | null
  }

  export type PropertyPriceHistoryAvgAggregateOutputType = {
    price: Decimal | null
  }

  export type PropertyPriceHistorySumAggregateOutputType = {
    price: Decimal | null
  }

  export type PropertyPriceHistoryMinAggregateOutputType = {
    id: string | null
    propertyId: string | null
    price: Decimal | null
    currency: string | null
    changedAt: Date | null
    reason: string | null
  }

  export type PropertyPriceHistoryMaxAggregateOutputType = {
    id: string | null
    propertyId: string | null
    price: Decimal | null
    currency: string | null
    changedAt: Date | null
    reason: string | null
  }

  export type PropertyPriceHistoryCountAggregateOutputType = {
    id: number
    propertyId: number
    price: number
    currency: number
    changedAt: number
    reason: number
    _all: number
  }


  export type PropertyPriceHistoryAvgAggregateInputType = {
    price?: true
  }

  export type PropertyPriceHistorySumAggregateInputType = {
    price?: true
  }

  export type PropertyPriceHistoryMinAggregateInputType = {
    id?: true
    propertyId?: true
    price?: true
    currency?: true
    changedAt?: true
    reason?: true
  }

  export type PropertyPriceHistoryMaxAggregateInputType = {
    id?: true
    propertyId?: true
    price?: true
    currency?: true
    changedAt?: true
    reason?: true
  }

  export type PropertyPriceHistoryCountAggregateInputType = {
    id?: true
    propertyId?: true
    price?: true
    currency?: true
    changedAt?: true
    reason?: true
    _all?: true
  }

  export type PropertyPriceHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyPriceHistory to aggregate.
     */
    where?: PropertyPriceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyPriceHistories to fetch.
     */
    orderBy?: PropertyPriceHistoryOrderByWithRelationInput | PropertyPriceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyPriceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyPriceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyPriceHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PropertyPriceHistories
    **/
    _count?: true | PropertyPriceHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertyPriceHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertyPriceHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyPriceHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyPriceHistoryMaxAggregateInputType
  }

  export type GetPropertyPriceHistoryAggregateType<T extends PropertyPriceHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregatePropertyPriceHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePropertyPriceHistory[P]>
      : GetScalarType<T[P], AggregatePropertyPriceHistory[P]>
  }




  export type PropertyPriceHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyPriceHistoryWhereInput
    orderBy?: PropertyPriceHistoryOrderByWithAggregationInput | PropertyPriceHistoryOrderByWithAggregationInput[]
    by: PropertyPriceHistoryScalarFieldEnum[] | PropertyPriceHistoryScalarFieldEnum
    having?: PropertyPriceHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyPriceHistoryCountAggregateInputType | true
    _avg?: PropertyPriceHistoryAvgAggregateInputType
    _sum?: PropertyPriceHistorySumAggregateInputType
    _min?: PropertyPriceHistoryMinAggregateInputType
    _max?: PropertyPriceHistoryMaxAggregateInputType
  }

  export type PropertyPriceHistoryGroupByOutputType = {
    id: string
    propertyId: string
    price: Decimal
    currency: string
    changedAt: Date
    reason: string | null
    _count: PropertyPriceHistoryCountAggregateOutputType | null
    _avg: PropertyPriceHistoryAvgAggregateOutputType | null
    _sum: PropertyPriceHistorySumAggregateOutputType | null
    _min: PropertyPriceHistoryMinAggregateOutputType | null
    _max: PropertyPriceHistoryMaxAggregateOutputType | null
  }

  type GetPropertyPriceHistoryGroupByPayload<T extends PropertyPriceHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyPriceHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyPriceHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyPriceHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyPriceHistoryGroupByOutputType[P]>
        }
      >
    >


  export type PropertyPriceHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    price?: boolean
    currency?: boolean
    changedAt?: boolean
    reason?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyPriceHistory"]>

  export type PropertyPriceHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    price?: boolean
    currency?: boolean
    changedAt?: boolean
    reason?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyPriceHistory"]>

  export type PropertyPriceHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    price?: boolean
    currency?: boolean
    changedAt?: boolean
    reason?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyPriceHistory"]>

  export type PropertyPriceHistorySelectScalar = {
    id?: boolean
    propertyId?: boolean
    price?: boolean
    currency?: boolean
    changedAt?: boolean
    reason?: boolean
  }

  export type PropertyPriceHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "propertyId" | "price" | "currency" | "changedAt" | "reason", ExtArgs["result"]["propertyPriceHistory"]>
  export type PropertyPriceHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type PropertyPriceHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type PropertyPriceHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }

  export type $PropertyPriceHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PropertyPriceHistory"
    objects: {
      property: Prisma.$PropertyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      propertyId: string
      price: Prisma.Decimal
      currency: string
      changedAt: Date
      reason: string | null
    }, ExtArgs["result"]["propertyPriceHistory"]>
    composites: {}
  }

  type PropertyPriceHistoryGetPayload<S extends boolean | null | undefined | PropertyPriceHistoryDefaultArgs> = $Result.GetResult<Prisma.$PropertyPriceHistoryPayload, S>

  type PropertyPriceHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropertyPriceHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropertyPriceHistoryCountAggregateInputType | true
    }

  export interface PropertyPriceHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PropertyPriceHistory'], meta: { name: 'PropertyPriceHistory' } }
    /**
     * Find zero or one PropertyPriceHistory that matches the filter.
     * @param {PropertyPriceHistoryFindUniqueArgs} args - Arguments to find a PropertyPriceHistory
     * @example
     * // Get one PropertyPriceHistory
     * const propertyPriceHistory = await prisma.propertyPriceHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyPriceHistoryFindUniqueArgs>(args: SelectSubset<T, PropertyPriceHistoryFindUniqueArgs<ExtArgs>>): Prisma__PropertyPriceHistoryClient<$Result.GetResult<Prisma.$PropertyPriceHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PropertyPriceHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropertyPriceHistoryFindUniqueOrThrowArgs} args - Arguments to find a PropertyPriceHistory
     * @example
     * // Get one PropertyPriceHistory
     * const propertyPriceHistory = await prisma.propertyPriceHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyPriceHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyPriceHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyPriceHistoryClient<$Result.GetResult<Prisma.$PropertyPriceHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropertyPriceHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyPriceHistoryFindFirstArgs} args - Arguments to find a PropertyPriceHistory
     * @example
     * // Get one PropertyPriceHistory
     * const propertyPriceHistory = await prisma.propertyPriceHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyPriceHistoryFindFirstArgs>(args?: SelectSubset<T, PropertyPriceHistoryFindFirstArgs<ExtArgs>>): Prisma__PropertyPriceHistoryClient<$Result.GetResult<Prisma.$PropertyPriceHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropertyPriceHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyPriceHistoryFindFirstOrThrowArgs} args - Arguments to find a PropertyPriceHistory
     * @example
     * // Get one PropertyPriceHistory
     * const propertyPriceHistory = await prisma.propertyPriceHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyPriceHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyPriceHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyPriceHistoryClient<$Result.GetResult<Prisma.$PropertyPriceHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PropertyPriceHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyPriceHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PropertyPriceHistories
     * const propertyPriceHistories = await prisma.propertyPriceHistory.findMany()
     * 
     * // Get first 10 PropertyPriceHistories
     * const propertyPriceHistories = await prisma.propertyPriceHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyPriceHistoryWithIdOnly = await prisma.propertyPriceHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyPriceHistoryFindManyArgs>(args?: SelectSubset<T, PropertyPriceHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPriceHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PropertyPriceHistory.
     * @param {PropertyPriceHistoryCreateArgs} args - Arguments to create a PropertyPriceHistory.
     * @example
     * // Create one PropertyPriceHistory
     * const PropertyPriceHistory = await prisma.propertyPriceHistory.create({
     *   data: {
     *     // ... data to create a PropertyPriceHistory
     *   }
     * })
     * 
     */
    create<T extends PropertyPriceHistoryCreateArgs>(args: SelectSubset<T, PropertyPriceHistoryCreateArgs<ExtArgs>>): Prisma__PropertyPriceHistoryClient<$Result.GetResult<Prisma.$PropertyPriceHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PropertyPriceHistories.
     * @param {PropertyPriceHistoryCreateManyArgs} args - Arguments to create many PropertyPriceHistories.
     * @example
     * // Create many PropertyPriceHistories
     * const propertyPriceHistory = await prisma.propertyPriceHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyPriceHistoryCreateManyArgs>(args?: SelectSubset<T, PropertyPriceHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PropertyPriceHistories and returns the data saved in the database.
     * @param {PropertyPriceHistoryCreateManyAndReturnArgs} args - Arguments to create many PropertyPriceHistories.
     * @example
     * // Create many PropertyPriceHistories
     * const propertyPriceHistory = await prisma.propertyPriceHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PropertyPriceHistories and only return the `id`
     * const propertyPriceHistoryWithIdOnly = await prisma.propertyPriceHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropertyPriceHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, PropertyPriceHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPriceHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PropertyPriceHistory.
     * @param {PropertyPriceHistoryDeleteArgs} args - Arguments to delete one PropertyPriceHistory.
     * @example
     * // Delete one PropertyPriceHistory
     * const PropertyPriceHistory = await prisma.propertyPriceHistory.delete({
     *   where: {
     *     // ... filter to delete one PropertyPriceHistory
     *   }
     * })
     * 
     */
    delete<T extends PropertyPriceHistoryDeleteArgs>(args: SelectSubset<T, PropertyPriceHistoryDeleteArgs<ExtArgs>>): Prisma__PropertyPriceHistoryClient<$Result.GetResult<Prisma.$PropertyPriceHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PropertyPriceHistory.
     * @param {PropertyPriceHistoryUpdateArgs} args - Arguments to update one PropertyPriceHistory.
     * @example
     * // Update one PropertyPriceHistory
     * const propertyPriceHistory = await prisma.propertyPriceHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyPriceHistoryUpdateArgs>(args: SelectSubset<T, PropertyPriceHistoryUpdateArgs<ExtArgs>>): Prisma__PropertyPriceHistoryClient<$Result.GetResult<Prisma.$PropertyPriceHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PropertyPriceHistories.
     * @param {PropertyPriceHistoryDeleteManyArgs} args - Arguments to filter PropertyPriceHistories to delete.
     * @example
     * // Delete a few PropertyPriceHistories
     * const { count } = await prisma.propertyPriceHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyPriceHistoryDeleteManyArgs>(args?: SelectSubset<T, PropertyPriceHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropertyPriceHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyPriceHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PropertyPriceHistories
     * const propertyPriceHistory = await prisma.propertyPriceHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyPriceHistoryUpdateManyArgs>(args: SelectSubset<T, PropertyPriceHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropertyPriceHistories and returns the data updated in the database.
     * @param {PropertyPriceHistoryUpdateManyAndReturnArgs} args - Arguments to update many PropertyPriceHistories.
     * @example
     * // Update many PropertyPriceHistories
     * const propertyPriceHistory = await prisma.propertyPriceHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PropertyPriceHistories and only return the `id`
     * const propertyPriceHistoryWithIdOnly = await prisma.propertyPriceHistory.updateManyAndReturn({
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
    updateManyAndReturn<T extends PropertyPriceHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, PropertyPriceHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPriceHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PropertyPriceHistory.
     * @param {PropertyPriceHistoryUpsertArgs} args - Arguments to update or create a PropertyPriceHistory.
     * @example
     * // Update or create a PropertyPriceHistory
     * const propertyPriceHistory = await prisma.propertyPriceHistory.upsert({
     *   create: {
     *     // ... data to create a PropertyPriceHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PropertyPriceHistory we want to update
     *   }
     * })
     */
    upsert<T extends PropertyPriceHistoryUpsertArgs>(args: SelectSubset<T, PropertyPriceHistoryUpsertArgs<ExtArgs>>): Prisma__PropertyPriceHistoryClient<$Result.GetResult<Prisma.$PropertyPriceHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PropertyPriceHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyPriceHistoryCountArgs} args - Arguments to filter PropertyPriceHistories to count.
     * @example
     * // Count the number of PropertyPriceHistories
     * const count = await prisma.propertyPriceHistory.count({
     *   where: {
     *     // ... the filter for the PropertyPriceHistories we want to count
     *   }
     * })
    **/
    count<T extends PropertyPriceHistoryCountArgs>(
      args?: Subset<T, PropertyPriceHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyPriceHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PropertyPriceHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyPriceHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PropertyPriceHistoryAggregateArgs>(args: Subset<T, PropertyPriceHistoryAggregateArgs>): Prisma.PrismaPromise<GetPropertyPriceHistoryAggregateType<T>>

    /**
     * Group by PropertyPriceHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyPriceHistoryGroupByArgs} args - Group by arguments.
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
      T extends PropertyPriceHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyPriceHistoryGroupByArgs['orderBy'] }
        : { orderBy?: PropertyPriceHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PropertyPriceHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyPriceHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PropertyPriceHistory model
   */
  readonly fields: PropertyPriceHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PropertyPriceHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyPriceHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PropertyPriceHistory model
   */
  interface PropertyPriceHistoryFieldRefs {
    readonly id: FieldRef<"PropertyPriceHistory", 'String'>
    readonly propertyId: FieldRef<"PropertyPriceHistory", 'String'>
    readonly price: FieldRef<"PropertyPriceHistory", 'Decimal'>
    readonly currency: FieldRef<"PropertyPriceHistory", 'String'>
    readonly changedAt: FieldRef<"PropertyPriceHistory", 'DateTime'>
    readonly reason: FieldRef<"PropertyPriceHistory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PropertyPriceHistory findUnique
   */
  export type PropertyPriceHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyPriceHistory
     */
    select?: PropertyPriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyPriceHistory
     */
    omit?: PropertyPriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyPriceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PropertyPriceHistory to fetch.
     */
    where: PropertyPriceHistoryWhereUniqueInput
  }

  /**
   * PropertyPriceHistory findUniqueOrThrow
   */
  export type PropertyPriceHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyPriceHistory
     */
    select?: PropertyPriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyPriceHistory
     */
    omit?: PropertyPriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyPriceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PropertyPriceHistory to fetch.
     */
    where: PropertyPriceHistoryWhereUniqueInput
  }

  /**
   * PropertyPriceHistory findFirst
   */
  export type PropertyPriceHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyPriceHistory
     */
    select?: PropertyPriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyPriceHistory
     */
    omit?: PropertyPriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyPriceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PropertyPriceHistory to fetch.
     */
    where?: PropertyPriceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyPriceHistories to fetch.
     */
    orderBy?: PropertyPriceHistoryOrderByWithRelationInput | PropertyPriceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyPriceHistories.
     */
    cursor?: PropertyPriceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyPriceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyPriceHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyPriceHistories.
     */
    distinct?: PropertyPriceHistoryScalarFieldEnum | PropertyPriceHistoryScalarFieldEnum[]
  }

  /**
   * PropertyPriceHistory findFirstOrThrow
   */
  export type PropertyPriceHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyPriceHistory
     */
    select?: PropertyPriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyPriceHistory
     */
    omit?: PropertyPriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyPriceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PropertyPriceHistory to fetch.
     */
    where?: PropertyPriceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyPriceHistories to fetch.
     */
    orderBy?: PropertyPriceHistoryOrderByWithRelationInput | PropertyPriceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyPriceHistories.
     */
    cursor?: PropertyPriceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyPriceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyPriceHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyPriceHistories.
     */
    distinct?: PropertyPriceHistoryScalarFieldEnum | PropertyPriceHistoryScalarFieldEnum[]
  }

  /**
   * PropertyPriceHistory findMany
   */
  export type PropertyPriceHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyPriceHistory
     */
    select?: PropertyPriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyPriceHistory
     */
    omit?: PropertyPriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyPriceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PropertyPriceHistories to fetch.
     */
    where?: PropertyPriceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyPriceHistories to fetch.
     */
    orderBy?: PropertyPriceHistoryOrderByWithRelationInput | PropertyPriceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PropertyPriceHistories.
     */
    cursor?: PropertyPriceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyPriceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyPriceHistories.
     */
    skip?: number
    distinct?: PropertyPriceHistoryScalarFieldEnum | PropertyPriceHistoryScalarFieldEnum[]
  }

  /**
   * PropertyPriceHistory create
   */
  export type PropertyPriceHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyPriceHistory
     */
    select?: PropertyPriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyPriceHistory
     */
    omit?: PropertyPriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyPriceHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a PropertyPriceHistory.
     */
    data: XOR<PropertyPriceHistoryCreateInput, PropertyPriceHistoryUncheckedCreateInput>
  }

  /**
   * PropertyPriceHistory createMany
   */
  export type PropertyPriceHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PropertyPriceHistories.
     */
    data: PropertyPriceHistoryCreateManyInput | PropertyPriceHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PropertyPriceHistory createManyAndReturn
   */
  export type PropertyPriceHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyPriceHistory
     */
    select?: PropertyPriceHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyPriceHistory
     */
    omit?: PropertyPriceHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many PropertyPriceHistories.
     */
    data: PropertyPriceHistoryCreateManyInput | PropertyPriceHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyPriceHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PropertyPriceHistory update
   */
  export type PropertyPriceHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyPriceHistory
     */
    select?: PropertyPriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyPriceHistory
     */
    omit?: PropertyPriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyPriceHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a PropertyPriceHistory.
     */
    data: XOR<PropertyPriceHistoryUpdateInput, PropertyPriceHistoryUncheckedUpdateInput>
    /**
     * Choose, which PropertyPriceHistory to update.
     */
    where: PropertyPriceHistoryWhereUniqueInput
  }

  /**
   * PropertyPriceHistory updateMany
   */
  export type PropertyPriceHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PropertyPriceHistories.
     */
    data: XOR<PropertyPriceHistoryUpdateManyMutationInput, PropertyPriceHistoryUncheckedUpdateManyInput>
    /**
     * Filter which PropertyPriceHistories to update
     */
    where?: PropertyPriceHistoryWhereInput
    /**
     * Limit how many PropertyPriceHistories to update.
     */
    limit?: number
  }

  /**
   * PropertyPriceHistory updateManyAndReturn
   */
  export type PropertyPriceHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyPriceHistory
     */
    select?: PropertyPriceHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyPriceHistory
     */
    omit?: PropertyPriceHistoryOmit<ExtArgs> | null
    /**
     * The data used to update PropertyPriceHistories.
     */
    data: XOR<PropertyPriceHistoryUpdateManyMutationInput, PropertyPriceHistoryUncheckedUpdateManyInput>
    /**
     * Filter which PropertyPriceHistories to update
     */
    where?: PropertyPriceHistoryWhereInput
    /**
     * Limit how many PropertyPriceHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyPriceHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PropertyPriceHistory upsert
   */
  export type PropertyPriceHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyPriceHistory
     */
    select?: PropertyPriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyPriceHistory
     */
    omit?: PropertyPriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyPriceHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the PropertyPriceHistory to update in case it exists.
     */
    where: PropertyPriceHistoryWhereUniqueInput
    /**
     * In case the PropertyPriceHistory found by the `where` argument doesn't exist, create a new PropertyPriceHistory with this data.
     */
    create: XOR<PropertyPriceHistoryCreateInput, PropertyPriceHistoryUncheckedCreateInput>
    /**
     * In case the PropertyPriceHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyPriceHistoryUpdateInput, PropertyPriceHistoryUncheckedUpdateInput>
  }

  /**
   * PropertyPriceHistory delete
   */
  export type PropertyPriceHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyPriceHistory
     */
    select?: PropertyPriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyPriceHistory
     */
    omit?: PropertyPriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyPriceHistoryInclude<ExtArgs> | null
    /**
     * Filter which PropertyPriceHistory to delete.
     */
    where: PropertyPriceHistoryWhereUniqueInput
  }

  /**
   * PropertyPriceHistory deleteMany
   */
  export type PropertyPriceHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyPriceHistories to delete
     */
    where?: PropertyPriceHistoryWhereInput
    /**
     * Limit how many PropertyPriceHistories to delete.
     */
    limit?: number
  }

  /**
   * PropertyPriceHistory without action
   */
  export type PropertyPriceHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyPriceHistory
     */
    select?: PropertyPriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyPriceHistory
     */
    omit?: PropertyPriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyPriceHistoryInclude<ExtArgs> | null
  }


  /**
   * Model PropertyAmenity
   */

  export type AggregatePropertyAmenity = {
    _count: PropertyAmenityCountAggregateOutputType | null
    _min: PropertyAmenityMinAggregateOutputType | null
    _max: PropertyAmenityMaxAggregateOutputType | null
  }

  export type PropertyAmenityMinAggregateOutputType = {
    id: string | null
    propertyId: string | null
    name: string | null
    category: string | null
    icon: string | null
  }

  export type PropertyAmenityMaxAggregateOutputType = {
    id: string | null
    propertyId: string | null
    name: string | null
    category: string | null
    icon: string | null
  }

  export type PropertyAmenityCountAggregateOutputType = {
    id: number
    propertyId: number
    name: number
    category: number
    icon: number
    _all: number
  }


  export type PropertyAmenityMinAggregateInputType = {
    id?: true
    propertyId?: true
    name?: true
    category?: true
    icon?: true
  }

  export type PropertyAmenityMaxAggregateInputType = {
    id?: true
    propertyId?: true
    name?: true
    category?: true
    icon?: true
  }

  export type PropertyAmenityCountAggregateInputType = {
    id?: true
    propertyId?: true
    name?: true
    category?: true
    icon?: true
    _all?: true
  }

  export type PropertyAmenityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyAmenity to aggregate.
     */
    where?: PropertyAmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyAmenities to fetch.
     */
    orderBy?: PropertyAmenityOrderByWithRelationInput | PropertyAmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyAmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyAmenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyAmenities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PropertyAmenities
    **/
    _count?: true | PropertyAmenityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyAmenityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyAmenityMaxAggregateInputType
  }

  export type GetPropertyAmenityAggregateType<T extends PropertyAmenityAggregateArgs> = {
        [P in keyof T & keyof AggregatePropertyAmenity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePropertyAmenity[P]>
      : GetScalarType<T[P], AggregatePropertyAmenity[P]>
  }




  export type PropertyAmenityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyAmenityWhereInput
    orderBy?: PropertyAmenityOrderByWithAggregationInput | PropertyAmenityOrderByWithAggregationInput[]
    by: PropertyAmenityScalarFieldEnum[] | PropertyAmenityScalarFieldEnum
    having?: PropertyAmenityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyAmenityCountAggregateInputType | true
    _min?: PropertyAmenityMinAggregateInputType
    _max?: PropertyAmenityMaxAggregateInputType
  }

  export type PropertyAmenityGroupByOutputType = {
    id: string
    propertyId: string
    name: string
    category: string | null
    icon: string | null
    _count: PropertyAmenityCountAggregateOutputType | null
    _min: PropertyAmenityMinAggregateOutputType | null
    _max: PropertyAmenityMaxAggregateOutputType | null
  }

  type GetPropertyAmenityGroupByPayload<T extends PropertyAmenityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyAmenityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyAmenityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyAmenityGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyAmenityGroupByOutputType[P]>
        }
      >
    >


  export type PropertyAmenitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    name?: boolean
    category?: boolean
    icon?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyAmenity"]>

  export type PropertyAmenitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    name?: boolean
    category?: boolean
    icon?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyAmenity"]>

  export type PropertyAmenitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    name?: boolean
    category?: boolean
    icon?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyAmenity"]>

  export type PropertyAmenitySelectScalar = {
    id?: boolean
    propertyId?: boolean
    name?: boolean
    category?: boolean
    icon?: boolean
  }

  export type PropertyAmenityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "propertyId" | "name" | "category" | "icon", ExtArgs["result"]["propertyAmenity"]>
  export type PropertyAmenityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type PropertyAmenityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type PropertyAmenityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }

  export type $PropertyAmenityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PropertyAmenity"
    objects: {
      property: Prisma.$PropertyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      propertyId: string
      name: string
      category: string | null
      icon: string | null
    }, ExtArgs["result"]["propertyAmenity"]>
    composites: {}
  }

  type PropertyAmenityGetPayload<S extends boolean | null | undefined | PropertyAmenityDefaultArgs> = $Result.GetResult<Prisma.$PropertyAmenityPayload, S>

  type PropertyAmenityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropertyAmenityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropertyAmenityCountAggregateInputType | true
    }

  export interface PropertyAmenityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PropertyAmenity'], meta: { name: 'PropertyAmenity' } }
    /**
     * Find zero or one PropertyAmenity that matches the filter.
     * @param {PropertyAmenityFindUniqueArgs} args - Arguments to find a PropertyAmenity
     * @example
     * // Get one PropertyAmenity
     * const propertyAmenity = await prisma.propertyAmenity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyAmenityFindUniqueArgs>(args: SelectSubset<T, PropertyAmenityFindUniqueArgs<ExtArgs>>): Prisma__PropertyAmenityClient<$Result.GetResult<Prisma.$PropertyAmenityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PropertyAmenity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropertyAmenityFindUniqueOrThrowArgs} args - Arguments to find a PropertyAmenity
     * @example
     * // Get one PropertyAmenity
     * const propertyAmenity = await prisma.propertyAmenity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyAmenityFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyAmenityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyAmenityClient<$Result.GetResult<Prisma.$PropertyAmenityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropertyAmenity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAmenityFindFirstArgs} args - Arguments to find a PropertyAmenity
     * @example
     * // Get one PropertyAmenity
     * const propertyAmenity = await prisma.propertyAmenity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyAmenityFindFirstArgs>(args?: SelectSubset<T, PropertyAmenityFindFirstArgs<ExtArgs>>): Prisma__PropertyAmenityClient<$Result.GetResult<Prisma.$PropertyAmenityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropertyAmenity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAmenityFindFirstOrThrowArgs} args - Arguments to find a PropertyAmenity
     * @example
     * // Get one PropertyAmenity
     * const propertyAmenity = await prisma.propertyAmenity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyAmenityFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyAmenityFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyAmenityClient<$Result.GetResult<Prisma.$PropertyAmenityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PropertyAmenities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAmenityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PropertyAmenities
     * const propertyAmenities = await prisma.propertyAmenity.findMany()
     * 
     * // Get first 10 PropertyAmenities
     * const propertyAmenities = await prisma.propertyAmenity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyAmenityWithIdOnly = await prisma.propertyAmenity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyAmenityFindManyArgs>(args?: SelectSubset<T, PropertyAmenityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyAmenityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PropertyAmenity.
     * @param {PropertyAmenityCreateArgs} args - Arguments to create a PropertyAmenity.
     * @example
     * // Create one PropertyAmenity
     * const PropertyAmenity = await prisma.propertyAmenity.create({
     *   data: {
     *     // ... data to create a PropertyAmenity
     *   }
     * })
     * 
     */
    create<T extends PropertyAmenityCreateArgs>(args: SelectSubset<T, PropertyAmenityCreateArgs<ExtArgs>>): Prisma__PropertyAmenityClient<$Result.GetResult<Prisma.$PropertyAmenityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PropertyAmenities.
     * @param {PropertyAmenityCreateManyArgs} args - Arguments to create many PropertyAmenities.
     * @example
     * // Create many PropertyAmenities
     * const propertyAmenity = await prisma.propertyAmenity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyAmenityCreateManyArgs>(args?: SelectSubset<T, PropertyAmenityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PropertyAmenities and returns the data saved in the database.
     * @param {PropertyAmenityCreateManyAndReturnArgs} args - Arguments to create many PropertyAmenities.
     * @example
     * // Create many PropertyAmenities
     * const propertyAmenity = await prisma.propertyAmenity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PropertyAmenities and only return the `id`
     * const propertyAmenityWithIdOnly = await prisma.propertyAmenity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropertyAmenityCreateManyAndReturnArgs>(args?: SelectSubset<T, PropertyAmenityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyAmenityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PropertyAmenity.
     * @param {PropertyAmenityDeleteArgs} args - Arguments to delete one PropertyAmenity.
     * @example
     * // Delete one PropertyAmenity
     * const PropertyAmenity = await prisma.propertyAmenity.delete({
     *   where: {
     *     // ... filter to delete one PropertyAmenity
     *   }
     * })
     * 
     */
    delete<T extends PropertyAmenityDeleteArgs>(args: SelectSubset<T, PropertyAmenityDeleteArgs<ExtArgs>>): Prisma__PropertyAmenityClient<$Result.GetResult<Prisma.$PropertyAmenityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PropertyAmenity.
     * @param {PropertyAmenityUpdateArgs} args - Arguments to update one PropertyAmenity.
     * @example
     * // Update one PropertyAmenity
     * const propertyAmenity = await prisma.propertyAmenity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyAmenityUpdateArgs>(args: SelectSubset<T, PropertyAmenityUpdateArgs<ExtArgs>>): Prisma__PropertyAmenityClient<$Result.GetResult<Prisma.$PropertyAmenityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PropertyAmenities.
     * @param {PropertyAmenityDeleteManyArgs} args - Arguments to filter PropertyAmenities to delete.
     * @example
     * // Delete a few PropertyAmenities
     * const { count } = await prisma.propertyAmenity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyAmenityDeleteManyArgs>(args?: SelectSubset<T, PropertyAmenityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropertyAmenities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAmenityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PropertyAmenities
     * const propertyAmenity = await prisma.propertyAmenity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyAmenityUpdateManyArgs>(args: SelectSubset<T, PropertyAmenityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropertyAmenities and returns the data updated in the database.
     * @param {PropertyAmenityUpdateManyAndReturnArgs} args - Arguments to update many PropertyAmenities.
     * @example
     * // Update many PropertyAmenities
     * const propertyAmenity = await prisma.propertyAmenity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PropertyAmenities and only return the `id`
     * const propertyAmenityWithIdOnly = await prisma.propertyAmenity.updateManyAndReturn({
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
    updateManyAndReturn<T extends PropertyAmenityUpdateManyAndReturnArgs>(args: SelectSubset<T, PropertyAmenityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyAmenityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PropertyAmenity.
     * @param {PropertyAmenityUpsertArgs} args - Arguments to update or create a PropertyAmenity.
     * @example
     * // Update or create a PropertyAmenity
     * const propertyAmenity = await prisma.propertyAmenity.upsert({
     *   create: {
     *     // ... data to create a PropertyAmenity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PropertyAmenity we want to update
     *   }
     * })
     */
    upsert<T extends PropertyAmenityUpsertArgs>(args: SelectSubset<T, PropertyAmenityUpsertArgs<ExtArgs>>): Prisma__PropertyAmenityClient<$Result.GetResult<Prisma.$PropertyAmenityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PropertyAmenities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAmenityCountArgs} args - Arguments to filter PropertyAmenities to count.
     * @example
     * // Count the number of PropertyAmenities
     * const count = await prisma.propertyAmenity.count({
     *   where: {
     *     // ... the filter for the PropertyAmenities we want to count
     *   }
     * })
    **/
    count<T extends PropertyAmenityCountArgs>(
      args?: Subset<T, PropertyAmenityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyAmenityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PropertyAmenity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAmenityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PropertyAmenityAggregateArgs>(args: Subset<T, PropertyAmenityAggregateArgs>): Prisma.PrismaPromise<GetPropertyAmenityAggregateType<T>>

    /**
     * Group by PropertyAmenity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAmenityGroupByArgs} args - Group by arguments.
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
      T extends PropertyAmenityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyAmenityGroupByArgs['orderBy'] }
        : { orderBy?: PropertyAmenityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PropertyAmenityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyAmenityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PropertyAmenity model
   */
  readonly fields: PropertyAmenityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PropertyAmenity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyAmenityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PropertyAmenity model
   */
  interface PropertyAmenityFieldRefs {
    readonly id: FieldRef<"PropertyAmenity", 'String'>
    readonly propertyId: FieldRef<"PropertyAmenity", 'String'>
    readonly name: FieldRef<"PropertyAmenity", 'String'>
    readonly category: FieldRef<"PropertyAmenity", 'String'>
    readonly icon: FieldRef<"PropertyAmenity", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PropertyAmenity findUnique
   */
  export type PropertyAmenityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyAmenity
     */
    select?: PropertyAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyAmenity
     */
    omit?: PropertyAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyAmenityInclude<ExtArgs> | null
    /**
     * Filter, which PropertyAmenity to fetch.
     */
    where: PropertyAmenityWhereUniqueInput
  }

  /**
   * PropertyAmenity findUniqueOrThrow
   */
  export type PropertyAmenityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyAmenity
     */
    select?: PropertyAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyAmenity
     */
    omit?: PropertyAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyAmenityInclude<ExtArgs> | null
    /**
     * Filter, which PropertyAmenity to fetch.
     */
    where: PropertyAmenityWhereUniqueInput
  }

  /**
   * PropertyAmenity findFirst
   */
  export type PropertyAmenityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyAmenity
     */
    select?: PropertyAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyAmenity
     */
    omit?: PropertyAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyAmenityInclude<ExtArgs> | null
    /**
     * Filter, which PropertyAmenity to fetch.
     */
    where?: PropertyAmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyAmenities to fetch.
     */
    orderBy?: PropertyAmenityOrderByWithRelationInput | PropertyAmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyAmenities.
     */
    cursor?: PropertyAmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyAmenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyAmenities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyAmenities.
     */
    distinct?: PropertyAmenityScalarFieldEnum | PropertyAmenityScalarFieldEnum[]
  }

  /**
   * PropertyAmenity findFirstOrThrow
   */
  export type PropertyAmenityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyAmenity
     */
    select?: PropertyAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyAmenity
     */
    omit?: PropertyAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyAmenityInclude<ExtArgs> | null
    /**
     * Filter, which PropertyAmenity to fetch.
     */
    where?: PropertyAmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyAmenities to fetch.
     */
    orderBy?: PropertyAmenityOrderByWithRelationInput | PropertyAmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyAmenities.
     */
    cursor?: PropertyAmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyAmenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyAmenities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyAmenities.
     */
    distinct?: PropertyAmenityScalarFieldEnum | PropertyAmenityScalarFieldEnum[]
  }

  /**
   * PropertyAmenity findMany
   */
  export type PropertyAmenityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyAmenity
     */
    select?: PropertyAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyAmenity
     */
    omit?: PropertyAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyAmenityInclude<ExtArgs> | null
    /**
     * Filter, which PropertyAmenities to fetch.
     */
    where?: PropertyAmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyAmenities to fetch.
     */
    orderBy?: PropertyAmenityOrderByWithRelationInput | PropertyAmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PropertyAmenities.
     */
    cursor?: PropertyAmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyAmenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyAmenities.
     */
    skip?: number
    distinct?: PropertyAmenityScalarFieldEnum | PropertyAmenityScalarFieldEnum[]
  }

  /**
   * PropertyAmenity create
   */
  export type PropertyAmenityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyAmenity
     */
    select?: PropertyAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyAmenity
     */
    omit?: PropertyAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyAmenityInclude<ExtArgs> | null
    /**
     * The data needed to create a PropertyAmenity.
     */
    data: XOR<PropertyAmenityCreateInput, PropertyAmenityUncheckedCreateInput>
  }

  /**
   * PropertyAmenity createMany
   */
  export type PropertyAmenityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PropertyAmenities.
     */
    data: PropertyAmenityCreateManyInput | PropertyAmenityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PropertyAmenity createManyAndReturn
   */
  export type PropertyAmenityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyAmenity
     */
    select?: PropertyAmenitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyAmenity
     */
    omit?: PropertyAmenityOmit<ExtArgs> | null
    /**
     * The data used to create many PropertyAmenities.
     */
    data: PropertyAmenityCreateManyInput | PropertyAmenityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyAmenityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PropertyAmenity update
   */
  export type PropertyAmenityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyAmenity
     */
    select?: PropertyAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyAmenity
     */
    omit?: PropertyAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyAmenityInclude<ExtArgs> | null
    /**
     * The data needed to update a PropertyAmenity.
     */
    data: XOR<PropertyAmenityUpdateInput, PropertyAmenityUncheckedUpdateInput>
    /**
     * Choose, which PropertyAmenity to update.
     */
    where: PropertyAmenityWhereUniqueInput
  }

  /**
   * PropertyAmenity updateMany
   */
  export type PropertyAmenityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PropertyAmenities.
     */
    data: XOR<PropertyAmenityUpdateManyMutationInput, PropertyAmenityUncheckedUpdateManyInput>
    /**
     * Filter which PropertyAmenities to update
     */
    where?: PropertyAmenityWhereInput
    /**
     * Limit how many PropertyAmenities to update.
     */
    limit?: number
  }

  /**
   * PropertyAmenity updateManyAndReturn
   */
  export type PropertyAmenityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyAmenity
     */
    select?: PropertyAmenitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyAmenity
     */
    omit?: PropertyAmenityOmit<ExtArgs> | null
    /**
     * The data used to update PropertyAmenities.
     */
    data: XOR<PropertyAmenityUpdateManyMutationInput, PropertyAmenityUncheckedUpdateManyInput>
    /**
     * Filter which PropertyAmenities to update
     */
    where?: PropertyAmenityWhereInput
    /**
     * Limit how many PropertyAmenities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyAmenityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PropertyAmenity upsert
   */
  export type PropertyAmenityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyAmenity
     */
    select?: PropertyAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyAmenity
     */
    omit?: PropertyAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyAmenityInclude<ExtArgs> | null
    /**
     * The filter to search for the PropertyAmenity to update in case it exists.
     */
    where: PropertyAmenityWhereUniqueInput
    /**
     * In case the PropertyAmenity found by the `where` argument doesn't exist, create a new PropertyAmenity with this data.
     */
    create: XOR<PropertyAmenityCreateInput, PropertyAmenityUncheckedCreateInput>
    /**
     * In case the PropertyAmenity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyAmenityUpdateInput, PropertyAmenityUncheckedUpdateInput>
  }

  /**
   * PropertyAmenity delete
   */
  export type PropertyAmenityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyAmenity
     */
    select?: PropertyAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyAmenity
     */
    omit?: PropertyAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyAmenityInclude<ExtArgs> | null
    /**
     * Filter which PropertyAmenity to delete.
     */
    where: PropertyAmenityWhereUniqueInput
  }

  /**
   * PropertyAmenity deleteMany
   */
  export type PropertyAmenityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyAmenities to delete
     */
    where?: PropertyAmenityWhereInput
    /**
     * Limit how many PropertyAmenities to delete.
     */
    limit?: number
  }

  /**
   * PropertyAmenity without action
   */
  export type PropertyAmenityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyAmenity
     */
    select?: PropertyAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyAmenity
     */
    omit?: PropertyAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyAmenityInclude<ExtArgs> | null
  }


  /**
   * Model Favorite
   */

  export type AggregateFavorite = {
    _count: FavoriteCountAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  export type FavoriteMinAggregateOutputType = {
    id: string | null
    userId: string | null
    propertyId: string | null
    createdAt: Date | null
  }

  export type FavoriteMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    propertyId: string | null
    createdAt: Date | null
  }

  export type FavoriteCountAggregateOutputType = {
    id: number
    userId: number
    propertyId: number
    createdAt: number
    _all: number
  }


  export type FavoriteMinAggregateInputType = {
    id?: true
    userId?: true
    propertyId?: true
    createdAt?: true
  }

  export type FavoriteMaxAggregateInputType = {
    id?: true
    userId?: true
    propertyId?: true
    createdAt?: true
  }

  export type FavoriteCountAggregateInputType = {
    id?: true
    userId?: true
    propertyId?: true
    createdAt?: true
    _all?: true
  }

  export type FavoriteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorite to aggregate.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Favorites
    **/
    _count?: true | FavoriteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoriteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoriteMaxAggregateInputType
  }

  export type GetFavoriteAggregateType<T extends FavoriteAggregateArgs> = {
        [P in keyof T & keyof AggregateFavorite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavorite[P]>
      : GetScalarType<T[P], AggregateFavorite[P]>
  }




  export type FavoriteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithAggregationInput | FavoriteOrderByWithAggregationInput[]
    by: FavoriteScalarFieldEnum[] | FavoriteScalarFieldEnum
    having?: FavoriteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoriteCountAggregateInputType | true
    _min?: FavoriteMinAggregateInputType
    _max?: FavoriteMaxAggregateInputType
  }

  export type FavoriteGroupByOutputType = {
    id: string
    userId: string
    propertyId: string
    createdAt: Date
    _count: FavoriteCountAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  type GetFavoriteGroupByPayload<T extends FavoriteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoriteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoriteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
            : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
        }
      >
    >


  export type FavoriteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    propertyId?: boolean
    createdAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    propertyId?: boolean
    createdAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    propertyId?: boolean
    createdAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectScalar = {
    id?: boolean
    userId?: boolean
    propertyId?: boolean
    createdAt?: boolean
  }

  export type FavoriteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "propertyId" | "createdAt", ExtArgs["result"]["favorite"]>
  export type FavoriteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type FavoriteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type FavoriteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }

  export type $FavoritePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Favorite"
    objects: {
      property: Prisma.$PropertyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      propertyId: string
      createdAt: Date
    }, ExtArgs["result"]["favorite"]>
    composites: {}
  }

  type FavoriteGetPayload<S extends boolean | null | undefined | FavoriteDefaultArgs> = $Result.GetResult<Prisma.$FavoritePayload, S>

  type FavoriteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavoriteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavoriteCountAggregateInputType | true
    }

  export interface FavoriteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Favorite'], meta: { name: 'Favorite' } }
    /**
     * Find zero or one Favorite that matches the filter.
     * @param {FavoriteFindUniqueArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavoriteFindUniqueArgs>(args: SelectSubset<T, FavoriteFindUniqueArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Favorite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavoriteFindUniqueOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavoriteFindUniqueOrThrowArgs>(args: SelectSubset<T, FavoriteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavoriteFindFirstArgs>(args?: SelectSubset<T, FavoriteFindFirstArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavoriteFindFirstOrThrowArgs>(args?: SelectSubset<T, FavoriteFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Favorites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favorites
     * const favorites = await prisma.favorite.findMany()
     * 
     * // Get first 10 Favorites
     * const favorites = await prisma.favorite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favoriteWithIdOnly = await prisma.favorite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FavoriteFindManyArgs>(args?: SelectSubset<T, FavoriteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Favorite.
     * @param {FavoriteCreateArgs} args - Arguments to create a Favorite.
     * @example
     * // Create one Favorite
     * const Favorite = await prisma.favorite.create({
     *   data: {
     *     // ... data to create a Favorite
     *   }
     * })
     * 
     */
    create<T extends FavoriteCreateArgs>(args: SelectSubset<T, FavoriteCreateArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Favorites.
     * @param {FavoriteCreateManyArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorite = await prisma.favorite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavoriteCreateManyArgs>(args?: SelectSubset<T, FavoriteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Favorites and returns the data saved in the database.
     * @param {FavoriteCreateManyAndReturnArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorite = await prisma.favorite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Favorites and only return the `id`
     * const favoriteWithIdOnly = await prisma.favorite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FavoriteCreateManyAndReturnArgs>(args?: SelectSubset<T, FavoriteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Favorite.
     * @param {FavoriteDeleteArgs} args - Arguments to delete one Favorite.
     * @example
     * // Delete one Favorite
     * const Favorite = await prisma.favorite.delete({
     *   where: {
     *     // ... filter to delete one Favorite
     *   }
     * })
     * 
     */
    delete<T extends FavoriteDeleteArgs>(args: SelectSubset<T, FavoriteDeleteArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Favorite.
     * @param {FavoriteUpdateArgs} args - Arguments to update one Favorite.
     * @example
     * // Update one Favorite
     * const favorite = await prisma.favorite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavoriteUpdateArgs>(args: SelectSubset<T, FavoriteUpdateArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Favorites.
     * @param {FavoriteDeleteManyArgs} args - Arguments to filter Favorites to delete.
     * @example
     * // Delete a few Favorites
     * const { count } = await prisma.favorite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavoriteDeleteManyArgs>(args?: SelectSubset<T, FavoriteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favorites
     * const favorite = await prisma.favorite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavoriteUpdateManyArgs>(args: SelectSubset<T, FavoriteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites and returns the data updated in the database.
     * @param {FavoriteUpdateManyAndReturnArgs} args - Arguments to update many Favorites.
     * @example
     * // Update many Favorites
     * const favorite = await prisma.favorite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Favorites and only return the `id`
     * const favoriteWithIdOnly = await prisma.favorite.updateManyAndReturn({
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
    updateManyAndReturn<T extends FavoriteUpdateManyAndReturnArgs>(args: SelectSubset<T, FavoriteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Favorite.
     * @param {FavoriteUpsertArgs} args - Arguments to update or create a Favorite.
     * @example
     * // Update or create a Favorite
     * const favorite = await prisma.favorite.upsert({
     *   create: {
     *     // ... data to create a Favorite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favorite we want to update
     *   }
     * })
     */
    upsert<T extends FavoriteUpsertArgs>(args: SelectSubset<T, FavoriteUpsertArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteCountArgs} args - Arguments to filter Favorites to count.
     * @example
     * // Count the number of Favorites
     * const count = await prisma.favorite.count({
     *   where: {
     *     // ... the filter for the Favorites we want to count
     *   }
     * })
    **/
    count<T extends FavoriteCountArgs>(
      args?: Subset<T, FavoriteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoriteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FavoriteAggregateArgs>(args: Subset<T, FavoriteAggregateArgs>): Prisma.PrismaPromise<GetFavoriteAggregateType<T>>

    /**
     * Group by Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteGroupByArgs} args - Group by arguments.
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
      T extends FavoriteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoriteGroupByArgs['orderBy'] }
        : { orderBy?: FavoriteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FavoriteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoriteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Favorite model
   */
  readonly fields: FavoriteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Favorite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoriteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Favorite model
   */
  interface FavoriteFieldRefs {
    readonly id: FieldRef<"Favorite", 'String'>
    readonly userId: FieldRef<"Favorite", 'String'>
    readonly propertyId: FieldRef<"Favorite", 'String'>
    readonly createdAt: FieldRef<"Favorite", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Favorite findUnique
   */
  export type FavoriteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite findUniqueOrThrow
   */
  export type FavoriteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite findFirst
   */
  export type FavoriteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite findFirstOrThrow
   */
  export type FavoriteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite findMany
   */
  export type FavoriteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorites to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite create
   */
  export type FavoriteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The data needed to create a Favorite.
     */
    data: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>
  }

  /**
   * Favorite createMany
   */
  export type FavoriteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Favorites.
     */
    data: FavoriteCreateManyInput | FavoriteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Favorite createManyAndReturn
   */
  export type FavoriteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * The data used to create many Favorites.
     */
    data: FavoriteCreateManyInput | FavoriteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorite update
   */
  export type FavoriteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The data needed to update a Favorite.
     */
    data: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>
    /**
     * Choose, which Favorite to update.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite updateMany
   */
  export type FavoriteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Favorites.
     */
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyInput>
    /**
     * Filter which Favorites to update
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to update.
     */
    limit?: number
  }

  /**
   * Favorite updateManyAndReturn
   */
  export type FavoriteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * The data used to update Favorites.
     */
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyInput>
    /**
     * Filter which Favorites to update
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorite upsert
   */
  export type FavoriteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The filter to search for the Favorite to update in case it exists.
     */
    where: FavoriteWhereUniqueInput
    /**
     * In case the Favorite found by the `where` argument doesn't exist, create a new Favorite with this data.
     */
    create: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>
    /**
     * In case the Favorite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>
  }

  /**
   * Favorite delete
   */
  export type FavoriteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter which Favorite to delete.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite deleteMany
   */
  export type FavoriteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorites to delete
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to delete.
     */
    limit?: number
  }

  /**
   * Favorite without action
   */
  export type FavoriteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
  }


  /**
   * Model Inquiry
   */

  export type AggregateInquiry = {
    _count: InquiryCountAggregateOutputType | null
    _min: InquiryMinAggregateOutputType | null
    _max: InquiryMaxAggregateOutputType | null
  }

  export type InquiryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    propertyId: string | null
    message: string | null
    phone: string | null
    email: string | null
    status: $Enums.InquiryStatus | null
    repliedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InquiryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    propertyId: string | null
    message: string | null
    phone: string | null
    email: string | null
    status: $Enums.InquiryStatus | null
    repliedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InquiryCountAggregateOutputType = {
    id: number
    userId: number
    propertyId: number
    message: number
    phone: number
    email: number
    status: number
    repliedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InquiryMinAggregateInputType = {
    id?: true
    userId?: true
    propertyId?: true
    message?: true
    phone?: true
    email?: true
    status?: true
    repliedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InquiryMaxAggregateInputType = {
    id?: true
    userId?: true
    propertyId?: true
    message?: true
    phone?: true
    email?: true
    status?: true
    repliedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InquiryCountAggregateInputType = {
    id?: true
    userId?: true
    propertyId?: true
    message?: true
    phone?: true
    email?: true
    status?: true
    repliedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InquiryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inquiry to aggregate.
     */
    where?: InquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inquiries to fetch.
     */
    orderBy?: InquiryOrderByWithRelationInput | InquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inquiries
    **/
    _count?: true | InquiryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InquiryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InquiryMaxAggregateInputType
  }

  export type GetInquiryAggregateType<T extends InquiryAggregateArgs> = {
        [P in keyof T & keyof AggregateInquiry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInquiry[P]>
      : GetScalarType<T[P], AggregateInquiry[P]>
  }




  export type InquiryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InquiryWhereInput
    orderBy?: InquiryOrderByWithAggregationInput | InquiryOrderByWithAggregationInput[]
    by: InquiryScalarFieldEnum[] | InquiryScalarFieldEnum
    having?: InquiryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InquiryCountAggregateInputType | true
    _min?: InquiryMinAggregateInputType
    _max?: InquiryMaxAggregateInputType
  }

  export type InquiryGroupByOutputType = {
    id: string
    userId: string
    propertyId: string
    message: string
    phone: string | null
    email: string | null
    status: $Enums.InquiryStatus
    repliedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: InquiryCountAggregateOutputType | null
    _min: InquiryMinAggregateOutputType | null
    _max: InquiryMaxAggregateOutputType | null
  }

  type GetInquiryGroupByPayload<T extends InquiryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InquiryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InquiryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InquiryGroupByOutputType[P]>
            : GetScalarType<T[P], InquiryGroupByOutputType[P]>
        }
      >
    >


  export type InquirySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    propertyId?: boolean
    message?: boolean
    phone?: boolean
    email?: boolean
    status?: boolean
    repliedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inquiry"]>

  export type InquirySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    propertyId?: boolean
    message?: boolean
    phone?: boolean
    email?: boolean
    status?: boolean
    repliedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inquiry"]>

  export type InquirySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    propertyId?: boolean
    message?: boolean
    phone?: boolean
    email?: boolean
    status?: boolean
    repliedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inquiry"]>

  export type InquirySelectScalar = {
    id?: boolean
    userId?: boolean
    propertyId?: boolean
    message?: boolean
    phone?: boolean
    email?: boolean
    status?: boolean
    repliedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InquiryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "propertyId" | "message" | "phone" | "email" | "status" | "repliedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["inquiry"]>
  export type InquiryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type InquiryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type InquiryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }

  export type $InquiryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inquiry"
    objects: {
      property: Prisma.$PropertyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      propertyId: string
      message: string
      phone: string | null
      email: string | null
      status: $Enums.InquiryStatus
      repliedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["inquiry"]>
    composites: {}
  }

  type InquiryGetPayload<S extends boolean | null | undefined | InquiryDefaultArgs> = $Result.GetResult<Prisma.$InquiryPayload, S>

  type InquiryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InquiryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InquiryCountAggregateInputType | true
    }

  export interface InquiryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inquiry'], meta: { name: 'Inquiry' } }
    /**
     * Find zero or one Inquiry that matches the filter.
     * @param {InquiryFindUniqueArgs} args - Arguments to find a Inquiry
     * @example
     * // Get one Inquiry
     * const inquiry = await prisma.inquiry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InquiryFindUniqueArgs>(args: SelectSubset<T, InquiryFindUniqueArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inquiry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InquiryFindUniqueOrThrowArgs} args - Arguments to find a Inquiry
     * @example
     * // Get one Inquiry
     * const inquiry = await prisma.inquiry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InquiryFindUniqueOrThrowArgs>(args: SelectSubset<T, InquiryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inquiry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryFindFirstArgs} args - Arguments to find a Inquiry
     * @example
     * // Get one Inquiry
     * const inquiry = await prisma.inquiry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InquiryFindFirstArgs>(args?: SelectSubset<T, InquiryFindFirstArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inquiry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryFindFirstOrThrowArgs} args - Arguments to find a Inquiry
     * @example
     * // Get one Inquiry
     * const inquiry = await prisma.inquiry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InquiryFindFirstOrThrowArgs>(args?: SelectSubset<T, InquiryFindFirstOrThrowArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inquiries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inquiries
     * const inquiries = await prisma.inquiry.findMany()
     * 
     * // Get first 10 Inquiries
     * const inquiries = await prisma.inquiry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inquiryWithIdOnly = await prisma.inquiry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InquiryFindManyArgs>(args?: SelectSubset<T, InquiryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inquiry.
     * @param {InquiryCreateArgs} args - Arguments to create a Inquiry.
     * @example
     * // Create one Inquiry
     * const Inquiry = await prisma.inquiry.create({
     *   data: {
     *     // ... data to create a Inquiry
     *   }
     * })
     * 
     */
    create<T extends InquiryCreateArgs>(args: SelectSubset<T, InquiryCreateArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inquiries.
     * @param {InquiryCreateManyArgs} args - Arguments to create many Inquiries.
     * @example
     * // Create many Inquiries
     * const inquiry = await prisma.inquiry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InquiryCreateManyArgs>(args?: SelectSubset<T, InquiryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inquiries and returns the data saved in the database.
     * @param {InquiryCreateManyAndReturnArgs} args - Arguments to create many Inquiries.
     * @example
     * // Create many Inquiries
     * const inquiry = await prisma.inquiry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inquiries and only return the `id`
     * const inquiryWithIdOnly = await prisma.inquiry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InquiryCreateManyAndReturnArgs>(args?: SelectSubset<T, InquiryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Inquiry.
     * @param {InquiryDeleteArgs} args - Arguments to delete one Inquiry.
     * @example
     * // Delete one Inquiry
     * const Inquiry = await prisma.inquiry.delete({
     *   where: {
     *     // ... filter to delete one Inquiry
     *   }
     * })
     * 
     */
    delete<T extends InquiryDeleteArgs>(args: SelectSubset<T, InquiryDeleteArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inquiry.
     * @param {InquiryUpdateArgs} args - Arguments to update one Inquiry.
     * @example
     * // Update one Inquiry
     * const inquiry = await prisma.inquiry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InquiryUpdateArgs>(args: SelectSubset<T, InquiryUpdateArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inquiries.
     * @param {InquiryDeleteManyArgs} args - Arguments to filter Inquiries to delete.
     * @example
     * // Delete a few Inquiries
     * const { count } = await prisma.inquiry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InquiryDeleteManyArgs>(args?: SelectSubset<T, InquiryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inquiries
     * const inquiry = await prisma.inquiry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InquiryUpdateManyArgs>(args: SelectSubset<T, InquiryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inquiries and returns the data updated in the database.
     * @param {InquiryUpdateManyAndReturnArgs} args - Arguments to update many Inquiries.
     * @example
     * // Update many Inquiries
     * const inquiry = await prisma.inquiry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Inquiries and only return the `id`
     * const inquiryWithIdOnly = await prisma.inquiry.updateManyAndReturn({
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
    updateManyAndReturn<T extends InquiryUpdateManyAndReturnArgs>(args: SelectSubset<T, InquiryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Inquiry.
     * @param {InquiryUpsertArgs} args - Arguments to update or create a Inquiry.
     * @example
     * // Update or create a Inquiry
     * const inquiry = await prisma.inquiry.upsert({
     *   create: {
     *     // ... data to create a Inquiry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inquiry we want to update
     *   }
     * })
     */
    upsert<T extends InquiryUpsertArgs>(args: SelectSubset<T, InquiryUpsertArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryCountArgs} args - Arguments to filter Inquiries to count.
     * @example
     * // Count the number of Inquiries
     * const count = await prisma.inquiry.count({
     *   where: {
     *     // ... the filter for the Inquiries we want to count
     *   }
     * })
    **/
    count<T extends InquiryCountArgs>(
      args?: Subset<T, InquiryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InquiryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InquiryAggregateArgs>(args: Subset<T, InquiryAggregateArgs>): Prisma.PrismaPromise<GetInquiryAggregateType<T>>

    /**
     * Group by Inquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryGroupByArgs} args - Group by arguments.
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
      T extends InquiryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InquiryGroupByArgs['orderBy'] }
        : { orderBy?: InquiryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InquiryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInquiryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inquiry model
   */
  readonly fields: InquiryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inquiry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InquiryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Inquiry model
   */
  interface InquiryFieldRefs {
    readonly id: FieldRef<"Inquiry", 'String'>
    readonly userId: FieldRef<"Inquiry", 'String'>
    readonly propertyId: FieldRef<"Inquiry", 'String'>
    readonly message: FieldRef<"Inquiry", 'String'>
    readonly phone: FieldRef<"Inquiry", 'String'>
    readonly email: FieldRef<"Inquiry", 'String'>
    readonly status: FieldRef<"Inquiry", 'InquiryStatus'>
    readonly repliedAt: FieldRef<"Inquiry", 'DateTime'>
    readonly createdAt: FieldRef<"Inquiry", 'DateTime'>
    readonly updatedAt: FieldRef<"Inquiry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Inquiry findUnique
   */
  export type InquiryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    /**
     * Filter, which Inquiry to fetch.
     */
    where: InquiryWhereUniqueInput
  }

  /**
   * Inquiry findUniqueOrThrow
   */
  export type InquiryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    /**
     * Filter, which Inquiry to fetch.
     */
    where: InquiryWhereUniqueInput
  }

  /**
   * Inquiry findFirst
   */
  export type InquiryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    /**
     * Filter, which Inquiry to fetch.
     */
    where?: InquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inquiries to fetch.
     */
    orderBy?: InquiryOrderByWithRelationInput | InquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inquiries.
     */
    cursor?: InquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inquiries.
     */
    distinct?: InquiryScalarFieldEnum | InquiryScalarFieldEnum[]
  }

  /**
   * Inquiry findFirstOrThrow
   */
  export type InquiryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    /**
     * Filter, which Inquiry to fetch.
     */
    where?: InquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inquiries to fetch.
     */
    orderBy?: InquiryOrderByWithRelationInput | InquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inquiries.
     */
    cursor?: InquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inquiries.
     */
    distinct?: InquiryScalarFieldEnum | InquiryScalarFieldEnum[]
  }

  /**
   * Inquiry findMany
   */
  export type InquiryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    /**
     * Filter, which Inquiries to fetch.
     */
    where?: InquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inquiries to fetch.
     */
    orderBy?: InquiryOrderByWithRelationInput | InquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inquiries.
     */
    cursor?: InquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inquiries.
     */
    skip?: number
    distinct?: InquiryScalarFieldEnum | InquiryScalarFieldEnum[]
  }

  /**
   * Inquiry create
   */
  export type InquiryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    /**
     * The data needed to create a Inquiry.
     */
    data: XOR<InquiryCreateInput, InquiryUncheckedCreateInput>
  }

  /**
   * Inquiry createMany
   */
  export type InquiryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inquiries.
     */
    data: InquiryCreateManyInput | InquiryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Inquiry createManyAndReturn
   */
  export type InquiryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * The data used to create many Inquiries.
     */
    data: InquiryCreateManyInput | InquiryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inquiry update
   */
  export type InquiryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    /**
     * The data needed to update a Inquiry.
     */
    data: XOR<InquiryUpdateInput, InquiryUncheckedUpdateInput>
    /**
     * Choose, which Inquiry to update.
     */
    where: InquiryWhereUniqueInput
  }

  /**
   * Inquiry updateMany
   */
  export type InquiryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inquiries.
     */
    data: XOR<InquiryUpdateManyMutationInput, InquiryUncheckedUpdateManyInput>
    /**
     * Filter which Inquiries to update
     */
    where?: InquiryWhereInput
    /**
     * Limit how many Inquiries to update.
     */
    limit?: number
  }

  /**
   * Inquiry updateManyAndReturn
   */
  export type InquiryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * The data used to update Inquiries.
     */
    data: XOR<InquiryUpdateManyMutationInput, InquiryUncheckedUpdateManyInput>
    /**
     * Filter which Inquiries to update
     */
    where?: InquiryWhereInput
    /**
     * Limit how many Inquiries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inquiry upsert
   */
  export type InquiryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    /**
     * The filter to search for the Inquiry to update in case it exists.
     */
    where: InquiryWhereUniqueInput
    /**
     * In case the Inquiry found by the `where` argument doesn't exist, create a new Inquiry with this data.
     */
    create: XOR<InquiryCreateInput, InquiryUncheckedCreateInput>
    /**
     * In case the Inquiry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InquiryUpdateInput, InquiryUncheckedUpdateInput>
  }

  /**
   * Inquiry delete
   */
  export type InquiryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    /**
     * Filter which Inquiry to delete.
     */
    where: InquiryWhereUniqueInput
  }

  /**
   * Inquiry deleteMany
   */
  export type InquiryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inquiries to delete
     */
    where?: InquiryWhereInput
    /**
     * Limit how many Inquiries to delete.
     */
    limit?: number
  }

  /**
   * Inquiry without action
   */
  export type InquiryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
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


  export const PropertyScalarFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    agentId: 'agentId',
    title: 'title',
    slug: 'slug',
    description: 'description',
    type: 'type',
    transaction: 'transaction',
    status: 'status',
    price: 'price',
    pricePerSqm: 'pricePerSqm',
    currency: 'currency',
    isPriceNegotiable: 'isPriceNegotiable',
    totalArea: 'totalArea',
    livingArea: 'livingArea',
    landArea: 'landArea',
    rooms: 'rooms',
    bedrooms: 'bedrooms',
    bathrooms: 'bathrooms',
    floor: 'floor',
    totalFloors: 'totalFloors',
    buildingYear: 'buildingYear',
    parkingSpaces: 'parkingSpaces',
    heating: 'heating',
    condition: 'condition',
    furniture: 'furniture',
    balcony: 'balcony',
    elevator: 'elevator',
    garage: 'garage',
    security: 'security',
    playground: 'playground',
    address: 'address',
    city: 'city',
    district: 'district',
    khoroo: 'khoroo',
    zipCode: 'zipCode',
    latitude: 'latitude',
    longitude: 'longitude',
    cadastralNumber: 'cadastralNumber',
    ownershipType: 'ownershipType',
    landUseType: 'landUseType',
    viewCount: 'viewCount',
    favoriteCount: 'favoriteCount',
    inquiryCount: 'inquiryCount',
    isFeatured: 'isFeatured',
    isVerified: 'isVerified',
    verifiedAt: 'verifiedAt',
    verifiedBy: 'verifiedBy',
    publishedAt: 'publishedAt',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PropertyScalarFieldEnum = (typeof PropertyScalarFieldEnum)[keyof typeof PropertyScalarFieldEnum]


  export const PropertyMediaScalarFieldEnum: {
    id: 'id',
    propertyId: 'propertyId',
    url: 'url',
    thumbnailUrl: 'thumbnailUrl',
    type: 'type',
    title: 'title',
    sortOrder: 'sortOrder',
    isPrimary: 'isPrimary',
    fileSize: 'fileSize',
    width: 'width',
    height: 'height',
    createdAt: 'createdAt'
  };

  export type PropertyMediaScalarFieldEnum = (typeof PropertyMediaScalarFieldEnum)[keyof typeof PropertyMediaScalarFieldEnum]


  export const PropertyPriceHistoryScalarFieldEnum: {
    id: 'id',
    propertyId: 'propertyId',
    price: 'price',
    currency: 'currency',
    changedAt: 'changedAt',
    reason: 'reason'
  };

  export type PropertyPriceHistoryScalarFieldEnum = (typeof PropertyPriceHistoryScalarFieldEnum)[keyof typeof PropertyPriceHistoryScalarFieldEnum]


  export const PropertyAmenityScalarFieldEnum: {
    id: 'id',
    propertyId: 'propertyId',
    name: 'name',
    category: 'category',
    icon: 'icon'
  };

  export type PropertyAmenityScalarFieldEnum = (typeof PropertyAmenityScalarFieldEnum)[keyof typeof PropertyAmenityScalarFieldEnum]


  export const FavoriteScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    propertyId: 'propertyId',
    createdAt: 'createdAt'
  };

  export type FavoriteScalarFieldEnum = (typeof FavoriteScalarFieldEnum)[keyof typeof FavoriteScalarFieldEnum]


  export const InquiryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    propertyId: 'propertyId',
    message: 'message',
    phone: 'phone',
    email: 'email',
    status: 'status',
    repliedAt: 'repliedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InquiryScalarFieldEnum = (typeof InquiryScalarFieldEnum)[keyof typeof InquiryScalarFieldEnum]


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
   * Reference to a field of type 'PropertyType'
   */
  export type EnumPropertyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PropertyType'>
    


  /**
   * Reference to a field of type 'PropertyType[]'
   */
  export type ListEnumPropertyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PropertyType[]'>
    


  /**
   * Reference to a field of type 'TransactionType'
   */
  export type EnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType'>
    


  /**
   * Reference to a field of type 'TransactionType[]'
   */
  export type ListEnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType[]'>
    


  /**
   * Reference to a field of type 'PropertyStatus'
   */
  export type EnumPropertyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PropertyStatus'>
    


  /**
   * Reference to a field of type 'PropertyStatus[]'
   */
  export type ListEnumPropertyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PropertyStatus[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'HeatingType'
   */
  export type EnumHeatingTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HeatingType'>
    


  /**
   * Reference to a field of type 'HeatingType[]'
   */
  export type ListEnumHeatingTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HeatingType[]'>
    


  /**
   * Reference to a field of type 'PropertyCondition'
   */
  export type EnumPropertyConditionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PropertyCondition'>
    


  /**
   * Reference to a field of type 'PropertyCondition[]'
   */
  export type ListEnumPropertyConditionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PropertyCondition[]'>
    


  /**
   * Reference to a field of type 'FurnitureStatus'
   */
  export type EnumFurnitureStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FurnitureStatus'>
    


  /**
   * Reference to a field of type 'FurnitureStatus[]'
   */
  export type ListEnumFurnitureStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FurnitureStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'MediaType'
   */
  export type EnumMediaTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MediaType'>
    


  /**
   * Reference to a field of type 'MediaType[]'
   */
  export type ListEnumMediaTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MediaType[]'>
    


  /**
   * Reference to a field of type 'InquiryStatus'
   */
  export type EnumInquiryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InquiryStatus'>
    


  /**
   * Reference to a field of type 'InquiryStatus[]'
   */
  export type ListEnumInquiryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InquiryStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type PropertyWhereInput = {
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    id?: StringFilter<"Property"> | string
    ownerId?: StringFilter<"Property"> | string
    agentId?: StringNullableFilter<"Property"> | string | null
    title?: StringFilter<"Property"> | string
    slug?: StringFilter<"Property"> | string
    description?: StringFilter<"Property"> | string
    type?: EnumPropertyTypeFilter<"Property"> | $Enums.PropertyType
    transaction?: EnumTransactionTypeFilter<"Property"> | $Enums.TransactionType
    status?: EnumPropertyStatusFilter<"Property"> | $Enums.PropertyStatus
    price?: DecimalFilter<"Property"> | Decimal | DecimalJsLike | number | string
    pricePerSqm?: DecimalNullableFilter<"Property"> | Decimal | DecimalJsLike | number | string | null
    currency?: StringFilter<"Property"> | string
    isPriceNegotiable?: BoolFilter<"Property"> | boolean
    totalArea?: FloatNullableFilter<"Property"> | number | null
    livingArea?: FloatNullableFilter<"Property"> | number | null
    landArea?: FloatNullableFilter<"Property"> | number | null
    rooms?: IntNullableFilter<"Property"> | number | null
    bedrooms?: IntNullableFilter<"Property"> | number | null
    bathrooms?: IntNullableFilter<"Property"> | number | null
    floor?: IntNullableFilter<"Property"> | number | null
    totalFloors?: IntNullableFilter<"Property"> | number | null
    buildingYear?: IntNullableFilter<"Property"> | number | null
    parkingSpaces?: IntNullableFilter<"Property"> | number | null
    heating?: EnumHeatingTypeNullableFilter<"Property"> | $Enums.HeatingType | null
    condition?: EnumPropertyConditionNullableFilter<"Property"> | $Enums.PropertyCondition | null
    furniture?: EnumFurnitureStatusNullableFilter<"Property"> | $Enums.FurnitureStatus | null
    balcony?: BoolFilter<"Property"> | boolean
    elevator?: BoolFilter<"Property"> | boolean
    garage?: BoolFilter<"Property"> | boolean
    security?: BoolFilter<"Property"> | boolean
    playground?: BoolFilter<"Property"> | boolean
    address?: StringFilter<"Property"> | string
    city?: StringFilter<"Property"> | string
    district?: StringFilter<"Property"> | string
    khoroo?: StringNullableFilter<"Property"> | string | null
    zipCode?: StringNullableFilter<"Property"> | string | null
    latitude?: FloatNullableFilter<"Property"> | number | null
    longitude?: FloatNullableFilter<"Property"> | number | null
    cadastralNumber?: StringNullableFilter<"Property"> | string | null
    ownershipType?: StringNullableFilter<"Property"> | string | null
    landUseType?: StringNullableFilter<"Property"> | string | null
    viewCount?: IntFilter<"Property"> | number
    favoriteCount?: IntFilter<"Property"> | number
    inquiryCount?: IntFilter<"Property"> | number
    isFeatured?: BoolFilter<"Property"> | boolean
    isVerified?: BoolFilter<"Property"> | boolean
    verifiedAt?: DateTimeNullableFilter<"Property"> | Date | string | null
    verifiedBy?: StringNullableFilter<"Property"> | string | null
    publishedAt?: DateTimeNullableFilter<"Property"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"Property"> | Date | string | null
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
    media?: PropertyMediaListRelationFilter
    priceHistory?: PropertyPriceHistoryListRelationFilter
    favorites?: FavoriteListRelationFilter
    inquiries?: InquiryListRelationFilter
    amenities?: PropertyAmenityListRelationFilter
  }

  export type PropertyOrderByWithRelationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    agentId?: SortOrderInput | SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    type?: SortOrder
    transaction?: SortOrder
    status?: SortOrder
    price?: SortOrder
    pricePerSqm?: SortOrderInput | SortOrder
    currency?: SortOrder
    isPriceNegotiable?: SortOrder
    totalArea?: SortOrderInput | SortOrder
    livingArea?: SortOrderInput | SortOrder
    landArea?: SortOrderInput | SortOrder
    rooms?: SortOrderInput | SortOrder
    bedrooms?: SortOrderInput | SortOrder
    bathrooms?: SortOrderInput | SortOrder
    floor?: SortOrderInput | SortOrder
    totalFloors?: SortOrderInput | SortOrder
    buildingYear?: SortOrderInput | SortOrder
    parkingSpaces?: SortOrderInput | SortOrder
    heating?: SortOrderInput | SortOrder
    condition?: SortOrderInput | SortOrder
    furniture?: SortOrderInput | SortOrder
    balcony?: SortOrder
    elevator?: SortOrder
    garage?: SortOrder
    security?: SortOrder
    playground?: SortOrder
    address?: SortOrder
    city?: SortOrder
    district?: SortOrder
    khoroo?: SortOrderInput | SortOrder
    zipCode?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    cadastralNumber?: SortOrderInput | SortOrder
    ownershipType?: SortOrderInput | SortOrder
    landUseType?: SortOrderInput | SortOrder
    viewCount?: SortOrder
    favoriteCount?: SortOrder
    inquiryCount?: SortOrder
    isFeatured?: SortOrder
    isVerified?: SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    verifiedBy?: SortOrderInput | SortOrder
    publishedAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    media?: PropertyMediaOrderByRelationAggregateInput
    priceHistory?: PropertyPriceHistoryOrderByRelationAggregateInput
    favorites?: FavoriteOrderByRelationAggregateInput
    inquiries?: InquiryOrderByRelationAggregateInput
    amenities?: PropertyAmenityOrderByRelationAggregateInput
  }

  export type PropertyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    ownerId?: StringFilter<"Property"> | string
    agentId?: StringNullableFilter<"Property"> | string | null
    title?: StringFilter<"Property"> | string
    description?: StringFilter<"Property"> | string
    type?: EnumPropertyTypeFilter<"Property"> | $Enums.PropertyType
    transaction?: EnumTransactionTypeFilter<"Property"> | $Enums.TransactionType
    status?: EnumPropertyStatusFilter<"Property"> | $Enums.PropertyStatus
    price?: DecimalFilter<"Property"> | Decimal | DecimalJsLike | number | string
    pricePerSqm?: DecimalNullableFilter<"Property"> | Decimal | DecimalJsLike | number | string | null
    currency?: StringFilter<"Property"> | string
    isPriceNegotiable?: BoolFilter<"Property"> | boolean
    totalArea?: FloatNullableFilter<"Property"> | number | null
    livingArea?: FloatNullableFilter<"Property"> | number | null
    landArea?: FloatNullableFilter<"Property"> | number | null
    rooms?: IntNullableFilter<"Property"> | number | null
    bedrooms?: IntNullableFilter<"Property"> | number | null
    bathrooms?: IntNullableFilter<"Property"> | number | null
    floor?: IntNullableFilter<"Property"> | number | null
    totalFloors?: IntNullableFilter<"Property"> | number | null
    buildingYear?: IntNullableFilter<"Property"> | number | null
    parkingSpaces?: IntNullableFilter<"Property"> | number | null
    heating?: EnumHeatingTypeNullableFilter<"Property"> | $Enums.HeatingType | null
    condition?: EnumPropertyConditionNullableFilter<"Property"> | $Enums.PropertyCondition | null
    furniture?: EnumFurnitureStatusNullableFilter<"Property"> | $Enums.FurnitureStatus | null
    balcony?: BoolFilter<"Property"> | boolean
    elevator?: BoolFilter<"Property"> | boolean
    garage?: BoolFilter<"Property"> | boolean
    security?: BoolFilter<"Property"> | boolean
    playground?: BoolFilter<"Property"> | boolean
    address?: StringFilter<"Property"> | string
    city?: StringFilter<"Property"> | string
    district?: StringFilter<"Property"> | string
    khoroo?: StringNullableFilter<"Property"> | string | null
    zipCode?: StringNullableFilter<"Property"> | string | null
    latitude?: FloatNullableFilter<"Property"> | number | null
    longitude?: FloatNullableFilter<"Property"> | number | null
    cadastralNumber?: StringNullableFilter<"Property"> | string | null
    ownershipType?: StringNullableFilter<"Property"> | string | null
    landUseType?: StringNullableFilter<"Property"> | string | null
    viewCount?: IntFilter<"Property"> | number
    favoriteCount?: IntFilter<"Property"> | number
    inquiryCount?: IntFilter<"Property"> | number
    isFeatured?: BoolFilter<"Property"> | boolean
    isVerified?: BoolFilter<"Property"> | boolean
    verifiedAt?: DateTimeNullableFilter<"Property"> | Date | string | null
    verifiedBy?: StringNullableFilter<"Property"> | string | null
    publishedAt?: DateTimeNullableFilter<"Property"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"Property"> | Date | string | null
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
    media?: PropertyMediaListRelationFilter
    priceHistory?: PropertyPriceHistoryListRelationFilter
    favorites?: FavoriteListRelationFilter
    inquiries?: InquiryListRelationFilter
    amenities?: PropertyAmenityListRelationFilter
  }, "id" | "slug">

  export type PropertyOrderByWithAggregationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    agentId?: SortOrderInput | SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    type?: SortOrder
    transaction?: SortOrder
    status?: SortOrder
    price?: SortOrder
    pricePerSqm?: SortOrderInput | SortOrder
    currency?: SortOrder
    isPriceNegotiable?: SortOrder
    totalArea?: SortOrderInput | SortOrder
    livingArea?: SortOrderInput | SortOrder
    landArea?: SortOrderInput | SortOrder
    rooms?: SortOrderInput | SortOrder
    bedrooms?: SortOrderInput | SortOrder
    bathrooms?: SortOrderInput | SortOrder
    floor?: SortOrderInput | SortOrder
    totalFloors?: SortOrderInput | SortOrder
    buildingYear?: SortOrderInput | SortOrder
    parkingSpaces?: SortOrderInput | SortOrder
    heating?: SortOrderInput | SortOrder
    condition?: SortOrderInput | SortOrder
    furniture?: SortOrderInput | SortOrder
    balcony?: SortOrder
    elevator?: SortOrder
    garage?: SortOrder
    security?: SortOrder
    playground?: SortOrder
    address?: SortOrder
    city?: SortOrder
    district?: SortOrder
    khoroo?: SortOrderInput | SortOrder
    zipCode?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    cadastralNumber?: SortOrderInput | SortOrder
    ownershipType?: SortOrderInput | SortOrder
    landUseType?: SortOrderInput | SortOrder
    viewCount?: SortOrder
    favoriteCount?: SortOrder
    inquiryCount?: SortOrder
    isFeatured?: SortOrder
    isVerified?: SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    verifiedBy?: SortOrderInput | SortOrder
    publishedAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PropertyCountOrderByAggregateInput
    _avg?: PropertyAvgOrderByAggregateInput
    _max?: PropertyMaxOrderByAggregateInput
    _min?: PropertyMinOrderByAggregateInput
    _sum?: PropertySumOrderByAggregateInput
  }

  export type PropertyScalarWhereWithAggregatesInput = {
    AND?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    OR?: PropertyScalarWhereWithAggregatesInput[]
    NOT?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Property"> | string
    ownerId?: StringWithAggregatesFilter<"Property"> | string
    agentId?: StringNullableWithAggregatesFilter<"Property"> | string | null
    title?: StringWithAggregatesFilter<"Property"> | string
    slug?: StringWithAggregatesFilter<"Property"> | string
    description?: StringWithAggregatesFilter<"Property"> | string
    type?: EnumPropertyTypeWithAggregatesFilter<"Property"> | $Enums.PropertyType
    transaction?: EnumTransactionTypeWithAggregatesFilter<"Property"> | $Enums.TransactionType
    status?: EnumPropertyStatusWithAggregatesFilter<"Property"> | $Enums.PropertyStatus
    price?: DecimalWithAggregatesFilter<"Property"> | Decimal | DecimalJsLike | number | string
    pricePerSqm?: DecimalNullableWithAggregatesFilter<"Property"> | Decimal | DecimalJsLike | number | string | null
    currency?: StringWithAggregatesFilter<"Property"> | string
    isPriceNegotiable?: BoolWithAggregatesFilter<"Property"> | boolean
    totalArea?: FloatNullableWithAggregatesFilter<"Property"> | number | null
    livingArea?: FloatNullableWithAggregatesFilter<"Property"> | number | null
    landArea?: FloatNullableWithAggregatesFilter<"Property"> | number | null
    rooms?: IntNullableWithAggregatesFilter<"Property"> | number | null
    bedrooms?: IntNullableWithAggregatesFilter<"Property"> | number | null
    bathrooms?: IntNullableWithAggregatesFilter<"Property"> | number | null
    floor?: IntNullableWithAggregatesFilter<"Property"> | number | null
    totalFloors?: IntNullableWithAggregatesFilter<"Property"> | number | null
    buildingYear?: IntNullableWithAggregatesFilter<"Property"> | number | null
    parkingSpaces?: IntNullableWithAggregatesFilter<"Property"> | number | null
    heating?: EnumHeatingTypeNullableWithAggregatesFilter<"Property"> | $Enums.HeatingType | null
    condition?: EnumPropertyConditionNullableWithAggregatesFilter<"Property"> | $Enums.PropertyCondition | null
    furniture?: EnumFurnitureStatusNullableWithAggregatesFilter<"Property"> | $Enums.FurnitureStatus | null
    balcony?: BoolWithAggregatesFilter<"Property"> | boolean
    elevator?: BoolWithAggregatesFilter<"Property"> | boolean
    garage?: BoolWithAggregatesFilter<"Property"> | boolean
    security?: BoolWithAggregatesFilter<"Property"> | boolean
    playground?: BoolWithAggregatesFilter<"Property"> | boolean
    address?: StringWithAggregatesFilter<"Property"> | string
    city?: StringWithAggregatesFilter<"Property"> | string
    district?: StringWithAggregatesFilter<"Property"> | string
    khoroo?: StringNullableWithAggregatesFilter<"Property"> | string | null
    zipCode?: StringNullableWithAggregatesFilter<"Property"> | string | null
    latitude?: FloatNullableWithAggregatesFilter<"Property"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"Property"> | number | null
    cadastralNumber?: StringNullableWithAggregatesFilter<"Property"> | string | null
    ownershipType?: StringNullableWithAggregatesFilter<"Property"> | string | null
    landUseType?: StringNullableWithAggregatesFilter<"Property"> | string | null
    viewCount?: IntWithAggregatesFilter<"Property"> | number
    favoriteCount?: IntWithAggregatesFilter<"Property"> | number
    inquiryCount?: IntWithAggregatesFilter<"Property"> | number
    isFeatured?: BoolWithAggregatesFilter<"Property"> | boolean
    isVerified?: BoolWithAggregatesFilter<"Property"> | boolean
    verifiedAt?: DateTimeNullableWithAggregatesFilter<"Property"> | Date | string | null
    verifiedBy?: StringNullableWithAggregatesFilter<"Property"> | string | null
    publishedAt?: DateTimeNullableWithAggregatesFilter<"Property"> | Date | string | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"Property"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Property"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Property"> | Date | string
  }

  export type PropertyMediaWhereInput = {
    AND?: PropertyMediaWhereInput | PropertyMediaWhereInput[]
    OR?: PropertyMediaWhereInput[]
    NOT?: PropertyMediaWhereInput | PropertyMediaWhereInput[]
    id?: StringFilter<"PropertyMedia"> | string
    propertyId?: StringFilter<"PropertyMedia"> | string
    url?: StringFilter<"PropertyMedia"> | string
    thumbnailUrl?: StringNullableFilter<"PropertyMedia"> | string | null
    type?: EnumMediaTypeFilter<"PropertyMedia"> | $Enums.MediaType
    title?: StringNullableFilter<"PropertyMedia"> | string | null
    sortOrder?: IntFilter<"PropertyMedia"> | number
    isPrimary?: BoolFilter<"PropertyMedia"> | boolean
    fileSize?: IntNullableFilter<"PropertyMedia"> | number | null
    width?: IntNullableFilter<"PropertyMedia"> | number | null
    height?: IntNullableFilter<"PropertyMedia"> | number | null
    createdAt?: DateTimeFilter<"PropertyMedia"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }

  export type PropertyMediaOrderByWithRelationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    url?: SortOrder
    thumbnailUrl?: SortOrderInput | SortOrder
    type?: SortOrder
    title?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    isPrimary?: SortOrder
    fileSize?: SortOrderInput | SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    property?: PropertyOrderByWithRelationInput
  }

  export type PropertyMediaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PropertyMediaWhereInput | PropertyMediaWhereInput[]
    OR?: PropertyMediaWhereInput[]
    NOT?: PropertyMediaWhereInput | PropertyMediaWhereInput[]
    propertyId?: StringFilter<"PropertyMedia"> | string
    url?: StringFilter<"PropertyMedia"> | string
    thumbnailUrl?: StringNullableFilter<"PropertyMedia"> | string | null
    type?: EnumMediaTypeFilter<"PropertyMedia"> | $Enums.MediaType
    title?: StringNullableFilter<"PropertyMedia"> | string | null
    sortOrder?: IntFilter<"PropertyMedia"> | number
    isPrimary?: BoolFilter<"PropertyMedia"> | boolean
    fileSize?: IntNullableFilter<"PropertyMedia"> | number | null
    width?: IntNullableFilter<"PropertyMedia"> | number | null
    height?: IntNullableFilter<"PropertyMedia"> | number | null
    createdAt?: DateTimeFilter<"PropertyMedia"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }, "id">

  export type PropertyMediaOrderByWithAggregationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    url?: SortOrder
    thumbnailUrl?: SortOrderInput | SortOrder
    type?: SortOrder
    title?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    isPrimary?: SortOrder
    fileSize?: SortOrderInput | SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PropertyMediaCountOrderByAggregateInput
    _avg?: PropertyMediaAvgOrderByAggregateInput
    _max?: PropertyMediaMaxOrderByAggregateInput
    _min?: PropertyMediaMinOrderByAggregateInput
    _sum?: PropertyMediaSumOrderByAggregateInput
  }

  export type PropertyMediaScalarWhereWithAggregatesInput = {
    AND?: PropertyMediaScalarWhereWithAggregatesInput | PropertyMediaScalarWhereWithAggregatesInput[]
    OR?: PropertyMediaScalarWhereWithAggregatesInput[]
    NOT?: PropertyMediaScalarWhereWithAggregatesInput | PropertyMediaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PropertyMedia"> | string
    propertyId?: StringWithAggregatesFilter<"PropertyMedia"> | string
    url?: StringWithAggregatesFilter<"PropertyMedia"> | string
    thumbnailUrl?: StringNullableWithAggregatesFilter<"PropertyMedia"> | string | null
    type?: EnumMediaTypeWithAggregatesFilter<"PropertyMedia"> | $Enums.MediaType
    title?: StringNullableWithAggregatesFilter<"PropertyMedia"> | string | null
    sortOrder?: IntWithAggregatesFilter<"PropertyMedia"> | number
    isPrimary?: BoolWithAggregatesFilter<"PropertyMedia"> | boolean
    fileSize?: IntNullableWithAggregatesFilter<"PropertyMedia"> | number | null
    width?: IntNullableWithAggregatesFilter<"PropertyMedia"> | number | null
    height?: IntNullableWithAggregatesFilter<"PropertyMedia"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"PropertyMedia"> | Date | string
  }

  export type PropertyPriceHistoryWhereInput = {
    AND?: PropertyPriceHistoryWhereInput | PropertyPriceHistoryWhereInput[]
    OR?: PropertyPriceHistoryWhereInput[]
    NOT?: PropertyPriceHistoryWhereInput | PropertyPriceHistoryWhereInput[]
    id?: StringFilter<"PropertyPriceHistory"> | string
    propertyId?: StringFilter<"PropertyPriceHistory"> | string
    price?: DecimalFilter<"PropertyPriceHistory"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"PropertyPriceHistory"> | string
    changedAt?: DateTimeFilter<"PropertyPriceHistory"> | Date | string
    reason?: StringNullableFilter<"PropertyPriceHistory"> | string | null
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }

  export type PropertyPriceHistoryOrderByWithRelationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    changedAt?: SortOrder
    reason?: SortOrderInput | SortOrder
    property?: PropertyOrderByWithRelationInput
  }

  export type PropertyPriceHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PropertyPriceHistoryWhereInput | PropertyPriceHistoryWhereInput[]
    OR?: PropertyPriceHistoryWhereInput[]
    NOT?: PropertyPriceHistoryWhereInput | PropertyPriceHistoryWhereInput[]
    propertyId?: StringFilter<"PropertyPriceHistory"> | string
    price?: DecimalFilter<"PropertyPriceHistory"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"PropertyPriceHistory"> | string
    changedAt?: DateTimeFilter<"PropertyPriceHistory"> | Date | string
    reason?: StringNullableFilter<"PropertyPriceHistory"> | string | null
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }, "id">

  export type PropertyPriceHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    changedAt?: SortOrder
    reason?: SortOrderInput | SortOrder
    _count?: PropertyPriceHistoryCountOrderByAggregateInput
    _avg?: PropertyPriceHistoryAvgOrderByAggregateInput
    _max?: PropertyPriceHistoryMaxOrderByAggregateInput
    _min?: PropertyPriceHistoryMinOrderByAggregateInput
    _sum?: PropertyPriceHistorySumOrderByAggregateInput
  }

  export type PropertyPriceHistoryScalarWhereWithAggregatesInput = {
    AND?: PropertyPriceHistoryScalarWhereWithAggregatesInput | PropertyPriceHistoryScalarWhereWithAggregatesInput[]
    OR?: PropertyPriceHistoryScalarWhereWithAggregatesInput[]
    NOT?: PropertyPriceHistoryScalarWhereWithAggregatesInput | PropertyPriceHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PropertyPriceHistory"> | string
    propertyId?: StringWithAggregatesFilter<"PropertyPriceHistory"> | string
    price?: DecimalWithAggregatesFilter<"PropertyPriceHistory"> | Decimal | DecimalJsLike | number | string
    currency?: StringWithAggregatesFilter<"PropertyPriceHistory"> | string
    changedAt?: DateTimeWithAggregatesFilter<"PropertyPriceHistory"> | Date | string
    reason?: StringNullableWithAggregatesFilter<"PropertyPriceHistory"> | string | null
  }

  export type PropertyAmenityWhereInput = {
    AND?: PropertyAmenityWhereInput | PropertyAmenityWhereInput[]
    OR?: PropertyAmenityWhereInput[]
    NOT?: PropertyAmenityWhereInput | PropertyAmenityWhereInput[]
    id?: StringFilter<"PropertyAmenity"> | string
    propertyId?: StringFilter<"PropertyAmenity"> | string
    name?: StringFilter<"PropertyAmenity"> | string
    category?: StringNullableFilter<"PropertyAmenity"> | string | null
    icon?: StringNullableFilter<"PropertyAmenity"> | string | null
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }

  export type PropertyAmenityOrderByWithRelationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    name?: SortOrder
    category?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    property?: PropertyOrderByWithRelationInput
  }

  export type PropertyAmenityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    propertyId_name?: PropertyAmenityPropertyIdNameCompoundUniqueInput
    AND?: PropertyAmenityWhereInput | PropertyAmenityWhereInput[]
    OR?: PropertyAmenityWhereInput[]
    NOT?: PropertyAmenityWhereInput | PropertyAmenityWhereInput[]
    propertyId?: StringFilter<"PropertyAmenity"> | string
    name?: StringFilter<"PropertyAmenity"> | string
    category?: StringNullableFilter<"PropertyAmenity"> | string | null
    icon?: StringNullableFilter<"PropertyAmenity"> | string | null
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }, "id" | "propertyId_name">

  export type PropertyAmenityOrderByWithAggregationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    name?: SortOrder
    category?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    _count?: PropertyAmenityCountOrderByAggregateInput
    _max?: PropertyAmenityMaxOrderByAggregateInput
    _min?: PropertyAmenityMinOrderByAggregateInput
  }

  export type PropertyAmenityScalarWhereWithAggregatesInput = {
    AND?: PropertyAmenityScalarWhereWithAggregatesInput | PropertyAmenityScalarWhereWithAggregatesInput[]
    OR?: PropertyAmenityScalarWhereWithAggregatesInput[]
    NOT?: PropertyAmenityScalarWhereWithAggregatesInput | PropertyAmenityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PropertyAmenity"> | string
    propertyId?: StringWithAggregatesFilter<"PropertyAmenity"> | string
    name?: StringWithAggregatesFilter<"PropertyAmenity"> | string
    category?: StringNullableWithAggregatesFilter<"PropertyAmenity"> | string | null
    icon?: StringNullableWithAggregatesFilter<"PropertyAmenity"> | string | null
  }

  export type FavoriteWhereInput = {
    AND?: FavoriteWhereInput | FavoriteWhereInput[]
    OR?: FavoriteWhereInput[]
    NOT?: FavoriteWhereInput | FavoriteWhereInput[]
    id?: StringFilter<"Favorite"> | string
    userId?: StringFilter<"Favorite"> | string
    propertyId?: StringFilter<"Favorite"> | string
    createdAt?: DateTimeFilter<"Favorite"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }

  export type FavoriteOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
    property?: PropertyOrderByWithRelationInput
  }

  export type FavoriteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_propertyId?: FavoriteUserIdPropertyIdCompoundUniqueInput
    AND?: FavoriteWhereInput | FavoriteWhereInput[]
    OR?: FavoriteWhereInput[]
    NOT?: FavoriteWhereInput | FavoriteWhereInput[]
    userId?: StringFilter<"Favorite"> | string
    propertyId?: StringFilter<"Favorite"> | string
    createdAt?: DateTimeFilter<"Favorite"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }, "id" | "userId_propertyId">

  export type FavoriteOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
    _count?: FavoriteCountOrderByAggregateInput
    _max?: FavoriteMaxOrderByAggregateInput
    _min?: FavoriteMinOrderByAggregateInput
  }

  export type FavoriteScalarWhereWithAggregatesInput = {
    AND?: FavoriteScalarWhereWithAggregatesInput | FavoriteScalarWhereWithAggregatesInput[]
    OR?: FavoriteScalarWhereWithAggregatesInput[]
    NOT?: FavoriteScalarWhereWithAggregatesInput | FavoriteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Favorite"> | string
    userId?: StringWithAggregatesFilter<"Favorite"> | string
    propertyId?: StringWithAggregatesFilter<"Favorite"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Favorite"> | Date | string
  }

  export type InquiryWhereInput = {
    AND?: InquiryWhereInput | InquiryWhereInput[]
    OR?: InquiryWhereInput[]
    NOT?: InquiryWhereInput | InquiryWhereInput[]
    id?: StringFilter<"Inquiry"> | string
    userId?: StringFilter<"Inquiry"> | string
    propertyId?: StringFilter<"Inquiry"> | string
    message?: StringFilter<"Inquiry"> | string
    phone?: StringNullableFilter<"Inquiry"> | string | null
    email?: StringNullableFilter<"Inquiry"> | string | null
    status?: EnumInquiryStatusFilter<"Inquiry"> | $Enums.InquiryStatus
    repliedAt?: DateTimeNullableFilter<"Inquiry"> | Date | string | null
    createdAt?: DateTimeFilter<"Inquiry"> | Date | string
    updatedAt?: DateTimeFilter<"Inquiry"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }

  export type InquiryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    message?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    status?: SortOrder
    repliedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    property?: PropertyOrderByWithRelationInput
  }

  export type InquiryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InquiryWhereInput | InquiryWhereInput[]
    OR?: InquiryWhereInput[]
    NOT?: InquiryWhereInput | InquiryWhereInput[]
    userId?: StringFilter<"Inquiry"> | string
    propertyId?: StringFilter<"Inquiry"> | string
    message?: StringFilter<"Inquiry"> | string
    phone?: StringNullableFilter<"Inquiry"> | string | null
    email?: StringNullableFilter<"Inquiry"> | string | null
    status?: EnumInquiryStatusFilter<"Inquiry"> | $Enums.InquiryStatus
    repliedAt?: DateTimeNullableFilter<"Inquiry"> | Date | string | null
    createdAt?: DateTimeFilter<"Inquiry"> | Date | string
    updatedAt?: DateTimeFilter<"Inquiry"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }, "id">

  export type InquiryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    message?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    status?: SortOrder
    repliedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InquiryCountOrderByAggregateInput
    _max?: InquiryMaxOrderByAggregateInput
    _min?: InquiryMinOrderByAggregateInput
  }

  export type InquiryScalarWhereWithAggregatesInput = {
    AND?: InquiryScalarWhereWithAggregatesInput | InquiryScalarWhereWithAggregatesInput[]
    OR?: InquiryScalarWhereWithAggregatesInput[]
    NOT?: InquiryScalarWhereWithAggregatesInput | InquiryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Inquiry"> | string
    userId?: StringWithAggregatesFilter<"Inquiry"> | string
    propertyId?: StringWithAggregatesFilter<"Inquiry"> | string
    message?: StringWithAggregatesFilter<"Inquiry"> | string
    phone?: StringNullableWithAggregatesFilter<"Inquiry"> | string | null
    email?: StringNullableWithAggregatesFilter<"Inquiry"> | string | null
    status?: EnumInquiryStatusWithAggregatesFilter<"Inquiry"> | $Enums.InquiryStatus
    repliedAt?: DateTimeNullableWithAggregatesFilter<"Inquiry"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Inquiry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Inquiry"> | Date | string
  }

  export type PropertyCreateInput = {
    id?: string
    ownerId: string
    agentId?: string | null
    title: string
    slug: string
    description: string
    type: $Enums.PropertyType
    transaction: $Enums.TransactionType
    status?: $Enums.PropertyStatus
    price: Decimal | DecimalJsLike | number | string
    pricePerSqm?: Decimal | DecimalJsLike | number | string | null
    currency?: string
    isPriceNegotiable?: boolean
    totalArea?: number | null
    livingArea?: number | null
    landArea?: number | null
    rooms?: number | null
    bedrooms?: number | null
    bathrooms?: number | null
    floor?: number | null
    totalFloors?: number | null
    buildingYear?: number | null
    parkingSpaces?: number | null
    heating?: $Enums.HeatingType | null
    condition?: $Enums.PropertyCondition | null
    furniture?: $Enums.FurnitureStatus | null
    balcony?: boolean
    elevator?: boolean
    garage?: boolean
    security?: boolean
    playground?: boolean
    address: string
    city: string
    district: string
    khoroo?: string | null
    zipCode?: string | null
    latitude?: number | null
    longitude?: number | null
    cadastralNumber?: string | null
    ownershipType?: string | null
    landUseType?: string | null
    viewCount?: number
    favoriteCount?: number
    inquiryCount?: number
    isFeatured?: boolean
    isVerified?: boolean
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
    publishedAt?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: PropertyMediaCreateNestedManyWithoutPropertyInput
    priceHistory?: PropertyPriceHistoryCreateNestedManyWithoutPropertyInput
    favorites?: FavoriteCreateNestedManyWithoutPropertyInput
    inquiries?: InquiryCreateNestedManyWithoutPropertyInput
    amenities?: PropertyAmenityCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateInput = {
    id?: string
    ownerId: string
    agentId?: string | null
    title: string
    slug: string
    description: string
    type: $Enums.PropertyType
    transaction: $Enums.TransactionType
    status?: $Enums.PropertyStatus
    price: Decimal | DecimalJsLike | number | string
    pricePerSqm?: Decimal | DecimalJsLike | number | string | null
    currency?: string
    isPriceNegotiable?: boolean
    totalArea?: number | null
    livingArea?: number | null
    landArea?: number | null
    rooms?: number | null
    bedrooms?: number | null
    bathrooms?: number | null
    floor?: number | null
    totalFloors?: number | null
    buildingYear?: number | null
    parkingSpaces?: number | null
    heating?: $Enums.HeatingType | null
    condition?: $Enums.PropertyCondition | null
    furniture?: $Enums.FurnitureStatus | null
    balcony?: boolean
    elevator?: boolean
    garage?: boolean
    security?: boolean
    playground?: boolean
    address: string
    city: string
    district: string
    khoroo?: string | null
    zipCode?: string | null
    latitude?: number | null
    longitude?: number | null
    cadastralNumber?: string | null
    ownershipType?: string | null
    landUseType?: string | null
    viewCount?: number
    favoriteCount?: number
    inquiryCount?: number
    isFeatured?: boolean
    isVerified?: boolean
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
    publishedAt?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: PropertyMediaUncheckedCreateNestedManyWithoutPropertyInput
    priceHistory?: PropertyPriceHistoryUncheckedCreateNestedManyWithoutPropertyInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutPropertyInput
    inquiries?: InquiryUncheckedCreateNestedManyWithoutPropertyInput
    amenities?: PropertyAmenityUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    transaction?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumPropertyStatusFieldUpdateOperationsInput | $Enums.PropertyStatus
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pricePerSqm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    isPriceNegotiable?: BoolFieldUpdateOperationsInput | boolean
    totalArea?: NullableFloatFieldUpdateOperationsInput | number | null
    livingArea?: NullableFloatFieldUpdateOperationsInput | number | null
    landArea?: NullableFloatFieldUpdateOperationsInput | number | null
    rooms?: NullableIntFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    totalFloors?: NullableIntFieldUpdateOperationsInput | number | null
    buildingYear?: NullableIntFieldUpdateOperationsInput | number | null
    parkingSpaces?: NullableIntFieldUpdateOperationsInput | number | null
    heating?: NullableEnumHeatingTypeFieldUpdateOperationsInput | $Enums.HeatingType | null
    condition?: NullableEnumPropertyConditionFieldUpdateOperationsInput | $Enums.PropertyCondition | null
    furniture?: NullableEnumFurnitureStatusFieldUpdateOperationsInput | $Enums.FurnitureStatus | null
    balcony?: BoolFieldUpdateOperationsInput | boolean
    elevator?: BoolFieldUpdateOperationsInput | boolean
    garage?: BoolFieldUpdateOperationsInput | boolean
    security?: BoolFieldUpdateOperationsInput | boolean
    playground?: BoolFieldUpdateOperationsInput | boolean
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    khoroo?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    cadastralNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ownershipType?: NullableStringFieldUpdateOperationsInput | string | null
    landUseType?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    favoriteCount?: IntFieldUpdateOperationsInput | number
    inquiryCount?: IntFieldUpdateOperationsInput | number
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: PropertyMediaUpdateManyWithoutPropertyNestedInput
    priceHistory?: PropertyPriceHistoryUpdateManyWithoutPropertyNestedInput
    favorites?: FavoriteUpdateManyWithoutPropertyNestedInput
    inquiries?: InquiryUpdateManyWithoutPropertyNestedInput
    amenities?: PropertyAmenityUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    transaction?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumPropertyStatusFieldUpdateOperationsInput | $Enums.PropertyStatus
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pricePerSqm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    isPriceNegotiable?: BoolFieldUpdateOperationsInput | boolean
    totalArea?: NullableFloatFieldUpdateOperationsInput | number | null
    livingArea?: NullableFloatFieldUpdateOperationsInput | number | null
    landArea?: NullableFloatFieldUpdateOperationsInput | number | null
    rooms?: NullableIntFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    totalFloors?: NullableIntFieldUpdateOperationsInput | number | null
    buildingYear?: NullableIntFieldUpdateOperationsInput | number | null
    parkingSpaces?: NullableIntFieldUpdateOperationsInput | number | null
    heating?: NullableEnumHeatingTypeFieldUpdateOperationsInput | $Enums.HeatingType | null
    condition?: NullableEnumPropertyConditionFieldUpdateOperationsInput | $Enums.PropertyCondition | null
    furniture?: NullableEnumFurnitureStatusFieldUpdateOperationsInput | $Enums.FurnitureStatus | null
    balcony?: BoolFieldUpdateOperationsInput | boolean
    elevator?: BoolFieldUpdateOperationsInput | boolean
    garage?: BoolFieldUpdateOperationsInput | boolean
    security?: BoolFieldUpdateOperationsInput | boolean
    playground?: BoolFieldUpdateOperationsInput | boolean
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    khoroo?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    cadastralNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ownershipType?: NullableStringFieldUpdateOperationsInput | string | null
    landUseType?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    favoriteCount?: IntFieldUpdateOperationsInput | number
    inquiryCount?: IntFieldUpdateOperationsInput | number
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: PropertyMediaUncheckedUpdateManyWithoutPropertyNestedInput
    priceHistory?: PropertyPriceHistoryUncheckedUpdateManyWithoutPropertyNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutPropertyNestedInput
    inquiries?: InquiryUncheckedUpdateManyWithoutPropertyNestedInput
    amenities?: PropertyAmenityUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyCreateManyInput = {
    id?: string
    ownerId: string
    agentId?: string | null
    title: string
    slug: string
    description: string
    type: $Enums.PropertyType
    transaction: $Enums.TransactionType
    status?: $Enums.PropertyStatus
    price: Decimal | DecimalJsLike | number | string
    pricePerSqm?: Decimal | DecimalJsLike | number | string | null
    currency?: string
    isPriceNegotiable?: boolean
    totalArea?: number | null
    livingArea?: number | null
    landArea?: number | null
    rooms?: number | null
    bedrooms?: number | null
    bathrooms?: number | null
    floor?: number | null
    totalFloors?: number | null
    buildingYear?: number | null
    parkingSpaces?: number | null
    heating?: $Enums.HeatingType | null
    condition?: $Enums.PropertyCondition | null
    furniture?: $Enums.FurnitureStatus | null
    balcony?: boolean
    elevator?: boolean
    garage?: boolean
    security?: boolean
    playground?: boolean
    address: string
    city: string
    district: string
    khoroo?: string | null
    zipCode?: string | null
    latitude?: number | null
    longitude?: number | null
    cadastralNumber?: string | null
    ownershipType?: string | null
    landUseType?: string | null
    viewCount?: number
    favoriteCount?: number
    inquiryCount?: number
    isFeatured?: boolean
    isVerified?: boolean
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
    publishedAt?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    transaction?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumPropertyStatusFieldUpdateOperationsInput | $Enums.PropertyStatus
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pricePerSqm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    isPriceNegotiable?: BoolFieldUpdateOperationsInput | boolean
    totalArea?: NullableFloatFieldUpdateOperationsInput | number | null
    livingArea?: NullableFloatFieldUpdateOperationsInput | number | null
    landArea?: NullableFloatFieldUpdateOperationsInput | number | null
    rooms?: NullableIntFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    totalFloors?: NullableIntFieldUpdateOperationsInput | number | null
    buildingYear?: NullableIntFieldUpdateOperationsInput | number | null
    parkingSpaces?: NullableIntFieldUpdateOperationsInput | number | null
    heating?: NullableEnumHeatingTypeFieldUpdateOperationsInput | $Enums.HeatingType | null
    condition?: NullableEnumPropertyConditionFieldUpdateOperationsInput | $Enums.PropertyCondition | null
    furniture?: NullableEnumFurnitureStatusFieldUpdateOperationsInput | $Enums.FurnitureStatus | null
    balcony?: BoolFieldUpdateOperationsInput | boolean
    elevator?: BoolFieldUpdateOperationsInput | boolean
    garage?: BoolFieldUpdateOperationsInput | boolean
    security?: BoolFieldUpdateOperationsInput | boolean
    playground?: BoolFieldUpdateOperationsInput | boolean
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    khoroo?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    cadastralNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ownershipType?: NullableStringFieldUpdateOperationsInput | string | null
    landUseType?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    favoriteCount?: IntFieldUpdateOperationsInput | number
    inquiryCount?: IntFieldUpdateOperationsInput | number
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    transaction?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumPropertyStatusFieldUpdateOperationsInput | $Enums.PropertyStatus
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pricePerSqm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    isPriceNegotiable?: BoolFieldUpdateOperationsInput | boolean
    totalArea?: NullableFloatFieldUpdateOperationsInput | number | null
    livingArea?: NullableFloatFieldUpdateOperationsInput | number | null
    landArea?: NullableFloatFieldUpdateOperationsInput | number | null
    rooms?: NullableIntFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    totalFloors?: NullableIntFieldUpdateOperationsInput | number | null
    buildingYear?: NullableIntFieldUpdateOperationsInput | number | null
    parkingSpaces?: NullableIntFieldUpdateOperationsInput | number | null
    heating?: NullableEnumHeatingTypeFieldUpdateOperationsInput | $Enums.HeatingType | null
    condition?: NullableEnumPropertyConditionFieldUpdateOperationsInput | $Enums.PropertyCondition | null
    furniture?: NullableEnumFurnitureStatusFieldUpdateOperationsInput | $Enums.FurnitureStatus | null
    balcony?: BoolFieldUpdateOperationsInput | boolean
    elevator?: BoolFieldUpdateOperationsInput | boolean
    garage?: BoolFieldUpdateOperationsInput | boolean
    security?: BoolFieldUpdateOperationsInput | boolean
    playground?: BoolFieldUpdateOperationsInput | boolean
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    khoroo?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    cadastralNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ownershipType?: NullableStringFieldUpdateOperationsInput | string | null
    landUseType?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    favoriteCount?: IntFieldUpdateOperationsInput | number
    inquiryCount?: IntFieldUpdateOperationsInput | number
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyMediaCreateInput = {
    id?: string
    url: string
    thumbnailUrl?: string | null
    type?: $Enums.MediaType
    title?: string | null
    sortOrder?: number
    isPrimary?: boolean
    fileSize?: number | null
    width?: number | null
    height?: number | null
    createdAt?: Date | string
    property: PropertyCreateNestedOneWithoutMediaInput
  }

  export type PropertyMediaUncheckedCreateInput = {
    id?: string
    propertyId: string
    url: string
    thumbnailUrl?: string | null
    type?: $Enums.MediaType
    title?: string | null
    sortOrder?: number
    isPrimary?: boolean
    fileSize?: number | null
    width?: number | null
    height?: number | null
    createdAt?: Date | string
  }

  export type PropertyMediaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutMediaNestedInput
  }

  export type PropertyMediaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyMediaCreateManyInput = {
    id?: string
    propertyId: string
    url: string
    thumbnailUrl?: string | null
    type?: $Enums.MediaType
    title?: string | null
    sortOrder?: number
    isPrimary?: boolean
    fileSize?: number | null
    width?: number | null
    height?: number | null
    createdAt?: Date | string
  }

  export type PropertyMediaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyMediaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyPriceHistoryCreateInput = {
    id?: string
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    changedAt?: Date | string
    reason?: string | null
    property: PropertyCreateNestedOneWithoutPriceHistoryInput
  }

  export type PropertyPriceHistoryUncheckedCreateInput = {
    id?: string
    propertyId: string
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    changedAt?: Date | string
    reason?: string | null
  }

  export type PropertyPriceHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    property?: PropertyUpdateOneRequiredWithoutPriceHistoryNestedInput
  }

  export type PropertyPriceHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PropertyPriceHistoryCreateManyInput = {
    id?: string
    propertyId: string
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    changedAt?: Date | string
    reason?: string | null
  }

  export type PropertyPriceHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PropertyPriceHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PropertyAmenityCreateInput = {
    id?: string
    name: string
    category?: string | null
    icon?: string | null
    property: PropertyCreateNestedOneWithoutAmenitiesInput
  }

  export type PropertyAmenityUncheckedCreateInput = {
    id?: string
    propertyId: string
    name: string
    category?: string | null
    icon?: string | null
  }

  export type PropertyAmenityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    property?: PropertyUpdateOneRequiredWithoutAmenitiesNestedInput
  }

  export type PropertyAmenityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PropertyAmenityCreateManyInput = {
    id?: string
    propertyId: string
    name: string
    category?: string | null
    icon?: string | null
  }

  export type PropertyAmenityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PropertyAmenityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FavoriteCreateInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    property: PropertyCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteUncheckedCreateInput = {
    id?: string
    userId: string
    propertyId: string
    createdAt?: Date | string
  }

  export type FavoriteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoriteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteCreateManyInput = {
    id?: string
    userId: string
    propertyId: string
    createdAt?: Date | string
  }

  export type FavoriteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InquiryCreateInput = {
    id?: string
    userId: string
    message: string
    phone?: string | null
    email?: string | null
    status?: $Enums.InquiryStatus
    repliedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertyCreateNestedOneWithoutInquiriesInput
  }

  export type InquiryUncheckedCreateInput = {
    id?: string
    userId: string
    propertyId: string
    message: string
    phone?: string | null
    email?: string | null
    status?: $Enums.InquiryStatus
    repliedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InquiryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInquiryStatusFieldUpdateOperationsInput | $Enums.InquiryStatus
    repliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutInquiriesNestedInput
  }

  export type InquiryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInquiryStatusFieldUpdateOperationsInput | $Enums.InquiryStatus
    repliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InquiryCreateManyInput = {
    id?: string
    userId: string
    propertyId: string
    message: string
    phone?: string | null
    email?: string | null
    status?: $Enums.InquiryStatus
    repliedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InquiryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInquiryStatusFieldUpdateOperationsInput | $Enums.InquiryStatus
    repliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InquiryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInquiryStatusFieldUpdateOperationsInput | $Enums.InquiryStatus
    repliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumPropertyTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyType | EnumPropertyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyTypeFilter<$PrismaModel> | $Enums.PropertyType
  }

  export type EnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type EnumPropertyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyStatus | EnumPropertyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyStatus[] | ListEnumPropertyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyStatus[] | ListEnumPropertyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyStatusFilter<$PrismaModel> | $Enums.PropertyStatus
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

  export type EnumHeatingTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.HeatingType | EnumHeatingTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.HeatingType[] | ListEnumHeatingTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.HeatingType[] | ListEnumHeatingTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumHeatingTypeNullableFilter<$PrismaModel> | $Enums.HeatingType | null
  }

  export type EnumPropertyConditionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyCondition | EnumPropertyConditionFieldRefInput<$PrismaModel> | null
    in?: $Enums.PropertyCondition[] | ListEnumPropertyConditionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PropertyCondition[] | ListEnumPropertyConditionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPropertyConditionNullableFilter<$PrismaModel> | $Enums.PropertyCondition | null
  }

  export type EnumFurnitureStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.FurnitureStatus | EnumFurnitureStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.FurnitureStatus[] | ListEnumFurnitureStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.FurnitureStatus[] | ListEnumFurnitureStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumFurnitureStatusNullableFilter<$PrismaModel> | $Enums.FurnitureStatus | null
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

  export type PropertyMediaListRelationFilter = {
    every?: PropertyMediaWhereInput
    some?: PropertyMediaWhereInput
    none?: PropertyMediaWhereInput
  }

  export type PropertyPriceHistoryListRelationFilter = {
    every?: PropertyPriceHistoryWhereInput
    some?: PropertyPriceHistoryWhereInput
    none?: PropertyPriceHistoryWhereInput
  }

  export type FavoriteListRelationFilter = {
    every?: FavoriteWhereInput
    some?: FavoriteWhereInput
    none?: FavoriteWhereInput
  }

  export type InquiryListRelationFilter = {
    every?: InquiryWhereInput
    some?: InquiryWhereInput
    none?: InquiryWhereInput
  }

  export type PropertyAmenityListRelationFilter = {
    every?: PropertyAmenityWhereInput
    some?: PropertyAmenityWhereInput
    none?: PropertyAmenityWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PropertyMediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropertyPriceHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FavoriteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InquiryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropertyAmenityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropertyCountOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    agentId?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    type?: SortOrder
    transaction?: SortOrder
    status?: SortOrder
    price?: SortOrder
    pricePerSqm?: SortOrder
    currency?: SortOrder
    isPriceNegotiable?: SortOrder
    totalArea?: SortOrder
    livingArea?: SortOrder
    landArea?: SortOrder
    rooms?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    floor?: SortOrder
    totalFloors?: SortOrder
    buildingYear?: SortOrder
    parkingSpaces?: SortOrder
    heating?: SortOrder
    condition?: SortOrder
    furniture?: SortOrder
    balcony?: SortOrder
    elevator?: SortOrder
    garage?: SortOrder
    security?: SortOrder
    playground?: SortOrder
    address?: SortOrder
    city?: SortOrder
    district?: SortOrder
    khoroo?: SortOrder
    zipCode?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    cadastralNumber?: SortOrder
    ownershipType?: SortOrder
    landUseType?: SortOrder
    viewCount?: SortOrder
    favoriteCount?: SortOrder
    inquiryCount?: SortOrder
    isFeatured?: SortOrder
    isVerified?: SortOrder
    verifiedAt?: SortOrder
    verifiedBy?: SortOrder
    publishedAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyAvgOrderByAggregateInput = {
    price?: SortOrder
    pricePerSqm?: SortOrder
    totalArea?: SortOrder
    livingArea?: SortOrder
    landArea?: SortOrder
    rooms?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    floor?: SortOrder
    totalFloors?: SortOrder
    buildingYear?: SortOrder
    parkingSpaces?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    viewCount?: SortOrder
    favoriteCount?: SortOrder
    inquiryCount?: SortOrder
  }

  export type PropertyMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    agentId?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    type?: SortOrder
    transaction?: SortOrder
    status?: SortOrder
    price?: SortOrder
    pricePerSqm?: SortOrder
    currency?: SortOrder
    isPriceNegotiable?: SortOrder
    totalArea?: SortOrder
    livingArea?: SortOrder
    landArea?: SortOrder
    rooms?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    floor?: SortOrder
    totalFloors?: SortOrder
    buildingYear?: SortOrder
    parkingSpaces?: SortOrder
    heating?: SortOrder
    condition?: SortOrder
    furniture?: SortOrder
    balcony?: SortOrder
    elevator?: SortOrder
    garage?: SortOrder
    security?: SortOrder
    playground?: SortOrder
    address?: SortOrder
    city?: SortOrder
    district?: SortOrder
    khoroo?: SortOrder
    zipCode?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    cadastralNumber?: SortOrder
    ownershipType?: SortOrder
    landUseType?: SortOrder
    viewCount?: SortOrder
    favoriteCount?: SortOrder
    inquiryCount?: SortOrder
    isFeatured?: SortOrder
    isVerified?: SortOrder
    verifiedAt?: SortOrder
    verifiedBy?: SortOrder
    publishedAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyMinOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    agentId?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    type?: SortOrder
    transaction?: SortOrder
    status?: SortOrder
    price?: SortOrder
    pricePerSqm?: SortOrder
    currency?: SortOrder
    isPriceNegotiable?: SortOrder
    totalArea?: SortOrder
    livingArea?: SortOrder
    landArea?: SortOrder
    rooms?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    floor?: SortOrder
    totalFloors?: SortOrder
    buildingYear?: SortOrder
    parkingSpaces?: SortOrder
    heating?: SortOrder
    condition?: SortOrder
    furniture?: SortOrder
    balcony?: SortOrder
    elevator?: SortOrder
    garage?: SortOrder
    security?: SortOrder
    playground?: SortOrder
    address?: SortOrder
    city?: SortOrder
    district?: SortOrder
    khoroo?: SortOrder
    zipCode?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    cadastralNumber?: SortOrder
    ownershipType?: SortOrder
    landUseType?: SortOrder
    viewCount?: SortOrder
    favoriteCount?: SortOrder
    inquiryCount?: SortOrder
    isFeatured?: SortOrder
    isVerified?: SortOrder
    verifiedAt?: SortOrder
    verifiedBy?: SortOrder
    publishedAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertySumOrderByAggregateInput = {
    price?: SortOrder
    pricePerSqm?: SortOrder
    totalArea?: SortOrder
    livingArea?: SortOrder
    landArea?: SortOrder
    rooms?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    floor?: SortOrder
    totalFloors?: SortOrder
    buildingYear?: SortOrder
    parkingSpaces?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    viewCount?: SortOrder
    favoriteCount?: SortOrder
    inquiryCount?: SortOrder
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

  export type EnumPropertyTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyType | EnumPropertyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyTypeWithAggregatesFilter<$PrismaModel> | $Enums.PropertyType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPropertyTypeFilter<$PrismaModel>
    _max?: NestedEnumPropertyTypeFilter<$PrismaModel>
  }

  export type EnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type EnumPropertyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyStatus | EnumPropertyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyStatus[] | ListEnumPropertyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyStatus[] | ListEnumPropertyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyStatusWithAggregatesFilter<$PrismaModel> | $Enums.PropertyStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPropertyStatusFilter<$PrismaModel>
    _max?: NestedEnumPropertyStatusFilter<$PrismaModel>
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

  export type EnumHeatingTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HeatingType | EnumHeatingTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.HeatingType[] | ListEnumHeatingTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.HeatingType[] | ListEnumHeatingTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumHeatingTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.HeatingType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumHeatingTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumHeatingTypeNullableFilter<$PrismaModel>
  }

  export type EnumPropertyConditionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyCondition | EnumPropertyConditionFieldRefInput<$PrismaModel> | null
    in?: $Enums.PropertyCondition[] | ListEnumPropertyConditionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PropertyCondition[] | ListEnumPropertyConditionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPropertyConditionNullableWithAggregatesFilter<$PrismaModel> | $Enums.PropertyCondition | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPropertyConditionNullableFilter<$PrismaModel>
    _max?: NestedEnumPropertyConditionNullableFilter<$PrismaModel>
  }

  export type EnumFurnitureStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FurnitureStatus | EnumFurnitureStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.FurnitureStatus[] | ListEnumFurnitureStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.FurnitureStatus[] | ListEnumFurnitureStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumFurnitureStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.FurnitureStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumFurnitureStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumFurnitureStatusNullableFilter<$PrismaModel>
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

  export type EnumMediaTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaTypeFilter<$PrismaModel> | $Enums.MediaType
  }

  export type PropertyScalarRelationFilter = {
    is?: PropertyWhereInput
    isNot?: PropertyWhereInput
  }

  export type PropertyMediaCountOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    url?: SortOrder
    thumbnailUrl?: SortOrder
    type?: SortOrder
    title?: SortOrder
    sortOrder?: SortOrder
    isPrimary?: SortOrder
    fileSize?: SortOrder
    width?: SortOrder
    height?: SortOrder
    createdAt?: SortOrder
  }

  export type PropertyMediaAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
    fileSize?: SortOrder
    width?: SortOrder
    height?: SortOrder
  }

  export type PropertyMediaMaxOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    url?: SortOrder
    thumbnailUrl?: SortOrder
    type?: SortOrder
    title?: SortOrder
    sortOrder?: SortOrder
    isPrimary?: SortOrder
    fileSize?: SortOrder
    width?: SortOrder
    height?: SortOrder
    createdAt?: SortOrder
  }

  export type PropertyMediaMinOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    url?: SortOrder
    thumbnailUrl?: SortOrder
    type?: SortOrder
    title?: SortOrder
    sortOrder?: SortOrder
    isPrimary?: SortOrder
    fileSize?: SortOrder
    width?: SortOrder
    height?: SortOrder
    createdAt?: SortOrder
  }

  export type PropertyMediaSumOrderByAggregateInput = {
    sortOrder?: SortOrder
    fileSize?: SortOrder
    width?: SortOrder
    height?: SortOrder
  }

  export type EnumMediaTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaTypeWithAggregatesFilter<$PrismaModel> | $Enums.MediaType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMediaTypeFilter<$PrismaModel>
    _max?: NestedEnumMediaTypeFilter<$PrismaModel>
  }

  export type PropertyPriceHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    changedAt?: SortOrder
    reason?: SortOrder
  }

  export type PropertyPriceHistoryAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type PropertyPriceHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    changedAt?: SortOrder
    reason?: SortOrder
  }

  export type PropertyPriceHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    changedAt?: SortOrder
    reason?: SortOrder
  }

  export type PropertyPriceHistorySumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type PropertyAmenityPropertyIdNameCompoundUniqueInput = {
    propertyId: string
    name: string
  }

  export type PropertyAmenityCountOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    name?: SortOrder
    category?: SortOrder
    icon?: SortOrder
  }

  export type PropertyAmenityMaxOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    name?: SortOrder
    category?: SortOrder
    icon?: SortOrder
  }

  export type PropertyAmenityMinOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    name?: SortOrder
    category?: SortOrder
    icon?: SortOrder
  }

  export type FavoriteUserIdPropertyIdCompoundUniqueInput = {
    userId: string
    propertyId: string
  }

  export type FavoriteCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoriteMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoriteMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumInquiryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InquiryStatus | EnumInquiryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InquiryStatus[] | ListEnumInquiryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InquiryStatus[] | ListEnumInquiryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInquiryStatusFilter<$PrismaModel> | $Enums.InquiryStatus
  }

  export type InquiryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    message?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    status?: SortOrder
    repliedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InquiryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    message?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    status?: SortOrder
    repliedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InquiryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    message?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    status?: SortOrder
    repliedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumInquiryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InquiryStatus | EnumInquiryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InquiryStatus[] | ListEnumInquiryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InquiryStatus[] | ListEnumInquiryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInquiryStatusWithAggregatesFilter<$PrismaModel> | $Enums.InquiryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInquiryStatusFilter<$PrismaModel>
    _max?: NestedEnumInquiryStatusFilter<$PrismaModel>
  }

  export type PropertyMediaCreateNestedManyWithoutPropertyInput = {
    create?: XOR<PropertyMediaCreateWithoutPropertyInput, PropertyMediaUncheckedCreateWithoutPropertyInput> | PropertyMediaCreateWithoutPropertyInput[] | PropertyMediaUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyMediaCreateOrConnectWithoutPropertyInput | PropertyMediaCreateOrConnectWithoutPropertyInput[]
    createMany?: PropertyMediaCreateManyPropertyInputEnvelope
    connect?: PropertyMediaWhereUniqueInput | PropertyMediaWhereUniqueInput[]
  }

  export type PropertyPriceHistoryCreateNestedManyWithoutPropertyInput = {
    create?: XOR<PropertyPriceHistoryCreateWithoutPropertyInput, PropertyPriceHistoryUncheckedCreateWithoutPropertyInput> | PropertyPriceHistoryCreateWithoutPropertyInput[] | PropertyPriceHistoryUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyPriceHistoryCreateOrConnectWithoutPropertyInput | PropertyPriceHistoryCreateOrConnectWithoutPropertyInput[]
    createMany?: PropertyPriceHistoryCreateManyPropertyInputEnvelope
    connect?: PropertyPriceHistoryWhereUniqueInput | PropertyPriceHistoryWhereUniqueInput[]
  }

  export type FavoriteCreateNestedManyWithoutPropertyInput = {
    create?: XOR<FavoriteCreateWithoutPropertyInput, FavoriteUncheckedCreateWithoutPropertyInput> | FavoriteCreateWithoutPropertyInput[] | FavoriteUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutPropertyInput | FavoriteCreateOrConnectWithoutPropertyInput[]
    createMany?: FavoriteCreateManyPropertyInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type InquiryCreateNestedManyWithoutPropertyInput = {
    create?: XOR<InquiryCreateWithoutPropertyInput, InquiryUncheckedCreateWithoutPropertyInput> | InquiryCreateWithoutPropertyInput[] | InquiryUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: InquiryCreateOrConnectWithoutPropertyInput | InquiryCreateOrConnectWithoutPropertyInput[]
    createMany?: InquiryCreateManyPropertyInputEnvelope
    connect?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
  }

  export type PropertyAmenityCreateNestedManyWithoutPropertyInput = {
    create?: XOR<PropertyAmenityCreateWithoutPropertyInput, PropertyAmenityUncheckedCreateWithoutPropertyInput> | PropertyAmenityCreateWithoutPropertyInput[] | PropertyAmenityUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyAmenityCreateOrConnectWithoutPropertyInput | PropertyAmenityCreateOrConnectWithoutPropertyInput[]
    createMany?: PropertyAmenityCreateManyPropertyInputEnvelope
    connect?: PropertyAmenityWhereUniqueInput | PropertyAmenityWhereUniqueInput[]
  }

  export type PropertyMediaUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<PropertyMediaCreateWithoutPropertyInput, PropertyMediaUncheckedCreateWithoutPropertyInput> | PropertyMediaCreateWithoutPropertyInput[] | PropertyMediaUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyMediaCreateOrConnectWithoutPropertyInput | PropertyMediaCreateOrConnectWithoutPropertyInput[]
    createMany?: PropertyMediaCreateManyPropertyInputEnvelope
    connect?: PropertyMediaWhereUniqueInput | PropertyMediaWhereUniqueInput[]
  }

  export type PropertyPriceHistoryUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<PropertyPriceHistoryCreateWithoutPropertyInput, PropertyPriceHistoryUncheckedCreateWithoutPropertyInput> | PropertyPriceHistoryCreateWithoutPropertyInput[] | PropertyPriceHistoryUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyPriceHistoryCreateOrConnectWithoutPropertyInput | PropertyPriceHistoryCreateOrConnectWithoutPropertyInput[]
    createMany?: PropertyPriceHistoryCreateManyPropertyInputEnvelope
    connect?: PropertyPriceHistoryWhereUniqueInput | PropertyPriceHistoryWhereUniqueInput[]
  }

  export type FavoriteUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<FavoriteCreateWithoutPropertyInput, FavoriteUncheckedCreateWithoutPropertyInput> | FavoriteCreateWithoutPropertyInput[] | FavoriteUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutPropertyInput | FavoriteCreateOrConnectWithoutPropertyInput[]
    createMany?: FavoriteCreateManyPropertyInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type InquiryUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<InquiryCreateWithoutPropertyInput, InquiryUncheckedCreateWithoutPropertyInput> | InquiryCreateWithoutPropertyInput[] | InquiryUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: InquiryCreateOrConnectWithoutPropertyInput | InquiryCreateOrConnectWithoutPropertyInput[]
    createMany?: InquiryCreateManyPropertyInputEnvelope
    connect?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
  }

  export type PropertyAmenityUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<PropertyAmenityCreateWithoutPropertyInput, PropertyAmenityUncheckedCreateWithoutPropertyInput> | PropertyAmenityCreateWithoutPropertyInput[] | PropertyAmenityUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyAmenityCreateOrConnectWithoutPropertyInput | PropertyAmenityCreateOrConnectWithoutPropertyInput[]
    createMany?: PropertyAmenityCreateManyPropertyInputEnvelope
    connect?: PropertyAmenityWhereUniqueInput | PropertyAmenityWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumPropertyTypeFieldUpdateOperationsInput = {
    set?: $Enums.PropertyType
  }

  export type EnumTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransactionType
  }

  export type EnumPropertyStatusFieldUpdateOperationsInput = {
    set?: $Enums.PropertyStatus
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

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumHeatingTypeFieldUpdateOperationsInput = {
    set?: $Enums.HeatingType | null
  }

  export type NullableEnumPropertyConditionFieldUpdateOperationsInput = {
    set?: $Enums.PropertyCondition | null
  }

  export type NullableEnumFurnitureStatusFieldUpdateOperationsInput = {
    set?: $Enums.FurnitureStatus | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PropertyMediaUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<PropertyMediaCreateWithoutPropertyInput, PropertyMediaUncheckedCreateWithoutPropertyInput> | PropertyMediaCreateWithoutPropertyInput[] | PropertyMediaUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyMediaCreateOrConnectWithoutPropertyInput | PropertyMediaCreateOrConnectWithoutPropertyInput[]
    upsert?: PropertyMediaUpsertWithWhereUniqueWithoutPropertyInput | PropertyMediaUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: PropertyMediaCreateManyPropertyInputEnvelope
    set?: PropertyMediaWhereUniqueInput | PropertyMediaWhereUniqueInput[]
    disconnect?: PropertyMediaWhereUniqueInput | PropertyMediaWhereUniqueInput[]
    delete?: PropertyMediaWhereUniqueInput | PropertyMediaWhereUniqueInput[]
    connect?: PropertyMediaWhereUniqueInput | PropertyMediaWhereUniqueInput[]
    update?: PropertyMediaUpdateWithWhereUniqueWithoutPropertyInput | PropertyMediaUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: PropertyMediaUpdateManyWithWhereWithoutPropertyInput | PropertyMediaUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: PropertyMediaScalarWhereInput | PropertyMediaScalarWhereInput[]
  }

  export type PropertyPriceHistoryUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<PropertyPriceHistoryCreateWithoutPropertyInput, PropertyPriceHistoryUncheckedCreateWithoutPropertyInput> | PropertyPriceHistoryCreateWithoutPropertyInput[] | PropertyPriceHistoryUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyPriceHistoryCreateOrConnectWithoutPropertyInput | PropertyPriceHistoryCreateOrConnectWithoutPropertyInput[]
    upsert?: PropertyPriceHistoryUpsertWithWhereUniqueWithoutPropertyInput | PropertyPriceHistoryUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: PropertyPriceHistoryCreateManyPropertyInputEnvelope
    set?: PropertyPriceHistoryWhereUniqueInput | PropertyPriceHistoryWhereUniqueInput[]
    disconnect?: PropertyPriceHistoryWhereUniqueInput | PropertyPriceHistoryWhereUniqueInput[]
    delete?: PropertyPriceHistoryWhereUniqueInput | PropertyPriceHistoryWhereUniqueInput[]
    connect?: PropertyPriceHistoryWhereUniqueInput | PropertyPriceHistoryWhereUniqueInput[]
    update?: PropertyPriceHistoryUpdateWithWhereUniqueWithoutPropertyInput | PropertyPriceHistoryUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: PropertyPriceHistoryUpdateManyWithWhereWithoutPropertyInput | PropertyPriceHistoryUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: PropertyPriceHistoryScalarWhereInput | PropertyPriceHistoryScalarWhereInput[]
  }

  export type FavoriteUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<FavoriteCreateWithoutPropertyInput, FavoriteUncheckedCreateWithoutPropertyInput> | FavoriteCreateWithoutPropertyInput[] | FavoriteUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutPropertyInput | FavoriteCreateOrConnectWithoutPropertyInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutPropertyInput | FavoriteUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: FavoriteCreateManyPropertyInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutPropertyInput | FavoriteUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutPropertyInput | FavoriteUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type InquiryUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<InquiryCreateWithoutPropertyInput, InquiryUncheckedCreateWithoutPropertyInput> | InquiryCreateWithoutPropertyInput[] | InquiryUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: InquiryCreateOrConnectWithoutPropertyInput | InquiryCreateOrConnectWithoutPropertyInput[]
    upsert?: InquiryUpsertWithWhereUniqueWithoutPropertyInput | InquiryUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: InquiryCreateManyPropertyInputEnvelope
    set?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    disconnect?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    delete?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    connect?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    update?: InquiryUpdateWithWhereUniqueWithoutPropertyInput | InquiryUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: InquiryUpdateManyWithWhereWithoutPropertyInput | InquiryUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: InquiryScalarWhereInput | InquiryScalarWhereInput[]
  }

  export type PropertyAmenityUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<PropertyAmenityCreateWithoutPropertyInput, PropertyAmenityUncheckedCreateWithoutPropertyInput> | PropertyAmenityCreateWithoutPropertyInput[] | PropertyAmenityUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyAmenityCreateOrConnectWithoutPropertyInput | PropertyAmenityCreateOrConnectWithoutPropertyInput[]
    upsert?: PropertyAmenityUpsertWithWhereUniqueWithoutPropertyInput | PropertyAmenityUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: PropertyAmenityCreateManyPropertyInputEnvelope
    set?: PropertyAmenityWhereUniqueInput | PropertyAmenityWhereUniqueInput[]
    disconnect?: PropertyAmenityWhereUniqueInput | PropertyAmenityWhereUniqueInput[]
    delete?: PropertyAmenityWhereUniqueInput | PropertyAmenityWhereUniqueInput[]
    connect?: PropertyAmenityWhereUniqueInput | PropertyAmenityWhereUniqueInput[]
    update?: PropertyAmenityUpdateWithWhereUniqueWithoutPropertyInput | PropertyAmenityUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: PropertyAmenityUpdateManyWithWhereWithoutPropertyInput | PropertyAmenityUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: PropertyAmenityScalarWhereInput | PropertyAmenityScalarWhereInput[]
  }

  export type PropertyMediaUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<PropertyMediaCreateWithoutPropertyInput, PropertyMediaUncheckedCreateWithoutPropertyInput> | PropertyMediaCreateWithoutPropertyInput[] | PropertyMediaUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyMediaCreateOrConnectWithoutPropertyInput | PropertyMediaCreateOrConnectWithoutPropertyInput[]
    upsert?: PropertyMediaUpsertWithWhereUniqueWithoutPropertyInput | PropertyMediaUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: PropertyMediaCreateManyPropertyInputEnvelope
    set?: PropertyMediaWhereUniqueInput | PropertyMediaWhereUniqueInput[]
    disconnect?: PropertyMediaWhereUniqueInput | PropertyMediaWhereUniqueInput[]
    delete?: PropertyMediaWhereUniqueInput | PropertyMediaWhereUniqueInput[]
    connect?: PropertyMediaWhereUniqueInput | PropertyMediaWhereUniqueInput[]
    update?: PropertyMediaUpdateWithWhereUniqueWithoutPropertyInput | PropertyMediaUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: PropertyMediaUpdateManyWithWhereWithoutPropertyInput | PropertyMediaUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: PropertyMediaScalarWhereInput | PropertyMediaScalarWhereInput[]
  }

  export type PropertyPriceHistoryUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<PropertyPriceHistoryCreateWithoutPropertyInput, PropertyPriceHistoryUncheckedCreateWithoutPropertyInput> | PropertyPriceHistoryCreateWithoutPropertyInput[] | PropertyPriceHistoryUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyPriceHistoryCreateOrConnectWithoutPropertyInput | PropertyPriceHistoryCreateOrConnectWithoutPropertyInput[]
    upsert?: PropertyPriceHistoryUpsertWithWhereUniqueWithoutPropertyInput | PropertyPriceHistoryUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: PropertyPriceHistoryCreateManyPropertyInputEnvelope
    set?: PropertyPriceHistoryWhereUniqueInput | PropertyPriceHistoryWhereUniqueInput[]
    disconnect?: PropertyPriceHistoryWhereUniqueInput | PropertyPriceHistoryWhereUniqueInput[]
    delete?: PropertyPriceHistoryWhereUniqueInput | PropertyPriceHistoryWhereUniqueInput[]
    connect?: PropertyPriceHistoryWhereUniqueInput | PropertyPriceHistoryWhereUniqueInput[]
    update?: PropertyPriceHistoryUpdateWithWhereUniqueWithoutPropertyInput | PropertyPriceHistoryUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: PropertyPriceHistoryUpdateManyWithWhereWithoutPropertyInput | PropertyPriceHistoryUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: PropertyPriceHistoryScalarWhereInput | PropertyPriceHistoryScalarWhereInput[]
  }

  export type FavoriteUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<FavoriteCreateWithoutPropertyInput, FavoriteUncheckedCreateWithoutPropertyInput> | FavoriteCreateWithoutPropertyInput[] | FavoriteUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutPropertyInput | FavoriteCreateOrConnectWithoutPropertyInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutPropertyInput | FavoriteUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: FavoriteCreateManyPropertyInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutPropertyInput | FavoriteUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutPropertyInput | FavoriteUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type InquiryUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<InquiryCreateWithoutPropertyInput, InquiryUncheckedCreateWithoutPropertyInput> | InquiryCreateWithoutPropertyInput[] | InquiryUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: InquiryCreateOrConnectWithoutPropertyInput | InquiryCreateOrConnectWithoutPropertyInput[]
    upsert?: InquiryUpsertWithWhereUniqueWithoutPropertyInput | InquiryUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: InquiryCreateManyPropertyInputEnvelope
    set?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    disconnect?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    delete?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    connect?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    update?: InquiryUpdateWithWhereUniqueWithoutPropertyInput | InquiryUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: InquiryUpdateManyWithWhereWithoutPropertyInput | InquiryUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: InquiryScalarWhereInput | InquiryScalarWhereInput[]
  }

  export type PropertyAmenityUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<PropertyAmenityCreateWithoutPropertyInput, PropertyAmenityUncheckedCreateWithoutPropertyInput> | PropertyAmenityCreateWithoutPropertyInput[] | PropertyAmenityUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyAmenityCreateOrConnectWithoutPropertyInput | PropertyAmenityCreateOrConnectWithoutPropertyInput[]
    upsert?: PropertyAmenityUpsertWithWhereUniqueWithoutPropertyInput | PropertyAmenityUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: PropertyAmenityCreateManyPropertyInputEnvelope
    set?: PropertyAmenityWhereUniqueInput | PropertyAmenityWhereUniqueInput[]
    disconnect?: PropertyAmenityWhereUniqueInput | PropertyAmenityWhereUniqueInput[]
    delete?: PropertyAmenityWhereUniqueInput | PropertyAmenityWhereUniqueInput[]
    connect?: PropertyAmenityWhereUniqueInput | PropertyAmenityWhereUniqueInput[]
    update?: PropertyAmenityUpdateWithWhereUniqueWithoutPropertyInput | PropertyAmenityUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: PropertyAmenityUpdateManyWithWhereWithoutPropertyInput | PropertyAmenityUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: PropertyAmenityScalarWhereInput | PropertyAmenityScalarWhereInput[]
  }

  export type PropertyCreateNestedOneWithoutMediaInput = {
    create?: XOR<PropertyCreateWithoutMediaInput, PropertyUncheckedCreateWithoutMediaInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutMediaInput
    connect?: PropertyWhereUniqueInput
  }

  export type EnumMediaTypeFieldUpdateOperationsInput = {
    set?: $Enums.MediaType
  }

  export type PropertyUpdateOneRequiredWithoutMediaNestedInput = {
    create?: XOR<PropertyCreateWithoutMediaInput, PropertyUncheckedCreateWithoutMediaInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutMediaInput
    upsert?: PropertyUpsertWithoutMediaInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutMediaInput, PropertyUpdateWithoutMediaInput>, PropertyUncheckedUpdateWithoutMediaInput>
  }

  export type PropertyCreateNestedOneWithoutPriceHistoryInput = {
    create?: XOR<PropertyCreateWithoutPriceHistoryInput, PropertyUncheckedCreateWithoutPriceHistoryInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutPriceHistoryInput
    connect?: PropertyWhereUniqueInput
  }

  export type PropertyUpdateOneRequiredWithoutPriceHistoryNestedInput = {
    create?: XOR<PropertyCreateWithoutPriceHistoryInput, PropertyUncheckedCreateWithoutPriceHistoryInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutPriceHistoryInput
    upsert?: PropertyUpsertWithoutPriceHistoryInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutPriceHistoryInput, PropertyUpdateWithoutPriceHistoryInput>, PropertyUncheckedUpdateWithoutPriceHistoryInput>
  }

  export type PropertyCreateNestedOneWithoutAmenitiesInput = {
    create?: XOR<PropertyCreateWithoutAmenitiesInput, PropertyUncheckedCreateWithoutAmenitiesInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutAmenitiesInput
    connect?: PropertyWhereUniqueInput
  }

  export type PropertyUpdateOneRequiredWithoutAmenitiesNestedInput = {
    create?: XOR<PropertyCreateWithoutAmenitiesInput, PropertyUncheckedCreateWithoutAmenitiesInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutAmenitiesInput
    upsert?: PropertyUpsertWithoutAmenitiesInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutAmenitiesInput, PropertyUpdateWithoutAmenitiesInput>, PropertyUncheckedUpdateWithoutAmenitiesInput>
  }

  export type PropertyCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<PropertyCreateWithoutFavoritesInput, PropertyUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutFavoritesInput
    connect?: PropertyWhereUniqueInput
  }

  export type PropertyUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: XOR<PropertyCreateWithoutFavoritesInput, PropertyUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutFavoritesInput
    upsert?: PropertyUpsertWithoutFavoritesInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutFavoritesInput, PropertyUpdateWithoutFavoritesInput>, PropertyUncheckedUpdateWithoutFavoritesInput>
  }

  export type PropertyCreateNestedOneWithoutInquiriesInput = {
    create?: XOR<PropertyCreateWithoutInquiriesInput, PropertyUncheckedCreateWithoutInquiriesInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutInquiriesInput
    connect?: PropertyWhereUniqueInput
  }

  export type EnumInquiryStatusFieldUpdateOperationsInput = {
    set?: $Enums.InquiryStatus
  }

  export type PropertyUpdateOneRequiredWithoutInquiriesNestedInput = {
    create?: XOR<PropertyCreateWithoutInquiriesInput, PropertyUncheckedCreateWithoutInquiriesInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutInquiriesInput
    upsert?: PropertyUpsertWithoutInquiriesInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutInquiriesInput, PropertyUpdateWithoutInquiriesInput>, PropertyUncheckedUpdateWithoutInquiriesInput>
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

  export type NestedEnumPropertyTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyType | EnumPropertyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyTypeFilter<$PrismaModel> | $Enums.PropertyType
  }

  export type NestedEnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type NestedEnumPropertyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyStatus | EnumPropertyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyStatus[] | ListEnumPropertyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyStatus[] | ListEnumPropertyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyStatusFilter<$PrismaModel> | $Enums.PropertyStatus
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

  export type NestedEnumHeatingTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.HeatingType | EnumHeatingTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.HeatingType[] | ListEnumHeatingTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.HeatingType[] | ListEnumHeatingTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumHeatingTypeNullableFilter<$PrismaModel> | $Enums.HeatingType | null
  }

  export type NestedEnumPropertyConditionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyCondition | EnumPropertyConditionFieldRefInput<$PrismaModel> | null
    in?: $Enums.PropertyCondition[] | ListEnumPropertyConditionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PropertyCondition[] | ListEnumPropertyConditionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPropertyConditionNullableFilter<$PrismaModel> | $Enums.PropertyCondition | null
  }

  export type NestedEnumFurnitureStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.FurnitureStatus | EnumFurnitureStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.FurnitureStatus[] | ListEnumFurnitureStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.FurnitureStatus[] | ListEnumFurnitureStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumFurnitureStatusNullableFilter<$PrismaModel> | $Enums.FurnitureStatus | null
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

  export type NestedEnumPropertyTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyType | EnumPropertyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyTypeWithAggregatesFilter<$PrismaModel> | $Enums.PropertyType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPropertyTypeFilter<$PrismaModel>
    _max?: NestedEnumPropertyTypeFilter<$PrismaModel>
  }

  export type NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type NestedEnumPropertyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyStatus | EnumPropertyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyStatus[] | ListEnumPropertyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyStatus[] | ListEnumPropertyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyStatusWithAggregatesFilter<$PrismaModel> | $Enums.PropertyStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPropertyStatusFilter<$PrismaModel>
    _max?: NestedEnumPropertyStatusFilter<$PrismaModel>
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

  export type NestedEnumHeatingTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HeatingType | EnumHeatingTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.HeatingType[] | ListEnumHeatingTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.HeatingType[] | ListEnumHeatingTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumHeatingTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.HeatingType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumHeatingTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumHeatingTypeNullableFilter<$PrismaModel>
  }

  export type NestedEnumPropertyConditionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyCondition | EnumPropertyConditionFieldRefInput<$PrismaModel> | null
    in?: $Enums.PropertyCondition[] | ListEnumPropertyConditionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PropertyCondition[] | ListEnumPropertyConditionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPropertyConditionNullableWithAggregatesFilter<$PrismaModel> | $Enums.PropertyCondition | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPropertyConditionNullableFilter<$PrismaModel>
    _max?: NestedEnumPropertyConditionNullableFilter<$PrismaModel>
  }

  export type NestedEnumFurnitureStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FurnitureStatus | EnumFurnitureStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.FurnitureStatus[] | ListEnumFurnitureStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.FurnitureStatus[] | ListEnumFurnitureStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumFurnitureStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.FurnitureStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumFurnitureStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumFurnitureStatusNullableFilter<$PrismaModel>
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

  export type NestedEnumMediaTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaTypeFilter<$PrismaModel> | $Enums.MediaType
  }

  export type NestedEnumMediaTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaTypeWithAggregatesFilter<$PrismaModel> | $Enums.MediaType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMediaTypeFilter<$PrismaModel>
    _max?: NestedEnumMediaTypeFilter<$PrismaModel>
  }

  export type NestedEnumInquiryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InquiryStatus | EnumInquiryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InquiryStatus[] | ListEnumInquiryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InquiryStatus[] | ListEnumInquiryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInquiryStatusFilter<$PrismaModel> | $Enums.InquiryStatus
  }

  export type NestedEnumInquiryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InquiryStatus | EnumInquiryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InquiryStatus[] | ListEnumInquiryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InquiryStatus[] | ListEnumInquiryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInquiryStatusWithAggregatesFilter<$PrismaModel> | $Enums.InquiryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInquiryStatusFilter<$PrismaModel>
    _max?: NestedEnumInquiryStatusFilter<$PrismaModel>
  }

  export type PropertyMediaCreateWithoutPropertyInput = {
    id?: string
    url: string
    thumbnailUrl?: string | null
    type?: $Enums.MediaType
    title?: string | null
    sortOrder?: number
    isPrimary?: boolean
    fileSize?: number | null
    width?: number | null
    height?: number | null
    createdAt?: Date | string
  }

  export type PropertyMediaUncheckedCreateWithoutPropertyInput = {
    id?: string
    url: string
    thumbnailUrl?: string | null
    type?: $Enums.MediaType
    title?: string | null
    sortOrder?: number
    isPrimary?: boolean
    fileSize?: number | null
    width?: number | null
    height?: number | null
    createdAt?: Date | string
  }

  export type PropertyMediaCreateOrConnectWithoutPropertyInput = {
    where: PropertyMediaWhereUniqueInput
    create: XOR<PropertyMediaCreateWithoutPropertyInput, PropertyMediaUncheckedCreateWithoutPropertyInput>
  }

  export type PropertyMediaCreateManyPropertyInputEnvelope = {
    data: PropertyMediaCreateManyPropertyInput | PropertyMediaCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type PropertyPriceHistoryCreateWithoutPropertyInput = {
    id?: string
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    changedAt?: Date | string
    reason?: string | null
  }

  export type PropertyPriceHistoryUncheckedCreateWithoutPropertyInput = {
    id?: string
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    changedAt?: Date | string
    reason?: string | null
  }

  export type PropertyPriceHistoryCreateOrConnectWithoutPropertyInput = {
    where: PropertyPriceHistoryWhereUniqueInput
    create: XOR<PropertyPriceHistoryCreateWithoutPropertyInput, PropertyPriceHistoryUncheckedCreateWithoutPropertyInput>
  }

  export type PropertyPriceHistoryCreateManyPropertyInputEnvelope = {
    data: PropertyPriceHistoryCreateManyPropertyInput | PropertyPriceHistoryCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type FavoriteCreateWithoutPropertyInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type FavoriteUncheckedCreateWithoutPropertyInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type FavoriteCreateOrConnectWithoutPropertyInput = {
    where: FavoriteWhereUniqueInput
    create: XOR<FavoriteCreateWithoutPropertyInput, FavoriteUncheckedCreateWithoutPropertyInput>
  }

  export type FavoriteCreateManyPropertyInputEnvelope = {
    data: FavoriteCreateManyPropertyInput | FavoriteCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type InquiryCreateWithoutPropertyInput = {
    id?: string
    userId: string
    message: string
    phone?: string | null
    email?: string | null
    status?: $Enums.InquiryStatus
    repliedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InquiryUncheckedCreateWithoutPropertyInput = {
    id?: string
    userId: string
    message: string
    phone?: string | null
    email?: string | null
    status?: $Enums.InquiryStatus
    repliedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InquiryCreateOrConnectWithoutPropertyInput = {
    where: InquiryWhereUniqueInput
    create: XOR<InquiryCreateWithoutPropertyInput, InquiryUncheckedCreateWithoutPropertyInput>
  }

  export type InquiryCreateManyPropertyInputEnvelope = {
    data: InquiryCreateManyPropertyInput | InquiryCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type PropertyAmenityCreateWithoutPropertyInput = {
    id?: string
    name: string
    category?: string | null
    icon?: string | null
  }

  export type PropertyAmenityUncheckedCreateWithoutPropertyInput = {
    id?: string
    name: string
    category?: string | null
    icon?: string | null
  }

  export type PropertyAmenityCreateOrConnectWithoutPropertyInput = {
    where: PropertyAmenityWhereUniqueInput
    create: XOR<PropertyAmenityCreateWithoutPropertyInput, PropertyAmenityUncheckedCreateWithoutPropertyInput>
  }

  export type PropertyAmenityCreateManyPropertyInputEnvelope = {
    data: PropertyAmenityCreateManyPropertyInput | PropertyAmenityCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type PropertyMediaUpsertWithWhereUniqueWithoutPropertyInput = {
    where: PropertyMediaWhereUniqueInput
    update: XOR<PropertyMediaUpdateWithoutPropertyInput, PropertyMediaUncheckedUpdateWithoutPropertyInput>
    create: XOR<PropertyMediaCreateWithoutPropertyInput, PropertyMediaUncheckedCreateWithoutPropertyInput>
  }

  export type PropertyMediaUpdateWithWhereUniqueWithoutPropertyInput = {
    where: PropertyMediaWhereUniqueInput
    data: XOR<PropertyMediaUpdateWithoutPropertyInput, PropertyMediaUncheckedUpdateWithoutPropertyInput>
  }

  export type PropertyMediaUpdateManyWithWhereWithoutPropertyInput = {
    where: PropertyMediaScalarWhereInput
    data: XOR<PropertyMediaUpdateManyMutationInput, PropertyMediaUncheckedUpdateManyWithoutPropertyInput>
  }

  export type PropertyMediaScalarWhereInput = {
    AND?: PropertyMediaScalarWhereInput | PropertyMediaScalarWhereInput[]
    OR?: PropertyMediaScalarWhereInput[]
    NOT?: PropertyMediaScalarWhereInput | PropertyMediaScalarWhereInput[]
    id?: StringFilter<"PropertyMedia"> | string
    propertyId?: StringFilter<"PropertyMedia"> | string
    url?: StringFilter<"PropertyMedia"> | string
    thumbnailUrl?: StringNullableFilter<"PropertyMedia"> | string | null
    type?: EnumMediaTypeFilter<"PropertyMedia"> | $Enums.MediaType
    title?: StringNullableFilter<"PropertyMedia"> | string | null
    sortOrder?: IntFilter<"PropertyMedia"> | number
    isPrimary?: BoolFilter<"PropertyMedia"> | boolean
    fileSize?: IntNullableFilter<"PropertyMedia"> | number | null
    width?: IntNullableFilter<"PropertyMedia"> | number | null
    height?: IntNullableFilter<"PropertyMedia"> | number | null
    createdAt?: DateTimeFilter<"PropertyMedia"> | Date | string
  }

  export type PropertyPriceHistoryUpsertWithWhereUniqueWithoutPropertyInput = {
    where: PropertyPriceHistoryWhereUniqueInput
    update: XOR<PropertyPriceHistoryUpdateWithoutPropertyInput, PropertyPriceHistoryUncheckedUpdateWithoutPropertyInput>
    create: XOR<PropertyPriceHistoryCreateWithoutPropertyInput, PropertyPriceHistoryUncheckedCreateWithoutPropertyInput>
  }

  export type PropertyPriceHistoryUpdateWithWhereUniqueWithoutPropertyInput = {
    where: PropertyPriceHistoryWhereUniqueInput
    data: XOR<PropertyPriceHistoryUpdateWithoutPropertyInput, PropertyPriceHistoryUncheckedUpdateWithoutPropertyInput>
  }

  export type PropertyPriceHistoryUpdateManyWithWhereWithoutPropertyInput = {
    where: PropertyPriceHistoryScalarWhereInput
    data: XOR<PropertyPriceHistoryUpdateManyMutationInput, PropertyPriceHistoryUncheckedUpdateManyWithoutPropertyInput>
  }

  export type PropertyPriceHistoryScalarWhereInput = {
    AND?: PropertyPriceHistoryScalarWhereInput | PropertyPriceHistoryScalarWhereInput[]
    OR?: PropertyPriceHistoryScalarWhereInput[]
    NOT?: PropertyPriceHistoryScalarWhereInput | PropertyPriceHistoryScalarWhereInput[]
    id?: StringFilter<"PropertyPriceHistory"> | string
    propertyId?: StringFilter<"PropertyPriceHistory"> | string
    price?: DecimalFilter<"PropertyPriceHistory"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"PropertyPriceHistory"> | string
    changedAt?: DateTimeFilter<"PropertyPriceHistory"> | Date | string
    reason?: StringNullableFilter<"PropertyPriceHistory"> | string | null
  }

  export type FavoriteUpsertWithWhereUniqueWithoutPropertyInput = {
    where: FavoriteWhereUniqueInput
    update: XOR<FavoriteUpdateWithoutPropertyInput, FavoriteUncheckedUpdateWithoutPropertyInput>
    create: XOR<FavoriteCreateWithoutPropertyInput, FavoriteUncheckedCreateWithoutPropertyInput>
  }

  export type FavoriteUpdateWithWhereUniqueWithoutPropertyInput = {
    where: FavoriteWhereUniqueInput
    data: XOR<FavoriteUpdateWithoutPropertyInput, FavoriteUncheckedUpdateWithoutPropertyInput>
  }

  export type FavoriteUpdateManyWithWhereWithoutPropertyInput = {
    where: FavoriteScalarWhereInput
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyWithoutPropertyInput>
  }

  export type FavoriteScalarWhereInput = {
    AND?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
    OR?: FavoriteScalarWhereInput[]
    NOT?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
    id?: StringFilter<"Favorite"> | string
    userId?: StringFilter<"Favorite"> | string
    propertyId?: StringFilter<"Favorite"> | string
    createdAt?: DateTimeFilter<"Favorite"> | Date | string
  }

  export type InquiryUpsertWithWhereUniqueWithoutPropertyInput = {
    where: InquiryWhereUniqueInput
    update: XOR<InquiryUpdateWithoutPropertyInput, InquiryUncheckedUpdateWithoutPropertyInput>
    create: XOR<InquiryCreateWithoutPropertyInput, InquiryUncheckedCreateWithoutPropertyInput>
  }

  export type InquiryUpdateWithWhereUniqueWithoutPropertyInput = {
    where: InquiryWhereUniqueInput
    data: XOR<InquiryUpdateWithoutPropertyInput, InquiryUncheckedUpdateWithoutPropertyInput>
  }

  export type InquiryUpdateManyWithWhereWithoutPropertyInput = {
    where: InquiryScalarWhereInput
    data: XOR<InquiryUpdateManyMutationInput, InquiryUncheckedUpdateManyWithoutPropertyInput>
  }

  export type InquiryScalarWhereInput = {
    AND?: InquiryScalarWhereInput | InquiryScalarWhereInput[]
    OR?: InquiryScalarWhereInput[]
    NOT?: InquiryScalarWhereInput | InquiryScalarWhereInput[]
    id?: StringFilter<"Inquiry"> | string
    userId?: StringFilter<"Inquiry"> | string
    propertyId?: StringFilter<"Inquiry"> | string
    message?: StringFilter<"Inquiry"> | string
    phone?: StringNullableFilter<"Inquiry"> | string | null
    email?: StringNullableFilter<"Inquiry"> | string | null
    status?: EnumInquiryStatusFilter<"Inquiry"> | $Enums.InquiryStatus
    repliedAt?: DateTimeNullableFilter<"Inquiry"> | Date | string | null
    createdAt?: DateTimeFilter<"Inquiry"> | Date | string
    updatedAt?: DateTimeFilter<"Inquiry"> | Date | string
  }

  export type PropertyAmenityUpsertWithWhereUniqueWithoutPropertyInput = {
    where: PropertyAmenityWhereUniqueInput
    update: XOR<PropertyAmenityUpdateWithoutPropertyInput, PropertyAmenityUncheckedUpdateWithoutPropertyInput>
    create: XOR<PropertyAmenityCreateWithoutPropertyInput, PropertyAmenityUncheckedCreateWithoutPropertyInput>
  }

  export type PropertyAmenityUpdateWithWhereUniqueWithoutPropertyInput = {
    where: PropertyAmenityWhereUniqueInput
    data: XOR<PropertyAmenityUpdateWithoutPropertyInput, PropertyAmenityUncheckedUpdateWithoutPropertyInput>
  }

  export type PropertyAmenityUpdateManyWithWhereWithoutPropertyInput = {
    where: PropertyAmenityScalarWhereInput
    data: XOR<PropertyAmenityUpdateManyMutationInput, PropertyAmenityUncheckedUpdateManyWithoutPropertyInput>
  }

  export type PropertyAmenityScalarWhereInput = {
    AND?: PropertyAmenityScalarWhereInput | PropertyAmenityScalarWhereInput[]
    OR?: PropertyAmenityScalarWhereInput[]
    NOT?: PropertyAmenityScalarWhereInput | PropertyAmenityScalarWhereInput[]
    id?: StringFilter<"PropertyAmenity"> | string
    propertyId?: StringFilter<"PropertyAmenity"> | string
    name?: StringFilter<"PropertyAmenity"> | string
    category?: StringNullableFilter<"PropertyAmenity"> | string | null
    icon?: StringNullableFilter<"PropertyAmenity"> | string | null
  }

  export type PropertyCreateWithoutMediaInput = {
    id?: string
    ownerId: string
    agentId?: string | null
    title: string
    slug: string
    description: string
    type: $Enums.PropertyType
    transaction: $Enums.TransactionType
    status?: $Enums.PropertyStatus
    price: Decimal | DecimalJsLike | number | string
    pricePerSqm?: Decimal | DecimalJsLike | number | string | null
    currency?: string
    isPriceNegotiable?: boolean
    totalArea?: number | null
    livingArea?: number | null
    landArea?: number | null
    rooms?: number | null
    bedrooms?: number | null
    bathrooms?: number | null
    floor?: number | null
    totalFloors?: number | null
    buildingYear?: number | null
    parkingSpaces?: number | null
    heating?: $Enums.HeatingType | null
    condition?: $Enums.PropertyCondition | null
    furniture?: $Enums.FurnitureStatus | null
    balcony?: boolean
    elevator?: boolean
    garage?: boolean
    security?: boolean
    playground?: boolean
    address: string
    city: string
    district: string
    khoroo?: string | null
    zipCode?: string | null
    latitude?: number | null
    longitude?: number | null
    cadastralNumber?: string | null
    ownershipType?: string | null
    landUseType?: string | null
    viewCount?: number
    favoriteCount?: number
    inquiryCount?: number
    isFeatured?: boolean
    isVerified?: boolean
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
    publishedAt?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    priceHistory?: PropertyPriceHistoryCreateNestedManyWithoutPropertyInput
    favorites?: FavoriteCreateNestedManyWithoutPropertyInput
    inquiries?: InquiryCreateNestedManyWithoutPropertyInput
    amenities?: PropertyAmenityCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutMediaInput = {
    id?: string
    ownerId: string
    agentId?: string | null
    title: string
    slug: string
    description: string
    type: $Enums.PropertyType
    transaction: $Enums.TransactionType
    status?: $Enums.PropertyStatus
    price: Decimal | DecimalJsLike | number | string
    pricePerSqm?: Decimal | DecimalJsLike | number | string | null
    currency?: string
    isPriceNegotiable?: boolean
    totalArea?: number | null
    livingArea?: number | null
    landArea?: number | null
    rooms?: number | null
    bedrooms?: number | null
    bathrooms?: number | null
    floor?: number | null
    totalFloors?: number | null
    buildingYear?: number | null
    parkingSpaces?: number | null
    heating?: $Enums.HeatingType | null
    condition?: $Enums.PropertyCondition | null
    furniture?: $Enums.FurnitureStatus | null
    balcony?: boolean
    elevator?: boolean
    garage?: boolean
    security?: boolean
    playground?: boolean
    address: string
    city: string
    district: string
    khoroo?: string | null
    zipCode?: string | null
    latitude?: number | null
    longitude?: number | null
    cadastralNumber?: string | null
    ownershipType?: string | null
    landUseType?: string | null
    viewCount?: number
    favoriteCount?: number
    inquiryCount?: number
    isFeatured?: boolean
    isVerified?: boolean
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
    publishedAt?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    priceHistory?: PropertyPriceHistoryUncheckedCreateNestedManyWithoutPropertyInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutPropertyInput
    inquiries?: InquiryUncheckedCreateNestedManyWithoutPropertyInput
    amenities?: PropertyAmenityUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutMediaInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutMediaInput, PropertyUncheckedCreateWithoutMediaInput>
  }

  export type PropertyUpsertWithoutMediaInput = {
    update: XOR<PropertyUpdateWithoutMediaInput, PropertyUncheckedUpdateWithoutMediaInput>
    create: XOR<PropertyCreateWithoutMediaInput, PropertyUncheckedCreateWithoutMediaInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutMediaInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutMediaInput, PropertyUncheckedUpdateWithoutMediaInput>
  }

  export type PropertyUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    transaction?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumPropertyStatusFieldUpdateOperationsInput | $Enums.PropertyStatus
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pricePerSqm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    isPriceNegotiable?: BoolFieldUpdateOperationsInput | boolean
    totalArea?: NullableFloatFieldUpdateOperationsInput | number | null
    livingArea?: NullableFloatFieldUpdateOperationsInput | number | null
    landArea?: NullableFloatFieldUpdateOperationsInput | number | null
    rooms?: NullableIntFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    totalFloors?: NullableIntFieldUpdateOperationsInput | number | null
    buildingYear?: NullableIntFieldUpdateOperationsInput | number | null
    parkingSpaces?: NullableIntFieldUpdateOperationsInput | number | null
    heating?: NullableEnumHeatingTypeFieldUpdateOperationsInput | $Enums.HeatingType | null
    condition?: NullableEnumPropertyConditionFieldUpdateOperationsInput | $Enums.PropertyCondition | null
    furniture?: NullableEnumFurnitureStatusFieldUpdateOperationsInput | $Enums.FurnitureStatus | null
    balcony?: BoolFieldUpdateOperationsInput | boolean
    elevator?: BoolFieldUpdateOperationsInput | boolean
    garage?: BoolFieldUpdateOperationsInput | boolean
    security?: BoolFieldUpdateOperationsInput | boolean
    playground?: BoolFieldUpdateOperationsInput | boolean
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    khoroo?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    cadastralNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ownershipType?: NullableStringFieldUpdateOperationsInput | string | null
    landUseType?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    favoriteCount?: IntFieldUpdateOperationsInput | number
    inquiryCount?: IntFieldUpdateOperationsInput | number
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    priceHistory?: PropertyPriceHistoryUpdateManyWithoutPropertyNestedInput
    favorites?: FavoriteUpdateManyWithoutPropertyNestedInput
    inquiries?: InquiryUpdateManyWithoutPropertyNestedInput
    amenities?: PropertyAmenityUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    transaction?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumPropertyStatusFieldUpdateOperationsInput | $Enums.PropertyStatus
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pricePerSqm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    isPriceNegotiable?: BoolFieldUpdateOperationsInput | boolean
    totalArea?: NullableFloatFieldUpdateOperationsInput | number | null
    livingArea?: NullableFloatFieldUpdateOperationsInput | number | null
    landArea?: NullableFloatFieldUpdateOperationsInput | number | null
    rooms?: NullableIntFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    totalFloors?: NullableIntFieldUpdateOperationsInput | number | null
    buildingYear?: NullableIntFieldUpdateOperationsInput | number | null
    parkingSpaces?: NullableIntFieldUpdateOperationsInput | number | null
    heating?: NullableEnumHeatingTypeFieldUpdateOperationsInput | $Enums.HeatingType | null
    condition?: NullableEnumPropertyConditionFieldUpdateOperationsInput | $Enums.PropertyCondition | null
    furniture?: NullableEnumFurnitureStatusFieldUpdateOperationsInput | $Enums.FurnitureStatus | null
    balcony?: BoolFieldUpdateOperationsInput | boolean
    elevator?: BoolFieldUpdateOperationsInput | boolean
    garage?: BoolFieldUpdateOperationsInput | boolean
    security?: BoolFieldUpdateOperationsInput | boolean
    playground?: BoolFieldUpdateOperationsInput | boolean
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    khoroo?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    cadastralNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ownershipType?: NullableStringFieldUpdateOperationsInput | string | null
    landUseType?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    favoriteCount?: IntFieldUpdateOperationsInput | number
    inquiryCount?: IntFieldUpdateOperationsInput | number
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    priceHistory?: PropertyPriceHistoryUncheckedUpdateManyWithoutPropertyNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutPropertyNestedInput
    inquiries?: InquiryUncheckedUpdateManyWithoutPropertyNestedInput
    amenities?: PropertyAmenityUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyCreateWithoutPriceHistoryInput = {
    id?: string
    ownerId: string
    agentId?: string | null
    title: string
    slug: string
    description: string
    type: $Enums.PropertyType
    transaction: $Enums.TransactionType
    status?: $Enums.PropertyStatus
    price: Decimal | DecimalJsLike | number | string
    pricePerSqm?: Decimal | DecimalJsLike | number | string | null
    currency?: string
    isPriceNegotiable?: boolean
    totalArea?: number | null
    livingArea?: number | null
    landArea?: number | null
    rooms?: number | null
    bedrooms?: number | null
    bathrooms?: number | null
    floor?: number | null
    totalFloors?: number | null
    buildingYear?: number | null
    parkingSpaces?: number | null
    heating?: $Enums.HeatingType | null
    condition?: $Enums.PropertyCondition | null
    furniture?: $Enums.FurnitureStatus | null
    balcony?: boolean
    elevator?: boolean
    garage?: boolean
    security?: boolean
    playground?: boolean
    address: string
    city: string
    district: string
    khoroo?: string | null
    zipCode?: string | null
    latitude?: number | null
    longitude?: number | null
    cadastralNumber?: string | null
    ownershipType?: string | null
    landUseType?: string | null
    viewCount?: number
    favoriteCount?: number
    inquiryCount?: number
    isFeatured?: boolean
    isVerified?: boolean
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
    publishedAt?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: PropertyMediaCreateNestedManyWithoutPropertyInput
    favorites?: FavoriteCreateNestedManyWithoutPropertyInput
    inquiries?: InquiryCreateNestedManyWithoutPropertyInput
    amenities?: PropertyAmenityCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutPriceHistoryInput = {
    id?: string
    ownerId: string
    agentId?: string | null
    title: string
    slug: string
    description: string
    type: $Enums.PropertyType
    transaction: $Enums.TransactionType
    status?: $Enums.PropertyStatus
    price: Decimal | DecimalJsLike | number | string
    pricePerSqm?: Decimal | DecimalJsLike | number | string | null
    currency?: string
    isPriceNegotiable?: boolean
    totalArea?: number | null
    livingArea?: number | null
    landArea?: number | null
    rooms?: number | null
    bedrooms?: number | null
    bathrooms?: number | null
    floor?: number | null
    totalFloors?: number | null
    buildingYear?: number | null
    parkingSpaces?: number | null
    heating?: $Enums.HeatingType | null
    condition?: $Enums.PropertyCondition | null
    furniture?: $Enums.FurnitureStatus | null
    balcony?: boolean
    elevator?: boolean
    garage?: boolean
    security?: boolean
    playground?: boolean
    address: string
    city: string
    district: string
    khoroo?: string | null
    zipCode?: string | null
    latitude?: number | null
    longitude?: number | null
    cadastralNumber?: string | null
    ownershipType?: string | null
    landUseType?: string | null
    viewCount?: number
    favoriteCount?: number
    inquiryCount?: number
    isFeatured?: boolean
    isVerified?: boolean
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
    publishedAt?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: PropertyMediaUncheckedCreateNestedManyWithoutPropertyInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutPropertyInput
    inquiries?: InquiryUncheckedCreateNestedManyWithoutPropertyInput
    amenities?: PropertyAmenityUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutPriceHistoryInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutPriceHistoryInput, PropertyUncheckedCreateWithoutPriceHistoryInput>
  }

  export type PropertyUpsertWithoutPriceHistoryInput = {
    update: XOR<PropertyUpdateWithoutPriceHistoryInput, PropertyUncheckedUpdateWithoutPriceHistoryInput>
    create: XOR<PropertyCreateWithoutPriceHistoryInput, PropertyUncheckedCreateWithoutPriceHistoryInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutPriceHistoryInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutPriceHistoryInput, PropertyUncheckedUpdateWithoutPriceHistoryInput>
  }

  export type PropertyUpdateWithoutPriceHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    transaction?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumPropertyStatusFieldUpdateOperationsInput | $Enums.PropertyStatus
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pricePerSqm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    isPriceNegotiable?: BoolFieldUpdateOperationsInput | boolean
    totalArea?: NullableFloatFieldUpdateOperationsInput | number | null
    livingArea?: NullableFloatFieldUpdateOperationsInput | number | null
    landArea?: NullableFloatFieldUpdateOperationsInput | number | null
    rooms?: NullableIntFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    totalFloors?: NullableIntFieldUpdateOperationsInput | number | null
    buildingYear?: NullableIntFieldUpdateOperationsInput | number | null
    parkingSpaces?: NullableIntFieldUpdateOperationsInput | number | null
    heating?: NullableEnumHeatingTypeFieldUpdateOperationsInput | $Enums.HeatingType | null
    condition?: NullableEnumPropertyConditionFieldUpdateOperationsInput | $Enums.PropertyCondition | null
    furniture?: NullableEnumFurnitureStatusFieldUpdateOperationsInput | $Enums.FurnitureStatus | null
    balcony?: BoolFieldUpdateOperationsInput | boolean
    elevator?: BoolFieldUpdateOperationsInput | boolean
    garage?: BoolFieldUpdateOperationsInput | boolean
    security?: BoolFieldUpdateOperationsInput | boolean
    playground?: BoolFieldUpdateOperationsInput | boolean
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    khoroo?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    cadastralNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ownershipType?: NullableStringFieldUpdateOperationsInput | string | null
    landUseType?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    favoriteCount?: IntFieldUpdateOperationsInput | number
    inquiryCount?: IntFieldUpdateOperationsInput | number
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: PropertyMediaUpdateManyWithoutPropertyNestedInput
    favorites?: FavoriteUpdateManyWithoutPropertyNestedInput
    inquiries?: InquiryUpdateManyWithoutPropertyNestedInput
    amenities?: PropertyAmenityUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutPriceHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    transaction?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumPropertyStatusFieldUpdateOperationsInput | $Enums.PropertyStatus
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pricePerSqm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    isPriceNegotiable?: BoolFieldUpdateOperationsInput | boolean
    totalArea?: NullableFloatFieldUpdateOperationsInput | number | null
    livingArea?: NullableFloatFieldUpdateOperationsInput | number | null
    landArea?: NullableFloatFieldUpdateOperationsInput | number | null
    rooms?: NullableIntFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    totalFloors?: NullableIntFieldUpdateOperationsInput | number | null
    buildingYear?: NullableIntFieldUpdateOperationsInput | number | null
    parkingSpaces?: NullableIntFieldUpdateOperationsInput | number | null
    heating?: NullableEnumHeatingTypeFieldUpdateOperationsInput | $Enums.HeatingType | null
    condition?: NullableEnumPropertyConditionFieldUpdateOperationsInput | $Enums.PropertyCondition | null
    furniture?: NullableEnumFurnitureStatusFieldUpdateOperationsInput | $Enums.FurnitureStatus | null
    balcony?: BoolFieldUpdateOperationsInput | boolean
    elevator?: BoolFieldUpdateOperationsInput | boolean
    garage?: BoolFieldUpdateOperationsInput | boolean
    security?: BoolFieldUpdateOperationsInput | boolean
    playground?: BoolFieldUpdateOperationsInput | boolean
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    khoroo?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    cadastralNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ownershipType?: NullableStringFieldUpdateOperationsInput | string | null
    landUseType?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    favoriteCount?: IntFieldUpdateOperationsInput | number
    inquiryCount?: IntFieldUpdateOperationsInput | number
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: PropertyMediaUncheckedUpdateManyWithoutPropertyNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutPropertyNestedInput
    inquiries?: InquiryUncheckedUpdateManyWithoutPropertyNestedInput
    amenities?: PropertyAmenityUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyCreateWithoutAmenitiesInput = {
    id?: string
    ownerId: string
    agentId?: string | null
    title: string
    slug: string
    description: string
    type: $Enums.PropertyType
    transaction: $Enums.TransactionType
    status?: $Enums.PropertyStatus
    price: Decimal | DecimalJsLike | number | string
    pricePerSqm?: Decimal | DecimalJsLike | number | string | null
    currency?: string
    isPriceNegotiable?: boolean
    totalArea?: number | null
    livingArea?: number | null
    landArea?: number | null
    rooms?: number | null
    bedrooms?: number | null
    bathrooms?: number | null
    floor?: number | null
    totalFloors?: number | null
    buildingYear?: number | null
    parkingSpaces?: number | null
    heating?: $Enums.HeatingType | null
    condition?: $Enums.PropertyCondition | null
    furniture?: $Enums.FurnitureStatus | null
    balcony?: boolean
    elevator?: boolean
    garage?: boolean
    security?: boolean
    playground?: boolean
    address: string
    city: string
    district: string
    khoroo?: string | null
    zipCode?: string | null
    latitude?: number | null
    longitude?: number | null
    cadastralNumber?: string | null
    ownershipType?: string | null
    landUseType?: string | null
    viewCount?: number
    favoriteCount?: number
    inquiryCount?: number
    isFeatured?: boolean
    isVerified?: boolean
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
    publishedAt?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: PropertyMediaCreateNestedManyWithoutPropertyInput
    priceHistory?: PropertyPriceHistoryCreateNestedManyWithoutPropertyInput
    favorites?: FavoriteCreateNestedManyWithoutPropertyInput
    inquiries?: InquiryCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutAmenitiesInput = {
    id?: string
    ownerId: string
    agentId?: string | null
    title: string
    slug: string
    description: string
    type: $Enums.PropertyType
    transaction: $Enums.TransactionType
    status?: $Enums.PropertyStatus
    price: Decimal | DecimalJsLike | number | string
    pricePerSqm?: Decimal | DecimalJsLike | number | string | null
    currency?: string
    isPriceNegotiable?: boolean
    totalArea?: number | null
    livingArea?: number | null
    landArea?: number | null
    rooms?: number | null
    bedrooms?: number | null
    bathrooms?: number | null
    floor?: number | null
    totalFloors?: number | null
    buildingYear?: number | null
    parkingSpaces?: number | null
    heating?: $Enums.HeatingType | null
    condition?: $Enums.PropertyCondition | null
    furniture?: $Enums.FurnitureStatus | null
    balcony?: boolean
    elevator?: boolean
    garage?: boolean
    security?: boolean
    playground?: boolean
    address: string
    city: string
    district: string
    khoroo?: string | null
    zipCode?: string | null
    latitude?: number | null
    longitude?: number | null
    cadastralNumber?: string | null
    ownershipType?: string | null
    landUseType?: string | null
    viewCount?: number
    favoriteCount?: number
    inquiryCount?: number
    isFeatured?: boolean
    isVerified?: boolean
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
    publishedAt?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: PropertyMediaUncheckedCreateNestedManyWithoutPropertyInput
    priceHistory?: PropertyPriceHistoryUncheckedCreateNestedManyWithoutPropertyInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutPropertyInput
    inquiries?: InquiryUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutAmenitiesInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutAmenitiesInput, PropertyUncheckedCreateWithoutAmenitiesInput>
  }

  export type PropertyUpsertWithoutAmenitiesInput = {
    update: XOR<PropertyUpdateWithoutAmenitiesInput, PropertyUncheckedUpdateWithoutAmenitiesInput>
    create: XOR<PropertyCreateWithoutAmenitiesInput, PropertyUncheckedCreateWithoutAmenitiesInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutAmenitiesInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutAmenitiesInput, PropertyUncheckedUpdateWithoutAmenitiesInput>
  }

  export type PropertyUpdateWithoutAmenitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    transaction?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumPropertyStatusFieldUpdateOperationsInput | $Enums.PropertyStatus
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pricePerSqm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    isPriceNegotiable?: BoolFieldUpdateOperationsInput | boolean
    totalArea?: NullableFloatFieldUpdateOperationsInput | number | null
    livingArea?: NullableFloatFieldUpdateOperationsInput | number | null
    landArea?: NullableFloatFieldUpdateOperationsInput | number | null
    rooms?: NullableIntFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    totalFloors?: NullableIntFieldUpdateOperationsInput | number | null
    buildingYear?: NullableIntFieldUpdateOperationsInput | number | null
    parkingSpaces?: NullableIntFieldUpdateOperationsInput | number | null
    heating?: NullableEnumHeatingTypeFieldUpdateOperationsInput | $Enums.HeatingType | null
    condition?: NullableEnumPropertyConditionFieldUpdateOperationsInput | $Enums.PropertyCondition | null
    furniture?: NullableEnumFurnitureStatusFieldUpdateOperationsInput | $Enums.FurnitureStatus | null
    balcony?: BoolFieldUpdateOperationsInput | boolean
    elevator?: BoolFieldUpdateOperationsInput | boolean
    garage?: BoolFieldUpdateOperationsInput | boolean
    security?: BoolFieldUpdateOperationsInput | boolean
    playground?: BoolFieldUpdateOperationsInput | boolean
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    khoroo?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    cadastralNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ownershipType?: NullableStringFieldUpdateOperationsInput | string | null
    landUseType?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    favoriteCount?: IntFieldUpdateOperationsInput | number
    inquiryCount?: IntFieldUpdateOperationsInput | number
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: PropertyMediaUpdateManyWithoutPropertyNestedInput
    priceHistory?: PropertyPriceHistoryUpdateManyWithoutPropertyNestedInput
    favorites?: FavoriteUpdateManyWithoutPropertyNestedInput
    inquiries?: InquiryUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutAmenitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    transaction?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumPropertyStatusFieldUpdateOperationsInput | $Enums.PropertyStatus
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pricePerSqm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    isPriceNegotiable?: BoolFieldUpdateOperationsInput | boolean
    totalArea?: NullableFloatFieldUpdateOperationsInput | number | null
    livingArea?: NullableFloatFieldUpdateOperationsInput | number | null
    landArea?: NullableFloatFieldUpdateOperationsInput | number | null
    rooms?: NullableIntFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    totalFloors?: NullableIntFieldUpdateOperationsInput | number | null
    buildingYear?: NullableIntFieldUpdateOperationsInput | number | null
    parkingSpaces?: NullableIntFieldUpdateOperationsInput | number | null
    heating?: NullableEnumHeatingTypeFieldUpdateOperationsInput | $Enums.HeatingType | null
    condition?: NullableEnumPropertyConditionFieldUpdateOperationsInput | $Enums.PropertyCondition | null
    furniture?: NullableEnumFurnitureStatusFieldUpdateOperationsInput | $Enums.FurnitureStatus | null
    balcony?: BoolFieldUpdateOperationsInput | boolean
    elevator?: BoolFieldUpdateOperationsInput | boolean
    garage?: BoolFieldUpdateOperationsInput | boolean
    security?: BoolFieldUpdateOperationsInput | boolean
    playground?: BoolFieldUpdateOperationsInput | boolean
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    khoroo?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    cadastralNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ownershipType?: NullableStringFieldUpdateOperationsInput | string | null
    landUseType?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    favoriteCount?: IntFieldUpdateOperationsInput | number
    inquiryCount?: IntFieldUpdateOperationsInput | number
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: PropertyMediaUncheckedUpdateManyWithoutPropertyNestedInput
    priceHistory?: PropertyPriceHistoryUncheckedUpdateManyWithoutPropertyNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutPropertyNestedInput
    inquiries?: InquiryUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyCreateWithoutFavoritesInput = {
    id?: string
    ownerId: string
    agentId?: string | null
    title: string
    slug: string
    description: string
    type: $Enums.PropertyType
    transaction: $Enums.TransactionType
    status?: $Enums.PropertyStatus
    price: Decimal | DecimalJsLike | number | string
    pricePerSqm?: Decimal | DecimalJsLike | number | string | null
    currency?: string
    isPriceNegotiable?: boolean
    totalArea?: number | null
    livingArea?: number | null
    landArea?: number | null
    rooms?: number | null
    bedrooms?: number | null
    bathrooms?: number | null
    floor?: number | null
    totalFloors?: number | null
    buildingYear?: number | null
    parkingSpaces?: number | null
    heating?: $Enums.HeatingType | null
    condition?: $Enums.PropertyCondition | null
    furniture?: $Enums.FurnitureStatus | null
    balcony?: boolean
    elevator?: boolean
    garage?: boolean
    security?: boolean
    playground?: boolean
    address: string
    city: string
    district: string
    khoroo?: string | null
    zipCode?: string | null
    latitude?: number | null
    longitude?: number | null
    cadastralNumber?: string | null
    ownershipType?: string | null
    landUseType?: string | null
    viewCount?: number
    favoriteCount?: number
    inquiryCount?: number
    isFeatured?: boolean
    isVerified?: boolean
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
    publishedAt?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: PropertyMediaCreateNestedManyWithoutPropertyInput
    priceHistory?: PropertyPriceHistoryCreateNestedManyWithoutPropertyInput
    inquiries?: InquiryCreateNestedManyWithoutPropertyInput
    amenities?: PropertyAmenityCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutFavoritesInput = {
    id?: string
    ownerId: string
    agentId?: string | null
    title: string
    slug: string
    description: string
    type: $Enums.PropertyType
    transaction: $Enums.TransactionType
    status?: $Enums.PropertyStatus
    price: Decimal | DecimalJsLike | number | string
    pricePerSqm?: Decimal | DecimalJsLike | number | string | null
    currency?: string
    isPriceNegotiable?: boolean
    totalArea?: number | null
    livingArea?: number | null
    landArea?: number | null
    rooms?: number | null
    bedrooms?: number | null
    bathrooms?: number | null
    floor?: number | null
    totalFloors?: number | null
    buildingYear?: number | null
    parkingSpaces?: number | null
    heating?: $Enums.HeatingType | null
    condition?: $Enums.PropertyCondition | null
    furniture?: $Enums.FurnitureStatus | null
    balcony?: boolean
    elevator?: boolean
    garage?: boolean
    security?: boolean
    playground?: boolean
    address: string
    city: string
    district: string
    khoroo?: string | null
    zipCode?: string | null
    latitude?: number | null
    longitude?: number | null
    cadastralNumber?: string | null
    ownershipType?: string | null
    landUseType?: string | null
    viewCount?: number
    favoriteCount?: number
    inquiryCount?: number
    isFeatured?: boolean
    isVerified?: boolean
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
    publishedAt?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: PropertyMediaUncheckedCreateNestedManyWithoutPropertyInput
    priceHistory?: PropertyPriceHistoryUncheckedCreateNestedManyWithoutPropertyInput
    inquiries?: InquiryUncheckedCreateNestedManyWithoutPropertyInput
    amenities?: PropertyAmenityUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutFavoritesInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutFavoritesInput, PropertyUncheckedCreateWithoutFavoritesInput>
  }

  export type PropertyUpsertWithoutFavoritesInput = {
    update: XOR<PropertyUpdateWithoutFavoritesInput, PropertyUncheckedUpdateWithoutFavoritesInput>
    create: XOR<PropertyCreateWithoutFavoritesInput, PropertyUncheckedCreateWithoutFavoritesInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutFavoritesInput, PropertyUncheckedUpdateWithoutFavoritesInput>
  }

  export type PropertyUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    transaction?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumPropertyStatusFieldUpdateOperationsInput | $Enums.PropertyStatus
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pricePerSqm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    isPriceNegotiable?: BoolFieldUpdateOperationsInput | boolean
    totalArea?: NullableFloatFieldUpdateOperationsInput | number | null
    livingArea?: NullableFloatFieldUpdateOperationsInput | number | null
    landArea?: NullableFloatFieldUpdateOperationsInput | number | null
    rooms?: NullableIntFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    totalFloors?: NullableIntFieldUpdateOperationsInput | number | null
    buildingYear?: NullableIntFieldUpdateOperationsInput | number | null
    parkingSpaces?: NullableIntFieldUpdateOperationsInput | number | null
    heating?: NullableEnumHeatingTypeFieldUpdateOperationsInput | $Enums.HeatingType | null
    condition?: NullableEnumPropertyConditionFieldUpdateOperationsInput | $Enums.PropertyCondition | null
    furniture?: NullableEnumFurnitureStatusFieldUpdateOperationsInput | $Enums.FurnitureStatus | null
    balcony?: BoolFieldUpdateOperationsInput | boolean
    elevator?: BoolFieldUpdateOperationsInput | boolean
    garage?: BoolFieldUpdateOperationsInput | boolean
    security?: BoolFieldUpdateOperationsInput | boolean
    playground?: BoolFieldUpdateOperationsInput | boolean
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    khoroo?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    cadastralNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ownershipType?: NullableStringFieldUpdateOperationsInput | string | null
    landUseType?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    favoriteCount?: IntFieldUpdateOperationsInput | number
    inquiryCount?: IntFieldUpdateOperationsInput | number
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: PropertyMediaUpdateManyWithoutPropertyNestedInput
    priceHistory?: PropertyPriceHistoryUpdateManyWithoutPropertyNestedInput
    inquiries?: InquiryUpdateManyWithoutPropertyNestedInput
    amenities?: PropertyAmenityUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    transaction?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumPropertyStatusFieldUpdateOperationsInput | $Enums.PropertyStatus
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pricePerSqm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    isPriceNegotiable?: BoolFieldUpdateOperationsInput | boolean
    totalArea?: NullableFloatFieldUpdateOperationsInput | number | null
    livingArea?: NullableFloatFieldUpdateOperationsInput | number | null
    landArea?: NullableFloatFieldUpdateOperationsInput | number | null
    rooms?: NullableIntFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    totalFloors?: NullableIntFieldUpdateOperationsInput | number | null
    buildingYear?: NullableIntFieldUpdateOperationsInput | number | null
    parkingSpaces?: NullableIntFieldUpdateOperationsInput | number | null
    heating?: NullableEnumHeatingTypeFieldUpdateOperationsInput | $Enums.HeatingType | null
    condition?: NullableEnumPropertyConditionFieldUpdateOperationsInput | $Enums.PropertyCondition | null
    furniture?: NullableEnumFurnitureStatusFieldUpdateOperationsInput | $Enums.FurnitureStatus | null
    balcony?: BoolFieldUpdateOperationsInput | boolean
    elevator?: BoolFieldUpdateOperationsInput | boolean
    garage?: BoolFieldUpdateOperationsInput | boolean
    security?: BoolFieldUpdateOperationsInput | boolean
    playground?: BoolFieldUpdateOperationsInput | boolean
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    khoroo?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    cadastralNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ownershipType?: NullableStringFieldUpdateOperationsInput | string | null
    landUseType?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    favoriteCount?: IntFieldUpdateOperationsInput | number
    inquiryCount?: IntFieldUpdateOperationsInput | number
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: PropertyMediaUncheckedUpdateManyWithoutPropertyNestedInput
    priceHistory?: PropertyPriceHistoryUncheckedUpdateManyWithoutPropertyNestedInput
    inquiries?: InquiryUncheckedUpdateManyWithoutPropertyNestedInput
    amenities?: PropertyAmenityUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyCreateWithoutInquiriesInput = {
    id?: string
    ownerId: string
    agentId?: string | null
    title: string
    slug: string
    description: string
    type: $Enums.PropertyType
    transaction: $Enums.TransactionType
    status?: $Enums.PropertyStatus
    price: Decimal | DecimalJsLike | number | string
    pricePerSqm?: Decimal | DecimalJsLike | number | string | null
    currency?: string
    isPriceNegotiable?: boolean
    totalArea?: number | null
    livingArea?: number | null
    landArea?: number | null
    rooms?: number | null
    bedrooms?: number | null
    bathrooms?: number | null
    floor?: number | null
    totalFloors?: number | null
    buildingYear?: number | null
    parkingSpaces?: number | null
    heating?: $Enums.HeatingType | null
    condition?: $Enums.PropertyCondition | null
    furniture?: $Enums.FurnitureStatus | null
    balcony?: boolean
    elevator?: boolean
    garage?: boolean
    security?: boolean
    playground?: boolean
    address: string
    city: string
    district: string
    khoroo?: string | null
    zipCode?: string | null
    latitude?: number | null
    longitude?: number | null
    cadastralNumber?: string | null
    ownershipType?: string | null
    landUseType?: string | null
    viewCount?: number
    favoriteCount?: number
    inquiryCount?: number
    isFeatured?: boolean
    isVerified?: boolean
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
    publishedAt?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: PropertyMediaCreateNestedManyWithoutPropertyInput
    priceHistory?: PropertyPriceHistoryCreateNestedManyWithoutPropertyInput
    favorites?: FavoriteCreateNestedManyWithoutPropertyInput
    amenities?: PropertyAmenityCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutInquiriesInput = {
    id?: string
    ownerId: string
    agentId?: string | null
    title: string
    slug: string
    description: string
    type: $Enums.PropertyType
    transaction: $Enums.TransactionType
    status?: $Enums.PropertyStatus
    price: Decimal | DecimalJsLike | number | string
    pricePerSqm?: Decimal | DecimalJsLike | number | string | null
    currency?: string
    isPriceNegotiable?: boolean
    totalArea?: number | null
    livingArea?: number | null
    landArea?: number | null
    rooms?: number | null
    bedrooms?: number | null
    bathrooms?: number | null
    floor?: number | null
    totalFloors?: number | null
    buildingYear?: number | null
    parkingSpaces?: number | null
    heating?: $Enums.HeatingType | null
    condition?: $Enums.PropertyCondition | null
    furniture?: $Enums.FurnitureStatus | null
    balcony?: boolean
    elevator?: boolean
    garage?: boolean
    security?: boolean
    playground?: boolean
    address: string
    city: string
    district: string
    khoroo?: string | null
    zipCode?: string | null
    latitude?: number | null
    longitude?: number | null
    cadastralNumber?: string | null
    ownershipType?: string | null
    landUseType?: string | null
    viewCount?: number
    favoriteCount?: number
    inquiryCount?: number
    isFeatured?: boolean
    isVerified?: boolean
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
    publishedAt?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: PropertyMediaUncheckedCreateNestedManyWithoutPropertyInput
    priceHistory?: PropertyPriceHistoryUncheckedCreateNestedManyWithoutPropertyInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutPropertyInput
    amenities?: PropertyAmenityUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutInquiriesInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutInquiriesInput, PropertyUncheckedCreateWithoutInquiriesInput>
  }

  export type PropertyUpsertWithoutInquiriesInput = {
    update: XOR<PropertyUpdateWithoutInquiriesInput, PropertyUncheckedUpdateWithoutInquiriesInput>
    create: XOR<PropertyCreateWithoutInquiriesInput, PropertyUncheckedCreateWithoutInquiriesInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutInquiriesInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutInquiriesInput, PropertyUncheckedUpdateWithoutInquiriesInput>
  }

  export type PropertyUpdateWithoutInquiriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    transaction?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumPropertyStatusFieldUpdateOperationsInput | $Enums.PropertyStatus
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pricePerSqm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    isPriceNegotiable?: BoolFieldUpdateOperationsInput | boolean
    totalArea?: NullableFloatFieldUpdateOperationsInput | number | null
    livingArea?: NullableFloatFieldUpdateOperationsInput | number | null
    landArea?: NullableFloatFieldUpdateOperationsInput | number | null
    rooms?: NullableIntFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    totalFloors?: NullableIntFieldUpdateOperationsInput | number | null
    buildingYear?: NullableIntFieldUpdateOperationsInput | number | null
    parkingSpaces?: NullableIntFieldUpdateOperationsInput | number | null
    heating?: NullableEnumHeatingTypeFieldUpdateOperationsInput | $Enums.HeatingType | null
    condition?: NullableEnumPropertyConditionFieldUpdateOperationsInput | $Enums.PropertyCondition | null
    furniture?: NullableEnumFurnitureStatusFieldUpdateOperationsInput | $Enums.FurnitureStatus | null
    balcony?: BoolFieldUpdateOperationsInput | boolean
    elevator?: BoolFieldUpdateOperationsInput | boolean
    garage?: BoolFieldUpdateOperationsInput | boolean
    security?: BoolFieldUpdateOperationsInput | boolean
    playground?: BoolFieldUpdateOperationsInput | boolean
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    khoroo?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    cadastralNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ownershipType?: NullableStringFieldUpdateOperationsInput | string | null
    landUseType?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    favoriteCount?: IntFieldUpdateOperationsInput | number
    inquiryCount?: IntFieldUpdateOperationsInput | number
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: PropertyMediaUpdateManyWithoutPropertyNestedInput
    priceHistory?: PropertyPriceHistoryUpdateManyWithoutPropertyNestedInput
    favorites?: FavoriteUpdateManyWithoutPropertyNestedInput
    amenities?: PropertyAmenityUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutInquiriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    transaction?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumPropertyStatusFieldUpdateOperationsInput | $Enums.PropertyStatus
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pricePerSqm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    isPriceNegotiable?: BoolFieldUpdateOperationsInput | boolean
    totalArea?: NullableFloatFieldUpdateOperationsInput | number | null
    livingArea?: NullableFloatFieldUpdateOperationsInput | number | null
    landArea?: NullableFloatFieldUpdateOperationsInput | number | null
    rooms?: NullableIntFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    totalFloors?: NullableIntFieldUpdateOperationsInput | number | null
    buildingYear?: NullableIntFieldUpdateOperationsInput | number | null
    parkingSpaces?: NullableIntFieldUpdateOperationsInput | number | null
    heating?: NullableEnumHeatingTypeFieldUpdateOperationsInput | $Enums.HeatingType | null
    condition?: NullableEnumPropertyConditionFieldUpdateOperationsInput | $Enums.PropertyCondition | null
    furniture?: NullableEnumFurnitureStatusFieldUpdateOperationsInput | $Enums.FurnitureStatus | null
    balcony?: BoolFieldUpdateOperationsInput | boolean
    elevator?: BoolFieldUpdateOperationsInput | boolean
    garage?: BoolFieldUpdateOperationsInput | boolean
    security?: BoolFieldUpdateOperationsInput | boolean
    playground?: BoolFieldUpdateOperationsInput | boolean
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    khoroo?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    cadastralNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ownershipType?: NullableStringFieldUpdateOperationsInput | string | null
    landUseType?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    favoriteCount?: IntFieldUpdateOperationsInput | number
    inquiryCount?: IntFieldUpdateOperationsInput | number
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: PropertyMediaUncheckedUpdateManyWithoutPropertyNestedInput
    priceHistory?: PropertyPriceHistoryUncheckedUpdateManyWithoutPropertyNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutPropertyNestedInput
    amenities?: PropertyAmenityUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyMediaCreateManyPropertyInput = {
    id?: string
    url: string
    thumbnailUrl?: string | null
    type?: $Enums.MediaType
    title?: string | null
    sortOrder?: number
    isPrimary?: boolean
    fileSize?: number | null
    width?: number | null
    height?: number | null
    createdAt?: Date | string
  }

  export type PropertyPriceHistoryCreateManyPropertyInput = {
    id?: string
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    changedAt?: Date | string
    reason?: string | null
  }

  export type FavoriteCreateManyPropertyInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type InquiryCreateManyPropertyInput = {
    id?: string
    userId: string
    message: string
    phone?: string | null
    email?: string | null
    status?: $Enums.InquiryStatus
    repliedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyAmenityCreateManyPropertyInput = {
    id?: string
    name: string
    category?: string | null
    icon?: string | null
  }

  export type PropertyMediaUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyMediaUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyMediaUncheckedUpdateManyWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyPriceHistoryUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PropertyPriceHistoryUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PropertyPriceHistoryUncheckedUpdateManyWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FavoriteUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InquiryUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInquiryStatusFieldUpdateOperationsInput | $Enums.InquiryStatus
    repliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InquiryUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInquiryStatusFieldUpdateOperationsInput | $Enums.InquiryStatus
    repliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InquiryUncheckedUpdateManyWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInquiryStatusFieldUpdateOperationsInput | $Enums.InquiryStatus
    repliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyAmenityUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PropertyAmenityUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PropertyAmenityUncheckedUpdateManyWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
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