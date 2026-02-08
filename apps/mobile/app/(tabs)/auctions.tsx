// =============================================
// ELAND Mobile — Auctions Tab
// =============================================

import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  RefreshControl,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useColors } from '@/hooks/useColors';
import { Spacing, Typography, BorderRadius } from '@/constants/Theme';
import { useAuctionStore } from '@/store/auction-store';
import { AuctionCard } from '@/components/auction/AuctionCard';

const TABS = [
  { key: 'active', label: 'Идэвхтэй' },
  { key: 'scheduled', label: 'Товлогдсон' },
  { key: 'ended', label: 'Дууссан' },
];

export default function AuctionsScreen() {
  const colors = useColors();
  const { auctions, fetchAuctions, isLoading } = useAuctionStore();
  const [activeTab, setActiveTab] = React.useState('active');
  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {
    fetchAuctions({ status: activeTab });
  }, [activeTab]);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchAuctions({ status: activeTab });
    setRefreshing(false);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Header */}
      <View style={[styles.header, { backgroundColor: colors.surface }]}>
        <Text style={[styles.title, { color: colors.text }]}>🔨 Дуудлага худалдаа</Text>
        <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
          Үл хөдлөх хөрөнгийн дуудлага худалдаанд оролцоорой
        </Text>

        {/* Tabs */}
        <View style={styles.tabs}>
          {TABS.map((tab) => (
            <TouchableOpacity
              key={tab.key}
              style={[
                styles.tab,
                {
                  backgroundColor: activeTab === tab.key ? colors.primary : colors.surfaceSecondary,
                  borderColor: activeTab === tab.key ? colors.primary : colors.border,
                },
              ]}
              onPress={() => setActiveTab(tab.key)}
            >
              <Text
                style={[
                  styles.tabText,
                  { color: activeTab === tab.key ? '#FFF' : colors.text },
                ]}
              >
                {tab.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <FlatList
        data={auctions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <AuctionCard auction={item} />}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        ListFooterComponent={
          isLoading ? <ActivityIndicator color={colors.primary} style={{ padding: Spacing.xl }} /> : null
        }
        ListEmptyComponent={
          isLoading ? null : (
            <View style={styles.empty}>
              <Ionicons name="hammer-outline" size={48} color={colors.textTertiary} />
              <Text style={[styles.emptyText, { color: colors.textSecondary }]}>
                {activeTab === 'active'
                  ? 'Одоогоор идэвхтэй дуудлага худалдаа байхгүй'
                  : 'Дуудлага худалдаа олдсонгүй'}
              </Text>
            </View>
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  header: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.lg,
  },
  title: {
    ...Typography.h2,
    marginBottom: 4,
  },
  subtitle: {
    ...Typography.bodySmall,
    marginBottom: Spacing.lg,
  },
  tabs: {
    flexDirection: 'row',
    gap: Spacing.sm,
  },
  tab: {
    flex: 1,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.full,
    alignItems: 'center',
    borderWidth: 1,
  },
  tabText: {
    ...Typography.label,
  },
  list: {
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.md,
    paddingBottom: Spacing['3xl'],
  },
  empty: {
    alignItems: 'center',
    paddingTop: 80,
    gap: Spacing.md,
  },
  emptyText: {
    ...Typography.body,
    textAlign: 'center',
  },
});
