import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Us - Nirvahana Utsav | Premier Event Management Company',
  description: 'Learn about Nirvahana Utsav\'s journey, philosophy, and commitment to creating extraordinary celebrations. Discover why we\'re the trusted choice for memorable events.',
  openGraph: {
    title: 'About Us - Nirvahana Utsav',
    description: 'Learn about our journey and commitment to creating extraordinary celebrations.',
    url: 'https://nirvahana-utsav.com/about',
  },
}

export default function About() {
  return (
    <>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-96 flex items-center justify-center">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="About Nirvahana Utsav"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div>
          <div className="relative z-10 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
              About Us
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Discover the story behind Nirvahana Utsav and our passion for creating unforgettable celebrations
            </p>
          </div>
        </section>

        {/* Company Story */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-serif font-bold text-royal-blue mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Founded in 2013 with a vision to transform ordinary moments into extraordinary memories, 
                  Nirvahana Utsav began as a small family business with big dreams. Our founders, 
                  passionate about Indian culture and traditions, saw the need for event management 
                  services that could seamlessly blend heritage with contemporary elegance.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Over the years, we've grown from organizing intimate family gatherings to managing 
                  grand celebrations for hundreds of guests. Our journey has been marked by countless 
                  smiles, tears of joy, and the satisfaction of turning dreams into reality.
                </p>
              </div>
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Our story"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom text-center">
            <h2 className="text-4xl font-serif font-bold text-royal-blue mb-12">
              Our Philosophy
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-royal-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-gold text-2xl">✨</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-royal-blue mb-4">Excellence</h3>
                <p className="text-gray-600">
                  We strive for perfection in every detail, ensuring that each event exceeds expectations 
                  and creates lasting memories.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-royal-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-gold text-2xl">🤝</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-royal-blue mb-4">Trust</h3>
                <p className="text-gray-600">
                  Building lasting relationships with our clients through transparency, reliability, 
                  and unwavering commitment to their vision.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-royal-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-gold text-2xl">🎨</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-royal-blue mb-4">Creativity</h3>
                <p className="text-gray-600">
                  Bringing innovative ideas and artistic flair to every celebration while honoring 
                  traditional values and customs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding">
          <div className="container-custom">
            <h2 className="text-4xl font-serif font-bold text-royal-blue text-center mb-16">
              Our Journey
            </h2>
            <div className="space-y-12">
              <div className="flex items-center space-x-8">
                <div className="w-24 h-24 bg-royal-blue rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-gold font-bold text-xl">2013</span>
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-royal-blue mb-2">The Beginning</h3>
                  <p className="text-gray-700">Founded Nirvahana Utsav with a vision to create memorable celebrations</p>
                </div>
              </div>
              <div className="flex items-center space-x-8">
                <div className="w-24 h-24 bg-royal-blue rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-gold font-bold text-xl">2016</span>
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-royal-blue mb-2">Expansion</h3>
                  <p className="text-gray-700">Expanded services to include corporate events and cultural programs</p>
                </div>
              </div>
              <div className="flex items-center space-x-8">
                <div className="w-24 h-24 bg-royal-blue rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-gold font-bold text-xl">2020</span>
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-royal-blue mb-2">Innovation</h3>
                  <p className="text-gray-700">Adapted to new challenges with virtual and hybrid event solutions</p>
                </div>
              </div>
              <div className="flex items-center space-x-8">
                <div className="w-24 h-24 bg-royal-blue rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-gold font-bold text-xl">2024</span>
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-royal-blue mb-2">Excellence</h3>
                  <p className="text-gray-700">Celebrating 500+ successful events and continuing to grow</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding bg-royal-blue text-white">
          <div className="container-custom">
            <h2 className="text-4xl font-serif font-bold text-center mb-16">
              Why Choose <span className="text-gold">Nirvahana Utsav</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-gold mb-4">500+</div>
                <div className="text-xl font-medium">Events Managed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gold mb-4">10+</div>
                <div className="text-xl font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gold mb-4">50+</div>
                <div className="text-xl font-medium">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gold mb-4">100%</div>
                <div className="text-xl font-medium">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}