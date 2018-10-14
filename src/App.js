import {
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

//navigation file
import Login from "./screens/auth/login.screen";
import SignUp from "./screens/auth/signup.screen";
import ForgetPassword from "./screens/auth/forget-password.screen";
import AuthLoading from "./components/auth-loading";
import Home from "./screens/home/home.screen";
import Profile from "./screens/profile/profile.screen";
import Search from "./screens/search/search.screen";
import Results from "./screens/search/results.screen";
import Messages from "./screens/conversations/messages.screen";
import Conversations from "./screens/conversations/conversations.screen";
import NewGroupe from "./screens/groups/groups.screen";
import GroupMembers from "./screens/groups/group-members.screen";
import Settings from "./screens/settings/settings.screen";
import PersonalInfo from "./screens/settings/personal-info.screen";
import EditProfile from "./screens/profile-edit/profile-edit.screen";
import Company from "./screens/profile-edit/company.screen";
import Skills from "./screens/profile-edit/skills.screen";
import Certificates from "./screens/profile-edit/certificates.screen";
import HomePicker from "./screens/home/home-picker";

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
    Messages: Messages,
    GroupMembers: GroupMembers
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
