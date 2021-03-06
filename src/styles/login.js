import { StyleSheet } from "react-native";
import { normalize } from "../utils/fonts";
import colors from "../utils/colors";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  textInput: {
    height: 45,
    width: "80%",
    borderRadius: 8,
    color: "black",
    padding: 15
  },
  Iteminput: {
    height: 50,
    width: "85%",
    backgroundColor: colors.border,
    borderWidth: 0,
    marginTop: 12,
    borderRadius: 8,
    padding: 12
  },
  textStyle: {
    color: colors.base,
    fontFamily: "Roboto_medium",
    fontSize: normalize(45),
    alignSelf: "flex-start",
    paddingLeft: 35,
    paddingBottom: 10
  },
  buttonstyle: {
    color: "white",
    fontFamily: "Roboto_medium",
    fontSize: normalize(25)
  },
  forgettext: {
    color: colors.base,
    fontFamily: "Roboto",
    fontSize: normalize(18),
    paddingLeft: 30,
    paddingRight: 10
  }
});

export default styles;
