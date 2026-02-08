// =============================================
// ELAND Mobile — Profile Tab
// =============================================

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { useColors } from '@/hooks/useColors';
import { Spacing, Typography, BorderRadius, Shadows } from '@/constants/Theme';
import { useAuthStore } from '@/store/auth-store';

const MENU_ITEMS = [
  {
    section: 'Миний',
    items: [
      { icon: 'documents-outline', label: 'Миний зарууд', route: '/profile/my-properties' },
      { icon: 'hammer-outline', label: 'Миний дуудлага', route: '/profile/my-auctions' },
      { icon: 'document-text-outline', label: 'Миний гэрээнүүд', route: '/profile/my-contracts' },
      { icon: 'wallet-outline', label: 'Төлбөрийн түүх', route: '/profile/payments' },
    ],
  },
  {
    section: 'Тохиргоо',
    items: [
      { icon: 'person-outline', label: 'Профайл засах', route: '/profile/edit' },
      { icon: 'shield-checkmark-outline', label: 'KYC баталгаажуулалт', route: '/profile/kyc' },
      { icon: 'notifications-outline', label: 'Мэдэгдлийн тохиргоо', route: '/profile/notifications' },
      { icon: 'lock-closed-outline', label: 'Нууц үг солих', route: '/profile/change-password' },
    ],
  },
  {
    section: 'Бусад',
    items: [
      { icon: 'help-circle-outline', label: 'Тусламж', route: '/help' },
      { icon: 'information-circle-outline', label: 'Тухай', route: '/about' },
    ],
  },
];

export default function ProfileScreen() {
  const colors = useColors();
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    Alert.alert('Гарах', 'Системээс гарах уу?', [
      { text: 'Үгүй', style: 'cancel' },
      { text: 'Тийм', style: 'destructive', onPress: () => { logout(); } },
    ]);
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      showsVerticalScrollIndicator={false}
    >
      {/* Profile Header */}
      <View style={[styles.profileHeader, { backgroundColor: colors.primary }]}>
        <View style={styles.avatarContainer}>
          {user?.profile?.avatarUrl ? (
            <Image source={{ uri: user.profile.avatarUrl }} style={styles.avatar} />
          ) : (
            <View style={[styles.avatarFallback, { backgroundColor: 'rgba(255,255,255,0.2)' }]}>
              <Ionicons name="person" size={40} color="#FFF" />
            </View>
          )}
        </View>
        <Text style={styles.profileName}>
          {user?.profile?.firstName} {user?.profile?.lastName}
        </Text>
        <Text style={styles.profileEmail}>{user?.email}</Text>
        <View style={styles.roleBadge}>
          <Text style={styles.roleText}>
            {user?.roles?.[0]?.toUpperCase() || 'USER'}
          </Text>
        </View>
      </View>

      {/* Stats */}
      <View style={[styles.statsRow, { backgroundColor: colors.surface }, Shadows.sm]}>
        <View style={styles.statItem}>
          <Text style={[styles.statValue, { color: colors.primary }]}>0</Text>
          <Text style={[styles.statLabel, { color: colors.textSecondary }]}>Зар</Text>
        </View>
        <View style={[styles.statDivider, { backgroundColor: colors.border }]} />
        <View style={styles.statItem}>
          <Text style={[styles.statValue, { color: colors.primary }]}>0</Text>
          <Text style={[styles.statLabel, { color: colors.textSecondary }]}>Дуудлага</Text>
        </View>
        <View style={[styles.statDivider, { backgroundColor: colors.border }]} />
        <View style={styles.statItem}>
          <Text style={[styles.statValue, { color: colors.primary }]}>0</Text>
          <Text style={[styles.statLabel, { color: colors.textSecondary }]}>Гэрээ</Text>
        </View>
      </View>

      {/* Menu */}
      {MENU_ITEMS.map((section) => (
        <View key={section.section} style={styles.menuSection}>
          <Text style={[styles.sectionTitle, { color: colors.textSecondary }]}>
            {section.section}
          </Text>
          <View style={[styles.menuCard, { backgroundColor: colors.surface }, Shadows.sm]}>
            {section.items.map((item, index) => (
              <TouchableOpacity
                key={item.route}
                style={[
                  styles.menuItem,
                  index < section.items.length - 1 && {
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    borderBottomColor: colors.border,
                  },
                ]}
                onPress={() => {}}
              >
                <View style={styles.menuLeft}>
                  <Ionicons
                    name={item.icon as any}
                    size={22}
                    color={colors.primary}
                  />
                  <Text style={[styles.menuLabel, { color: colors.text }]}>{item.label}</Text>
                </View>
                <Ionicons name="chevron-forward" size={18} color={colors.textTertiary} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ))}

      {/* Logout */}
      <TouchableOpacity
        style={[styles.logoutBtn, { backgroundColor: colors.surface }, Shadows.sm]}
        onPress={handleLogout}
      >
        <Ionicons name="log-out-outline" size={22} color={colors.error} />
        <Text style={[styles.logoutText, { color: colors.error }]}>Системээс гарах</Text>
      </TouchableOpacity>

      <View style={{ height: Spacing['5xl'] }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileHeader: {
    alignItems: 'center',
    paddingTop: 70,
    paddingBottom: Spacing['2xl'],
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  avatarContainer: {
    marginBottom: Spacing.md,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  avatarFallback: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileName: {
    ...Typography.h3,
    color: '#FFF',
    marginBottom: 2,
  },
  profileEmail: {
    ...Typography.bodySmall,
    color: 'rgba(255,255,255,0.8)',
    marginBottom: Spacing.sm,
  },
  roleBadge: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: BorderRadius.full,
    paddingHorizontal: Spacing.md,
    paddingVertical: 2,
  },
  roleText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '600',
  },
  statsRow: {
    flexDirection: 'row',
    marginHorizontal: Spacing.lg,
    marginTop: -Spacing.xl,
    borderRadius: BorderRadius.lg,
    padding: Spacing.lg,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    ...Typography.h3,
  },
  statLabel: {
    ...Typography.caption,
  },
  statDivider: {
    width: 1,
    height: '100%',
  },
  menuSection: {
    paddingHorizontal: Spacing.lg,
    marginTop: Spacing.xl,
  },
  sectionTitle: {
    ...Typography.caption,
    textTransform: 'uppercase',
    marginBottom: Spacing.sm,
    letterSpacing: 1,
  },
  menuCard: {
    borderRadius: BorderRadius.lg,
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
  },
  menuLabel: {
    ...Typography.body,
  },
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.sm,
    marginHorizontal: Spacing.lg,
    marginTop: Spacing['2xl'],
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.lg,
  },
  logoutText: {
    ...Typography.button,
  },
});
