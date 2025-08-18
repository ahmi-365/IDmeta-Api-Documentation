export const troubleshootingData = {
  title: "Troubleshooting and Security",
  subtitle:
    "Common issues, debugging techniques, and security best practices for API integration.",
  sections: [
    {
      heading: "Common Issues",
      cards: [
        {
          title: "Authentication Errors (401)",
          text: "Usually caused by incorrect credentials or malformed authentication headers.",
          solution:
            "Verify your Account SID and Auth Token are correct and properly encoded.",
        },
        {
          title: "Rate Limiting (429)",
          text: "API requests are being throttled due to exceeding rate limits.",
          solution:
            "Implement exponential backoff and respect rate limit headers.",
        },
        {
          title: "Invalid Phone Numbers (21211)",
          text: "Phone number format is incorrect or number is invalid.",
          solution: "Use E.164 format (+1234567890) and validate numbers before use.",
        },
      ],
    },
    {
      heading: "Debugging Tools",
      tools: [
        {
          title: "API Explorer",
          text: "Use the Idmeta Console's API Explorer to test requests and see response formats.",
          tip: "The API Explorer generates code samples in multiple languages for successful requests.",
        },
        {
          title: "Request Debugging",
          code: `# Add verbose logging to see full request/response
curl -X GET "https://api.Idmeta.com/2010-04-01/Accounts.json" \\
  -u "ACxxxx:your_auth_token" \\
  -v`,
        },
        {
          title: "Error Logs Analysis",
          code: `// Log error details for analysis
try {
  const message = await client.messages.create(messageData);
} catch (error) {
  console.error('Idmeta Error:', {
    code: error.code,
    message: error.message,
    moreInfo: error.moreInfo,
    status: error.status
  });
}`,
        },
      ],
    },
    {
      heading: "Security Best Practices",
      lists: [
        {
          title: "Credential Management",
          items: [
            "Never hardcode credentials in your source code",
            "Use environment variables or secure key management systems",
            "Rotate API keys regularly",
            "Use separate credentials for different environments",
            "Implement proper access controls and least privilege principle",
          ],
        },
        {
          title: "Network Security",
          items: [
            "Always use HTTPS for API calls in production",
            "Configure webhook URLs with HTTPS",
            "Validate SSL certificates",
            "Use modern TLS versions (1.2+)",
          ],
        },
        {
          title: "Input Validation",
          code: `// Validate phone numbers before API calls
function isValidPhoneNumber(phoneNumber) {
  const e164Regex = /^\\+[1-9]\\d{1,14}$/;
  return e164Regex.test(phoneNumber);
}

// Sanitize message content
function sanitizeMessage(message) {
  return message.replace(/[<>\"']/g, '');
}`,
        },
      ],
    },
    {
      heading: "Performance Optimization",
      lists: [
        {
          title: "Connection Pooling",
          code: `const https = require('https');

const agent = new https.Agent({
  keepAlive: true,
  maxSockets: 10
});

const client = Idmeta(accountSid, authToken, {
  httpClient: agent
});`,
        },
        {
          title: "Retry Logic",
          code: `async function retryRequest(requestFn, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await requestFn();
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      await new Promise(resolve => setTimeout(resolve, Math.pow(2, i) * 1000));
    }
  }
}`,
        },
      ],
    },
    {
      heading: "Monitoring and Alerting",
      lists: [
        {
          title: "Health Checks",
          code: `app.get('/health', async (req, res) => {
  try {
    await client.api.accounts(accountSid).fetch();
    res.status(200).json({ status: 'healthy' });
  } catch (error) {
    res.status(500).json({ status: 'unhealthy', error: error.message });
  }
});`,
        },
        {
          title: "Usage Monitoring",
          items: [
            "Set up alerts for unusual usage patterns",
            "Monitor error rates and response times",
            "Track account balance and usage limits",
            "Implement logging for audit trails",
          ],
        },
      ],
    },
  ],
};
