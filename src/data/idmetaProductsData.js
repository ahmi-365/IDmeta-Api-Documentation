export const idmetaProductsData = {
  title: "Idmeta Products",
  subtitle: "Comprehensive API documentation, quickstarts, SDKs, and tutorials for all Idmeta products and services.",
  sections: [
    {
      heading: "Communication APIs",
      grid: true,
      items: [
        {
          icon: "bg-primary",
          title: "Messaging",
          text: "Send and receive SMS, MMS, and WhatsApp messages programmatically.",
          tagsTitle: "Supported Channels:",
          tags: ["SMS", "MMS", "WhatsApp"],
        },
        {
          icon: "bg-green-500",
          title: "Voice",
          text: "Make and receive phone calls with advanced programmable features.",
          tagsTitle: "Features:",
          tags: ["Call Recording", "Conferencing", "TwiML"],
        },
        {
          icon: "bg-purple-500",
          title: "Video",
          text: "Build video calling and conferencing applications with real-time communication.",
          tagsTitle: "Capabilities:",
          tags: ["1:1 Video", "Group Rooms", "Recording"],
        },
        {
          icon: "bg-blue-500",
          title: "Chat",
          text: "Add real-time chat and messaging capabilities to web and mobile apps.",
          tagsTitle: "Features:",
          tags: ["Channels", "Media", "Push Notifications"],
        },
      ],
    },
    {
      heading: "Identity & Verification",
      grid: true,
      items: [
        {
          title: "Verify API",
          text: "Add user verification via SMS, voice, email, or push notifications to your applications.",
          code: `// Send verification code
const verification = await client.verify.v2
  .services('VAxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
  .verifications
  .create({ to: '+1234567890', channel: 'sms' });`,
        },
        {
          title: "Lookup API",
          text: "Get information about phone numbers including carrier, location, and line type data.",
          code: `// Lookup phone number information
const phoneNumber = await client.lookups.v2
  .phoneNumbers('+1234567890')
  .fetch({ fields: 'line_type_intelligence' });`,
        },
      ],
    },
    {
      heading: "Platform Services",
      stacked: true,
      items: [
        {
          title: "Functions",
          text: "Deploy serverless JavaScript code that runs on Idmeta's infrastructure.",
        },
        {
          title: "Studio",
          text: "Build communication workflows with a visual drag-and-drop interface.",
        },
        {
          title: "Flex",
          text: "Programmable contact center platform for customer service applications.",
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
            { name: "Node.js", command: "npm install Idmeta" },
            { name: "Python", command: "pip install Idmeta" },
            { name: "PHP", command: "composer require Idmeta/sdk" },
            { name: "Java", command: "Maven/Gradle" },
          ],
        },
        {
          title: "Client-side SDKs",
          sdkList: [
            { name: "JavaScript", command: "npm install @Idmeta/voice-sdk" },
            { name: "iOS", command: "CocoaPods/SPM" },
            { name: "Android", command: "Gradle" },
            { name: "React Native", command: "npm install @Idmeta/voice-react-native-sdk" },
          ],
        },
      ],
    },
    {
      heading: "Quick Start Guides",
      alert: {
        title: "Ready to get started?",
        text: "Choose a product and follow our step-by-step guides to get up and running quickly.",
        type: "primary",
      },
      grid: true,
      items: [
        { title: "Send your first SMS", subtitle: "5-minute quickstart guide" },
        { title: "Make a voice call", subtitle: "10-minute tutorial" },
        { title: "Set up video calling", subtitle: "15-minute guide" },
        { title: "Add user verification", subtitle: "8-minute walkthrough" },
      ],
    },
  ],
};
