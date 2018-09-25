import React from "react";
import { View, Text } from "react-native";
import { Avatar } from "react-native-elements";
import ButtonsPro from "./Button";
const AboutHeader = data => {
  const _data = data.data;
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
            uri: _data.avatar
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
        {_data.firstName}
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontFamily: "Roboto_medium",
          color: "pink"
        }}
      >
        {_data.email}
      </Text>
      <View style={{ width: 250, padding: 10 }}>
        <ButtonsPro profile={_data.id} />
      </View>
    </View>
  );
};

export default AboutHeader;
