# 📧 Email Newsletter Troubleshooting Guide

## 🚨 Why Friday Emails Didn't Send

Based on the analysis of your codebase, here are the most likely reasons:

### **Issue #1: Subscriber Data Lost (CRITICAL)**
- **Problem**: Your subscriber data is stored in memory (`let subscribers: Subscriber[] = []`)
- **Impact**: In Vercel's serverless environment, data is lost between function invocations
- **Result**: When cron runs, `getActiveSubscribers()` returns empty array → "No active subscribers found"

### **Issue #2: Missing Environment Variables**
Required environment variables:
- `CRON_SECRET` - for cron job authentication
- `RESEND_API_KEY` - for sending emails
- `GEMINI_API_KEY` - for generating AI content
- `SUBSCRIBERS_DATA` - for subscriber storage (new)

### **Issue #3: Cron Job Schedule**
- Current schedule: `"0 14 * * 5"` = **2:00 PM UTC every Friday**
- Make sure this aligns with your intended send time

## 🔧 Immediate Fixes

### **1. Set Up Environment Variables in Vercel**

```bash
# In your Vercel dashboard, add these environment variables:

CRON_SECRET=your_secure_random_string_here
RESEND_API_KEY=your_resend_api_key
GEMINI_API_KEY=your_gemini_api_key
ADMIN_API_KEY=your_admin_api_key

# NEW: Add subscriber data (temporary fix)
SUBSCRIBERS_DATA=[{"email":"test@example.com","name":"Test User","subscribedAt":"2024-01-01T00:00:00.000Z","isActive":true,"unsubscribeToken":"abc123def456"}]
```

### **2. Test Manual Send**

Use the provided test script:

```bash
# Update the script with your actual values:
node test-email-send.js
```

Or test directly via curl:

```bash
# Test manual send
curl -X POST "https://vervidai.com/api/newsletter/send?key=YOUR_ADMIN_KEY"

# Test cron endpoint
curl -H "Authorization: Bearer YOUR_CRON_SECRET" "https://vervidai.com/api/cron/newsletter"
```

### **3. Check Vercel Function Logs**

1. Go to Vercel Dashboard → Your Project → Functions
2. Look for `/api/cron/newsletter` function
3. Check recent invocations and logs

## 📋 Verification Checklist

- [ ] All environment variables set in Vercel
- [ ] `SUBSCRIBERS_DATA` contains actual subscriber data
- [ ] RESEND API key is valid and has sending permissions
- [ ] GEMINI API key is valid
- [ ] Cron job schedule matches intended send time
- [ ] Domain `vervidai.com` is properly configured
- [ ] No rate limits hit on Resend or Gemini APIs

## 🔍 Debugging Steps

### **Step 1: Check Subscriber Data**
```javascript
// In your Vercel function logs, you should see:
console.log(`Found ${subscribers.length} active subscribers`)

// If this shows 0, your SUBSCRIBERS_DATA env var is empty/invalid
```

### **Step 2: Check API Keys**
```javascript
// Look for these error patterns in logs:
"GEMINI_API_KEY is not set in environment variables"
"Resend API error" 
"Unauthorized" (CRON_SECRET mismatch)
```

### **Step 3: Check Cron Execution**
- Vercel cron jobs run in UTC timezone
- Check if cron job is actually being triggered
- Look for "Starting weekly newsletter generation..." in logs

## 🚀 Long-term Solutions

### **Option 1: Use Vercel KV (Recommended)**
```bash
# Install Vercel KV
npm install @vercel/kv

# Update subscriber storage to use KV
# See: https://vercel.com/docs/storage/vercel-kv
```

### **Option 2: Use External Database**
- PostgreSQL (Vercel Postgres)
- MongoDB
- Supabase
- PlanetScale

### **Option 3: File-based Storage**
Store subscribers in a JSON file in your repository (not ideal but works for small lists).

## 📊 Current System Status

### **Cron Schedule**
- **When**: Every Friday at 2:00 PM UTC
- **Endpoint**: `/api/cron/newsletter`
- **Method**: GET with Bearer token authentication

### **Manual Send**
- **Endpoint**: `/api/newsletter/send?key=ADMIN_KEY`
- **Method**: POST
- **Use**: For immediate sending or testing

### **Email Flow**
1. Cron triggers → Vercel calls `/api/cron/newsletter`
2. Function checks `CRON_SECRET` authentication
3. Gets active subscribers from `getActiveSubscribers()`
4. Generates AI content with Gemini
5. Sends emails via Resend
6. Sends admin notification

## 🆘 Emergency Manual Send

If you need to send this week's newsletter immediately:

```bash
# Method 1: Via API
curl -X POST "https://vervidai.com/api/newsletter/send?key=YOUR_ADMIN_KEY"

# Method 2: Via test script
node test-email-send.js
```

## 📞 Support Contacts

- **Resend Support**: https://resend.com/support
- **Vercel Support**: https://vercel.com/support
- **Google AI Support**: https://developers.generativeai.google/support

---

**Next Steps:**
1. Set up proper environment variables in Vercel
2. Add actual subscriber data to `SUBSCRIBERS_DATA`
3. Test manual send to confirm functionality
4. Plan migration to proper database solution
