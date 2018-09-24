import React, { Component } from "react";
import { View } from "react-native";
import SkillCard from "./Components/skillCard";
class Skills extends Component {
  state = {};
  render() {
    return (
      <View style={{ padding: 10 }}>
        <SkillCard />
      </View>
    );
  }
}

export default Skills;
