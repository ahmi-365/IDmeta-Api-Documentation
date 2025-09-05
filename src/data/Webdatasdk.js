export const Webdatasdk = {
  title: "Web SDK",
  subtitle:
    "Comprehensive guides, tools, and best practices to build secure and scalable applications with the Web SDK.",
  sections: [
    {
      heading: "Core Features",
      grid: true,
      items: [
        {
          icon: "bg-primary",
          title: "Installation",
          text: "Install the SDK easily using npm or yarn and get started in minutes.",
          tagsTitle: "Package Managers:",
          tags: ["npm", "yarn"],
          code: `// npm
npm install my-web-sdk

// yarn
yarn add my-web-sdk`,
        },
        {
          icon: "bg-green-500",
          title: "Basic Setup",
          text: "Initialize the SDK before making any API calls in your app entry file.",
          tagsTitle: "Steps:",
          tags: ["Import", "Configure", "Init"],
          code: `import { WebSDK } from "my-web-sdk";

const sdk = new WebSDK({ apiKey: "YOUR_API_KEY" });
sdk.init();`,
        },
        {
          icon: "bg-purple-500",
          title: "User Management",
          text: "Create, update, and manage users securely with a few lines of code.",
          tagsTitle: "Capabilities:",
          tags: ["Create", "Update", "Delete"],
          code: `// Create user
const user = await sdk.users.create({
  name: "John Doe",
  email: "john@example.com",
});`,
        },
        {
          icon: "bg-blue-500",
          title: "Transactions",
          text: "Process payments, handle subscriptions, and manage refunds easily.",
          tagsTitle: "Supports:",
          tags: ["Payments", "Subscriptions", "Refunds"],
          code: `// Create transaction
await sdk.transactions.create({
  amount: 100,
  currency: "USD",
});`,
        },
      ],
    },
    {
      heading: "Validation & APIs",
      grid: true,
      items: [
        {
          title: "Authentication API",
          text: "Secure login and authentication system with token-based sessions.",
          code: `// Authenticate user
const auth = await sdk.auth.login({
  username: "john",
  password: "secret",
});`,
        },
        {
          title: "Data API",
          text: "Fetch and update data from your backend securely via SDK methods.",
          code: `// Fetch user profile
const profile = await sdk.users.get("user123");`,
        },
        {
          title: "Notifications API",
          text: "Send real-time notifications to your users via Web SDK.",
          code: `// Push notification
await sdk.notifications.send({
  user: "user123",
  message: "Welcome to Web SDK!",
});`,
        },
      ],
    },
    {
      heading: "Best Practices",
      stacked: true,
      items: [
        {
          title: "Performance",
          text: "Use lazy loading, batch multiple API calls, and cache frequent responses.",
        },
        {
          title: "Security",
          text: "Never expose secrets in frontend, use HTTPS always, and rotate keys regularly.",
        },
        {
          title: "Scalability",
          text: "Structure SDK calls efficiently and avoid redundant API requests.",
        },
      ],
    },
    {
      heading: "Monitoring & Debugging",
      grid: true,
      items: [
        {
          title: "Logging",
          text: "Enable debug logs in development mode for better insights.",
          code: `sdk.enableLogs("debug");`,
        },
        {
          title: "Error Handling",
          text: "Catch errors gracefully and show user-friendly messages.",
          code: `try {
  await sdk.users.get("invalid");
} catch (err) {
  console.error("SDK Error:", err.message);
}`,
        },
        {
          title: "Analytics",
          text: "Track usage metrics and monitor API performance in real-time.",
          code: `const metrics = await sdk.analytics.get("usage");`,
        },
      ],
    },
    {
      heading: "SDK Libraries",
      grid: true,
      items: [
        {
          title: "Server-side SDKs",
          sdkList: [
            { name: "Node.js", command: "npm install my-web-sdk" },
            { name: "Python", command: "pip install my-web-sdk" },
            { name: "PHP", command: "composer require my/web-sdk" },
            { name: "Java", command: "Maven/Gradle" },
          ],
        },
        {
          title: "Client-side SDKs",
          sdkList: [
            { name: "JavaScript", command: "npm install my-web-sdk" },
            { name: "iOS", command: "CocoaPods/SPM" },
            { name: "Android", command: "Gradle" },
            {
              name: "React Native",
              command: "npm install my-web-sdk-react-native",
            },
          ],
        },
      ],
    },
    {
      heading: "Quick Start Guides",
      alert: {
        title: "Supercharge your development",
        text: "Follow these step-by-step guides to integrate Web SDK quickly.",
        type: "primary",
      },
      grid: true,
      items: [
        { title: "Install SDK", subtitle: "2-minute quickstart" },
        { title: "Setup Authentication", subtitle: "5-minute guide" },
        { title: "Manage Users", subtitle: "8-minute tutorial" },
        { title: "Process Transactions", subtitle: "10-minute walkthrough" },
        { title: "Enable Notifications", subtitle: "6-minute tutorial" },
      ],
    },
  ],
};
