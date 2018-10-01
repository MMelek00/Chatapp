import React from "react";
import { Button } from "react-native-elements";
import { connect } from "react-redux";
const Buttons = ({ data, navigation }) => {
  if (data.id === this.props.member.id) {
    return (
      <Button
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
      <Button
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

export default connect(mapStateToProps)(Buttons);
