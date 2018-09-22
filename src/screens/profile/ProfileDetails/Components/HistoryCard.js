import React from "react";
import { Item } from "native-base";
import { Icon } from "react-native-elements";

import { View, Text } from "react-native";
const HistoryCard = () => {
  return (
    <View>
      <View
        style={{
          width: "90%",
          height: 200,
          justifyContent: "center",
          backgroundColor: "gray",
          alignItems: "center",
          alignSelf: "center",
          borderRadius: 10
        }}
      >
        <Text style={{ fontFamily: "Roboto_medium", fontSize: 20 }}>
          Company Name
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
          paddingLeft: 20
        }}
      >
        <Item>
          <Icon name="500px" type="entypo" color="pink" />
          <Text style={{ paddingLeft: 10 }}>3 years in Company</Text>
        </Item>
        <Item style={{ paddingLeft: 50, width: "50%" }}>
          <Icon name="access-time" type="materialIcons" color="pink" />
          <Text style={{ paddingLeft: 1 }}>Part-Time Full-time</Text>
        </Item>
      </View>
      <View
        style={{
          padding: 10,
          paddingLeft: 20
        }}
      >
        <Text>Art Director at Biomarketing Solution</Text>
      </View>
      <View
        style={{
          padding: 10,
          paddingLeft: 20
        }}
      >
        <Text style={{ fontFamily: "Roboto_medium", fontSize: 15 }}>
          My Project
        </Text>
        <Text style={{ fontFamily: "Roboto_medium", color: "blue" }}>
          https://reactPropject.com
        </Text>
      </View>
    </View>
  );
};

export default HistoryCard;
