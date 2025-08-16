'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { 
  ArrowRight, 
  Sparkles,
  BookOpen,
  PenTool,
  Lightbulb,
  TrendingUp
} from 'lucide-react'

export default function Blog() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect mb-8">
              <Sparkles className="h-4 w-4 text-accent-400 mr-2" />
              <span className="text-sm font-medium">Insights & Knowledge</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              The <span className="gradient-text">Vervid</span>
              <br />
              <span className="gradient-text">Blog</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              AI insights, business strategies, and cutting-edge technology perspectives from the Vervid team. 
              Coming soon to share our knowledge and help you stay ahead.
            </p>

            {/* Enhanced Visual Elements */}
            <div className="flex justify-center items-center space-x-8 mb-16">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-accent-500 to-accent-500 morphing-bg glow-pulse flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent-500 to-primary-500 morphing-bg glow-pulse flex items-center justify-center" style={{ animationDelay: '1s' }}>
                <PenTool className="h-6 w-6 text-white" />
              </div>
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-accent-600 to-accent-600 morphing-bg glow-pulse flex items-center justify-center" style={{ animationDelay: '2s' }}>
                <Lightbulb className="h-10 w-10 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="glass-effect p-12 rounded-3xl text-center">
              <TrendingUp className="h-16 w-16 text-accent-400 mx-auto mb-8" />
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">
                Knowledge <span className="gradient-text">Coming Soon</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                We're preparing a comprehensive blog filled with AI insights, business automation strategies, 
                web development best practices, and iOS app development tips. We will share our expertise 
                and the latest trends in technology and business growth.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="glass-effect p-6 rounded-2xl text-left">
                  <h3 className="text-xl font-display font-bold mb-3 text-white">AI & Machine Learning</h3>
                  <p className="text-gray-300 text-sm">
                    Deep dives into AI implementation, automation strategies, and how small businesses 
                    can leverage machine learning for competitive advantage.
                  </p>
                </div>
                <div className="glass-effect p-6 rounded-2xl text-left">
                  <h3 className="text-xl font-display font-bold mb-3 text-white">Business Growth</h3>
                  <p className="text-gray-300 text-sm">
                    Sales strategies, digital transformation insights, and practical advice for 
                    scaling your business with technology.
                  </p>
                </div>
                <div className="glass-effect p-6 rounded-2xl text-left">
                  <h3 className="text-xl font-display font-bold mb-3 text-white">Development Insights</h3>
                  <p className="text-gray-300 text-sm">
                    Web development trends, iOS app best practices, and technical tutorials 
                    for building high-performance digital solutions.
                  </p>
                </div>
                <div className="glass-effect p-6 rounded-2xl text-left">
                  <h3 className="text-xl font-display font-bold mb-3 text-white">Industry Trends</h3>
                  <p className="text-gray-300 text-sm">
                    Analysis of emerging technologies, market predictions, and how to stay 
                    ahead of the competition in the digital age.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary group">
                  Get Notified When We Launch
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link href="/about" className="btn-secondary">
                  Learn About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-600/20 to-accent-600/20"></div>
        <div className="container-custom relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Stay <span className="gradient-text">Informed</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Be the first to access our AI insights, business strategies, and exclusive content 
              when our blog launches.
            </p>
            <Link href="/contact" className="btn-primary group text-lg px-10 py-4">
              Subscribe for Updates
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
