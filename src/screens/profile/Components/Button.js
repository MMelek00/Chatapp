import React from "react";
import { Button } from "react-native-elements";
import { Firebase } from "../../../utils/firebase";
import { withNavigation } from "react-navigation";

const Buttons = ({ data, navigation }) => {
  const user = Firebase.auth().currentUser;
  if (data.id === user.uid) {
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

export default withNavigation(Buttons);
