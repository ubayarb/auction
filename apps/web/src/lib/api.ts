import axios from 'axios';
import { siteConfig } from './config';

const createApiClient = (baseURL: string) => {
  const client = axios.create({
    baseURL,
    timeout: 30000,
    headers: { 'Content-Type': 'application/json' },
  });

  // Request interceptor — JWT token
  client.interceptors.request.use((config) => {
    if (globalThis.window !== undefined) {
      const token = localStorage.getItem('accessToken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  });

  // Response interceptor — Token refresh
  client.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          const refreshToken = localStorage.getItem('refreshToken');
          if (refreshToken) {
            const { data } = await axios.post(`${siteConfig.api.auth}/auth/refresh`, {
              refreshToken,
            });

            localStorage.setItem('accessToken', data.data.accessToken);
            localStorage.setItem('refreshToken', data.data.refreshToken);

            originalRequest.headers.Authorization = `Bearer ${data.data.accessToken}`;
            return client(originalRequest);
          }
        } catch (_refreshError) {
          console.error('Token refresh failed', _refreshError);
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          if (globalThis.window !== undefined) {
            globalThis.location.href = '/auth/login';
          }
        }
      }

      throw error;
    },
  );

  return client;
};

export const authApi = createApiClient(siteConfig.api.auth);
export const propertyApi = createApiClient(siteConfig.api.property);
export const contractApi = createApiClient(siteConfig.api.contract);
export const auctionApi = createApiClient(siteConfig.api.auction);
export const paymentApi = createApiClient(siteConfig.api.payment);
