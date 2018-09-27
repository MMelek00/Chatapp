import React from "react";
import { View, Text } from "react-native";
import { Avatar } from "react-native-elements";
import Buttons from "./Button";
import { DEFAULT_FONT, normalize } from "../../../utils/fonts";

const AboutHeader = ({ data }) => {
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
            uri: data.avatar
          }}
          activeOpacity={0.7}
        />
      </View>
      <Text
        style={{
          fontSize: normalize(25),
          fontFamily: DEFAULT_FONT
        }}
      >
        {data.firstName}
      </Text>
      <Text
        style={{
          fontSize: normalize(20),
          fontFamily: DEFAULT_FONT,
          color: "pink"
        }}
      >
        {data.email}
      </Text>
      <View style={{ width: 250, padding: 10 }}>
        <Buttons data={data} />
      </View>
    </View>
  );
};

export default AboutHeader;
