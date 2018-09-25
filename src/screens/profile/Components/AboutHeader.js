import React from "react";
import { View, Text } from "react-native";
import { Avatar, Button } from "react-native-elements";

const AboutHeader = data => {
  console.log("fuck");
  console.log(data);
  console.log("works");
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
            uri: data.Avatar
          }}
          activeOpacity={0.7}
        />
      </View>
      <Text
        style={{
          fontSize: 25,
          fontFamily: "Roboto_medium"
        }}
      >
        {data.firstName}
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontFamily: "Roboto_medium",
          color: "pink"
        }}
      >
        {data.email}
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
};

export default AboutHeader;
