import React, { Component } from "react";
import firebase from "firebase";
import { View, Text } from "react-native";
import { Avatar, Button } from "react-native-elements";
import { connect } from "react-redux";

const storage = firebase.storage().ref();

class AboutHeader extends Component {
  constructor() {
    super();
    this.state = {
      firstname: ""
    };
    this.getImage("mmelek");
  }
  getImage(image) {
    let { state } = this;
    storage
      .child(`${image}.jpeg`)
      .getDownloadURL()
      .then(url => {
        state[image] = url;
        this.setState(state);
      })
      .catch(error => {
        // Handle any errors
      });
  }
  _signOutAsync = async () => {
    const { onLogOut } = this.props;
    const { navigate } = this.props.navigation;
    navigate("Auth");
    onLogOut(this.state).catch(e => console.log(`Error: ${e}`));
  };
  render() {
    return (
      <View
        style={{
          alignItems: "center"
        }}
      >
        <View>
          <Avatar
            width={190}
            height={190}
            rounded
            source={{
              uri: this.avatar
            }}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
          />
        </View>
        <Text
          style={{
            fontSize: 25,
            fontFamily: "Roboto_medium"
          }}
        >
          {this.props.member.firstName}
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontFamily: "Roboto_medium",
            color: "pink"
          }}
        >
          {this.props.member.email}
        </Text>
        <View style={{ width: 250, padding: 10 }}>
          <Button
            rounded
            title="Send message"
            rightIcon={{
              name: "send",
              type: "materialIcons",
              size: 20,
              style: { paddingLeft: 10 }
            }}
            backgroundColor="#1C39A1"
          />
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  member: state.member || {}
});

export default connect(mapStateToProps)(AboutHeader);
