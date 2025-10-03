import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Nirvahana Utsav | Get Free Event Planning Consultation',
  description: 'Contact Nirvahana Utsav for professional event management services. Get a free consultation for your wedding, corporate event, or celebration. Call +91 98765 43210.',
  openGraph: {
    title: 'Contact Us - Nirvahana Utsav',
    description: 'Get in touch for professional event management services and free consultation.',
    url: 'https://nirvahana-utsav.com/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}