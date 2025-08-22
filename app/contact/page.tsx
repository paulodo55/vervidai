'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Mail, 
  CheckCircle,
  ArrowRight,
  Sparkles,
  Zap,
  TrendingUp,
  MessageCircle,
  HelpCircle
} from 'lucide-react'

export default function Contact() {
  // Newsletter form state
  const [newsletterData, setNewsletterData] = useState({
    name: '',
    email: ''
  })
  const [isNewsletterSubmitting, setIsNewsletterSubmitting] = useState(false)
  const [isNewsletterSubmitted, setIsNewsletterSubmitted] = useState(false)

  // Questions form state
  const [questionData, setQuestionData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isQuestionSubmitting, setIsQuestionSubmitting] = useState(false)
  const [isQuestionSubmitted, setIsQuestionSubmitted] = useState(false)

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsNewsletterSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: newsletterData.name,
          email: newsletterData.email,
          message: `Newsletter subscription request from ${newsletterData.name}`,
          type: 'newsletter'
        }),
      })

      if (response.ok) {
        setIsNewsletterSubmitted(true)
      } else {
        const errorData = await response.json()
        console.error('Newsletter signup failed:', errorData.error)
        alert('Failed to subscribe to newsletter. Please try again.')
      }
    } catch (error) {
      console.error('Newsletter signup error:', error)
      alert('Failed to subscribe to newsletter. Please try again.')
    }
    
    setIsNewsletterSubmitting(false)
  }

  const handleQuestionSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsQuestionSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: questionData.name,
          email: questionData.email,
          message: questionData.message,
          type: 'question'
        }),
      })

      if (response.ok) {
        setIsQuestionSubmitted(true)
      } else {
        const errorData = await response.json()
        console.error('Question submission failed:', errorData.error)
        alert('Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Question submission error:', error)
      alert('Failed to send message. Please try again.')
    }
    
    setIsQuestionSubmitting(false)
  }

  const handleNewsletterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewsletterData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setQuestionData(prev => ({
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
              <span className="text-sm font-medium">Get Connected</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              <span className="gradient-text">Contact</span> Us
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Subscribe to our weekly AI updates or reach out with any questions you have about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Newsletter Signup Section */}
            <div className="glass-effect p-8 md:p-10 rounded-3xl">
              {!isNewsletterSubmitted ? (
                <>
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 morphing-bg glow-pulse flex items-center justify-center mx-auto mb-6">
                      <Mail className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-display font-bold text-white mb-4">
                      Weekly AI Updates
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                      Stay ahead with curated AI insights and industry analysis delivered to your inbox.
                    </p>
                  </div>

                  <form onSubmit={handleNewsletterSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="newsletter-name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="newsletter-name"
                        name="name"
                        value={newsletterData.name}
                        onChange={handleNewsletterChange}
                        required
                        className="w-full px-4 py-3 rounded-lg glass-effect border border-dark-600 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 bg-dark-800/50 text-white placeholder-gray-400 transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="newsletter-email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="newsletter-email"
                        name="email"
                        value={newsletterData.email}
                        onChange={handleNewsletterChange}
                        required
                        className="w-full px-4 py-3 rounded-lg glass-effect border border-dark-600 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 bg-dark-800/50 text-white placeholder-gray-400 transition-all duration-300"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isNewsletterSubmitting}
                      className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed group"
                    >
                      {isNewsletterSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Subscribing...
                        </>
                      ) : (
                        <>
                          Subscribe to Updates
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </button>
                  </form>

                  <div className="mt-6 pt-6 border-t border-dark-600">
                    <div className="grid grid-cols-3 gap-4 text-center text-sm">
                      <div>
                        <div className="text-accent-400 font-semibold">Weekly</div>
                        <div className="text-gray-400">Delivery</div>
                      </div>
                      <div>
                        <div className="text-accent-400 font-semibold">5 min</div>
                        <div className="text-gray-400">Read Time</div>
                      </div>
                      <div>
                        <div className="text-accent-400 font-semibold">AI Focus</div>
                        <div className="text-gray-400">Insights</div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 glow-pulse flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-4">
                    Welcome to AI Weekly!
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Thank you for subscribing! You'll receive your first AI industry recap within the next week.
                  </p>
                  <Link href="/blog" className="btn-primary group">
                    Read Latest Posts
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              )}
            </div>

            {/* Questions Section */}
            <div className="glass-effect p-8 md:p-10 rounded-3xl">
              {!isQuestionSubmitted ? (
                <>
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 morphing-bg glow-pulse flex items-center justify-center mx-auto mb-6">
                      <HelpCircle className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-display font-bold text-white mb-4">
                      Have Questions?
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                      Got questions about our services or AI consulting? We'd love to help you out.
                    </p>
                  </div>

                  <form onSubmit={handleQuestionSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="question-name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="question-name"
                        name="name"
                        value={questionData.name}
                        onChange={handleQuestionChange}
                        required
                        className="w-full px-4 py-3 rounded-lg glass-effect border border-dark-600 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 bg-dark-800/50 text-white placeholder-gray-400 transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="question-email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="question-email"
                        name="email"
                        value={questionData.email}
                        onChange={handleQuestionChange}
                        required
                        className="w-full px-4 py-3 rounded-lg glass-effect border border-dark-600 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 bg-dark-800/50 text-white placeholder-gray-400 transition-all duration-300"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={questionData.message}
                        onChange={handleQuestionChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg glass-effect border border-dark-600 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 bg-dark-800/50 text-white placeholder-gray-400 transition-all duration-300 resize-none"
                        placeholder="What can we help you with?"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isQuestionSubmitting}
                      className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed group"
                    >
                      {isQuestionSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <MessageCircle className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 glow-pulse flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-4">
                    Message Sent!
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Thank you for reaching out! We'll get back to you within 24 hours with a detailed response.
                  </p>
                  <Link href="/get-started" className="btn-primary group">
                    Explore Our Services
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Why Choose <span className="gradient-text">Vervid</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're committed to delivering exceptional AI insights and consulting services that drive real business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-effect p-8 rounded-2xl card-hover text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 morphing-bg glow-pulse flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">Industry Expertise</h3>
              <p className="text-gray-300 leading-relaxed">
                Deep knowledge of AI trends, breakthrough research, and enterprise adoption patterns that shape the industry.
              </p>
            </div>

            <div className="glass-effect p-8 rounded-2xl card-hover text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 morphing-bg glow-pulse flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">Business Focus</h3>
              <p className="text-gray-300 leading-relaxed">
                Strategic analysis of how AI developments impact business strategy, competitive landscapes, and market opportunities.
              </p>
            </div>

            <div className="glass-effect p-8 rounded-2xl card-hover text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 morphing-bg glow-pulse flex items-center justify-center mx-auto mb-6">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">Personalized Support</h3>
              <p className="text-gray-300 leading-relaxed">
                Professional guidance and strategic recommendations tailored to your specific business needs and goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Services CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-600/20 to-accent-600/20"></div>
        <div className="container-custom relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Ready to Get <span className="gradient-text">Started?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Looking for comprehensive AI consulting services? We offer strategy, implementation, 
              and digital transformation solutions tailored to your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-started" className="btn-primary group text-lg px-10 py-4">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link href="/services/ai-consulting" className="btn-secondary text-lg px-10 py-4">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}