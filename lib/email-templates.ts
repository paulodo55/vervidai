export interface NewsletterContent {
  title: string
  content: string
  excerpt: string
  date: string
}

export function generateNewsletterHTML(content: NewsletterContent, unsubscribeToken: string): string {
  const unsubscribeUrl = `https://vervidai.com/api/unsubscribe?token=${unsubscribeToken}`
  
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${content.title}</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f8f9fa;
        }
        .container {
            background-color: #ffffff;
            border-radius: 10px;
            padding: 30px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            border-bottom: 3px solid #6366f1;
            padding-bottom: 20px;
            margin-bottom: 30px;
        }
        .logo {
            font-size: 28px;
            font-weight: bold;
            background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 10px;
        }
        .tagline {
            color: #6b7280;
            font-size: 14px;
        }
        .title {
            font-size: 24px;
            font-weight: bold;
            color: #1f2937;
            margin-bottom: 20px;
            line-height: 1.3;
        }
        .date {
            color: #6b7280;
            font-size: 14px;
            margin-bottom: 20px;
        }
        .content {
            color: #374151;
            line-height: 1.7;
        }
        .content h2 {
            color: #1f2937;
            font-size: 20px;
            margin: 25px 0 15px 0;
            border-left: 4px solid #6366f1;
            padding-left: 15px;
        }
        .content h3 {
            color: #374151;
            font-size: 18px;
            margin: 20px 0 10px 0;
        }
        .content ul {
            padding-left: 20px;
        }
        .content li {
            margin-bottom: 8px;
        }
        .footer {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #e5e7eb;
            text-align: center;
            color: #6b7280;
            font-size: 14px;
        }
        .cta {
            background-color: #6366f1;
            color: white;
            padding: 12px 24px;
            text-decoration: none;
            border-radius: 6px;
            display: inline-block;
            margin: 20px 0;
            font-weight: 600;
        }
        .cta:hover {
            background-color: #5856eb;
        }
        .unsubscribe {
            font-size: 12px;
            color: #9ca3af;
            margin-top: 20px;
        }
        .unsubscribe a {
            color: #6b7280;
            text-decoration: none;
        }
        @media (max-width: 600px) {
            body { padding: 10px; }
            .container { padding: 20px; }
            .title { font-size: 20px; }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">Vervid</div>
            <div class="tagline">AI Consulting & Digital Innovation</div>
        </div>
        
        <h1 class="title">${content.title}</h1>
        <div class="date">${content.date}</div>
        
        <div class="content">
            ${formatContentForEmail(content.content)}
        </div>
        
        <div style="text-align: center; margin: 30px 0;">
            <a href="https://vervidai.com/contact" class="cta">Get AI Consulting</a>
        </div>
        
        <div class="footer">
            <p><strong>Vervid</strong> - Transforming businesses with cutting-edge AI consulting</p>
            <p>📧 hello@vervidai.com | 📱 512-264-5260 | 🌐 vervidai.com</p>
            
            <div class="unsubscribe">
                <p>You're receiving this because you subscribed to Vervid's weekly AI updates.</p>
                <p><a href="${unsubscribeUrl}">Unsubscribe</a> | <a href="https://vervidai.com/privacy">Privacy Policy</a></p>
            </div>
        </div>
    </div>
</body>
</html>
  `
}

function formatContentForEmail(content: string): string {
  // Convert markdown-style content to HTML
  let formatted = content
    .replace(/^# (.*$)/gim, '<h2>$1</h2>')
    .replace(/^## (.*$)/gim, '<h3>$1</h3>')
    .replace(/^\* (.*$)/gim, '<li>$1</li>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(?!<[h|l|p])/gm, '<p>')
    .replace(/(?<!>)$/gm, '</p>')
    .replace(/<p><\/p>/g, '')

  // Wrap consecutive list items in ul tags
  formatted = formatted.replace(/(<li>.*?<\/li>(?:\s*<li>.*?<\/li>)*)/g, '<ul>$1</ul>')
  
  return formatted
}

export function generateWelcomeEmail(name: string, unsubscribeToken: string): string {
  const unsubscribeUrl = `https://vervidai.com/api/unsubscribe?token=${unsubscribeToken}`
  
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Vervid AI Weekly</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f8f9fa;
        }
        .container {
            background-color: #ffffff;
            border-radius: 10px;
            padding: 30px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            border-bottom: 3px solid #6366f1;
            padding-bottom: 20px;
            margin-bottom: 30px;
        }
        .logo {
            font-size: 28px;
            font-weight: bold;
            background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 10px;
        }
        .welcome {
            font-size: 24px;
            color: #1f2937;
            text-align: center;
            margin-bottom: 20px;
        }
        .content {
            color: #374151;
            line-height: 1.7;
        }
        .cta {
            background-color: #6366f1;
            color: white;
            padding: 12px 24px;
            text-decoration: none;
            border-radius: 6px;
            display: inline-block;
            margin: 20px 0;
            font-weight: 600;
        }
        .footer {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #e5e7eb;
            text-align: center;
            color: #6b7280;
            font-size: 14px;
        }
        .unsubscribe {
            font-size: 12px;
            color: #9ca3af;
            margin-top: 20px;
        }
        .unsubscribe a {
            color: #6b7280;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">Vervid</div>
            <div style="color: #6b7280; font-size: 14px;">AI Consulting & Digital Innovation</div>
        </div>
        
        <h1 class="welcome">Welcome to AI Weekly, ${name}! 🚀</h1>
        
        <div class="content">
            <p>Thank you for subscribing to Vervid's weekly AI updates! You're now part of an exclusive community that stays ahead of the AI curve.</p>
            
            <p><strong>What to expect:</strong></p>
            <ul>
                <li>📊 Weekly AI industry recaps and analysis</li>
                <li>🚀 Latest breakthroughs and business applications</li>
                <li>💡 Actionable insights for your business</li>
                <li>🎯 Strategic recommendations from our AI experts</li>
            </ul>
            
            <p>Your first weekly recap will arrive this Friday. In the meantime, explore how Vervid can transform your business with cutting-edge AI solutions.</p>
            
            <div style="text-align: center;">
                <a href="https://vervidai.com/services/ai-consulting" class="cta">Explore AI Consulting</a>
            </div>
        </div>
        
        <div class="footer">
            <p><strong>Vervid</strong> - Transforming businesses with cutting-edge AI consulting</p>
            <p>📧 hello@vervidai.com | 📱 512-264-5260 | 🌐 vervidai.com</p>
            
            <div class="unsubscribe">
                <p><a href="${unsubscribeUrl}">Unsubscribe</a> | <a href="https://vervidai.com/privacy">Privacy Policy</a></p>
            </div>
        </div>
    </div>
</body>
</html>
  `
}
