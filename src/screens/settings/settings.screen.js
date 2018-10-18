import React from "react";
import { connect } from "react-redux";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Icon } from "react-native-elements";
import { withNavigation } from "react-navigation";
import ProfileCard from "./settings-card";
import { logout } from "../../actions/member";
import styles from "../../styles/settings";
import colors from "../../utils/colors";

class Settings extends React.Component {
  static navigationOptions = {
    title: "SETTINGS"
  };

  settings() {
    return [
      {
        name: "Update Profile",
        url: "EditProfile",
        color: colors.primary,
        icon: "account-card-details"
      },
      {
        name: "Report Content",
        url: "Report",
        color: colors.negative,
        icon: "block-helper"
      },
    ];
  }

  contents() {
    const navigate = this.props.navigation.navigate;

    return this.settings().map((setting, index) => {
      return (
        <TouchableOpacity
          key={index}
          onPress={() => navigate(setting.url)}
          style={styles.control}
        >
          <View style={styles.controlTitle}>
            <Icon
              reverse
              name={setting.icon}
              type="material-community"
              color={setting.color}
              containerStyle={styles.leftIcon}
              size={20}
            />
            <Text style={styles.text}>{setting.name}</Text>
          </View>
          <Ionicons
            name="ios-arrow-forward-outline"
            size={18}
            color={colors.primary}
          />
        </TouchableOpacity>
      );
    });
  }

  _signOutAsync = async () => {
    const { onLogOut } = this.props;
    const { navigate } = this.props.navigation;
    navigate("Auth");
    onLogOut(this.state).catch(e => console.log(`Error: ${e}`));
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <ProfileCard navigate={navigate} />
        <View style={styles.container}>{this.contents()}</View>
        <View style={styles.container}>
          <TouchableOpacity onPress={this._signOutAsync} style={styles.control}>
            <Text style={styles.logout}>Log out from this account</Text>
            <Ionicons
              name="ios-arrow-forward-outline"
              size={18}
              color={colors.negative}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const mapDispatchToProps = {
  onLogOut: logout
};

export default connect(
  null,
  mapDispatchToProps
)(withNavigation(Settings));
