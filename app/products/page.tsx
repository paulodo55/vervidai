'use client'

import { useFadeIn, fadeInClasses } from '@/lib/hooks'
import Link from 'next/link'
import { 
  ArrowRight, 
  Brain, 
  Smartphone, 
  Globe, 
  Sparkles,
  Rocket,
  Target,
  ExternalLink,
  Clock
} from 'lucide-react'

export default function Products() {
  const isVisible = useFadeIn()

  const products = [
    {
      icon: Brain,
      title: 'VervidFlow',
      description: 'A top-of-the-line CRM system that streamlines your customer relationships and drives business growth with intelligent automation.',
      longDescription: 'VervidFlow is our flagship CRM solution designed for businesses that demand efficiency and results. With advanced pipeline management, customer analytics, and automated workflows, it transforms how you manage relationships and drive growth.',
      features: ['Advanced CRM Features', 'Sales Pipeline Management', 'Customer Analytics', 'Automated Workflows', 'Real-time Reporting', 'Integration Ready'],
      href: 'https://vervidflow.com',
      status: 'available',
      external: true,
      category: 'Business Management'
    },
    {
      icon: Globe,
      title: 'VervidAG',
      description: 'Revolutionary agricultural technology platform designed specifically for farmers to optimize crop management and increase yields.',
      longDescription: 'VervidAG represents the future of farming technology. By combining IoT sensors, weather data, and machine learning, we help farmers make data-driven decisions that maximize yields while minimizing resource waste.',
      features: ['Crop Management', 'Yield Optimization', 'Weather Integration', 'Farm Analytics', 'Resource Planning', 'Sustainability Metrics'],
      href: '#',
      status: 'coming-soon',
      category: 'Agriculture Technology',
      launchDate: 'Q2 2025'
    },
    {
      icon: Smartphone,
      title: 'VervidHire',
      description: 'Intelligent job-finding platform that connects students with their ideal career opportunities using advanced matching algorithms.',
      longDescription: 'VervidHire bridges the gap between talented students and forward-thinking employers. Our AI-powered matching system considers skills, interests, career goals, and company culture to create perfect professional connections.',
      features: ['Smart Job Matching', 'Student-Focused', 'Career Guidance', 'Application Tracking', 'Interview Prep', 'Employer Network'],
      href: '#',
      status: 'coming-soon',
      category: 'Career Technology',
      launchDate: 'Q3 2025'
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className={`text-center ${fadeInClasses(isVisible)}`}>
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect mb-8">
              <Sparkles className="h-4 w-4 text-accent-400 mr-2" />
              <span className="text-sm font-medium">Our Product Suite</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              <span className="gradient-text">Innovative</span> Solutions
              <br />
              for <span className="gradient-text">Every Industry</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Discover our suite of cutting-edge products designed to drive efficiency, streamline operations, 
              and keep your business ahead of the technological curve.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12">
            {products.map((product, index) => (
              <div key={index} className="glass-effect p-8 rounded-2xl relative overflow-hidden">
                {/* Status Badge */}
                <div className="absolute top-6 right-6">
                  {product.status === 'available' ? (
                    <div className="bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                      LIVE
                    </div>
                  ) : (
                    <div className="bg-gradient-to-r from-accent-500 to-accent-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      COMING SOON
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  {/* Product Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start space-x-6 mb-6">
                      <div className="flex-shrink-0">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                          product.status === 'available' 
                            ? 'bg-gradient-to-r from-accent-500 to-accent-600 glow-effect' 
                            : 'bg-gradient-to-r from-gray-600 to-gray-700'
                        }`}>
                          <product.icon className={`h-8 w-8 ${
                            product.status === 'available' ? 'text-white' : 'text-gray-400'
                          }`} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="mb-2">
                          <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                            product.status === 'available' 
                              ? 'bg-accent-500/20 text-accent-300' 
                              : 'bg-gray-600/20 text-gray-400'
                          }`}>
                            {product.category}
                          </span>
                        </div>
                        <h2 className={`text-3xl font-display font-bold mb-4 ${
                          product.status === 'available' ? 'text-white' : 'text-gray-400'
                        }`}>
                          {product.title}
                        </h2>
                        <p className={`text-lg mb-4 leading-relaxed ${
                          product.status === 'available' ? 'text-gray-300' : 'text-gray-500'
                        }`}>
                          {product.description}
                        </p>
                        <p className={`mb-6 leading-relaxed ${
                          product.status === 'available' ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                          {product.longDescription}
                        </p>

                        {/* Launch Date for Coming Soon */}
                        {product.status === 'coming-soon' && product.launchDate && (
                          <div className="mb-6">
                            <div className="inline-flex items-center px-4 py-2 rounded-lg bg-accent-500/10 border border-accent-500/20">
                              <Target className="h-4 w-4 text-accent-400 mr-2" />
                              <span className="text-accent-300 font-medium">Expected Launch: {product.launchDate}</span>
                            </div>
                          </div>
                        )}

                        {/* CTA Button */}
                        {product.status === 'available' ? (
                          <a
                            href={product.href}
                            target={product.external ? "_blank" : "_self"}
                            rel={product.external ? "noopener noreferrer" : undefined}
                            className="btn-primary group inline-flex"
                          >
                            Visit {product.title}
                            <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                          </a>
                        ) : (
                          <div className="inline-flex items-center px-6 py-3 rounded-lg bg-gray-600/20 text-gray-500 cursor-not-allowed">
                            <Clock className="mr-2 h-5 w-5" />
                            Coming Soon
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="lg:col-span-1">
                    <h3 className={`text-lg font-display font-bold mb-4 ${
                      product.status === 'available' ? 'text-white' : 'text-gray-400'
                    }`}>
                      Key Features
                    </h3>
                    <ul className="space-y-3">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className={`flex items-center ${
                          product.status === 'available' ? 'text-gray-300' : 'text-gray-500'
                        }`}>
                          <div className={`w-2 h-2 rounded-full mr-3 ${
                            product.status === 'available' ? 'bg-accent-400' : 'bg-gray-500'
                          }`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-600/20 to-accent-600/20"></div>
        <div className="container-custom relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect mb-6">
              <Rocket className="h-4 w-4 text-accent-400 mr-2" />
              <span className="text-sm font-medium">Ready to Get Started?</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Transform Your <span className="gradient-text">Operations</span> Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the businesses already benefiting from Vervid's innovative solutions. 
              Let's discuss how our products can drive efficiency in your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact" className="btn-primary group text-lg px-10 py-4">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link href="/about" className="btn-secondary text-lg px-10 py-4">
                Learn About Vervid
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
