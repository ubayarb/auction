// =============================================
// Property Types
// =============================================

import { GeoPoint, PaginationQuery } from './common';

export enum PropertyType {
  APARTMENT = 'apartment',
  HOUSE = 'house',
  OFFICE = 'office',
  LAND = 'land',
  WAREHOUSE = 'warehouse',
  COMMERCIAL = 'commercial',
  GARAGE = 'garage',
  OTHER = 'other',
}

export enum TransactionType {
  SALE = 'sale',
  RENT = 'rent',
  AUCTION = 'auction',
}

export enum PropertyStatus {
  DRAFT = 'draft',
  PENDING = 'pending',
  ACTIVE = 'active',
  RESERVED = 'reserved',
  SOLD = 'sold',
  RENTED = 'rented',
  EXPIRED = 'expired',
  REJECTED = 'rejected',
}

export enum HeatingType {
  CENTRAL = 'central',
  INDIVIDUAL = 'individual',
  NONE = 'none',
}

export enum PropertyCondition {
  NEW = 'new',
  RENOVATED = 'renovated',
  GOOD = 'good',
  NEEDS_REPAIR = 'needs_repair',
}

export enum FurnitureStatus {
  FURNISHED = 'furnished',
  SEMI_FURNISHED = 'semi_furnished',
  UNFURNISHED = 'unfurnished',
}

export interface Property {
  id: string;
  ownerId: string;
  agentId?: string;
  categoryId: string;

  title: string;
  slug: string;
  description?: string;
  propertyType: PropertyType;
  transactionType: TransactionType;

  price?: number;
  priceCurrency: string;
  pricePerSqm?: number;
  priceNegotiable: boolean;

  areaTotal?: number;
  areaLiving?: number;
  areaLand?: number;

  address: string;
  city: string;
  district?: string;
  khoroo?: string;
  location?: GeoPoint;

  rooms?: number;
  bedrooms?: number;
  bathrooms?: number;
  floor?: number;
  totalFloors?: number;
  yearBuilt?: number;
  parkingSpaces: number;
  hasElevator: boolean;
  hasBalcony: boolean;
  heatingType?: HeatingType;
  condition?: PropertyCondition;
  furniture?: FurnitureStatus;

  cadastreNumber?: string;
  cadastreVerified: boolean;

  status: PropertyStatus;
  isFeatured: boolean;
  isVerified: boolean;

  viewCount: number;
  favoriteCount: number;

  features: string[];
  media: PropertyMedia[];

  owner?: PropertyOwner;
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface PropertyMedia {
  id: string;
  propertyId: string;
  mediaType: 'image' | 'video' | 'virtual_tour' | 'floor_plan';
  url: string;
  thumbnailUrl?: string;
  title?: string;
  sortOrder: number;
  isPrimary: boolean;
}

export interface PropertyOwner {
  id: string;
  displayName: string;
  avatarUrl?: string;
  verified: boolean;
}

export interface PropertySearchQuery extends PaginationQuery {
  q?: string;
  type?: PropertyType;
  transaction?: TransactionType;
  categoryId?: string;
  city?: string;
  district?: string;
  priceMin?: number;
  priceMax?: number;
  areaMin?: number;
  areaMax?: number;
  roomsMin?: number;
  roomsMax?: number;
  hasParking?: boolean;
  hasElevator?: boolean;
  floorMin?: number;
  floorMax?: number;
  condition?: PropertyCondition;
  furniture?: FurnitureStatus;
  lat?: number;
  lng?: number;
  radius?: number;
  bounds?: string;
}

export interface CreatePropertyDto {
  title: string;
  description?: string;
  propertyType: PropertyType;
  transactionType: TransactionType;
  categoryId: string;
  price: number;
  priceNegotiable?: boolean;
  areaTotal: number;
  areaLiving?: number;
  address: string;
  city: string;
  district?: string;
  khoroo?: string;
  lat: number;
  lng: number;
  rooms?: number;
  bedrooms?: number;
  bathrooms?: number;
  floor?: number;
  totalFloors?: number;
  yearBuilt?: number;
  parkingSpaces?: number;
  hasElevator?: boolean;
  hasBalcony?: boolean;
  heatingType?: HeatingType;
  condition?: PropertyCondition;
  furniture?: FurnitureStatus;
  cadastreNumber?: string;
  features?: string[];
}
