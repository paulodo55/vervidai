#!/usr/bin/env node
/**
 * Deployment Verification Script
 * Run this after Vercel deployment to ensure everything works
 */

const https = require('https');

const DOMAIN = 'vervidai.com'; // Update if different
const TESTS = [
  {
    name: 'Homepage Load',
    path: '/',
    method: 'GET',
    expectStatus: 200
  },
  {
    name: 'Newsletter Stats (Public)',
    path: '/api/newsletter/stats',
    method: 'GET',
    expectStatus: 200
  },
  {
    name: 'AI Consulting Page',
    path: '/services/ai-consulting',
    method: 'GET',
    expectStatus: 200
  },
  {
    name: 'Contact Page',
    path: '/contact',
    method: 'GET',
    expectStatus: 200
  }
];

function testEndpoint(test) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: DOMAIN,
      port: 443,
      path: test.path,
      method: test.method,
      headers: {
        'User-Agent': 'Vervid-Deployment-Verification/1.0'
      }
    };

    console.log(`🧪 Testing ${test.name}...`);
    
    const req = https.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        if (res.statusCode === test.expectStatus) {
          console.log(`✅ ${test.name}: PASSED (${res.statusCode})`);
          resolve({ test: test.name, status: 'PASSED', code: res.statusCode });
        } else {
          console.log(`❌ ${test.name}: FAILED (expected ${test.expectStatus}, got ${res.statusCode})`);
          resolve({ test: test.name, status: 'FAILED', code: res.statusCode, expected: test.expectStatus });
        }
      });
    });

    req.on('error', (error) => {
      console.log(`❌ ${test.name}: ERROR - ${error.message}`);
      resolve({ test: test.name, status: 'ERROR', error: error.message });
    });

    req.setTimeout(10000, () => {
      console.log(`❌ ${test.name}: TIMEOUT`);
      resolve({ test: test.name, status: 'TIMEOUT' });
    });

    req.end();
  });
}

async function runVerification() {
  console.log('🚀 Vervid Deployment Verification');
  console.log('=' + '='.repeat(50));
  console.log(`🌐 Testing domain: ${DOMAIN}`);
  console.log('');

  const results = [];
  
  for (const test of TESTS) {
    const result = await testEndpoint(test);
    results.push(result);
    await new Promise(resolve => setTimeout(resolve, 500)); // Small delay between tests
  }

  console.log('');
  console.log('📊 VERIFICATION SUMMARY');
  console.log('=' + '='.repeat(30));
  
  const passed = results.filter(r => r.status === 'PASSED').length;
  const failed = results.filter(r => r.status !== 'PASSED').length;
  
  console.log(`✅ Passed: ${passed}`);
  console.log(`❌ Failed: ${failed}`);
  
  if (failed === 0) {
    console.log('');
    console.log('🎉 ALL TESTS PASSED! Deployment is successful.');
    console.log('');
    console.log('🔧 Next Steps:');
    console.log('1. Test newsletter functionality with your admin API key');
    console.log('2. Verify Redis database connection in Vercel logs');
    console.log('3. Check that subscriber migration worked correctly');
    console.log('4. Test contact form submissions');
  } else {
    console.log('');
    console.log('⚠️  Some tests failed. Check the issues above.');
    console.log('');
    console.log('🔧 Troubleshooting:');
    console.log('1. Check Vercel deployment logs');
    console.log('2. Verify environment variables are set');
    console.log('3. Ensure Redis database is connected');
    console.log('4. Check for any build errors');
  }
  
  console.log('');
  console.log('📧 Email System Status:');
  console.log('- Newsletter will send automatically every Friday at 2:00 PM UTC');
  console.log('- Manual send available via /api/newsletter/send?key=YOUR_ADMIN_KEY');
  console.log('- Stats available via /api/newsletter/stats');
  console.log('');
}

if (require.main === module) {
  runVerification().catch(console.error);
}

module.exports = { runVerification, testEndpoint };
