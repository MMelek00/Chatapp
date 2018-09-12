import React from "react";
import { StyleSheet, Text, View } from "react-native";
//import * as firebase from "firebase";
import UserCard from "../component/UserCard";
export default class Main extends React.Component {
  state = {};

  componentDidMount() {}
  render() {
    return (
      <View style={styles.container}>
        <UserCard />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
    // justifyContent: "center",
    // alignItems: "center"
  }
});
