'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { 
  ArrowRight, 
  Sparkles,
  Rocket,
  TrendingUp,
  Users,
  Brain,
  Target
} from 'lucide-react'

export default function CaseStudies() {
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
              <span className="text-sm font-medium">Success Stories</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              <span className="gradient-text">Case Studies</span>
              <br />
              Coming Soon
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              We're just getting started, but amazing transformations are already in progress. 
              Our first case studies will showcase the incredible results we're achieving for our clients.
            </p>

            {/* Enhanced Visual Elements */}
            <div className="flex justify-center items-center space-x-8 mb-16">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-accent-500 to-accent-500 morphing-bg glow-pulse flex items-center justify-center">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent-500 to-primary-500 morphing-bg glow-pulse flex items-center justify-center" style={{ animationDelay: '1s' }}>
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-accent-600 to-accent-600 morphing-bg glow-pulse flex items-center justify-center" style={{ animationDelay: '2s' }}>
                <Users className="h-10 w-10 text-white" />
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
              <Rocket className="h-16 w-16 text-accent-400 mx-auto mb-8" />
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">
                Transformations in <span className="gradient-text">Progress</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                As a newly founded company, we're currently working with our first clients to deliver 
                groundbreaking AI solutions and digital transformations. Our case studies will be published 
                as we complete these exciting projects and can share the remarkable results.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                  <span className="text-gray-300">AI automation implementations in progress</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                  <span className="text-gray-300">Custom web applications under development</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                  <span className="text-gray-300">iOS apps being crafted with precision</span>
                </div>
              </div>
              <Link href="/contact" className="btn-primary group">
                Be Our Next Success Story
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-600/20 to-accent-600/20"></div>
        <div className="container-custom relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Ready to Create <span className="gradient-text">History</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join us in creating the first wave of success stories. Let's build something amazing together 
              that others will want to emulate.
            </p>
            <Link href="/contact" className="btn-primary group text-lg px-10 py-4">
              Start Your Transformation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
