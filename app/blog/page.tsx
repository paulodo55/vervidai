'use client'

import { useState, useEffect } from 'react'
import { useFadeIn, fadeInClasses } from '@/lib/hooks'
import Link from 'next/link'
import { 
  ArrowRight, 
  Sparkles,
  BookOpen,
  PenTool,
  Lightbulb,
  TrendingUp,
  Calendar,
  Clock,
  Tag,
  Zap,
  Plus
} from 'lucide-react'
import { getAllPosts } from '@/lib/blog-data'
import { BlogPost } from '@/lib/types'
import { format } from 'date-fns'

export default function Blog() {
  const isVisible = useFadeIn()
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [isGenerating, setIsGenerating] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Load posts on client side only
    try {
      const loadedPosts = getAllPosts()
      setPosts(loadedPosts)
    } catch (error) {
      console.error('Error loading blog posts:', error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const generateNewRecap = async () => {
    setIsGenerating(true)
    try {
      const response = await fetch('/api/generate-recap', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ date: new Date().toISOString() }),
      })
      
      const data = await response.json()
      if (data.success) {
        setPosts(getAllPosts()) // Refresh posts
        alert('New AI recap generated successfully!')
      } else {
        alert('Failed to generate recap: ' + data.error)
      }
    } catch (error) {
      alert('Error generating recap: ' + (error as Error).message)
    } finally {
      setIsGenerating(false)
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
          <div className={`text-center ${fadeInClasses(isVisible)}`}>
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect mb-8">
              <Sparkles className="h-4 w-4 text-accent-400 mr-2" />
              <span className="text-sm font-medium">AI Insights & Weekly Recaps</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              The <span className="gradient-text">Vervid</span>
              <br />
              <span className="gradient-text">Blog</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Weekly AI news recaps, business strategies, and cutting-edge technology perspectives. 
              Stay ahead of the curve with expert insights from the Vervid team.
            </p>

            {/* Generate New Recap Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button 
                onClick={generateNewRecap}
                disabled={isGenerating}
                className="btn-primary group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Generating AI Recap...
                  </>
                ) : (
                  <>
                    <Plus className="h-5 w-5 mr-2" />
                    Generate This Week's AI Recap
                    <Zap className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  </>
                )}
              </button>
              <Link href="/contact" className="btn-secondary">
                Subscribe for Updates
              </Link>
            </div>

            {/* Enhanced Visual Elements */}
            <div className="flex justify-center items-center space-x-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-accent-500 to-accent-500 morphing-bg glow-pulse flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 morphing-bg glow-pulse flex items-center justify-center" style={{ animationDelay: '1s' }}>
                <PenTool className="h-6 w-6 text-white" />
              </div>
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-accent-600 to-accent-600 morphing-bg glow-pulse flex items-center justify-center" style={{ animationDelay: '2s' }}>
                <Lightbulb className="h-10 w-10 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="section-padding">
        <div className="container-custom">
          {isLoading ? (
            /* Loading State */
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 morphing-bg glow-pulse flex items-center justify-center mx-auto mb-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
              </div>
              <h2 className="text-3xl font-display font-bold text-white mb-4">
                Loading AI Recaps...
              </h2>
              <p className="text-gray-300">
                Checking for the latest AI industry insights
              </p>
            </div>
          ) : posts.length > 0 ? (
            <>
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect mb-6">
                  <TrendingUp className="h-4 w-4 text-accent-400 mr-2" />
                  <span className="text-sm font-medium">Latest AI Insights</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
                  Weekly <span className="gradient-text">AI Recaps</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Stay informed with our comprehensive weekly summaries of the most significant AI developments, 
                  breakthroughs, and industry trends.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {posts.map((post, index) => (
                  <Link 
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="glass-effect p-8 rounded-2xl card-hover group relative overflow-hidden block"
                  >
                    {/* Background effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-white/5 group-hover:from-accent-500/10 group-hover:to-white/10 transition-all duration-500"></div>
                    
                    <div className="relative z-10">
                      {/* Post metadata */}
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="flex items-center text-accent-400 text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          {format(new Date(post.publishedAt), 'MMM d, yyyy')}
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime} min read
                        </div>
                      </div>

                      {/* Post title */}
                      <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:gradient-text transition-all duration-300">
                        {post.title}
                      </h3>

                      {/* Post excerpt */}
                      <p className="text-gray-300 mb-6 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="inline-flex items-center px-3 py-1 rounded-full bg-accent-500/20 text-accent-300 text-sm"
                          >
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Read more link */}
                      <div className="flex items-center text-accent-400 font-semibold">
                        Read Full Recap 
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          ) : (
            /* No posts yet - welcome message */
            <div className="max-w-4xl mx-auto">
              <div className="glass-effect p-12 rounded-3xl text-center">
                <TrendingUp className="h-16 w-16 text-accent-400 mx-auto mb-8" />
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">
                  Ready to <span className="gradient-text">Start</span>
                </h2>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Welcome to the Vervid AI Blog! Click "Generate This Week's AI Recap" above to create 
                  your first weekly summary of the most important AI developments and industry insights.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="glass-effect p-6 rounded-2xl text-left">
                    <h3 className="text-xl font-display font-bold mb-3 text-white">AI Weekly Recaps</h3>
                    <p className="text-gray-300 text-sm">
                      Comprehensive summaries of AI breakthroughs, funding rounds, product launches, 
                      and regulatory developments that matter to your business.
                    </p>
                  </div>
                  <div className="glass-effect p-6 rounded-2xl text-left">
                    <h3 className="text-xl font-display font-bold mb-3 text-white">Business Insights</h3>
                    <p className="text-gray-300 text-sm">
                      Expert analysis on how AI developments impact business strategy, competitive 
                      advantage, and market opportunities.
                    </p>
                  </div>
                </div>

                <button 
                  onClick={generateNewRecap}
                  disabled={isGenerating}
                  className="btn-primary group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isGenerating ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Generating Your First Recap...
                    </>
                  ) : (
                    <>
                      <Zap className="h-5 w-5 mr-2" />
                      Generate Your First AI Recap
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
