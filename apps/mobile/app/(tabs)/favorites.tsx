// =============================================
// ELAND Mobile — Favorites Tab
// =============================================

import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, RefreshControl } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useColors } from '@/hooks/useColors';
import { Spacing, Typography } from '@/constants/Theme';
import { usePropertyStore } from '@/store/property-store';
import { PropertyCard } from '@/components/property/PropertyCard';

export default function FavoritesScreen() {
  const colors = useColors();
  const { favorites, fetchFavorites, toggleFavorite } = usePropertyStore();
  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {
    fetchFavorites();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchFavorites();
    setRefreshing(false);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text }]}>❤️ Хадгалсан зарууд</Text>
      </View>

      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PropertyCard
            property={item}
            variant="list"
            onFavorite={() => toggleFavorite(item.id)}
          />
        )}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Ionicons name="heart-outline" size={48} color={colors.textTertiary} />
            <Text style={[styles.emptyTitle, { color: colors.text }]}>Хадгалсан зар байхгүй</Text>
            <Text style={[styles.emptyText, { color: colors.textSecondary }]}>
              Зар дээр зүрхэн дээр дарж хадгалаарай
            </Text>
          </View>
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
  },
  list: {
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing['3xl'],
  },
  empty: {
    alignItems: 'center',
    paddingTop: 100,
    gap: Spacing.sm,
  },
  emptyTitle: {
    ...Typography.h4,
  },
  emptyText: {
    ...Typography.bodySmall,
    textAlign: 'center',
  },
});
