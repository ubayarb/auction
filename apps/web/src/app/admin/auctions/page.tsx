'use client';

import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { auctionApi } from '@/lib/api';
import { formatDateTime, formatPrice } from '@/lib/utils';
import { toast } from 'sonner';
import {
  Gavel,
  Search,
  ChevronLeft,
  ChevronRight,
  Loader2,
  CheckCircle,
  XCircle,
  Clock,
  Eye,
  Calendar,
  DollarSign,
  Users,
  AlertTriangle,
  ExternalLink,
  TrendingUp,
  Ban,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const AUCTION_STATUS_MAP: Record<string, { label: string; class: string }> = {
  DRAFT: { label: 'Ноорог', class: 'bg-gray-100 text-gray-600' },
  PENDING_APPROVAL: { label: 'Зөвшөөрөл хүлээж буй', class: 'bg-yellow-100 text-yellow-700' },
  APPROVED: { label: 'Зөвшөөрсөн', class: 'bg-blue-100 text-blue-700' },
  SCHEDULED: { label: 'Товлосон', class: 'bg-indigo-100 text-indigo-700' },
  ACTIVE: { label: 'Идэвхтэй', class: 'bg-green-100 text-green-700' },
  EXTENDED: { label: 'Сунгагдсан', class: 'bg-cyan-100 text-cyan-700' },
  ENDED: { label: 'Дууссан', class: 'bg-purple-100 text-purple-700' },
  COMPLETED: { label: 'Амжилттай', class: 'bg-emerald-100 text-emerald-700' },
  CANCELLED: { label: 'Цуцлагдсан', class: 'bg-red-100 text-red-700' },
  FAILED: { label: 'Амжилтгүй', class: 'bg-red-100 text-red-600' },
};

const STATUS_TABS = [
  { key: '', label: 'Бүгд' },
  { key: 'PENDING_APPROVAL', label: 'Хүлээгдэж буй' },
  { key: 'ACTIVE', label: 'Идэвхтэй' },
  { key: 'SCHEDULED', label: 'Товлосон' },
  { key: 'ENDED,COMPLETED', label: 'Дууссан' },
  { key: 'CANCELLED,FAILED', label: 'Цуцлагдсан' },
];

export default function AdminAuctionsPage() {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('PENDING_APPROVAL');
  const [selectedAuction, setSelectedAuction] = useState<any>(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [rejectReason, setRejectReason] = useState('');
  const limit = 12;

  const { data, isLoading } = useQuery({
    queryKey: ['admin-auctions', page, search, statusFilter],
    queryFn: async () => {
      const params: any = { page, limit };
      if (search) params.search = search;
      if (statusFilter) params.status = statusFilter;
      const res = await auctionApi.get('/auctions', { params });
      return res.data;
    },
  });

  const approveMutation = useMutation({
    mutationFn: async (auctionId: string) => {
      return auctionApi.post(`/auctions/${auctionId}/approve`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-auctions'] });
      queryClient.invalidateQueries({ queryKey: ['admin-pending-auctions'] });
      toast.success('Дуудлага худалдаа амжилттай зөвшөөрөгдлөө');
      setShowDetailModal(false);
      setSelectedAuction(null);
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || 'Зөвшөөрөхөд алдаа гарлаа');
    },
  });

  const cancelMutation = useMutation({
    mutationFn: async ({ auctionId, reason }: { auctionId: string; reason: string }) => {
      return auctionApi.post(`/auctions/${auctionId}/cancel`, { reason });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-auctions'] });
      queryClient.invalidateQueries({ queryKey: ['admin-pending-auctions'] });
      toast.success('Дуудлага худалдаа цуцлагдлаа');
      setShowRejectModal(false);
      setShowDetailModal(false);
      setSelectedAuction(null);
      setRejectReason('');
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || 'Цуцлахад алдаа гарлаа');
    },
  });

  const auctions = data?.data || [];
  const meta = data?.meta || { total: 0, totalPages: 1 };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Дуудлага худалдааны удирдлага</h1>
        <p className="mt-1 text-sm text-gray-500">
          Дуудлага худалдааг зөвшөөрөх, хянах, удирдах
        </p>
      </div>

      {/* Status Tabs */}
      <div className="flex gap-1 overflow-x-auto rounded-lg border border-gray-200 bg-gray-50 p-1">
        {STATUS_TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => { setStatusFilter(tab.key); setPage(1); }}
            className={cn(
              'whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition',
              statusFilter === tab.key
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Дуудлага худалдаа хайх..."
          value={search}
          onChange={(e) => { setSearch(e.target.value); setPage(1); }}
          className="w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-10 pr-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      {/* Auctions Grid */}
      {isLoading ? (
        <div className="flex items-center justify-center py-16">
          <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
        </div>
      ) : auctions.length === 0 ? (
        <div className="rounded-xl border border-gray-200 bg-white py-16 text-center">
          <Gavel className="mx-auto h-12 w-12 text-gray-300" />
          <p className="mt-3 text-gray-500">Дуудлага худалдаа олдсонгүй</p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {auctions.map((auction: any) => {
            const status = AUCTION_STATUS_MAP[auction.status] || { label: auction.status, class: 'bg-gray-100 text-gray-600' };
            const isPending = auction.status === 'PENDING_APPROVAL';
            const isActive = auction.status === 'ACTIVE' || auction.status === 'EXTENDED';

            return (
              <div
                key={auction.id}
                className={cn(
                  'rounded-xl border bg-white transition hover:shadow-md',
                  isPending ? 'border-yellow-200' : 'border-gray-200'
                )}
              >
                <div className="p-5">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex-1 mr-2">
                      <h3 className="font-semibold text-gray-900 line-clamp-2">{auction.title}</h3>
                    </div>
                    <span className={cn('inline-flex shrink-0 items-center rounded-full px-2.5 py-0.5 text-xs font-medium', status.class)}>
                      {status.label}
                    </span>
                  </div>

                  {/* Auction Info */}
                  <div className="mt-4 space-y-2 text-sm">
                    <div className="flex items-center justify-between text-gray-600">
                      <div className="flex items-center gap-1.5">
                        <DollarSign className="h-3.5 w-3.5 text-gray-400" />
                        <span>Эхлэх үнэ</span>
                      </div>
                      <span className="font-semibold text-gray-900">
                        {formatPrice(Number(auction.startingPrice))}
                      </span>
                    </div>

                    {auction.currentPrice && (
                      <div className="flex items-center justify-between text-gray-600">
                        <div className="flex items-center gap-1.5">
                          <TrendingUp className="h-3.5 w-3.5 text-green-500" />
                          <span>Одоогийн үнэ</span>
                        </div>
                        <span className="font-semibold text-green-700">
                          {formatPrice(Number(auction.currentPrice))}
                        </span>
                      </div>
                    )}

                    <div className="flex items-center justify-between text-gray-600">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-gray-400" />
                        <span>Эхлэх</span>
                      </div>
                      <span>{formatDateTime(auction.startTime)}</span>
                    </div>

                    <div className="flex items-center justify-between text-gray-600">
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-gray-400" />
                        <span>Дуусах</span>
                      </div>
                      <span>{formatDateTime(auction.endTime)}</span>
                    </div>

                    <div className="flex items-center justify-between text-gray-600">
                      <div className="flex items-center gap-1.5">
                        <Users className="h-3.5 w-3.5 text-gray-400" />
                        <span>Оролцогч / Тендер</span>
                      </div>
                      <span>{auction.participantCount || 0} / {auction.bidCount || 0}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-4 flex gap-2">
                    <button
                      onClick={() => { setSelectedAuction(auction); setShowDetailModal(true); }}
                      className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
                    >
                      <Eye className="h-4 w-4" />
                      Дэлгэрэнгүй
                    </button>
                    {isPending && (
                      <button
                        onClick={() => approveMutation.mutate(auction.id)}
                        disabled={approveMutation.isPending}
                        className="flex items-center gap-1.5 rounded-lg bg-green-600 px-3 py-2 text-sm font-medium text-white hover:bg-green-700 transition disabled:opacity-50"
                      >
                        {approveMutation.isPending ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <CheckCircle className="h-4 w-4" />
                        )}
                        Зөвшөөрөх
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Pagination */}
      {meta.totalPages > 1 && (
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">Нийт {meta.total} дуудлага худалдаа</p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPage(Math.max(1, page - 1))}
              disabled={page === 1}
              className="rounded-lg border border-gray-200 p-2 text-gray-600 hover:bg-gray-50 disabled:opacity-50"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="text-sm text-gray-600">{page} / {meta.totalPages}</span>
            <button
              onClick={() => setPage(Math.min(meta.totalPages, page + 1))}
              disabled={page === meta.totalPages}
              className="rounded-lg border border-gray-200 p-2 text-gray-600 hover:bg-gray-50 disabled:opacity-50"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Detail Modal */}
      {showDetailModal && selectedAuction && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-2xl rounded-2xl bg-white p-6 max-h-[85vh] overflow-y-auto">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{selectedAuction.title}</h3>
                <div className="mt-1 flex items-center gap-2">
                  {(() => {
                    const s = AUCTION_STATUS_MAP[selectedAuction.status] || { label: selectedAuction.status, class: 'bg-gray-100 text-gray-600' };
                    return <span className={cn('inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium', s.class)}>{s.label}</span>;
                  })()}
                  <span className="text-xs text-gray-400">ID: {selectedAuction.id.slice(0, 8)}...</span>
                </div>
              </div>
              <button
                onClick={() => { setShowDetailModal(false); setSelectedAuction(null); }}
                className="rounded-lg p-1 text-gray-400 hover:bg-gray-100"
              >
                <XCircle className="h-5 w-5" />
              </button>
            </div>

            {selectedAuction.description && (
              <p className="mt-4 text-sm text-gray-600">{selectedAuction.description}</p>
            )}

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-lg border border-gray-200 p-4">
                <p className="text-xs text-gray-500">Эхлэх үнэ</p>
                <p className="text-lg font-bold text-gray-900">
                  {formatPrice(Number(selectedAuction.startingPrice))}
                </p>
              </div>
              {selectedAuction.reservePrice && (
                <div className="rounded-lg border border-gray-200 p-4">
                  <p className="text-xs text-gray-500">Нэгж доод үнэ</p>
                  <p className="text-lg font-bold text-gray-900">
                    {formatPrice(Number(selectedAuction.reservePrice))}
                  </p>
                </div>
              )}
              {selectedAuction.currentPrice && (
                <div className="rounded-lg border border-green-200 bg-green-50 p-4">
                  <p className="text-xs text-green-600">Одоогийн үнэ</p>
                  <p className="text-lg font-bold text-green-700">
                    {formatPrice(Number(selectedAuction.currentPrice))}
                  </p>
                </div>
              )}
              <div className="rounded-lg border border-gray-200 p-4">
                <p className="text-xs text-gray-500">Үнэ нэмэх алхам</p>
                <p className="text-lg font-bold text-gray-900">
                  {formatPrice(Number(selectedAuction.bidIncrement))}
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-lg border border-gray-200 p-4">
              <h4 className="font-medium text-gray-900 mb-3">Хугацаа & Тохиргоо</h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-gray-500">Эхлэх цаг</p>
                  <p className="font-medium">{formatDateTime(selectedAuction.startTime)}</p>
                </div>
                <div>
                  <p className="text-gray-500">Дуусах цаг</p>
                  <p className="font-medium">{formatDateTime(selectedAuction.endTime)}</p>
                </div>
                <div>
                  <p className="text-gray-500">Барьцаа шаардлага</p>
                  <p className="font-medium">
                    {selectedAuction.depositRequired ? (
                      <span className="text-green-700">
                        Тийм — {selectedAuction.depositAmount ? formatPrice(Number(selectedAuction.depositAmount)) : `${selectedAuction.depositPercent}%`}
                      </span>
                    ) : (
                      <span className="text-gray-500">Үгүй</span>
                    )}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">Сунгалт</p>
                  <p className="font-medium">
                    {selectedAuction.autoExtend
                      ? `${selectedAuction.extensionMinutes} мин (max ${selectedAuction.maxExtensions})`
                      : 'Үгүй'}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">Anti-sniping</p>
                  <p className="font-medium">
                    {selectedAuction.antiSnipingEnabled
                      ? `${selectedAuction.antiSnipingMinutes} мин`
                      : 'Идэвхгүй'}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">Төрөл</p>
                  <p className="font-medium">{selectedAuction.type}</p>
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-4 text-center">
              <div className="rounded-lg border border-gray-200 p-3">
                <p className="text-2xl font-bold text-gray-900">{selectedAuction.bidCount || 0}</p>
                <p className="text-xs text-gray-500">Тендер</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-3">
                <p className="text-2xl font-bold text-gray-900">{selectedAuction.participantCount || 0}</p>
                <p className="text-xs text-gray-500">Оролцогч</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-3">
                <p className="text-2xl font-bold text-gray-900">{selectedAuction.viewCount || 0}</p>
                <p className="text-xs text-gray-500">Үзсэн</p>
              </div>
            </div>

            {/* Actions */}
            {selectedAuction.status === 'PENDING_APPROVAL' && (
              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => approveMutation.mutate(selectedAuction.id)}
                  disabled={approveMutation.isPending}
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-3 text-sm font-medium text-white hover:bg-green-700 transition disabled:opacity-50"
                >
                  {approveMutation.isPending ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <CheckCircle className="h-4 w-4" />
                  )}
                  Зөвшөөрөх
                </button>
                <button
                  onClick={() => { setShowRejectModal(true); }}
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-100 transition"
                >
                  <Ban className="h-4 w-4" />
                  Цуцлах
                </button>
              </div>
            )}

            {(selectedAuction.status === 'ACTIVE' || selectedAuction.status === 'SCHEDULED') && (
              <div className="mt-6 flex gap-3">
                <Link
                  href={`/auctions/${selectedAuction.id}`}
                  target="_blank"
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
                >
                  <ExternalLink className="h-4 w-4" />
                  Дуудлага харах
                </Link>
                <button
                  onClick={() => { setShowRejectModal(true); }}
                  className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-100 transition"
                >
                  <Ban className="h-4 w-4" />
                  Цуцлах
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Reject Modal */}
      {showRejectModal && selectedAuction && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6">
            <div className="flex items-center gap-3 text-red-600 mb-4">
              <AlertTriangle className="h-6 w-6" />
              <h3 className="text-lg font-semibold">Дуудлага худалдаа цуцлах</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              &quot;{selectedAuction.title}&quot; дуудлага худалдааг цуцлах шалтгаанаа бичнэ үү.
            </p>
            <textarea
              value={rejectReason}
              onChange={(e) => setRejectReason(e.target.value)}
              placeholder="Цуцлах шалтгаан..."
              rows={3}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-red-400 focus:outline-none focus:ring-1 focus:ring-red-400"
            />
            <div className="mt-4 flex gap-2">
              <button
                onClick={() => cancelMutation.mutate({ auctionId: selectedAuction.id, reason: rejectReason })}
                disabled={!rejectReason.trim() || cancelMutation.isPending}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-red-700 transition disabled:opacity-50"
              >
                {cancelMutation.isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Ban className="h-4 w-4" />}
                Цуцлах
              </button>
              <button
                onClick={() => { setShowRejectModal(false); setRejectReason(''); }}
                className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Буцах
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
