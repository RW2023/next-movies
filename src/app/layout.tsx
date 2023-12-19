import type { Metadata } from 'next';

import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Head from 'next/head';

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
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
      <Footer />
    </html>
  );
}
