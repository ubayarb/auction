// =============================================
// ELAND Mobile — Search Tab
// =============================================

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useColors } from '@/hooks/useColors';
import { Spacing, Typography, BorderRadius } from '@/constants/Theme';
import { usePropertyStore } from '@/store/property-store';
import { PropertyCard } from '@/components/property/PropertyCard';
import { getPropertyTypeLabel, getTransactionTypeLabel } from '@/lib/utils';

const PROPERTY_TYPES = ['apartment', 'house', 'office', 'land', 'commercial', 'garage'];
const TRANSACTION_TYPES = ['sale', 'rent', 'auction'];

export default function SearchScreen() {
  const colors = useColors();
  const { properties, isLoading, fetchProperties, filters, setFilters, meta, resetFilters } =
    usePropertyStore();
  const [searchText, setSearchText] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

  const handleSearch = () => {
    fetchProperties({ q: searchText, page: 1 });
  };

  const handleLoadMore = () => {
    if (meta && filters.page && filters.page < meta.totalPages) {
      const nextPage = (filters.page || 1) + 1;
      setFilters({ page: nextPage });
      fetchProperties({ page: nextPage });
    }
  };

  const handleFilterType = (type: string) => {
    const current = filters.type;
    setFilters({ type: current === type ? undefined : (type as any) });
    fetchProperties({ type: current === type ? undefined : (type as any), page: 1 });
  };

  const handleFilterTransaction = (type: string) => {
    const current = filters.transaction;
    setFilters({ transaction: current === type ? undefined : (type as any) });
    fetchProperties({ transaction: current === type ? undefined : (type as any), page: 1 });
  };

  const renderHeader = () => (
    <View>
      {/* Search Bar */}
      <View style={styles.searchRow}>
        <View style={[styles.searchInput, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <Ionicons name="search-outline" size={20} color={colors.textTertiary} />
          <TextInput
            style={[styles.input, { color: colors.text }]}
            placeholder="Хайх... (байршил, нэр)"
            placeholderTextColor={colors.textTertiary}
            value={searchText}
            onChangeText={setSearchText}
            onSubmitEditing={handleSearch}
            returnKeyType="search"
          />
          {searchText.length > 0 && (
            <TouchableOpacity onPress={() => { setSearchText(''); fetchProperties({ page: 1 }); }}>
              <Ionicons name="close-circle" size={20} color={colors.textTertiary} />
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity
          style={[styles.filterBtn, { backgroundColor: showFilters ? colors.primary : colors.surface }]}
          onPress={() => setShowFilters(!showFilters)}
        >
          <Ionicons name="options-outline" size={22} color={showFilters ? '#FFF' : colors.text} />
        </TouchableOpacity>
      </View>

      {/* Filters */}
      {showFilters && (
        <View style={styles.filterSection}>
          <Text style={[styles.filterLabel, { color: colors.textSecondary }]}>Гүйлгээний төрөл</Text>
          <View style={styles.chipRow}>
            {TRANSACTION_TYPES.map((t) => (
              <TouchableOpacity
                key={t}
                style={[
                  styles.chip,
                  {
                    backgroundColor: filters.transaction === t ? colors.primary : colors.surfaceSecondary,
                  },
                ]}
                onPress={() => handleFilterTransaction(t)}
              >
                <Text
                  style={[
                    styles.chipText,
                    { color: filters.transaction === t ? '#FFF' : colors.text },
                  ]}
                >
                  {getTransactionTypeLabel(t)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={[styles.filterLabel, { color: colors.textSecondary }]}>Төрөл</Text>
          <View style={styles.chipRow}>
            {PROPERTY_TYPES.map((t) => (
              <TouchableOpacity
                key={t}
                style={[
                  styles.chip,
                  { backgroundColor: filters.type === t ? colors.primary : colors.surfaceSecondary },
                ]}
                onPress={() => handleFilterType(t)}
              >
                <Text
                  style={[styles.chipText, { color: filters.type === t ? '#FFF' : colors.text }]}
                >
                  {getPropertyTypeLabel(t)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity onPress={() => { resetFilters(); fetchProperties({ page: 1 }); }}>
            <Text style={[styles.clearFilter, { color: colors.error }]}>Шүүлтүүр арилгах</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Results header */}
      <View style={styles.resultsHeader}>
        <Text style={[styles.resultCount, { color: colors.textSecondary }]}>
          {meta?.total || 0} зар олдлоо
        </Text>
        <View style={styles.viewToggle}>
          <TouchableOpacity onPress={() => setViewMode('list')}>
            <Ionicons
              name="list-outline"
              size={22}
              color={viewMode === 'list' ? colors.primary : colors.textTertiary}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setViewMode('grid')}>
            <Ionicons
              name="grid-outline"
              size={22}
              color={viewMode === 'grid' ? colors.primary : colors.textTertiary}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <FlatList
        data={properties}
        keyExtractor={(item) => item.id}
        numColumns={viewMode === 'grid' ? 2 : 1}
        key={viewMode}
        ListHeaderComponent={renderHeader}
        renderItem={({ item }) => (
          <PropertyCard property={item} variant={viewMode} />
        )}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          isLoading ? <ActivityIndicator color={colors.primary} style={{ padding: Spacing.xl }} /> : null
        }
        ListEmptyComponent={
          isLoading ? null : (
            <View style={styles.empty}>
              <Ionicons name="search-outline" size={48} color={colors.textTertiary} />
              <Text style={[styles.emptyText, { color: colors.textSecondary }]}>
                Зар олдсонгүй
              </Text>
            </View>
          )
        }
        columnWrapperStyle={viewMode === 'grid' ? styles.gridRow : undefined}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  searchRow: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.lg,
    gap: Spacing.sm,
    marginBottom: Spacing.md,
  },
  searchInput: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: BorderRadius.lg,
    paddingHorizontal: Spacing.md,
    height: 48,
    gap: Spacing.sm,
  },
  input: {
    flex: 1,
    ...Typography.body,
  },
  filterBtn: {
    width: 48,
    height: 48,
    borderRadius: BorderRadius.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterSection: {
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.md,
  },
  filterLabel: {
    ...Typography.caption,
    marginBottom: Spacing.xs,
    marginTop: Spacing.sm,
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
  },
  chip: {
    borderRadius: BorderRadius.full,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
  },
  chipText: {
    ...Typography.bodySmall,
    fontWeight: '500',
  },
  clearFilter: {
    ...Typography.bodySmall,
    marginTop: Spacing.md,
    textAlign: 'center',
  },
  resultsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.md,
  },
  resultCount: {
    ...Typography.bodySmall,
  },
  viewToggle: {
    flexDirection: 'row',
    gap: Spacing.md,
  },
  list: {
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing['3xl'],
  },
  gridRow: {
    justifyContent: 'space-between',
  },
  empty: {
    alignItems: 'center',
    paddingTop: 80,
    gap: Spacing.md,
  },
  emptyText: {
    ...Typography.body,
  },
});
