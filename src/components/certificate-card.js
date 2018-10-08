import React from "react";
import { View, Image, Text, Dimensions } from "react-native";
import { certeficateimages } from "../../../utils/properties";
import colors from "../../../utils/colors";
const deviceHeight = Dimensions.get("window").height;
const CertifCard = ({ Name }) => {
  return (
    <View style={{ flex: 1, margin: 2 }}>
      <Image
        style={{ width: null, height: deviceHeight / 3 - 20, flex: 1 }}
        resizeMode={"cover"}
        source={{
          uri: certeficateimages[Name]
        }}
      />
      <Text
        style={{
          backgroundColor: colors.base,
          color: "white",
          padding: 10,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10
        }}
      >
        {Name}
      </Text>
    </View>
  );
};

export default CertifCard;
