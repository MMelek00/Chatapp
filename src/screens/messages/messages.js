import React from "react";
import { StyleSheet } from "react-native";
import MessageCard from "../component/messageCard";
import { Container } from "native-base";
export default class Messages extends React.Component {
  static navigationOptions = {
    title: "MESSAGES"
  };
  render() {
    return (
      <Container>
        <MessageCard />
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 5
  }
});
