// =============================================
// ELAND Mobile — API Client (Axios)
// =============================================

import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import * as SecureStore from 'expo-secure-store';
import { API_CONFIG } from '@/config';
import { router } from 'expo-router';

const createApiClient = (baseURL: string) => {
  const client = axios.create({
    baseURL,
    timeout: 30000,
    headers: { 'Content-Type': 'application/json' },
  });

  // Request interceptor — JWT token
  client.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
    try {
      const token = await SecureStore.getItemAsync('accessToken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch {}
    return config;
  });

  // Response interceptor — Auto refresh
  client.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
      const originalRequest = error.config as (InternalAxiosRequestConfig & { _retry?: boolean }) | undefined;

      if (error.response?.status === 401 && originalRequest && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          const refreshToken = await SecureStore.getItemAsync('refreshToken');
          if (refreshToken) {
            const { data } = await axios.post(`${API_CONFIG.auth}/auth/refresh`, { refreshToken });

            await SecureStore.setItemAsync('accessToken', data.data.accessToken);
            await SecureStore.setItemAsync('refreshToken', data.data.refreshToken);

            originalRequest.headers.Authorization = `Bearer ${data.data.accessToken}`;
            return client(originalRequest);
          }
        } catch {
          await SecureStore.deleteItemAsync('accessToken');
          await SecureStore.deleteItemAsync('refreshToken');
          router.replace('/auth/login');
        }
      }

      throw error;
    },
  );

  return client;
};

export const authApi = createApiClient(API_CONFIG.auth);
export const propertyApi = createApiClient(API_CONFIG.property);
export const contractApi = createApiClient(API_CONFIG.contract);
export const auctionApi = createApiClient(API_CONFIG.auction);
export const paymentApi = createApiClient(API_CONFIG.payment);
