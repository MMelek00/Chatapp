import React from "react";
import { Container, Header, Left, Body, Right, Title } from "native-base";
import { Icon } from "react-native-elements";
const NewGroupe = () => {
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
          <Title>NewGroupe</Title>
        </Body>
        <Right />
      </Header>
    </Container>
  );
};

export default NewGroupe;
