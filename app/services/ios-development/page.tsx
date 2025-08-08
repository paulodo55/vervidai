'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { 
  ArrowRight, 
  Smartphone, 
  TrendingUp,
  Zap,
  Target,
  CheckCircle,
  Sparkles,
  Users,
  Star,
  Download
} from 'lucide-react'

export default function IOSDevelopment() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Capture Premium iOS Market',
      description: 'iOS users spend 2.5x more than Android users. Tap into the most valuable mobile audience.'
    },
    {
      icon: Star,
      title: 'App Store Success',
      description: 'Apps designed for App Store approval and featuring. Get discovered by millions of users.'
    },
    {
      icon: Zap,
      title: 'Native Performance',
      description: 'Built with Swift for maximum speed, reliability, and seamless iOS integration.'
    },
    {
      icon: Users,
      title: 'User Retention Champion',
      description: 'Intuitive design that keeps users engaged and coming back for more.'
    }
  ]

  const solutions = [
    {
      title: 'Business Apps',
      description: 'Internal tools that boost productivity and streamline operations',
      features: ['Employee management', 'Task automation', 'Data synchronization', 'Offline functionality']
    },
    {
      title: 'Customer-Facing Apps',
      description: 'Engaging experiences that drive customer loyalty and sales',
      features: ['E-commerce integration', 'Push notifications', 'User profiles', 'Social features']
    },
    {
      title: 'Marketplace Apps',
      description: 'Revenue-generating platforms that connect buyers and sellers',
      features: ['Payment processing', 'Rating systems', 'Search & filtering', 'Admin dashboard']
    },
    {
      title: 'Service Apps',
      description: 'On-demand solutions that create new revenue streams',
      features: ['Booking systems', 'GPS integration', 'Real-time tracking', 'Communication tools']
    }
  ]

  const features = [
    'Native iOS Development',
    'App Store Optimization',
    'Push Notifications',
    'In-App Purchases',
    'Core Data Integration',
    'CloudKit Sync',
    'Face ID / Touch ID',
    'Apple Pay Integration'
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl glow-pulse morphing-bg"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl glow-pulse morphing-bg" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect mb-8">
              <Smartphone className="h-4 w-4 text-accent-400 mr-2" />
              <span className="text-sm font-medium">iOS App Development</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              <span className="gradient-text">iOS Apps That</span>
              <br />
              <span className="gradient-text">Generate Revenue</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Stop missing out on the most profitable mobile market. Get a premium iOS app that 
              captures high-value users and drives serious business results.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link href="/contact" className="btn-primary group text-lg px-10 py-4">
                Get Your App Strategy
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <div className="text-gray-400 text-sm">
                ✓ Free app consultation • ✓ Market analysis • ✓ Revenue projections
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Why iOS Apps <span className="gradient-text">Dominate</span> Mobile Revenue
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              iOS users are premium customers who spend more, engage longer, and drive higher lifetime value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="glass-effect p-8 rounded-2xl card-hover group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-white/5 group-hover:from-accent-500/10 group-hover:to-white/10 transition-all duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-accent-500 to-accent-600 flex items-center justify-center group-hover:scale-110 transition-all duration-500 glow-effect">
                        <benefit.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:gradient-text transition-all duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="section-padding relative">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect mb-6">
              <Zap className="h-4 w-4 text-accent-400 mr-2" />
              <span className="text-sm font-medium">App Solutions</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              <span className="gradient-text">Custom iOS Apps</span> For Every Business
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Whether you need internal tools or customer-facing apps, we build solutions that drive results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="glass-effect p-8 rounded-2xl card-hover">
                <h3 className="text-2xl font-display font-bold text-white mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {solution.description}
                </p>
                <ul className="space-y-3">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-400">
                      <CheckCircle className="h-5 w-5 text-accent-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              <span className="gradient-text">Premium iOS</span> Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Leverage the full power of iOS with advanced features that set your app apart from the competition.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="glass-effect px-4 py-6 rounded-2xl text-center card-hover">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-white font-medium text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              From Idea to <span className="gradient-text">App Store</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Our proven process takes your app from concept to successful App Store launch.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Strategy & Planning', desc: 'Define goals, features, and target audience' },
                { step: '02', title: 'Design & Prototype', desc: 'Create stunning UI/UX that users love' },
                { step: '03', title: 'Development & Testing', desc: 'Build with Swift, test thoroughly' },
                { step: '04', title: 'Launch & Optimize', desc: 'App Store submission and ongoing support' }
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-3">{phase.title}</h3>
                  <p className="text-gray-400 text-sm">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-600/20 to-accent-600/20"></div>
        <div className="absolute top-10 left-10 w-40 h-40 bg-accent-500/20 rounded-full blur-2xl glow-pulse"></div>
        <div className="absolute bottom-10 right-10 w-56 h-56 bg-accent-500/20 rounded-full blur-2xl glow-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="container-custom relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect mb-6">
              <Download className="h-4 w-4 text-accent-400 mr-2" />
              <span className="text-sm font-medium">Ready to Launch?</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Turn Your App Idea Into <span className="gradient-text">Revenue Reality</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stop dreaming about your app and start building it. Every day you wait is revenue lost 
              to competitors who are already in the App Store.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact" className="btn-primary group text-lg px-12 py-4">
                Start Building Your App
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <div className="text-gray-400 text-sm">
                ✓ Free app consultation • ✓ Market validation • ✓ Revenue strategy
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
