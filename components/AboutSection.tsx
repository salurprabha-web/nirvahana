'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const AboutSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-royal-blue mb-6">
              About Nirvahana Utsav
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              With over a decade of experience in crafting extraordinary celebrations, 
              Nirvahana Utsav stands as a beacon of excellence in event management. 
              We blend traditional Indian aesthetics with contemporary elegance to 
              create experiences that resonate with your vision.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our philosophy centers on understanding the unique story behind every 
              celebration and translating it into a memorable experience that reflects 
              your personality and values.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-2">500+</div>
                <div className="text-gray-600">Events Managed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-2">10+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Image
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Traditional Indian wedding ceremony"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gold rounded-full flex items-center justify-center">
              <span className="text-royal-blue font-bold text-lg">✨</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection