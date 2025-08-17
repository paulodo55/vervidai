export interface BlogPost {
  id: string
  title: string
  content: string
  excerpt: string
  publishedAt: string
  weekOf: string
  slug: string
  tags: string[]
  readTime: number
}

export interface AINewsItem {
  title: string
  summary: string
  source: string
  date: string
  impact: 'high' | 'medium' | 'low'
  category: 'breakthrough' | 'funding' | 'product' | 'regulation' | 'research'
}
