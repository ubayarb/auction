'use client';

import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { authApi } from '@/lib/api';
import { formatDateTime } from '@/lib/utils';
import { toast } from 'sonner';
import {
  ShieldCheck,
  Search,
  ChevronLeft,
  ChevronRight,
  Loader2,
  CheckCircle,
  XCircle,
  Clock,
  FileText,
  Eye,
  User,
  Phone,
  Mail,
  Calendar,
  AlertTriangle,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const KYC_TAB_FILTERS = [
  { key: '', label: 'Бүгд' },
  { key: 'pending', label: 'Хүлээгдэж буй' },
  { key: 'verified', label: 'Баталгаажсан' },
  { key: 'rejected', label: 'Татгалзсан' },
];

export default function AdminKycPage() {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [kycFilter, setKycFilter] = useState('pending');
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [rejectReason, setRejectReason] = useState('');
  const [showRejectForm, setShowRejectForm] = useState(false);
  const limit = 15;

  const { data, isLoading } = useQuery({
    queryKey: ['admin-kyc-users', page, search, kycFilter],
    queryFn: async () => {
      const params: any = { page, limit };
      if (search) params.search = search;
      if (kycFilter) params.kycStatus = kycFilter;
      const res = await authApi.get('/users', { params });
      return res.data;
    },
  });

  const verifyMutation = useMutation({
    mutationFn: async ({ userId, status, reason }: { userId: string; status: string; reason?: string }) => {
      return authApi.post(`/users/kyc/${userId}/verify`, { status, reason });
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['admin-kyc-users'] });
      queryClient.invalidateQueries({ queryKey: ['admin-kyc-pending'] });
      if (variables.status === 'verified') {
        toast.success('KYC амжилттай баталгаажлаа');
      } else {
        toast.success('KYC татгалзлаа');
      }
      setShowDetailModal(false);
      setSelectedUser(null);
      setShowRejectForm(false);
      setRejectReason('');
    },
    onError: () => {
      toast.error('KYC баталгаажуулахад алдаа гарлаа');
    },
  });

  const users = data?.data || [];
  const meta = data?.meta || { total: 0, totalPages: 1 };

  const openDetail = (user: any) => {
    setSelectedUser(user);
    setShowDetailModal(true);
    setShowRejectForm(false);
    setRejectReason('');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">KYC баталгаажуулалт</h1>
        <p className="mt-1 text-sm text-gray-500">
          Хэрэглэгчдийн мэдээлэл баталгаажуулах, дуудлага худалдаа зохион байгуулагчийн эрх олгох
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 rounded-lg border border-gray-200 bg-gray-50 p-1">
        {KYC_TAB_FILTERS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => { setKycFilter(tab.key); setPage(1); }}
            className={cn(
              'flex-1 rounded-md px-4 py-2 text-sm font-medium transition',
              kycFilter === tab.key
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
          placeholder="Нэр, имэйл хайх..."
          value={search}
          onChange={(e) => { setSearch(e.target.value); setPage(1); }}
          className="w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-10 pr-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      {/* User Cards */}
      {isLoading ? (
        <div className="flex items-center justify-center py-16">
          <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
        </div>
      ) : users.length === 0 ? (
        <div className="rounded-xl border border-gray-200 bg-white py-16 text-center">
          <ShieldCheck className="mx-auto h-12 w-12 text-gray-300" />
          <p className="mt-3 text-gray-500">KYC хүсэлт олдсонгүй</p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {users.map((user: any) => {
            const isPending = user.kycStatus === 'pending';
            const isVerified = user.kycStatus === 'verified';
            const isRejected = user.kycStatus === 'rejected';

            return (
              <div
                key={user.id}
                className={cn(
                  'rounded-xl border bg-white p-5 transition',
                  isPending && 'border-orange-200 hover:border-orange-300',
                  isVerified && 'border-green-200',
                  isRejected && 'border-red-200',
                  !isPending && !isVerified && !isRejected && 'border-gray-200'
                )}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        'flex h-10 w-10 items-center justify-center rounded-full',
                        isPending && 'bg-orange-100 text-orange-600',
                        isVerified && 'bg-green-100 text-green-600',
                        isRejected && 'bg-red-100 text-red-600',
                        !isPending && !isVerified && !isRejected && 'bg-gray-100 text-gray-600'
                      )}
                    >
                      <User className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        {user.profile?.lastName} {user.profile?.firstName}
                      </p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                    </div>
                  </div>
                  {isPending && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-orange-100 px-2 py-0.5 text-xs font-medium text-orange-700">
                      <Clock className="h-3 w-3" />
                      Шинэ
                    </span>
                  )}
                  {isVerified && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
                      <CheckCircle className="h-3 w-3" />
                      Баталсан
                    </span>
                  )}
                  {isRejected && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-700">
                      <XCircle className="h-3 w-3" />
                      Татгалзсан
                    </span>
                  )}
                </div>

                <div className="mt-4 space-y-2 text-sm text-gray-600">
                  {user.phone && (
                    <div className="flex items-center gap-2">
                      <Phone className="h-3.5 w-3.5 text-gray-400" />
                      {user.phone}
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Calendar className="h-3.5 w-3.5 text-gray-400" />
                    {formatDateTime(user.createdAt)}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {(user.roles || user.userRoles?.map((r: any) => r.role?.name || r.roleName) || []).map((role: string) => (
                      <span
                        key={role}
                        className="rounded bg-gray-100 px-1.5 py-0.5 text-xs text-gray-600"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() => openDetail(user)}
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
                  >
                    <Eye className="h-4 w-4" />
                    Дэлгэрэнгүй
                  </button>
                  {isPending && (
                    <>
                      <button
                        onClick={() => verifyMutation.mutate({ userId: user.id, status: 'verified' })}
                        disabled={verifyMutation.isPending}
                        className="flex items-center gap-1.5 rounded-lg bg-green-600 px-3 py-2 text-sm font-medium text-white hover:bg-green-700 transition disabled:opacity-50"
                      >
                        <CheckCircle className="h-4 w-4" />
                        Батлах
                      </button>
                      <button
                        onClick={() => openDetail(user)}
                        className="flex items-center gap-1.5 rounded-lg bg-red-50 px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-100 transition"
                      >
                        <XCircle className="h-4 w-4" />
                      </button>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Pagination */}
      {meta.totalPages > 1 && (
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">Нийт {meta.total} хэрэглэгч</p>
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

      {/* Detail / Verify Modal */}
      {showDetailModal && selectedUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 max-h-[85vh] overflow-y-auto">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Хэрэглэгчийн дэлгэрэнгүй мэдээлэл
                </h3>
                <p className="mt-1 text-sm text-gray-500">KYC баталгаажуулалт</p>
              </div>
              <button
                onClick={() => { setShowDetailModal(false); setSelectedUser(null); }}
                className="rounded-lg p-1 text-gray-400 hover:bg-gray-100"
              >
                <XCircle className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-6 space-y-4">
              {/* User Info */}
              <div className="rounded-lg border border-gray-200 p-4 space-y-3">
                <h4 className="font-medium text-gray-900">Хувийн мэдээлэл</h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-gray-500">Овог</p>
                    <p className="font-medium text-gray-900">{selectedUser.profile?.lastName || '—'}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Нэр</p>
                    <p className="font-medium text-gray-900">{selectedUser.profile?.firstName || '—'}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Имэйл</p>
                    <p className="font-medium text-gray-900">{selectedUser.email}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Утас</p>
                    <p className="font-medium text-gray-900">{selectedUser.phone || '—'}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Бүртгүүлсэн</p>
                    <p className="font-medium text-gray-900">{formatDateTime(selectedUser.createdAt)}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Нэвтэрсэн тоо</p>
                    <p className="font-medium text-gray-900">{selectedUser.loginCount || 0}</p>
                  </div>
                </div>
              </div>

              {/* KYC Status */}
              <div className="rounded-lg border border-gray-200 p-4 space-y-3">
                <h4 className="font-medium text-gray-900">KYC төлөв</h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-gray-500">Одоогийн төлөв</p>
                    <p className="font-medium">
                      {selectedUser.kycStatus === 'verified' && (
                        <span className="text-green-700">Баталгаажсан</span>
                      )}
                      {selectedUser.kycStatus === 'pending' && (
                        <span className="text-orange-700">Хүлээгдэж буй</span>
                      )}
                      {selectedUser.kycStatus === 'rejected' && (
                        <span className="text-red-700">Татгалзсан</span>
                      )}
                      {selectedUser.kycStatus === 'not_started' && (
                        <span className="text-gray-500">Эхлээгүй</span>
                      )}
                    </p>
                  </div>
                  {selectedUser.kycVerifiedAt && (
                    <div>
                      <p className="text-gray-500">Баталгаажсан огноо</p>
                      <p className="font-medium text-gray-900">{formatDateTime(selectedUser.kycVerifiedAt)}</p>
                    </div>
                  )}
                </div>

                {/* KYC Documents */}
                {selectedUser.kycVerifications?.length > 0 && (
                  <div className="mt-3">
                    <p className="text-sm text-gray-500 mb-2">Баримт бичгүүд</p>
                    <div className="space-y-2">
                      {selectedUser.kycVerifications.map((doc: any, i: number) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 rounded-lg border border-gray-100 bg-gray-50 p-3"
                        >
                          <FileText className="h-5 w-5 text-gray-400" />
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-700">
                              {doc.documentType || 'Баримт бичиг'}
                            </p>
                            <p className="text-xs text-gray-500">
                              {doc.documentNumber || ''}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Roles */}
              <div className="rounded-lg border border-gray-200 p-4">
                <h4 className="font-medium text-gray-900 mb-2">Эрхүүд</h4>
                <div className="flex flex-wrap gap-1.5">
                  {(selectedUser.roles || selectedUser.userRoles?.map((r: any) => r.role?.name || r.roleName) || []).map((role: string) => (
                    <span
                      key={role}
                      className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              {selectedUser.kycStatus === 'pending' && (
                <div className="space-y-3">
                  {!showRejectForm ? (
                    <div className="flex gap-3">
                      <button
                        onClick={() => verifyMutation.mutate({ userId: selectedUser.id, status: 'verified' })}
                        disabled={verifyMutation.isPending}
                        className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-3 text-sm font-medium text-white hover:bg-green-700 transition disabled:opacity-50"
                      >
                        {verifyMutation.isPending ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <CheckCircle className="h-4 w-4" />
                        )}
                        Баталгаажуулах
                      </button>
                      <button
                        onClick={() => setShowRejectForm(true)}
                        className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-100 transition"
                      >
                        <XCircle className="h-4 w-4" />
                        Татгалзах
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-red-600">
                        <AlertTriangle className="h-4 w-4" />
                        Татгалзах шалтгаан
                      </div>
                      <textarea
                        value={rejectReason}
                        onChange={(e) => setRejectReason(e.target.value)}
                        placeholder="Татгалзах шалтгаанаа бичнэ үү..."
                        rows={3}
                        className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-red-400 focus:outline-none focus:ring-1 focus:ring-red-400"
                      />
                      <div className="flex gap-2">
                        <button
                          onClick={() => verifyMutation.mutate({ userId: selectedUser.id, status: 'rejected', reason: rejectReason })}
                          disabled={!rejectReason.trim() || verifyMutation.isPending}
                          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-red-700 transition disabled:opacity-50"
                        >
                          {verifyMutation.isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <XCircle className="h-4 w-4" />}
                          Татгалзах
                        </button>
                        <button
                          onClick={() => setShowRejectForm(false)}
                          className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
                        >
                          Буцах
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
