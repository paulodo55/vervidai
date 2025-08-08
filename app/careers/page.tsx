'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { 
  ArrowRight, 
  Sparkles,
  Users,
  Rocket,
  Heart,
  Zap,
  Target
} from 'lucide-react'

export default function Careers() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

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
              <span className="text-sm font-medium">Join Our Mission</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              Build the <span className="gradient-text">Future</span>
              <br />
              With <span className="gradient-text">Us</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Join Vervid as we grow from a startup to the leading AI consulting firm. 
              Be part of transforming businesses and shaping the future of technology.
            </p>

            {/* Enhanced Visual Elements */}
            <div className="flex justify-center items-center space-x-8 mb-16">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 morphing-bg glow-pulse flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent-500 to-primary-500 morphing-bg glow-pulse flex items-center justify-center" style={{ animationDelay: '1s' }}>
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 morphing-bg glow-pulse flex items-center justify-center" style={{ animationDelay: '2s' }}>
                <Rocket className="h-10 w-10 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Stage Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="glass-effect p-12 rounded-3xl text-center">
              <Zap className="h-16 w-16 text-primary-400 mx-auto mb-8" />
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">
                Growing <span className="gradient-text">Fast</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                As a newly founded company with big ambitions, we're building our dream team. 
                While we don't have open positions right now, we're always looking for exceptional 
                talent who shares our vision of democratizing AI for small businesses.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="glass-effect p-6 rounded-2xl text-left">
                  <Target className="h-8 w-8 text-primary-400 mb-4" />
                  <h3 className="text-xl font-display font-bold mb-3 text-white">Future Opportunities</h3>
                  <div className="space-y-2 text-gray-300 text-sm">
                    <div>• AI/ML Engineers</div>
                    <div>• Full-Stack Developers</div>
                    <div>• iOS Developers</div>
                    <div>• Business Development</div>
                    <div>• UI/UX Designers</div>
                  </div>
                </div>
                <div className="glass-effect p-6 rounded-2xl text-left">
                  <Heart className="h-8 w-8 text-accent-400 mb-4" />
                  <h3 className="text-xl font-display font-bold mb-3 text-white">Our Culture</h3>
                  <div className="space-y-2 text-gray-300 text-sm">
                    <div>• Innovation-first mindset</div>
                    <div>• Remote-friendly environment</div>
                    <div>• Rapid growth opportunities</div>
                    <div>• Direct impact on success</div>
                    <div>• Cutting-edge technology</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-display font-bold mb-4 text-white">
                  Why Join <span className="gradient-text">Vervid</span>?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold gradient-text mb-2">Ground Floor</div>
                    <div className="text-gray-300 text-sm">Join us at the beginning and grow with the company</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold gradient-text mb-2">High Impact</div>
                    <div className="text-gray-300 text-sm">Every contribution directly shapes our success</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold gradient-text mb-2">AI Focus</div>
                    <div className="text-gray-300 text-sm">Work on cutting-edge AI and automation projects</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary group">
                  Express Interest
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link href="/about" className="btn-secondary">
                  Meet the Founder
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and the kind of people we want to work with.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Innovation', desc: 'Push boundaries and explore new possibilities' },
              { title: 'Excellence', desc: 'Deliver quality that exceeds expectations' },
              { title: 'Growth', desc: 'Continuously learn and evolve together' },
              { title: 'Impact', desc: 'Create meaningful change for our clients' }
            ].map((value, index) => (
              <div key={index} className="glass-effect p-6 rounded-2xl card-hover text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{value.title[0]}</span>
                </div>
                <h3 className="text-xl font-display font-bold mb-3 text-white">{value.title}</h3>
                <p className="text-gray-300 text-sm">{value.desc}</p>
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
              Ready to <span className="gradient-text">Grow</span> With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Even if we don't have the perfect role yet, we'd love to hear from exceptional talent. 
              Let's start a conversation about the future.
            </p>
            <Link href="/contact" className="btn-primary group text-lg px-10 py-4">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
