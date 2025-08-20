'use client'

import { useState } from 'react'
import { useFadeIn, fadeInClasses } from '@/lib/hooks'
import { 
  Rocket, 
  Mail, 
  Phone, 
  Building, 
  MessageSquare, 
  DollarSign, 
  Send, 
  CheckCircle,
  Sparkles,
  ArrowRight,
  User,
  Briefcase,
  Target,
  Zap
} from 'lucide-react'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  position: string
  services: string[]
  message: string
  budget: string
  timeline: string
}

const services = [
  'Web Development',
  'iOS Development', 
  'AI Consulting',
  'Digital Strategy',
  'Custom Software',
  'Other'
]

const budgetRanges = [
  'Under $5,000',
  '$5,000 - $15,000',
  '$15,000 - $50,000',
  '$50,000 - $100,000',
  '$100,000+'
]

const timelineOptions = [
  'ASAP',
  '1-2 months',
  '3-6 months',
  '6+ months',
  'Just exploring'
]

export default function GetStarted() {
  const isVisible = useFadeIn()
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    services: [],
    message: '',
    budget: '',
    timeline: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-900/20 via-transparent to-transparent"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className={`max-w-2xl mx-auto text-center ${fadeInClasses(isVisible)}`}>
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full glass-effect mb-6">
                <CheckCircle className="h-10 w-10 text-accent-400" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent">
                Thank You!
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                We've received your inquiry and will get back to you within 24 hours.
              </p>
              <div className="glass-effect p-6 rounded-xl">
                <p className="text-gray-400 mb-4">What happens next?</p>
                <div className="space-y-3 text-left">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">We'll review your project requirements</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">Schedule a consultation call</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">Provide a detailed proposal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-900/20 via-transparent to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className={`max-w-4xl mx-auto ${fadeInClasses(isVisible)}`}>
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect mb-8">
              <Rocket className="h-5 w-5 text-accent-400 mr-2" />
              <span className="text-accent-400 font-medium">Let's Build Something Amazing</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Get Started
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ready to transform your business with cutting-edge technology? Tell us about your project and let's create something extraordinary together.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="glass-effect p-8 md:p-12 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Personal Information */}
              <div className="space-y-6">
                <div className="flex items-center mb-6">
                  <User className="h-6 w-6 text-accent-400 mr-3" />
                  <h2 className="text-2xl font-semibold">Personal Information</h2>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg glass-effect border border-dark-600 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 bg-dark-800/50 text-white placeholder-gray-400 transition-all duration-300"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg glass-effect border border-dark-600 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 bg-dark-800/50 text-white placeholder-gray-400 transition-all duration-300"
                      placeholder="Doe"
                    />
                  </div>
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
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg glass-effect border border-dark-600 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 bg-dark-800/50 text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg glass-effect border border-dark-600 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 bg-dark-800/50 text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg glass-effect border border-dark-600 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 bg-dark-800/50 text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="Acme Corp"
                  />
                </div>

                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Position
                  </label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg glass-effect border border-dark-600 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 bg-dark-800/50 text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="CEO, CTO, Product Manager..."
                  />
                </div>
              </div>

              {/* Project Information */}
              <div className="space-y-6">
                <div className="flex items-center mb-6">
                  <Briefcase className="h-6 w-6 text-accent-400 mr-3" />
                  <h2 className="text-2xl font-semibold">Project Information</h2>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Services Interested In *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {services.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => handleServiceToggle(service)}
                        className={`p-3 rounded-lg border transition-all duration-300 text-left ${
                          formData.services.includes(service)
                            ? 'border-accent-500 bg-accent-500/20 text-accent-400'
                            : 'border-dark-600 bg-dark-800/50 text-gray-300 hover:border-accent-500/50'
                        }`}
                      >
                        <div className="flex items-center">
                          <div className={`w-2 h-2 rounded-full mr-3 ${
                            formData.services.includes(service) ? 'bg-accent-400' : 'bg-gray-600'
                          }`}></div>
                          {service}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Budget *
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    required
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg glass-effect border border-dark-600 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 bg-dark-800/50 text-white transition-all duration-300"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range} className="bg-dark-800">
                        {range}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Timeline *
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    required
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg glass-effect border border-dark-600 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 bg-dark-800/50 text-white transition-all duration-300"
                  >
                    <option value="">Select timeline</option>
                    {timelineOptions.map((option) => (
                      <option key={option} value={option} className="bg-dark-800">
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Description *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg glass-effect border border-dark-600 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 bg-dark-800/50 text-white placeholder-gray-400 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project goals, requirements, and any specific features you need..."
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-12 text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-600 to-accent-700 hover:from-accent-500 hover:to-accent-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-3" />
                    Send Inquiry
                    <ArrowRight className="h-5 w-5 ml-3" />
                  </>
                )}
              </button>
              
              <p className="text-gray-400 text-sm mt-4">
                We typically respond within 24 hours during business days
              </p>
            </div>
          </form>

          {/* Additional Info */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full glass-effect mb-4">
                <Target className="h-8 w-8 text-accent-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Custom Solutions</h3>
              <p className="text-gray-400">
                Every project is unique. We tailor our approach to your specific needs and goals.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full glass-effect mb-4">
                <Zap className="h-8 w-8 text-accent-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Turnaround</h3>
              <p className="text-gray-400">
                We work efficiently without compromising quality to deliver results quickly.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full glass-effect mb-4">
                <Sparkles className="h-8 w-8 text-accent-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-400">
                We deliver exceptional results that exceed expectations and drive business growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
