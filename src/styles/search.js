import { StyleSheet } from "react-native";

import colors from "../utils/colors";

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  textInput: {
    color: "white",
    paddingLeft: 15,
    flex: 1
  },
  inputContainer: {
    flexDirection: "row",
    backgroundColor: colors.primary,
    borderRadius: 8,
    padding: 12
  },
  buttonsContainer: {
    flexDirection: "column",
    backgroundColor: colors.primary,
    borderRadius: 8,
    padding: 12
  }
});
export default styles;
