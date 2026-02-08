'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { propertyApi } from '@/lib/api';
import { PropertyCard } from '@/components/property/property-card';
import { SearchFilters } from '@/components/property/search-filters';
import { Loader2 } from 'lucide-react';

function PropertiesResults({ properties, meta }: Readonly<{ properties: any[]; meta: any }>) {
  if (properties.length === 0) {
    return (
      <div className="mt-12 text-center">
        <p className="text-lg text-gray-500">Зар олдсонгүй</p>
        <p className="mt-2 text-sm text-gray-400">Шүүлтүүрээ өөрчилж дахин хайна уу</p>
      </div>
    );
  }

  return (
    <>
      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm text-gray-500">
          Нийт <strong>{meta?.total || properties.length}</strong> зар олдлоо
        </p>
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {properties.map((property: any) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </>
  );
}

export default function PropertiesPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState<Record<string, any>>({});

  useEffect(() => {
    const initialFilters: Record<string, any> = {};
    searchParams.forEach((value, key) => {
      initialFilters[key] = value;
    });
    setFilters(initialFilters);
  }, [searchParams]);

  const { data, isLoading } = useQuery({
    queryKey: ['properties', filters, page],
    queryFn: async () => {
      const params: Record<string, any> = { page, limit: 12, ...filters };
      const [sortField, sortOrder] = (params.sort || 'createdAt:desc').split(':');
      params.sortBy = sortField;
      params.sortOrder = sortOrder;
      delete params.sort;

      const res = await propertyApi.get('/properties', { params });
      return res.data;
    },
  });

  const handleSearch = (newFilters: Record<string, any>) => {
    setFilters(newFilters);
    setPage(1);
    const params = new URLSearchParams();
    Object.entries(newFilters).forEach(([key, value]) => {
      if (value) params.set(key, String(value));
    });
    router.replace(`/properties?${params.toString()}`);
  };

  const properties = data?.data || [];
  const meta = data?.meta;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900">Үл хөдлөх хөрөнгийн зар</h1>
      <p className="mt-2 text-gray-500">Бүх төрлийн үл хөдлөх хөрөнгийн зар мэдээлэл</p>

      {/* Filters */}
      <div className="mt-6">
        <SearchFilters onSearch={handleSearch} initialFilters={filters} />
      </div>

      {/* Results */}
      {isLoading ? (
        <div className="mt-12 flex justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
        </div>
      ) : (
        <PropertiesResults properties={properties} meta={meta} />
      )}

      {/* Pagination */}
      {!isLoading && meta && meta.totalPages > 1 && (
        <div className="mt-8 flex items-center justify-center gap-2">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 disabled:opacity-50"
          >
            Өмнөх
          </button>
          {Array.from({ length: Math.min(5, meta.totalPages) }, (_, i) => {
            const p = i + 1;
            return (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`rounded-lg px-4 py-2 text-sm font-medium ${
                  page === p
                    ? 'bg-blue-600 text-white'
                    : 'border border-gray-300 text-gray-600 hover:bg-gray-50'
                }`}
              >
                {p}
              </button>
            );
          })}
          <button
            onClick={() => setPage((p) => Math.min(meta.totalPages, p + 1))}
            disabled={page === meta.totalPages}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 disabled:opacity-50"
          >
            Дараах
          </button>
        </div>
      )}
    </div>
  );
}
