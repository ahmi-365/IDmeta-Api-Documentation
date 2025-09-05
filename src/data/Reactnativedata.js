// src/data/Reactnativedata.js
export const Reactnativedata = {
  title: "React Native SDK",
  subtitle:
    "Integrate React Native SDK to build high-performing cross-platform apps with native look and feel.",

  // ANDROID CONTENT
  android: [
    {
      heading: "Getting Started (Android)",
      stacked: true,
      items: [
        {
          title: "Install React Native CLI",
          text: "Set up your environment with React Native CLI for Android development.",
          code: `npm install -g react-native-cli`,
          note: "Ensure you have Android Studio and SDK Platform Tools installed.",
        },
        {
          title: "Create a New Project",
          text: "Initialize a new React Native project.",
          code: `npx react-native init MyApp`,
          tip: "Use `--version` flag if you need a specific RN version.",
        },
      ],
    },
    {
      heading: "Core Features (Android)",
      grid: true,
      items: [
        {
          title: "Material Design",
          text: "React Native automatically adapts to Android's Material Design principles.",
          note: "Use libraries like `react-native-paper` for Material components.",
        },
        {
          title: "Permissions",
          text: "Request runtime permissions for Camera, Location, and Storage.",
          warning: "Always declare required permissions in `AndroidManifest.xml`.",
        },
        {
          title: "Debugging",
          text: "Use Android Studio Logcat or Flipper for debugging.",
          tip: "Enable Hermes engine for improved performance and debugging support.",
        },
      ],
    },
    {
      heading: "Deployment (Android)",
      stacked: true,
      items: [
        {
          title: "Build APK",
          text: "Generate a debug build for testing.",
          code: `cd android && ./gradlew assembleDebug`,
        },
        {
          title: "Release Build",
          text: "Create a signed APK or App Bundle for publishing.",
          warning: "Configure `gradle.properties` and signing configs before building.",
        },
      ],
    },
  ],

  // IOS CONTENT
  ios: [
    {
      heading: "Getting Started (iOS)",
      stacked: true,
      items: [
        {
          title: "Install CocoaPods",
          text: "CocoaPods manages iOS dependencies in React Native.",
          code: `sudo gem install cocoapods`,
          note: "Xcode must be installed on your system before using CocoaPods.",
        },
        {
          title: "Create a New Project",
          text: "Initialize a new project and install iOS pods.",
          code: `npx react-native init MyApp
cd ios && pod install`,
          tip: "Always run `pod install` after adding iOS dependencies.",
        },
      ],
    },
    {
      heading: "Core Features (iOS)",
      grid: true,
      items: [
        {
          title: "Human Interface Guidelines",
          text: "React Native aligns with iOS design standards by default.",
          note: "Use `react-native-ios-kit` for additional native-styled components.",
        },
        {
          title: "Push Notifications",
          text: "Integrate Apple Push Notification service (APNs).",
          warning: "Register your app in Apple Developer Console before using APNs.",
        },
        {
          title: "Debugging on iOS",
          text: "Use Xcode debugger or Flipper for iOS debugging.",
          tip: "Connect a physical iPhone for accurate performance testing.",
        },
      ],
    },
    {
      heading: "Deployment (iOS)",
      stacked: true,
      items: [
        {
          title: "Build iOS App",
          text: "Build and run app in Xcode or CLI.",
          code: `cd ios && pod install
npx react-native run-ios`,
        },
        {
          title: "App Store Release",
          text: "Archive and upload the app via Xcode.",
          warning: "Ensure proper provisioning profiles and signing certificates.",
        },
      ],
    },
  ],
};
