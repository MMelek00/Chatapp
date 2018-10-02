import React from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import { Item } from "native-base";
import { DEFAULT_FONT, normalize } from "../../../utils/fonts";
import Availability from "../../../components/Availability";
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
        <Item style={{ paddingLeft: 20, width: "50%" }}>
          <Icon name="access-time" type="materialIcons" color="pink" />
          <Availability availability={data.availability} />
        </Item>
      </View>
      <Text
        style={{
          padding: 15,
          color: "#535353",
          fontSize: normalize(16),
          fontFamily: DEFAULT_FONT,
          opacity: 0.7
        }}
      >
        {data.description}
      </Text>
    </View>
  );
};
export default AboutInfo;
