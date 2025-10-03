export interface Service {
  id: string
  title: string
  description: string
  image: string
  slug: string
  icon: string
  features: string[]
  fullDescription: string
  process: string[]
  pricing: {
    basic: string
    premium: string
    luxury: string
  }
  gallery: string[]
  testimonial?: {
    name: string
    content: string
    rating: number
  }
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Wedding Planning',
    description: 'Complete wedding management from intimate ceremonies to grand celebrations with traditional and modern elements.',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: 'wedding-planning',
    icon: 'Heart',
    features: [
      'Venue Selection & Booking',
      'Traditional & Modern Decoration',
      'Catering & Menu Planning',
      'Photography & Videography',
      'Entertainment & Music',
      'Guest Management',
      'Transportation Coordination',
      'Honeymoon Planning'
    ],
    fullDescription: 'Our wedding planning service encompasses every aspect of your special day, from the initial consultation to the final farewell. We understand that each couple has a unique love story, and we work tirelessly to ensure your wedding reflects your personality, traditions, and dreams. Our experienced team handles all the intricate details, allowing you to focus on celebrating your love.',
    process: [
      'Initial consultation and vision discussion',
      'Budget planning and vendor selection',
      'Venue booking and decoration planning',
      'Timeline creation and coordination',
      'Final execution and day-of management'
    ],
    pricing: {
      basic: '₹2,50,000 - ₹5,00,000',
      premium: '₹5,00,000 - ₹10,00,000',
      luxury: '₹10,00,000+'
    },
    gallery: [
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    testimonial: {
      name: 'Priya & Arjun Sharma',
      content: 'Nirvahana Utsav made our dream wedding come true. Every detail was perfect!',
      rating: 5
    }
  },
  {
    id: '2',
    title: 'Corporate Events',
    description: 'Professional corporate gatherings, conferences, product launches, and business celebrations.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: 'corporate-events',
    icon: 'Building',
    features: [
      'Conference Management',
      'Team Building Events',
      'Product Launch Events',
      'Annual Corporate Galas',
      'Board Meetings & Seminars',
      'Award Ceremonies',
      'Corporate Retreats',
      'Networking Events'
    ],
    fullDescription: 'Our corporate event management services are designed to enhance your business objectives while creating memorable experiences for your stakeholders. We understand the importance of professionalism, punctuality, and seamless execution in the corporate world. From intimate board meetings to large-scale conferences, we ensure every event reflects your company\'s values and achieves its goals.',
    process: [
      'Objective analysis and event strategy',
      'Venue selection and technical setup',
      'Speaker coordination and content management',
      'Registration and attendee management',
      'Event execution and follow-up'
    ],
    pricing: {
      basic: '₹1,00,000 - ₹3,00,000',
      premium: '₹3,00,000 - ₹8,00,000',
      luxury: '₹8,00,000+'
    },
    gallery: [
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    testimonial: {
      name: 'Rajesh Kumar, CEO',
      content: 'Professional execution and attention to detail. Highly recommend for corporate events.',
      rating: 5
    }
  },
  {
    id: '3',
    title: 'Cultural Programs',
    description: 'Traditional festivals, cultural shows, community celebrations, and heritage events.',
    image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: 'cultural-programs',
    icon: 'Users',
    features: [
      'Festival Organization',
      'Cultural Performance Coordination',
      'Community Event Management',
      'Heritage Celebrations',
      'Religious Ceremonies',
      'Art & Craft Exhibitions',
      'Folk Dance & Music Shows',
      'Traditional Food Festivals'
    ],
    fullDescription: 'Our cultural program management celebrates the rich heritage and traditions that define our communities. We specialize in organizing authentic cultural events that honor traditions while engaging modern audiences. From religious festivals to cultural exhibitions, we ensure every event is a meaningful celebration of heritage and community spirit.',
    process: [
      'Cultural research and theme development',
      'Artist and performer coordination',
      'Traditional decoration and setup',
      'Community engagement and participation',
      'Event execution with cultural authenticity'
    ],
    pricing: {
      basic: '₹75,000 - ₹2,00,000',
      premium: '₹2,00,000 - ₹5,00,000',
      luxury: '₹5,00,000+'
    },
    gallery: [
      'https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    testimonial: {
      name: 'Meera Patel',
      content: 'The Diwali celebration was absolutely magical. Outstanding cultural authenticity.',
      rating: 5
    }
  },
  {
    id: '4',
    title: 'Inaugurations',
    description: 'Grand opening ceremonies, milestone celebrations, and ceremonial events with traditional protocols.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: 'inaugurations',
    icon: 'Ribbon',
    features: [
      'Ceremony Planning & Protocol',
      'VIP Guest Management',
      'Media Coordination',
      'Traditional Ritual Arrangements',
      'Security & Logistics',
      'Documentation & Photography',
      'Press Release Management',
      'Post-Event Follow-up'
    ],
    fullDescription: 'Inauguration ceremonies mark significant milestones and new beginnings. Our inauguration event management ensures these momentous occasions are celebrated with the dignity and grandeur they deserve. We handle all ceremonial protocols, VIP arrangements, and traditional rituals while managing the logistics seamlessly.',
    process: [
      'Protocol planning and guest list management',
      'Ceremonial arrangement and traditional setup',
      'VIP coordination and security planning',
      'Media management and documentation',
      'Ceremony execution and follow-up'
    ],
    pricing: {
      basic: '₹1,50,000 - ₹3,50,000',
      premium: '₹3,50,000 - ₹7,00,000',
      luxury: '₹7,00,000+'
    },
    gallery: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: '5',
    title: 'Photography & Videography',
    description: 'Professional documentation of your special moments with creative storytelling and artistic vision.',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: 'photography-videography',
    icon: 'Camera',
    features: [
      'Event Photography',
      'Cinematic Videography',
      'Drone Coverage',
      'Live Streaming Services',
      'Photo Booth Setup',
      'Same-Day Editing',
      'Digital Gallery Creation',
      'Print & Album Services'
    ],
    fullDescription: 'Our photography and videography services capture the essence and emotions of your special moments. Our team of skilled photographers and videographers use state-of-the-art equipment and creative techniques to document your events in stunning detail, creating lasting memories you\'ll treasure forever.',
    process: [
      'Pre-event consultation and shot planning',
      'Equipment setup and team coordination',
      'Event coverage and real-time capture',
      'Post-production editing and enhancement',
      'Delivery of final photos and videos'
    ],
    pricing: {
      basic: '₹50,000 - ₹1,50,000',
      premium: '₹1,50,000 - ₹3,00,000',
      luxury: '₹3,00,000+'
    },
    gallery: [
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: '6',
    title: 'Entertainment',
    description: 'Live music, DJ services, cultural performances, and entertainment coordination for all events.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: 'entertainment',
    icon: 'Music',
    features: [
      'Live Music Bands',
      'Professional DJ Services',
      'Cultural Dance Performances',
      'Celebrity Artist Booking',
      'Sound & Lighting Setup',
      'Stage Design & Management',
      'Interactive Entertainment',
      'Kids Entertainment Zones'
    ],
    fullDescription: 'Entertainment is the heart of any celebration. Our entertainment services bring life and energy to your events with carefully curated performances that match your event\'s theme and audience. From traditional cultural performances to contemporary music, we ensure your guests are thoroughly entertained.',
    process: [
      'Entertainment consultation and theme planning',
      'Artist selection and booking',
      'Technical setup and sound check',
      'Performance coordination and management',
      'Event entertainment execution'
    ],
    pricing: {
      basic: '₹75,000 - ₹2,00,000',
      premium: '₹2,00,000 - ₹5,00,000',
      luxury: '₹5,00,000+'
    },
    gallery: [
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ]
  }
]