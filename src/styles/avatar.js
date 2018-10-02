import { StyleSheet } from "react-native";
import colors from "../utils/colors";

import { normalize } from "../utils/fonts";

const styles = StyleSheet.create({
  badge: {
    position: "absolute",
    bottom: 0,
    height: 25,
    width: 25,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    zIndex: 1
  },
  icon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    height: 50,
    width: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    zIndex: 1
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: normalize(17)
  }
});

export default styles;
