// =============================================
// ELAND Mobile — Theme & Colors
// =============================================

export const Colors = {
  light: {
    primary: '#1E40AF',
    primaryLight: '#3B82F6',
    primaryDark: '#1E3A8A',
    secondary: '#F59E0B',
    secondaryLight: '#FCD34D',

    background: '#F8FAFC',
    surface: '#FFFFFF',
    surfaceSecondary: '#F1F5F9',
    card: '#FFFFFF',

    text: '#0F172A',
    textSecondary: '#64748B',
    textTertiary: '#94A3B8',
    textInverse: '#FFFFFF',

    border: '#E2E8F0',
    borderLight: '#F1F5F9',
    divider: '#E2E8F0',

    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',

    // Status colors
    active: '#10B981',
    pending: '#F59E0B',
    draft: '#94A3B8',
    sold: '#8B5CF6',

    // Auction
    bidGreen: '#10B981',
    bidRed: '#EF4444',
    auctionLive: '#EF4444',

    tabIconDefault: '#94A3B8',
    tabIconSelected: '#1E40AF',

    shadow: '#000000',
    overlay: 'rgba(0,0,0,0.5)',
  },
  dark: {
    primary: '#3B82F6',
    primaryLight: '#60A5FA',
    primaryDark: '#1E40AF',
    secondary: '#F59E0B',
    secondaryLight: '#FCD34D',

    background: '#0F172A',
    surface: '#1E293B',
    surfaceSecondary: '#334155',
    card: '#1E293B',

    text: '#F8FAFC',
    textSecondary: '#94A3B8',
    textTertiary: '#64748B',
    textInverse: '#0F172A',

    border: '#334155',
    borderLight: '#1E293B',
    divider: '#334155',

    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',

    active: '#10B981',
    pending: '#F59E0B',
    draft: '#64748B',
    sold: '#8B5CF6',

    bidGreen: '#10B981',
    bidRed: '#EF4444',
    auctionLive: '#EF4444',

    tabIconDefault: '#64748B',
    tabIconSelected: '#3B82F6',

    shadow: '#000000',
    overlay: 'rgba(0,0,0,0.7)',
  },
};

export type ColorScheme = typeof Colors.light;
