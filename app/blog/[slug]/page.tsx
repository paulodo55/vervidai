'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { 
  ArrowLeft, 
  Calendar,
  Clock,
  Tag,
  Share2,
  Sparkles,
  TrendingUp
} from 'lucide-react'
import { getPostBySlug } from '@/lib/blog-data'
import { BlogPost } from '@/lib/types'
import { format } from 'date-fns'

// Simple markdown parser for basic formatting
function parseMarkdown(content: string): string {
  return content
    // Headers
    .replace(/^### (.*$)/gim, '<h3 class="text-2xl font-display font-bold text-white mb-4 mt-8">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-3xl font-display font-bold text-white mb-6 mt-10">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="text-4xl font-display font-bold text-white mb-8 mt-12">$1</h1>')
    // Bold
    .replace(/\*\*(.*)\*\*/gim, '<strong class="font-bold text-white">$1</strong>')
    // Italic
    .replace(/\*(.*)\*/gim, '<em class="italic text-gray-300">$1</em>')
    // Links
    .replace(/\[([^\]]*)\]\(([^\)]*)\)/gim, '<a href="$2" class="text-accent-400 hover:text-accent-300 underline transition-colors duration-300" target="_blank" rel="noopener noreferrer">$1</a>')
    // Lists
    .replace(/^\* (.*$)/gim, '<li class="text-gray-300 mb-2 ml-4">• $1</li>')
    // Paragraphs
    .replace(/\n\n/gim, '</p><p class="text-gray-300 mb-6 leading-relaxed">')
    // Line breaks
    .replace(/\n/gim, '<br />')
}

export default function BlogPost() {
  const params = useParams()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (params.slug) {
      const foundPost = getPostBySlug(params.slug as string)
      setPost(foundPost)
      setIsVisible(true)
    }
  }, [params.slug])

  if (!post) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 morphing-bg glow-pulse flex items-center justify-center mx-auto mb-8">
            <TrendingUp className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-display font-bold text-white mb-4">
            Post Not Found
          </h1>
          <p className="text-gray-300 mb-8">
            The blog post you're looking for doesn't exist or may have been moved.
          </p>
          <Link href="/blog" className="btn-primary group">
            <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  const sharePost = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      })
    } else {
      // Fallback - copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    }
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Back to Blog */}
            <Link 
              href="/blog" 
              className="inline-flex items-center text-accent-400 hover:text-accent-300 font-medium mb-8 transition-colors duration-300 group"
            >
              <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Blog
            </Link>

            {/* Post metadata */}
            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect">
                <Sparkles className="h-4 w-4 text-accent-400 mr-2" />
                <span className="text-sm font-medium">AI Weekly Recap</span>
              </div>
              <div className="flex items-center text-accent-400 text-sm">
                <Calendar className="h-4 w-4 mr-2" />
                {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <Clock className="h-4 w-4 mr-2" />
                {post.readTime} min read
              </div>
              <button 
                onClick={sharePost}
                className="flex items-center text-gray-400 hover:text-accent-400 text-sm transition-colors duration-300"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </button>
            </div>
            
            {/* Post title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-8 leading-tight">
              <span className="gradient-text">{post.title}</span>
            </h1>
            
            {/* Post excerpt */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl leading-relaxed">
              {post.excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-12">
              {post.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-accent-500/20 text-accent-300 font-medium"
                >
                  <Tag className="h-4 w-4 mr-2" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <article className="glass-effect p-8 md:p-12 rounded-3xl">
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ 
                  __html: `<p class="text-gray-300 mb-6 leading-relaxed">${parseMarkdown(post.content)}</p>`
                }}
              />
            </article>

            {/* Post footer */}
            <div className="mt-12 p-8 glass-effect rounded-3xl">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <h3 className="text-2xl font-display font-bold text-white mb-2">
                    Stay Updated with AI Insights
                  </h3>
                  <p className="text-gray-300">
                    Get weekly AI recaps and business insights delivered to your inbox.
                  </p>
                </div>
                <div className="flex gap-4">
                  <button 
                    onClick={sharePost}
                    className="btn-secondary"
                  >
                    <Share2 className="h-5 w-5 mr-2" />
                    Share Article
                  </button>
                  <Link href="/contact" className="btn-primary">
                    Subscribe
                  </Link>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-12 text-center">
              <Link 
                href="/blog" 
                className="btn-primary group"
              >
                <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
                View All AI Recaps
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
