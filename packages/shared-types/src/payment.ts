// =============================================
// Payment Types
// =============================================

export enum PaymentType {
  PROPERTY_PURCHASE = 'property_purchase',
  RENT_PAYMENT = 'rent_payment',
  DEPOSIT = 'deposit',
  ESCROW_FUND = 'escrow_fund',
  LISTING_FEE = 'listing_fee',
  AUCTION_DEPOSIT = 'auction_deposit',
  PLATFORM_FEE = 'platform_fee',
  REFUND = 'refund',
}

export enum PaymentStatus {
  PENDING = 'pending',
  PROCESSING = 'processing',
  COMPLETED = 'completed',
  FAILED = 'failed',
  REFUNDED = 'refunded',
  CANCELLED = 'cancelled',
}

export enum PaymentMethod {
  QPAY = 'qpay',
  SOCIALPAY = 'socialpay',
  BANK_TRANSFER = 'bank_transfer',
  CARD = 'card',
}

export enum EscrowStatus {
  CREATED = 'created',
  FUNDED = 'funded',
  PARTIALLY_RELEASED = 'partially_released',
  RELEASED = 'released',
  CANCELLED = 'cancelled',
  DISPUTED = 'disputed',
}

export interface Payment {
  id: string;
  paymentNumber: string;
  userId: string;
  contractId?: string;
  escrowId?: string;
  auctionId?: string;
  type: PaymentType;
  amount: number;
  currency: string;
  paymentMethod?: PaymentMethod;
  status: PaymentStatus;
  paidAt?: Date;
  platformFee: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface EscrowAccount {
  id: string;
  accountNumber: string;
  contractId?: string;
  auctionId?: string;
  buyerId: string;
  sellerId: string;
  totalAmount: number;
  depositedAmount: number;
  releasedAmount: number;
  currency: string;
  status: EscrowStatus;
  releaseConditions: ReleaseCondition[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ReleaseCondition {
  condition: string;
  met: boolean;
  metAt?: Date;
}

export interface CreateEscrowDto {
  contractId: string;
  totalAmount: number;
  releaseConditions: Array<{ condition: string }>;
}

export interface FundEscrowDto {
  amount: number;
  paymentMethod: PaymentMethod;
}
