// =============================================
// ELAND Mobile — Property Detail Screen
// =============================================

import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  Share,
} from 'react-native';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import { useColors } from '@/hooks/useColors';
import { Spacing, Typography, BorderRadius, Shadows } from '@/constants/Theme';
import { Button } from '@/components/ui/Button';
import {
  formatPrice,
  getPropertyTypeLabel,
  getTransactionTypeLabel,
} from '@/lib/utils';
import { propertyApi } from '@/lib/api';
import type { Property } from '@eland/shared-types';

const { width } = Dimensions.get('window');

export default function PropertyDetailScreen() {
  const colors = useColors();
  const { id } = useLocalSearchParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    loadProperty();
  }, [id]);

  const loadProperty = async () => {
    try {
      const { data } = await propertyApi.get(`/properties/${id}`);
      setProperty(data.data);
    } catch (error) {
      console.error('Property load error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleShare = async () => {
    if (!property) return;
    await Share.share({
      title: property.title,
      message: `${property.title} - ${formatPrice(property.price)}\nELAND дээр харах`,
    });
  };

  if (loading) {
    return (
      <View style={[styles.loading, { backgroundColor: colors.background }]}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  if (!property) {
    return (
      <View style={[styles.loading, { backgroundColor: colors.background }]}>
        <Ionicons name="alert-circle-outline" size={48} color={colors.textTertiary} />
        <Text style={[styles.errorText, { color: colors.textSecondary }]}>Зар олдсонгүй</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Image Gallery */}
        <View style={styles.gallery}>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={(e) => {
              const index = Math.round(e.nativeEvent.contentOffset.x / width);
              setActiveImageIndex(index);
            }}
          >
            {(property.media?.length ? property.media : [{ url: 'https://via.placeholder.com/600', id: '0' }]).map(
              (media: any, index: number) => (
                <Image
                  key={media.id || index}
                  source={{ uri: media.url }}
                  style={styles.image}
                  contentFit="cover"
                  transition={200}
                />
              ),
            )}
          </ScrollView>

          {/* Image indicators */}
          {property.media && property.media.length > 1 && (
            <View style={styles.indicators}>
              {property.media.map((media: any, i: number) => (
                <View
                  key={media?.url ?? `indicator-${i}`}
                  style={[
                    styles.indicator,
                    {
                      backgroundColor: i === activeImageIndex ? '#FFF' : 'rgba(255,255,255,0.5)',
                    },
                  ]}
                />
              ))}
            </View>
          )}

          {/* Share button */}
          <TouchableOpacity
            style={[styles.shareBtn, { backgroundColor: 'rgba(0,0,0,0.4)' }]}
            onPress={handleShare}
          >
            <Ionicons name="share-outline" size={22} color="#FFF" />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          {/* Price & Type */}
          <View style={styles.priceRow}>
            <Text style={[styles.price, { color: colors.primary }]}>{formatPrice(property.price)}</Text>
            <View style={[styles.typeBadge, { backgroundColor: colors.primaryLight + '20' }]}>
              <Text style={[styles.typeText, { color: colors.primary }]}>
                {getTransactionTypeLabel(property.transactionType)}
              </Text>
            </View>
          </View>

          <Text style={[styles.title, { color: colors.text }]}>{property.title}</Text>

          {/* Location */}
          <View style={styles.locationRow}>
            <Ionicons name="location-outline" size={18} color={colors.textSecondary} />
            <Text style={[styles.locationText, { color: colors.textSecondary }]}>
              {[property.district, property.khoroo, property.city].filter(Boolean).join(', ')}
            </Text>
          </View>

          {/* Quick Info */}
          <View style={[styles.infoGrid, { backgroundColor: colors.surface }, Shadows.sm]}>
            {property.rooms && (
              <View style={styles.infoItem}>
                <Ionicons name="bed-outline" size={24} color={colors.primary} />
                <Text style={[styles.infoValue, { color: colors.text }]}>{property.rooms}</Text>
                <Text style={[styles.infoLabel, { color: colors.textSecondary }]}>Өрөө</Text>
              </View>
            )}
            {property.areaTotal && (
              <View style={styles.infoItem}>
                <Ionicons name="resize-outline" size={24} color={colors.primary} />
                <Text style={[styles.infoValue, { color: colors.text }]}>{property.areaTotal}</Text>
                <Text style={[styles.infoLabel, { color: colors.textSecondary }]}>м²</Text>
              </View>
            )}
            {property.floor && (
              <View style={styles.infoItem}>
                <Ionicons name="layers-outline" size={24} color={colors.primary} />
                <Text style={[styles.infoValue, { color: colors.text }]}>
                  {property.floor}/{property.totalFloors}
                </Text>
                <Text style={[styles.infoLabel, { color: colors.textSecondary }]}>Давхар</Text>
              </View>
            )}
            {property.yearBuilt && (
              <View style={styles.infoItem}>
                <Ionicons name="calendar-outline" size={24} color={colors.primary} />
                <Text style={[styles.infoValue, { color: colors.text }]}>{property.yearBuilt}</Text>
                <Text style={[styles.infoLabel, { color: colors.textSecondary }]}>Он</Text>
              </View>
            )}
          </View>

          {/* Description */}
          {property.description && (
            <View style={styles.section}>
              <Text style={[styles.sectionTitle, { color: colors.text }]}>Тайлбар</Text>
              <Text style={[styles.description, { color: colors.textSecondary }]}>
                {property.description}
              </Text>
            </View>
          )}

          {/* Details */}
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>Дэлгэрэнгүй</Text>
            <View style={[styles.detailCard, { backgroundColor: colors.surface }]}>
              <DetailRow label="Төрөл" value={getPropertyTypeLabel(property.propertyType)} colors={colors} />
              {property.pricePerSqm && (
                <DetailRow label="м² үнэ" value={formatPrice(property.pricePerSqm)} colors={colors} />
              )}
              {property.condition && (
                <DetailRow label="Нөхцөл" value={property.condition} colors={colors} />
              )}
              <DetailRow label="Зогсоол" value={property.parkingSpaces > 0 ? `${property.parkingSpaces}` : 'Үгүй'} colors={colors} />
              <DetailRow label="Лифт" value={property.hasElevator ? 'Тийм' : 'Үгүй'} colors={colors} />
              <DetailRow label="Тагт" value={property.hasBalcony ? 'Тийм' : 'Үгүй'} colors={colors} />
            </View>
          </View>

          {/* Features */}
          {property.features?.length > 0 && (
            <View style={styles.section}>
              <Text style={[styles.sectionTitle, { color: colors.text }]}>Онцлог</Text>
              <View style={styles.features}>
                {property.features.map((feature, i) => (
                  <View key={`feature-${feature}`} style={[styles.featureChip, { backgroundColor: colors.surfaceSecondary }]}>
                    <Ionicons name="checkmark-circle" size={16} color={colors.success} />
                    <Text style={[styles.featureText, { color: colors.text }]}>{feature}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}

          {/* Owner Info */}
          {property.owner && (
            <View style={[styles.ownerCard, { backgroundColor: colors.surface }, Shadows.sm]}>
              <View style={styles.ownerInfo}>
                <View style={[styles.ownerAvatar, { backgroundColor: colors.primaryLight + '20' }]}>
                  <Ionicons name="person" size={24} color={colors.primary} />
                </View>
                <View>
                  <Text style={[styles.ownerName, { color: colors.text }]}>
                    {property.owner.displayName}
                  </Text>
                  <Text style={[styles.ownerRole, { color: colors.textSecondary }]}>
                    {property.owner.verified ? '✓ Баталгаажсан' : 'Эзэмшигч'}
                  </Text>
                </View>
              </View>
              <View style={styles.ownerActions}>
                <TouchableOpacity style={[styles.actionBtn, { backgroundColor: colors.primary }]}>
                  <Ionicons name="call" size={20} color="#FFF" />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.actionBtn, { backgroundColor: colors.success }]}>
                  <Ionicons name="chatbubble" size={20} color="#FFF" />
                </TouchableOpacity>
              </View>
            </View>
          )}

          <View style={{ height: 100 }} />
        </View>
      </ScrollView>

      {/* Bottom Bar */}
      <View style={[styles.bottomBar, { backgroundColor: colors.surface, borderTopColor: colors.border }]}>
        <TouchableOpacity style={styles.heartBtn}>
          <Ionicons name="heart-outline" size={28} color={colors.error} />
        </TouchableOpacity>
        <Button
          title="Холбогдох"
          onPress={() => {}}
          style={{ flex: 1 }}
          size="lg"
          icon={<Ionicons name="call-outline" size={20} color="#FFF" />}
        />
      </View>
    </View>
  );
}

function DetailRow({ label, value, colors }: Readonly<{ label: string; value: string; colors: any }>) {
  return (
    <View style={detailStyles.row}>
      <Text style={[detailStyles.label, { color: colors.textSecondary }]}>{label}</Text>
      <Text style={[detailStyles.value, { color: colors.text }]}>{value}</Text>
    </View>
  );
}

const detailStyles = StyleSheet.create({
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
  loading: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: Spacing.md },
  errorText: { ...Typography.body },

  gallery: { position: 'relative' },
  image: { width, height: 300 },
  indicators: {
    position: 'absolute',
    bottom: Spacing.lg,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
  },
  indicator: { width: 8, height: 8, borderRadius: 4 },
  shareBtn: {
    position: 'absolute',
    top: 60,
    right: Spacing.lg,
    borderRadius: BorderRadius.full,
    padding: Spacing.sm,
  },

  content: { paddingHorizontal: Spacing.lg, paddingTop: Spacing.lg },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  price: { ...Typography.price, fontSize: 24 },
  typeBadge: {
    borderRadius: BorderRadius.full,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
  },
  typeText: { ...Typography.label, fontSize: 13 },
  title: { ...Typography.h3, marginBottom: Spacing.sm },
  locationRow: { flexDirection: 'row', alignItems: 'center', gap: 4, marginBottom: Spacing.lg },
  locationText: { ...Typography.bodySmall, flex: 1 },

  infoGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: BorderRadius.lg,
    padding: Spacing.lg,
    marginBottom: Spacing.xl,
  },
  infoItem: { alignItems: 'center', gap: 4 },
  infoValue: { ...Typography.h4 },
  infoLabel: { ...Typography.caption },

  section: { marginBottom: Spacing.xl },
  sectionTitle: { ...Typography.h4, marginBottom: Spacing.md },
  description: { ...Typography.body, lineHeight: 24 },

  detailCard: { borderRadius: BorderRadius.lg, paddingHorizontal: Spacing.lg },

  features: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.sm },
  featureChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    borderRadius: BorderRadius.full,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
  },
  featureText: { ...Typography.bodySmall },

  ownerCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: BorderRadius.lg,
    padding: Spacing.lg,
    marginBottom: Spacing.lg,
  },
  ownerInfo: { flexDirection: 'row', alignItems: 'center', gap: Spacing.md },
  ownerAvatar: {
    width: 48,
    height: 48,
    borderRadius: BorderRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ownerName: { ...Typography.label },
  ownerRole: { ...Typography.caption },
  ownerActions: { flexDirection: 'row', gap: Spacing.sm },
  actionBtn: {
    width: 40,
    height: 40,
    borderRadius: BorderRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },

  bottomBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    paddingBottom: 34,
    borderTopWidth: 1,
  },
  heartBtn: { padding: Spacing.sm },
});
