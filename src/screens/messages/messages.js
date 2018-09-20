import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MessageCard from "../component/messageCard";
import { Icon, Header } from "react-native-elements";
import { Container, Left, Body, Right, Title } from "native-base";
export default class Messages extends React.Component {
  state = { currentUser: null };

  componentDidMount() {}
  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Messages</Title>
          </Body>
          <Right />
        </Header>
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
