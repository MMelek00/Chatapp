import React, { Component } from "react";
import { View } from "react-native";
import CheckRating from "./Components/Rating";
import AboutHeader from "./Components/AboutHeader";
import AboutInfo from "./Components/AboutInfo";
class About extends Component {
  state = {};
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column"
        }}
      >
        <CheckRating />
        <AboutHeader />
        <AboutInfo />
      </View>
    );
  }
}

export default About;
