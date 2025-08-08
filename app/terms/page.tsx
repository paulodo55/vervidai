'use client'

import { useEffect, useState } from 'react'
import { FileText, Scale, AlertTriangle, Shield, Users, Mail } from 'lucide-react'

export default function Terms() {
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
              <FileText className="h-4 w-4 text-primary-400 mr-2" />
              <span className="text-sm font-medium">Legal Terms</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              <span className="gradient-text">Terms</span> of
              <br />
              <span className="gradient-text">Service</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Please read these terms carefully before using our services.
            </p>
            
            <div className="text-gray-400 text-sm">
              Last updated: December 2024
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              
              {/* Agreement */}
              <div className="glass-effect p-8 rounded-2xl">
                <div className="flex items-center mb-6">
                  <Scale className="h-8 w-8 text-primary-400 mr-4" />
                  <h2 className="text-3xl font-display font-bold text-white">Agreement to Terms</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>By accessing and using Vervid's website and services, you accept and agree to be bound by the terms and provision of this agreement.</p>
                  <p>If you do not agree to abide by the above, please do not use this service.</p>
                </div>
              </div>

              {/* Services */}
              <div className="glass-effect p-8 rounded-2xl">
                <div className="flex items-center mb-6">
                  <Users className="h-8 w-8 text-accent-400 mr-4" />
                  <h2 className="text-3xl font-display font-bold text-white">Our Services</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>Vervid provides:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• AI consulting and implementation services</li>
                    <li>• Custom web development solutions</li>
                    <li>• iOS application development</li>
                    <li>• Digital transformation consulting</li>
                    <li>• Business automation solutions</li>
                  </ul>
                  <p>All services are provided subject to these terms and any additional agreements we may enter into with you.</p>
                </div>
              </div>

              {/* User Responsibilities */}
              <div className="glass-effect p-8 rounded-2xl">
                <div className="flex items-center mb-6">
                  <Shield className="h-8 w-8 text-primary-400 mr-4" />
                  <h2 className="text-3xl font-display font-bold text-white">User Responsibilities</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>When using our services, you agree to:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• Provide accurate and complete information</li>
                    <li>• Use our services for lawful purposes only</li>
                    <li>• Respect intellectual property rights</li>
                    <li>• Not interfere with or disrupt our services</li>
                    <li>• Comply with all applicable laws and regulations</li>
                  </ul>
                </div>
              </div>

              {/* Intellectual Property */}
              <div className="glass-effect p-8 rounded-2xl">
                <div className="flex items-center mb-6">
                  <FileText className="h-8 w-8 text-accent-400 mr-4" />
                  <h2 className="text-3xl font-display font-bold text-white">Intellectual Property</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>The service and its original content, features, and functionality are and will remain the exclusive property of Vervid and its licensors.</p>
                  <p>The service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.</p>
                  <p>Any custom work developed for clients will be governed by separate project agreements.</p>
                </div>
              </div>

              {/* Disclaimers */}
              <div className="glass-effect p-8 rounded-2xl">
                <div className="flex items-center mb-6">
                  <AlertTriangle className="h-8 w-8 text-primary-400 mr-4" />
                  <h2 className="text-3xl font-display font-bold text-white">Disclaimers</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>Our services are provided "as is" without any warranty of any kind. We disclaim all warranties, whether express or implied, including:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• Warranties of merchantability</li>
                    <li>• Fitness for a particular purpose</li>
                    <li>• Non-infringement</li>
                    <li>• Uninterrupted or error-free operation</li>
                  </ul>
                  <p>We do not warrant that our services will meet your specific requirements or that any defects will be corrected.</p>
                </div>
              </div>

              {/* Limitation of Liability */}
              <div className="glass-effect p-8 rounded-2xl">
                <div className="flex items-center mb-6">
                  <Scale className="h-8 w-8 text-accent-400 mr-4" />
                  <h2 className="text-3xl font-display font-bold text-white">Limitation of Liability</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>In no event shall Vervid, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services.</p>
                  <p>Our total liability to you for all claims arising from or related to our services shall not exceed the amount paid by you to us in the twelve months preceding the claim.</p>
                </div>
              </div>

              {/* Termination */}
              <div className="glass-effect p-8 rounded-2xl">
                <div className="flex items-center mb-6">
                  <AlertTriangle className="h-8 w-8 text-primary-400 mr-4" />
                  <h2 className="text-3xl font-display font-bold text-white">Termination</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
                  <p>Upon termination, your right to use the service will cease immediately.</p>
                  <p>All provisions of the Terms which by their nature should survive termination shall survive termination.</p>
                </div>
              </div>

              {/* Governing Law */}
              <div className="glass-effect p-8 rounded-2xl">
                <div className="flex items-center mb-6">
                  <Scale className="h-8 w-8 text-accent-400 mr-4" />
                  <h2 className="text-3xl font-display font-bold text-white">Governing Law</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>These Terms shall be interpreted and governed by the laws of the State of California, United States, without regard to its conflict of law provisions.</p>
                  <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.</p>
                </div>
              </div>

              {/* Changes */}
              <div className="glass-effect p-8 rounded-2xl">
                <div className="flex items-center mb-6">
                  <FileText className="h-8 w-8 text-primary-400 mr-4" />
                  <h2 className="text-3xl font-display font-bold text-white">Changes to Terms</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time.</p>
                  <p>If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.</p>
                  <p>By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms.</p>
                </div>
              </div>

              {/* Contact */}
              <div className="glass-effect p-8 rounded-2xl">
                <div className="flex items-center mb-6">
                  <Mail className="h-8 w-8 text-accent-400 mr-4" />
                  <h2 className="text-3xl font-display font-bold text-white">Contact Information</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>If you have any questions about these Terms of Service, please contact us:</p>
                  <div className="space-y-2 ml-4">
                    <p>Email: <a href="mailto:hello@vervid.com" className="text-primary-400 hover:text-primary-300">hello@vervid.com</a></p>
                    <p>Website: <a href="https://vervid.com" className="text-primary-400 hover:text-primary-300">vervid.com</a></p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
