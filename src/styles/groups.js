import { StyleSheet } from "react-native";
import colors from "../utils/colors";

import { normalize } from "../utils/fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textInput: {
    height: 80,
    color: "#fff",
    paddingLeft: 100,
    backgroundColor: colors.primary
  },
  avatarUpload: {
    position: "absolute",
    marginTop: 12,
    zIndex: 99
  },
  usersContainer: {
    flex: 9,
    marginTop: 50
  },
  addIcon: {
    marginRight: 5
  }
});

export default styles;
