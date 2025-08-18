export const webhooksData = {
  title: "Webhooks",
  subtitle:
    "Configure webhooks to receive real-time notifications about events in your Idmeta account.",

  sections: [
    {
      heading: "What are Webhooks?",
      content:
        "Webhooks are HTTP callbacks that Idmeta sends to your application when specific events occur. They allow your application to react to events in real-time without constantly polling the API.",
      note: {
        title: "Real-time Updates",
        text: "Webhooks provide instant notifications when messages are delivered, calls are completed, or other events occur.",
        type: "primary",
      },
    },
    {
      heading: "Common Webhook Events",
      cards: [
        { title: "Message Status", text: "Receive updates when SMS/MMS messages are sent, delivered, or fail." },
        { title: "Incoming Messages", text: "Handle incoming SMS, MMS, or WhatsApp messages." },
        { title: "Call Events", text: "Get notified about call status changes and voice recordings." },
        { title: "Conference Events", text: "Track participants joining and leaving conference calls." },
      ],
    },
    {
      heading: "Setting Up Webhooks",
      steps: [
        {
          step: "1. Create a Webhook Endpoint",
          text: "Create an HTTP endpoint in your application that can receive POST requests from Idmeta:",
         code: `// Node.js/Express example
app.post('/webhooks/sms', (req, res) => {
  const { MessageSid, From, Body } = req.body;
  console.log(\`Received message \${MessageSid} from \${From}: \${Body}\`);
  res.status(200).send('OK');
});`

        },
        {
          step: "2. Configure the Webhook URL",
          text: "Set your webhook URL in the Idmeta Console or via the API. The URL must be publicly accessible and use HTTPS in production.",
          code: `curl -X POST "https://api.Idmeta.com/2010-04-01/Accounts/ACxxxx/IncomingPhoneNumbers/PNxxxx.json" \\
--data-urlencode "SmsUrl=https://yourapp.com/webhooks/sms" \\
-u "ACxxxx:your_auth_token"`,
        },
      ],
    },
    {
      heading: "Webhook Security",
      note: {
        title: "Verify Webhook Signatures",
        text: "Always validate that webhook requests are actually coming from Idmeta by verifying the signature.",
        type: "warning",
      },
      code: `const Idmeta = require('Idmeta');

const validateWebhook = (req, res, next) => {
  const signature = req.headers['x-Idmeta-signature'];
  const url = 'https://yourapp.com' + req.originalUrl;

  if (Idmeta.validateRequest(authToken, signature, url, req.body)) {
    next();
  } else {
    res.status(403).send('Forbidden');
  }
};`,
    },
    {
      heading: "Best Practices",
      list: [
        "Always respond with a 200 status code to acknowledge receipt",
        "Keep webhook processing fast (under 10 seconds)",
        "Use HTTPS URLs in production environments",
        "Implement proper error handling and logging",
        "Consider using a queue for time-consuming operations",
        "Test webhook endpoints with tools like ngrok for local development",
      ],
    },
    {
      heading: "Testing Webhooks",
      text: "Use ngrok to expose your local development server for webhook testing:",
      code: `# Install ngrok
npm install -g ngrok

# Expose local port 3000
ngrok http 3000

# Use the provided HTTPS URL in your webhook configuration`,
    },
  ],
};
