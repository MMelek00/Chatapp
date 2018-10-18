import React from "react";
import { View, Text } from "react-native";
import Avatar from "./avatar";

import Buttons from "./profile-button";
import { DEFAULT_FONT, normalize } from "../utils/fonts";

const AboutHeader = ({ data }) => {
  return (
    <View
      style={{
        alignItems: "center"
      }}
    >
      <Avatar user={data} xlarge />
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
      <Buttons data={data} />
    </View>
  );
};

export default AboutHeader;
