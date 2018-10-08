import React from "react";
import { View } from "react-native";
import CheckRating from "../../components/rating";
import AboutHeader from "../../components/about-header";
import AboutInfo from "../../components/about-info";
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
