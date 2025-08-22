// Simple file-based subscriber management
// In production, you'd use a proper database, but this works for getting started

import { readFileSync, writeFileSync, existsSync } from 'fs'
import { join } from 'path'

export interface Subscriber {
  email: string
  name: string
  subscribedAt: string
  isActive: boolean
  unsubscribeToken: string
}

const SUBSCRIBERS_FILE = join(process.cwd(), 'data', 'subscribers.json')

// Ensure data directory exists
import { mkdirSync } from 'fs'
const dataDir = join(process.cwd(), 'data')
if (!existsSync(dataDir)) {
  mkdirSync(dataDir, { recursive: true })
}

export function getSubscribers(): Subscriber[] {
  try {
    if (!existsSync(SUBSCRIBERS_FILE)) {
      return []
    }
    const data = readFileSync(SUBSCRIBERS_FILE, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Error reading subscribers:', error)
    return []
  }
}

export function addSubscriber(email: string, name: string): boolean {
  try {
    const subscribers = getSubscribers()
    
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
    writeFileSync(SUBSCRIBERS_FILE, JSON.stringify(subscribers, null, 2))
    return true
  } catch (error) {
    console.error('Error adding subscriber:', error)
    return false
  }
}

export function unsubscribeByToken(token: string): boolean {
  try {
    const subscribers = getSubscribers()
    const subscriber = subscribers.find(sub => sub.unsubscribeToken === token)
    
    if (!subscriber) {
      return false
    }

    subscriber.isActive = false
    writeFileSync(SUBSCRIBERS_FILE, JSON.stringify(subscribers, null, 2))
    return true
  } catch (error) {
    console.error('Error unsubscribing:', error)
    return false
  }
}

export function getActiveSubscribers(): Subscriber[] {
  return getSubscribers().filter(sub => sub.isActive)
}

export function getSubscriberCount(): number {
  return getActiveSubscribers().length
}

function generateUnsubscribeToken(): string {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15)
}
