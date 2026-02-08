// =============================================
// ELAND Mobile — Register Screen
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

export default function RegisterScreen() {
  const colors = useColors();
  const { register, isLoading } = useAuthStore();

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const updateField = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const validate = () => {
    const e: Record<string, string> = {};

    if (!form.firstName.trim()) e.firstName = 'Нэр оруулна уу';
    if (!form.lastName.trim()) e.lastName = 'Овог оруулна уу';
    if (!form.email.trim()) {
      e.email = 'И-мэйл оруулна уу';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'И-мэйл формат буруу';
    }
    if (!form.phone.trim()) {
      e.phone = 'Утасны дугаар оруулна уу';
    } else if (!/^\+?\d{8,15}$/.test(form.phone.replaceAll(/\s/g, ''))) {
      e.phone = 'Утасны дугаар буруу';
    }
    if (!form.password) {
      e.password = 'Нууц үг оруулна уу';
    } else if (form.password.length < 8) {
      e.password = 'Хамгийн багадаа 8 тэмдэгт';
    }
    if (form.password !== form.confirmPassword) {
      e.confirmPassword = 'Нууц үг таарахгүй байна';
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleRegister = async () => {
    if (!validate()) return;

    try {
      await register({
        email: form.email,
        phone: form.phone,
        password: form.password,
        firstName: form.firstName,
        lastName: form.lastName,
      });
    } catch (error: any) {
      const message =
        error.response?.data?.error?.message || 'Бүртгэлийн алдаа гарлаа';
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
        {/* Back Button */}
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color={colors.text} />
        </TouchableOpacity>

        <Text style={[styles.title, { color: colors.text }]}>Бүртгүүлэх</Text>
        <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
          ELAND платформд бүртгүүлж үйлчилгээ авах боломжтой
        </Text>

        {/* Name Row */}
        <View style={styles.row}>
          <View style={styles.halfInput}>
            <Input
              label="Овог"
              placeholder="Овог"
              leftIcon="person-outline"
              value={form.lastName}
              onChangeText={(v) => updateField('lastName', v)}
              error={errors.lastName}
            />
          </View>
          <View style={styles.halfInput}>
            <Input
              label="Нэр"
              placeholder="Нэр"
              value={form.firstName}
              onChangeText={(v) => updateField('firstName', v)}
              error={errors.firstName}
            />
          </View>
        </View>

        <Input
          label="И-мэйл"
          placeholder="email@example.com"
          leftIcon="mail-outline"
          keyboardType="email-address"
          autoCapitalize="none"
          value={form.email}
          onChangeText={(v) => updateField('email', v)}
          error={errors.email}
        />

        <Input
          label="Утасны дугаар"
          placeholder="+976 9999 9999"
          leftIcon="call-outline"
          keyboardType="phone-pad"
          value={form.phone}
          onChangeText={(v) => updateField('phone', v)}
          error={errors.phone}
        />

        <Input
          label="Нууц үг"
          placeholder="8+ тэмдэгт"
          leftIcon="lock-closed-outline"
          isPassword
          value={form.password}
          onChangeText={(v) => updateField('password', v)}
          error={errors.password}
        />

        <Input
          label="Нууц үг давтах"
          placeholder="Нууц үг давтах"
          leftIcon="lock-closed-outline"
          isPassword
          value={form.confirmPassword}
          onChangeText={(v) => updateField('confirmPassword', v)}
          error={errors.confirmPassword}
        />

        <Button
          title="Бүртгүүлэх"
          onPress={handleRegister}
          loading={isLoading}
          fullWidth
          size="lg"
          style={{ marginTop: Spacing.lg }}
        />

        {/* Login Link */}
        <View style={styles.loginRow}>
          <Text style={[styles.loginText, { color: colors.textSecondary }]}>
            Бүртгэлтэй юу?{' '}
          </Text>
          <TouchableOpacity onPress={() => router.back()}>
            <Text style={[styles.loginLink, { color: colors.primary }]}>Нэвтрэх</Text>
          </TouchableOpacity>
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
    paddingTop: 70,
    paddingBottom: Spacing['3xl'],
  },
  backBtn: {
    marginBottom: Spacing.lg,
  },
  title: {
    ...Typography.h1,
    marginBottom: 4,
  },
  subtitle: {
    ...Typography.bodySmall,
    marginBottom: Spacing['2xl'],
  },
  row: {
    flexDirection: 'row',
    gap: Spacing.md,
  },
  halfInput: {
    flex: 1,
  },
  loginRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: Spacing['2xl'],
  },
  loginText: {
    ...Typography.body,
  },
  loginLink: {
    ...Typography.body,
    fontWeight: '700',
  },
});
