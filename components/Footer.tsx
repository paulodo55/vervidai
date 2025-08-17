import Link from 'next/link'
import { Zap, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="glass-effect mt-20">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <Zap className="h-8 w-8 text-accent-400 transform group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-accent-400 blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <span className="text-2xl font-display font-bold gradient-text">
                Vervid
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Transforming businesses with cutting-edge AI consulting and innovative digital solutions. Your competitive edge starts here.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent-400 transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-400 transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-400 transition-colors duration-300">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-display font-semibold text-white">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/ai-consulting" className="text-gray-400 hover:text-white transition-colors duration-300">AI Consulting</Link></li>
              <li><Link href="/services/web-development" className="text-gray-400 hover:text-white transition-colors duration-300">Web Development</Link></li>
              <li><Link href="/services/ios-development" className="text-gray-400 hover:text-white transition-colors duration-300">iOS App Development</Link></li>
              <li><Link href="/services/digital-strategy" className="text-gray-400 hover:text-white transition-colors duration-300">Digital Strategy</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-display font-semibold text-white">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors duration-300">Blog</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-display font-semibold text-white">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent-400" />
                <span className="text-gray-400">hello@vervid.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accent-400" />
                <span className="text-gray-400">Austin, TX</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Vervid. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
