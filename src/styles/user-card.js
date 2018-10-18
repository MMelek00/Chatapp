import { StyleSheet, Dimensions } from "react-native";

import colors from "../utils/colors";
import { normalize } from "../utils/fonts";
let Width = Dimensions.get("window").width;
const styles = StyleSheet.create({
  text: {
    fontSize: normalize(10),
    fontFamily: "Roboto_medium",
    color: "pink",
    paddingLeft: 5
  },
  text2: {
    fontSize: normalize(13),
    fontFamily: "Roboto_medium",
    paddingLeft: 5
  },
  footer: {
    flex: 1,
    paddingTop: 0,
    borderRadius: 10
  },
  span: {
    width: Width / 2 - 5,
    borderBottomWidth: 0
  },
  item: {
    flex: 3,
    borderRadius: 10
  },
  card: {
    flex: 1,
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10
  },
  ButtonStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: colors.base,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    width: Width / 3,
    height: 25
  },
  sendButton: {
    backgroundColor: colors.base
  }
});

export default styles;
