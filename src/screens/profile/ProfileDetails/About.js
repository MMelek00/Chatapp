import React from "react";
import { View } from "react-native";
import CheckRating from "../Components/Rating";
import AboutHeader from "../Components/AboutHeader";
import AboutInfo from "../Components/AboutInfo";
const About = data => {
  const _data = data.data;
  console.log(_data);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column"
      }}
    >
      <CheckRating data={_data} />
      <AboutHeader data={_data} />
      <AboutInfo data={_data} />
    </View>
  );
};

export default About;
