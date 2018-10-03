import React, { Component } from "react";
import { Container, List, ListItem, Text } from "native-base";
export default class HomePicker extends Component {
  render() {
    return (
      <Container>
        <List>
          <ListItem
            button
            onPress={() => this.props.navigation.navigate("NewGroupe")}
          >
            <Text>New Groupe</Text>
          </ListItem>
          <ListItem
            button
            onPress={() => this.props.navigation.navigate("Profile")}
          >
            <Text>Account</Text>
          </ListItem>
          <ListItem
            button
            onPress={() => this.props.navigation.navigate("Settings")}
          >
            <Text>Settings</Text>
          </ListItem>
        </List>
      </Container>
    );
  }
}
