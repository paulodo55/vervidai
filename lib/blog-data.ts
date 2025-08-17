import { BlogPost } from './types'

// In a production environment, this would be stored in a database
// For now, we'll use a simple in-memory store that persists during development
let blogPosts: BlogPost[] = []

// Flag to track if we're in a build environment
const isBuildTime = typeof window === 'undefined' && process.env.NODE_ENV !== 'development'

export function getAllPosts(): BlogPost[] {
  try {
    return blogPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
  } catch (error) {
    console.warn('Error getting blog posts:', error)
    return []
  }
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    return blogPosts.find(post => post.slug === slug) || null
  } catch (error) {
    console.warn('Error getting blog post by slug:', error)
    return null
  }
}

export function addPost(post: BlogPost): void {
  // Check if post with same slug already exists
  const existingIndex = blogPosts.findIndex(p => p.slug === post.slug)
  if (existingIndex !== -1) {
    blogPosts[existingIndex] = post
  } else {
    blogPosts.push(post)
  }
}

export function getLatestPost(): BlogPost | null {
  const posts = getAllPosts()
  return posts.length > 0 ? posts[0] : null
}

export function getPostsByTag(tag: string): BlogPost[] {
  return blogPosts
    .filter(post => post.tags.includes(tag))
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

// Helper function to generate slug from title
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

// Helper function to estimate read time
export function estimateReadTime(content: string): number {
  const wordsPerMinute = 200
  const wordCount = content.split(/\s+/).length
  return Math.ceil(wordCount / wordsPerMinute)
}
