import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Item, Header, Title, Body, Container } from "native-base";
import { Icon, ButtonGroup } from "react-native-elements";

export default class Search extends React.Component {
  state = {
    index: 0
  };
  updateIndex = index => {
    this.setState({ index });
  };

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Search</Title>
          </Body>
        </Header>
        <View style={styles.container}>
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
          <ButtonGroup
            selectedBackgroundColor="gray"
            onPress={this.updateIndex}
            selectedIndex={this.state.index}
            buttons={["Freelancer", "Part Time", "Full Time"]}
            containerStyle={{ height: 40 }}
          />
        </View>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ecf0f1"
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
