import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery - Nirvahana Utsav | Event Photography & Memories',
  description: 'Browse our stunning gallery of weddings, corporate events, cultural programs, and celebrations. See the magic we create through professional event photography.',
  openGraph: {
    title: 'Gallery - Nirvahana Utsav',
    description: 'Browse our stunning gallery of memorable events and celebrations.',
    url: 'https://nirvahana-utsav.com/gallery',
  },
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}