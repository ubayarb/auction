'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { auctionApi } from '@/lib/api';
import { AuctionCard } from '@/components/auction/auction-card';
import { Loader2, Gavel } from 'lucide-react';

const TABS = [
  { value: 'ACTIVE', label: 'Явагдаж байна' },
  { value: 'SCHEDULED', label: 'Товлосон' },
  { value: 'ENDED', label: 'Дууссан' },
];

function getEmptyMessage(tab: string): string {
  if (tab === 'ACTIVE') return 'Идэвхтэй дуудлага худалдаа байхгүй байна';
  if (tab === 'SCHEDULED') return 'Товлосон дуудлага худалдаа байхгүй байна';
  return 'Дууссан дуудлага худалдаа байхгүй байна';
}

export default function AuctionsPage() {
  const [activeTab, setActiveTab] = useState('ACTIVE');
  const [page, setPage] = useState(1);

  const { data, isLoading } = useQuery({
    queryKey: ['auctions', activeTab, page],
    queryFn: async () => {
      const res = await auctionApi.get('/auctions', {
        params: { status: activeTab, page, limit: 12 },
      });
      return res.data;
    },
  });

  const auctions = data?.data || [];
  const meta = data?.meta;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex items-center gap-3">
        <Gavel className="h-8 w-8 text-orange-500" />
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Дуудлага худалдаа</h1>
          <p className="mt-1 text-gray-500">Шууд, ил тод дуудлага худалдаа</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-8 flex gap-1 rounded-xl bg-gray-100 p-1">
        {TABS.map((tab) => (
          <button
            key={tab.value}
            onClick={() => {
              setActiveTab(tab.value);
              setPage(1);
            }}
            className={`flex-1 rounded-lg px-4 py-2.5 text-sm font-medium transition ${
              activeTab === tab.value
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Results */}
      <AuctionContent
        isLoading={isLoading}
        auctions={auctions}
        meta={meta}
        activeTab={activeTab}
        page={page}
        setPage={setPage}
      />
    </div>
  );
}

function AuctionContent({
  isLoading,
  auctions,
  meta,
  activeTab,
  page,
  setPage,
}: Readonly<{
  isLoading: boolean;
  auctions: any[];
  meta: any;
  activeTab: string;
  page: number;
  setPage: (fn: (p: number) => number) => void;
}>) {
  if (isLoading) {
    return (
      <div className="mt-12 flex justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    );
  }

  if (auctions.length === 0) {
    return (
      <div className="mt-12 text-center">
        <Gavel className="mx-auto h-12 w-12 text-gray-300" />
        <p className="mt-4 text-lg text-gray-500">{getEmptyMessage(activeTab)}</p>
      </div>
    );
  }

  return (
    <>
      <div className="mt-2 text-sm text-gray-500">
        Нийт <strong>{meta?.total || auctions.length}</strong> дуудлага худалдаа
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {auctions.map((auction: any) => (
          <AuctionCard key={auction.id} auction={auction} />
        ))}
      </div>
      {meta && meta.totalPages > 1 && (
        <div className="mt-8 flex items-center justify-center gap-2">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 disabled:opacity-50"
          >
            Өмнөх
          </button>
          <span className="px-4 text-sm text-gray-500">
            {page} / {meta.totalPages}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(meta.totalPages, p + 1))}
            disabled={page === meta.totalPages}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 disabled:opacity-50"
          >
            Дараах
          </button>
        </div>
      )}
    </>
  );
}
