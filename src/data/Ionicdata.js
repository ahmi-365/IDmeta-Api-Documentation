// src/data/Ionicdata.js

export const Ionicdata = {
  title: "Ionic SDK",
  subtitle:
    "Build hybrid mobile apps faster with Ionic SDK. Learn how to integrate, configure, and optimize Ionic in your projects.",

  // ANDROID CONTENT
  android: [
    {
      heading: "Getting Started (Android)",
      stacked: true,
      items: [
        {
          title: "Install Ionic CLI",
          text: "Install Ionic CLI globally before starting development.",
          code: `npm install -g @ionic/cli`,
          note: "Make sure Node.js (LTS version) is installed on your system.",
        },
        {
          title: "Create a New Project",
          text: "Generate a starter app using Angular, React, or Vue.",
          code: `ionic start myApp tabs --type=angular`,
          tip: "Use the `--type=react` or `--type=vue` flag for React or Vue projects.",
        },
      ],
    },
    {
      heading: "Core Features (Android)",
      grid: true,
      items: [
        {
          title: "Capacitor Plugins",
          text: "Access device APIs such as Camera, Storage, and Geolocation with Capacitor.",
          note: "Use Capacitor over Cordova for better Android support.",
        },
        {
          title: "Material Design",
          text: "Ionic automatically applies Material Design styles on Android devices.",
          tip: "Customize Android-specific themes in `variables.scss`.",
        },
        {
          title: "Testing on Android",
          text: "Use Android Studio AVDs or connect a physical device via USB.",
          warning: "Enable Developer Mode on your Android device before running apps.",
        },
      ],
    },
    {
      heading: "Deployment (Android)",
      stacked: true,
      items: [
        {
          title: "Build APK",
          text: "Use Capacitor to build Android binaries.",
          code: `ionic build
npx cap add android
npx cap open android`,
        },
        {
          title: "Release Build",
          text: "Generate a signed APK or App Bundle from Android Studio.",
          warning: "Don’t forget to configure your keystore before releasing.",
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
          text: "CocoaPods is required for iOS builds.",
          code: `sudo gem install cocoapods`,
          note: "Ensure you have Xcode installed before installing CocoaPods.",
        },
        {
          title: "Create a New Project",
          text: "Start a new Ionic project and sync it with Xcode.",
          code: `ionic start myApp tabs --type=angular
npx cap add ios
npx cap open ios`,
        },
      ],
    },
    {
      heading: "Core Features (iOS)",
      grid: true,
      items: [
        {
          title: "Native Look",
          text: "Ionic automatically applies iOS Human Interface Guidelines styling.",
          tip: "Use Cupertino icons and iOS transitions for smoother UX.",
        },
        {
          title: "Push Notifications",
          text: "Configure Apple Push Notification service (APNs) with Capacitor.",
          warning: "Don’t forget to add your APNs key in Apple Developer Console.",
        },
        {
          title: "Testing on iOS",
          text: "Run your app in iOS Simulator or deploy directly to a device.",
          note: "You need an Apple Developer account to test on real devices.",
        },
      ],
    },
    {
      heading: "Deployment (iOS)",
      stacked: true,
      items: [
        {
          title: "Build iOS App",
          text: "Build and sync with Xcode for testing.",
          code: `ionic build
npx cap add ios
npx cap open ios`,
        },
        {
          title: "App Store Release",
          text: "Archive the app in Xcode and upload it via Transporter or directly from Xcode.",
          warning: "Ensure you follow Apple’s guidelines for app submissions.",
        },
      ],
    },
  ],
};
