'use client';

import { useState } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';

interface SearchFiltersProps {
  onSearch: (filters: Record<string, any>) => void;
  initialFilters?: Record<string, any>;
}

const PROPERTY_TYPES = [
  { value: '', label: 'Бүгд' },
  { value: 'APARTMENT', label: 'Орон сууц' },
  { value: 'HOUSE', label: 'Байшин' },
  { value: 'OFFICE', label: 'Оффис' },
  { value: 'LAND', label: 'Газар' },
  { value: 'COMMERCIAL', label: 'Худалдааны' },
  { value: 'WAREHOUSE', label: 'Агуулах' },
];

const TRANSACTION_TYPES = [
  { value: '', label: 'Бүгд' },
  { value: 'SALE', label: 'Зарна' },
  { value: 'RENT', label: 'Түрээс' },
];

const ROOM_OPTIONS = [
  { value: '', label: 'Бүгд' },
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5+' },
];

const SORT_OPTIONS = [
  { value: 'createdAt:desc', label: 'Шинэ нь эхэнд' },
  { value: 'price:asc', label: 'Үнэ: бага → их' },
  { value: 'price:desc', label: 'Үнэ: их → бага' },
  { value: 'area:desc', label: 'Талбай: их → бага' },
  { value: 'viewCount:desc', label: 'Их үзсэн' },
];

export function SearchFilters({ onSearch, initialFilters = {} }: Readonly<SearchFiltersProps>) {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    keyword: '',
    propertyType: '',
    transactionType: '',
    rooms: '',
    minPrice: '',
    maxPrice: '',
    minArea: '',
    maxArea: '',
    city: '',
    district: '',
    sort: 'createdAt:desc',
    ...initialFilters,
  });

  const updateFilter = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleSearch = () => {
    const activeFilters: Record<string, any> = {};
    Object.entries(filters).forEach(([key, value]) => {
      if (value) activeFilters[key] = value;
    });
    onSearch(activeFilters);
  };

  const clearFilters = () => {
    const cleared = {
      keyword: '',
      propertyType: '',
      transactionType: '',
      rooms: '',
      minPrice: '',
      maxPrice: '',
      minArea: '',
      maxArea: '',
      city: '',
      district: '',
      sort: 'createdAt:desc',
    };
    setFilters(cleared);
    onSearch({});
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4">
      {/* Main search bar */}
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={filters.keyword}
            onChange={(e) => updateFilter('keyword', e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            placeholder="Нэр, байршлаар хайх..."
            className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`flex items-center gap-2 rounded-lg border px-4 py-3 text-sm font-medium transition ${
            showFilters ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-300 text-gray-600 hover:bg-gray-50'
          }`}
        >
          <SlidersHorizontal className="h-4 w-4" />
          Шүүлтүүр
        </button>
        <button
          onClick={handleSearch}
          className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700 transition"
        >
          Хайх
        </button>
      </div>

      {/* Quick filters */}
      <div className="mt-3 flex flex-wrap gap-2">
        {TRANSACTION_TYPES.slice(1).map((t) => (
          <button
            key={t.value}
            onClick={() => {
              updateFilter('transactionType', filters.transactionType === t.value ? '' : t.value);
            }}
            className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
              filters.transactionType === t.value
                ? 'border-blue-500 bg-blue-50 text-blue-700'
                : 'border-gray-200 text-gray-600 hover:bg-gray-50'
            }`}
          >
            {t.label}
          </button>
        ))}
        {PROPERTY_TYPES.slice(1).map((t) => (
          <button
            key={t.value}
            onClick={() => {
              updateFilter('propertyType', filters.propertyType === t.value ? '' : t.value);
            }}
            className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
              filters.propertyType === t.value
                ? 'border-blue-500 bg-blue-50 text-blue-700'
                : 'border-gray-200 text-gray-600 hover:bg-gray-50'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Extended filters */}
      {showFilters && (
        <div className="mt-4 grid gap-4 border-t border-gray-200 pt-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Price Range */}
          <div>
            <label htmlFor="filter-price" className="block text-xs font-medium text-gray-500 mb-1">Үнийн хүрээ (₮)</label>
            <div className="flex gap-2">
              <input
                id="filter-price"
                type="number"
                value={filters.minPrice}
                onChange={(e) => updateFilter('minPrice', e.target.value)}
                placeholder="Доод"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="number"
                value={filters.maxPrice}
                onChange={(e) => updateFilter('maxPrice', e.target.value)}
                placeholder="Дээд"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Area Range */}
          <div>
            <label htmlFor="filter-area" className="block text-xs font-medium text-gray-500 mb-1">Талбай (м²)</label>
            <div className="flex gap-2">
              <input
                id="filter-area"
                type="number"
                value={filters.minArea}
                onChange={(e) => updateFilter('minArea', e.target.value)}
                placeholder="Доод"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="number"
                value={filters.maxArea}
                onChange={(e) => updateFilter('maxArea', e.target.value)}
                placeholder="Дээд"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Rooms */}
          <div>
            <label htmlFor="filter-rooms" className="block text-xs font-medium text-gray-500 mb-1">Өрөөний тоо</label>
            <select
              id="filter-rooms"
              value={filters.rooms}
              onChange={(e) => updateFilter('rooms', e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {ROOM_OPTIONS.map((r) => (
                <option key={r.value} value={r.value}>
                  {r.label}
                </option>
              ))}
            </select>
          </div>

          {/* Sort */}
          <div>
            <label htmlFor="filter-sort" className="block text-xs font-medium text-gray-500 mb-1">Эрэмбэлэх</label>
            <select
              id="filter-sort"
              value={filters.sort}
              onChange={(e) => updateFilter('sort', e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {SORT_OPTIONS.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>

          <div className="sm:col-span-2 lg:col-span-4 flex justify-end">
            <button
              onClick={clearFilters}
              className="flex items-center gap-1 text-sm text-gray-500 hover:text-red-500 transition"
            >
              <X className="h-4 w-4" />
              Цэвэрлэх
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
