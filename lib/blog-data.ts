import { BlogPost } from './types'

// In a production environment, this would be stored in a database
// For now, we'll use a simple in-memory store that persists during development
let blogPosts: BlogPost[] = [
  {
    id: 'ai-recap-2025-08-20',
    title: 'AI Weekly Recap: Major Breakthroughs in Enterprise AI',
    content: `# AI Weekly Recap: Major Breakthroughs in Enterprise AI

This week brought significant developments in the AI industry, with major announcements from leading tech companies and breakthrough research that will shape the future of artificial intelligence.

## Key Highlights

### Enterprise AI Adoption Accelerates
Organizations worldwide are increasingly integrating AI into their core business processes. Recent studies show that 85% of enterprises plan to increase their AI investments in 2025, driven by proven ROI and competitive advantages.

### Breakthrough in Large Language Models
New research has demonstrated improved efficiency in language model training, reducing computational costs by up to 40% while maintaining performance. This development makes advanced AI more accessible to smaller organizations.

### Regulatory Developments
The EU AI Act continues to shape global AI governance, with new guidelines for responsible AI deployment in critical sectors like healthcare and finance.

## Business Implications

- **Cost Reduction**: New training methods make AI implementation more affordable
- **Competitive Advantage**: Early adopters are seeing significant market benefits  
- **Compliance Focus**: Organizations must prepare for evolving regulatory requirements

## Looking Ahead

The convergence of cost-effective AI solutions and clear regulatory frameworks is creating unprecedented opportunities for businesses to leverage artificial intelligence strategically.`,
    excerpt: 'This week brought major AI breakthroughs in enterprise adoption, cost-effective training methods, and regulatory developments that will shape the future of business AI implementation.',
    publishedAt: '2025-08-20T17:41:00Z', // 11:41 AM CST = 17:41 UTC
    weekOf: 'August 20, 2025',
    slug: 'ai-weekly-recap-major-breakthroughs-enterprise-ai',
    tags: ['AI', 'Enterprise', 'Technology', 'Business'],
    readTime: 3
  },
  {
    id: 'ai-recap-2025-08-13',
    title: 'AI Investment Surge: $50B in Funding Reshapes Industry',
    content: `# AI Investment Surge: $50B in Funding Reshapes Industry

The AI sector witnessed unprecedented investment activity this week, with over $50 billion in funding announcements across various segments of the artificial intelligence ecosystem.

## Major Funding Rounds

### Infrastructure and Computing
- **Cloud AI Services**: Major cloud providers announced expanded AI infrastructure investments
- **Chip Development**: Semiconductor companies secured significant funding for next-generation AI processors
- **Edge Computing**: Growing investment in AI-powered edge computing solutions

### Application Layer Innovation
Startups focusing on vertical AI applications attracted substantial venture capital, particularly in:
- Healthcare diagnostics
- Financial services automation
- Manufacturing optimization
- Retail personalization

## Market Impact

### Valuation Trends
The surge in funding has led to increased valuations across the AI sector, with several companies achieving unicorn status in record time.

### Talent Competition
Intense competition for AI talent has driven compensation packages to new heights, with senior AI engineers commanding premium salaries.

## Strategic Implications

For businesses considering AI adoption:
- **Market Timing**: The current investment climate indicates strong market validation
- **Partnership Opportunities**: Well-funded AI companies are actively seeking enterprise partnerships
- **Competitive Pressure**: Delayed AI adoption may result in significant competitive disadvantages

## Conclusion

The massive investment influx signals a maturation of the AI market and validates the transformative potential of artificial intelligence across industries.`,
    excerpt: 'The AI sector attracted over $50 billion in funding this week, driving valuations higher and intensifying competition for talent while creating new partnership opportunities.',
    publishedAt: '2025-08-13T17:41:00Z', // 11:41 AM CST = 17:41 UTC
    weekOf: 'August 13, 2025',
    slug: 'ai-investment-surge-50b-funding-reshapes-industry',
    tags: ['AI', 'Investment', 'Funding', 'Market Analysis'],
    readTime: 4
  }
]

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
