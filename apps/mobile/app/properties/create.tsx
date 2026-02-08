// =============================================
// ELAND Mobile — Create Property Screen
// =============================================

import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import { useColors } from '@/hooks/useColors';
import { Spacing, Typography, BorderRadius } from '@/constants/Theme';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useAuthStore } from '@/store/auth-store';
import { propertyApi } from '@/lib/api';

// ── Types ──────────────────────────────────────
const PROPERTY_TYPES = [
  { value: 'APARTMENT', label: 'Орон сууц', icon: 'business-outline' as const },
  { value: 'HOUSE', label: 'Хашаа байшин', icon: 'home-outline' as const },
  { value: 'OFFICE', label: 'Оффис', icon: 'briefcase-outline' as const },
  { value: 'LAND', label: 'Газар', icon: 'map-outline' as const },
  { value: 'COMMERCIAL', label: 'Худалдааны', icon: 'storefront-outline' as const },
  { value: 'WAREHOUSE', label: 'Агуулах', icon: 'cube-outline' as const },
  { value: 'GARAGE', label: 'Гараж', icon: 'car-outline' as const },
  { value: 'GERS_DISTRICT', label: 'Гэр хороолол', icon: 'trail-sign-outline' as const },
];

const TRANSACTION_TYPES = [
  { value: 'SALE', label: 'Зарах' },
  { value: 'RENT', label: 'Түрээслэх' },
  { value: 'DAILY_RENT', label: 'Өдрөөр түрээслэх' },
  { value: 'AUCTION', label: 'Дуудлага худалдаа' },
];

const DISTRICTS = [
  'Баянгол', 'Баянзүрх', 'Сүхбаатар', 'Чингэлтэй',
  'Хан-Уул', 'Сонгинохайркхан', 'Налайх', 'Багахангай', 'Багануур',
];

const HEATING_TYPES = [
  { value: 'CENTRAL', label: 'Төвийн' },
  { value: 'ELECTRIC', label: 'Цахилгаан' },
  { value: 'GAS', label: 'Хийн' },
  { value: 'NONE', label: 'Байхгүй' },
];

const CONDITION_TYPES = [
  { value: 'NEW', label: 'Шинэ' },
  { value: 'EXCELLENT', label: 'Маш сайн' },
  { value: 'GOOD', label: 'Сайн' },
  { value: 'FAIR', label: 'Дунд' },
  { value: 'NEEDS_RENOVATION', label: 'Засвар хийх' },
];

const FURNITURE_TYPES = [
  { value: 'FULLY_FURNISHED', label: 'Бүрэн тавилгатай' },
  { value: 'PARTIALLY_FURNISHED', label: 'Хэсэгчлэн' },
  { value: 'UNFURNISHED', label: 'Тавилгагүй' },
];

// ── Form State ─────────────────────────────────
interface FormState {
  title: string;
  description: string;
  type: string;
  transaction: string;
  price: string;
  isPriceNegotiable: boolean;
  totalArea: string;
  livingArea: string;
  rooms: string;
  bedrooms: string;
  bathrooms: string;
  floor: string;
  totalFloors: string;
  buildingYear: string;
  address: string;
  city: string;
  district: string;
  khoroo: string;
  heating: string;
  condition: string;
  furniture: string;
  balcony: boolean;
  elevator: boolean;
  garage: boolean;
  security: boolean;
  parking: string;
}

const initialForm: FormState = {
  title: '',
  description: '',
  type: 'APARTMENT',
  transaction: 'SALE',
  price: '',
  isPriceNegotiable: false,
  totalArea: '',
  livingArea: '',
  rooms: '',
  bedrooms: '',
  bathrooms: '',
  floor: '',
  totalFloors: '',
  buildingYear: '',
  address: '',
  city: 'Улаанбаатар',
  district: '',
  khoroo: '',
  heating: '',
  condition: '',
  furniture: '',
  balcony: false,
  elevator: false,
  garage: false,
  security: false,
  parking: '',
};

