'use client'

import { useEffect, useState } from 'react'
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
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

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
    'AI & Machine Learning Expert',
    'Full-Stack Developer',
    'iOS App Development Specialist',
    'Digital Strategy Consultant',
    'Sales & Business Development',
    'Startup Mentor & Advisor'
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect mb-8">
              <Sparkles className="h-4 w-4 text-primary-400 mr-2" />
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Profile Image Placeholder */}
            <div className="relative">
              <div className="aspect-square rounded-3xl glass-effect p-8 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 group-hover:from-primary-500/30 group-hover:to-accent-500/30 transition-all duration-500"></div>
                <div className="relative z-10 text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center">
                    <Users className="h-16 w-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-display font-bold gradient-text mb-2">Paul O'Donnell</h3>
                  <p className="text-gray-300">Founder & CEO</p>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-400/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-400/20 rounded-full blur-xl"></div>
              </div>
            </div>

            {/* Bio Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                  Young, <span className="gradient-text">Hungry</span>, and 
                  <span className="gradient-text"> Ready</span>
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Paul O'Donnell is an AI fanatic and technology visionary who founded Vervid with a simple yet powerful mission: 
                  to democratize access to cutting-edge AI and digital solutions for small businesses.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  As a sales mastermind with deep technical expertise, Paul combines his passion for artificial intelligence 
                  with an unwavering commitment to client success. He's not just building solutions – he's building the future 
                  of how businesses operate and compete.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  With his unique blend of technical prowess and business acumen, Paul is ready to do whatever it takes 
                  to help your business not just survive, but absolutely dominate in the digital age.
                </p>
              </div>

              {/* Achievements */}
              <div>
                <h3 className="text-2xl font-display font-bold mb-4 text-white">Expertise & Achievements</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary-400 flex-shrink-0" />
                      <span className="text-gray-300">{achievement}</span>
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
              <Rocket className="h-4 w-4 text-primary-400 mr-2" />
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
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 morphing-bg glow-pulse"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-500 to-primary-500 morphing-bg glow-pulse opacity-50" style={{ animationDelay: '2s' }}></div>
              </div>
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-accent-600 to-primary-600 morphing-bg glow-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="relative">
                <div className="w-28 h-28 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 morphing-bg glow-pulse" style={{ animationDelay: '3s' }}></div>
                <div className="absolute inset-4 rounded-full bg-gradient-to-r from-accent-400 to-primary-400 morphing-bg glow-pulse opacity-70" style={{ animationDelay: '1.5s' }}></div>
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
              <Target className="h-4 w-4 text-primary-400 mr-2" />
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
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-accent-600/20"></div>
        <div className="container-custom relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Ready to <span className="gradient-text">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's have a conversation about your goals and how we can help you achieve them. 
              Paul is personally invested in your success and ready to make it happen.
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
