import { NextRequest, NextResponse } from 'next/server'
import { getActiveSubscribers, getSubscriberCount, getSubscribers, healthCheck } from '@/lib/database'

// Force dynamic rendering for this API route
export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    // Optional API key protection
    const { searchParams } = new URL(request.url)
    const apiKey = searchParams.get('key')
    const includeEmails = searchParams.get('emails') === 'true'
    
    // Require API key for sensitive data
    if (includeEmails && apiKey !== process.env.ADMIN_API_KEY) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    console.log('📊 Fetching newsletter stats...')

    // Get comprehensive stats
    const [allSubscribers, activeSubscribers, totalCount, health] = await Promise.all([
      getSubscribers(),
      getActiveSubscribers(),
      getSubscriberCount(),
      healthCheck()
    ])

    const inactiveCount = allSubscribers.length - activeSubscribers.length
    const stats = {
      database: {
        isHealthy: health.isHealthy,
        lastChecked: health.details.timestamp
      },
      subscribers: {
        total: allSubscribers.length,
        active: activeSubscribers.length,
        inactive: inactiveCount,
        activePercentage: allSubscribers.length > 0 
          ? Math.round((activeSubscribers.length / allSubscribers.length) * 100) 
          : 0
      },
      recentSignups: {
        last7Days: allSubscribers.filter(sub => {
          const signupDate = new Date(sub.subscribedAt)
          const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
          return signupDate > weekAgo
        }).length,
        last30Days: allSubscribers.filter(sub => {
          const signupDate = new Date(sub.subscribedAt)
          const monthAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
          return signupDate > monthAgo
        }).length
      },
      timestamp: new Date().toISOString()
    }

    const response: any = stats

    // Include email list only if authorized
    if (includeEmails && apiKey === process.env.ADMIN_API_KEY) {
      response.subscriberList = activeSubscribers.map(sub => ({
        email: sub.email,
        name: sub.name,
        subscribedAt: sub.subscribedAt,
        isActive: sub.isActive
      }))
    }

    console.log(`✅ Stats retrieved: ${activeSubscribers.length} active subscribers`)
    return NextResponse.json(response)

  } catch (error) {
    console.error('❌ Stats API error:', error)
    return NextResponse.json(
      { 
        error: 'Failed to fetch stats',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    )
  }
}
