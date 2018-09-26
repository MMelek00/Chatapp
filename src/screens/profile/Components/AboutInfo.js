import React from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import { Item } from "native-base";
import fonts from "../../../utils/fonts";
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
          <Text style={{ paddingLeft: 10, fontFamily: fonts.SECONDARY_FONT }}>
            {data.experience} years Experience
          </Text>
        </Item>
        <Item style={{ paddingLeft: 50, width: "50%" }}>
          <Icon name="access-time" type="materialIcons" color="pink" />
          <Text style={{ paddingLeft: 10, fontFamily: fonts.SECONDARY_FONT }}>
            {data.availability}
          </Text>
        </Item>
      </View>
      <Text
        style={{
          padding: 5,
          color: "#535353",
          paddingLeft: 10,
          fontSize: fonts.normalize(16),
          fontFamily: fonts.SECONDARY_FONT
        }}
      >
        {data.description}
      </Text>
    </View>
  );
};
export default AboutInfo;
