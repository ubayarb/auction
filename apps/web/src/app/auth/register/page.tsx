'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/auth-store';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

const ROLES = [
  { value: 'BUYER', label: 'Худалдан авагч' },
  { value: 'OWNER', label: 'Эзэмшигч' },
  { value: 'AGENT', label: 'Агент / Зуучлагч' },
  { value: 'COMPANY', label: 'Компани' },
];

export default function RegisterPage() {
  const router = useRouter();
  const { register } = useAuthStore();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    role: 'BUYER',
    agreeTerms: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.email) errs.email = 'И-мэйл хаяг оруулна уу';
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'И-мэйл буруу';
    if (!form.phone) errs.phone = 'Утасны дугаар оруулна уу';
    else if (!/^\d{8}$/.test(form.phone)) errs.phone = '8 оронтой дугаар оруулна уу';
    if (!form.firstName) errs.firstName = 'Нэр оруулна уу';
    if (!form.lastName) errs.lastName = 'Овог оруулна уу';
    if (!form.password) errs.password = 'Нууц үг оруулна уу';
    else if (form.password.length < 8) errs.password = 'Нууц үг 8-аас дээш тэмдэгт';
    else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(form.password))
      errs.password = 'Том, жижиг үсэг, тоо агуулсан байх';
    if (form.password !== form.confirmPassword) errs.confirmPassword = 'Нууц үг таарахгүй байна';
    if (!form.agreeTerms) errs.agreeTerms = 'Үйлчилгээний нөхцлийг зөвшөөрнө үү';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      await register({
        email: form.email,
        phone: form.phone,
        firstName: form.firstName,
        lastName: form.lastName,
        password: form.password,
        role: form.role,
      });
      toast.success('Бүртгэл амжилттай! Нэвтэрлээ.');
      router.push('/dashboard');
    } catch (err: any) {
      const msg = err?.response?.data?.message || 'Бүртгэл амжилтгүй';
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  const updateField = (field: string, value: any) => {
    setForm({ ...form, [field]: value });
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">Бүртгүүлэх</h1>
            <p className="mt-2 text-sm text-gray-500">ELAND платформд шинээр бүртгүүлэх</p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            {/* Role Selection */}
            <div>
              <label htmlFor="reg-role" className="block text-sm font-medium text-gray-700 mb-2">Хэрэглэгчийн төрөл</label>
              <div id="reg-role" className="grid grid-cols-2 gap-2">
                {ROLES.map((role) => (
                  <button
                    key={role.value}
                    type="button"
                    onClick={() => updateField('role', role.value)}
                    className={`rounded-lg border px-3 py-2 text-sm font-medium transition ${
                      form.role === role.value
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {role.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Names */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="reg-lastName" className="block text-sm font-medium text-gray-700">Овог</label>
                <input
                  id="reg-lastName"
                  type="text"
                  value={form.lastName}
                  onChange={(e) => updateField('lastName', e.target.value)}
                  className={`mt-1 block w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.lastName ? 'border-red-300' : 'border-gray-300'
                  }`}
                />
                {errors.lastName && <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>}
              </div>
              <div>
                <label htmlFor="reg-firstName" className="block text-sm font-medium text-gray-700">Нэр</label>
                <input
                  id="reg-firstName"
                  type="text"
                  value={form.firstName}
                  onChange={(e) => updateField('firstName', e.target.value)}
                  className={`mt-1 block w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.firstName ? 'border-red-300' : 'border-gray-300'
                  }`}
                />
                {errors.firstName && <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>}
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="reg-email" className="block text-sm font-medium text-gray-700">И-мэйл</label>
              <input
                id="reg-email"
                type="email"
                value={form.email}
                onChange={(e) => updateField('email', e.target.value)}
                className={`mt-1 block w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.email ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="email@example.com"
              />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="reg-phone" className="block text-sm font-medium text-gray-700">Утасны дугаар</label>
              <input
                id="reg-phone"
                type="tel"
                value={form.phone}
                onChange={(e) => updateField('phone', e.target.value)}
                className={`mt-1 block w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.phone ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="99001122"
              />
              {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="reg-password" className="block text-sm font-medium text-gray-700">Нууц үг</label>
              <div className="relative mt-1">
                <input
                  id="reg-password"
                  type={showPassword ? 'text' : 'password'}
                  value={form.password}
                  onChange={(e) => updateField('password', e.target.value)}
                  className={`block w-full rounded-lg border px-4 py-3 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.password ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="reg-confirmPassword" className="block text-sm font-medium text-gray-700">Нууц үг давтах</label>
              <input
                id="reg-confirmPassword"
                type="password"
                value={form.confirmPassword}
                onChange={(e) => updateField('confirmPassword', e.target.value)}
                className={`mt-1 block w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.confirmPassword ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="••••••••"
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-xs text-red-500">{errors.confirmPassword}</p>
              )}
            </div>

            {/* Terms */}
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                checked={form.agreeTerms}
                onChange={(e) => updateField('agreeTerms', e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label className="text-sm text-gray-600">
                <Link href="/terms" className="text-blue-600 hover:underline">
                  Үйлчилгээний нөхцөл
                </Link>{' '}
                болон{' '}
                <Link href="/privacy" className="text-blue-600 hover:underline">
                  Нууцлалын бодлого
                </Link>
                -г зөвшөөрч байна
              </label>
            </div>
            {errors.agreeTerms && <p className="text-xs text-red-500">{errors.agreeTerms}</p>}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 font-medium text-white hover:bg-blue-700 disabled:opacity-50 transition"
            >
              {loading && <Loader2 className="h-4 w-4 animate-spin" />}
              Бүртгүүлэх
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            Бүртгэлтэй юу?{' '}
            <Link href="/auth/login" className="font-medium text-blue-600 hover:underline">
              Нэвтрэх
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
