import React from "react";
import { StyleSheet, Dimensions } from "react-native";
//import * as firebase from "firebase";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Picker
} from "native-base";
import { Icon } from "react-native-elements";
import UserCard from "../component/UserCard";
export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "Profile"
    };
  }
  onValueChange(value: string) {
    this.props.navigation.navigate(value);
  }
  render() {
    let deviceWidth = Dimensions.get("window").width;
    return (
      <Container>
        <Header>
          <Left />
          <Body style={{ paddingLeft: deviceWidth / 4 - 10 }}>
            <Title>BUSINESS APP</Title>
          </Body>
          <Right style={{ paddingRight: 8 }}>
            <Picker
              mode="dropdown"
              iosHeader="Select"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              style={{ width: undefined }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="New group" value="NewGroupe" />
              <Picker.Item label="Account" value="Profile" />
              <Picker.Item label="Setting" value="Settings" />
            </Picker>
          </Right>
        </Header>
        <UserCard />
      </Container>
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
