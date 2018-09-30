import React from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import { Item } from "native-base";
import { DEFAULT_FONT, normalize } from "../../../utils/fonts";
const AboutInfo = ({ data }) => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center"
        }}
      >
        <Item style={{ paddingLeft: 40 }}>
          <Icon name="500px" type="entypo" color="pink" />
          <Text style={{ paddingLeft: 10, fontFamily: DEFAULT_FONT }}>
            {data.experience} years Experience
          </Text>
        </Item>
        <Item style={{ paddingLeft: 50, width: "50%" }}>
          <Icon name="access-time" type="materialIcons" color="pink" />
          <Text style={{ paddingLeft: 10, fontFamily: DEFAULT_FONT }}>
            {data.availability}
          </Text>
        </Item>
      </View>
      <View
        style={{
          padding: 15,
          borderWidth: 0.5,
          backgroundColor: "#fff",
          borderRadius: 5
        }}
      >
        <Text
          style={{
            color: "#535353",
            fontSize: normalize(16),
            fontFamily: DEFAULT_FONT
          }}
        >
          {data.description}
        </Text>
      </View>
    </View>
  );
};
export default AboutInfo;
