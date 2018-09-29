import React from "react";
import { View, Text } from "react-native";
import SkillsList from "../Components/SkillsList";
import styles from "../../../styles/skills";

const Skills = ({ data }) => {
  return (
    <View style={styles.container}>
      {data.skills ?
        <SkillsList data={data.skills} />
        :
        <Text style={styles.skillTitle}>No skills added yet</Text>
      }
    </View>
  );
};

export default Skills;

