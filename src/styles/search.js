import { StyleSheet, Dimensions } from "react-native";

import { normalize } from "../utils/fonts";
import colors from "../utils/colors";
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  textInput: {
    color: "white",
    paddingLeft: 15,
    fontSize: normalize(13),
    flex: 1
  },
  title: {
    color: colors.grey,
    fontSize: normalize(12),
    fontWeight: "500"
  },
  icon: {
    marginRight: 20,
  },
  inputContainer: {
    flexDirection: "row",
    backgroundColor: colors.primary,
    paddingHorizontal: 22,
    paddingVertical: 12,
    marginBottom: 5,
  },
  shadow: {
    borderRadius: 8,
    shadowColor: "#e0e0e0",
    shadowOffset: {
      width: -2,
      height: 2
    },
    shadowOpacity: 1,
    shadowRadius: 1
  },
  row: {
    flexDirection: "row",
  },
  devider: {
    borderColor: colors.grey,
    borderRightWidth: 1.5,
    marginHorizontal: 10
  },
  card: {
    paddingHorizontal: 22,
    paddingVertical: 10,
    backgroundColor: "#fff",
    marginVertical: 5,
    borderRadius: 8,
    shadowColor: "#e0e0e0",
    shadowOffset: {
      width: -2,
      height: 2
    },
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  button: {
    marginHorizontal: 0,
    marginTop: deviceHeight / 5
  }
});


export const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: normalize(16),
    fontWeight: "500",
    paddingVertical: 5,
    borderWidth: 0,
    borderRadius: 4,
    backgroundColor: "white",
    color: colors.base,
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
