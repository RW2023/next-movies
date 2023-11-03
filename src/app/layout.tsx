import type { Metadata } from 'next'

import './globals.css'
import Navbar from '@/components/Navbar'



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
    <html lang="en" data-theme='black'>
      <body className='mt-16'>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
