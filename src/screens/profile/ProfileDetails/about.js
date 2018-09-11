import React, { Component } from "react";
import { View } from "react-native";
import CheckRating from "./Component/rating";
import Aboutpart2 from "./Component/aboutpart2";
import AboutPart3 from "./Component/aboutPart3";
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
        <Aboutpart2 />
        <AboutPart3 />
      </View>
    );
  }
}

export default About;
