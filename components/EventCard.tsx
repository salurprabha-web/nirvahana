import Link from 'next/link'
import Image from 'next/image'
import { Calendar, MapPin } from 'lucide-react'

interface Event {
  id: string
  title: string
  description: string
  image: string
  date: string
  location: string
  slug: string
  category: string
}

interface EventCardProps {
  event: Event
}

const EventCard = ({ event }: EventCardProps) => {
  return (
    <Link href={`/events/${event.slug}`}>
      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-royal-blue text-white px-3 py-1 rounded-full text-sm font-medium">
              {event.category}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-serif font-bold text-royal-blue mb-3 group-hover:text-gold transition-colors duration-300">
            {event.title}
          </h3>
          
          <p className="text-gray-600 mb-4 line-clamp-3">
            {event.description}
          </p>
          
          <div className="flex items-center text-sm text-gray-500 space-y-2">
            <div className="flex items-center mr-4">
              <Calendar className="w-4 h-4 mr-2" />
              {event.date}
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              {event.location}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default EventCard