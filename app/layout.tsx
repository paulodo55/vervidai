import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { GoogleAnalytics } from '@/lib/analytics'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://vervidai.com'),
  title: 'Vervid - AI Consulting & Digital Innovation',
  description: 'Transform your business with cutting-edge AI consulting, custom web development, and iOS app solutions. Expert guidance for small companies to gain competitive advantage.',
  keywords: 'AI consulting, machine learning, web development, iOS apps, digital transformation, business automation',
  authors: [{ name: 'Vervid Team' }],
  creator: 'Vervid',
  openGraph: {
    title: 'Vervid - AI Consulting & Digital Innovation',
    description: 'Transform your business with cutting-edge AI consulting and custom digital solutions.',
    url: 'https://vervidai.com',
    siteName: 'Vervid',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vervid - AI Consulting & Digital Innovation',
    description: 'Transform your business with cutting-edge AI consulting and custom digital solutions.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen">
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        <div className="particles-bg">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
              }}
            />
          ))}
        </div>
        <Navbar />
        <main className="relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
