import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Check, Star, Phone, Mail } from 'lucide-react'
import { services } from '@/data/services'

interface ServicePageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug)
  
  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }

  return {
    title: `${service.title} - Nirvahana Utsav Services`,
    description: service.description,
    openGraph: {
      title: service.title,
      description: service.description,
      url: `https://nirvahana-utsav.com/services/${service.slug}`,
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: service.title,
        }
      ],
    },
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find((s) => s.slug === params.slug)

  if (!service) {
    notFound()
  }

  return (
    <>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center">
          <div className="absolute inset-0">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div>
          
          <div className="relative z-10 text-center text-white container-custom">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              {service.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get Quote
              </Link>
              <Link href="#details" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </div>

          {/* Back Button */}
          <Link 
            href="/services"
            className="absolute top-8 left-8 bg-white bg-opacity-20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-opacity-30 transition-all duration-300"
          >
            <ArrowLeft className="w-6 h-6" />
          </Link>
        </section>

        {/* Service Details */}
        <section id="details" className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-serif font-bold text-royal-blue mb-6">
                  Service Overview
                </h2>
                <div className="prose prose-lg max-w-none mb-12">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {service.fullDescription}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-12">
                  <h3 className="text-2xl font-serif font-bold text-royal-blue mb-6">
                    What's Included
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-gold mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Process */}
                <div className="mb-12">
                  <h3 className="text-2xl font-serif font-bold text-royal-blue mb-6">
                    Our Process
                  </h3>
                  <div className="space-y-6">
                    {service.process.map((step, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-8 h-8 bg-royal-blue rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                          {index + 1}
                        </div>
                        <div>
                          <p className="text-gray-700 text-lg">{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                {service.testimonial && (
                  <div className="bg-gray-50 p-8 rounded-xl">
                    <div className="flex mb-4">
                      {[...Array(service.testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-gold fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-xl text-gray-700 mb-4 italic">
                      "{service.testimonial.content}"
                    </blockquote>
                    <cite className="text-royal-blue font-semibold">
                      - {service.testimonial.name}
                    </cite>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Pricing */}
                <div className="bg-white border-2 border-royal-blue rounded-xl p-8 mb-8">
                  <h3 className="text-2xl font-serif font-bold text-royal-blue mb-6">
                    Pricing Packages
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="border-b border-gray-200 pb-4">
                      <h4 className="font-bold text-gray-800 mb-2">Basic Package</h4>
                      <p className="text-2xl font-bold text-royal-blue mb-2">{service.pricing.basic}</p>
                      <p className="text-gray-600 text-sm">Essential services for smaller events</p>
                    </div>
                    
                    <div className="border-b border-gray-200 pb-4">
                      <h4 className="font-bold text-gray-800 mb-2">Premium Package</h4>
                      <p className="text-2xl font-bold text-royal-blue mb-2">{service.pricing.premium}</p>
                      <p className="text-gray-600 text-sm">Comprehensive services with premium features</p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Luxury Package</h4>
                      <p className="text-2xl font-bold text-royal-blue mb-2">{service.pricing.luxury}</p>
                      <p className="text-gray-600 text-sm">Full-service luxury experience</p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Link 
                      href="/contact"
                      className="btn-primary w-full text-center block"
                    >
                      Get Custom Quote
                    </Link>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="bg-royal-blue text-white p-8 rounded-xl">
                  <h3 className="text-xl font-serif font-bold mb-6">
                    Ready to Get Started?
                  </h3>
                  <p className="mb-6 opacity-90">
                    Contact us today for a free consultation and personalized quote.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 mr-3" />
                      <span>+91 98765 43210</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 mr-3" />
                      <span>info@nirvahanautsav.com</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Link 
                      href="/contact"
                      className="bg-gold hover:bg-yellow-600 text-royal-blue px-6 py-3 rounded-lg font-bold transition-colors duration-300 inline-block"
                    >
                      Contact Us Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        {service.gallery && service.gallery.length > 0 && (
          <section className="section-padding bg-gray-50">
            <div className="container-custom">
              <h2 className="text-3xl font-serif font-bold text-royal-blue text-center mb-12">
                Our Work Gallery
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.gallery.map((image, index) => (
                  <div key={index} className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
                    <Image
                      src={image}
                      alt={`${service.title} gallery ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Services */}
        <section className="section-padding">
          <div className="container-custom">
            <h2 className="text-3xl font-serif font-bold text-royal-blue text-center mb-12">
              Other Services
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services
                .filter((s) => s.id !== service.id)
                .slice(0, 3)
                .map((relatedService) => (
                  <Link key={relatedService.id} href={`/services/${relatedService.slug}`}>
                    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                      <div className="relative h-48">
                        <Image
                          src={relatedService.image}
                          alt={relatedService.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-serif font-bold text-royal-blue mb-2 group-hover:text-gold transition-colors duration-300">
                          {relatedService.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-2">
                          {relatedService.description}
                        </p>
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