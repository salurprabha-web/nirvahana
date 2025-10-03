export interface Event {
  id: string
  title: string
  description: string
  image: string
  date: string
  location: string
  slug: string
  category: string
  fullDescription?: string
  gallery?: string[]
  highlights?: string[]
}

export const featuredEvents: Event[] = [
  {
    id: '1',
    title: 'Royal Palace Wedding',
    description: 'A magnificent three-day wedding celebration blending traditional Rajasthani customs with modern elegance.',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: 'December 15, 2023',
    location: 'Udaipur, Rajasthan',
    slug: 'royal-palace-wedding',
    category: 'Wedding',
    fullDescription: 'An extraordinary three-day wedding celebration that perfectly captured the essence of royal Rajasthani traditions while incorporating contemporary elements. The event featured elaborate decorations, traditional music and dance performances, and exquisite cuisine that left guests mesmerized.',
    gallery: [
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    highlights: [
      'Traditional Rajasthani folk performances',
      'Royal palace venue decoration',
      'Multi-cuisine wedding feast',
      '300+ guests accommodation'
    ]
  },
  {
    id: '2',
    title: 'Tech Summit 2023',
    description: 'A cutting-edge corporate conference bringing together industry leaders and innovators.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: 'October 20, 2023',
    location: 'Mumbai, Maharashtra',
    slug: 'tech-summit-2023',
    category: 'Corporate',
    fullDescription: 'A premier technology summit that brought together 500+ industry professionals, featuring keynote speakers, interactive workshops, and networking sessions. The event showcased the latest innovations in technology and provided a platform for meaningful business connections.',
    gallery: [
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    highlights: [
      '15 keynote speakers',
      '500+ attendees',
      'Interactive tech demos',
      'Networking dinner'
    ]
  },
  {
    id: '3',
    title: 'Diwali Cultural Festival',
    description: 'A vibrant celebration of lights featuring traditional performances, food stalls, and community activities.',
    image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: 'November 12, 2023',
    location: 'Delhi, India',
    slug: 'diwali-cultural-festival',
    category: 'Cultural',
    fullDescription: 'A spectacular Diwali celebration that brought the community together with traditional dance performances, authentic food stalls, rangoli competitions, and a grand fireworks display. The event celebrated the rich cultural heritage while promoting community bonding.',
    gallery: [
      'https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    highlights: [
      'Traditional dance performances',
      'Authentic food festival',
      'Rangoli competition',
      'Grand fireworks display'
    ]
  }
]

export const allEvents: Event[] = [
  ...featuredEvents,
  {
    id: '4',
    title: 'Corporate Annual Gala',
    description: 'An elegant evening celebrating company achievements with awards ceremony and entertainment.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: 'September 5, 2023',
    location: 'Bangalore, Karnataka',
    slug: 'corporate-annual-gala',
    category: 'Corporate'
  },
  {
    id: '5',
    title: 'Temple Inauguration Ceremony',
    description: 'Sacred inauguration ceremony with traditional rituals and community participation.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: 'August 15, 2023',
    location: 'Chennai, Tamil Nadu',
    slug: 'temple-inauguration-ceremony',
    category: 'Inauguration'
  }
]