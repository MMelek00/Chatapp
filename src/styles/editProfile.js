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
    backgroundColor: "#ACACAC",
    paddingHorizontal: 22,
    paddingVertical: 12,
    marginTop: 10,
    borderRadius: 30
  },
  textInputt: {
    color: "black",
    paddingLeft: 15,
    fontSize: normalize(15),
    flex: 1,
    borderRadius: 30
  },
  title: {
    color: colors.grey,
    paddingLeft: 20,
    fontSize: normalize(12),
    fontWeight: "500"
  },
  shadow: {
    shadowColor: "#e0e0e0",
    shadowOffset: {
      width: -2,
      height: 2
    },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 2
  },
  button: {
    marginHorizontal: 0,
    marginVertical: 20
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
