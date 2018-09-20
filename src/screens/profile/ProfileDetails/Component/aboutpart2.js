import React, { Component } from "react";
import { View, Text } from "react-native";
import { Avatar, Button } from "react-native-elements";
import { connect } from "react-redux";

class Aboutpart2 extends Component {
  state = {};

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
              uri:
                "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
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

export default connect(mapStateToProps)(Aboutpart2);
