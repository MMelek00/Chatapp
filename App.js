// @flow
import boot from "./src/boot/index";
import { YellowBox } from "react-native";

YellowBox.ignoreWarnings([
    "Expo.Fingerprint has been renamed to Expo.LocalAuthentication. The old name might be removed in the future releases.",
    "Remote debugger is in a background tab which may cause apps to perform slowly. Fix this by foregrounding the tab (or opening it in a separate window).",
]);

const app = boot();

export default app;
