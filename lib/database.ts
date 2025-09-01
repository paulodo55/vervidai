// Permanent database solution using Redis
// Optimized for Vercel serverless environment with connection pooling and error handling

import { createClient } from 'redis'
import type { RedisClientType } from 'redis'

export interface Subscriber {
  email: string
  name: string
  subscribedAt: string
  isActive: boolean
  unsubscribeToken: string
}

// Redis client with optimized configuration
let redis: RedisClientType | null = null
let isConnecting = false

async function getRedisClient(): Promise<RedisClientType> {
  if (redis && redis.isReady) {
    return redis
  }

  if (isConnecting) {
    // Wait for existing connection attempt
    while (isConnecting) {
      await new Promise(resolve => setTimeout(resolve, 100))
    }
    if (redis && redis.isReady) {
      return redis
    }
  }

  isConnecting = true
  
  try {
    const redisUrl = process.env.REDIS_URL || process.env.UPSTASH_REDIS_REST_URL
    if (!redisUrl) {
      throw new Error('Redis URL not found in environment variables')
    }

    redis = createClient({
      url: redisUrl,
      socket: {
        connectTimeout: 10000,
      },
    })

    redis.on('error', (error) => {
      console.error('Redis client error:', error)
    })

    redis.on('connect', () => {
      console.log('Redis client connected')
    })

    redis.on('disconnect', () => {
      console.log('Redis client disconnected')
    })

    await redis.connect()
    console.log('Successfully connected to Redis')
    
    return redis
  } catch (error) {
    console.error('Failed to connect to Redis:', error)
    throw new Error(`Redis connection failed: ${error instanceof Error ? error.message : 'Unknown error'}`)
  } finally {
    isConnecting = false
  }
}

// Redis Keys
const SUBSCRIBERS_KEY = 'subscribers'
const SUBSCRIBER_COUNT_KEY = 'subscriber_count'

/**
 * Get all subscribers from Redis storage with optimized error handling
 */
export async function getSubscribers(): Promise<Subscriber[]> {
  try {
    const client = await getRedisClient()
    const subscribersData = await client.get(SUBSCRIBERS_KEY)
    
    if (subscribersData) {
      const parsed = JSON.parse(subscribersData)
      // Validate data structure
      if (Array.isArray(parsed)) {
        return parsed.filter(sub => sub.email && sub.name && sub.subscribedAt)
      }
    }
    return []
  } catch (error) {
    console.error('Error fetching subscribers from Redis:', error)
    return []
  }
}

/**
 * Add a new subscriber to Redis storage
 */
export async function addSubscriber(email: string, name: string): Promise<boolean> {
  try {
    // Validate input
    if (!email || !name || !email.includes('@')) {
      console.error('Invalid subscriber data:', { email, name })
      return false
    }

    const client = await getRedisClient()
    const subscribers = await getSubscribers()
    
    // Check if already subscribed (case insensitive)
    const normalizedEmail = email.toLowerCase().trim()
    if (subscribers.some(sub => sub.email.toLowerCase() === normalizedEmail)) {
      console.log(`Subscriber already exists: ${email}`)
      return false
    }

    const newSubscriber: Subscriber = {
      email: normalizedEmail,
      name: name.trim(),
      subscribedAt: new Date().toISOString(),
      isActive: true,
      unsubscribeToken: generateUnsubscribeToken()
    }

    subscribers.push(newSubscriber)
    
    // Atomic update to Redis
    const pipeline = client.multi()
    pipeline.set(SUBSCRIBERS_KEY, JSON.stringify(subscribers))
    pipeline.set(SUBSCRIBER_COUNT_KEY, subscribers.filter(sub => sub.isActive).length.toString())
    await pipeline.exec()
    
    console.log(`✅ Added subscriber: ${email}, total active: ${subscribers.filter(sub => sub.isActive).length}`)
    return true
  } catch (error) {
    console.error('❌ Error adding subscriber to Redis:', error)
    return false
  }
}

/**
 * Unsubscribe a user by their token
 */
export async function unsubscribeByToken(token: string): Promise<boolean> {
  try {
    if (!token || token.trim().length === 0) {
      console.error('Invalid unsubscribe token')
      return false
    }

    const client = await getRedisClient()
    const subscribers = await getSubscribers()
    const subscriber = subscribers.find(sub => sub.unsubscribeToken === token.trim())
    
    if (!subscriber) {
      console.log(`Unsubscribe token not found: ${token}`)
      return false
    }

    if (!subscriber.isActive) {
      console.log(`Subscriber already inactive: ${subscriber.email}`)
      return true // Already unsubscribed, return success
    }

    subscriber.isActive = false
    
    // Atomic update to Redis
    const pipeline = client.multi()
    pipeline.set(SUBSCRIBERS_KEY, JSON.stringify(subscribers))
    pipeline.set(SUBSCRIBER_COUNT_KEY, subscribers.filter(sub => sub.isActive).length.toString())
    await pipeline.exec()
    
    console.log(`✅ Unsubscribed: ${subscriber.email}`)
    return true
  } catch (error) {
    console.error('❌ Error unsubscribing from Redis:', error)
    return false
  }
}

