// =============================================
// ELAND Mobile — PropertyCard Component
// =============================================

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useColors } from '@/hooks/useColors';
import { BorderRadius, Shadows, Spacing, Typography } from '@/constants/Theme';
import { formatPrice, formatArea, getTransactionTypeLabel } from '@/lib/utils';
import type { Property } from '@eland/shared-types';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - Spacing.lg * 3) / 2;

interface PropertyCardProps {
  property: Property;
  variant?: 'grid' | 'list';
  onFavorite?: () => void;
}

export function PropertyCard({ property, variant = 'grid', onFavorite }: Readonly<PropertyCardProps>) {
  const colors = useColors();
  const primaryImage = property.media?.find((m) => m.isPrimary) || property.media?.[0];

  const handlePress = () => {
    router.push(`/properties/${property.id}`);
  };

  if (variant === 'list') {
    return (
      <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.8}
        style={[styles.listCard, { backgroundColor: colors.card }, Shadows.md]}
      >
        <Image
          source={{ uri: primaryImage?.url || 'https://via.placeholder.com/150' }}
          style={styles.listImage}
          contentFit="cover"
          transition={200}
        />
        <View style={styles.listContent}>
          <View style={styles.listHeader}>
            <View
              style={[
                styles.badge,
                { backgroundColor: property.transactionType === 'sale' ? colors.primary : colors.secondary },
              ]}
            >
              <Text style={styles.badgeText}>{getTransactionTypeLabel(property.transactionType)}</Text>
            </View>
            <TouchableOpacity onPress={onFavorite}>
              <Ionicons name="heart-outline" size={22} color={colors.error} />
            </TouchableOpacity>
          </View>
          <Text style={[styles.listTitle, { color: colors.text }]} numberOfLines={1}>
            {property.title}
          </Text>
          <View style={styles.listLocation}>
            <Ionicons name="location-outline" size={14} color={colors.textSecondary} />
            <Text style={[styles.locationText, { color: colors.textSecondary }]} numberOfLines={1}>
              {property.district}, {property.city}
            </Text>
          </View>
          <View style={styles.listFooter}>
            <Text style={[styles.price, { color: colors.primary }]}>{formatPrice(property.price)}</Text>
            <View style={styles.listMeta}>
              {property.rooms && (
                <View style={styles.metaItem}>
                  <Ionicons name="bed-outline" size={14} color={colors.textTertiary} />
                  <Text style={[styles.metaText, { color: colors.textTertiary }]}>{property.rooms}</Text>
                </View>
              )}
              {property.areaTotal && (
                <View style={styles.metaItem}>
                  <Ionicons name="resize-outline" size={14} color={colors.textTertiary} />
                  <Text style={[styles.metaText, { color: colors.textTertiary }]}>{formatArea(property.areaTotal)}</Text>
                </View>
              )}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  // Grid variant
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.8}
      style={[styles.gridCard, { backgroundColor: colors.card, width: CARD_WIDTH }, Shadows.md]}
    >
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: primaryImage?.url || 'https://via.placeholder.com/150' }}
          style={styles.gridImage}
          contentFit="cover"
          transition={200}
        />
        <View style={[styles.overlayBadge, { backgroundColor: colors.primary }]}>
          <Text style={styles.badgeText}>{getTransactionTypeLabel(property.transactionType)}</Text>
        </View>
        <TouchableOpacity style={styles.favoriteBtn} onPress={onFavorite}>
          <Ionicons name="heart-outline" size={20} color="#FFF" />
        </TouchableOpacity>
      </View>
      <View style={styles.gridContent}>
        <Text style={[styles.gridPrice, { color: colors.primary }]}>{formatPrice(property.price)}</Text>
        <Text style={[styles.gridTitle, { color: colors.text }]} numberOfLines={2}>
          {property.title}
        </Text>
        <View style={styles.gridLocation}>
          <Ionicons name="location-outline" size={12} color={colors.textSecondary} />
          <Text style={[styles.smallLocationText, { color: colors.textSecondary }]} numberOfLines={1}>
            {property.district || property.city}
          </Text>
        </View>
        <View style={styles.gridMeta}>
          {property.rooms && (
            <Text style={[styles.metaText, { color: colors.textTertiary }]}>
              {property.rooms} өрөө
            </Text>
          )}
          {property.areaTotal && (
            <Text style={[styles.metaText, { color: colors.textTertiary }]}>
              {formatArea(property.areaTotal)}
            </Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  // Grid
  gridCard: {
    borderRadius: BorderRadius.lg,
    overflow: 'hidden',
    marginBottom: Spacing.lg,
  },
  imageContainer: {
    position: 'relative',
  },
  gridImage: {
    width: '100%',
    height: 120,
  },
  overlayBadge: {
    position: 'absolute',
    top: Spacing.sm,
    left: Spacing.sm,
    borderRadius: BorderRadius.sm,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 2,
  },
  favoriteBtn: {
    position: 'absolute',
    top: Spacing.sm,
    right: Spacing.sm,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: BorderRadius.full,
    padding: 4,
  },
  gridContent: {
    padding: Spacing.md,
  },
  gridPrice: {
    ...Typography.h4,
    marginBottom: 2,
  },
  gridTitle: {
    ...Typography.bodySmall,
    marginBottom: 4,
  },
  gridLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    marginBottom: 4,
  },
  smallLocationText: {
    ...Typography.caption,
    flex: 1,
  },
  gridMeta: {
    flexDirection: 'row',
    gap: Spacing.sm,
  },

  // List
  listCard: {
    flexDirection: 'row',
    borderRadius: BorderRadius.lg,
    overflow: 'hidden',
    marginBottom: Spacing.md,
  },
  listImage: {
    width: 130,
    height: 130,
  },
  listContent: {
    flex: 1,
    padding: Spacing.md,
    justifyContent: 'space-between',
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  badge: {
    borderRadius: BorderRadius.sm,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 2,
  },
  badgeText: {
    color: '#FFF',
    fontSize: 11,
    fontWeight: '600',
  },
  listTitle: {
    ...Typography.label,
    marginVertical: 2,
  },
  listLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  locationText: {
    ...Typography.caption,
    flex: 1,
  },
  listFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  price: {
    ...Typography.price,
    fontSize: 16,
  },
  listMeta: {
    flexDirection: 'row',
    gap: Spacing.sm,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  metaText: {
    ...Typography.caption,
  },
});
