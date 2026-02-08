// =============================================
// ELAND Mobile — Tab Layout
// =============================================

import React from 'react';
import { Tabs, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useColors } from '@/hooks/useColors';
import { Platform, View, StyleSheet } from 'react-native';

const renderIcon = (name: keyof typeof Ionicons.glyphMap) =>
  function TabIcon({ color, size }: { color: string; size: number }) {
    return <Ionicons name={name} size={size} color={color} />;
  };

const HomeIcon = renderIcon('home-outline');
const SearchIcon = renderIcon('search-outline');
const AuctionIcon = renderIcon('hammer-outline');
const ProfileIcon = renderIcon('person-outline');
const AddIcon = () => <AddButtonIcon />;

function AddButtonIcon() {
  const colors = useColors();
  return (
    <View style={[addStyles.container, { backgroundColor: colors.primary }]}>
      <Ionicons name="add" size={28} color="#FFF" />
    </View>
  );
}

const addStyles = StyleSheet.create({
  container: {
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Platform.OS === 'ios' ? 20 : 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default function TabLayout() {
  const colors = useColors();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.tabIconSelected,
        tabBarInactiveTintColor: colors.tabIconDefault,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: colors.border,
          height: Platform.OS === 'ios' ? 88 : 65,
          paddingBottom: Platform.OS === 'ios' ? 28 : 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
        },
        headerStyle: {
          backgroundColor: colors.surface,
        },
        headerTintColor: colors.text,
        headerShadowVisible: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Нүүр',
          tabBarIcon: HomeIcon,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Зар хайлт',
          tabBarIcon: SearchIcon,
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: 'Зар нэмэх',
          tabBarIcon: AddIcon,
          tabBarLabel: () => null,
        }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            router.push('/properties/create');
          },
        }}
      />
      <Tabs.Screen
        name="auctions"
        options={{
          title: 'Дуудлага худалдаа',
          tabBarIcon: AuctionIcon,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Профайл',
          tabBarIcon: ProfileIcon,
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
