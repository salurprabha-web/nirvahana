export const seoConfig = {
  title: 'Nirvahana Utsav - Premier Event Management Company',
  description: 'Crafting memorable celebrations with elegant event management services. Specializing in weddings, corporate events, inaugurations, and cultural programs.',
  url: 'https://nirvahana-utsav.com',
  siteName: 'Nirvahana Utsav',
  locale: 'en_US',
  type: 'website',
  
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nirvahana-utsav.com',
    siteName: 'Nirvahana Utsav',
    title: 'Nirvahana Utsav - Premier Event Management Company',
    description: 'Crafting memorable celebrations with elegant event management services.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nirvahana Utsav Event Management',
      },
    ],
  },
  
  twitter: {
    handle: '@nirvahanautsav',
    site: '@nirvahanautsav',
    cardType: 'summary_large_image',
  },
  
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'event management, wedding planning, corporate events, cultural programs, inaugurations, celebrations, Mumbai, India',
    },
    {
      name: 'author',
      content: 'Nirvahana Utsav',
    },
    {
      name: 'robots',
      content: 'index,follow',
    },
    {
      name: 'googlebot',
      content: 'index,follow',
    },
  ],
}

export const generateEventJsonLd = (event: any) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.title,
    description: event.description,
    image: event.image,
    startDate: event.date,
    location: {
      '@type': 'Place',
      name: event.location,
    },
    organizer: {
      '@type': 'Organization',
      name: 'Nirvahana Utsav',
      url: 'https://nirvahana-utsav.com',
    },
  }
}

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Nirvahana Utsav',
  url: 'https://nirvahana-utsav.com',
  logo: 'https://nirvahana-utsav.com/logo.png',
  description: 'Premier event management company specializing in weddings, corporate events, and cultural celebrations.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Event Plaza, MG Road',
    addressLocality: 'Mumbai',
    addressRegion: 'Maharashtra',
    postalCode: '400001',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-98765-43210',
    contactType: 'customer service',
    email: 'info@nirvahanautsav.com',
  },
  sameAs: [
    'https://www.facebook.com/nirvahanautsav',
    'https://www.instagram.com/nirvahanautsav',
    'https://www.twitter.com/nirvahanautsav',
  ],
}