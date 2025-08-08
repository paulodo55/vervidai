'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { 
  ArrowRight, 
  TrendingUp, 
  Target,
  Zap,
  Brain,
  CheckCircle,
  Sparkles,
  Users,
  BarChart3,
  Lightbulb
} from 'lucide-react'

export default function DigitalStrategy() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Accelerate Growth by 200%+',
      description: 'Strategic digital transformation typically doubles or triples business growth within 18 months.'
    },
    {
      icon: Target,
      title: 'Outmaneuver Competition',
      description: 'Get a strategic roadmap that positions you ahead of competitors who are still figuring it out.'
    },
    {
      icon: Brain,
      title: 'Make Data-Driven Decisions',
      description: 'Stop guessing. Get clear insights and metrics that guide every business decision.'
    },
    {
      icon: Zap,
      title: 'Maximize ROI on Every Dollar',
      description: 'Eliminate wasteful spending and focus resources on initiatives that deliver measurable results.'
    }
  ]

  const solutions = [
    {
      title: 'Digital Transformation Roadmap',
      description: 'Complete strategy for modernizing your business operations',
      features: ['Current state analysis', 'Technology assessment', 'Implementation timeline', 'ROI projections']
    },
    {
      title: 'Market Positioning Strategy',
      description: 'Dominate your market with strategic positioning and messaging',
      features: ['Competitive analysis', 'Brand positioning', 'Message development', 'Go-to-market plan']
    },
    {
      title: 'Technology Stack Planning',
      description: 'Choose the right tools and platforms for maximum impact',
      features: ['Technology audit', 'Platform selection', 'Integration planning', 'Scalability assessment']
    },
    {
      title: 'Growth Strategy Development',
      description: 'Systematic approach to scaling your business',
      features: ['Growth opportunity analysis', 'Channel strategy', 'Metrics framework', 'Optimization plan']
    }
  ]

  const deliverables = [
    {
      title: 'Strategic Assessment Report',
      description: 'Comprehensive analysis of your current digital maturity and competitive position'
    },
    {
      title: '12-Month Digital Roadmap',
      description: 'Step-by-step implementation plan with timelines, budgets, and success metrics'
    },
    {
      title: 'Technology Recommendations',
      description: 'Detailed recommendations for tools, platforms, and integrations'
    },
    {
      title: 'ROI Projections & KPIs',
      description: 'Clear metrics and expected returns for every recommended initiative'
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
              <BarChart3 className="h-4 w-4 text-accent-400 mr-2" />
              <span className="text-sm font-medium">Digital Strategy Consulting</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              <span className="gradient-text">Strategy That</span>
              <br />
              <span className="gradient-text">Destroys Competition</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Stop making random digital investments. Get a strategic roadmap that systematically 
              positions you to dominate your market and maximize every dollar spent.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link href="/contact" className="btn-primary group text-lg px-10 py-4">
                Get Your Strategy Session
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <div className="text-gray-400 text-sm">
                ✓ Free strategy consultation • ✓ Competitive analysis • ✓ Growth roadmap
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
              Why Strategic Planning <span className="gradient-text">Wins Markets</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              While competitors make reactive decisions, strategic businesses systematically capture market share.
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
              <Lightbulb className="h-4 w-4 text-accent-400 mr-2" />
              <span className="text-sm font-medium">Strategic Solutions</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              <span className="gradient-text">Complete Digital</span> Transformation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From assessment to execution, we provide the strategic framework for sustainable growth.
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

      {/* Deliverables Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              What You <span className="gradient-text">Actually Get</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Concrete deliverables that provide clear direction and measurable outcomes for your business.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {deliverables.map((deliverable, index) => (
                <div key={index} className="glass-effect p-8 rounded-2xl card-hover text-left">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-white mb-3">
                        {deliverable.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {deliverable.description}
                      </p>
                    </div>
                  </div>
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
              Our <span className="gradient-text">Strategic Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              A proven methodology that transforms businesses systematically and efficiently.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discovery & Analysis', desc: 'Deep dive into your business, market, and competition' },
                { step: '02', title: 'Strategy Development', desc: 'Create comprehensive roadmap and prioritize initiatives' },
                { step: '03', title: 'Implementation Planning', desc: 'Detailed execution plan with timelines and resources' },
                { step: '04', title: 'Ongoing Optimization', desc: 'Monitor, measure, and optimize for maximum results' }
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
              <Target className="h-4 w-4 text-accent-400 mr-2" />
              <span className="text-sm font-medium">Ready to Dominate?</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Stop Reacting. Start <span className="gradient-text">Strategically Winning</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              While your competitors make random moves, you'll have a systematic plan to capture 
              market share and maximize every opportunity.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact" className="btn-primary group text-lg px-12 py-4">
                Get Your Strategic Advantage
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <div className="text-gray-400 text-sm">
                ✓ Free strategy session • ✓ Market analysis • ✓ Growth roadmap
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
