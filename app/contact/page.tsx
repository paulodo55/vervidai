'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Mail, 
  CheckCircle,
  ArrowRight,
  Sparkles,
  Zap,
  TrendingUp
} from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate newsletter signup API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect mb-8">
              <Sparkles className="h-4 w-4 text-accent-400 mr-2" />
              <span className="text-sm font-medium">Stay Updated</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              Weekly <span className="gradient-text">AI Updates</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get the latest AI industry insights, breakthroughs, and business implications delivered directly to your inbox every week.
            </p>
          </div>

          {!isSubmitted ? (
            <div className="max-w-2xl mx-auto">
              <div className="glass-effect p-8 md:p-12 rounded-3xl">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 morphing-bg glow-pulse flex items-center justify-center mx-auto mb-6">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-white mb-4">
                    Subscribe to AI Weekly
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    Join thousands of professionals staying ahead with our curated AI insights and industry analysis.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg glass-effect border border-dark-600 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 bg-dark-800/50 text-white placeholder-gray-400 transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg glass-effect border border-dark-600 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 bg-dark-800/50 text-white placeholder-gray-400 transition-all duration-300"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Subscribing...
                      </>
                    ) : (
                      <>
                        Subscribe to Weekly Updates
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-8 pt-8 border-t border-dark-600">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-accent-400 font-semibold">Weekly</div>
                      <div className="text-gray-400 text-sm">Delivery Schedule</div>
                    </div>
                    <div>
                      <div className="text-accent-400 font-semibold">5 min</div>
                      <div className="text-gray-400 text-sm">Average Read Time</div>
                    </div>
                    <div>
                      <div className="text-accent-400 font-semibold">AI Focus</div>
                      <div className="text-gray-400 text-sm">Industry Insights</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto text-center">
              <div className="glass-effect p-8 md:p-12 rounded-3xl">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 glow-pulse flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-display font-bold text-white mb-4">
                  Welcome to AI Weekly!
                </h2>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Thank you for subscribing! You'll receive your first AI industry recap within the next week. 
                  Get ready for cutting-edge insights delivered straight to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/blog" className="btn-primary group">
                    Read Latest Posts
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                  <Link href="/about" className="btn-secondary">
                    Learn About Us
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* What You'll Get Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              What You'll <span className="gradient-text">Receive</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our weekly AI updates are carefully curated to provide maximum value for business professionals and technology enthusiasts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-effect p-8 rounded-2xl card-hover text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 morphing-bg glow-pulse flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">Industry Trends</h3>
              <p className="text-gray-300 leading-relaxed">
                Latest developments in AI technology, from breakthrough research to enterprise adoption patterns that shape the industry.
              </p>
            </div>

            <div className="glass-effect p-8 rounded-2xl card-hover text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 morphing-bg glow-pulse flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">Business Impact</h3>
              <p className="text-gray-300 leading-relaxed">
                Analysis of how AI developments affect business strategy, competitive landscapes, and market opportunities.
              </p>
            </div>

            <div className="glass-effect p-8 rounded-2xl card-hover text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 morphing-bg glow-pulse flex items-center justify-center mx-auto mb-6">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">Expert Insights</h3>
              <p className="text-gray-300 leading-relaxed">
                Professional commentary and strategic recommendations from our team of AI consultants and industry experts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Contact CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-600/20 to-accent-600/20"></div>
        <div className="container-custom relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Need Business <span className="gradient-text">Consulting?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Looking for AI consulting services for your business? We offer comprehensive AI strategy, 
              implementation, and digital transformation services.
            </p>
            <Link href="/services/ai-consulting" className="btn-primary group text-lg px-10 py-4">
              Explore AI Consulting Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}