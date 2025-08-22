// Simple JSON database that works with Vercel's serverless environment
// In production, you'd want to use a proper database like Vercel KV or PostgreSQL

export interface Subscriber {
  email: string
  name: string
  subscribedAt: string
  isActive: boolean
  unsubscribeToken: string
}

// For Vercel deployment, we'll use environment variables to store subscriber data temporarily
// This is a simple solution - for production you'd want a real database

let subscribers: Subscriber[] = []

export function getSubscribers(): Subscriber[] {
  // In a real app, this would fetch from a database
  // For now, return the in-memory array
  return subscribers
}

export function addSubscriber(email: string, name: string): boolean {
  try {
    // Check if already subscribed
    if (subscribers.some(sub => sub.email.toLowerCase() === email.toLowerCase())) {
      return false // Already subscribed
    }

    const newSubscriber: Subscriber = {
      email: email.toLowerCase(),
      name,
      subscribedAt: new Date().toISOString(),
      isActive: true,
      unsubscribeToken: generateUnsubscribeToken()
    }

    subscribers.push(newSubscriber)
    
    // Log for debugging
    console.log(`Added subscriber: ${email}, total: ${subscribers.length}`)
    
    return true
  } catch (error) {
    console.error('Error adding subscriber:', error)
    return false
  }
}

export function unsubscribeByToken(token: string): boolean {
  try {
    const subscriber = subscribers.find(sub => sub.unsubscribeToken === token)
    
    if (!subscriber) {
      return false
    }

    subscriber.isActive = false
    console.log(`Unsubscribed: ${subscriber.email}`)
    return true
  } catch (error) {
    console.error('Error unsubscribing:', error)
    return false
  }
}

export function getActiveSubscribers(): Subscriber[] {
  return subscribers.filter(sub => sub.isActive)
}

export function getSubscriberCount(): number {
  return getActiveSubscribers().length
}

function generateUnsubscribeToken(): string {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15)
}

// Initialize with some test data for development
if (process.env.NODE_ENV === 'development') {
  // Add a test subscriber for development
  if (subscribers.length === 0) {
    addSubscriber('test@example.com', 'Test User')
  }
}
