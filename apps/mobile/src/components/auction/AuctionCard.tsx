// =============================================
// ELAND Mobile — AuctionCard Component
// =============================================

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useColors } from '@/hooks/useColors';
import { BorderRadius, Shadows, Spacing, Typography } from '@/constants/Theme';
import { formatPrice, formatCountdown } from '@/lib/utils';
import type { Auction } from '@eland/shared-types';

interface AuctionCardProps {
  auction: Auction & { property?: { title: string; media?: { url: string }[]; city?: string } };
}

export function AuctionCard({ auction }: Readonly<AuctionCardProps>) {
  const colors = useColors();
  const [countdown, setCountdown] = useState(formatCountdown(auction.endsAt));
  const isLive = auction.status === 'active';

  useEffect(() => {
    if (!isLive) return;
    const interval = setInterval(() => {
      setCountdown(formatCountdown(auction.endsAt));
    }, 1000);
    return () => clearInterval(interval);
  }, [auction.endsAt, isLive]);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => router.push(`/auctions/${auction.id}`)}
      style={[styles.card, { backgroundColor: colors.card }, Shadows.md]}
    >
      <View style={styles.imageWrapper}>
        <Image
          source={{ uri: auction.property?.media?.[0]?.url || 'https://via.placeholder.com/300' }}
          style={styles.image}
          contentFit="cover"
          transition={200}
        />
        {isLive && (
          <View style={[styles.liveBadge, { backgroundColor: colors.auctionLive }]}>
            <View style={styles.liveDot} />
            <Text style={styles.liveText}>LIVE</Text>
          </View>
        )}
        <View style={[styles.timerBadge, { backgroundColor: 'rgba(0,0,0,0.7)' }]}>
          <Ionicons name="time-outline" size={14} color="#FFF" />
          <Text style={styles.timerText}>{countdown}</Text>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={[styles.title, { color: colors.text }]} numberOfLines={1}>
          {auction.property?.title || `Дуудлага худалдаа #${auction.id.slice(0, 8)}`}
        </Text>

        <View style={styles.priceRow}>
          <View>
            <Text style={[styles.priceLabel, { color: colors.textSecondary }]}>Одоогийн үнэ</Text>
            <Text style={[styles.currentPrice, { color: colors.bidGreen }]}>
              {formatPrice(auction.currentPrice || auction.startingPrice)}
            </Text>
          </View>
          <View style={styles.bidInfo}>
            <View style={styles.bidCount}>
              <Ionicons name="people-outline" size={16} color={colors.textSecondary} />
              <Text style={[styles.bidCountText, { color: colors.textSecondary }]}>
                {auction.uniqueBidders}
              </Text>
            </View>
            <View style={styles.bidCount}>
              <Ionicons name="hammer-outline" size={16} color={colors.textSecondary} />
              <Text style={[styles.bidCountText, { color: colors.textSecondary }]}>
                {auction.totalBids}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={[styles.startPrice, { color: colors.textTertiary }]}>
            Эхлэх үнэ: {formatPrice(auction.startingPrice)}
          </Text>
          <Text style={[styles.increment, { color: colors.textTertiary }]}>
            +{formatPrice(auction.minBidIncrement)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: BorderRadius.lg,
    overflow: 'hidden',
    marginBottom: Spacing.lg,
  },
  imageWrapper: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 180,
  },
  liveBadge: {
    position: 'absolute',
    top: Spacing.md,
    left: Spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    borderRadius: BorderRadius.sm,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 4,
  },
  liveDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FFF',
  },
  liveText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '700',
  },
  timerBadge: {
    position: 'absolute',
    bottom: Spacing.md,
    right: Spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    borderRadius: BorderRadius.sm,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 4,
  },
  timerText: {
    color: '#FFF',
    fontSize: 13,
    fontWeight: '600',
    fontVariant: ['tabular-nums'],
  },
  content: {
    padding: Spacing.lg,
  },
  title: {
    ...Typography.label,
    marginBottom: Spacing.sm,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: Spacing.sm,
  },
  priceLabel: {
    ...Typography.caption,
  },
  currentPrice: {
    ...Typography.price,
  },
  bidInfo: {
    flexDirection: 'row',
    gap: Spacing.md,
  },
  bidCount: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  bidCountText: {
    ...Typography.bodySmall,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  startPrice: {
    ...Typography.caption,
  },
  increment: {
    ...Typography.caption,
  },
});
