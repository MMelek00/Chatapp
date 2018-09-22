import React from "react";
import { Container, Header, Left, Body, Right, Title } from "native-base";
import { Icon } from "react-native-elements";
class Settings extends React.Component {
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
            <Title>Settings</Title>
          </Body>
          <Right />
        </Header>
      </Container>
    );
  }
}

export default Settings;
