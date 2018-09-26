import { Platform, Dimensions } from "react-native";

const DEVICE_SCALE = Dimensions.get("window").width / 375;

const DEFAULT_FONT = "helvetica";
const SECONDARY_FONT = Platform.OS === "android" ? "basis" : "helvetica";

function normalize(size: number): number {
  return Math.round(DEVICE_SCALE * size);
}

export default {
  cairo: DEFAULT_FONT,
  secondary: SECONDARY_FONT,
  normalize
};
