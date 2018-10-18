import React from "react";
import { View, Alert } from "react-native";
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";
import { Button as RNEButton } from "react-native-elements";

import { blockUser } from "../actions/member";

const Button = ({ data, member, navigation, blockUserAction }) => {
  const blockUserhandler = () => {
    Alert.alert(
      `Block ${data.firstName}`,
      "Are you sure you want to block this user ?",
      [
        { text: "Cancel", onPress: () => console.log("Cancel Pressed"), style: "cancel" },
        {
          text: "Yes", onPress: () => {
            blockUserAction(data.id);
            navigation.navigate("Home");
          }
        },
      ],
      { cancelable: false }
    );
  };
  if (data.email === member.email) {
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
      <View style={{ flexDirection: "row" }}>
        < RNEButton
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
        < RNEButton
          rounded
          title="Block this user"
          onPress={() => blockUserhandler()}
          rightIcon={{
            name: "block",
            type: "materialIcons",
            size: 20,
            style: { paddingLeft: 10 }
          }}
          backgroundColor="#1C39A1"
        />
      </View>
    );
  }
};
const mapStateToProps = state => ({
  member: state.member || {}
});

const mapDispatchToProps = {
  blockUserAction: blockUser
};

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(Button));
