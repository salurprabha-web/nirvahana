import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { services } from '@/data/services'
import { Heart, Building, Ribbon, Users, Camera, Music, Utensils, Flower } from 'lucide-react'

const iconMap = {
  Heart,
  Building,
  Ribbon,
  Users,
  Camera,
  Music,
  Utensils,
  Flower
}

export const metadata: Metadata = {
  title: 'Our Services - Nirvahana Utsav | Complete Event Management Solutions',
  description: 'Explore our comprehensive event management services including wedding planning, corporate events, cultural programs, inaugurations, and more. Professional service with traditional touch.',
  openGraph: {
    title: 'Our Services - Nirvahana Utsav',
    description: 'Comprehensive event management services with professional excellence and traditional touch.',
    url: 'https://nirvahana-utsav.com/services',
  },
}

export default function Services() {
  return (
    <>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-96 flex items-center justify-center">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="Our Services"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div>
          <div className="relative z-10 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
              Our Services
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Comprehensive event management solutions tailored to your unique vision and requirements
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-royal-blue mb-6">
                Complete Event Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From intimate gatherings to grand celebrations, we offer end-to-end event management 
                services that bring your vision to life with elegance and precision.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
              {services.map((service, index) => {
                const IconComponent = iconMap[service.icon as keyof typeof iconMap]
                return (
                  <div key={service.title} className="group">
                    <Link href={`/services/${service.slug}`}>
                      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
                        <div className="relative h-64 overflow-hidden">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                          <div className="absolute top-6 left-6">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                              <IconComponent className="w-8 h-8 text-royal-blue" />
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-8">
                          <h3 className="text-2xl font-serif font-bold text-royal-blue mb-4 group-hover:text-gold transition-colors duration-300">
                            {service.title}
                          </h3>
                          
                          <p className="text-gray-600 mb-6 leading-relaxed">
                            {service.description}
                          </p>
                          
                          <div className="space-y-2">
                            <h4 className="font-semibold text-royal-blue mb-3">Key Features:</h4>
                            <ul className="space-y-1">
                              {service.features.slice(0, 4).map((feature, idx) => (
                                <li key={idx} className="text-gray-600 flex items-center">
                                  <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="mt-6 pt-6 border-t border-gray-200">
                            <span className="text-royal-blue font-medium group-hover:text-gold transition-colors duration-300">
                              Learn More →
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-royal-blue text-white">
          <div className="container-custom text-center">
            <h2 className="text-4xl font-serif font-bold mb-6">
              Ready to Plan Your <span className="text-gold">Perfect Event?</span>
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Let's discuss your vision and create a customized event plan that exceeds your expectations. 
              Contact us today for a free consultation.
            </p>
            <Link 
              href="/contact" 
              className="bg-gold hover:bg-yellow-600 text-royal-blue px-8 py-4 rounded-lg font-bold text-lg transition-colors duration-300 inline-block"
            >
              Get Free Consultation
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}