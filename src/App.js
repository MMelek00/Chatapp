import React from "react";

import {
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { Ionicons } from "@expo/vector-icons";

//navigation file
import Login from "./screens/authentification/login";
import Registre from "./screens/authentification/registre";
import Loading from "./screens/loading/loading";
import Main from "./screens/main/main";
import Profile from "./screens/profile/profile";
import Search from "./screens/search/search";
import Messages from "./screens/messages/messages";

const MainNav = createBottomTabNavigator(
  {
    Home: Main,
    Search: Search,
    Messages: Messages,
    Profile: Profile
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = `ios-home${focused ? "" : "-outline"}`;
        } else if (routeName === "Search") {
          iconName = `ios-search${focused ? "" : "-outline"}`;
        } else if (routeName === "Messages") {
          iconName = `ios-chatbubbles${focused ? "" : "-outline"}`;
        } else if (routeName === "Profile") {
          iconName = `ios-person${focused ? "" : "-outline"}`;
        }
        return <Ionicons name={iconName} size={30} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "white",
      inactiveTintColor: "white",
      inactiveBackgroundColor: "#191F58",
      activeBackgroundColor: "#7D82B0"
    }
  }
);

const AuthStack = createStackNavigator(
  {
    Login: {
      screen: Login
    },

    Signup: {
      screen: Registre
    }
  },
  {
    headerMode: "none"
  }
);

const App = createSwitchNavigator(
  {
    Loading: Loading,
    Auth: AuthStack,
    Main: MainNav
  },
  {
    initialRouteName: "Loading"
  }
);
export default App;
