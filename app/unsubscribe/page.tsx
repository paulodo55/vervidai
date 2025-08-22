'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react'

export default function Unsubscribe() {
  const searchParams = useSearchParams()
  const success = searchParams.get('success')
  const error = searchParams.get('error')

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          
          {success && (
            <div className="glass-effect p-12 rounded-3xl">
              <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-green-400" />
              </div>
              <h1 className="text-4xl font-display font-bold text-white mb-6">
                Successfully Unsubscribed
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                You've been removed from our weekly AI newsletter. We're sorry to see you go!
              </p>
              <p className="text-gray-400 mb-8">
                If you change your mind, you can always subscribe again from our website.
              </p>
              <Link href="/" className="btn-primary group">
                Return to Homepage
              </Link>
            </div>
          )}

          {error === 'invalid' && (
            <div className="glass-effect p-12 rounded-3xl">
              <div className="w-20 h-20 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-6">
                <XCircle className="h-10 w-10 text-red-400" />
              </div>
              <h1 className="text-4xl font-display font-bold text-white mb-6">
                Invalid Link
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                The unsubscribe link appears to be invalid or incomplete.
              </p>
              <p className="text-gray-400 mb-8">
                Please try clicking the unsubscribe link from your email again, or contact us for assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary">
                  Contact Support
                </Link>
                <Link href="/" className="btn-secondary">
                  Homepage
                </Link>
              </div>
            </div>
          )}

          {error === 'notfound' && (
            <div className="glass-effect p-12 rounded-3xl">
              <div className="w-20 h-20 rounded-full bg-yellow-500/20 flex items-center justify-center mx-auto mb-6">
                <AlertCircle className="h-10 w-10 text-yellow-400" />
              </div>
              <h1 className="text-4xl font-display font-bold text-white mb-6">
                Already Unsubscribed
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                It looks like you're already unsubscribed from our newsletter.
              </p>
              <p className="text-gray-400 mb-8">
                You won't receive any more emails from us. If you'd like to subscribe again, visit our website.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary">
                  Subscribe Again
                </Link>
                <Link href="/" className="btn-secondary">
                  Homepage
                </Link>
              </div>
            </div>
          )}

          {error === 'system' && (
            <div className="glass-effect p-12 rounded-3xl">
              <div className="w-20 h-20 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-6">
                <XCircle className="h-10 w-10 text-red-400" />
              </div>
              <h1 className="text-4xl font-display font-bold text-white mb-6">
                System Error
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We encountered a technical issue processing your unsubscribe request.
              </p>
              <p className="text-gray-400 mb-8">
                Please try again later or contact our support team for assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary">
                  Contact Support
                </Link>
                <Link href="/" className="btn-secondary">
                  Homepage
                </Link>
              </div>
            </div>
          )}

          {!success && !error && (
            <div className="glass-effect p-12 rounded-3xl">
              <h1 className="text-4xl font-display font-bold text-white mb-6">
                Newsletter Unsubscribe
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                To unsubscribe from our weekly AI newsletter, please use the unsubscribe link from your email.
              </p>
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}
