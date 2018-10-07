// @flow
import boot from "./src/boot/index";
import { YellowBox, I18nManager } from "react-native";
import * as Expo from "expo";

I18nManager.forceRTL(false);
I18nManager.allowRTL(false);

if (!I18nManager.isRTL) {
  Expo.Updates.reload();
}

YellowBox.ignoreWarnings([
  "Expo.Fingerprint has been renamed to Expo.LocalAuthentication. The old name might be removed in the future releases.",
  "Remote debugger is in a background tab which may cause apps to perform slowly. Fix this by foregrounding the tab (or opening it in a separate window).",
  "Setting a timer for a long period of time, i.e. multiple minutes, is a performance and correctness issue on Android as it keeps the timer module awake, and timers can only be called when the app is in the foreground. See https://github.com/facebook/react-native/issues/12981 for more info."
]);

const app = boot();

export default app;
