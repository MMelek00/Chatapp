import React from "react";
import { Container, Header, Left, Body, Right, Title } from "native-base";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";


class EditProfile extends React.Component {

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
            <Title>EditProfile</Title>
          </Body>
          <Right />
        </Header>
      </Container>
    );
  }
}
export default EditProfile;
