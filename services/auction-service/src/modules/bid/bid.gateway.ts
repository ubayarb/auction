import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  MessageBody,
  ConnectedSocket,
  WsException,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as jwt from 'jsonwebtoken';
import { BidService } from './bid.service';
import { RedisService } from '../../redis/redis.service';
import { JwtPayload } from '../../guards/auth.guard';

interface AuthenticatedSocket extends Socket {
  data: {
    userId: string;
    email: string;
    role: string;
  };
}

@WebSocketGateway({
  cors: {
    origin: '*',
  },
  namespace: '/auction',
  pingInterval: 25000,
  pingTimeout: 10000,
})
export class BidGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  private readonly logger = new Logger(BidGateway.name);
  private readonly jwtSecret: string;

  // auctionId → Set<userId> онлайн хэрэглэгч
  private readonly onlineUsers = new Map<string, Set<string>>();
  // socketId → { userId, auctionIds }
  private readonly socketMap = new Map<string, { userId: string; auctionIds: Set<string> }>();

  constructor(
    private readonly bidService: BidService,
    private readonly redis: RedisService,
    private readonly configService: ConfigService,
  ) {
    this.jwtSecret = this.configService.get<string>('JWT_SECRET') || 'eland-secret-key-2026';
  }

  afterInit() {
    this.logger.log('🔌 Auction WebSocket Gateway initialized');
  }

  /**
   * 🔐 Connection — JWT token шалгах
   */
  async handleConnection(client: AuthenticatedSocket) {
    try {
      const token =
        client.handshake?.auth?.token ||
        client.handshake?.headers?.authorization?.replace('Bearer ', '') ||
        client.handshake?.query?.token as string;

      if (token) {
        const payload = jwt.verify(token, this.jwtSecret) as JwtPayload;
        client.data = {
          userId: payload.sub,
          email: payload.email,
          role: payload.role,
        };
        this.socketMap.set(client.id, { userId: payload.sub, auctionIds: new Set() });
        this.logger.log(`✅ Authenticated: ${client.id} (user: ${payload.sub})`);
      } else {
        // Anonymous connection зөвшөөрөх (зөвхөн сонсох)
        this.socketMap.set(client.id, { userId: 'anonymous', auctionIds: new Set() });
        this.logger.log(`👤 Anonymous connected: ${client.id}`);
      }
    } catch (error: any) {
      this.logger.warn(`❌ Auth failed: ${client.id} — ${error.message}`);
      client.emit('auth_error', { message: 'Token хүчингүй' });
      client.disconnect();
    }
  }

  /**
   * Disconnect — бүх auction room-оос гарах, online tracking цэвэрлэх
   */
  async handleDisconnect(client: AuthenticatedSocket) {
    const socketInfo = this.socketMap.get(client.id);

    if (socketInfo) {
      for (const auctionId of socketInfo.auctionIds) {
        // Room-оос хасах
        const onlineSet = this.onlineUsers.get(auctionId);
        if (onlineSet) {
          onlineSet.delete(socketInfo.userId);
          if (onlineSet.size === 0) this.onlineUsers.delete(auctionId);
        }

        // Redis-ээс хасах
        await this.redis.removeOnlineUser(auctionId, socketInfo.userId);

        // Бусад хэрэглэгчдэд online count илгээх
        const onlineCount = await this.redis.getOnlineCount(auctionId);
        this.server.to(`auction:${auctionId}`).emit('online_count', {
          auctionId,
          count: onlineCount,
        });
      }
      this.socketMap.delete(client.id);
    }

    this.logger.log(`📴 Disconnected: ${client.id}`);
  }

  /**
   * 🏠 Join auction room
   */
  @SubscribeMessage('join_auction')
  async handleJoinAuction(
    @ConnectedSocket() client: AuthenticatedSocket,
    @MessageBody() data: { auctionId: string },
  ) {
    const { auctionId } = data;

    client.join(`auction:${auctionId}`);

    // Track socket → auction mapping
    const socketInfo = this.socketMap.get(client.id);
    if (socketInfo) {
      socketInfo.auctionIds.add(auctionId);

      // Online tracking
      if (socketInfo.userId !== 'anonymous') {
        if (!this.onlineUsers.has(auctionId)) {
          this.onlineUsers.set(auctionId, new Set());
        }
        this.onlineUsers.get(auctionId)!.add(socketInfo.userId);

        await this.redis.trackOnlineUser(auctionId, socketInfo.userId);
      }
    }

    // Online count илгээх
    const onlineCount = await this.redis.getOnlineCount(auctionId);
    this.server.to(`auction:${auctionId}`).emit('online_count', {
      auctionId,
      count: onlineCount,
    });

    // Leaderboard илгээх
    const leaderboard = await this.bidService.getLeaderboard(auctionId);

    this.logger.log(`🏠 ${client.id} joined auction:${auctionId}`);

    return {
      event: 'joined',
      data: { auctionId, onlineCount, leaderboard },
    };
  }

  /**
   * 🚪 Leave auction room
   */
  @SubscribeMessage('leave_auction')
  async handleLeaveAuction(
    @ConnectedSocket() client: AuthenticatedSocket,
    @MessageBody() data: { auctionId: string },
  ) {
    const { auctionId } = data;

    client.leave(`auction:${auctionId}`);

    const socketInfo = this.socketMap.get(client.id);
    if (socketInfo) {
      socketInfo.auctionIds.delete(auctionId);

      if (socketInfo.userId !== 'anonymous') {
        const onlineSet = this.onlineUsers.get(auctionId);
        if (onlineSet) onlineSet.delete(socketInfo.userId);

        await this.redis.removeOnlineUser(auctionId, socketInfo.userId);
      }
    }

    const onlineCount = await this.redis.getOnlineCount(auctionId);
    this.server.to(`auction:${auctionId}`).emit('online_count', {
      auctionId,
      count: onlineCount,
    });

    return { event: 'left', data: { auctionId } };
  }

  /**
   * 💸 Place bid via WebSocket
   */
  @SubscribeMessage('place_bid')
  async handlePlaceBid(
    @ConnectedSocket() client: AuthenticatedSocket,
    @MessageBody() data: { auctionId: string; amount: number; isAutoBid?: boolean; maxAmount?: number },
  ) {
    const userId = client.data?.userId;

    if (!userId || userId === 'anonymous') {
      throw new WsException('Нэвтрэх шаардлагатай');
    }

    try {
      const result = await this.bidService.placeBid(
        data.auctionId,
        userId,
        data.amount,
        {
          isAutoBid: data.isAutoBid,
          maxAmount: data.maxAmount,
          ipAddress: client.handshake?.address,
          userAgent: client.handshake?.headers?.['user-agent'],
        },
      );

      // 📡 Бүх оролцогчид шинэ bid broadcast
      this.server.to(`auction:${data.auctionId}`).emit('new_bid', {
        bid: {
          id: result.bid.id,
          bidderId: result.bid.bidderId,
          amount: Number(result.bid.amount),
          isAutoBid: result.bid.isAutoBid,
          createdAt: result.bid.createdAt,
        },
        auction: {
          id: result.auction.id,
          currentPrice: Number(result.auction.currentPrice),
          bidCount: result.auction.bidCount,
          status: result.auction.status,
          endTime: result.auction.endTime,
        },
        timestamp: new Date().toISOString(),
      });

      // 📢 Outbid мэдэгдэл (өмнөх highest bidder-д)
      if (result.previousBidder) {
        this.emitToUser(result.previousBidder, 'outbid', {
          auctionId: data.auctionId,
          newAmount: Number(result.bid.amount),
          message: `Таны саналаас ${Number(result.bid.amount).toLocaleString()}₮ илүү санал ирлээ`,
        });
      }

      // 🤖 Auto-bid боловсруулах
      if (result.autoBidTriggered && result.previousBidder) {
        // async, gateway-г block хийхгүй
        setImmediate(async () => {
          const autoBidResult = await this.bidService.processAutoBid(
            data.auctionId,
            result.previousBidder!,
            Number(result.bid.amount),
          );

          if (autoBidResult) {
            this.server.to(`auction:${data.auctionId}`).emit('new_bid', {
              bid: {
                id: autoBidResult.bid.id,
                bidderId: autoBidResult.bid.bidderId,
                amount: Number(autoBidResult.bid.amount),
                isAutoBid: true,
                createdAt: autoBidResult.bid.createdAt,
              },
              auction: {
                id: autoBidResult.auction.id,
                currentPrice: Number(autoBidResult.auction.currentPrice),
                bidCount: autoBidResult.auction.bidCount,
                status: autoBidResult.auction.status,
                endTime: autoBidResult.auction.endTime,
              },
              timestamp: new Date().toISOString(),
            });

            // Outbid мэдэгдэл (original bidder-д)
            this.emitToUser(userId, 'outbid', {
              auctionId: data.auctionId,
              newAmount: Number(autoBidResult.bid.amount),
              message: `Автомат саналаар ${Number(autoBidResult.bid.amount).toLocaleString()}₮ тавигдлаа`,
            });
          }
        });
      }

      // ✅ Амжилттай хариу
      return {
        event: 'bid_placed',
        data: {
          bidId: result.bid.id,
          amount: Number(result.bid.amount),
          auctionId: data.auctionId,
        },
      };
    } catch (error: any) {
      this.logger.warn(`❌ Bid failed: ${error.message}`);
      client.emit('bid_error', {
        message: error.message,
        auctionId: data.auctionId,
        timestamp: new Date().toISOString(),
      });
    }
  }

  /**
   * 💰 Buy Now via WebSocket
   */
  @SubscribeMessage('buy_now')
  async handleBuyNow(
    @ConnectedSocket() client: AuthenticatedSocket,
    @MessageBody() data: { auctionId: string },
  ) {
    const userId = client.data?.userId;
    if (!userId || userId === 'anonymous') {
      throw new WsException('Нэвтрэх шаардлагатай');
    }

    try {
      const result = await this.bidService.buyNow(
        data.auctionId,
        userId,
        {
          ipAddress: client.handshake?.address,
          userAgent: client.handshake?.headers?.['user-agent'],
        },
      );

      // 🏆 Buy Now мэдэгдэл бүх хэрэглэгчид
      this.server.to(`auction:${data.auctionId}`).emit('auction_ended', {
        auctionId: data.auctionId,
        status: 'COMPLETED',
        reason: 'BUY_NOW',
        winnerId: userId,
        winningPrice: Number(result.bid.amount),
        timestamp: new Date().toISOString(),
      });

      return {
        event: 'buy_now_success',
        data: {
          auctionId: data.auctionId,
          price: Number(result.bid.amount),
        },
      };
    } catch (error: any) {
      client.emit('bid_error', {
        message: error.message,
        auctionId: data.auctionId,
        timestamp: new Date().toISOString(),
      });
    }
  }

  /**
   * ❤️ Heartbeat — online status шинэчлэх
   */
  @SubscribeMessage('heartbeat')
  async handleHeartbeat(
    @ConnectedSocket() client: AuthenticatedSocket,
    @MessageBody() data: { auctionId: string },
  ) {
    const userId = client.data?.userId;
    if (userId && userId !== 'anonymous') {
      await this.redis.trackOnlineUser(data.auctionId, userId, 60);
    }
    return { event: 'heartbeat_ack', data: { timestamp: Date.now() } };
  }

  // ==========================================
  // Public methods (scheduler-оос дуудах)
  // ==========================================

  /**
   * 🏁 Дуудлага худалдаа дууссан мэдэгдэл
   */
  emitAuctionEnded(
    auctionId: string,
    data: {
      status: string;
      winnerId?: string;
      winningPrice?: number;
      reason?: string;
    },
  ) {
    this.server.to(`auction:${auctionId}`).emit('auction_ended', {
      auctionId,
      ...data,
      timestamp: new Date().toISOString(),
    });

    this.logger.log(`🏁 Auction ended broadcast: ${auctionId} — ${data.status}`);
  }

  /**
   * ⏰ Хугацаа сунгагдсан мэдэгдэл
   */
  emitAuctionExtended(auctionId: string, newEndTime: Date, extensionsUsed: number) {
    this.server.to(`auction:${auctionId}`).emit('auction_extended', {
      auctionId,
      newEndTime: newEndTime.toISOString(),
      extensionsUsed,
      timestamp: new Date().toISOString(),
    });

    this.logger.log(`⏰ Auction extended broadcast: ${auctionId} → ${newEndTime.toISOString()}`);
  }

  /**
   * 🚀 Дуудлага худалдаа эхэлсэн мэдэгдэл
   */
  emitAuctionStarted(auctionId: string, data: any) {
    this.server.to(`auction:${auctionId}`).emit('auction_started', {
      auctionId,
      ...data,
      timestamp: new Date().toISOString(),
    });
  }

  // ==========================================
  // Private helpers
  // ==========================================

  /**
   * Тодорхой хэрэглэгчид мэдэгдэл илгээх (бүх socket-ээр нь)
   */
  private emitToUser(userId: string, event: string, data: any) {
    for (const [socketId, info] of this.socketMap.entries()) {
      if (info.userId === userId) {
        this.server.to(socketId).emit(event, {
          ...data,
          timestamp: new Date().toISOString(),
        });
      }
    }
  }
}
