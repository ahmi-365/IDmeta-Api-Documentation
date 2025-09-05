export const Mobiledatasdk = {
  title: "Mobile SDK",
  subtitle:
    "Integrate core mobile features, authentication, and APIs into your applications with minimal setup.",
  sections: [
    {
      heading: "Common Issues",
      cards: [
        {
          title: "Initialization Errors",
          text: "SDK not set up correctly can cause app crashes or unexpected behavior.",
          solution: "Initialize SDK in the app entry point before using its features.",
          code: `// Example: Proper initialization in React Native
import { MobileSDK } from "example-sdk";

MobileSDK.init({
  apiKey: "YOUR_API_KEY",
  environment: "production",
});`,
        },
        {
          title: "API Calls Not Working",
          text: "Wrong endpoints or expired tokens often block requests.",
          solution: "Verify API keys, tokens, and make sure your base URL is correct.",
          code: `// Example: API call
const profile = await MobileSDK.api.get("/user/profile");`,
        },
        {
          title: "Performance Issues",
          text: "Heavy SDK operations can slow down app responsiveness.",
          solution: "Release unused resources and use lazy loading.",
          code: `// Example: Release resources on unmount
useEffect(() => {
  return () => MobileSDK.release();
}, []);`,
        },
      ],
    },
    {
      heading: "Mobile Tools",
      cards: [
        {
          title: "Push Notifications",
          text: "Engage users with real-time alerts and updates.",
          tip: "Segment users by interests for better targeting.",
          code: `// Subscribe to topic
MobileSDK.notifications.subscribe("offers");`,
        },
        {
          title: "Offline Support",
          text: "Allow app functionality without internet by caching data.",
          tip: "Sync data when the device is back online.",
          code: `// Save draft offline
await MobileSDK.storage.save("draft", { text: "Hello" });`,
        },
        {
          title: "Device Features",
          text: "Access native device features like camera, GPS, or sensors.",
          tip: "Request permissions only when necessary.",
          code: `// Get location
const location = await MobileSDK.device.getLocation();`,
        },
      ],
    },
    {
      heading: "Best Practices",
      lists: [
        {
          title: "Security",
          items: [
            "Use secure storage for sensitive data",
            "Rotate API keys regularly",
            "Enable SSL pinning",
          ],
          code: `// Store token securely
await MobileSDK.secureStore.set("token", userToken);`,
        },
        {
          title: "Performance",
          items: [
            "Lazy load SDK features",
            "Run heavy tasks in background",
            "Monitor memory usage",
          ],
          code: `// Lazy load a module
const Camera = await import("MobileSDK/camera");`,
        },
        {
          title: "User Experience",
          items: [
            "Explain why permissions are needed",
            "Ensure smooth cross-device experience",
            "Minimize app startup delay",
          ],
          code: `// Show permission message
alert("We need location access for nearby services.");`,
        },
      ],
    },
    {
      heading: "Validation APIs",
      cards: [
        {
          title: "Biometric Login",
          text: "Enable quick authentication using Face ID or Fingerprint.",
          code: `// Biometric auth
const success = await MobileSDK.auth.biometric();`,
        },
        {
          title: "SMS OTP",
          text: "Verify users via one-time password sent on mobile.",
          code: `// Send OTP
await MobileSDK.auth.sendOTP("+1234567890");`,
        },
      ],
    },
    {
      heading: "Monitoring",
      lists: [
        {
          title: "Crash Reports",
          items: [
            "Log crash details automatically",
            "Track device and OS info",
            "Alert devs on repeated crashes",
          ],
          code: `// Log crash
MobileSDK.logger.error("Crash detected", error);`,
        },
        {
          title: "Performance Tracking",
          items: [
            "Measure API latency",
            "Track startup time",
            "Check memory usage",
          ],
          code: `// Track API latency
const start = Date.now();
await MobileSDK.api.get("/ping");
console.log("Latency:", Date.now() - start, "ms");`,
        },
      ],
    },
  ],
};
