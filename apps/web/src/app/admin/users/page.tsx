'use client';

import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { authApi } from '@/lib/api';
import { formatDateTime } from '@/lib/utils';
import { toast } from 'sonner';
import {
  Search,
  Users,
  Shield,
  ChevronLeft,
  ChevronRight,
  Loader2,
  Ban,
  CheckCircle,
  XCircle,
  MoreVertical,
  UserPlus,
  Eye,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const STATUS_MAP: Record<string, { label: string; class: string }> = {
  active: { label: 'Идэвхтэй', class: 'bg-green-100 text-green-700' },
  pending: { label: 'Хүлээгдэж буй', class: 'bg-yellow-100 text-yellow-700' },
  suspended: { label: 'Түдгэлзүүлсэн', class: 'bg-orange-100 text-orange-700' },
  banned: { label: 'Хориглосон', class: 'bg-red-100 text-red-700' },
};

const ROLE_MAP: Record<string, string> = {
  ADMIN: 'Админ',
  BUYER: 'Худалдан авагч',
  OWNER: 'Эзэмшигч',
  AGENT: 'Агент',
  COMPANY: 'Компани',
  BANK: 'Банк',
  NOTARY: 'Нотариат',
  GOV: 'Засгийн газар',
};

const KYC_STATUS_MAP: Record<string, { label: string; class: string }> = {
  not_started: { label: 'Эхлээгүй', class: 'bg-gray-100 text-gray-600' },
  pending: { label: 'Хүлээгдэж буй', class: 'bg-orange-100 text-orange-700' },
  verified: { label: 'Баталгаажсан', class: 'bg-green-100 text-green-700' },
  rejected: { label: 'Татгалзсан', class: 'bg-red-100 text-red-700' },
};

export default function AdminUsersPage() {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [showRoleModal, setShowRoleModal] = useState(false);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const limit = 15;

  const { data, isLoading } = useQuery({
    queryKey: ['admin-users', page, search, statusFilter],
    queryFn: async () => {
      const params: any = { page, limit };
      if (search) params.search = search;
      if (statusFilter) params.status = statusFilter;
      const res = await authApi.get('/users', { params });
      return res.data;
    },
  });

  const statusMutation = useMutation({
    mutationFn: async ({ userId, status }: { userId: string; status: string }) => {
      return authApi.post(`/users/${userId}/status`, { status });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-users'] });
      toast.success('Хэрэглэгчийн төлөв амжилттай өөрчлөгдлөө');
      setShowStatusModal(false);
      setSelectedUser(null);
    },
    onError: () => {
      toast.error('Төлөв өөрчлөхөд алдаа гарлаа');
    },
  });

  const addRoleMutation = useMutation({
    mutationFn: async ({ userId, role }: { userId: string; role: string }) => {
      return authApi.post(`/users/${userId}/roles`, { role });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-users'] });
      toast.success('Эрх амжилттай нэмэгдлээ');
      setShowRoleModal(false);
      setSelectedUser(null);
    },
    onError: () => {
      toast.error('Эрх нэмэхэд алдаа гарлаа');
    },
  });

  const removeRoleMutation = useMutation({
    mutationFn: async ({ userId, role }: { userId: string; role: string }) => {
      return authApi.delete(`/users/${userId}/roles/${role}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-users'] });
      toast.success('Эрх амжилттай хасагдлаа');
    },
    onError: () => {
      toast.error('Эрх хасахад алдаа гарлаа');
    },
  });

  const users = data?.data || [];
  const meta = data?.meta || { total: 0, totalPages: 1 };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Хэрэглэгчийн удирдлага</h1>
        <p className="mt-1 text-sm text-gray-500">
          Бүх хэрэглэгчдийн мэдээлэл, эрх, төлөвийг удирдах
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Нэр, имэйл хайх..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            className="w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-10 pr-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => { setStatusFilter(e.target.value); setPage(1); }}
          className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none"
        >
          <option value="">Бүх төлөв</option>
          <option value="active">Идэвхтэй</option>
          <option value="pending">Хүлээгдэж буй</option>
          <option value="suspended">Түдгэлзүүлсэн</option>
          <option value="banned">Хориглосон</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50">
              <th className="px-5 py-3 text-left font-medium text-gray-500">Хэрэглэгч</th>
              <th className="px-5 py-3 text-left font-medium text-gray-500">Төлөв</th>
              <th className="px-5 py-3 text-left font-medium text-gray-500">KYC</th>
              <th className="px-5 py-3 text-left font-medium text-gray-500">Эрхүүд</th>
              <th className="px-5 py-3 text-left font-medium text-gray-500">Бүртгүүлсэн</th>
              <th className="px-5 py-3 text-right font-medium text-gray-500">Үйлдэл</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {isLoading ? (
              <tr>
                <td colSpan={6} className="py-12 text-center">
                  <Loader2 className="mx-auto h-6 w-6 animate-spin text-gray-400" />
                </td>
              </tr>
            ) : users.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-12 text-center text-gray-400">
                  Хэрэглэгч олдсонгүй
                </td>
              </tr>
            ) : (
              users.map((user: any) => {
                const status = STATUS_MAP[user.status] || { label: user.status, class: 'bg-gray-100 text-gray-600' };
                const kycStatus = KYC_STATUS_MAP[user.kycStatus] || { label: user.kycStatus, class: 'bg-gray-100 text-gray-600' };
                const roles = user.userRoles?.map((r: any) => r.role?.name || r.roleName) || user.roles || [];

                return (
                  <tr key={user.id} className="hover:bg-gray-50 transition">
                    <td className="px-5 py-3">
                      <div>
                        <p className="font-medium text-gray-900">
                          {user.profile?.lastName} {user.profile?.firstName}
                        </p>
                        <p className="text-xs text-gray-500">{user.email}</p>
                        {user.phone && <p className="text-xs text-gray-400">{user.phone}</p>}
                      </div>
                    </td>
                    <td className="px-5 py-3">
                      <span className={cn('inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium', status.class)}>
                        {status.label}
                      </span>
                    </td>
                    <td className="px-5 py-3">
                      <span className={cn('inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium', kycStatus.class)}>
                        {kycStatus.label}
                      </span>
                    </td>
                    <td className="px-5 py-3">
                      <div className="flex flex-wrap gap-1">
                        {roles.map((role: string) => (
                          <span
                            key={role}
                            className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700"
                          >
                            {ROLE_MAP[role] || role}
                            <button
                              onClick={() => removeRoleMutation.mutate({ userId: user.id, role })}
                              className="hover:text-red-500 transition"
                              title="Эрх хасах"
                            >
                              <XCircle className="h-3 w-3" />
                            </button>
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-5 py-3 text-xs text-gray-500">
                      {formatDateTime(user.createdAt)}
                    </td>
                    <td className="px-5 py-3">
                      <div className="flex justify-end gap-1">
                        <button
                          onClick={() => { setSelectedUser(user); setShowRoleModal(true); }}
                          className="rounded-lg p-2 text-gray-400 hover:bg-blue-50 hover:text-blue-600 transition"
                          title="Эрх нэмэх"
                        >
                          <UserPlus className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => { setSelectedUser(user); setShowStatusModal(true); }}
                          className="rounded-lg p-2 text-gray-400 hover:bg-orange-50 hover:text-orange-600 transition"
                          title="Төлөв өөрчлөх"
                        >
                          <Shield className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {meta.totalPages > 1 && (
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Нийт {meta.total} хэрэглэгч
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPage(Math.max(1, page - 1))}
              disabled={page === 1}
              className="rounded-lg border border-gray-200 p-2 text-gray-600 hover:bg-gray-50 disabled:opacity-50"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="text-sm text-gray-600">
              {page} / {meta.totalPages}
            </span>
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

      {/* Role Modal */}
      {showRoleModal && selectedUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6">
            <h3 className="text-lg font-semibold text-gray-900">Эрх нэмэх</h3>
            <p className="mt-1 text-sm text-gray-500">
              {selectedUser.profile?.lastName} {selectedUser.profile?.firstName} хэрэглэгчид эрх нэмэх
            </p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {Object.entries(ROLE_MAP).map(([key, label]) => {
                const userRoles = selectedUser.userRoles?.map((r: any) => r.role?.name || r.roleName) || selectedUser.roles || [];
                const hasRole = userRoles.includes(key);
                return (
                  <button
                    key={key}
                    onClick={() => !hasRole && addRoleMutation.mutate({ userId: selectedUser.id, role: key })}
                    disabled={hasRole || addRoleMutation.isPending}
                    className={cn(
                      'rounded-lg border px-3 py-2 text-sm font-medium transition',
                      hasRole
                        ? 'border-green-200 bg-green-50 text-green-700'
                        : 'border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-blue-50'
                    )}
                  >
                    {hasRole && <CheckCircle className="mr-1 inline h-3.5 w-3.5" />}
                    {label}
                  </button>
                );
              })}
            </div>
            <div className="mt-5 flex justify-end">
              <button
                onClick={() => { setShowRoleModal(false); setSelectedUser(null); }}
                className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Хаах
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Status Modal */}
      {showStatusModal && selectedUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-sm rounded-2xl bg-white p-6">
            <h3 className="text-lg font-semibold text-gray-900">Төлөв өөрчлөх</h3>
            <p className="mt-1 text-sm text-gray-500">
              {selectedUser.profile?.lastName} {selectedUser.profile?.firstName}
            </p>
            <div className="mt-4 space-y-2">
              {Object.entries(STATUS_MAP).map(([key, { label, class: cls }]) => (
                <button
                  key={key}
                  onClick={() => statusMutation.mutate({ userId: selectedUser.id, status: key })}
                  disabled={selectedUser.status === key || statusMutation.isPending}
                  className={cn(
                    'flex w-full items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition',
                    selectedUser.status === key
                      ? 'border-blue-300 bg-blue-50 text-blue-700'
                      : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                  )}
                >
                  <span className={cn('inline-flex rounded-full px-2 py-0.5 text-xs', cls)}>{label}</span>
                  {selectedUser.status === key && <span className="ml-auto text-xs text-blue-500">Одоогийн</span>}
                </button>
              ))}
            </div>
            <div className="mt-5 flex justify-end">
              <button
                onClick={() => { setShowStatusModal(false); setSelectedUser(null); }}
                className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Хаах
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
