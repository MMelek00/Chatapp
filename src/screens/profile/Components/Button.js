import React from "react";
import { Button } from "react-native-elements";
import { Firebase } from "../../../utils/firebase";

const ButtonsPro = profile => {
  const user = Firebase.auth().currentUser;
  if (profile.profile === user.uid) {
    return (
      <Button
        rounded
        title="edit Profile"
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

export default ButtonsPro;
