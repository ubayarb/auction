// =============================================
// ELAND Mobile — Utility functions
// =============================================

import { APP_CONFIG } from '@/config';

/**
 * Мөнгөн дүнг форматлах
 */
export function formatPrice(price: number | undefined): string {
  if (!price) return '0₮';
  if (price >= 1_000_000_000) {
    return `${(price / 1_000_000_000).toFixed(1)} тэрбум`;
  }
  if (price >= 1_000_000) {
    return `${(price / 1_000_000).toFixed(0)} сая`;
  }
  return `${price.toLocaleString()}${APP_CONFIG.defaultCurrency}`;
}

/**
 * Талбайн хэмжээг форматлах
 */
export function formatArea(area: number | undefined): string {
  if (!area) return '-';
  return `${area} м²`;
}

/**
 * Цаг хугацааг форматлах
 */
export function formatTimeAgo(date: Date | string): string {
  const now = new Date();
  const target = new Date(date);
  const diff = now.getTime() - target.getTime();
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 30) return `${Math.floor(days / 30)} сарын өмнө`;
  if (days > 0) return `${days} өдрийн өмнө`;
  if (hours > 0) return `${hours} цагийн өмнө`;
  if (minutes > 0) return `${minutes} минутын өмнө`;
  return 'Саяхан';
}

/**
 * Дуудлага худалдааны үлдсэн хугацаа
 */
export function formatCountdown(endsAt: Date | string): string {
  const now = new Date();
  const end = new Date(endsAt);
  const diff = end.getTime() - now.getTime();

  if (diff <= 0) return 'Дууссан';

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  if (days > 0) return `${days}ө ${hours}ц ${minutes}м`;
  if (hours > 0) return `${hours}ц ${minutes}м ${seconds}с`;
  return `${minutes}м ${seconds}с`;
}

/**
 * Зарын төрлийг Монголоор
 */
export function getPropertyTypeLabel(type: string): string {
  const map: Record<string, string> = {
    apartment: 'Орон сууц',
    house: 'Хашаа байшин',
    office: 'Оффис',
    land: 'Газар',
    warehouse: 'Агуулах',
    commercial: 'Худалдаа үйлчилгээ',
    garage: 'Гараж',
    other: 'Бусад',
  };
  return map[type] || type;
}

/**
 * Гүйлгээний төрлийг Монголоор
 */
export function getTransactionTypeLabel(type: string): string {
  const map: Record<string, string> = {
    sale: 'Зарна',
    rent: 'Түрээслүүлнэ',
    auction: 'Дуудлага худалдаа',
  };
  return map[type] || type;
}

/**
 * Статусыг Монголоор
 */
export function getStatusLabel(status: string): string {
  const map: Record<string, string> = {
    active: 'Идэвхтэй',
    pending: 'Хүлээгдэж буй',
    draft: 'Ноорог',
    sold: 'Зарагдсан',
    rented: 'Түрээслэгдсэн',
    expired: 'Хугацаа дууссан',
    rejected: 'Цуцлагдсан',
    scheduled: 'Товлогдсон',
    ended: 'Дууссан',
    completed: 'Дууссан',
    cancelled: 'Цуцлагдсан',
  };
  return map[status] || status;
}
