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

  const products = [
    {
      icon: Brain,
      title: 'VervidFlow',
      description: 'A top-of-the-line CRM system that streamlines your customer relationships and drives business growth with intelligent automation.',
      features: ['Advanced CRM Features', 'Sales Pipeline Management', 'Customer Analytics', 'Automated Workflows'],
      href: 'https://vervidflow.com',
      status: 'available',
      external: true
    },
    {
      icon: Globe,
      title: 'VervidAG',
      description: 'Revolutionary agricultural technology platform designed specifically for farmers to optimize crop management and increase yields.',
      features: ['Crop Management', 'Yield Optimization', 'Weather Integration', 'Farm Analytics'],
      href: '#',
      status: 'coming-soon'
    },
    {
      icon: Smartphone,
      title: 'VervidHire',
      description: 'Intelligent job-finding platform that connects students with their ideal career opportunities using advanced matching algorithms.',
      features: ['Smart Job Matching', 'Student-Focused', 'Career Guidance', 'Application Tracking'],
      href: '#',
      status: 'coming-soon'
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
              <span className="text-sm font-medium">Bridging Technology & Efficiency</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight">
              <span className="gradient-text">Efficiency</span> Through
              <br />
              <span className="gradient-text">Innovation</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              At Vervid, we're all about efficiency—using cutting-edge technology to bridge gaps and deliver solutions 
              that keep pace with the latest advancements to serve our customers better.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link href="/contact" className="btn-primary group">
                Explore Our Products
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link href="/about" className="btn-secondary">
                Learn About Vervid
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

      {/* Products Section */}
      <section id="products" className="section-padding relative">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect mb-6">
              <Rocket className="h-4 w-4 text-accent-400 mr-2" />
              <span className="text-sm font-medium">Our Products</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Solutions That <span className="gradient-text">Drive Efficiency</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We develop cutting-edge software products that streamline operations, enhance productivity, 
              and keep businesses ahead of the technological curve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              product.status === 'available' ? (
                <a
                  key={index}
                  href={product.href}
                  target={product.external ? "_blank" : "_self"}
                  rel={product.external ? "noopener noreferrer" : undefined}
                  className="glass-effect p-8 rounded-2xl card-hover group relative overflow-hidden block"
                >
                  {/* Enhanced background effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-white/5 group-hover:from-accent-500/10 group-hover:to-white/10 transition-all duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex flex-col items-center text-center">
                      <div className="flex-shrink-0 mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-accent-500 to-accent-600 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 glow-effect">
                          <product.icon className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:gradient-text transition-all duration-300">
                          {product.title}
                        </h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {product.description}
                        </p>
                        <ul className="space-y-2 mb-6">
                          {product.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center justify-center text-gray-400">
                              <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <div className="flex items-center justify-center text-accent-400 font-semibold">
                          Visit VervidFlow <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ) : (
                <div
                  key={index}
                  className="glass-effect p-8 rounded-2xl relative overflow-hidden block opacity-75 cursor-not-allowed"
                >
                  {/* Coming Soon Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    COMING SOON
                  </div>
                  {/* Enhanced background effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-white/5"></div>
                  <div className="relative z-10">
                    <div className="flex flex-col items-center text-center">
                      <div className="flex-shrink-0 mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-gray-600 to-gray-700 flex items-center justify-center">
                          <product.icon className="h-8 w-8 text-gray-400" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-display font-bold text-gray-400 mb-4">
                          {product.title}
                        </h3>
                        <p className="text-gray-500 mb-6 leading-relaxed">
                          {product.description}
                        </p>
                        <ul className="space-y-2 mb-6">
                          {product.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center justify-center text-gray-500">
                              <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <div className="flex items-center justify-center text-gray-500 font-semibold">
                          Coming Soon
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
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
              Ready to <span className="gradient-text">Optimize</span> Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how Vervid's innovative technology solutions can streamline your operations, boost efficiency, 
              and keep you ahead of the competition. Let's bridge the gap between where you are and where you want to be.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact" className="btn-primary group text-lg px-10 py-4">
                Get Started Today
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
