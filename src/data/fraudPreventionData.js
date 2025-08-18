export const fraudPreventionData = {
  title: "Preventing Fraud",
  subtitle:
    "Best practices and security measures to protect your applications and users from fraudulent activities.",
  alert: {
    type: "red",
    title: "Security Alert",
    text: "Fraud prevention is critical for protecting your business and maintaining user trust. Implement multiple layers of security.",
  },
  sections: [
    {
      heading: "Common Fraud Patterns",
      cards: [
        {
          title: "Toll Fraud",
          text: "Unauthorized use of your account to make expensive international calls or send premium SMS messages.",
        },
        {
          title: "Pumping Attacks",
          text: "Artificially inflating traffic to specific numbers to generate revenue for fraudsters.",
        },
        {
          title: "Account Takeover",
          text: "Unauthorized access to user accounts through credential theft or social engineering.",
        },
      ],
    },
    {
      heading: "Authentication Security",
      subsections: [
        {
          title: "Secure Credential Storage",
          list: [
            "Never expose API credentials in client-side code",
            "Use environment variables for sensitive configuration",
            "Rotate API keys regularly",
            "Implement proper access controls and permissions",
          ],
        },
        {
          title: "Multi-Factor Authentication",
          code: `// Implement MFA verification
const verification = await client.verify.v2
  .services('VAxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
  .verifications
  .create({
    to: '+1234567890',
    channel: 'sms'
  });`,
        },
      ],
    },
    {
      heading: "Rate Limiting and Monitoring",
      subsections: [
        {
          title: "Implement Rate Limits",
          text: "Limit the number of API calls per user/IP address to prevent abuse:",
          code: `// Express rate limiting example
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP'
});

app.use('/api/', limiter);`,
        },
        {
          title: "Monitor Usage Patterns",
          list: [
            "Set up alerts for unusual traffic patterns",
            "Monitor geographic distribution of calls/messages",
            "Track success/failure rates",
            "Implement anomaly detection",
          ],
        },
      ],
    },
    {
      heading: "Number Validation",
      text: "Validate phone numbers before sending messages or making calls:",
      code: `// Lookup phone number information
const phoneNumber = await client.lookups.v2
  .phoneNumbers('+1234567890')
  .fetch({
    fields: 'line_type_intelligence'
  });

console.log(phoneNumber.lineTypeIntelligence.type);`,
    },
    {
      heading: "Geographic Restrictions",
      cards: [
        {
          title: "Country-based Controls",
          list: [
            "Block or limit traffic to high-risk countries",
            "Implement different rate limits by region",
            "Monitor cross-border communication patterns",
            "Use geo-permissions in Idmeta Console",
          ],
        },
      ],
    },
    {
      heading: "Webhook Security",
      subsections: [
        {
          title: "Signature Validation",
          text: "Always validate webhook signatures to ensure requests are from Idmeta:",
          code: `const crypto = require('crypto');

function validateSignature(signature, url, params, authToken) {
  const data = Object.keys(params)
    .sort()
    .map(key => key + params[key])
    .join('');

  const hmac = crypto.createHmac('sha1', authToken);
  hmac.update(url + data);
  const computedSignature = hmac.digest('base64');

  return signature === computedSignature;
}`,
        },
      ],
    },
    {
      heading: "Incident Response",
      note: {
        type: "yellow",
        title: "Have a Plan",
        text: "Prepare an incident response plan for when fraud is detected. Quick action can minimize damage.",
      },
      subsections: [
        {
          title: "Immediate Actions",
          list: [
            "Disable compromised credentials immediately",
            "Block suspicious IP addresses or numbers",
            "Review and analyze logs for patterns",
            "Contact Idmeta support if needed",
            "Document the incident for future prevention",
          ],
        },
      ],
    },
  ],
};
