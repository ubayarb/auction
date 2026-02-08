// =============================================
// ELAND Mobile — Property Store
// =============================================

import { create } from 'zustand';
import { propertyApi } from '@/lib/api';
import type { Property, PropertySearchQuery, ApiResponse, PaginationMeta } from '@eland/shared-types';

interface PropertyState {
  properties: Property[];
  featured: Property[];
  favorites: Property[];
  meta: PaginationMeta | null;
  isLoading: boolean;
  filters: PropertySearchQuery;

  fetchProperties: (query?: PropertySearchQuery) => Promise<void>;
  fetchFeatured: () => Promise<void>;
  fetchFavorites: () => Promise<void>;
  toggleFavorite: (propertyId: string) => Promise<void>;
  setFilters: (filters: Partial<PropertySearchQuery>) => void;
  resetFilters: () => void;
}

const defaultFilters: PropertySearchQuery = {
  page: 1,
  limit: 20,
};

export const usePropertyStore = create<PropertyState>()((set, get) => ({
  properties: [],
  featured: [],
  favorites: [],
  meta: null,
  isLoading: false,
  filters: defaultFilters,

  fetchProperties: async (query) => {
    set({ isLoading: true });
    try {
      const params = { ...get().filters, ...query };
      const { data } = await propertyApi.get<ApiResponse<Property[]>>('/properties', { params });
      
      if (params.page && params.page > 1) {
        set((state) => ({
          properties: [...state.properties, ...data.data],
          meta: data.meta || null,
          isLoading: false,
        }));
      } else {
        set({
          properties: data.data,
          meta: data.meta || null,
          isLoading: false,
        });
      }
    } catch {
      set({ isLoading: false });
    }
  },

  fetchFeatured: async () => {
    try {
      const { data } = await propertyApi.get<ApiResponse<Property[]>>('/properties', {
        params: { isFeatured: true, limit: 10 },
      });
      set({ featured: data.data });
    } catch {}
  },

  fetchFavorites: async () => {
    try {
      const { data } = await propertyApi.get<ApiResponse<Property[]>>('/favorites');
      set({ favorites: data.data });
    } catch {}
  },

  toggleFavorite: async (propertyId) => {
    try {
      await propertyApi.post(`/favorites/${propertyId}/toggle`);
      // Refresh favorites
      get().fetchFavorites();
    } catch {}
  },

  setFilters: (filters) => {
    set((state) => ({
      filters: { ...state.filters, ...filters, page: 1 },
    }));
  },

  resetFilters: () => {
    set({ filters: defaultFilters });
  },
}));
