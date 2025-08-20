'use client'

import { useEffect, useState } from 'react'
import { Shield, Eye, Lock, Users, Mail, Calendar } from 'lucide-react'

export default function Privacy() {
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
              <Shield className="h-4 w-4 text-accent-400 mr-2" />
              <span className="text-sm font-medium">Your Privacy Matters</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              <span className="gradient-text">Privacy</span>
              <br />
              Policy
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              We take your privacy seriously. Here's how we collect, use, and protect your information.
            </p>
            
            <div className="text-gray-400 text-sm">
              Last updated: August 2025
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              
              {/* Information We Collect */}
              <div className="glass-effect p-8 rounded-2xl">
                <div className="flex items-center mb-6">
                  <Eye className="h-8 w-8 text-accent-400 mr-4" />
                  <h2 className="text-3xl font-display font-bold text-white">Information We Collect</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p><strong className="text-white">Personal Information:</strong> When you contact us through our website, we collect information such as your name, email address, company name, and any message you provide.</p>
                  <p><strong className="text-white">Usage Data:</strong> We may collect information about how you access and use our website, including your IP address, browser type, and pages visited.</p>
                  <p><strong className="text-white">Cookies:</strong> We use cookies and similar technologies to enhance your browsing experience and analyze website traffic.</p>
                </div>
              </div>

              {/* How We Use Information */}
              <div className="glass-effect p-8 rounded-2xl">
                <div className="flex items-center mb-6">
                  <Users className="h-8 w-8 text-accent-400 mr-4" />
                  <h2 className="text-3xl font-display font-bold text-white">How We Use Your Information</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>We use the information we collect to:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• Respond to your inquiries and provide customer support</li>
                    <li>• Communicate with you about our services</li>
                    <li>• Improve our website and services</li>
                    <li>• Send you updates and marketing communications (with your consent)</li>
                    <li>• Comply with legal obligations</li>
                  </ul>
                </div>
              </div>

              {/* Information Protection */}
              <div className="glass-effect p-8 rounded-2xl">
                <div className="flex items-center mb-6">
                  <Lock className="h-8 w-8 text-accent-400 mr-4" />
                  <h2 className="text-3xl font-display font-bold text-white">How We Protect Your Information</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>We implement appropriate security measures to protect your personal information:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• SSL encryption for data transmission</li>
                    <li>• Secure servers and databases</li>
                    <li>• Limited access to personal information</li>
                    <li>• Regular security audits and updates</li>
                    <li>• Industry-standard security practices</li>
                  </ul>
                </div>
              </div>

              {/* Information Sharing */}
              <div className="glass-effect p-8 rounded-2xl">
                <div className="flex items-center mb-6">
                  <Shield className="h-8 w-8 text-accent-400 mr-4" />
                  <h2 className="text-3xl font-display font-bold text-white">Information Sharing</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>We do not sell, trade, or otherwise transfer your personal information to third parties, except:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• With your explicit consent</li>
                    <li>• To trusted service providers who assist in operating our website</li>
                    <li>• When required by law or to protect our rights</li>
                    <li>• In connection with a business transfer or merger</li>
                  </ul>
                </div>
              </div>

              {/* Your Rights */}
              <div className="glass-effect p-8 rounded-2xl">
                <div className="flex items-center mb-6">
                  <Users className="h-8 w-8 text-accent-400 mr-4" />
                  <h2 className="text-3xl font-display font-bold text-white">Your Rights</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>You have the right to:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• Access the personal information we hold about you</li>
                    <li>• Request correction of inaccurate information</li>
                    <li>• Request deletion of your personal information</li>
                    <li>• Opt-out of marketing communications</li>
                    <li>• Object to the processing of your information</li>
                  </ul>
                  <p className="mt-4">To exercise these rights, please contact us at <a href="mailto:hello@vervid.com" className="text-accent-400 hover:text-accent-300">hello@vervid.com</a>.</p>
                </div>
              </div>

              {/* Cookies */}
              <div className="glass-effect p-8 rounded-2xl">
                <div className="flex items-center mb-6">
                  <Calendar className="h-8 w-8 text-accent-400 mr-4" />
                  <h2 className="text-3xl font-display font-bold text-white">Cookies and Tracking</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>We use cookies and similar technologies to:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• Remember your preferences</li>
                    <li>• Analyze website traffic and usage</li>
                    <li>• Provide personalized content</li>
                    <li>• Improve website functionality</li>
                  </ul>
                  <p className="mt-4">You can control cookie settings through your browser preferences.</p>
                </div>
              </div>

              {/* Contact */}
              <div className="glass-effect p-8 rounded-2xl">
                <div className="flex items-center mb-6">
                  <Mail className="h-8 w-8 text-accent-400 mr-4" />
                  <h2 className="text-3xl font-display font-bold text-white">Contact Us</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>If you have any questions about this Privacy Policy, please contact us:</p>
                  <div className="space-y-2 ml-4">
                    <p>Email: <a href="mailto:hello@vervid.com" className="text-accent-400 hover:text-accent-300">hello@vervid.com</a></p>
                    <p>Website: <a href="https://vervid.com" className="text-accent-400 hover:text-accent-300">vervid.com</a></p>
                  </div>
                </div>
              </div>

              {/* Updates */}
              <div className="glass-effect p-8 rounded-2xl">
                <div className="flex items-center mb-6">
                  <Calendar className="h-8 w-8 text-accent-400 mr-4" />
                  <h2 className="text-3xl font-display font-bold text-white">Policy Updates</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically to stay informed about how we protect your information.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
