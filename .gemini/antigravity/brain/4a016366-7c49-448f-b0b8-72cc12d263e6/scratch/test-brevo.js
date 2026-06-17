const fs = require('fs');
const path = require('path');

// Read local .env file
const envPath = path.join(__dirname, '..', '..', '..', '..', '..', 'Desktop', 'DarkThreat', '.env');
console.log('Reading .env from:', envPath);

let envContent = '';
try {
  envContent = fs.readFileSync(envPath, 'utf8');
} catch (e) {
  console.error('Failed to read .env file:', e.message);
  process.exit(1);
}

const env = {};
envContent.split('\n').forEach(line => {
  const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
  if (match) {
    const key = match[1];
    let value = match[2] || '';
    if (value.startsWith('"') && value.endsWith('"')) {
      value = value.substring(1, value.length - 1);
    } else if (value.startsWith("'") && value.endsWith("'")) {
      value = value.substring(1, value.length - 1);
    }
    env[key] = value.trim();
  }
});

const brevoApiKey = env.BREVO_API_KEY;
const recipient = env.NOTIFICATION_RECIPIENT_EMAIL || 'aw6020019@gmail.com';

console.log('BREVO_API_KEY present:', !!brevoApiKey);
console.log('Recipient:', recipient);

if (!brevoApiKey) {
  console.error('BREVO_API_KEY is not set in .env');
  process.exit(1);
}

async function testSend() {
  const payload = {
    sender: {
      name: "DarkThreat Leads",
      email: "info@cybersilo.tech"
    },
    to: [
      {
        email: recipient,
        name: "CyberSilo Info"
      }
    ],
    subject: "[Lead Alert] Test verification from Antigravity Agent",
    htmlContent: `
      <html>
      <body style="font-family: sans-serif; background-color: #0B0F19; color: #E2E8F0; padding: 20px;">
        <h2 style="color: #06B6D4;">Brevo API Integration Test Successful</h2>
        <p>This is a verification email sent to confirm that the Brevo API integration is working correctly with your API key.</p>
        <p>Recipient: <strong>${recipient}</strong></p>
        <p>Time sent: <strong>${new Date().toUTCString()}</strong></p>
      </body>
      </html>
    `
  };

  try {
    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "api-key": brevoApiKey,
        "content-type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const body = await res.json();
    console.log('Status Code:', res.status);
    console.log('Response Body:', body);
    if (res.ok) {
      console.log('Success! Transactional email sent.');
    } else {
      console.error('Failed to send email.');
    }
  } catch (e) {
    console.error('Error during fetch:', e);
  }
}

testSend();
