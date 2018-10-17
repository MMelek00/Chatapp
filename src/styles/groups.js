import { StyleSheet } from "react-native";
import colors from "../utils/colors";
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
    marginTop: 35,
    marginLeft: 15,
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
