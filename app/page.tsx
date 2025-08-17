'use client'

import { useFadeIn, fadeInClasses } from '@/lib/hooks'
import Link from 'next/link'
import { 
  ArrowRight, 
  Brain, 
  Smartphone, 
  Globe, 
  TrendingUp,
  ChevronDown,
  Sparkles,
  Rocket,
  Target
} from 'lucide-react'

export default function Home() {
  const isVisible = useFadeIn()

  const services = [
    {
      icon: Brain,
      title: 'AI Consulting',
      description: 'Transform your business with intelligent automation and machine learning solutions tailored to your industry.',
      features: ['Custom AI Strategy', 'Process Automation', 'Predictive Analytics', 'ROI Optimization'],
      href: '/services/ai-consulting'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'High-performance, responsive websites that captivate your audience and drive conversions.',
      features: ['Modern Frameworks', 'SEO Optimized', 'Lightning Fast', 'Mobile-First Design'],
      href: '/services/web-development'
    },
    {
      icon: Smartphone,
      title: 'iOS App Development',
      description: 'Native iOS applications that deliver exceptional user experiences and business results.',
      features: ['Native Performance', 'App Store Ready', 'User-Centric Design', 'Ongoing Support'],
      href: '/services/ios-development'
    },
    {
      icon: TrendingUp,
      title: 'Digital Strategy',
      description: 'Comprehensive digital transformation strategies that give you the competitive edge.',
      features: ['Market Analysis', 'Growth Planning', 'Tech Stack Selection', 'Implementation Roadmap'],
      href: '/services/digital-strategy'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent-500/15 rounded-full blur-3xl glow-pulse morphing-bg"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/15 rounded-full blur-3xl glow-pulse morphing-bg" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-400/8 rounded-full blur-3xl glow-pulse morphing-bg" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-32 right-1/4 w-48 h-48 bg-gradient-to-r from-accent-400 to-accent-500 rounded-full blur-2xl glow-pulse opacity-20" style={{ animationDelay: '3s' }}></div>
          <div className="absolute bottom-32 left-1/4 w-64 h-64 bg-gradient-to-r from-accent-600 to-accent-600 rounded-full blur-2xl glow-pulse opacity-15" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="container-custom section-padding relative z-10">
          <div className={`text-center ${fadeInClasses(isVisible)}`}>
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect mb-8">
              <Sparkles className="h-4 w-4 text-accent-400 mr-2" />
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

            {/* Enhanced Visual Elements */}
            <div className="flex justify-center items-center space-x-8 mt-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 morphing-bg glow-pulse"></div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent-600 to-accent-500 morphing-bg glow-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-accent-600 to-accent-700 morphing-bg glow-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-accent-400" />
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding relative">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect mb-6">
              <Rocket className="h-4 w-4 text-accent-400 mr-2" />
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
              <Link 
                key={index}
                href={service.href}
                className="glass-effect p-8 rounded-2xl card-hover group relative overflow-hidden block"
              >
                {/* Enhanced background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-white/5 group-hover:from-accent-500/10 group-hover:to-white/10 transition-all duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-accent-500 to-accent-600 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 glow-effect">
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
                            <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 flex items-center text-accent-400 font-semibold">
                        Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-600/15 to-accent-600/15"></div>
        {/* Additional visual elements */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-accent-500/15 rounded-full blur-2xl glow-pulse"></div>
        <div className="absolute bottom-10 right-10 w-56 h-56 bg-accent-500/15 rounded-full blur-2xl glow-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-accent-400/8 to-accent-400/8 rounded-full blur-3xl glow-pulse morphing-bg" style={{ animationDelay: '2s' }}></div>
        <div className="container-custom relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect mb-6">
              <Target className="h-4 w-4 text-accent-400 mr-2" />
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
