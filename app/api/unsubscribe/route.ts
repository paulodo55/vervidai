import { NextRequest, NextResponse } from 'next/server'
import { unsubscribeByToken } from '@/lib/subscribers'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const token = searchParams.get('token')

    if (!token) {
      return NextResponse.redirect(new URL('/unsubscribe?error=invalid', request.url))
    }

    const success = unsubscribeByToken(token)

    if (success) {
      return NextResponse.redirect(new URL('/unsubscribe?success=true', request.url))
    } else {
      return NextResponse.redirect(new URL('/unsubscribe?error=notfound', request.url))
    }

  } catch (error) {
    console.error('Unsubscribe error:', error)
    return NextResponse.redirect(new URL('/unsubscribe?error=system', request.url))
  }
}
