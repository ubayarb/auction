// =============================================
// ELAND Mobile — useColorScheme hook
// =============================================

import { useColorScheme as useRNColorScheme } from 'react-native';
import { Colors, ColorScheme } from '@/constants/Colors';

export function useColors(): ColorScheme {
  const scheme = useRNColorScheme() ?? 'light';
  return Colors[scheme];
}

export function useColorScheme() {
  return useRNColorScheme() ?? 'light';
}
