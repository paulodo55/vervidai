import { NextRequest, NextResponse } from 'next/server'
import { getActiveSubscribers, getSubscriberCount } from '@/lib/subscribers'

export async function GET(request: NextRequest) {
  try {
    // Verify admin API key
    const { searchParams } = new URL(request.url)
    const apiKey = searchParams.get('key')
    
    if (apiKey !== process.env.ADMIN_API_KEY) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const subscribers = getActiveSubscribers()
    const count = getSubscriberCount()

    // Get recent signups (last 30 days)
    const thirtyDaysAgo = new Date()
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)
    
    const recentSignups = subscribers.filter(sub => 
      new Date(sub.subscribedAt) >= thirtyDaysAgo
    ).length

    return NextResponse.json({
      totalSubscribers: count,
      recentSignups,
      subscribers: subscribers.map(sub => ({
        email: sub.email,
        name: sub.name,
        subscribedAt: sub.subscribedAt
      }))
    })

  } catch (error) {
    console.error('Newsletter stats error:', error)
    return NextResponse.json(
      { error: 'Failed to get newsletter stats' },
      { status: 500 }
    )
  }
}
