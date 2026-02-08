// =============================================
// Contract Types
// =============================================

export enum ContractType {
  SALE = 'sale',
  RENT = 'rent',
  AUCTION_SALE = 'auction_sale',
  AGENT_AGREEMENT = 'agent_agreement',
}

export enum ContractStatus {
  DRAFT = 'draft',
  PENDING_SIGNATURES = 'pending_signatures',
  PARTIALLY_SIGNED = 'partially_signed',
  SIGNED = 'signed',
  NOTARIZED = 'notarized',
  ACTIVE = 'active',
  COMPLETED = 'completed',
  TERMINATED = 'terminated',
  EXPIRED = 'expired',
  DISPUTED = 'disputed',
}

export interface Contract {
  id: string;
  contractNumber: string;
  templateId?: string;
  propertyId: string;
  sellerId: string;
  buyerId: string;
  agentId?: string;
  type: ContractType;
  agreedPrice: number;
  currency: string;
  depositAmount?: number;
  depositDeadline?: Date;
  paymentTerms?: Record<string, any>;
  rentStartDate?: Date;
  rentEndDate?: Date;
  rentMonthly?: number;
  rentDepositMonths?: number;
  content: string;
  status: ContractStatus;
  sellerSignedAt?: Date;
  buyerSignedAt?: Date;
  notarySignedAt?: Date;
  notaryId?: string;
  effectiveDate?: Date;
  expiryDate?: Date;
  pdfUrl?: string;
  version: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateContractDto {
  templateId?: string;
  propertyId: string;
  buyerId: string;
  type: ContractType;
  agreedPrice: number;
  depositAmount?: number;
  depositDeadline?: string;
  paymentTerms?: Record<string, any>;
  rentStartDate?: string;
  rentEndDate?: string;
  rentMonthly?: number;
  rentDepositMonths?: number;
  specialConditions?: string[];
}

export interface SignContractDto {
  signatureData: string;
  otpCode?: string;
}
