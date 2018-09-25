import React from "react";
import { View, Text } from "react-native";
import { Rating } from "react-native-elements";

const SkillCard = () => {
  const CIRCLE_IMAGE = require("./Circle.png");

  return (
    <View
      style={{
        borderBottomWidth: 1,
        flexDirection: "row",
        height: 60
      }}
    >
      <Text style={{ fontSize: 20, padding: 12 }}>JavaScrript</Text>
      <Rating
        type="custom"
        ratingImage={CIRCLE_IMAGE}
        ratingColor="#de0607"
        ratingBackgroundColor="#dbd7d2"
        readonly
        fractions={1}
        startingValue={4}
        imageSize={35}
        style={{
          paddingTop: 10
        }}
      />
    </View>
  );
};

export default SkillCard;
