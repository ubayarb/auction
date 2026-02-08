// =============================================
// Auction Types
// =============================================

export enum AuctionType {
  OPEN = 'open',
  SEALED = 'sealed',
  DUTCH = 'dutch',
  RESERVE = 'reserve',
}

export enum AuctionStatus {
  DRAFT = 'draft',
  SCHEDULED = 'scheduled',
  ACTIVE = 'active',
  EXTENDED = 'extended',
  ENDED = 'ended',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
  FAILED = 'failed',
}

export enum BidStatus {
  ACTIVE = 'active',
  OUTBID = 'outbid',
  WINNING = 'winning',
  WON = 'won',
  CANCELLED = 'cancelled',
  INVALID = 'invalid',
}

export interface Auction {
  id: string;
  propertyId: string;
  createdBy: string;

  auctionType: AuctionType;

  startingPrice: number;
  reservePrice?: number;
  minBidIncrement: number;
  currentPrice?: number;
  buyNowPrice?: number;

  startsAt: Date;
  endsAt: Date;
  extendedUntil?: Date;

  depositRequired?: number;
  autoExtendMinutes: number;
  maxExtensions: number;
  extensionsUsed: number;

  status: AuctionStatus;

  winnerId?: string;
  winningBidId?: string;
  finalPrice?: number;

  totalBids: number;
  uniqueBidders: number;

  terms?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Bid {
  id: string;
  auctionId: string;
  bidderId: string;
  amount: number;
  isAutoBid: boolean;
  maxAutoAmount?: number;
  status: BidStatus;
  createdAt: Date;
}

export interface CreateAuctionDto {
  propertyId: string;
  auctionType: AuctionType;
  startingPrice: number;
  reservePrice?: number;
  minBidIncrement: number;
  buyNowPrice?: number;
  depositRequired?: number;
  startsAt: string;
  endsAt: string;
  autoExtendMinutes?: number;
  maxExtensions?: number;
  terms?: string;
}

export interface PlaceBidDto {
  amount: number;
  isAutoBid?: boolean;
  maxAutoAmount?: number;
}

// WebSocket Events
export enum AuctionEvent {
  NEW_BID = 'new_bid',
  AUCTION_EXTENDED = 'auction_extended',
  AUCTION_ENDED = 'auction_ended',
  AUCTION_STARTED = 'auction_started',
  BID_OUTBID = 'bid_outbid',
  BUY_NOW = 'buy_now',
}

export interface AuctionBidEvent {
  event: AuctionEvent.NEW_BID;
  data: {
    auctionId: string;
    currentPrice: number;
    totalBids: number;
    bidder: string;
    timeRemaining: number;
  };
}

export interface AuctionExtendedEvent {
  event: AuctionEvent.AUCTION_EXTENDED;
  data: {
    auctionId: string;
    newEndsAt: string;
    reason: string;
  };
}

export interface AuctionEndedEvent {
  event: AuctionEvent.AUCTION_ENDED;
  data: {
    auctionId: string;
    winner?: string;
    finalPrice?: number;
    totalBids: number;
  };
}
