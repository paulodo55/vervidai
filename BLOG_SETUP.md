# Vervid AI Blog Setup Guide

This guide will help you set up the AI-powered weekly blog recap system for your Vervid website.

## Features

- ✅ **AI-Generated Weekly Recaps**: Automatically generate comprehensive AI industry recaps using Google Gemini
- ✅ **Individual Blog Posts**: Each recap is a standalone blog post with its own URL
- ✅ **Responsive Design**: Matches your existing website theme and tone
- ✅ **SEO Optimized**: Proper meta tags, structured content, and readable URLs
- ✅ **Admin Controls**: Generate recaps on-demand or set up automation
- ✅ **Professional Styling**: Consistent with Vervid's premium design aesthetic

## Setup Instructions

### 1. Install Dependencies

Run the following command to install the new dependencies:

```bash
npm install
```

### 2. Set up Google Gemini API Key

1. Get your Gemini API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a `.env.local` file in your project root
3. Add your API key:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

### 3. Optional: Set up Admin Authentication

For the automated admin endpoint, add an admin key to your `.env.local`:

```env
ADMIN_API_KEY=your_secure_admin_key_here
```

## Usage

### Manual Generation

1. Visit `/blog` on your website
2. Click "Generate This Week's AI Recap" 
3. The system will create a comprehensive weekly recap using Google Gemini
4. The new post will appear on the blog page and be accessible via its own URL

### Automated Generation (Advanced)

You can set up automated weekly generation using the admin API endpoint:

```bash
curl -X POST https://your-domain.com/api/admin/generate-weekly-recap \
  -H "Authorization: Bearer your_admin_api_key" \
  -H "Content-Type: application/json" \
  -d '{"weeksBack": 0}'
```

This can be automated using:
- Cron jobs on your server
- GitHub Actions
- Vercel Cron Jobs
- Any scheduling service

### API Endpoints

- `POST /api/generate-recap` - Generate a new recap (public)
- `POST /api/admin/generate-weekly-recap` - Admin endpoint for automation
- `GET /blog` - View all blog posts
- `GET /blog/[slug]` - View individual blog post

## Content Structure

Each generated blog post includes:

- **Professional Title**: Engaging, SEO-friendly titles
- **Executive Summary**: Brief 2-3 sentence overview
- **Comprehensive Content**: 1-2 pages of detailed analysis
- **Business Insights**: How developments impact businesses
- **Expert Commentary**: Professional analysis and predictions
- **Relevant Tags**: For categorization and SEO
- **Estimated Read Time**: User experience enhancement

## Customization

### Content Focus

The AI is prompted to focus on:
- Major AI model releases and breakthroughs
- Significant funding rounds and acquisitions
- Regulatory developments
- Enterprise AI adoption trends
- Research breakthroughs
- Industry partnerships and collaborations

### Tone and Style

The content matches Vervid's professional yet accessible tone, similar to:
- Harvard Business Review
- MIT Technology Review
- Premium consulting publications

### Design Integration

The blog system uses your existing:
- Color scheme (accent colors, gradients)
- Typography (Poppins and Inter fonts)
- Component styles (glass effects, animations)
- Responsive design patterns

## Data Storage

Currently, blog posts are stored in memory during development. For production, consider:
- Database integration (PostgreSQL, MongoDB)
- File-based storage with JSON
- Headless CMS integration
- Static site generation

## SEO and Performance

- Semantic HTML structure
- Proper heading hierarchy
- Meta tags and descriptions
- Readable URL slugs
- Fast loading times
- Mobile-responsive design

## Troubleshooting

### Common Issues

1. **Gemini API Errors**: Check your API key and quota status
2. **Empty Blog Page**: Ensure you've generated at least one recap
3. **Styling Issues**: Verify Tailwind CSS classes are properly configured

### Support

For technical support or customization requests, contact the Vervid development team.

## Future Enhancements

Potential improvements:
- Database integration for persistence
- Email newsletter integration
- Social media auto-posting
- Analytics and engagement tracking
- Comment system
- Search functionality
- RSS feed generation

---

**Note**: This system uses Google Gemini Pro for high-quality content generation. Monitor your Gemini API usage and quotas accordingly.
