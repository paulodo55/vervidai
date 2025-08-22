'use client'

import { useFadeIn, fadeInClasses } from '@/lib/hooks'
import Link from 'next/link'
import { 
  ArrowRight, 
  Brain, 
  TrendingUp, 
  Users, 
  Award,
  Rocket,
  Target,
  CheckCircle,
  Sparkles
} from 'lucide-react'

export default function About() {
  const isVisible = useFadeIn()

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We stay at the forefront of AI and technology to deliver cutting-edge solutions that give you a competitive advantage.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our success. We build long-term partnerships based on trust, transparency, and exceptional results.'
    },
    {
      icon: TrendingUp,
      title: 'Growth Focused',
      description: 'Every solution we create is designed to scale with your business and drive measurable growth and ROI.'
    },
    {
      icon: Award,
      title: 'Excellence Delivered',
      description: 'We maintain the highest standards in everything we do, from code quality to customer service.'
    }
  ]

  const achievements = [
    'Machine Learning',
    'iOS Development',
    'Sales & Business Development',
    'Startup Mentor & Advisor'
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className={`text-center ${fadeInClasses(isVisible)}`}>
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect mb-8">
              <Sparkles className="h-4 w-4 text-accent-400 mr-2" />
              <span className="text-sm font-medium">Our Story</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              Meet the <span className="gradient-text">Visionary</span>
              <br />
              Behind <span className="gradient-text">Vervid</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Driven by passion, powered by innovation, and dedicated to transforming businesses 
              through the intelligent application of AI and cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      {/* Paul O'Donnell Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            {/* Founder Header */}
            <div className="mb-12">
              <h3 className="text-5xl md:text-6xl font-display font-bold gradient-text mb-4">Paul O'Donnell</h3>
              <p className="text-2xl md:text-3xl text-gray-300 font-medium">Founder & CEO</p>
            </div>

            {/* Bio Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
                  <span className="gradient-text">Shaping Tomorrow's</span> Small Businesses, <span className="gradient-text">Today</span>
                </h2>
                <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                  <p>
                    Paul O'Donnell is the founder of Vervid, a consulting and development firm that empowers small businesses with world-class AI, app, and web solutions. A relentless problem solver and forward thinker, Paul is passionate about turning complex technology into practical tools that drive growth and competitive advantage.
                  </p>
                  <p>
                    With a rare mix of sales savvy and technical insight, Paul doesn't just deliver projects; he delivers outcomes. From building streamlined apps to designing intelligent digital strategies, his focus is always on helping clients scale, innovate, and win in today's fast-moving market.
                  </p>
                  <p>
                    Driven, adaptable, and laser focused on results, Paul brings an energy and vision that inspires confidence. For him, every project isn't just about solving today's problems; it's about shaping tomorrow's opportunities.
                  </p>
                </div>
              </div>

              {/* Achievements */}
              <div className="mt-12">
                <h3 className="text-2xl font-display font-bold mb-8 text-white">Core Expertise</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center justify-center space-x-3 glass-effect p-4 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-accent-400 flex-shrink-0" />
                      <span className="text-gray-300 font-medium">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Visual Section */}
      <section className="section-padding relative">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect mb-6">
              <Rocket className="h-4 w-4 text-accent-400 mr-2" />
              <span className="text-sm font-medium">The Vision</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Building the <span className="gradient-text">Future</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Vervid represents the next generation of AI consulting - where cutting-edge technology 
              meets personalized service to create transformative business solutions.
            </p>
            
            {/* Enhanced Visual Elements */}
            <div className="flex justify-center items-center space-x-12 mb-16">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-accent-500 to-accent-500 morphing-bg glow-pulse"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 morphing-bg glow-pulse opacity-50" style={{ animationDelay: '2s' }}></div>
              </div>
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-accent-600 to-accent-700 morphing-bg glow-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="relative">
                <div className="w-28 h-28 rounded-full bg-gradient-to-r from-accent-600 to-accent-600 morphing-bg glow-pulse" style={{ animationDelay: '3s' }}></div>
                <div className="absolute inset-4 rounded-full bg-gradient-to-r from-accent-400 to-accent-500 morphing-bg glow-pulse opacity-70" style={{ animationDelay: '1.5s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect mb-6">
              <Target className="h-4 w-4 text-accent-400 mr-2" />
              <span className="text-sm font-medium">Our Values</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              What Drives <span className="gradient-text">Us Forward</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our core values shape every decision we make and every solution we deliver. 
              They're not just words on a page – they're the foundation of who we are.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="glass-effect p-8 rounded-2xl card-hover group">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-accent-500 to-accent-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:gradient-text transition-all duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-600/20 to-accent-600/20"></div>
        <div className="container-custom relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Ready to <span className="gradient-text">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's have a conversation about your goals and how we can help you achieve them. 
              We are personally invested in your success and ready to make it happen.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact" className="btn-primary group text-lg px-10 py-4">
                Let's Talk Business
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
