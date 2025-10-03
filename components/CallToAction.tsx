'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const CallToAction = () => {
  return (
    <section className="section-padding bg-royal-blue">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Create Your
            <span className="block text-gold">Perfect Event?</span>
          </h2>
          
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Let's bring your vision to life. Contact us today to start planning 
            an unforgettable celebration that reflects your unique style and story.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-gold hover:bg-yellow-600 text-royal-blue px-8 py-4 rounded-lg font-bold text-lg transition-colors duration-300"
            >
              Plan Your Event With Us
            </Link>
            <Link 
              href="/gallery" 
              className="border-2 border-white text-white hover:bg-white hover:text-royal-blue px-8 py-4 rounded-lg font-bold text-lg transition-colors duration-300"
            >
              View Our Gallery
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CallToAction