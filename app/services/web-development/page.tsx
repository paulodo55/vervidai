'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { 
  ArrowRight, 
  Globe, 
  TrendingUp,
  Zap,
  Target,
  CheckCircle,
  Search,
  Smartphone
} from 'lucide-react'

export default function WebDevelopment() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increase Web Conversions',
      description: 'Our high-performance websites convert visitors into customers at rates that crush industry averages.'
    },
    {
      icon: Search,
      title: 'Dominate Google Rankings',
      description: 'SEO-optimized from day one. Watch your competitors fall behind as you climb to page one.'
    },
    {
      icon: Zap,
      title: 'Lightning-Fast Loading',
      description: 'Sub-2-second load times that keep visitors engaged and Google algorithms happy.'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Perfect experience on every device. Capture mobile traffic that others are losing.'
    }
  ]

  const solutions = [
    {
      title: 'High-Converting Landing Pages',
      description: 'Websites that turn visitors into paying customers',
      features: ['Conversion-optimized design', 'A/B tested layouts', 'Lead capture systems', 'Analytics integration']
    },
    {
      title: 'E-commerce Powerhouses',
      description: 'Online stores that maximize every sale opportunity',
      features: ['Shopping cart optimization', 'Payment integration', 'Inventory management', 'Customer analytics']
    },
    {
      title: 'Corporate Websites',
      description: 'Professional presence that builds trust and authority',
      features: ['Brand-aligned design', 'Content management', 'SEO optimization', 'Performance monitoring']
    },
    {
      title: 'Custom Web Applications',
      description: 'Powerful tools that streamline your business operations',
      features: ['Custom functionality', 'Database integration', 'User management', 'API development']
    }
  ]

  const technologies = [
    'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'AWS', 'Vercel'
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
              <Globe className="h-4 w-4 text-accent-400 mr-2" />
              <span className="text-sm font-medium">Web Development Services</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              <span className="gradient-text">Websites That</span>
              <br />
              <span className="gradient-text">Convert & Dominate</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Stop losing customers to slow, ugly websites. Get a high-performance, conversion-optimized 
              site that turns visitors into revenue and crushes your competition.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link href="/contact" className="btn-primary group text-lg px-10 py-4">
                Get Your Website Audit
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <div className="text-gray-400 text-sm">
                ✓ Free performance analysis • ✓ Conversion optimization • ✓ SEO audit
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
              Why Our Websites <span className="gradient-text">Outperform</span> The Competition
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built for results, not just looks. Every element is designed to convert visitors and dominate search rankings.
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
              <span className="text-sm font-medium">Our Solutions</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              <span className="gradient-text">Complete Web</span> Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From simple landing pages to complex web applications, we build digital experiences that drive results.
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

      {/* Technologies Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Built With <span className="gradient-text">Cutting-Edge</span> Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              We use the latest, most powerful technologies to ensure your website is fast, secure, and scalable.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <div key={index} className="glass-effect px-6 py-3 rounded-full">
                  <span className="text-white font-medium">{tech}</span>
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
              <Target className="h-4 w-4 text-accent-400 mr-2" />
              <span className="text-sm font-medium">Ready to Dominate?</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Stop Losing Customers to <span className="gradient-text">Better Websites</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Your competitors are already investing in high-performance websites. Don't let them capture 
              the customers that should be yours.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact" className="btn-primary group text-lg px-12 py-4">
                Start Your Website Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <div className="text-gray-400 text-sm">
                ✓ Free consultation • ✓ Custom proposal • ✓ 30-day launch guarantee
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
