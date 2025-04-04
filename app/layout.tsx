import type { Metadata } from 'next';
import { Bowlby_One_SC, DM_Mono } from 'next/font/google';

import { Header } from '@/components/Header';
import './globals.css';
import { SVGFilters } from '@/components/SVGFilters';
import { Footer } from '@/components/Footer';

const bowlby = Bowlby_One_SC({
  variable: '--font-bowlby-sc',
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});
const dmMono = DM_Mono({
  variable: '--font-dm-mono',
  subsets: ['latin'],
  display: 'swap',
  weight: '500',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bowlby.variable} ${dmMono.variable} antialiased font-mono font-medium text-zinc-800`}
      >
        <main>
          <Header />
          {children}
        </main>
        <Footer />
        <SVGFilters />
      </body>
    </html>
  );
}
