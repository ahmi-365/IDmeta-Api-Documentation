export const SDkData = {
  title: "Mobile and Web SDK",
  subtitle:
    "Guidelines, best practices, and security measures for building safe and reliable Mobile and Web SDK integrations.",
  alert: {
    type: "red",
    title: "Security Alert",
    text: "Securing your Mobile and Web SDK is critical for protecting applications and users from fraud. Always implement multiple layers of defense.",
  },
  sections: [
    {
      heading: "Common SDK Fraud Patterns",
      cards: [
        {
          title: "Toll Fraud via SDK",
          text: "Fraudsters misuse SDK integrations to make expensive calls or send premium SMS messages without authorization.",
        },
        {
          title: "Traffic Pumping Attacks",
          text: "Attackers exploit SDK endpoints to generate artificial traffic to certain numbers, creating fraudulent revenue.",
        },
        {
          title: "Account Takeover",
          text: "User accounts connected to your SDK can be hijacked through credential theft or weak authentication.",
        },
      ],
    },
    {
      heading: "Authentication Security in SDK",
      subsections: [
        {
          title: "Secure SDK Credential Storage",
          list: [
            "Never hardcode API keys inside Mobile/Web SDK",
            "Store secrets in secure environment variables",
            "Rotate credentials used by SDK integrations regularly",
            "Restrict SDK access with role-based permissions",
          ],
        },
        {
          title: "Implement Multi-Factor Authentication (MFA)",
          code: `// Example: Adding MFA in SDK
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
      heading: "Rate Limiting and Monitoring SDK Calls",
      subsections: [
        {
          title: "Rate Limit SDK API Usage",
          text: "Apply limits on how often SDK can call APIs from a device or IP to prevent abuse:",
          code: `// Express example for SDK API protection
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100, 
  message: 'Too many requests from this SDK client'
});

app.use('/api/', limiter);`,
        },
        {
          title: "Monitor SDK Usage",
          list: [
            "Track unusual API usage from SDK clients",
            "Monitor geographic distribution of SDK requests",
            "Set alerts for high failure or retry rates",
            "Use anomaly detection to catch suspicious SDK behavior",
          ],
        },
      ],
    },
    {
      heading: "Phone Number Validation via SDK",
      text: "Validate numbers within SDK before sending messages or making calls:",
      code: `// Using SDK to validate numbers
const phoneNumber = await client.lookups.v2
  .phoneNumbers('+1234567890')
  .fetch({
    fields: 'line_type_intelligence'
  });

console.log(phoneNumber.lineTypeIntelligence.type);`,
    },
    {
      heading: "Geographic Restrictions for SDK",
      cards: [
        {
          title: "Region-Based SDK Controls",
          list: [
            "Block or restrict SDK usage in high-risk countries",
            "Apply region-specific rate limits",
            "Track SDK cross-border request patterns",
            "Use geo-permissions from Idmeta Console",
          ],
        },
      ],
    },
    {
      heading: "SDK Webhook Security",
      subsections: [
        {
          title: "Validate SDK Webhook Signatures",
          text: "Ensure incoming webhooks triggered by SDK are authentic and not spoofed:",
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
      heading: "Incident Response for SDK Fraud",
      note: {
        type: "yellow",
        title: "Have an SDK Incident Plan",
        text: "Prepare steps for when SDK-based fraud occurs. A quick response reduces risks and damages.",
      },
      subsections: [
        {
          title: "Immediate Response Actions",
          list: [
            "Revoke SDK credentials if compromised",
            "Block malicious SDK clients or device IPs",
            "Inspect SDK logs for suspicious activity",
            "Report to Idmeta support if attack persists",
            "Document the incident for SDK security improvements",
          ],
        },
      ],
    },
  ],
};
