import React from "react";
import { Container, Header, Left, Body, Right, Title } from "native-base";
import { Icon } from "react-native-elements";

class NewGroupe extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Icon
              name="arrow-back"
              color="white"
              onPress={() => this.props.navigation.goBack()}
            />
          </Left>
          <Body>
            <Title>NewGroupe</Title>
          </Body>
          <Right>
            <Icon
              name="check"
              color="white"
              onPress={() => this.props.navigation.goBack()}
            />
          </Right>
        </Header>
      </Container>
    );
  }
}

export default NewGroupe;
