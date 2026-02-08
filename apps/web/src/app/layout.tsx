import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  title: {
    default: 'ELAND - Үл хөдлөх хөрөнгийн платформ',
    template: '%s | ELAND',
  },
  description: 'Үл хөдлөх хөрөнгийн нэгдсэн портал - Худалдах, Худалдан авах, Түрээслэх, Дуудлага худалдаа',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="mn">
      <body>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster position="top-right" richColors />
        </Providers>
      </body>
    </html>
  );
}
