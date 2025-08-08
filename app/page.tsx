'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { 
  ArrowRight, 
  Brain, 
  Smartphone, 
  Globe, 
  TrendingUp, 
  Zap, 
  Users, 
  Award,
  ChevronDown,
  Sparkles,
  Rocket,
  Target
} from 'lucide-react'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      icon: Brain,
      title: 'AI Consulting',
      description: 'Transform your business with intelligent automation and machine learning solutions tailored to your industry.',
      features: ['Custom AI Strategy', 'Process Automation', 'Predictive Analytics', 'ROI Optimization']
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'High-performance, responsive websites that captivate your audience and drive conversions.',
      features: ['Modern Frameworks', 'SEO Optimized', 'Lightning Fast', 'Mobile-First Design']
    },
    {
      icon: Smartphone,
      title: 'iOS App Development',
      description: 'Native iOS applications that deliver exceptional user experiences and business results.',
      features: ['Native Performance', 'App Store Ready', 'User-Centric Design', 'Ongoing Support']
    },
    {
      icon: TrendingUp,
      title: 'Digital Strategy',
      description: 'Comprehensive digital transformation strategies that give you the competitive edge.',
      features: ['Market Analysis', 'Growth Planning', 'Tech Stack Selection', 'Implementation Roadmap']
    }
  ]

  const stats = [
    { number: '50+', label: 'Projects Delivered' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '3x', label: 'Average ROI Increase' },
    { number: '24/7', label: 'Support Available' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container-custom section-padding relative z-10">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect mb-8 animate-fade-in">
              <Sparkles className="h-4 w-4 text-primary-400 mr-2" />
              <span className="text-sm font-medium">Transforming Businesses with AI</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight">
              <span className="gradient-text">Unleash</span> Your
              <br />
              <span className="gradient-text">Digital Potential</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              We specialize in AI consulting, cutting-edge web development, and iOS apps that give small businesses 
              the competitive edge they need to dominate their markets.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link href="/contact" className="btn-primary group">
                Start Your Transformation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link href="/about" className="btn-secondary">
                Discover Our Story
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 200 + 500}ms` }}
                >
                  <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-primary-400" />
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding relative">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect mb-6">
              <Rocket className="h-4 w-4 text-primary-400 mr-2" />
              <span className="text-sm font-medium">Our Expertise</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Services That <span className="gradient-text">Deliver Results</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From AI-powered automation to stunning digital experiences, we provide comprehensive solutions 
              that transform your business and accelerate growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="glass-effect p-8 rounded-2xl card-hover group"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:gradient-text transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-400">
                          <div className="w-2 h-2 bg-primary-400 rounded-full mr-3"></div>
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
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-accent-600/20"></div>
        <div className="container-custom relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect mb-6">
              <Target className="h-4 w-4 text-primary-400 mr-2" />
              <span className="text-sm font-medium">Ready to Transform?</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Let's Build Something <span className="gradient-text">Amazing</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the ranks of successful businesses that have transformed their operations with our AI-powered solutions. 
              Your competitive advantage starts with a single conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact" className="btn-primary group text-lg px-10 py-4">
                Start Your Project Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link href="/about" className="btn-secondary text-lg px-10 py-4">
                Meet the Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
