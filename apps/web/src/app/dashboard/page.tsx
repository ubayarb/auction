'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { useAuthStore } from '@/store/auth-store';
import { propertyApi, auctionApi, contractApi } from '@/lib/api';
import { formatPrice } from '@/lib/utils';
import Link from 'next/link';
import {
  Building2,
  Gavel,
  FileText,
  Plus,
  Heart,
  Clock,
  Loader2,
} from 'lucide-react';

export default function DashboardPage() {
  const router = useRouter();
  const { user, isAuthenticated } = useAuthStore();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/auth/login');
    }
  }, [isAuthenticated, router]);

  // My properties
  const { data: myProperties, isLoading: loadingProps } = useQuery({
    queryKey: ['my-properties'],
    queryFn: async () => {
      const res = await propertyApi.get('/properties', {
        params: { ownerId: user?.id, limit: 5 },
      });
      return res.data;
    },
    enabled: !!user,
  });

  // My auctions
  const { data: myAuctions, isLoading: loadingAuctions } = useQuery({
    queryKey: ['my-auctions'],
    queryFn: async () => {
      const res = await auctionApi.get('/auctions/my', {
        params: { limit: 5 },
      });
      return res.data;
    },
    enabled: !!user,
  });

  // My contracts
  const { data: myContracts } = useQuery({
    queryKey: ['my-contracts'],
    queryFn: async () => {
      const res = await contractApi.get('/contracts/my', {
        params: { limit: 5 },
      });
      return res.data;
    },
    enabled: !!user,
  });

  if (!isAuthenticated || !user) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    );
  }

  const stats = [
    {
      icon: Building2,
      label: 'Миний зарууд',
      value: myProperties?.meta?.total || 0,
      href: '/dashboard/properties',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Gavel,
      label: 'Дуудлага худалдаа',
      value: myAuctions?.meta?.total || 0,
      href: '/dashboard/auctions',
      color: 'bg-orange-100 text-orange-600',
    },
    {
      icon: FileText,
      label: 'Гэрээнүүд',
      value: myContracts?.meta?.total || 0,
      href: '/dashboard/contracts',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: Heart,
      label: 'Хадгалсан',
      value: 0,
      href: '/dashboard/favorites',
      color: 'bg-red-100 text-red-600',
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Welcome */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Сайн байна уу, {user.profile?.firstName ?? user.email}!
          </h1>
          <p className="mt-1 text-gray-500">Хяналтын самбар</p>
        </div>
        <Link
          href="/properties/create"
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700 transition"
        >
          <Plus className="h-4 w-4" />
          Зар нэмэх
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Link
            key={stat.label}
            href={stat.href}
            className="group rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-lg transition"
          >
            <div className="flex items-center justify-between">
              <div className={`rounded-xl p-3 ${stat.color}`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            </div>
            <p className="mt-3 text-sm font-medium text-gray-500 group-hover:text-blue-600 transition">
              {stat.label}
            </p>
          </Link>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {/* Recent Properties */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <div className="flex items-center justify-between">
            <h2 className="flex items-center gap-2 font-semibold text-gray-900">
              <Building2 className="h-5 w-5 text-blue-500" />
              Сүүлийн зарууд
            </h2>
            <Link
              href="/dashboard/properties"
              className="text-sm text-blue-600 hover:underline"
            >
              Бүгдийг харах
            </Link>
          </div>
          <div className="mt-4 space-y-3">
            <PropertyListContent items={myProperties?.data || []} isLoading={loadingProps} />
          </div>
        </div>

        {/* Recent Auctions */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <div className="flex items-center justify-between">
            <h2 className="flex items-center gap-2 font-semibold text-gray-900">
              <Gavel className="h-5 w-5 text-orange-500" />
              Дуудлага худалдаа
            </h2>
            <Link href="/dashboard/auctions" className="text-sm text-blue-600 hover:underline">
              Бүгдийг харах
            </Link>
          </div>
          <div className="mt-4 space-y-3">
            <AuctionListContent items={myAuctions?.data || []} isLoading={loadingAuctions} />
          </div>
        </div>
      </div>
    </div>
  );
}

function PropertyListContent({ items, isLoading }: Readonly<{ items: any[]; isLoading: boolean }>) {
  if (isLoading) {
    return (
      <div className="flex justify-center py-4">
        <Loader2 className="h-5 w-5 animate-spin text-gray-400" />
      </div>
    );
  }
  if (items.length === 0) {
    return <p className="py-4 text-center text-sm text-gray-400">Зар байхгүй</p>;
  }
  return (
    <>
      {items.slice(0, 5).map((prop: any) => (
        <Link
          key={prop.id}
          href={`/properties/${prop.slug || prop.id}`}
          className="flex items-center justify-between rounded-lg p-3 hover:bg-gray-50"
        >
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-gray-900">{prop.title}</p>
            <p className="text-xs text-gray-400">{prop.district}, {prop.city}</p>
          </div>
          <p className="ml-4 text-sm font-semibold text-blue-600 whitespace-nowrap">
            {formatPrice(prop.price)}
          </p>
        </Link>
      ))}
    </>
  );
}

function AuctionListContent({ items, isLoading }: Readonly<{ items: any[]; isLoading: boolean }>) {
  if (isLoading) {
    return (
      <div className="flex justify-center py-4">
        <Loader2 className="h-5 w-5 animate-spin text-gray-400" />
      </div>
    );
  }
  if (items.length === 0) {
    return <p className="py-4 text-center text-sm text-gray-400">Дуудлага худалдаа байхгүй</p>;
  }
  return (
    <>
      {items.slice(0, 5).map((auction: any) => (
        <Link
          key={auction.id}
          href={`/auctions/${auction.id}`}
          className="flex items-center justify-between rounded-lg p-3 hover:bg-gray-50"
        >
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-gray-900">{auction.title}</p>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <Clock className="h-3 w-3" />
              {auction.status === 'ACTIVE' ? 'Явагдаж байна' : auction.status}
            </div>
          </div>
          <p className="ml-4 text-sm font-semibold text-orange-600 whitespace-nowrap">
            {formatPrice(auction.currentPrice || auction.startingPrice)}
          </p>
        </Link>
      ))}
    </>
  );
}
