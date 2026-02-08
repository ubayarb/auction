// =============================================
// ELAND Mobile — Auction Detail Screen
// =============================================

import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import { io, Socket } from 'socket.io-client';
import { useColors } from '@/hooks/useColors';
import { Spacing, Typography, BorderRadius, Shadows } from '@/constants/Theme';
import { Button } from '@/components/ui/Button';
import { formatPrice, formatCountdown } from '@/lib/utils';
import { auctionApi } from '@/lib/api';
import { API_CONFIG } from '@/config';
import type { Auction, Bid } from '@eland/shared-types';

export default function AuctionDetailScreen() {
  const colors = useColors();
  const { id } = useLocalSearchParams<{ id: string }>();
  const socketRef = useRef<Socket | null>(null);

  const [auction, setAuction] = useState<Auction | null>(null);
  const [bids, setBids] = useState<Bid[]>([]);
  const [loading, setLoading] = useState(true);
  const [countdown, setCountdown] = useState('');
  const [bidAmount, setBidAmount] = useState('');
  const [bidding, setBidding] = useState(false);

  useEffect(() => {
    loadAuction();
    connectWebSocket();

    return () => {
      socketRef.current?.disconnect();
    };
  }, [id]);

  useEffect(() => {
    if (!auction?.status || auction.status !== 'active') return;
    const interval = setInterval(() => {
      setCountdown(formatCountdown(auction.endsAt));
    }, 1000);
    return () => clearInterval(interval);
  }, [auction]);

  const loadAuction = async () => {
    try {
      const { data } = await auctionApi.get(`/auctions/${id}`);
      setAuction(data.data);

      const bidsRes = await auctionApi.get(`/auctions/${id}/bids`);
      setBids(bidsRes.data.data || []);
    } catch (error) {
      console.error('Auction load error:', error);
    } finally {
      setLoading(false);
    }
  };

  const connectWebSocket = () => {
    const socket = io(API_CONFIG.ws.auction, {
      transports: ['websocket'],
    });

    socket.on('connect', () => {
      socket.emit('join_auction', { auctionId: id });
    });

    socket.on('new_bid', (data) => {
      setAuction((prev) =>
        prev ? { ...prev, currentPrice: data.currentPrice, totalBids: data.totalBids } : prev,
      );
      setBids((prev) => [data.bid, ...prev]);
    });

    socket.on('auction_extended', (data) => {
      setAuction((prev) => (prev ? { ...prev, endsAt: data.newEndsAt } : prev));
    });

    socket.on('auction_ended', (data) => {
      setAuction((prev) =>
        prev
          ? { ...prev, status: 'ended' as any, winnerId: data.winner, finalPrice: data.finalPrice }
          : prev,
      );
    });

    socketRef.current = socket;
  };

  const handlePlaceBid = async () => {
    const amount = Number(bidAmount);
    if (!amount || !auction) return;

    const minBid = (auction.currentPrice || auction.startingPrice) + auction.minBidIncrement;
    if (amount < minBid) {
      Alert.alert('Алдаа', `Хамгийн бага үнийн санал: ${formatPrice(minBid)}`);
      return;
    }

    setBidding(true);
    try {
      await auctionApi.post(`/auctions/${id}/bids`, { amount });
      setBidAmount('');
    } catch (error: any) {
      const message = error.response?.data?.error?.message || 'Үнийн санал илгээхэд алдаа гарлаа';
      Alert.alert('Алдаа', message);
    } finally {
      setBidding(false);
    }
  };

  const suggestBid = (multiplier: number) => {
    if (!auction) return;
    const base = (auction.currentPrice || auction.startingPrice) + auction.minBidIncrement * multiplier;
    setBidAmount(String(base));
  };

  if (loading) {
    return (
      <View style={[styles.loading, { backgroundColor: colors.background }]}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  if (!auction) {
    return (
      <View style={[styles.loading, { backgroundColor: colors.background }]}>
        <Text style={[styles.errorText, { color: colors.textSecondary }]}>
          Дуудлага худалдаа олдсонгүй
        </Text>
      </View>
    );
  }

  const currentPrice = auction.currentPrice || auction.startingPrice;
  const minNextBid = currentPrice + auction.minBidIncrement;
  const isLive = auction.status === 'active';

  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: colors.background }]}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Status Banner */}
        <View
          style={[
            styles.statusBanner,
            { backgroundColor: isLive ? colors.auctionLive : colors.surfaceSecondary },
          ]}
        >
          {isLive && <View style={styles.liveDot} />}
          <Text style={[styles.statusText, { color: isLive ? '#FFF' : colors.text }]}>
            {(() => {
              if (isLive) return `LIVE — ${countdown}`;
              if (auction.status === 'ended') return 'ДУУССАН';
              return auction.status.toUpperCase();
            })()}
          </Text>
        </View>

        <View style={styles.content}>
          {/* Current Price */}
          <View style={[styles.priceCard, { backgroundColor: colors.surface }, Shadows.md]}>
            <Text style={[styles.priceLabel, { color: colors.textSecondary }]}>Одоогийн үнэ</Text>
            <Text style={[styles.currentPrice, { color: colors.bidGreen }]}>
              {formatPrice(currentPrice)}
            </Text>
            <View style={styles.priceDetails}>
              <View style={styles.priceDetailItem}>
                <Ionicons name="hammer-outline" size={16} color={colors.textSecondary} />
                <Text style={[styles.detailText, { color: colors.textSecondary }]}>
                  {auction.totalBids} санал
                </Text>
              </View>
              <View style={styles.priceDetailItem}>
                <Ionicons name="people-outline" size={16} color={colors.textSecondary} />
                <Text style={[styles.detailText, { color: colors.textSecondary }]}>
                  {auction.uniqueBidders} оролцогч
                </Text>
              </View>
            </View>
          </View>

          {/* Auction Info */}
          <View style={[styles.infoCard, { backgroundColor: colors.surface }, Shadows.sm]}>
            <InfoRow label="Эхлэх үнэ" value={formatPrice(auction.startingPrice)} colors={colors} />
            <InfoRow
              label="Үнийн алхам"
              value={`+${formatPrice(auction.minBidIncrement)}`}
              colors={colors}
            />
            {auction.buyNowPrice && (
              <InfoRow label="Шууд авах" value={formatPrice(auction.buyNowPrice)} colors={colors} />
            )}
            {auction.depositRequired && (
              <InfoRow
                label="Барьцаа"
                value={formatPrice(auction.depositRequired)}
                colors={colors}
              />
            )}
            <InfoRow
              label="Сунгалт"
              value={`${auction.autoExtendMinutes} мин (${auction.extensionsUsed}/${auction.maxExtensions})`}
              colors={colors}
            />
          </View>

          {/* Bid History */}
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>
              Саналын түүх ({bids.length})
            </Text>
            {bids.slice(0, 10).map((bid, index) => (
              <View
                key={bid.id}
                style={[
                  styles.bidRow,
                  { backgroundColor: index === 0 ? colors.bidGreen + '10' : colors.surface },
                  Shadows.sm,
                ]}
              >
                <View style={styles.bidLeft}>
                  <Ionicons
                    name={index === 0 ? 'trophy' : 'hammer-outline'}
                    size={18}
                    color={index === 0 ? colors.bidGreen : colors.textSecondary}
                  />
                  <View>
                    <Text style={[styles.bidAmount, { color: index === 0 ? colors.bidGreen : colors.text }]}>
                      {formatPrice(bid.amount)}
                    </Text>
                    <Text style={[styles.bidder, { color: colors.textTertiary }]}>
                      {bid.bidderId.slice(0, 8)}...
                    </Text>
                  </View>
                </View>
                <Text style={[styles.bidTime, { color: colors.textTertiary }]}>
                  {new Date(bid.createdAt).toLocaleTimeString('mn-MN')}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Bid Input Bar */}
      {isLive && (
        <View style={[styles.bidBar, { backgroundColor: colors.surface, borderTopColor: colors.border }]}>
          <View style={styles.quickBids}>
            <TouchableOpacity
              style={[styles.quickBid, { borderColor: colors.border }]}
              onPress={() => suggestBid(1)}
            >
              <Text style={[styles.quickBidText, { color: colors.primary }]}>+1x</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.quickBid, { borderColor: colors.border }]}
              onPress={() => suggestBid(2)}
            >
              <Text style={[styles.quickBidText, { color: colors.primary }]}>+2x</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.quickBid, { borderColor: colors.border }]}
              onPress={() => suggestBid(5)}
            >
              <Text style={[styles.quickBidText, { color: colors.primary }]}>+5x</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bidInputRow}>
            <TextInput
              style={[
                styles.bidInput,
                { backgroundColor: colors.surfaceSecondary, color: colors.text, borderColor: colors.border },
              ]}
              placeholder={`${formatPrice(minNextBid)}-с дээш`}
              placeholderTextColor={colors.textTertiary}
              value={bidAmount}
              onChangeText={setBidAmount}
              keyboardType="numeric"
            />
            <Button
              title="Санал"
              onPress={handlePlaceBid}
              loading={bidding}
              disabled={!bidAmount}
              icon={<Ionicons name="hammer" size={18} color="#FFF" />}
            />
          </View>
        </View>
      )}
    </KeyboardAvoidingView>
  );
}

