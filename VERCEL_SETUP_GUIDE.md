# 🚀 Complete Vercel Setup Guide

## **Step 1: Environment Variables in Vercel**

Go to your Vercel dashboard → Your Project → Settings → Environment Variables

Add these **EXACT** variables:

### **Required Environment Variables**

```bash
# Cron job authentication (generate a long random string)
CRON_SECRET=your_very_long_random_string_here_make_it_32_chars_minimum

# Resend API for sending emails
RESEND_API_KEY=re_your_actual_resend_api_key_from_resend_dashboard

# Google Gemini for AI content generation
GEMINI_API_KEY=your_actual_gemini_api_key_from_google_ai_studio

# Admin API for manual newsletter sending
ADMIN_API_KEY=your_secure_admin_key_here_also_make_it_long_and_random

# TEMPORARY: Subscriber data (while migrating to KV)
SUBSCRIBERS_DATA=[{"email":"paul@vervidai.com","name":"Paul","subscribedAt":"2024-01-01T00:00:00.000Z","isActive":true,"unsubscribeToken":"abc123def456"}]
```

### **Environment Settings**
- Set **ALL** variables for: `Production`, `Preview`, AND `Development`
- Click "Save" after adding each variable

---

## **Step 2: Set Up Vercel KV Database**

### **Create KV Database**
1. In your Vercel dashboard, go to **Storage**
2. Click **Create Database** → **KV**
3. Name it: `vervid-subscribers`
4. Choose region closest to your users
5. Click **Create**

### **Connect to Project**
1. After creation, click **Connect Project**
2. Select your Vervid project
3. Choose **Production** and **Preview** environments
4. Click **Connect**

This automatically adds these environment variables:
- `KV_REST_API_URL`
- `KV_REST_API_TOKEN`

---

## **Step 3: Deploy Updated Code**

### **Deploy to Vercel**
```bash
# If you have Vercel CLI installed:
vercel --prod

# Or push to your main branch if connected to GitHub:
git add .
git commit -m "Fix email system with permanent database"
git push origin main
```

### **Verify Deployment**
1. Check deployment logs in Vercel dashboard
2. Look for successful build completion
3. No build errors should appear

---

## **Step 4: Test the System**

### **Test 1: Manual Newsletter Send**
```bash
curl -X POST "https://vervidai.com/api/newsletter/send?key=YOUR_ADMIN_API_KEY"
```

Expected response:
```json
{
  "success": true,
  "message": "Newsletter sent successfully",
  "totalSubscribers": 1,
  "successful": 1,
  "failed": 0
}
```

### **Test 2: Cron Job Endpoint**
```bash
curl -H "Authorization: Bearer YOUR_CRON_SECRET" "https://vervidai.com/api/cron/newsletter"
```

### **Test 3: Newsletter Signup**
1. Go to your website contact form
2. Sign up for newsletter with a test email
3. Check if welcome email is received
4. Verify subscriber is added to KV database

### **Test 4: Unsubscribe**
1. Use unsubscribe link from welcome email
2. Verify unsubscribe success page
3. Check that subscriber is marked inactive in database

---

## **Step 5: Monitor & Verify**

### **Check Vercel Function Logs**
1. Go to Vercel Dashboard → Functions
2. Find `/api/cron/newsletter`
3. Check recent invocations
4. Look for successful execution logs

### **Check KV Database**
1. Go to Vercel Dashboard → Storage → KV
2. Browse your `vervid-subscribers` database
3. Verify subscriber data is stored correctly

### **Verify Cron Schedule**
- Current schedule: **Every Friday at 2:00 PM UTC**
- Next run: Check Vercel cron logs for next scheduled execution

---

## **Step 6: Add Real Subscribers**

### **Method 1: Via Environment Variable (Temporary)**
Update `SUBSCRIBERS_DATA` in Vercel with real subscriber data:

```json
[
  {
    "email": "subscriber1@example.com",
    "name": "Subscriber One",
    "subscribedAt": "2024-01-01T00:00:00.000Z",
    "isActive": true,
    "unsubscribeToken": "unique_token_1"
  },
  {
    "email": "subscriber2@example.com", 
    "name": "Subscriber Two",
    "subscribedAt": "2024-01-02T00:00:00.000Z",
    "isActive": true,
    "unsubscribeToken": "unique_token_2"
  }
]
```

### **Method 2: Via Contact Form (Permanent)**
Once deployed, new subscribers will automatically be saved to KV database when they sign up through your contact form.

---

## **Troubleshooting**

### **Common Issues**

**1. "No active subscribers found"**
- Check `SUBSCRIBERS_DATA` environment variable has valid JSON
- Verify KV database connection
- Check function logs for migration messages

**2. "Unauthorized" error**
- Verify `CRON_SECRET` matches exactly (no extra spaces)
- Check Authorization header format: `Bearer YOUR_SECRET`

**3. Email sending fails**
- Verify `RESEND_API_KEY` is correct and active
- Check Resend dashboard for API limits
- Verify sender domain is configured in Resend

**4. AI content generation fails**
- Verify `GEMINI_API_KEY` is correct and active
- Check Google AI Studio for API quotas
- Look for JSON parsing errors in logs

### **Debug Commands**

```bash
# Test KV connection
curl "https://vervidai.com/api/newsletter/stats"

# Check subscriber count
curl "https://vervidai.com/api/newsletter/stats" 

# Manual migration trigger
curl -X POST "https://vervidai.com/api/newsletter/send?key=YOUR_ADMIN_KEY"
```

---

## **Success Checklist**

- [ ] All environment variables set in Vercel
- [ ] KV database created and connected
- [ ] Code deployed successfully
- [ ] Manual newsletter send works
- [ ] Cron endpoint responds correctly
- [ ] Newsletter signup adds to database
- [ ] Unsubscribe functionality works
- [ ] Welcome emails are sent
- [ ] Admin notifications received

---

## **What's Fixed**

✅ **Permanent Data Storage**: Subscribers now saved in Vercel KV database
✅ **Automatic Migration**: Old data migrates from env vars to KV on first run
✅ **Persistent Subscriptions**: Data survives function restarts
✅ **Real-time Updates**: New signups immediately available for newsletters
✅ **Proper Unsubscribe**: Unsubscribe status persists permanently

---

## **Next Friday's Email**

Your newsletter will now automatically send every Friday at 2:00 PM UTC with:
- All active subscribers from KV database
- Fresh AI-generated content from Gemini
- Proper error handling and admin notifications

**You're all set! 🎉**
