import Link from 'next/link';
import { formatPrice, formatArea } from '@/lib/utils';
import { Heart, MapPin, Maximize, BedDouble, Bath } from 'lucide-react';

interface PropertyCardProps {
  property: {
    id: string;
    title: string;
    slug: string;
    price: number;
    area: number;
    rooms?: number;
    bathrooms?: number;
    city: string;
    district: string;
    propertyType: string;
    transactionType: string;
    media?: { url: string }[];
    viewCount?: number;
  };
}

const PROPERTY_TYPE_LABELS: Record<string, string> = {
  APARTMENT: 'Орон сууц',
  HOUSE: 'Байшин',
  OFFICE: 'Оффис',
  LAND: 'Газар',
  COMMERCIAL: 'Худалдааны',
  WAREHOUSE: 'Агуулах',
  GARAGE: 'Гараж',
};

const TRANSACTION_BADGES: Record<string, { label: string; color: string }> = {
  SALE: { label: 'Зарна', color: 'bg-blue-100 text-blue-700' },
  RENT: { label: 'Түрээс', color: 'bg-green-100 text-green-700' },
  LEASE: { label: 'Урт хугацаа', color: 'bg-purple-100 text-purple-700' },
};

export function PropertyCard({ property }: Readonly<PropertyCardProps>) {
  const badge = TRANSACTION_BADGES[property.transactionType] || TRANSACTION_BADGES.SALE;
  const imageUrl = property.media?.[0]?.url || '/placeholder-property.jpg';

  return (
    <Link
      href={`/properties/${property.slug || property.id}`}
      className="group block overflow-hidden rounded-2xl border border-gray-200 bg-white hover:shadow-lg transition"
    >
      {/* Image */}
      <div className="relative aspect-4/3 overflow-hidden bg-gray-100">
        <img
          src={imageUrl}
          alt={property.title}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute left-3 top-3 flex gap-2">
          <span className={`rounded-full px-3 py-1 text-xs font-medium ${badge.color}`}>
            {badge.label}
          </span>
          <span className="rounded-full bg-gray-900/60 px-3 py-1 text-xs font-medium text-white">
            {PROPERTY_TYPE_LABELS[property.propertyType] || property.propertyType}
          </span>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            // toggle favorite - placeholder
          }}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-gray-600 hover:bg-white hover:text-red-500 transition"
        >
          <Heart className="h-4 w-4" />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-xl font-bold text-blue-600">{formatPrice(property.price)}</p>
        <h3 className="mt-1 truncate text-sm font-medium text-gray-900 group-hover:text-blue-600 transition">
          {property.title}
        </h3>
        <p className="mt-1 flex items-center gap-1 text-xs text-gray-500">
          <MapPin className="h-3 w-3" />
          {property.district}, {property.city}
        </p>

        {/* Features */}
        <div className="mt-3 flex items-center gap-4 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <Maximize className="h-3.5 w-3.5" />
            {formatArea(property.area)}
          </span>
          {property.rooms && (
            <span className="flex items-center gap-1">
              <BedDouble className="h-3.5 w-3.5" />
              {property.rooms} өрөө
            </span>
          )}
          {property.bathrooms && (
            <span className="flex items-center gap-1">
              <Bath className="h-3.5 w-3.5" />
              {property.bathrooms}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
