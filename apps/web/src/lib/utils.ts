import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number, currency = 'MNT'): string {
  if (currency === 'MNT') {
    return `${price.toLocaleString()}₮`;
  }
  return new Intl.NumberFormat('mn-MN', { style: 'currency', currency }).format(price);
}

export function formatArea(area: number): string {
  return `${area.toLocaleString()} м²`;
}

export function formatDate(date: string | Date): string {
  return new Date(date).toLocaleDateString('mn-MN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function formatDateTime(date: string | Date): string {
  return new Date(date).toLocaleString('mn-MN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function timeAgo(date: string | Date): string {
  const seconds = Math.floor((Date.now() - new Date(date).getTime()) / 1000);

  const intervals = [
    { label: 'жил', seconds: 31536000 },
    { label: 'сар', seconds: 2592000 },
    { label: '7 хоног', seconds: 604800 },
    { label: 'өдөр', seconds: 86400 },
    { label: 'цаг', seconds: 3600 },
    { label: 'мин', seconds: 60 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);
    if (count >= 1) {
      return `${count} ${interval.label}ийн өмнө`;
    }
  }

  return 'Дөнгөж сая';
}
