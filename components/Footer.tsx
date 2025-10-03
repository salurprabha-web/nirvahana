import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-royal-blue rounded-full flex items-center justify-center">
                <span className="text-gold font-bold text-xl">N</span>
              </div>
              <span className="text-2xl font-serif font-bold">
                Nirvahana Utsav
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Crafting memorable celebrations with elegance and tradition. 
              Your trusted partner for unforgettable events.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-gold transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-gold transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-gold transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-gold transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-gold transition-colors duration-300">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-gold transition-colors duration-300">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/wedding-planning" className="text-gray-300 hover:text-gold transition-colors duration-300">
                  Wedding Planning
                </Link>
              </li>
              <li>
                <Link href="/services/corporate-events" className="text-gray-300 hover:text-gold transition-colors duration-300">
                  Corporate Events
                </Link>
              </li>
              <li>
                <Link href="/services/cultural-programs" className="text-gray-300 hover:text-gold transition-colors duration-300">
                  Cultural Programs
                </Link>
              </li>
              <li>
                <Link href="/services/inaugurations" className="text-gray-300 hover:text-gold transition-colors duration-300">
                  Inaugurations
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  123 Event Plaza, MG Road<br />
                  Mumbai, Maharashtra 400001
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-gold transition-colors duration-300">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="mailto:info@nirvahanautsav.com" className="text-gray-300 hover:text-gold transition-colors duration-300">
                  info@nirvahanautsav.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © {currentYear} Nirvahana Utsav. All rights reserved. | 
            <Link href="/privacy" className="hover:text-gold transition-colors duration-300 ml-2">
              Privacy Policy
            </Link> | 
            <Link href="/terms" className="hover:text-gold transition-colors duration-300 ml-2">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer