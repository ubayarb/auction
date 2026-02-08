'use client';

import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { propertyApi } from '@/lib/api';
import { formatPrice, formatArea, formatDate } from '@/lib/utils';
import {
  MapPin,
  Maximize,
  BedDouble,
  Bath,
  Building2,
  Calendar,
  Eye,
  Heart,
  Share2,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
  Loader2,
} from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

const PROPERTY_TYPE_LABELS: Record<string, string> = {
  APARTMENT: 'Орон сууц',
  HOUSE: 'Байшин',
  OFFICE: 'Оффис',
  LAND: 'Газар',
  COMMERCIAL: 'Худалдааны',
  WAREHOUSE: 'Агуулах',
  GARAGE: 'Гараж',
};

export default function PropertyDetailPage() {
  const { id } = useParams();
  const [currentImage, setCurrentImage] = useState(0);

  const { data: property, isLoading } = useQuery({
    queryKey: ['property', id],
    queryFn: async () => {
      const res = await propertyApi.get(`/properties/${id}`);
      return res.data.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    );
  }

  if (!property) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-gray-500">Зар олдсонгүй</p>
      </div>
    );
  }

  const images = property.media || [];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-4 text-sm text-gray-500">
        <Link href="/properties" className="hover:text-blue-600">
          Зар
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{property.title}</span>
      </nav>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Image Gallery */}
          <div className="relative overflow-hidden rounded-2xl bg-gray-100">
            {images.length > 0 ? (
              <>
                <div className="aspect-16/10">
                  <img
                    src={images[currentImage]?.url}
                    alt={property.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                {images.length > 1 && (
                  <>
                    <button
                      onClick={() => setCurrentImage((p) => (p === 0 ? images.length - 1 : p - 1))}
                      className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow hover:bg-white"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => setCurrentImage((p) => (p === images.length - 1 ? 0 : p + 1))}
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow hover:bg-white"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-xs text-white">
                      {currentImage + 1} / {images.length}
                    </div>
                  </>
                )}
              </>
            ) : (
              <div className="flex aspect-16/10 items-center justify-center text-gray-400">
                Зураг алга
              </div>
            )}
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="mt-3 flex gap-2 overflow-x-auto">
              {images.map((img: any, i: number) => (
                <button
                  key={`thumb-${img.url}`}
                  onClick={() => setCurrentImage(i)}
                  className={`shrink-0 overflow-hidden rounded-lg ${
                    currentImage === i ? 'ring-2 ring-blue-500' : ''
                  }`}
                >
                  <img src={img.url} alt="" className="h-16 w-20 object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Details */}
          <div className="mt-8">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{property.title}</h1>
                <p className="mt-1 flex items-center gap-1 text-gray-500">
                  <MapPin className="h-4 w-4" />
                  {property.address}, {property.district}, {property.city}
                </p>
              </div>
              <div className="flex gap-2">
                <button className="rounded-lg border border-gray-200 p-2 text-gray-500 hover:text-red-500 transition">
                  <Heart className="h-5 w-5" />
                </button>
                <button className="rounded-lg border border-gray-200 p-2 text-gray-500 hover:text-blue-500 transition">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>

            <p className="mt-2 text-3xl font-bold text-blue-600">
              {formatPrice(property.price)}
              {property.transactionType === 'RENT' && (
                <span className="text-base font-normal text-gray-400"> /сар</span>
              )}
            </p>

            {/* Key features */}
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="rounded-xl border border-gray-200 p-4 text-center">
                <Maximize className="mx-auto h-5 w-5 text-gray-400" />
                <p className="mt-2 text-lg font-semibold">{formatArea(property.area)}</p>
                <p className="text-xs text-gray-500">Талбай</p>
              </div>
              {property.rooms && (
                <div className="rounded-xl border border-gray-200 p-4 text-center">
                  <BedDouble className="mx-auto h-5 w-5 text-gray-400" />
                  <p className="mt-2 text-lg font-semibold">{property.rooms}</p>
                  <p className="text-xs text-gray-500">Өрөө</p>
                </div>
              )}
              {property.bathrooms && (
                <div className="rounded-xl border border-gray-200 p-4 text-center">
                  <Bath className="mx-auto h-5 w-5 text-gray-400" />
                  <p className="mt-2 text-lg font-semibold">{property.bathrooms}</p>
                  <p className="text-xs text-gray-500">Угаалгын өрөө</p>
                </div>
              )}
              {property.floor && (
                <div className="rounded-xl border border-gray-200 p-4 text-center">
                  <Building2 className="mx-auto h-5 w-5 text-gray-400" />
                  <p className="mt-2 text-lg font-semibold">
                    {property.floor}/{property.totalFloors}
                  </p>
                  <p className="text-xs text-gray-500">Давхар</p>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="mt-8">
              <h2 className="text-lg font-semibold text-gray-900">Тайлбар</h2>
              <p className="mt-3 whitespace-pre-line text-gray-600">{property.description}</p>
            </div>

            {/* Meta */}
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {formatDate(property.createdAt)}
              </span>
              <span className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                {property.viewCount} удаа үзсэн
              </span>
              <span className="rounded-full bg-gray-100 px-3 py-0.5">
                {PROPERTY_TYPE_LABELS[property.propertyType]}
              </span>
            </div>
          </div>
        </div>

        {/* Sidebar - Contact */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="font-semibold text-gray-900">Холбоо барих</h3>
            <div className="mt-4 space-y-3">
              <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 font-medium text-white hover:bg-blue-700 transition">
                <Phone className="h-4 w-4" />
                Утсаар холбогдох
              </button>
              <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 py-3 font-medium text-gray-700 hover:bg-gray-50 transition">
                <Mail className="h-4 w-4" />
                Мессеж илгээх
              </button>
            </div>

            {/* Inquiry Form */}
            <div className="mt-6 border-t border-gray-200 pt-6">
              <h4 className="text-sm font-medium text-gray-700">Лавлагаа илгээх</h4>
              <textarea
                rows={3}
                placeholder="Таны мессеж..."
                className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="mt-2 w-full rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition">
                Илгээх
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
