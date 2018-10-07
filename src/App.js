import {
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

//navigation file
import Login from "./screens/auth/Login";
import SignUp from "./screens/auth/SignUp";
import ForgetPassword from "./screens/auth/ForgetPassword";
import AuthLoading from "./components/Loading";
import Home from "./screens/home/Home";
import Profile from "./screens/profile/Profile";
import Search from "./screens/search/Search";
import Results from "./screens/search/Results";
import Messages from "./screens/conversations/Messages";
import Conversations from "./screens/conversations/Conversations";
import NewGroupe from "./screens/groups/NewGroup";
import Settings from "./screens/settings/Settings";
import PersonalInfo from "./screens/settings/PersonalInfo";
import EditProfile from "./screens/profile/EditProfile/EditProfile";
import Company from "./screens/profile/EditProfile/Company";
import Skills from "./screens/profile/EditProfile/Skills";
import Certificates from "./screens/profile/EditProfile/Certificates";
import HomePicker from "./screens/home/HomePicker";

import { tabBarStyle, tabBarNavOptions, headerStyle } from "./styles/router";

const HomeStack = createStackNavigator(
  {
    Home: Home,
    Settings: Settings,
    EditProfile: {
      screen: EditProfile
    },
    Company: {
      screen: Company
    },
    Skills: {
      screen: Skills
    },
    HomePicker: {
      screen: HomePicker
    },
    Profile: {
      screen: Profile
    },
    PersonalInfo: PersonalInfo,
    NewGroupe: {
      screen: NewGroupe
    },
    Certificates: {
      screen: Certificates
    }
  },
  {
    navigationOptions: headerStyle
  }
);

const SearchStack = createStackNavigator(
  {
    Search: Search,
    Results: Results
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
    Login: Login,
    SignUp: SignUp,
    ForgetPassword: ForgetPassword,
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
