// =============================================
// ELAND Mobile — Login Screen
// =============================================

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useColors } from '@/hooks/useColors';
import { Spacing, Typography } from '@/constants/Theme';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useAuthStore } from '@/store/auth-store';

export default function LoginScreen() {
  const colors = useColors();
  const { login, isLoading } = useAuthStore();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validate = () => {
    const newErrors: typeof errors = {};

    if (!email.trim()) {
      newErrors.email = 'И-мэйл оруулна уу';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'И-мэйл формат буруу';
    }

    if (!password) {
      newErrors.password = 'Нууц үг оруулна уу';
    } else if (password.length < 6) {
      newErrors.password = 'Нууц үг 6-аас дээш тэмдэгт байх ёстой';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async () => {
    if (!validate()) return;

    try {
      await login(email, password);
    } catch (error: any) {
      const message =
        error.response?.data?.error?.message || 'Нэвтрэх үед алдаа гарлаа';
      Alert.alert('Алдаа', message);
    }
  };

  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: colors.background }]}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* Logo & Welcome */}
        <View style={styles.logoSection}>
          <View style={[styles.logoContainer, { backgroundColor: colors.primary }]}>
            <Ionicons name="business" size={40} color="#FFF" />
          </View>
          <Text style={[styles.appName, { color: colors.primary }]}>ELAND</Text>
          <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
            Үл хөдлөх хөрөнгийн дуудлага худалдаа
          </Text>
        </View>

        {/* Login Form */}
        <View style={styles.form}>
          <Text style={[styles.formTitle, { color: colors.text }]}>Нэвтрэх</Text>

          <Input
            label="И-мэйл"
            placeholder="email@example.com"
            leftIcon="mail-outline"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            value={email}
            onChangeText={setEmail}
            error={errors.email}
          />

          <Input
            label="Нууц үг"
            placeholder="Нууц үгээ оруулна уу"
            leftIcon="lock-closed-outline"
            isPassword
            value={password}
            onChangeText={setPassword}
            error={errors.password}
          />

          <TouchableOpacity style={styles.forgotBtn}>
            <Text style={[styles.forgotText, { color: colors.primary }]}>
              Нууц үгээ мартсан?
            </Text>
          </TouchableOpacity>

          <Button
            title="Нэвтрэх"
            onPress={handleLogin}
            loading={isLoading}
            fullWidth
            size="lg"
          />

          {/* Divider */}
          <View style={styles.dividerRow}>
            <View style={[styles.divider, { backgroundColor: colors.border }]} />
            <Text style={[styles.dividerText, { color: colors.textTertiary }]}>эсвэл</Text>
            <View style={[styles.divider, { backgroundColor: colors.border }]} />
          </View>

          {/* Social Login */}
          <Button
            title="Google-ээр нэвтрэх"
            onPress={() => {}}
            variant="outline"
            fullWidth
            icon={<Ionicons name="logo-google" size={20} color={colors.primary} />}
          />

          {/* Register Link */}
          <View style={styles.registerRow}>
            <Text style={[styles.registerText, { color: colors.textSecondary }]}>
              Бүртгэл байхгүй юу?{' '}
            </Text>
            <TouchableOpacity onPress={() => router.push('/auth/register')}>
              <Text style={[styles.registerLink, { color: colors.primary }]}>Бүртгүүлэх</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    flexGrow: 1,
    paddingHorizontal: Spacing['2xl'],
    paddingTop: 100,
    paddingBottom: Spacing['3xl'],
  },
  logoSection: {
    alignItems: 'center',
    marginBottom: Spacing['3xl'],
  },
  logoContainer: {
    width: 80,
    height: 80,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.md,
  },
  appName: {
    ...Typography.h1,
    letterSpacing: 2,
  },
  subtitle: {
    ...Typography.bodySmall,
    marginTop: 4,
  },
  form: {
    flex: 1,
  },
  formTitle: {
    ...Typography.h2,
    marginBottom: Spacing.xl,
  },
  forgotBtn: {
    alignSelf: 'flex-end',
    marginBottom: Spacing.xl,
    marginTop: -Spacing.sm,
  },
  forgotText: {
    ...Typography.bodySmall,
    fontWeight: '500',
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: Spacing.xl,
    gap: Spacing.md,
  },
  divider: {
    flex: 1,
    height: 1,
  },
  dividerText: {
    ...Typography.caption,
  },
  registerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: Spacing['2xl'],
  },
  registerText: {
    ...Typography.body,
  },
  registerLink: {
    ...Typography.body,
    fontWeight: '700',
  },
});
