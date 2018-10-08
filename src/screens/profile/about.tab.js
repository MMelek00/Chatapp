import React from "react";
import { View } from "react-native";
import CheckRating from "../Components/Rating";
import AboutHeader from "../Components/AboutHeader";
import AboutInfo from "../Components/AboutInfo";
const About = ({ data }) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column"
      }}
    >
      <CheckRating data={data} />
      <AboutHeader data={data} />
      <AboutInfo data={data} />
    </View>
  );
};

export default About;
