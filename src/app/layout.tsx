import type { Metadata } from 'next'

import './globals.css'



export const metadata: Metadata = {
  title: 'Flix Finder',
  description: 'Movie search app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-them='black'>
      <body>{children}</body>
    </html>
  )
}
