import { StyleSheet, Dimensions } from "react-native";

import { normalize } from "../utils/fonts";
import colors from "../utils/colors";
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "white"
  },
  inputContainer: {
    flexDirection: "row",
    backgroundColor: colors.border,
    padding: 12,
    marginBottom: 10,
    borderRadius: 30
  },
  textInputt: {
    color: colors.darkGrey,
    paddingLeft: 15,
    fontSize: normalize(15),
    flex: 1,
    borderRadius: 30
  },
  title: {
    color: colors.darkGrey,
    marginLeft: 13,
    marginBottom: 7,
    fontSize: normalize(13),
    fontWeight: "500"
  },
  button: {
    marginHorizontal: 0,
    marginVertical: 20
  },
  textArea: {
    padding: 10,
    backgroundColor: colors.border,
    borderRadius: 30,
  }
});

export const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: normalize(16),
    fontWeight: "500",
    padding: 12,
    borderWidth: 0,
    backgroundColor: colors.border,
    marginBottom: 10,
    borderRadius: 30,
    color: colors.base
  }
});

export const pickerHalfStyles = StyleSheet.create({
  inputIOS: {
    fontSize: normalize(16),
    fontWeight: "500",
    paddingVertical: 5,
    borderWidth: 0,
    borderRadius: 4,
    backgroundColor: "white",
    color: colors.base,
    width: deviceWidth / 2.5
  }
});

export default styles;
