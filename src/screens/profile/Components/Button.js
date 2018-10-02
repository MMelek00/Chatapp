import React from "react";
import { Button as RNEButton } from "react-native-elements";
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";

const Button = ({ data, member, navigation }) => {
  if (data.id === member.uid) {
    return (
      <RNEButton
        rounded
        title="edit Profile"
        onPress={() => navigation.navigate("EditProfile")}
        rightIcon={{
          name: "edit",
          type: "entypo",
          size: 20,
          style: { paddingLeft: 10 }
        }}
        backgroundColor="#1C39A1"
      />
    );
  } else {
    return (
      <RNEButton
        rounded
        title="Send message"
        onPress={() => {
          navigation.navigate("Messages", {
            sendToId: data.id,
            sendToName: data.firstName
          });
        }}
        rightIcon={{
          name: "send",
          type: "materialIcons",
          size: 20,
          style: { paddingLeft: 10 }
        }}
        backgroundColor="#1C39A1"
      />
    );
  }
};
const mapStateToProps = state => ({
  member: state.member || {}
});

export default connect(mapStateToProps)(withNavigation(Button));
