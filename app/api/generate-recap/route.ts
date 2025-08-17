import { NextRequest, NextResponse } from 'next/server'
import { generateWeeklyAIRecap } from '@/lib/gemini-client'
import { addPost, generateSlug, estimateReadTime } from '@/lib/blog-data'
import { BlogPost } from '@/lib/types'
import { format, startOfWeek } from 'date-fns'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { date } = body

    // Calculate week of date
    const targetDate = date ? new Date(date) : new Date()
    const weekStart = startOfWeek(targetDate, { weekStartsOn: 1 }) // Monday
    const weekOf = format(weekStart, 'MMMM d, yyyy')

    // Generate the recap using OpenAI
    const recap = await generateWeeklyAIRecap(weekOf)

    // Create blog post object
    const post: BlogPost = {
      id: `ai-recap-${format(weekStart, 'yyyy-MM-dd')}`,
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
      message: 'Weekly AI recap generated successfully' 
    })
  } catch (error) {
    console.error('Error generating recap:', error)
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
    message: 'Use POST to generate a new weekly AI recap',
    example: {
      method: 'POST',
      body: {
        date: '2024-01-15' // Optional: specific date, defaults to current week
      }
    }
  })
}
