'use client';

import './tailwind.css';

import { Inter } from '@next/font/google';
import clsx from 'clsx';
import { AnimatePresence } from 'framer-motion';
import { useSelectedLayoutSegment } from 'next/navigation';

import { Footer } from '@/components/navigation/Footer';
import { Header } from '@/components/navigation/Header';

const inter = Inter();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const segment = useSelectedLayoutSegment();

  return (
    <html lang="en" className={inter.className}>
      <body className="bg-white text-black">
        <Header className={clsx(segment === 'studio' && 'hidden')} />
        <AnimatePresence initial={false} mode="wait">
          {children}
        </AnimatePresence>
        <Footer className={clsx(segment === 'studio' && 'hidden')} />
      </body>
    </html>
  );
}
