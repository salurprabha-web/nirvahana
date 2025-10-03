'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Royal Wedding Ceremony',
    category: 'Wedding',
    title: 'Royal Wedding Ceremony'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Traditional Wedding Mandap',
    category: 'Wedding',
    title: 'Traditional Wedding Mandap'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Corporate Conference',
    category: 'Corporate',
    title: 'Corporate Conference'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Corporate Gala Night',
    category: 'Corporate',
    title: 'Corporate Gala Night'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Diwali Festival Celebration',
    category: 'Cultural',
    title: 'Diwali Festival Celebration'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Temple Inauguration',
    category: 'Inauguration',
    title: 'Temple Inauguration'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Event Photography',
    category: 'Photography',
    title: 'Event Photography'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Live Music Performance',
    category: 'Entertainment',
    title: 'Live Music Performance'
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Elegant Decoration',
    category: 'Decoration',
    title: 'Elegant Decoration'
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Catering Service',
    category: 'Catering',
    title: 'Catering Service'
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Wedding Couple Portrait',
    category: 'Wedding',
    title: 'Wedding Couple Portrait'
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1519167758481-83f29c1fe8ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Grand Event Setup',
    category: 'Decoration',
    title: 'Grand Event Setup'
  }
]

const categories = ['All', 'Wedding', 'Corporate', 'Cultural', 'Inauguration', 'Photography', 'Entertainment', 'Decoration', 'Catering']

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [lightboxImage, setLightboxImage] = useState<number | null>(null)

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  const openLightbox = (imageId: number) => {
    setLightboxImage(imageId)
  }

  const closeLightbox = () => {
    setLightboxImage(null)
  }

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (lightboxImage === null) return
    
    const currentIndex = filteredImages.findIndex(img => img.id === lightboxImage)
    let newIndex
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0
    }
    
    setLightboxImage(filteredImages[newIndex].id)
  }

  const currentLightboxImage = filteredImages.find(img => img.id === lightboxImage)

  return (
    <>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-96 flex items-center justify-center">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1519167758481-83f29c1fe8ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="Event Gallery"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div>
          <div className="relative z-10 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
              Our Gallery
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Capturing the magic and memories of every celebration we create
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-royal-blue mb-6">
                Moments That Matter
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Every event tells a story, and every photograph captures a moment. 
                Browse through our collection of beautiful celebrations and memorable experiences.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full border-2 transition-colors duration-300 ${
                    selectedCategory === category
                      ? 'bg-royal-blue text-white border-royal-blue'
                      : 'border-royal-blue text-royal-blue hover:bg-royal-blue hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Masonry Grid */}
            <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="break-inside-avoid relative group cursor-pointer"
                  onClick={() => openLightbox(image.id)}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={400}
                      height={300}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                      <h3 className="text-white font-semibold">{image.title}</h3>
                      <p className="text-gray-300 text-sm">{image.category}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="btn-primary">
                Load More Images
              </button>
            </div>
          </div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxImage && currentLightboxImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                  className="relative"
                >
                  <Image
                    src={currentLightboxImage.src}
                    alt={currentLightboxImage.alt}
                    width={1200}
                    height={800}
                    className="max-w-full max-h-[80vh] object-contain rounded-lg"
                  />
                  
                  {/* Image Info */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 rounded-b-lg">
                    <h3 className="text-white text-xl font-bold mb-2">{currentLightboxImage.title}</h3>
                    <p className="text-gray-300">{currentLightboxImage.category}</p>
                  </div>
                </motion.div>

                {/* Navigation Buttons */}
                <button
                  onClick={() => navigateLightbox('prev')}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-opacity-30 transition-all duration-300"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <button
                  onClick={() => navigateLightbox('next')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-opacity-30 transition-all duration-300"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 bg-white bg-opacity-20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-opacity-30 transition-all duration-300"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}