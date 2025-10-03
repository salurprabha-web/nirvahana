import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Calendar, MapPin, Users, ArrowLeft } from 'lucide-react'
import { allEvents } from '@/data/events'
import { generateEventJsonLd } from '@/lib/seo'

interface EventPageProps {
    params: {
        slug: string
    }
}

export async function generateStaticParams() {
    return allEvents.map((event) => ({
        slug: event.slug,
    }))
}

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
    const event = allEvents.find((e) => e.slug === params.slug)

    if (!event) {
        return {
            title: 'Event Not Found',
        }
    }

    return {
        title: `${event.title} - Nirvahana Utsav Events`,
        description: event.description,
        openGraph: {
            title: event.title,
            description: event.description,
            url: `https://nirvahana-utsav.com/events/${event.slug}`,
            images: [
                {
                    url: event.image,
                    width: 1200,
                    height: 630,
                    alt: event.title,
                }
            ],
        },
    }
}

export default function EventPage({ params }: EventPageProps) {
    const event = allEvents.find((e) => e.slug === params.slug)

    if (!event) {
        notFound()
    }

    const jsonLd = generateEventJsonLd(event)

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="min-h-screen">
                {/* Hero Section */}
                <section className="relative h-screen flex items-center justify-center">
                    <div className="absolute inset-0">
                        <Image
                            src={event.image}
                            alt={event.title}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    </div>

                    <div className="relative z-10 text-center text-white container-custom">
                        <div className="mb-6">
                            <span className="bg-royal-blue text-white px-4 py-2 rounded-full text-sm font-medium">
                                {event.category}
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
                            {event.title}
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                            {event.description}
                        </p>

                        <div className="flex flex-wrap justify-center gap-8 text-lg">
                            <div className="flex items-center">
                                <Calendar className="w-6 h-6 mr-3" />
                                {event.date}
                            </div>
                            <div className="flex items-center">
                                <MapPin className="w-6 h-6 mr-3" />
                                {event.location}
                            </div>
                        </div>
                    </div>

                    {/* Back Button */}
                    <Link
                        href="/events"
                        className="absolute top-8 left-8 bg-white bg-opacity-20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-opacity-30 transition-all duration-300"
                    >
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                </section>

                {/* Event Details */}
                <section className="section-padding">
                    <div className="container-custom">
                        <div className="grid lg:grid-cols-3 gap-12">
                            {/* Main Content */}
                            <div className="lg:col-span-2">
                                <h2 className="text-3xl font-serif font-bold text-royal-blue mb-6">
                                    Event Overview
                                </h2>
                                <div className="prose prose-lg max-w-none">
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        {event.fullDescription || event.description}
                                    </p>

                                    {event.highlights && (
                                        <div className="mb-8">
                                            <h3 className="text-2xl font-serif font-bold text-royal-blue mb-4">
                                                Event Highlights
                                            </h3>
                                            <ul className="space-y-3">
                                                {event.highlights.map((highlight, index) => (
                                                    <li key={index} className="flex items-start">
                                                        <span className="w-2 h-2 bg-gold rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                                        <span className="text-gray-700">{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Sidebar */}
                            <div className="lg:col-span-1">
                                <div className="bg-gray-50 p-8 rounded-xl">
                                    <h3 className="text-2xl font-serif font-bold text-royal-blue mb-6">
                                        Event Details
                                    </h3>

                                    <div className="space-y-6">
                                        <div>
                                            <div className="flex items-center mb-2">
                                                <Calendar className="w-5 h-5 text-royal-blue mr-3" />
                                                <span className="font-semibold text-gray-700">Date</span>
                                            </div>
                                            <p className="text-gray-600 ml-8">{event.date}</p>
                                        </div>

                                        <div>
                                            <div className="flex items-center mb-2">
                                                <MapPin className="w-5 h-5 text-royal-blue mr-3" />
                                                <span className="font-semibold text-gray-700">Location</span>
                                            </div>
                                            <p className="text-gray-600 ml-8">{event.location}</p>
                                        </div>

                                        <div>
                                            <div className="flex items-center mb-2">
                                                <Users className="w-5 h-5 text-royal-blue mr-3" />
                                                <span className="font-semibold text-gray-700">Category</span>
                                            </div>
                                            <p className="text-gray-600 ml-8">{event.category}</p>
                                        </div>
                                    </div>

                                    <div className="mt-8 pt-8 border-t border-gray-200">
                                        <h4 className="font-bold text-royal-blue mb-4">
                                            Interested in Similar Events?
                                        </h4>
                                        <Link
                                            href="/contact"
                                            className="btn-primary w-full text-center block"
                                        >
                                            Plan Your Event
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Gallery Section */}
                {event.gallery && event.gallery.length > 0 && (
                    <section className="section-padding bg-gray-50">
                        <div className="container-custom">
                            <h2 className="text-3xl font-serif font-bold text-royal-blue text-center mb-12">
                                Event Gallery
                            </h2>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {event.gallery.map((image, index) => (
                                    <div key={index} className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
                                        <Image
                                            src={image}
                                            alt={`${event.title} gallery ${index + 1}`}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Related Events */}
                <section className="section-padding">
                    <div className="container-custom">
                        <h2 className="text-3xl font-serif font-bold text-royal-blue text-center mb-12">
                            Related Events
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {allEvents
                                .filter((e) => e.category === event.category && e.id !== event.id)
                                .slice(0, 3)
                                .map((relatedEvent) => (
                                    <Link key={relatedEvent.id} href={`/events/${relatedEvent.slug}`}>
                                        <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                                            <div className="relative h-48">
                                                <Image
                                                    src={relatedEvent.image}
                                                    alt={relatedEvent.title}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                            <div className="p-6">
                                                <h3 className="text-xl font-serif font-bold text-royal-blue mb-2 group-hover:text-gold transition-colors duration-300">
                                                    {relatedEvent.title}
                                                </h3>
                                                <p className="text-gray-600 text-sm">{relatedEvent.date}</p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}