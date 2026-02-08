'use client';

import { useQuery } from '@tanstack/react-query';
import { authApi, auctionApi } from '@/lib/api';
import {
  Users,
  ShieldCheck,
  Gavel,
  AlertTriangle,
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle,
  Loader2,
} from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboardPage() {
  // Fetch users
  const { data: usersData, isLoading: loadingUsers } = useQuery({
    queryKey: ['admin-users-stats'],
    queryFn: async () => {
      const res = await authApi.get('/users', { params: { limit: 1 } });
      return res.data;
    },
  });

  // Fetch pending KYC
  const { data: kycData, isLoading: loadingKyc } = useQuery({
    queryKey: ['admin-kyc-pending'],
    queryFn: async () => {
      const res = await authApi.get('/users', {
        params: { kycStatus: 'pending', limit: 5 },
      });
      return res.data;
    },
  });

  // Fetch pending auctions
  const { data: pendingAuctions, isLoading: loadingAuctions } = useQuery({
    queryKey: ['admin-pending-auctions'],
    queryFn: async () => {
      const res = await auctionApi.get('/auctions', {
        params: { status: 'PENDING_APPROVAL', limit: 5 },
      });
      return res.data;
    },
  });

  // Fetch active auctions
  const { data: activeAuctions } = useQuery({
    queryKey: ['admin-active-auctions'],
    queryFn: async () => {
      const res = await auctionApi.get('/auctions', {
        params: { status: 'ACTIVE', limit: 1 },
      });
      return res.data;
    },
  });

  const isLoading = loadingUsers || loadingKyc || loadingAuctions;

  const stats = [
    {
      label: 'Нийт хэрэглэгч',
      value: usersData?.meta?.total ?? '—',
      icon: Users,
      color: 'bg-blue-100 text-blue-600',
      href: '/admin/users',
    },
    {
      label: 'KYC хүлээгдэж буй',
      value: kycData?.meta?.total ?? '—',
      icon: ShieldCheck,
      color: 'bg-orange-100 text-orange-600',
      href: '/admin/kyc',
    },
    {
      label: 'Зөвшөөрөл хүлээгдэж буй',
      value: pendingAuctions?.meta?.total ?? '—',
      icon: Clock,
      color: 'bg-yellow-100 text-yellow-600',
      href: '/admin/auctions',
    },
    {
      label: 'Идэвхтэй дуудлага',
      value: activeAuctions?.meta?.total ?? '—',
      icon: Gavel,
      color: 'bg-green-100 text-green-600',
      href: '/admin/auctions',
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Хяналтын самбар</h1>
        <p className="mt-1 text-sm text-gray-500">Системийн ерөнхий мэдээлэл</p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Link
            key={stat.label}
            href={stat.href}
            className="rounded-xl border border-gray-200 bg-white p-5 transition hover:shadow-md"
          >
            <div className="flex items-center gap-4">
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.color}`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : stat.value}
                </p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Recent pending items */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Pending KYC */}
        <div className="rounded-xl border border-gray-200 bg-white">
          <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
            <h3 className="font-semibold text-gray-900">KYC хүсэлтүүд</h3>
            <Link href="/admin/kyc" className="text-sm text-blue-600 hover:underline">
              Бүгдийг харах →
            </Link>
          </div>
          <div className="divide-y divide-gray-50">
            {loadingKyc ? (
              <div className="flex items-center justify-center py-8">
                <Loader2 className="h-6 w-6 animate-spin text-gray-400" />
              </div>
            ) : kycData?.data?.length > 0 ? (
              kycData.data.map((user: any) => (
                <div key={user.id} className="flex items-center justify-between px-5 py-3">
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {user.profile?.lastName} {user.profile?.firstName}
                    </p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-700">
                    <Clock className="h-3 w-3" />
                    Хүлээгдэж буй
                  </span>
                </div>
              ))
            ) : (
              <div className="py-8 text-center text-sm text-gray-400">
                KYC хүсэлт байхгүй
              </div>
            )}
          </div>
        </div>

        {/* Pending Auctions */}
        <div className="rounded-xl border border-gray-200 bg-white">
          <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
            <h3 className="font-semibold text-gray-900">Зөвшөөрөл хүлээж буй дуудлага</h3>
            <Link href="/admin/auctions" className="text-sm text-blue-600 hover:underline">
              Бүгдийг харах →
            </Link>
          </div>
          <div className="divide-y divide-gray-50">
            {loadingAuctions ? (
              <div className="flex items-center justify-center py-8">
                <Loader2 className="h-6 w-6 animate-spin text-gray-400" />
              </div>
            ) : pendingAuctions?.data?.length > 0 ? (
              pendingAuctions.data.map((auction: any) => (
                <div key={auction.id} className="flex items-center justify-between px-5 py-3">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{auction.title}</p>
                    <p className="text-xs text-gray-500">
                      {new Intl.NumberFormat().format(Number(auction.startingPrice))}₮
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-700">
                    <AlertTriangle className="h-3 w-3" />
                    Хүлээгдэж буй
                  </span>
                </div>
              ))
            ) : (
              <div className="py-8 text-center text-sm text-gray-400">
                Хүлээгдэж буй дуудлага байхгүй
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
