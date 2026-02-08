// =============================================
// ELAND Mobile — Button Component
// =============================================

import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { useColors } from '@/hooks/useColors';
import { BorderRadius, Spacing, Typography } from '@/constants/Theme';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  style?: ViewStyle;
  textStyle?: TextStyle;
  fullWidth?: boolean;
}

export function Button({
  title,
  onPress,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  icon,
  style,
  textStyle,
  fullWidth = false,
}: Readonly<ButtonProps>) {
  const colors = useColors();

  const getButtonStyle = (): ViewStyle => {
    const base: ViewStyle = {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: BorderRadius.lg,
      gap: Spacing.sm,
    };

    // Size
    switch (size) {
      case 'sm':
        base.paddingVertical = Spacing.sm;
        base.paddingHorizontal = Spacing.lg;
        break;
      case 'lg':
        base.paddingVertical = Spacing.lg;
        base.paddingHorizontal = Spacing['2xl'];
        break;
      default:
        base.paddingVertical = Spacing.md;
        base.paddingHorizontal = Spacing.xl;
    }

    if (fullWidth) base.width = '100%';

    // Variant
    switch (variant) {
      case 'secondary':
        base.backgroundColor = colors.surfaceSecondary;
        break;
      case 'outline':
        base.backgroundColor = 'transparent';
        base.borderWidth = 1.5;
        base.borderColor = colors.primary;
        break;
      case 'ghost':
        base.backgroundColor = 'transparent';
        break;
      case 'danger':
        base.backgroundColor = colors.error;
        break;
      default:
        base.backgroundColor = colors.primary;
    }

    if (disabled || loading) base.opacity = 0.6;

    return base;
  };

  const getFontSize = (s: string) => {
    if (s === 'lg') return 18;
    if (s === 'sm') return 14;
    return 16;
  };

  const getTextStyle = (): TextStyle => {
    const base: TextStyle = {
      ...Typography.button,
      fontSize: getFontSize(size),
    };

    switch (variant) {
      case 'secondary':
        base.color = colors.text;
        break;
      case 'outline':
      case 'ghost':
        base.color = colors.primary;
        break;
      default:
        base.color = '#FFFFFF';
    }

    return base;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
      style={[getButtonStyle(), style]}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={variant === 'outline' || variant === 'ghost' ? colors.primary : '#FFF'}
        />
      ) : (
        <>
          {icon}
          <Text style={[getTextStyle(), textStyle]}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
}
