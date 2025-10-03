import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  metadataBase: new URL('https://nirvahana-utsav.com'),
  title: 'Nirvahana Utsav - Premier Event Management Company',
  description: 'Crafting memorable celebrations with elegant event management services. Specializing in weddings, corporate events, inaugurations, and cultural programs.',
  keywords: 'event management, wedding planning, corporate events, cultural programs, inaugurations, celebrations',
  authors: [{ name: 'Nirvahana Utsav' }],
  openGraph: {
    title: 'Nirvahana Utsav - Premier Event Management Company',
    description: 'Crafting memorable celebrations with elegant event management services.',
    url: 'https://nirvahana-utsav.com',
    siteName: 'Nirvahana Utsav',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nirvahana Utsav Event Management',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nirvahana Utsav - Premier Event Management Company',
    description: 'Crafting memorable celebrations with elegant event management services.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}