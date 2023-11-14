import type { Metadata } from 'next';

import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Flix Finder',
  description: 'Movie search app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <body className="mt-3 h-full">
      <Navbar />
        {children}
        </body>
      <Footer />
    </html>
  );
}
