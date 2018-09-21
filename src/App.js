import React from "react";
import { View } from "react-native";
import {
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import { Icon } from "react-native-elements";

//navigation file
import Login from "./screens/authentification/login";
import Registre from "./screens/authentification/registre";
import Loading from "./screens/loading/loading";
import Home from "./screens/main/home";
import Profile from "./screens/profile/profile";
import Search from "./screens/search/search";
import Messages from "./screens/messages/messages";
import Conversations from "./screens/messages/conversations";
import NewGroupe from "./screens/newgroupe/newgroup";
import Settings from "./screens/settings/settings";
import EditProfile from "./screens/profile/editProfile/editProfile";
import Company from "./screens/profile/editProfile/Company";
import Skills from "./screens/profile/editProfile/skills";

//utils
import colors from "./utilities/colors";

const headerStyle = {
  headerStyle: {
    backgroundColor: colors.base
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontSize: 18,
  },
};
const HomeStack = createStackNavigator(
  {
    Home: Home
  },
  {
    navigationOptions: headerStyle,
  }
);

const SearchStack = createStackNavigator(
  {
    Search: Search
  },
  {
    navigationOptions: headerStyle,
  }
);

const ConversationsStack = createStackNavigator(
  {
    Conversations: Conversations,
    Messages: Messages
  },
  {
    navigationOptions: headerStyle,
  }
);

const MainStack = createBottomTabNavigator(
  {
    HomeStack: HomeStack,
    SearchStack: SearchStack,
    ConversationsStack: ConversationsStack
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "HomeStack") {
          iconName = `ios-home${focused ? "" : "-outline"}`;
        } else if (routeName === "SearchStack") {
          iconName = `ios-search${focused ? "" : "-outline"}`;
          const style = {
            position: "absolute", top: -22
          };
          return <Icon
            reverse
            type="ionicon"
            color="#517fa4"
            name={iconName}
            size={30}
            containerStyle={style}
          />;
        } else if (routeName === "ConversationsStack") {
          iconName = `ios-chatbubbles${focused ? "" : "-outline"}`;
        }
        return <Ionicons name={iconName} size={30} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "white",
      inactiveTintColor: "white",
      inactiveBackgroundColor: "#191F58",
      activeBackgroundColor: "#7D82B0",
      showLabel: false
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
  }
);

const AppStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
      navigationOptions: {
        header: null,
      },
    },
    Profile: {
      screen: Profile
    },
    NewGroupe: {
      screen: NewGroupe
    },
    Settings: {
      screen: Settings
    },
    EditProfile: {
      screen: EditProfile
    },
    Profilee: {
      screen: EditProfile
    },
    Skills: {
      screen: Skills
    },
    Company: {
      screen: Company
    }
  },
  {
    initialRouteName: "Main",
    navigationOptions: headerStyle,
  }
);

const Router = createSwitchNavigator(
  {
    Loading: Loading,
    Auth: AuthStack,
    App: AppStack
  },
  {
    initialRouteName: "Loading"
  }
);
export default Router;