// ── Component ──────────────────────────────────
export default function CreatePropertyScreen() {
  const colors = useColors();
  const { isAuthenticated } = useAuthStore();
  const scrollRef = useRef<ScrollView>(null);

  const [form, setForm] = useState<FormState>(initialForm);
  const [images, setImages] = useState<ImagePicker.ImagePickerAsset[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(0); // 0: Үндсэн, 1: Дэлгэрэнгүй, 2: Байршил, 3: Зураг

  const STEPS = ['Үндсэн', 'Дэлгэрэнгүй', 'Байршил', 'Зураг'];

  // ── Helpers ────────────────────────────────
  const updateForm = (key: keyof FormState, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  };

  const pickImages = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Зөвшөөрөл', 'Зургийн санд хандах зөвшөөрөл шаардлагатай');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsMultipleSelection: true,
      quality: 0.8,
      selectionLimit: 10 - images.length,
    });

    if (!result.canceled) {
      setImages((prev) => [...prev, ...result.assets].slice(0, 10));
    }
  };

  const takePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Зөвшөөрөл', 'Камерт хандах зөвшөөрөл шаардлагатай');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({ quality: 0.8 });
    if (!result.canceled && images.length < 10) {
      setImages((prev) => [...prev, ...result.assets]);
    }
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  // ── Validation ─────────────────────────────
  const validateBasicInfo = (): Record<string, string> => {
    const errs: Record<string, string> = {};
    if (!form.title.trim()) errs.title = 'Гарчиг оруулна уу';
    if (!form.description.trim()) errs.description = 'Тайлбар оруулна уу';
    if (!form.price.trim()) errs.price = 'Үнэ оруулна уу';
    else if (Number(form.price) <= 0) errs.price = 'Үнэ 0-ээс их байх ёстой';
    return errs;
  };

  const validateDetails = (): Record<string, string> => {
    const errs: Record<string, string> = {};
    if (!form.totalArea.trim()) errs.totalArea = 'Талбай оруулна уу';
    return errs;
  };

  const validateLocation = (): Record<string, string> => {
    const errs: Record<string, string> = {};
    if (!form.address.trim()) errs.address = 'Хаяг оруулна уу';
    if (!form.district) errs.district = 'Дүүрэг сонгоно уу';
    return errs;
  };

  const stepValidators = [validateBasicInfo, validateDetails, validateLocation];

  const validateStep = (s: number): boolean => {
    const validator = stepValidators[s];
    const newErrors = validator ? validator() : {};
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep((s) => Math.min(s + 1, STEPS.length - 1));
      scrollRef.current?.scrollTo({ y: 0, animated: true });
    }
  };

  const prevStep = () => {
    setStep((s) => Math.max(s - 1, 0));
    scrollRef.current?.scrollTo({ y: 0, animated: true });
  };

  // ── Submit ─────────────────────────────────
  const handleSubmit = async () => {
    if (!isAuthenticated) {
      Alert.alert('Нэвтрэнэ үү', 'Зар оруулахын тулд нэвтрэх шаардлагатай', [
        { text: 'Болих' },
        { text: 'Нэвтрэх', onPress: () => router.push('/auth/login') },
      ]);
      return;
    }

    if (!validateStep(0) || !validateStep(1) || !validateStep(2)) {
      Alert.alert('Алдаа', 'Бүх шаардлагатай талбаруудыг бөглөнө үү');
      return;
    }

    setIsSubmitting(true);
    try {
      const payload = {
        title: form.title.trim(),
        description: form.description.trim(),
        type: form.type,
        transaction: form.transaction,
        price: Number(form.price),
        isPriceNegotiable: form.isPriceNegotiable,
        totalArea: form.totalArea ? Number(form.totalArea) : undefined,
        livingArea: form.livingArea ? Number(form.livingArea) : undefined,
        rooms: form.rooms ? Number(form.rooms) : undefined,
        bedrooms: form.bedrooms ? Number(form.bedrooms) : undefined,
        bathrooms: form.bathrooms ? Number(form.bathrooms) : undefined,
        floor: form.floor ? Number(form.floor) : undefined,
        totalFloors: form.totalFloors ? Number(form.totalFloors) : undefined,
        buildingYear: form.buildingYear ? Number(form.buildingYear) : undefined,
        parkingSpaces: form.parking ? Number(form.parking) : undefined,
        address: form.address.trim(),
        city: form.city,
        district: form.district,
        khoroo: form.khoroo || undefined,
        heating: form.heating || undefined,
        condition: form.condition || undefined,
        furniture: form.furniture || undefined,
        balcony: form.balcony,
        elevator: form.elevator,
        garage: form.garage,
        security: form.security,
      };

      await propertyApi.post('/properties', payload);

      Alert.alert('Амжилттай', 'Зар амжилттай үүсгэгдлээ!', [
        { text: 'За', onPress: () => router.back() },
      ]);
    } catch (error: any) {
      const msg = error.response?.data?.message || 'Зар үүсгэхэд алдаа гарлаа';
      Alert.alert('Алдаа', msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  // ── Render Helpers ─────────────────────────
  const renderChip = (
    label: string,
    selected: boolean,
    onPress: () => void,
    icon?: keyof typeof Ionicons.glyphMap,
  ) => (
    <TouchableOpacity
      key={label}
      onPress={onPress}
      style={[
        styles.chip,
        {
          backgroundColor: selected ? colors.primary : colors.surface,
          borderColor: selected ? colors.primary : colors.border,
        },
      ]}
    >
      {icon && (
        <Ionicons
          name={icon}
          size={16}
          color={selected ? '#FFF' : colors.textSecondary}
          style={{ marginRight: 4 }}
        />
      )}
      <Text
        style={[
          styles.chipText,
          { color: selected ? '#FFF' : colors.text },
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );

  const renderToggle = (
    label: string,
    value: boolean,
    onToggle: () => void,
    icon: keyof typeof Ionicons.glyphMap,
  ) => (
    <TouchableOpacity
      key={label}
      onPress={onToggle}
      style={[
        styles.toggleItem,
        {
          backgroundColor: value ? `${colors.primary}15` : colors.surface,
          borderColor: value ? colors.primary : colors.border,
        },
      ]}
    >
      <Ionicons
        name={icon}
        size={20}
        color={value ? colors.primary : colors.textSecondary}
      />
      <Text
        style={[
          styles.toggleText,
          { color: value ? colors.primary : colors.text },
        ]}
      >
        {label}
      </Text>
      {value && <Ionicons name="checkmark-circle" size={18} color={colors.primary} />}
    </TouchableOpacity>
  );

  const renderSectionTitle = (title: string) => (
    <Text style={[styles.sectionTitle, { color: colors.text }]}>{title}</Text>
  );

  // ── Step Renderers ─────────────────────────
  const renderStep0 = () => (
    <View style={styles.stepContent}>
      {renderSectionTitle('Зарын төрөл')}
      <View style={styles.chipGrid}>
        {PROPERTY_TYPES.map((t) =>
          renderChip(t.label, form.type === t.value, () => updateForm('type', t.value), t.icon),
        )}
      </View>

      {renderSectionTitle('Гүйлгээний төрөл')}
      <View style={styles.chipRow}>
        {TRANSACTION_TYPES.map((t) =>
          renderChip(t.label, form.transaction === t.value, () => updateForm('transaction', t.value)),
        )}
      </View>

      {renderSectionTitle('Зарын мэдээлэл')}
      <Input
        label="Гарчиг"
        placeholder="Жишээ: 2 өрөө байр, 14-р хороолол"
        value={form.title}
        onChangeText={(v) => updateForm('title', v)}
        error={errors.title}
        leftIcon="text-outline"
      />
      <Input
        label="Тайлбар"
        placeholder="Дэлгэрэнгүй тайлбар..."
        value={form.description}
        onChangeText={(v) => updateForm('description', v)}
        error={errors.description}
        multiline
        numberOfLines={4}
        style={{ minHeight: 100, textAlignVertical: 'top' }}
      />
      <Input
        label="Үнэ (₮)"
        placeholder="Жишээ: 150000000"
        value={form.price}
        onChangeText={(v) => updateForm('price', v.replaceAll(/\D/g, ''))}
        error={errors.price}
        keyboardType="numeric"
        leftIcon="cash-outline"
      />
      {form.price ? (
        <Text style={[styles.priceHint, { color: colors.textSecondary }]}>
          {formatPrice(form.price)} ₮
        </Text>
      ) : null}

      <TouchableOpacity
        style={styles.checkRow}
        onPress={() => updateForm('isPriceNegotiable', !form.isPriceNegotiable)}
      >
        <Ionicons
          name={form.isPriceNegotiable ? 'checkbox' : 'square-outline'}
          size={22}
          color={form.isPriceNegotiable ? colors.primary : colors.textSecondary}
        />
        <Text style={[styles.checkLabel, { color: colors.text }]}>Үнэ тохирч болно</Text>
      </TouchableOpacity>
    </View>
  );

  const renderStep1 = () => (
    <View style={styles.stepContent}>
      {renderSectionTitle('Талбай')}
      <View style={styles.row}>
        <View style={styles.halfInput}>
          <Input
            label="Нийт талбай (м²)"
            placeholder="80"
            value={form.totalArea}
            onChangeText={(v) => updateForm('totalArea', v.replaceAll(/[^0-9.]/g, ''))}
            error={errors.totalArea}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.halfInput}>
          <Input
            label="Амьдрах талбай (м²)"
            placeholder="65"
            value={form.livingArea}
            onChangeText={(v) => updateForm('livingArea', v.replaceAll(/[^0-9.]/g, ''))}
            keyboardType="numeric"
          />
        </View>
      </View>

      {renderSectionTitle('Өрөө')}
      <View style={styles.row}>
        <View style={styles.thirdInput}>
          <Input
            label="Өрөө"
            placeholder="3"
            value={form.rooms}
            onChangeText={(v) => updateForm('rooms', v.replaceAll(/\D/g, ''))}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.thirdInput}>
          <Input
            label="Унтлагын"
            placeholder="2"
            value={form.bedrooms}
            onChangeText={(v) => updateForm('bedrooms', v.replaceAll(/\D/g, ''))}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.thirdInput}>
          <Input
            label="Угаалга"
            placeholder="1"
            value={form.bathrooms}
            onChangeText={(v) => updateForm('bathrooms', v.replaceAll(/\D/g, ''))}
            keyboardType="numeric"
          />
        </View>
      </View>

      {renderSectionTitle('Давхар')}
      <View style={styles.row}>
        <View style={styles.thirdInput}>
          <Input
            label="Давхар"
            placeholder="5"
            value={form.floor}
            onChangeText={(v) => updateForm('floor', v.replaceAll(/\D/g, ''))}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.thirdInput}>
          <Input
            label="Нийт давхар"
            placeholder="9"
            value={form.totalFloors}
            onChangeText={(v) => updateForm('totalFloors', v.replaceAll(/\D/g, ''))}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.thirdInput}>
          <Input
            label="Баригдсан он"
            placeholder="2020"
            value={form.buildingYear}
            onChangeText={(v) => updateForm('buildingYear', v.replaceAll(/\D/g, ''))}
            keyboardType="numeric"
          />
        </View>
      </View>

      {renderSectionTitle('Халаалт')}
      <View style={styles.chipRow}>
        {HEATING_TYPES.map((t) =>
          renderChip(t.label, form.heating === t.value, () => updateForm('heating', t.value)),
        )}
      </View>

      {renderSectionTitle('Нөхцөл')}
      <View style={styles.chipRow}>
        {CONDITION_TYPES.map((t) =>
          renderChip(t.label, form.condition === t.value, () => updateForm('condition', t.value)),
        )}
      </View>

      {renderSectionTitle('Тавилга')}
      <View style={styles.chipRow}>
        {FURNITURE_TYPES.map((t) =>
          renderChip(t.label, form.furniture === t.value, () => updateForm('furniture', t.value)),
        )}
      </View>

      {renderSectionTitle('Нэмэлт')}
      <View style={styles.toggleGrid}>
        {renderToggle('Тагт', form.balcony, () => updateForm('balcony', !form.balcony), 'sunny-outline')}
        {renderToggle('Лифт', form.elevator, () => updateForm('elevator', !form.elevator), 'arrow-up-outline')}
        {renderToggle('Гараж', form.garage, () => updateForm('garage', !form.garage), 'car-outline')}
        {renderToggle('Хамгаалалт', form.security, () => updateForm('security', !form.security), 'shield-checkmark-outline')}
      </View>

      <Input
        label="Зогсоолын тоо"
        placeholder="1"
        value={form.parking}
        onChangeText={(v) => updateForm('parking', v.replaceAll(/\D/g, ''))}
        keyboardType="numeric"
        leftIcon="car-sport-outline"
      />
    </View>
  );

  const renderStep2 = () => (
    <View style={styles.stepContent}>
      {renderSectionTitle('Байршил')}
      <Input
        label="Хот"
        value={form.city}
        editable={false}
        leftIcon="location-outline"
      />

      {renderSectionTitle('Дүүрэг')}
      {errors.district ? (
        <Text style={styles.errorText}>{errors.district}</Text>
      ) : null}
      <View style={styles.chipGrid}>
        {DISTRICTS.map((d) =>
          renderChip(d, form.district === d, () => updateForm('district', d)),
        )}
      </View>

      <Input
        label="Хороо"
        placeholder="1-р хороо"
        value={form.khoroo}
        onChangeText={(v) => updateForm('khoroo', v)}
        leftIcon="navigate-outline"
      />

      <Input
        label="Дэлгэрэнгүй хаяг"
        placeholder="14-р хороолол, 5-р байр, 301 тоот"
        value={form.address}
        onChangeText={(v) => updateForm('address', v)}
        error={errors.address}
        multiline
        numberOfLines={2}
        leftIcon="map-outline"
      />
    </View>
  );

  const renderStep3 = () => (
    <View style={styles.stepContent}>
      {renderSectionTitle(`Зураг (${images.length}/10)`)}
      <Text style={[styles.imageHint, { color: colors.textSecondary }]}>
        10 хүртэлх зураг оруулах боломжтой. Эхний зураг нүүр зураг болно.
      </Text>

      <View style={styles.imageActions}>
        <TouchableOpacity
          style={[styles.imageBtn, { backgroundColor: colors.primary }]}
          onPress={pickImages}
        >
          <Ionicons name="images-outline" size={22} color="#FFF" />
          <Text style={styles.imageBtnText}>Галерей</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.imageBtn, { backgroundColor: colors.primary }]}
          onPress={takePhoto}
        >
          <Ionicons name="camera-outline" size={22} color="#FFF" />
          <Text style={styles.imageBtnText}>Камер</Text>
        </TouchableOpacity>
      </View>

      {images.length > 0 && (
        <View style={styles.imageGrid}>
          {images.map((img, idx) => (
            <View key={img.uri} style={styles.imageWrapper}>
              <Image source={{ uri: img.uri }} style={styles.imageThumb} />
              {idx === 0 && (
                <View style={[styles.primaryBadge, { backgroundColor: colors.primary }]}>
                  <Text style={styles.primaryText}>Нүүр</Text>
                </View>
              )}
              <TouchableOpacity
                style={styles.removeBtn}
                onPress={() => removeImage(idx)}
              >
                <Ionicons name="close-circle" size={24} color="#FF4444" />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      )}
    </View>
  );

  const renderStepContent = () => {
    switch (step) {
      case 0:
        return renderStep0();
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
      case 3:
        return renderStep3();
      default:
        return null;
    }
  };

  // ── Main Render ────────────────────────────
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        {/* Header */}
        <View style={[styles.header, { backgroundColor: colors.surface, borderBottomColor: colors.border }]}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
            <Ionicons name="arrow-back" size={24} color={colors.text} />
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { color: colors.text }]}>Зар оруулах</Text>
          <View style={{ width: 40 }} />
        </View>

        {/* Progress Steps */}
        <View style={[styles.stepsBar, { backgroundColor: colors.surface }]}>
          {STEPS.map((s, i) => (
            <TouchableOpacity
              key={s}
              onPress={() => {
                if (i < step) setStep(i);
              }}
              style={styles.stepItem}
            >
              <View
                style={[
                  styles.stepDot,
                  {
                    backgroundColor:
                      i <= step ? colors.primary : colors.border,
                  },
                ]}
              >
                {i < step ? (
                  <Ionicons name="checkmark" size={12} color="#FFF" />
                ) : (
                  <Text style={styles.stepNum}>{i + 1}</Text>
                )}
              </View>
              <Text
                style={[
                  styles.stepLabel,
                  {
                    color: i <= step ? colors.primary : colors.textSecondary,
                    fontWeight: i === step ? '600' : '400',
                  },
                ]}
              >
                {s}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Content */}
        <ScrollView
          ref={scrollRef}
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {renderStepContent()}
        </ScrollView>

        {/* Footer Buttons */}
        <View style={[styles.footer, { backgroundColor: colors.surface, borderTopColor: colors.border }]}>
          {step > 0 && (
            <Button
              title="Өмнөх"
              onPress={prevStep}
              variant="outline"
              style={{ flex: 1, marginRight: Spacing.sm }}
            />
          )}
          {step < STEPS.length - 1 ? (
            <Button
              title="Дараах"
              onPress={nextStep}
              style={{ flex: step > 0 ? 1 : undefined }}
              fullWidth={step === 0}
            />
          ) : (
            <Button
              title="Зар оруулах"
              onPress={handleSubmit}
              loading={isSubmitting}
              disabled={isSubmitting}
              style={{ flex: 1 }}
              icon={<Ionicons name="add-circle-outline" size={20} color="#FFF" />}
            />
          )}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

// ── Utilities ────────────────────────────────
function formatPrice(value: string): string {
  const num = Number.parseInt(value, 10);
  if (Number.isNaN(num)) return '';
  return num.toLocaleString('mn-MN');
}

// ── Styles ───────────────────────────────────
const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: Platform.OS === 'ios' ? 56 : 12,
    paddingBottom: 12,
    paddingHorizontal: Spacing.lg,
    borderBottomWidth: 1,
  },
  backBtn: { width: 40, height: 40, justifyContent: 'center' },
  headerTitle: { ...Typography.h4 },
  stepsBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.sm,
  },
  stepItem: { alignItems: 'center', gap: 4 },
  stepDot: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepNum: { fontSize: 11, fontWeight: '700', color: '#FFF' },
  stepLabel: { fontSize: 11 },
  scroll: { flex: 1 },
  scrollContent: { paddingBottom: 100 },
  stepContent: { padding: Spacing.lg },
  sectionTitle: {
    ...Typography.label,
    marginTop: Spacing.xl,
    marginBottom: Spacing.sm,
  },
  chipGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
  },
  chipText: { fontSize: 13, fontWeight: '500' },
  row: {
    flexDirection: 'row',
    gap: Spacing.sm,
  },
  halfInput: { flex: 1 },
  thirdInput: { flex: 1 },
  toggleGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
  },
  toggleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
  },
  toggleText: { fontSize: 13, fontWeight: '500' },
  checkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    marginTop: Spacing.sm,
  },
  checkLabel: { ...Typography.bodySmall },
  priceHint: {
    fontSize: 12,
    marginTop: -4,
    marginBottom: Spacing.sm,
    marginLeft: 2,
  },
  errorText: {
    fontSize: 12,
    color: '#EF4444',
    marginBottom: Spacing.xs,
  },
  imageHint: { ...Typography.caption, marginBottom: Spacing.md },
  imageActions: {
    flexDirection: 'row',
    gap: Spacing.md,
    marginBottom: Spacing.lg,
  },
  imageBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.lg,
  },
  imageBtnText: { color: '#FFF', fontWeight: '600', fontSize: 14 },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
  },
  imageWrapper: {
    width: '31%',
    aspectRatio: 1,
    borderRadius: BorderRadius.md,
    overflow: 'hidden',
  },
  imageThumb: { width: '100%', height: '100%' },
  primaryBadge: {
    position: 'absolute',
    top: 4,
    left: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  primaryText: { color: '#FFF', fontSize: 10, fontWeight: '700' },
  removeBtn: { position: 'absolute', top: 2, right: 2 },
  footer: {
    flexDirection: 'row',
    padding: Spacing.lg,
    paddingBottom: Platform.OS === 'ios' ? 36 : Spacing.lg,
    borderTopWidth: 1,
  },
});
