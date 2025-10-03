import { Metadata } from 'next'
import Image from 'next/image'
import EventCard from '@/components/EventCard'
import { allEvents } from '@/data/events'

export const metadata: Metadata = {
  title: 'Our Events - Nirvahana Utsav | Memorable Celebrations Gallery',
  description: 'Explore our portfolio of successful events including weddings, corporate gatherings, cultural programs, and inaugurations. See how we create unforgettable celebrations.',
  openGraph: {
    title: 'Our Events - Nirvahana Utsav',
    description: 'Explore our portfolio of successful events and memorable celebrations.',
    url: 'https://nirvahana-utsav.com/events',
  },
}

export default function Events() {
  const categories = ['All', 'Wedding', 'Corporate', 'Cultural', 'Inauguration']

  return (
    <>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-96 flex items-center justify-center">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Our Events - Nirvahana Utsav Event Gallery"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div>
          <div className="relative z-10 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
              Our Events
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Discover our portfolio of memorable celebrations and successful events
            </p>
          </div>
        </section>

        {/* Events Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-royal-blue mb-6">
                Memorable Celebrations
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Each event tells a unique story. Browse through our collection of
                successful celebrations that showcase our expertise and creativity.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-2 rounded-full border-2 border-royal-blue text-royal-blue hover:bg-royal-blue hover:text-white transition-colors duration-300"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Events Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="btn-primary">
                Load More Events
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}