export const Trustvalidationdata = {
  title: "Trust Validation",
  subtitle:
    "Comprehensive resources, tools, and examples to implement secure trust validation, identity checks, and fraud prevention across your applications.",
  sections: [
    {
      heading: "Core Trust Services",
      grid: true,
      items: [
        {
          icon: "bg-primary",
          title: "Identity Validation",
          text: "Confirm user identity through secure document, biometric, and account verification methods.",
          tagsTitle: "Methods:",
          tags: ["Biometrics", "ID Document", "KYC"],
        },
        {
          icon: "bg-green-500",
          title: "Fraud Detection",
          text: "Prevent fake signups and suspicious activities using risk scoring and pattern analysis.",
          tagsTitle: "Capabilities:",
          tags: ["Risk Scoring", "AI Detection", "Behavior Analysis"],
        },
        {
          icon: "bg-purple-500",
          title: "Access Control",
          text: "Ensure only trusted users and devices can access your services with adaptive authentication.",
          tagsTitle: "Features:",
          tags: ["MFA", "Device Trust", "Zero Trust"],
        },
        {
          icon: "bg-blue-500",
          title: "Compliance Checks",
          text: "Stay compliant with regulatory standards such as GDPR, HIPAA, and financial KYC.",
          tagsTitle: "Supports:",
          tags: ["GDPR", "HIPAA", "AML/KYC"],
        },
      ],
    },
    {
      heading: "Validation APIs",
      grid: true,
      items: [
        {
          title: "Trust Score API",
          text: "Assign real-time trust scores to users and transactions based on multiple risk factors.",
          code: `// Generate trust score
const trustScore = await client.trust
  .scores
  .create({ user: 'user123', factors: ['device', 'location', 'behavior'] });`,
        },
        {
          title: "Document Verification API",
          text: "Verify authenticity of ID documents like passports and driver’s licenses.",
          code: `// Validate document
const verification = await client.trust
  .documents
  .verify({ file: 'passport.jpg', country: 'US' });`,
        },
      ],
    },
    {
      heading: "Platform Tools",
      stacked: true,
      items: [
        {
          title: "Rules Engine",
          text: "Customize validation workflows with policy-based rules and automation.",
        },
        {
          title: "Analytics Dashboard",
          text: "Monitor trust scores, suspicious activity, and validation results in real time.",
        },
        {
          title: "Integration Hub",
          text: "Connect with third-party providers for extended fraud prevention and compliance checks.",
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
            { name: "Node.js", command: "npm install idmeta-trust" },
            { name: "Python", command: "pip install idmeta-trust" },
            { name: "PHP", command: "composer require idmeta/trust-sdk" },
            { name: "Java", command: "Maven/Gradle" },
          ],
        },
        {
          title: "Client-side SDKs",
          sdkList: [
            { name: "JavaScript", command: "npm install @idmeta/trust-js" },
            { name: "iOS", command: "CocoaPods/SPM" },
            { name: "Android", command: "Gradle" },
            {
              name: "React Native",
              command: "npm install @idmeta/trust-react-native",
            },
          ],
        },
      ],
    },
    {
      heading: "Quick Start Guides",
      alert: {
        title: "Secure your app with trust validation",
        text: "Follow these step-by-step guides to integrate trust checks and fraud prevention quickly.",
        type: "primary",
      },
      grid: true,
      items: [
        { title: "Validate user identity", subtitle: "5-minute quickstart guide" },
        { title: "Add document verification", subtitle: "10-minute tutorial" },
        { title: "Enable fraud detection", subtitle: "15-minute guide" },
        { title: "Implement trust scoring", subtitle: "8-minute walkthrough" },
      ],
    },
  ],
};