/**
 * Get only active subscribers
 */
export async function getActiveSubscribers(): Promise<Subscriber[]> {
  try {
    const subscribers = await getSubscribers()
    const activeSubscribers = subscribers.filter(sub => sub.isActive && sub.email && sub.name)
    console.log(`📊 Active subscribers: ${activeSubscribers.length}`)
    return activeSubscribers
  } catch (error) {
    console.error('❌ Error fetching active subscribers from Redis:', error)
    return []
  }
}

/**
 * Get count of active subscribers with caching
 */
export async function getSubscriberCount(): Promise<number> {
  try {
    const client = await getRedisClient()
    const cachedCount = await client.get(SUBSCRIBER_COUNT_KEY)
    
    if (cachedCount) {
      const count = parseInt(cachedCount, 10)
      if (!isNaN(count)) {
        return count
      }
    }
    
    // Fallback to counting active subscribers
    const activeSubscribers = await getActiveSubscribers()
    const count = activeSubscribers.length
    
    // Update cache
    await client.set(SUBSCRIBER_COUNT_KEY, count.toString())
    return count
  } catch (error) {
    console.error('❌ Error getting subscriber count from Redis:', error)
    return 0
  }
}

/**
 * Migrate data from environment variable to Redis storage
 * Call this once to migrate existing data
 */
export async function migrateFromEnvToKV(): Promise<void> {
  try {
    const client = await getRedisClient()
    
    // Check if we already have data in Redis
    const existingSubscribers = await getSubscribers()
    if (existingSubscribers.length > 0) {
      console.log('✅ Redis already has data, skipping migration')
      return
    }

    // Try to get data from environment variable
    const envData = process.env.SUBSCRIBERS_DATA
    if (!envData || envData.trim() === '[]') {
      console.log('📭 No subscriber data in environment variables')
      return
    }

    try {
      const subscribersFromEnv: Subscriber[] = JSON.parse(envData)
      
      // Validate and clean the data
      const validSubscribers = subscribersFromEnv.filter(sub => 
        sub.email && 
        sub.name && 
        sub.email.includes('@') &&
        typeof sub.isActive === 'boolean'
      ).map(sub => ({
        ...sub,
        email: sub.email.toLowerCase().trim(),
        name: sub.name.trim(),
        unsubscribeToken: sub.unsubscribeToken || generateUnsubscribeToken()
      }))

      if (validSubscribers.length > 0) {
        // Atomic migration
        const pipeline = client.multi()
        pipeline.set(SUBSCRIBERS_KEY, JSON.stringify(validSubscribers))
        pipeline.set(SUBSCRIBER_COUNT_KEY, validSubscribers.filter(sub => sub.isActive).length.toString())
        await pipeline.exec()
        
        console.log(`🚀 Successfully migrated ${validSubscribers.length} subscribers from env to Redis`)
        console.log(`📊 Active subscribers: ${validSubscribers.filter(sub => sub.isActive).length}`)
      } else {
        console.log('❌ No valid subscribers found in environment data')
      }
    } catch (parseError) {
      console.error('❌ Failed to parse SUBSCRIBERS_DATA:', parseError)
    }
  } catch (error) {
    console.error('❌ Error migrating data from env to Redis:', error)
  }
}

/**
 * Generate a unique unsubscribe token
 */
function generateUnsubscribeToken(): string {
  // Generate a secure, unique token
  const timestamp = Date.now().toString(36)
  const random1 = Math.random().toString(36).substring(2, 15)
  const random2 = Math.random().toString(36).substring(2, 15)
  return `${timestamp}_${random1}_${random2}`
}

/**
 * Health check - test Redis connection with comprehensive diagnostics
 */
export async function healthCheck(): Promise<{ isHealthy: boolean; details: any }> {
  const healthDetails = {
    redis: false,
    timestamp: new Date().toISOString(),
    error: null as string | null
  }

  try {
    const client = await getRedisClient()
    const testKey = 'health_check_' + Date.now()
    const testValue = 'healthy'
    
    // Test write
    await client.set(testKey, testValue, { EX: 60 }) // Expire in 60 seconds
    
    // Test read
    const result = await client.get(testKey)
    
    // Test delete
    await client.del(testKey)
    
    healthDetails.redis = result === testValue
    
    if (healthDetails.redis) {
      console.log('✅ Redis health check passed')
    } else {
      console.error('❌ Redis health check failed: value mismatch')
    }
    
    return {
      isHealthy: healthDetails.redis,
      details: healthDetails
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    healthDetails.error = errorMessage
    console.error('❌ Redis health check failed:', errorMessage)
    
    return {
      isHealthy: false,
      details: healthDetails
    }
  }
}
