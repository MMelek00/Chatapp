import React from "react";
import { Container, Header, Left, Body, Right, Title } from "native-base";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";

import { GetUser } from "../../../action/Users";
class EditProfile extends React.Component {
  componentDidMount = () => {
    this.props.GetUserProp();
  };
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
const mapDispatchToProps = dispatch => {
  return {
    GetUserProp: user => {
      return dispatch(GetUser());
    }
  };
};
export default connect(
  store => ({ Users: store.Users }),
  mapDispatchToProps
)(EditProfile);
