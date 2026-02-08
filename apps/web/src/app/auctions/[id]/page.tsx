'use client';

import { useState, useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { io, Socket } from 'socket.io-client';
import { auctionApi } from '@/lib/api';
import { useAuthStore } from '@/store/auth-store';
import { formatPrice, timeAgo } from '@/lib/utils';
import { siteConfig } from '@/lib/config';
import { Loader2, Send, AlertTriangle, Trophy, TrendingUp } from 'lucide-react';
import { toast } from 'sonner';

function getTimeDisplay(isEnded: boolean): string {
  return isEnded ? 'Дууссан' : 'Эхлээгүй';
}

export default function AuctionDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { user, isAuthenticated } = useAuthStore();
  const [bids, setBids] = useState<any[]>([]);
  const [bidAmount, setBidAmount] = useState('');
  const [bidding, setBidding] = useState(false);
  const [timeLeft, setTimeLeft] = useState<string | null>(null);
  const [socket, setSocket] = useState<Socket | null>(null);
  const bidsContainerRef = useRef<HTMLDivElement>(null);

  // Fetch auction data
  const { data: auctionResponse, isLoading } = useQuery({
    queryKey: ['auction', id],
    queryFn: async () => {
      const res = await auctionApi.get(`/auctions/${id}`);
      return res.data;
    },
    enabled: !!id,
  });

  const auctionData = auctionResponse?.data;

  // WebSocket connection
  useEffect(() => {
    if (!id) return;

    const newSocket = io(`${siteConfig.api.auction}/auction`, {
      transports: ['websocket'],
    });

    newSocket.on('connect', () => {
      newSocket.emit('join_auction', { auctionId: id });
    });

    newSocket.on('new_bid', (data: any) => {
      setBids((prev) => [data.bid, ...prev]);
    });

    newSocket.on('auction_ended', (data: any) => {
      toast.info('Дуудлага худалдаа дууслаа!');
      setBids((prev) => [...prev]);
      console.log('Auction ended:', data);
    });

    newSocket.on('auction_extended', (data: any) => {
      toast.warning(`Хугацаа ${data.newEndTime} хүртэл сунгагдлаа!`);
    });

    setSocket(newSocket);

    return () => {
      newSocket.emit('leave_auction', { auctionId: id });
      newSocket.disconnect();
    };
  }, [id]);

  // Fetch initial bids
  useEffect(() => {
    if (!id) return;
    auctionApi
      .get(`/auctions/${id}/bids`, { params: { limit: 50 } })
      .then((res) => setBids(res.data?.data || []))
      .catch(() => {});
  }, [id]);

  // Countdown timer
  useEffect(() => {
    if (!auctionData?.endTime || auctionData.status !== 'ACTIVE') return;

    const interval = setInterval(() => {
      const end = new Date(auctionData.endTime).getTime();
      const now = Date.now();
      const diff = end - now;

      if (diff <= 0) {
        setTimeLeft('Дууссан');
        clearInterval(interval);
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft(
        `${hours.toString().padStart(2, '0')}:${minutes
          .toString()
          .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`,
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [auctionData?.endTime, auctionData?.status]);

  // Auto-scroll bids
  useEffect(() => {
    if (bidsContainerRef.current) {
      bidsContainerRef.current.scrollTop = 0;
    }
  }, [bids]);

  const handlePlaceBid = () => {
    if (!bidAmount || !socket || bidding) return;
    setBidding(true);

    try {
      socket.emit('place_bid', {
        auctionId: id,
        amount: Number(bidAmount),
        userId: user?.id,
      });
      setBidAmount('');
    } catch {
      toast.error('Үнийн санал илгээхэд алдаа гарлаа');
    } finally {
      setTimeout(() => setBidding(false), 1000);
    }
  };

  const currentPrice = auctionData?.currentPrice || auctionData?.startingPrice || 0;
  const minBid = currentPrice + (auctionData?.minimumIncrement || 100000);
  const isActive = auctionData?.status === 'ACTIVE';
  const isEnded = auctionData?.status === 'ENDED';

  if (isLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-4 text-sm text-gray-500">
        <Link href="/auctions" className="hover:text-blue-600">
          Дуудлага худалдаа
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{auctionData?.title}</span>
      </nav>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main - Bid Area */}
        <div className="lg:col-span-2">
          {/* Auction Header */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{auctionData?.title}</h1>
                <p className="mt-1 text-sm text-gray-500">
                  {auctionData?.auctionType === 'ENGLISH' && 'Англи маягийн дуудлага худалдаа'}
                  {auctionData?.auctionType === 'DUTCH' && 'Голланд маягийн дуудлага худалдаа'}
                  {auctionData?.auctionType === 'SEALED' && 'Битүүмжилсэн дуудлага худалдаа'}
                </p>
              </div>
              {isActive && (
                <div className="flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-green-700">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
                  </span>
                  <span className="text-sm font-medium">LIVE</span>
                </div>
              )}
              {isEnded && (
                <div className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-600">
                  Дууссан
                </div>
              )}
            </div>

            {/* Price & Timer */}
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-blue-50 p-4">
                <p className="text-xs text-blue-500">Одоогийн үнэ</p>
                <p className="mt-1 text-2xl font-bold text-blue-600">
                  {formatPrice(currentPrice)}
                </p>
              </div>
              <div className="rounded-xl bg-orange-50 p-4">
                <p className="text-xs text-orange-500">Хугацаа</p>
                <p className="mt-1 text-2xl font-bold text-orange-600">
                  {isActive ? timeLeft || '--:--:--' : getTimeDisplay(isEnded)}
                </p>
              </div>
              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-xs text-gray-500">Эхлэх үнэ</p>
                <p className="mt-1 text-2xl font-bold text-gray-700">
                  {formatPrice(auctionData?.startingPrice)}
                </p>
              </div>
            </div>

            {/* Bid Input */}
            {isActive && isAuthenticated && (
              <div className="mt-6 border-t border-gray-200 pt-6">
                <label htmlFor="bid-amount" className="block text-sm font-medium text-gray-700">
                  Үнийн санал (доод: {formatPrice(minBid)})
                </label>
                <div className="mt-2 flex gap-3">
                  <input
                    id="bid-amount"
                    type="number"
                    value={bidAmount}
                    onChange={(e) => setBidAmount(e.target.value)}
                    placeholder={minBid.toString()}
                    min={minBid}
                    step={auctionData?.minimumIncrement || 100000}
                    className="flex-1 rounded-lg border border-gray-300 px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={handlePlaceBid}
                    disabled={bidding || !bidAmount || Number(bidAmount) < minBid}
                    className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700 disabled:opacity-50 transition"
                  >
                    {bidding ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : (
                      <Send className="h-5 w-5" />
                    )}
                    Санал илгээх
                  </button>
                </div>

                {/* Quick bid buttons */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {[0, 1, 2, 5].map((multiplier) => {
                    const amount = minBid + multiplier * (auctionData?.minimumIncrement || 100000);
                    return (
                      <button
                        key={multiplier}
                        onClick={() => setBidAmount(amount.toString())}
                        className="rounded-lg border border-gray-200 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50 transition"
                      >
                        {formatPrice(amount)}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {!isAuthenticated && isActive && (
              <div className="mt-6 flex items-center gap-2 rounded-lg bg-yellow-50 p-4 text-sm text-yellow-700">
                <AlertTriangle className="h-5 w-5" />
                <span>
                  Үнийн санал илгээхийн тулд{' '}
                  <Link href="/auth/login" className="font-medium underline">
                    нэвтрэх
                  </Link>{' '}
                  шаардлагатай.
                </span>
              </div>
            )}

            {isEnded && auctionData?.winnerId && (
              <div className="mt-6 flex items-center gap-3 rounded-lg bg-green-50 p-4 text-green-700">
                <Trophy className="h-6 w-6" />
                <div>
                  <p className="font-medium">Дуудлага худалдаа амжилттай дууслаа!</p>
                  <p className="text-sm">
                    Ялагчийн үнийн санал: {formatPrice(currentPrice)}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Bid History */}
          <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
              <TrendingUp className="h-5 w-5" />
              Үнийн саналын түүх
            </h2>
            <div ref={bidsContainerRef} className="mt-4 max-h-96 space-y-2 overflow-y-auto">
              {bids.length === 0 ? (
                <p className="py-8 text-center text-sm text-gray-400">
                  Үнийн санал ирээгүй байна
                </p>
              ) : (
                bids.map((bid: any) => (
                  <div
                    key={bid.id}
                    className="flex items-center justify-between rounded-lg bg-gray-50 p-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-sm font-medium text-gray-600">
                        {bid.bidder?.lastName?.charAt(0) || '?'}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {bid.bidder?.lastName?.charAt(0)}. {bid.bidder?.firstName || `Оролцогч #${bid.bidderId?.slice(-4)}`}
                        </p>
                        <p className="text-xs text-gray-400">{timeAgo(bid.createdAt)}</p>
                      </div>
                    </div>
                    <p className="font-bold text-gray-700">{formatPrice(bid.amount)}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            {/* Stats */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="font-semibold text-gray-900">Мэдээлэл</h3>
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Нийт санал</span>
                  <span className="font-medium">{auctionData?.bidCount || bids.length}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Оролцогч</span>
                  <span className="font-medium">{auctionData?.participantCount || 0}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Доод нэмэгдэл</span>
                  <span className="font-medium">
                    {formatPrice(auctionData?.minimumIncrement || 100000)}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Барьцаа</span>
                  <span className="font-medium">
                    {formatPrice(auctionData?.depositAmount || 0)}
                  </span>
                </div>
              </div>
            </div>

            {/* Anti-sniping notice */}
            {isActive && auctionData?.antiSnipingEnabled && (
              <div className="rounded-2xl border border-orange-200 bg-orange-50 p-4 text-sm text-orange-700">
                <p className="font-medium">Anti-sniping идэвхтэй</p>
                <p className="mt-1 text-xs">
                  Сүүлийн {auctionData.antiSnipingMinutes || 5} минутад санал ирвэл хугацаа{' '}
                  {auctionData.antiSnipingExtension || 5} минутаар сунгагдана.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
