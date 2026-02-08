// =============================================
// User Types
// =============================================

export enum UserStatus {
  PENDING = 'pending',
  ACTIVE = 'active',
  SUSPENDED = 'suspended',
  BANNED = 'banned',
}

export enum KycStatus {
  NOT_STARTED = 'not_started',
  PENDING = 'pending',
  VERIFIED = 'verified',
  REJECTED = 'rejected',
}

export enum UserRole {
  BUYER = 'buyer',
  OWNER = 'owner',
  AGENT = 'agent',
  COMPANY = 'company',
  BANK = 'bank',
  NOTARY = 'notary',
  GOV = 'gov',
  ADMIN = 'admin',
}

export interface User {
  id: string;
  email: string;
  phone?: string;
  status: UserStatus;
  emailVerified: boolean;
  phoneVerified: boolean;
  kycStatus: KycStatus;
  roles: UserRole[];
  profile?: UserProfile;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserProfile {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  displayName?: string;
  avatarUrl?: string;
  registerNumber?: string;
  dateOfBirth?: Date;
  gender?: string;
  address?: string;
  city?: string;
  district?: string;
  bio?: string;
  companyName?: string;
  companyRegister?: string;
  licenseNumber?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
  deviceInfo?: DeviceInfo;
}

export interface RegisterRequest {
  email: string;
  phone: string;
  password: string;
  firstName: string;
  lastName: string;
  role?: UserRole;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

export interface AuthResponse {
  tokens: AuthTokens;
  user: User;
}

export interface DeviceInfo {
  platform?: string;
  os?: string;
  browser?: string;
  deviceId?: string;
}
