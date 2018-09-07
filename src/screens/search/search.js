import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import {
  Item,
  Button,
  Segment,
  Header,
  Title,
  Body,
  Container
} from "native-base";
import { Icon } from "react-native-elements";
import SegmentControl from "react-native-segment-controller";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { segment: 1 };
  }

  render() {
    return (
      <Container hasSegment>
        <Header hasSegment>
          <Body>
            <Title>Search</Title>
          </Body>
        </Header>
        <Item style={styles.Iteminput}>
          <Icon name="user" type="font-awesome" color="white" />
          <TextInput
            placeholder="Name"
            placeholderTextColor="white"
            ref={input => (this.firstname = input)}
            returnKeyType="next"
            onSubmitEditing={() => this.phonenumber.focus()}
            style={styles.textInput}
            autoCorrect={false}
            multiline={false}
            autoCapitalize="none"
            underlineColorAndroid="transparent"
            onChangeText={firstname => this.setState({ firstname })}
          />
        </Item>
        <SegmentControl
          values={["One", "Two", "Three", "Four"]}
          badges={[0, 5, 0, 2]}
          selectedIndex={0}
          height={40}
          onTabPress={() => {}}
          borderRadius={5}
        />
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#EBEBEB"
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
    width: "90%",
    backgroundColor: "#57A0FD",
    borderColor: "#a39e9e",
    marginTop: 12,
    borderRadius: 8,
    padding: 12
  }
});
