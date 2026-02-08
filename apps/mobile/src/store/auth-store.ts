// =============================================
// ELAND Mobile — Auth Store (Zustand)
// =============================================

import { create } from 'zustand';
import * as SecureStore from 'expo-secure-store';
import { authApi } from '@/lib/api';
import { router } from 'expo-router';
import type { User, AuthResponse, RegisterRequest } from '@eland/shared-types';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isInitialized: boolean;

  initialize: () => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  register: (data: RegisterRequest) => Promise<void>;
  logout: () => Promise<void>;
  fetchUser: () => Promise<void>;
  setUser: (user: User | null) => void;
}

export const useAuthStore = create<AuthState>()((set, get) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  isInitialized: false,

  initialize: async () => {
    try {
      const token = await SecureStore.getItemAsync('accessToken');
      if (token) {
        await get().fetchUser();
      }
    } catch {
      // Token байхгүй бол нэвтрээгүй
    } finally {
      set({ isInitialized: true });
    }
  },

  login: async (email, password) => {
    set({ isLoading: true });
    try {
      const { data } = await authApi.post<{ data: AuthResponse }>('/auth/login', {
        email,
        password,
      });

      const tokens = data.data.tokens || data.data;
      await SecureStore.setItemAsync('accessToken', tokens.accessToken);
      await SecureStore.setItemAsync('refreshToken', tokens.refreshToken);

      set({
        user: data.data.user,
        isAuthenticated: true,
        isLoading: false,
      });

      router.replace('/(tabs)');
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },

  register: async (registerData) => {
    set({ isLoading: true });
    try {
      const { data } = await authApi.post<{ data: AuthResponse }>('/auth/register', registerData);

      const tokens = data.data.tokens || data.data;
      await SecureStore.setItemAsync('accessToken', tokens.accessToken);
      await SecureStore.setItemAsync('refreshToken', tokens.refreshToken);

      set({
        user: data.data.user,
        isAuthenticated: true,
        isLoading: false,
      });

      router.replace('/(tabs)');
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },

  logout: async () => {
    try {
      await authApi.post('/auth/logout');
    } catch {}

    await SecureStore.deleteItemAsync('accessToken');
    await SecureStore.deleteItemAsync('refreshToken');

    set({ user: null, isAuthenticated: false });
    router.replace('/auth/login');
  },

  fetchUser: async () => {
    try {
      const { data } = await authApi.get<{ data: User }>('/auth/me');
      set({ user: data.data, isAuthenticated: true });
    } catch {
      set({ user: null, isAuthenticated: false });
    }
  },

  setUser: (user) => {
    set({ user, isAuthenticated: !!user });
  },
}));
