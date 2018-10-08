import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Text } from "react-native-elements";
import { connect } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
//components
import Avatar from "../../components/avatar";
//utils
import styles from "../../styles/settings";
import colors from "../../utils/colors";

const ProfileCard = ({ navigate, member }) => {
  const { firstName } = member;
  return (
    <View style={styles.container}>
      <View style={styles.controlTitle}>
        <Avatar large rounded user={member} containerStyle={{ margin: 10 }} />
        <View>
          <Text h4 style={styles.text}>
            {firstName}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigate("PersonalInfo")}
        style={styles.control}
      >
        <Text style={styles.text}>Update personal informations</Text>
        <Ionicons
          name="ios-arrow-forward-outline"
          size={18}
          color={colors.secondary}
        />
      </TouchableOpacity>
    </View>
  );
};

export default connect(state => ({
  member: state.member
}))(ProfileCard);