function InfoRow({ label, value, colors }: Readonly<{ label: string; value: string; colors: any }>) {
  return (
    <View style={infoStyles.row}>
      <Text style={[infoStyles.label, { color: colors.textSecondary }]}>{label}</Text>
      <Text style={[infoStyles.value, { color: colors.text }]}>{value}</Text>
    </View>
  );
}

const infoStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: Spacing.md,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E2E8F0',
  },
  label: { ...Typography.bodySmall },
  value: { ...Typography.label },
});

const styles = StyleSheet.create({
  container: { flex: 1 },
  loading: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  errorText: { ...Typography.body },

  statusBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.sm,
    paddingVertical: Spacing.md,
  },
  liveDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FFF',
  },
  statusText: {
    ...Typography.label,
    letterSpacing: 1,
  },

  content: { padding: Spacing.lg },

  priceCard: {
    borderRadius: BorderRadius.lg,
    padding: Spacing.xl,
    alignItems: 'center',
    marginBottom: Spacing.lg,
  },
  priceLabel: { ...Typography.bodySmall, marginBottom: 4 },
  currentPrice: { ...Typography.price, fontSize: 32 },
  priceDetails: {
    flexDirection: 'row',
    gap: Spacing.xl,
    marginTop: Spacing.md,
  },
  priceDetailItem: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  detailText: { ...Typography.bodySmall },

  infoCard: {
    borderRadius: BorderRadius.lg,
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.xl,
  },

  section: { marginBottom: Spacing.xl },
  sectionTitle: { ...Typography.h4, marginBottom: Spacing.md },

  bidRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    marginBottom: Spacing.sm,
  },
  bidLeft: { flexDirection: 'row', alignItems: 'center', gap: Spacing.md },
  bidAmount: { ...Typography.label },
  bidder: { ...Typography.caption },
  bidTime: { ...Typography.caption },

  bidBar: {
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.md,
    paddingBottom: 34,
    borderTopWidth: 1,
  },
  quickBids: {
    flexDirection: 'row',
    gap: Spacing.sm,
    marginBottom: Spacing.sm,
  },
  quickBid: {
    borderWidth: 1,
    borderRadius: BorderRadius.full,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
  },
  quickBidText: { ...Typography.label, fontSize: 13 },
  bidInputRow: {
    flexDirection: 'row',
    gap: Spacing.sm,
    alignItems: 'center',
  },
  bidInput: {
    flex: 1,
    height: 48,
    borderRadius: BorderRadius.lg,
    paddingHorizontal: Spacing.lg,
    borderWidth: 1,
    ...Typography.body,
  },
});
