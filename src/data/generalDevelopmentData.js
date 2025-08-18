// src/data/generalDevelopmentData.js

export const generalDevelopmentData = {
  title: "Set up your local development environment",
  subtitle:
    "Configure your development environment for optimal API integration and testing.",

  prerequisites: {
    heading: "Prerequisites",
    items: [
      "A modern code editor (VS Code, Sublime Text, or similar)",
      "Git version control system",
      "Node.js (version 16 or higher)",
      "Your API credentials from the previous setup",
    ],
  },

  tools: {
    heading: "Development Tools",
    sections: [
      {
        title: "API Testing Tools",
        content: {
          note: "Recommended Tools:",
          items: [
            "Postman - Visual API testing and documentation",
            "Insomnia - Lightweight REST client",
            "cURL - Command-line tool for API requests",
          ],
        },
      },
      {
        title: "Environment Variables",
        description:
          "Store your API credentials securely using environment variables. Create a `.env` file in your project root:",
        code: `# .env file
API_ACCOUNT_SID=your_account_sid_here
API_AUTH_TOKEN=your_auth_token_here
API_BASE_URL=https://api.example.com/v1`,
        warning: {
          title: "Security Warning",
          text: "Never commit your .env file to version control. Add it to your .gitignore file.",
        },
      },
    ],
  },

  sdk: {
    heading: "SDK Installation",
    sections: [
      {
        title: "Node.js/JavaScript",
        code: `npm install api-sdk
# or
yarn add api-sdk`,
      },
      {
        title: "Python",
        code: `pip install api-sdk
# or
pip3 install api-sdk`,
      },
    ],
  },

  testing: {
    heading: "Testing Your Setup",
    description: "Verify your development environment with this simple test:",
    code: `# Test API connectivity
curl -X GET "$API_BASE_URL/health" \\
  -u "$API_ACCOUNT_SID:$API_AUTH_TOKEN"`,
  },

  nextSteps: {
    heading: "Next Steps",
    items: [
      "Explore the API reference documentation",
      "Set up webhooks for real-time notifications",
      "Implement error handling and logging",
      "Join our developer community for support",
    ],
  },
};
