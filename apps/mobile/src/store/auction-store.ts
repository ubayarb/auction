// =============================================
// ELAND Mobile — Auction Store
// =============================================

import { create } from 'zustand';
import { auctionApi } from '@/lib/api';
import type { Auction, Bid, ApiResponse, PaginationMeta } from '@eland/shared-types';

interface AuctionState {
  auctions: Auction[];
  liveAuctions: Auction[];
  myBids: Bid[];
  meta: PaginationMeta | null;
  isLoading: boolean;

  fetchAuctions: (params?: Record<string, any>) => Promise<void>;
  fetchLiveAuctions: () => Promise<void>;
  fetchMyBids: () => Promise<void>;
  placeBid: (auctionId: string, amount: number) => Promise<void>;
}

export const useAuctionStore = create<AuctionState>()((set, get) => ({
  auctions: [],
  liveAuctions: [],
  myBids: [],
  meta: null,
  isLoading: false,

  fetchAuctions: async (params) => {
    set({ isLoading: true });
    try {
      const { data } = await auctionApi.get<ApiResponse<Auction[]>>('/auctions', { params });
      set({ auctions: data.data, meta: data.meta || null, isLoading: false });
    } catch {
      set({ isLoading: false });
    }
  },

  fetchLiveAuctions: async () => {
    try {
      const { data } = await auctionApi.get<ApiResponse<Auction[]>>('/auctions', {
        params: { status: 'active', limit: 10 },
      });
      set({ liveAuctions: data.data });
    } catch {}
  },

  fetchMyBids: async () => {
    try {
      const { data } = await auctionApi.get<ApiResponse<Bid[]>>('/bids/my');
      set({ myBids: data.data });
    } catch {}
  },

  placeBid: async (auctionId, amount) => {
    await auctionApi.post(`/auctions/${auctionId}/bids`, { amount });
    // Refresh after bid
    get().fetchLiveAuctions();
  },
}));
