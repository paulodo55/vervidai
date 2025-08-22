# 📧 Resend Email Integration Setup Guide

## 🚀 **Quick Setup Steps**

Your Vervid website now has complete email integration with Resend! Follow these steps to activate it.

## 📋 **Prerequisites**

1. **Resend Account**: You mentioned you already have one ✅
2. **Node.js**: Required to install the Resend package
3. **Domain Setup**: You'll need to verify your domain with Resend

## 🔧 **Step 1: Install Node.js (if not already installed)**

Since npm wasn't found earlier, you'll need to install Node.js:

```bash
# Option 1: Download from official website
# Visit: https://nodejs.org/en/download/

# Option 2: Using Homebrew (if you have it)
brew install node

# Option 3: Using MacPorts
sudo port install nodejs18

# Verify installation
node --version
npm --version
```

## 📦 **Step 2: Install Resend Package**

Once Node.js is installed, run this in your project directory:

```bash
cd /Users/paulodo/Desktop/Vervid
npm install resend
```

## 🔑 **Step 3: Get Your Resend API Key**

1. Log into your Resend account at [resend.com](https://resend.com)
2. Go to **API Keys** section
3. Click **Create API Key**
4. Name it something like "Vervid Website"
5. Copy the API key (starts with `re_`)

## ⚙️ **Step 4: Configure Environment Variables**

1. Create a `.env.local` file in your project root:

```bash
# Copy the example file
cp env.example .env.local
```

2. Edit `.env.local` and add your keys:

```env
# Google Gemini API Configuration
GEMINI_API_KEY=your_actual_gemini_api_key_here

# Resend Email Service Configuration
RESEND_API_KEY=re_your_actual_resend_api_key_here

# Admin API Key for blog generation
ADMIN_API_KEY=your_secure_admin_password_here
```

## 🌐 **Step 5: Domain Verification (Important!)**

For emails to work properly, you need to verify your domain with Resend:

1. In your Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Enter `vervidai.com`
4. Resend will provide DNS records to add
5. Add these DNS records to your domain registrar:

```
Type: TXT
Name: @
Value: v=spf1 include:_spf.resend.com ~all

Type: CNAME  
Name: resend._domainkey
Value: resend._domainkey.resend.com

Type: CNAME
Name: _dmarc
Value: _dmarc.resend.com
```

## 📧 **Step 6: Update Email Addresses**

The system is configured to send emails to `hello@vervid.com`. Make sure this email exists or update the API files:

- `/app/api/contact/route.ts` - Line 52
- `/app/api/get-started/route.ts` - Line 88

Change `hello@vervid.com` to your actual business email.

## 🚀 **Step 7: Deploy to Vercel**

1. **Add Environment Variables in Vercel:**
   - Go to your Vercel project settings
   - Navigate to Environment Variables
   - Add `RESEND_API_KEY` with your actual API key

2. **Deploy the Changes:**
```bash
git add .
git commit -m "Add Resend email integration"
git push origin main
```

## ✨ **What's Now Working**

Once setup is complete, your website will have:

### **Contact Page** (`/contact`)
- ✅ **Newsletter Signup**: Sends subscription notifications
- ✅ **General Questions**: Sends inquiry emails with reply-to functionality

### **Get Started Page** (`/get-started`)
- ✅ **Project Inquiries**: Comprehensive project details with:
  - Contact information
  - Service selections
  - Budget and timeline
  - Detailed project descriptions
  - Professional email formatting

## 📧 **Email Features**

### **Professional Templates**
- Beautiful HTML email formatting
- Branded colors and styling
- Clear information organization
- Direct reply functionality

### **Smart Routing**
- Newsletter signups clearly marked
- Project inquiries prioritized by timeline
- All emails include sender's contact info
- Reply-to addresses automatically set

### **Error Handling**
- Form validation
- Network error handling
- User-friendly error messages
- Graceful fallbacks

## 🧪 **Testing the Integration**

1. **Local Testing:**
```bash
npm run dev
```
Visit `localhost:3000/contact` and test both forms

2. **Production Testing:**
Once deployed, test on `https://vervidai.com/contact`

## 🔍 **Troubleshooting**

### **Common Issues:**

1. **"Resend is not defined"**
   - Make sure you ran `npm install resend`
   - Restart your development server

2. **"API key not found"**
   - Check your `.env.local` file exists
   - Verify the API key starts with `re_`
   - Make sure it's added to Vercel environment variables

3. **Domain not verified**
   - Check DNS records are properly set
   - Wait up to 24 hours for DNS propagation
   - Use Resend's domain verification tool

4. **Emails not sending**
   - Check Resend dashboard for error logs
   - Verify domain verification status
   - Check API usage limits

## 📊 **Monitoring**

Monitor your email performance in the Resend dashboard:
- Delivery rates
- Open rates (if tracking enabled)
- Error logs
- API usage

## 🎯 **Next Steps**

1. Install Node.js and the Resend package
2. Get your Resend API key
3. Configure environment variables
4. Verify your domain with Resend
5. Deploy to Vercel
6. Test the contact forms

Your professional email system will be live and ready to capture leads!

---

**Need Help?** Check the Resend documentation at [resend.com/docs](https://resend.com/docs) or reach out if you encounter any issues during setup.
