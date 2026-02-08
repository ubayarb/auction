import Link from 'next/link';
import { formatPrice, timeAgo } from '@/lib/utils';
import { Gavel, Clock, Users } from 'lucide-react';

interface AuctionCardProps {
  auction: {
    id: string;
    title: string;
    startingPrice: number;
    currentPrice: number;
    auctionType: string;
    status: string;
    startTime: string;
    endTime: string;
    bidCount: number;
    participantCount: number;
    property?: { media?: { url: string }[] };
  };
}

const STATUS_MAP: Record<string, { label: string; color: string }> = {
  SCHEDULED: { label: 'Товлосон', color: 'bg-yellow-100 text-yellow-700' },
  ACTIVE: { label: 'Явагдаж байна', color: 'bg-green-100 text-green-700' },
  ENDED: { label: 'Дууссан', color: 'bg-gray-100 text-gray-600' },
  CANCELLED: { label: 'Цуцлагдсан', color: 'bg-red-100 text-red-600' },
};

const TYPE_MAP: Record<string, string> = {
  ENGLISH: 'Англи маягийн',
  DUTCH: 'Голланд маягийн',
  SEALED: 'Битүүмжилсэн',
  VICKREY: 'Викри',
};

function getScheduleLabel(auction: AuctionCardProps['auction']): string {
  if (auction.status === 'SCHEDULED') {
    return `Эхлэх: ${timeAgo(auction.startTime)}`;
  }
  return `Дууссан: ${timeAgo(auction.endTime)}`;
}

export function AuctionCard({ auction }: Readonly<AuctionCardProps>) {
  const status = STATUS_MAP[auction.status] || STATUS_MAP.SCHEDULED;
  const imageUrl = auction.property?.media?.[0]?.url || '/placeholder-property.jpg';
  const isActive = auction.status === 'ACTIVE';

  return (
    <Link
      href={`/auctions/${auction.id}`}
      className="group block overflow-hidden rounded-2xl border border-gray-200 bg-white hover:shadow-lg transition"
    >
      {/* Image */}
      <div className="relative aspect-4/3 overflow-hidden bg-gray-100">
        <img
          src={imageUrl}
          alt={auction.title}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute left-3 top-3 flex gap-2">
          <span className={`rounded-full px-3 py-1 text-xs font-medium ${status.color}`}>
            {status.label}
          </span>
        </div>
        {isActive && (
          <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-red-500 px-3 py-1 text-xs font-medium text-white animate-pulse">
            <span className="h-2 w-2 rounded-full bg-white" />
            {' '}LIVE
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="truncate text-sm font-medium text-gray-900 group-hover:text-blue-600 transition">
          {auction.title}
        </h3>
        <p className="mt-1 text-xs text-gray-400">{TYPE_MAP[auction.auctionType]}</p>

        <div className="mt-3 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">Одоогийн үнэ</span>
            <span className="text-lg font-bold text-blue-600">
              {formatPrice(auction.currentPrice || auction.startingPrice)}
            </span>
          </div>
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>Эхлэх үнэ</span>
            <span>{formatPrice(auction.startingPrice)}</span>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-4 border-t border-gray-100 pt-3 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <Gavel className="h-3.5 w-3.5" />
            {auction.bidCount} үнийн санал
          </span>
          <span className="flex items-center gap-1">
            <Users className="h-3.5 w-3.5" />
            {auction.participantCount} оролцогч
          </span>
        </div>

        <div className="mt-2 flex items-center gap-1 text-xs text-gray-400">
          <Clock className="h-3.5 w-3.5" />
          {isActive
            ? `Дуусах: ${timeAgo(auction.endTime)}`
            : getScheduleLabel(auction)}
        </div>
      </div>
    </Link>
  );
}
