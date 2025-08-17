import { NextRequest, NextResponse } from 'next/server'
import { generateWeeklyAIRecap } from '@/lib/gemini-client'
import { addPost, generateSlug, estimateReadTime, getAllPosts } from '@/lib/blog-data'
import { BlogPost } from '@/lib/types'
import { format, startOfWeek, subWeeks } from 'date-fns'

// This endpoint can be used for automated weekly generation
// You could set up a cron job to call this endpoint weekly
export async function POST(request: NextRequest) {
  try {
    // Simple authentication check (in production, use proper auth)
    const authHeader = request.headers.get('authorization')
    const expectedToken = process.env.ADMIN_API_KEY || 'admin-secret-key'
    
    if (authHeader !== `Bearer ${expectedToken}`) {
      return NextResponse.json(
        { error: 'Unauthorized' }, 
        { status: 401 }
      )
    }

    const body = await request.json()
    const { weeksBack = 0 } = body // 0 = current week, 1 = last week, etc.

    // Calculate the target week
    const targetDate = subWeeks(new Date(), weeksBack)
    const weekStart = startOfWeek(targetDate, { weekStartsOn: 1 }) // Monday
    const weekOf = format(weekStart, 'MMMM d, yyyy')
    const postId = `ai-recap-${format(weekStart, 'yyyy-MM-dd')}`

    // Check if post already exists
    const existingPosts = getAllPosts()
    const existingPost = existingPosts.find(post => post.id === postId)
    
    if (existingPost) {
      return NextResponse.json({ 
        success: false, 
        error: 'Post already exists for this week',
        existingPost: existingPost
      })
    }

    // Generate the recap using OpenAI
    const recap = await generateWeeklyAIRecap(weekOf)

    // Create blog post object
    const post: BlogPost = {
      id: postId,
      title: recap.title,
      content: recap.content,
      excerpt: recap.excerpt,
      publishedAt: new Date().toISOString(),
      weekOf: weekOf,
      slug: generateSlug(recap.title),
      tags: recap.tags,
      readTime: estimateReadTime(recap.content)
    }

    // Add to blog data
    addPost(post)

    return NextResponse.json({ 
      success: true, 
      post: post,
      message: `Weekly AI recap generated successfully for week of ${weekOf}` 
    })
  } catch (error) {
    console.error('Error generating weekly recap:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to generate weekly recap',
        details: error instanceof Error ? error.message : 'Unknown error'
      }, 
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({ 
    message: 'Admin endpoint for automated weekly AI recap generation',
    usage: {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer YOUR_ADMIN_API_KEY',
        'Content-Type': 'application/json'
      },
      body: {
        weeksBack: 0 // Optional: 0 = current week, 1 = last week, etc.
      }
    },
    note: 'Set ADMIN_API_KEY in your environment variables for authentication'
  })
}
