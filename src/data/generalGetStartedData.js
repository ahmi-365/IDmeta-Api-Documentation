// src/data/generalGetStartedData.js

export const generalGetStartedData = {
  title: "Get started with your trial account",

  welcome: {
    heading: "Welcome to the API!",
    text: "Follow this guide to set up your trial account and make your first API call.",
  },

  overview: {
    heading: "Overview",
    text: "Your trial account gives you access to all API features with some usage limitations. This guide will walk you through the essential steps to get started.",
  },

  steps: [
    {
      title: "Step 1: Account Setup",
      text: "After signing up, you'll receive confirmation credentials via email. Keep these secure as they'll be used for API authentication.",
    },
    {
      title: "Step 2: API Keys",
      text: "Navigate to your dashboard to find your API keys. You'll need both your Account SID and Auth Token for making API requests.",
      note: {
        title: "Important Security Note",
        text: "Never expose your Auth Token in client-side code. Always use it on your server or in secure environments only.",
      },
    },
    {
      title: "Step 3: Your First API Call",
      text: "Test your setup with a simple API call. Here's an example using cURL:",
      code: `curl -X GET "https://api.example.com/v1/accounts" \\
  -u "your_account_sid:your_auth_token"`,
    },
  ],

  nextSteps: {
    heading: "Next Steps",
    list: [
      "Explore the API reference documentation",
      "Set up your development environment",
      "Try the SDK for your preferred programming language",
      "Join our developer community for support",
    ],
  },
};
