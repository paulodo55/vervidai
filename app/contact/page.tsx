'use client'

import { useState } from 'react'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Clock,
  MessageSquare,
  Linkedin,
  Twitter,
  Github,
  Sparkles,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    project: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'hello@vervid.com',
      description: 'Drop us a line anytime'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      description: 'Mon-Fri 9am-6pm PST'
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Austin, TX',
      description: 'Remote-first, global reach'
    },
    {
      icon: Clock,
      title: 'Response Time',
      content: '< 24 hours',
      description: 'We reply fast'
    }
  ]

  const services = [
    'AI Consulting & Strategy',
    'Machine Learning Implementation',
    'Custom Web Development',
    'iOS App Development',
    'Digital Transformation',
    'Process Automation',
    'Data Analytics',
    'Technical Consulting'
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              <span className="gradient-text">Message Sent!</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Thanks for reaching out! We will personally review your message and get back to you within 24 hours. 
              We're excited to discuss how we can transform your business together.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false)
                setFormData({
                  name: '',
                  email: '',
                  company: '',
                  budget: '',
                  project: '',
                  message: ''
                })
              }}
              className="btn-primary"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </div>
    )
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
              <span className="text-sm font-medium">Let's Connect</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              Ready to <span className="gradient-text">Transform</span>
              <br />
              Your <span className="gradient-text">Business?</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Let's discuss your vision and create a custom solution that gives you the competitive edge. 
              We are personally invested in your success.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-display font-bold mb-4">
                  Start Your <span className="gradient-text">Transformation</span>
                </h2>
                <p className="text-gray-300 text-lg">
                  Tell us about your project and let's explore how we can help you dominate your market.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg glass-effect border border-dark-600 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 bg-dark-800/50 text-white placeholder-gray-400 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg glass-effect border border-dark-600 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 bg-dark-800/50 text-white placeholder-gray-400 transition-all duration-300"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg glass-effect border border-dark-600 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 bg-dark-800/50 text-white placeholder-gray-400 transition-all duration-300"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg glass-effect border border-dark-600 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 bg-dark-800/50 text-white transition-all duration-300"
                    >
                      <option value="">Select Budget Range</option>
                      <option value="5k-15k">$5K - $15K</option>
                      <option value="15k-50k">$15K - $50K</option>
                      <option value="50k-100k">$50K - $100K</option>
                      <option value="100k+">$100K+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Type *
                  </label>
                  <select
                    id="project"
                    name="project"
                    required
                    value={formData.project}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg glass-effect border border-dark-600 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 bg-dark-800/50 text-white transition-all duration-300"
                  >
                    <option value="">Select Project Type</option>
                    <option value="ai-consulting">AI Consulting & Strategy</option>
                    <option value="web-development">Web Development</option>
                    <option value="ios-app">iOS App Development</option>
                    <option value="digital-transformation">Digital Transformation</option>
                    <option value="automation">Process Automation</option>
                    <option value="other">Other / Multiple Services</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg glass-effect border border-dark-600 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 bg-dark-800/50 text-white placeholder-gray-400 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary group text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-display font-bold mb-4">
                  Get in <span className="gradient-text">Touch</span>
                </h2>
                <p className="text-gray-300 text-lg mb-8">
                  Multiple ways to reach us. We're here to help and respond quickly to all inquiries.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="glass-effect p-6 rounded-2xl card-hover">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-accent-500 to-accent-600 flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-display font-bold text-white mb-1">
                          {info.title}
                        </h3>
                        <p className="text-accent-400 font-semibold mb-1">
                          {info.content}
                        </p>
                        <p className="text-gray-400 text-sm">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Services List */}
              <div className="glass-effect p-8 rounded-2xl">
                <h3 className="text-2xl font-display font-bold mb-6 text-white">
                  Our <span className="gradient-text">Services</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-effect p-8 rounded-2xl">
                <h3 className="text-2xl font-display font-bold mb-6 text-white">
                  Connect With <span className="gradient-text">Us</span>
                </h3>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="w-12 h-12 rounded-xl glass-effect hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-accent-400 transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 rounded-xl glass-effect hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-accent-400 transition-all duration-300 hover:scale-110"
                  >
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 rounded-xl glass-effect hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-accent-400 transition-all duration-300 hover:scale-110"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 rounded-xl glass-effect hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-accent-400 transition-all duration-300 hover:scale-110"
                  >
                    <MessageSquare className="h-6 w-6" />
                  </a>
                </div>
                <p className="text-gray-400 text-sm mt-4">
                  Follow for AI insights, business tips, and behind-the-scenes content
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
