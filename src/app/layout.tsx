import type { Metadata } from 'next';

import './globals.css';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="business">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
        <title>Flix Finder</title>
        <meta name="description" content="Movie Finder App" />
      </head>
      <body className="min-h-screen">
        <Navbar />
        {children}
      </body>
      <Footer />
    </html>
  );
}
