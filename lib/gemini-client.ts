import { GoogleGenerativeAI } from '@google/generative-ai'

// Initialize Gemini client only if API key is available
let genAI: GoogleGenerativeAI | null = null

if (process.env.GEMINI_API_KEY) {
  genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
}

export async function generateWeeklyAIRecap(weekOf: string): Promise<{
  title: string
  content: string
  excerpt: string
  tags: string[]
}> {
  const prompt = `
    You are a professional AI industry analyst writing for Vervid, a cutting-edge AI consulting company. 
    
    Write a comprehensive weekly recap of the most significant AI developments, breakthroughs, and news for the week of ${weekOf}.
    
    The article should:
    - Be engaging, informative, and professional
    - Focus on the most impactful AI developments that week
    - Include business implications and insights
    - Be concise but comprehensive (1-2 pages when printed)
    - Match the tone of a premium tech consulting company
    - Include relevant analysis and expert commentary
    - Be structured with clear sections and headings
    
    Format the response as a JSON object with:
    {
      "title": "Engaging title for the weekly recap",
      "content": "Full article content in markdown format with proper headings and structure",
      "excerpt": "Brief 2-3 sentence summary for preview",
      "tags": ["array", "of", "relevant", "tags"]
    }
    
    Focus on major developments like:
    - New AI model releases or breakthroughs
    - Significant funding rounds or acquisitions
    - Regulatory developments
    - Enterprise AI adoption trends
    - Research breakthroughs
    - Industry partnerships and collaborations
    
    Keep the tone professional but accessible, similar to what you'd find in Harvard Business Review or MIT Technology Review.
    
    IMPORTANT: Return ONLY the JSON object, no additional text or markdown formatting.
  `

  try {
    if (!genAI) {
      throw new Error('GEMINI_API_KEY is not set in environment variables')
    }

    // Get a reference to the generative model
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' })

    // Generate content
    const result = await model.generateContent(prompt)
    const response = await result.response
    const text = response.text()

    if (!text) {
      throw new Error('No response from Gemini')
    }

    // Clean the response to ensure it's valid JSON
    let cleanedResponse = text.trim()
    
    // Remove any markdown code block formatting if present
    if (cleanedResponse.startsWith('```json')) {
      cleanedResponse = cleanedResponse.replace(/^```json\n/, '').replace(/\n```$/, '')
    } else if (cleanedResponse.startsWith('```')) {
      cleanedResponse = cleanedResponse.replace(/^```\n/, '').replace(/\n```$/, '')
    }

    // Parse the JSON response
    const parsedResponse = JSON.parse(cleanedResponse)
    
    return {
      title: parsedResponse.title,
      content: parsedResponse.content,
      excerpt: parsedResponse.excerpt,
      tags: parsedResponse.tags || ['AI', 'Weekly Recap', 'Technology']
    }
  } catch (error) {
    console.error('Error generating AI recap:', error)
    
    // If JSON parsing fails, provide a fallback response
    if (error instanceof SyntaxError) {
      console.log('JSON parsing failed, providing fallback response')
      return {
        title: `AI Weekly Recap - Week of ${weekOf}`,
        content: `# AI Weekly Recap - Week of ${weekOf}\n\nThis week brought significant developments in the AI industry. Unfortunately, we encountered a formatting issue with the automated content generation. Please try generating again or contact support.\n\n## Key Highlights\n\n- Major AI developments continue to shape the industry\n- New funding rounds and partnerships announced\n- Regulatory discussions ongoing\n\n*This is a fallback response. Please regenerate for complete content.*`,
        excerpt: `Weekly AI industry recap for ${weekOf}. Key developments in AI technology, funding, and business applications.`,
        tags: ['AI', 'Weekly Recap', 'Technology', 'Fallback']
      }
    }
    
    throw new Error('Failed to generate weekly AI recap')
  }
}

export default genAI
