import {
  Injectable,
  OnModuleInit,
  OnModuleDestroy,
  Logger,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Redis from 'ioredis';

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  private client: Redis;
  private subscriber: Redis;
  private readonly logger = new Logger(RedisService.name);

  constructor(private readonly configService: ConfigService) {}

  async onModuleInit() {
    const url = this.configService.get<string>('REDIS_URL') || 'redis://localhost:6379';

    this.client = new Redis(url, {
      maxRetriesPerRequest: 3,
      retryStrategy: (times) => Math.min(times * 100, 3000),
    });

    this.subscriber = new Redis(url, {
      maxRetriesPerRequest: 3,
      retryStrategy: (times) => Math.min(times * 100, 3000),
    });

    this.client.on('connect', () => this.logger.log('Redis connected'));
    this.client.on('error', (err) => this.logger.error('Redis error', err));

    this.subscriber.on('connect', () => this.logger.log('Redis subscriber connected'));
    this.subscriber.on('error', (err) => this.logger.error('Redis subscriber error', err));
  }

  async onModuleDestroy() {
    await this.client?.quit();
    await this.subscriber?.quit();
  }

  getClient(): Redis {
    return this.client;
  }

  getSubscriber(): Redis {
    return this.subscriber;
  }

  // ==========================================
  // Distributed Lock (Redlock-style)
  // ==========================================

  /**
   * Acquire a distributed lock for auction bidding.
   * Prevents race conditions when multiple bids arrive simultaneously.
   */
  async acquireLock(
    key: string,
    ttlMs = 5000,
    retries = 3,
    retryDelay = 200,
  ): Promise<string | null> {
    const lockValue = `${Date.now()}-${Math.random().toString(36).substring(2)}`;

    for (let i = 0; i < retries; i++) {
      const result = await this.client.set(
        `lock:${key}`,
        lockValue,
        'PX',
        ttlMs,
        'NX',
      );

      if (result === 'OK') {
        return lockValue;
      }

      // Wait before retry
      if (i < retries - 1) {
        await new Promise((resolve) => setTimeout(resolve, retryDelay));
      }
    }

    this.logger.warn(`Failed to acquire lock: ${key}`);
    return null;
  }

  /**
   * Release a distributed lock (only if we still own it)
   */
  async releaseLock(key: string, lockValue: string): Promise<boolean> {
    // Lua script: only delete if the value matches (atomic operation)
    const script = `
      if redis.call("get", KEYS[1]) == ARGV[1] then
        return redis.call("del", KEYS[1])
      else
        return 0
      end
    `;

    const result = await this.client.eval(script, 1, `lock:${key}`, lockValue);
    return result === 1;
  }

  // ==========================================
  // Auction Cache
  // ==========================================

  async cacheAuction(auctionId: string, data: any, ttl = 60): Promise<void> {
    await this.client.setex(`auction:${auctionId}`, ttl, JSON.stringify(data));
  }

  async getCachedAuction(auctionId: string): Promise<Record<string, unknown> | null> {
    const cached = await this.client.get(`auction:${auctionId}`);
    return cached ? JSON.parse(cached) : null;
  }

  async invalidateAuctionCache(auctionId: string): Promise<void> {
    await this.client.del(`auction:${auctionId}`);
  }

  // ==========================================
  // Rate Limiting
  // ==========================================

  /**
   * Sliding window rate limiter
   * @returns {remaining, allowed}
   */
  async checkRateLimit(
    key: string,
    maxRequests: number,
    windowMs: number,
  ): Promise<{ allowed: boolean; remaining: number; retryAfterMs: number }> {
    const now = Date.now();
    const windowStart = now - windowMs;
    const redisKey = `ratelimit:${key}`;

    // Lua script for atomic rate limiting
    const script = `
      redis.call("zremrangebyscore", KEYS[1], "-inf", ARGV[1])
      local count = redis.call("zcard", KEYS[1])
      if count < tonumber(ARGV[2]) then
        redis.call("zadd", KEYS[1], ARGV[3], ARGV[4])
        redis.call("pexpire", KEYS[1], ARGV[5])
        return {1, tonumber(ARGV[2]) - count - 1}
      else
        local oldest = redis.call("zrange", KEYS[1], 0, 0, "WITHSCORES")
        if oldest and #oldest > 0 then
          return {0, 0, tonumber(oldest[2]) + tonumber(ARGV[5]) - tonumber(ARGV[3])}
        end
        return {0, 0, tonumber(ARGV[5])}
      end
    `;

    const result = (await this.client.eval(
      script,
      1,
      redisKey,
      windowStart.toString(),
      maxRequests.toString(),
      now.toString(),
      `${now}-${Math.random().toString(36).substring(2)}`,
      windowMs.toString(),
    )) as number[];

    return {
      allowed: result[0] === 1,
      remaining: result[1] || 0,
      retryAfterMs: result[2] || 0,
    };
  }

  // ==========================================
  // Auction Participant Tracking
  // ==========================================

  async addParticipant(auctionId: string, userId: string): Promise<number> {
    return this.client.sadd(`auction:${auctionId}:participants`, userId);
  }

  async getParticipantCount(auctionId: string): Promise<number> {
    return this.client.scard(`auction:${auctionId}:participants`);
  }

  async isParticipant(auctionId: string, userId: string): Promise<boolean> {
    const result = await this.client.sismember(`auction:${auctionId}:participants`, userId);
    return result === 1;
  }

  // ==========================================
  // Live Auction Leaderboard
  // ==========================================

  async updateLeaderboard(auctionId: string, userId: string, amount: number): Promise<void> {
    await this.client.zadd(`auction:${auctionId}:leaderboard`, amount, userId);
  }

  async getLeaderboard(auctionId: string, top = 10): Promise<{ userId: string; amount: number }[]> {
    const results = await this.client.zrevrange(
      `auction:${auctionId}:leaderboard`,
      0,
      top - 1,
      'WITHSCORES',
    );

    const leaderboard: { userId: string; amount: number }[] = [];
    for (let i = 0; i < results.length; i += 2) {
      leaderboard.push({ userId: results[i], amount: Number.parseFloat(results[i + 1]) });
    }
    return leaderboard;
  }

  // ==========================================
  // Online Users per Auction
  // ==========================================

  async trackOnlineUser(auctionId: string, userId: string, ttl = 60): Promise<void> {
    await this.client.setex(`auction:${auctionId}:online:${userId}`, ttl, '1');
    await this.client.sadd(`auction:${auctionId}:online_set`, userId);
  }

  async removeOnlineUser(auctionId: string, userId: string): Promise<void> {
    await this.client.del(`auction:${auctionId}:online:${userId}`);
    await this.client.srem(`auction:${auctionId}:online_set`, userId);
  }

  async getOnlineCount(auctionId: string): Promise<number> {
    return this.client.scard(`auction:${auctionId}:online_set`);
  }

  // ==========================================
  // Pub/Sub for multi-instance sync
  // ==========================================

  async publish(channel: string, message: any): Promise<void> {
    await this.client.publish(channel, JSON.stringify(message));
  }

  async subscribe(channel: string, callback: (message: any) => void): Promise<void> {
    await this.subscriber.subscribe(channel);
    this.subscriber.on('message', (ch, msg) => {
      if (ch === channel) {
        try {
          callback(JSON.parse(msg));
        } catch {
          callback(msg);
        }
      }
    });
  }

  // ==========================================
  // Cleanup
  // ==========================================

  async cleanupAuction(auctionId: string): Promise<void> {
    const keys = await this.client.keys(`auction:${auctionId}:*`);
    if (keys.length > 0) {
      await this.client.del(...keys);
    }
    await this.client.del(`auction:${auctionId}`);
  }
}
