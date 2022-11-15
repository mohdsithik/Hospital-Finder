import { DdSdkReactNative, DdSdkReactNativeConfiguration } from '@datadog/mobile-react-native';


const config = new DdSdkReactNativeConfiguration(
    "pubba338cf85a7737c4d3429c4981205257",
    "staging",
    "39a43d73-361a-49d5-a417-b32ce340d619",
    true, // track User interactions (e.g.: Tap on buttons. You can use 'accessibilityLabel' element property to give tap action the name, otherwise element type will be reported)
    true, // track XHR Resources
    true // track Errors
)
// Optional: Select your Datadog website (one of "US", "EU" or "GOV")
config.site = "US"
// Optional: enable or disable native crash reports
config.nativeCrashReportEnabled = true
// Optional: sample RUM sessions (here, 80% of session will be sent to Datadog. Default = 100%)
config.sessionSamplingRate = 80

await DdSdkReactNative.initialize(config)

// Once SDK is initialized you need to setup view tracking to be able to see data in the RUM Dashboard.