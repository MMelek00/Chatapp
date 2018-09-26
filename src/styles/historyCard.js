import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  homeContainer: {
    width: "90%",
    height: 200,
    justifyContent: "center",
    backgroundColor: "gray",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 10
  },
  text: {
    fontFamily: "Roboto_medium",
    fontSize: 20
  },
  text3: {
    fontFamily: "Roboto_medium",
    fontSize: 20,
    color: "#c50d66"
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    paddingLeft: 20
  },
  text2: {
    paddingLeft: 10
  },
  container2: {
    padding: 10,
    paddingLeft: 20
  },
  linktext: {
    fontFamily: "Roboto_medium",
    color: "blue"
  }
});

export default styles;
