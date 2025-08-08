'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { 
  ArrowRight, 
  Brain, 
  TrendingUp,
  Zap,
  Target,
  CheckCircle,
  Sparkles,
  Users,
  DollarSign,
  Clock
} from 'lucide-react'

export default function AIConsulting() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increase Revenue by 40%+',
      description: 'AI automation and optimization typically delivers 40-60% revenue growth within the first year.'
    },
    {
      icon: Clock,
      title: 'Save 20+ Hours Weekly',
      description: 'Automate repetitive tasks and streamline operations to free up your team for strategic work.'
    },
    {
      icon: Target,
      title: 'Outpace Competition',
      description: 'Gain an unfair advantage with AI-powered insights and automation your competitors don\'t have.'
    },
    {
      icon: DollarSign,
      title: 'ROI Within 90 Days',
      description: 'See measurable returns on your AI investment within the first quarter of implementation.'
    }
  ]

  const solutions = [
    {
      title: 'Process Automation',
      description: 'Eliminate manual work that\'s costing you time and money',
      features: ['Customer service automation', 'Data entry elimination', 'Workflow optimization', 'Quality control systems']
    },
    {
      title: 'Predictive Analytics',
      description: 'Know what\'s coming before your competitors do',
      features: ['Sales forecasting', 'Inventory optimization', 'Customer behavior prediction', 'Market trend analysis']
    },
    {
      title: 'Custom AI Strategy',
      description: 'Tailored AI solutions that fit your specific business needs',
      features: ['Business analysis', 'AI roadmap creation', 'Implementation planning', 'Success measurement']
    },
    {
      title: 'Competitive Intelligence',
      description: 'Stay ahead with AI-powered market insights',
      features: ['Competitor monitoring', 'Price optimization', 'Market opportunity identification', 'Trend prediction']
    }
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
              <Brain className="h-4 w-4 text-accent-400 mr-2" />
              <span className="text-sm font-medium">AI Consulting Services</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              <span className="gradient-text">AI Solutions</span> That
              <br />
              <span className="gradient-text">Dominate Markets</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Stop losing to competitors who leverage AI. Get custom automation and intelligence 
              systems that deliver measurable results within 90 days.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link href="/contact" className="btn-primary group text-lg px-10 py-4">
                Get Your AI Strategy
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <div className="text-gray-400 text-sm">
                ✓ Free consultation • ✓ Custom strategy • ✓ 90-day ROI guarantee
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
              Why Businesses Choose <span className="gradient-text">Our AI Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from real businesses. Here's what happens when you implement our AI strategies.
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
              <span className="gradient-text">Comprehensive AI</span> Implementation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From strategy to execution, we deliver complete AI solutions that transform your business operations.
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
              Stop Losing to <span className="gradient-text">AI-Powered</span> Competitors
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Every day you wait is another day your competitors gain ground. Get your custom AI strategy 
              and start dominating your market within 90 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact" className="btn-primary group text-lg px-12 py-4">
                Get Your Free AI Audit
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <div className="text-gray-400 text-sm">
                ✓ 30-minute strategy session • ✓ Custom AI roadmap • ✓ ROI projections
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
