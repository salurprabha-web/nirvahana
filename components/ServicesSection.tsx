'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Heart, Building, Ribbon, Users, Camera, Music } from 'lucide-react'

const ServicesSection = () => {
  const services = [
    {
      icon: Heart,
      title: 'Wedding Planning',
      description: 'Complete wedding management from intimate ceremonies to grand celebrations',
      slug: 'wedding-planning'
    },
    {
      icon: Building,
      title: 'Corporate Events',
      description: 'Professional corporate gatherings, conferences, and business celebrations',
      slug: 'corporate-events'
    },
    {
      icon: Ribbon,
      title: 'Inaugurations',
      description: 'Grand opening ceremonies and milestone celebration events',
      slug: 'inaugurations'
    },
    {
      icon: Users,
      title: 'Cultural Programs',
      description: 'Traditional festivals, cultural shows, and community celebrations',
      slug: 'cultural-programs'
    },
    {
      icon: Camera,
      title: 'Photography & Videography',
      description: 'Professional documentation of your special moments',
      slug: 'photography-videography'
    },
    {
      icon: Music,
      title: 'Entertainment',
      description: 'Live music, DJ services, and cultural performances',
      slug: 'entertainment'
    }
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-royal-blue mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From intimate gatherings to grand celebrations, we offer comprehensive 
            event management services tailored to your unique vision.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={`/services/${service.slug}`}>
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
                  <div className="w-16 h-16 bg-royal-blue rounded-full flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-royal-blue mb-4 group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/services" className="btn-primary">
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection