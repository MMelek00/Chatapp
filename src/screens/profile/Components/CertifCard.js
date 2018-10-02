import React from "react";
import { Item } from "native-base";
import { View, Image, Text, Dimensions } from "react-native";
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;
const CertifCard = ({ Name }) => {
  return (
    <View>
      <Image
        source={{
          uri: "https://facebook.github.io/react-native/docs/assets/favicon.png"
        }}
      />
      <Item>
        <Text>{Name}</Text>
      </Item>
    </View>
  );
};

export default CertifCard;
