// src/data/Flutterdata.js

export const Flutterdata = {
  title: "Flutter SDK",
  subtitle:
    "Comprehensive guides, tools, and best practices to integrate Flutter SDK into your mobile applications.",

  // ================== ANDROID CONTENT ==================
  android: [
    {
      heading: "Getting Started (Android)",
      grid: true,
      items: [
        {
          title: "Install Flutter SDK",
          text: "Download Flutter SDK for Android from flutter.dev and set the path in your environment variables.",
          tags: ["Setup", "Android"],
          code: `# On macOS/Linux
export PATH="$PATH:$HOME/flutter/bin"

# On Windows (PowerShell)
setx PATH "%PATH%;C:\\flutter\\bin"`,
          callout: {
            type: "warning",
            text: "After updating PATH, restart your terminal so Flutter commands work correctly.",
          },
        },
        {
          title: "Gradle Configuration",
          text: "Ensure your Gradle and Kotlin versions are compatible with Flutter SDK. Update android/build.gradle accordingly.",
          tags: ["Gradle", "Kotlin"],
          code: `buildscript {
  ext.kotlin_version = "1.8.0"
  dependencies {
    classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlin_version"
  }
}`,
          callout: {
            type: "tip",
            text: "Keep Gradle and Kotlin updated to avoid build errors during project builds.",
          },
        },
      ],
    },
    {
      heading: "Core Features",
      grid: true,
      items: [
        {
          title: "SDK Initialization",
          text: "Initialize Flutter SDK in main.dart with your Android API key before calling runApp().",
          code: `import 'package:flutter_sdk/flutter_sdk.dart';

void main() {
  final sdk = FlutterSdk(apiKey: "ANDROID_API_KEY_123");
  sdk.init();
  runApp(MyApp());
}`,
          callout: {
            type: "success",
            text: "Always initialize the SDK before runApp() to avoid runtime crashes.",
          },
        },
        {
          title: "Permissions",
          text: "Update your AndroidManifest.xml with required permissions for internet, push notifications, and storage.",
          code: `<uses-permission android:name="android.permission.INTERNET"/>
<uses-permission android:name="android.permission.POST_NOTIFICATIONS"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>`,
          callout: {
            type: "info",
            text: "Request runtime permissions in code for Android 13+ to comply with new requirements.",
          },
        },
      ],
    },
    {
      heading: "Best Practices",
      stacked: true,
      items: [
        {
          title: "UI Responsiveness",
          text: "Always keep long-running tasks in background isolates. Avoid blocking the main UI thread.",
          callout: {
            type: "tip",
            text: "Use the `compute()` function in Flutter to move heavy operations off the main thread.",
          },
        },
        {
          title: "Network Optimization",
          text: "Use Dio or http packages with caching. Retry failed requests with exponential backoff.",
          callout: {
            type: "info",
            text: "Use interceptors in Dio to handle retries and add authentication tokens automatically.",
          },
        },
        {
          title: "Security",
          text: "Use Android Keystore for secure storage. Avoid hardcoding API keys directly in code.",
          callout: {
            type: "warning",
            text: "Never store secrets in plain text or inside version control.",
          },
        },
      ],
    },
    {
      heading: "Debugging & Monitoring",
      grid: true,
      items: [
        {
          title: "Enable Debug Logs",
          text: "Enable SDK debug logs for Android using:",
          code: `sdk.enableLogs("debug");`,
          callout: {
            type: "info",
            text: "Only enable debug logs during development, not in production builds.",
          },
        },
        {
          title: "Error Tracking",
          text: "Use Firebase Crashlytics to automatically log unhandled errors.",
          code: `try {
  await sdk.users.get("invalid_id");
} catch (e) {
  FirebaseCrashlytics.instance.recordError(e, null);
}`,
          callout: {
            type: "success",
            text: "Integrating Crashlytics improves visibility of user-facing issues in real time.",
          },
        },
      ],
    },
  ],

  // ================== IOS CONTENT ==================
  ios: [
    {
      heading: "Getting Started (iOS)",
      grid: true,
      items: [
        {
          title: "Xcode Setup",
          text: "Install Xcode and ensure the command line tools are configured.",
          tags: ["Setup", "iOS"],
          code: `# Verify installation
xcode-select -p

# Accept Xcode license
sudo xcodebuild -license`,
          callout: {
            type: "warning",
            text: "You must accept the Xcode license before you can build iOS projects.",
          },
        },
        {
          title: "CocoaPods Configuration",
          text: "Flutter iOS projects rely on CocoaPods. Install or update it using:",
          tags: ["CocoaPods"],
          code: `sudo gem install cocoapods
pod repo update`,
          callout: {
            type: "tip",
            text: "Always run `pod install` inside the `ios` folder after adding new Flutter plugins.",
          },
        },
      ],
    },
    {
      heading: "Core Features",
      grid: true,
      items: [
        {
          title: "SDK Initialization",
          text: "Initialize the Flutter SDK with iOS API key in your main.dart file.",
          code: `import 'package:flutter_sdk/flutter_sdk.dart';

void main() {
  final sdk = FlutterSdk(apiKey: "IOS_API_KEY_456");
  sdk.init();
  runApp(MyApp());
}`,
          callout: {
            type: "success",
            text: "Use environment variables or secure storage for API keys instead of hardcoding them.",
          },
        },
        {
          title: "iOS Permissions",
          text: "Update your Info.plist file for camera, microphone, and push notifications.",
          code: `<key>NSCameraUsageDescription</key>
<string>This app requires camera access to scan QR codes.</string>
<key>NSMicrophoneUsageDescription</key>
<string>This app requires microphone access for voice input.</string>
<key>UIBackgroundModes</key>
<array>
  <string>remote-notification</string>
</array>`,
          callout: {
            type: "info",
            text: "Apple reviewers may reject your app if you request unnecessary permissions.",
          },
        },
      ],
    },
    {
      heading: "Best Practices",
      stacked: true,
      items: [
        {
          title: "App Store Compliance",
          text: "Ensure you follow Apple’s guidelines, especially for privacy, permissions, and tracking.",
          callout: {
            type: "warning",
            text: "Non-compliance can lead to rejection during App Store review.",
          },
        },
        {
          title: "Performance",
          text: "Use Instruments in Xcode to profile memory usage and reduce startup time.",
          callout: {
            type: "tip",
            text: "Focus on reducing your app’s launch time to under 2 seconds for a better UX.",
          },
        },
        {
          title: "Security",
          text: "Store sensitive information in Keychain using flutter_secure_storage.",
          callout: {
            type: "info",
            text: "Keychain provides OS-level encryption for sensitive data on iOS.",
          },
        },
      ],
    },
    {
      heading: "Debugging & Monitoring",
      grid: true,
      items: [
        {
          title: "Debug Logs",
          text: "Enable SDK logs for iOS debugging:",
          code: `sdk.enableLogs("debug");`,
          callout: {
            type: "info",
            text: "Logs should be disabled in production builds to avoid exposing sensitive info.",
          },
        },
        {
          title: "Crash Reporting",
          text: "Use Sentry or Firebase Crashlytics to capture runtime errors in iOS builds.",
          code: `try {
  await sdk.users.get("missing_user");
} catch (e) {
  print("iOS Error: $e");
}`,
          callout: {
            type: "success",
            text: "Monitoring errors helps ensure app stability and user trust.",
          },
        },
      ],
    },
  ],
};
