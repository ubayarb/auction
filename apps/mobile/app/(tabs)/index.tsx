// =============================================
// ELAND Mobile — Home Tab (Нүүр хуудас)
// =============================================

import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useColors } from '@/hooks/useColors';
import { Spacing, Typography, BorderRadius, Shadows } from '@/constants/Theme';
import { usePropertyStore } from '@/store/property-store';
import { useAuctionStore } from '@/store/auction-store';
import { useAuthStore } from '@/store/auth-store';
import { PropertyCard } from '@/components/property/PropertyCard';
import { AuctionCard } from '@/components/auction/AuctionCard';

const CATEGORIES = [
  { icon: 'business-outline' as const, label: 'Орон сууц', type: 'apartment' },
  { icon: 'home-outline' as const, label: 'Байшин', type: 'house' },
  { icon: 'briefcase-outline' as const, label: 'Оффис', type: 'office' },
  { icon: 'map-outline' as const, label: 'Газар', type: 'land' },
  { icon: 'storefront-outline' as const, label: 'Худалдаа', type: 'commercial' },
  { icon: 'car-outline' as const, label: 'Гараж', type: 'garage' },
];

export default function HomeScreen() {
  const colors = useColors();
  const user = useAuthStore((s) => s.user);
  const { featured, fetchFeatured, fetchProperties, properties } = usePropertyStore();
  const { liveAuctions, fetchLiveAuctions } = useAuctionStore();
  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {
    fetchFeatured();
    fetchProperties({ limit: 6 });
    fetchLiveAuctions();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await Promise.all([fetchFeatured(), fetchProperties({ limit: 6 }), fetchLiveAuctions()]);
    setRefreshing(false);
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={[styles.header, { backgroundColor: colors.primary }]}>
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.greeting}>Сайн байна уу 👋</Text>
            <Text style={styles.userName}>
              {user?.profile?.firstName || 'Зочин'}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.notifBtn}
            onPress={() => {}}
          >
            <Ionicons name="notifications-outline" size={24} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <TouchableOpacity
          style={styles.searchBar}
          onPress={() => router.push('/(tabs)/search')}
          activeOpacity={0.8}
        >
          <Ionicons name="search-outline" size={20} color="#94A3B8" />
          <Text style={styles.searchPlaceholder}>Хайлт хийх... (байршил, төрөл)</Text>
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Ангилал</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {CATEGORIES.map((cat) => (
            <TouchableOpacity
              key={cat.type}
              style={[styles.categoryItem, { backgroundColor: colors.surface }, Shadows.sm]}
              onPress={() => {
                router.push('/(tabs)/search');
              }}
            >
              <View style={[styles.categoryIcon, { backgroundColor: colors.primaryLight + '15' }]}>
                <Ionicons name={cat.icon} size={24} color={colors.primary} />
              </View>
              <Text style={[styles.categoryLabel, { color: colors.text }]}>{cat.label}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Live Auctions */}
      {liveAuctions.length > 0 && (
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionTitleRow}>
              <View style={[styles.liveDot, { backgroundColor: colors.auctionLive }]} />
              <Text style={[styles.sectionTitle, { color: colors.text }]}>
                Дуудлага худалдаа
              </Text>
            </View>
            <TouchableOpacity onPress={() => router.push('/(tabs)/auctions')}>
              <Text style={[styles.seeAll, { color: colors.primary }]}>Бүгдийг</Text>
            </TouchableOpacity>
          </View>
          {liveAuctions.map((auction) => (
            <AuctionCard key={auction.id} auction={auction} />
          ))}
        </View>
      )}

      {/* Featured Properties */}
      {featured.length > 0 && (
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>⭐ Онцлох зарууд</Text>
            <TouchableOpacity onPress={() => router.push('/(tabs)/search')}>
              <Text style={[styles.seeAll, { color: colors.primary }]}>Бүгдийг</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={featured}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={{ width: 200, marginRight: Spacing.md }}>
                <PropertyCard property={item} variant="grid" />
              </View>
            )}
          />
        </View>
      )}

      {/* Latest Properties */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Шинэ зарууд</Text>
          <TouchableOpacity onPress={() => router.push('/(tabs)/search')}>
            <Text style={[styles.seeAll, { color: colors.primary }]}>Бүгдийг</Text>
          </TouchableOpacity>
        </View>
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} variant="list" />
        ))}
      </View>

      <View style={{ height: Spacing['3xl'] }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 60,
    paddingBottom: Spacing['2xl'],
    paddingHorizontal: Spacing.lg,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.lg,
  },
  greeting: {
    ...Typography.bodySmall,
    color: 'rgba(255,255,255,0.8)',
  },
  userName: {
    ...Typography.h3,
    color: '#FFF',
  },
  notifBtn: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: BorderRadius.full,
    padding: Spacing.sm,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: BorderRadius.lg,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    gap: Spacing.sm,
  },
  searchPlaceholder: {
    ...Typography.bodySmall,
    color: '#94A3B8',
  },
  section: {
    paddingHorizontal: Spacing.lg,
    marginTop: Spacing.xl,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  sectionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  sectionTitle: {
    ...Typography.h4,
  },
  seeAll: {
    ...Typography.label,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: Spacing.md,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    width: 80,
  },
  categoryIcon: {
    width: 48,
    height: 48,
    borderRadius: BorderRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.xs,
  },
  categoryLabel: {
    ...Typography.caption,
    textAlign: 'center',
  },
  liveDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});
