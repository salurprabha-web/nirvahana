import { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import FeaturedEvents from '@/components/FeaturedEvents'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import CallToAction from '@/components/CallToAction'

export const metadata: Metadata = {
  title: 'Nirvahana Utsav - Crafting Memorable Celebrations',
  description: 'Premier event management company specializing in weddings, corporate events, inaugurations, and cultural programs. Creating unforgettable experiences with traditional Indian elegance.',
  openGraph: {
    title: 'Nirvahana Utsav - Crafting Memorable Celebrations',
    description: 'Premier event management company specializing in weddings, corporate events, inaugurations, and cultural programs.',
    url: 'https://nirvahana-utsav.com',
    images: [
      {
        url: '/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Nirvahana Utsav Homepage',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nirvahana Utsav - Crafting Memorable Celebrations',
    description: 'Premier event management company specializing in weddings, corporate events, inaugurations, and cultural programs.',
    images: ['/og-home.jpg'],
  },
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FeaturedEvents />
      <TestimonialCarousel />
      <CallToAction />
    </>
  )
}