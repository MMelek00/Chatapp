import React from "react";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Icon } from "react-native-elements";
import colors from "../utils/colors";

import { normalize } from "../utils/fonts";

const headerStyle = {
  headerStyle: {
    backgroundColor: colors.base
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontSize: normalize(18)
  },
  headerBackTitle: null
};

const tabBarNavOptions = ({ navigation }) => ({
  tabBarIcon: ({ focused, tintColor }) => {
    const { routeName } = navigation.state;
    let iconName;
    if (routeName === "HomeStack") {
      iconName = `ios-home${focused ? "" : "-outline"}`;
    } else if (routeName === "SearchStack") {
      iconName = `ios-search${focused ? "" : "-outline"}`;
      if (Platform.OS === "ios") {
        const style = {
          position: "absolute",
          top: -22
        };
        return (
          <Icon
            reverse
            type="ionicon"
            color="#517fa4"
            name={iconName}
            size={30}
            containerStyle={style}
          />
        );
      }
    } else if (routeName === "ConversationsStack") {
      iconName = `ios-chatbubbles${focused ? "" : "-outline"}`;
    }
    return <Ionicons name={iconName} size={30} color={tintColor} />;
  }
});

const tabBarStyle = {
  activeTintColor: "white",
  inactiveTintColor: "white",
  inactiveBackgroundColor: colors.base,
  activeBackgroundColor: colors.base,
  showLabel: false
};

export { tabBarStyle, tabBarNavOptions, headerStyle };
