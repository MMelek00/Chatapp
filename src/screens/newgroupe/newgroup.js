import React from "react";
import {
  Container,
  Left,
  Body,
  Right,
  Title,
  Content,
  Input,
  View
} from "native-base";
import { Icon, Header } from "react-native-elements";
import { StyleSheet } from "react-native";

class NewGroupe extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Icon
              name="arrow-back"
              color="white"
              onPress={() => this.props.navigation.navigate("Main")}
            />
          </Left>
          <Body>
            <Title>NEW GROUPE</Title>
          </Body>
          <Right>
            <Icon
              name="check"
              color="white"
              onPress={() => this.props.navigation.navigate("Main")}
            />
          </Right>
        </Header>
        <Content>
          <View style={styles.Iteminput}>
            <Input placeholder="Groupe Name" style={styles.textInput} />
          </View>
          <View style={{ paddingTop: 20, paddingLeft: 30 }}>
            <Icon
              raised
              name="camera"
              type="entypo"
              color="#f50"
              size={35}
              onPress={() => console.log("hello")}
            />
          </View>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  textInput: {
    height: 60,
    width: "60%",
    color: "black",
    paddingLeft: 0,
    alignSelf: "flex-end"
  },
  Iteminput: {
    height: 60,
    width: "100%",
    backgroundColor: "#57A0FD",
    borderColor: "#a39e9e",
    position: "absolute",
    zIndex: 2
  }
});

export default NewGroupe;
