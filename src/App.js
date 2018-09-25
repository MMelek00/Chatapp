import {
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

//navigation file
import Login from "./screens/auth/Login";
import SignUp from "./screens/auth/SignUp";
import AuthLoading from "./components/Loading";
import Home from "./screens/home/Home";
import Profile from "./screens/profile/Profile";
import Search from "./screens/search/Search";
import Messages from "./screens/conversations/Messages";
import Conversations from "./screens/conversations/Conversations";
import NewGroupe from "./screens/groups/NewGroup";
import Settings from "./screens/settings/Settings";
import EditProfile from "./screens/profile/EditProfile/EditProfile";
import Company from "./screens/profile/EditProfile/Company";
import Skills from "./screens/profile/EditProfile/Skills";
import Certificates from "./screens/profile/EditProfile/Certificates";
import { tabBarStyle, tabBarNavOptions, headerStyle } from "./styles/router";

const HomeStack = createStackNavigator(
  {
    EditProfile: {
      screen: EditProfile
    },
    Home: Home,
    Profile: {
      screen: Profile
    },
    Settings: Settings,
    NewGroupe: {
      screen: NewGroupe
    },
    Skills: {
      screen: Skills
    },
    Certificates: {
      screen: Certificates
    },
    Company: {
      screen: Company
    }
  },
  {
    navigationOptions: headerStyle
  }
);

const SearchStack = createStackNavigator(
  {
    Search: Search
  },
  {
    navigationOptions: headerStyle
  }
);

const ConversationsStack = createStackNavigator(
  {
    Conversations: Conversations
  },
  {
    navigationOptions: headerStyle
  }
);

const MainStack = createBottomTabNavigator(
  {
    HomeStack: HomeStack,
    SearchStack: SearchStack,
    ConversationsStack: ConversationsStack
  },
  {
    navigationOptions: tabBarNavOptions,
    tabBarOptions: tabBarStyle
  }
);

const AuthStack = createStackNavigator(
  {
    Login: {
      screen: Login
    },

    Signup: {
      screen: SignUp
    }
  },
  {
    headerMode: "none"
  }
);

const AppStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
      navigationOptions: {
        header: null
      }
    },
    Messages: Messages
  },
  {
    initialRouteName: "Main",
    navigationOptions: headerStyle
  }
);

const Router = createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    Auth: AuthStack,
    App: AppStack
  },
  {
    initialRouteName: "AuthLoading"
  }
);
export default Router;
