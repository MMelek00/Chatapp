import React from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import { Item } from "native-base";

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
          <Text style={{ paddingLeft: 10 }}>
            {data.experience} years Experience
          </Text>
        </Item>
        <Item style={{ paddingLeft: 50, width: "50%" }}>
          <Icon name="access-time" type="materialIcons" color="pink" />
          <Text style={{ paddingLeft: 10 }}>{data.availability}</Text>
        </Item>
      </View>
      <Text
        style={{
          padding: 5,
          color: "#535353",
          paddingLeft: 10
        }}
      >
        {data.description}
      </Text>
    </View>
  );
};
export default AboutInfo;
