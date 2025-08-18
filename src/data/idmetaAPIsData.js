export const idmetaAPIsData = {
  title: "Idmeta APIs",
  subtitle:
    "Comprehensive guide to Idmeta's REST APIs, SDKs, and integration patterns for building communication solutions.",

  coreAPIs: [
    { name: "Messaging API", description: "Send and receive SMS, MMS, and WhatsApp messages globally." },
    { name: "Voice API", description: "Make and receive phone calls with programmable voice features." },
    { name: "Video API", description: "Build video calling and conferencing applications." },
    { name: "Chat API", description: "Add real-time chat and messaging to your applications." },
  ],

  authentication: {
    description:
      "All API requests must be authenticated using HTTP Basic Auth with your Account SID as the username and your Auth Token as the password.",
    code: `curl -X GET "https://api.Idmeta.com/2010-04-01/Accounts.json" \\
  -u "ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxx:your_auth_token"`,
  },

  firstCalls: [
    {
      title: "Send an SMS",
      code: `curl -X POST "https://api.Idmeta.com/2010-04-01/Accounts/ACxxxx/Messages.json" \\
  --data-urlencode "From=+1234567890" \\
  --data-urlencode "To=+0987654321" \\
  --data-urlencode "Body=Hello from Idmeta!" \\
  -u "ACxxxx:your_auth_token"`,
    },
    {
      title: "Make a Phone Call",
      code: `curl -X POST "https://api.Idmeta.com/2010-04-01/Accounts/ACxxxx/Calls.json" \\
  --data-urlencode "From=+1234567890" \\
  --data-urlencode "To=+0987654321" \\
  --data-urlencode "Url=http://demo.Idmeta.com/docs/voice.xml" \\
  -u "ACxxxx:your_auth_token"`,
    },
  ],

  sdks: [
    { name: "Node.js", install: "npm install Idmeta" },
    { name: "Python", install: "pip install Idmeta" },
    { name: "PHP", install: "composer require Idmeta/sdk" },
  ],

  rateLimits: {
    title: "API Rate Limits",
    text: "API requests are limited to prevent abuse. Check response headers for rate limit information.",
  },

  errors: {
    description:
      "Idmeta APIs use conventional HTTP response codes and return detailed error information in JSON format.",
    code: `{
  "code": 21211,
  "message": "The 'To' number is not a valid phone number.",
  "more_info": "https://www.Idmeta.com/docs/errors/21211",
  "status": 400
}`,
  },
};
