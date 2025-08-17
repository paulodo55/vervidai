# Google Gemini API Setup Guide

## Quick Setup Steps

### 1. Get Your Gemini API Key

1. **Visit Google AI Studio**: Go to [https://makersuite.google.com/app/apikey](https://makersuite.google.com/app/apikey)

2. **Sign in**: Use your Google account to sign in

3. **Create API Key**: 
   - Click "Create API Key"
   - Choose "Create API key in new project" (recommended) or select an existing project
   - Copy the generated API key

4. **Save Your Key**: Store it securely - you won't be able to see it again

### 2. Add to Your Project

1. **Create Environment File**: In your project root, create `.env.local`

2. **Add Your Key**:
   ```env
   GEMINI_API_KEY=your_actual_api_key_here
   ```

3. **Restart Your Development Server**: 
   ```bash
   npm run dev
   ```

### 3. Test the Integration

1. Visit `/blog` on your website
2. Click "Generate This Week's AI Recap"
3. The system should generate content using Gemini

## API Limits & Pricing

### Free Tier
- **Rate Limit**: 60 requests per minute
- **Daily Limit**: 1,500 requests per day
- **Monthly Tokens**: 1 million tokens per month
- **Cost**: Free

### Paid Tier (Pay-as-you-go)
- **Rate Limit**: Higher limits available
- **Pricing**: ~$0.00025 per 1K characters for input, ~$0.0005 per 1K characters for output
- **No daily limits** (only rate limits)

## Security Best Practices

1. **Never commit your API key** to version control
2. **Use environment variables** (`.env.local`) 
3. **Add `.env.local` to `.gitignore`**
4. **Rotate keys regularly** for production use
5. **Monitor usage** in Google AI Studio console

## Troubleshooting

### Common Issues

1. **"API key not found"**: Check that `GEMINI_API_KEY` is set in `.env.local`
2. **"Quota exceeded"**: You've hit the free tier limits - wait or upgrade
3. **"Invalid API key"**: Regenerate your key in Google AI Studio
4. **"Model not found"**: The code uses `gemini-pro` which should be available

### Error Messages

- **403 Forbidden**: Check your API key and quota
- **429 Too Many Requests**: Rate limit exceeded, wait a moment
- **400 Bad Request**: Usually a formatting issue with the prompt

## Migration from OpenAI

The system has been fully converted from OpenAI to Gemini:

✅ **Updated Dependencies**: `@google/generative-ai` instead of `openai`  
✅ **Updated Client**: `lib/gemini-client.ts` handles all AI interactions  
✅ **Updated Environment**: Uses `GEMINI_API_KEY` instead of `OPENAI_API_KEY`  
✅ **Updated Documentation**: All references updated to Gemini  
✅ **Error Handling**: Robust error handling with fallback responses  
✅ **JSON Parsing**: Handles Gemini's response formatting automatically  

## Support

If you encounter issues:
1. Check the Google AI Studio console for API status
2. Verify your API key is active and has quota remaining
3. Review the browser console for detailed error messages
4. Ensure your `.env.local` file is properly configured

Your Gemini API key should look something like:
```
AIzaSyD...your_actual_key_here...xyz123
```

Ready to generate AI content with Google Gemini! 🚀
