// @flow
import { createSwitchNavigator, DrawerNavigator } from "react-navigation";
//navigation file
import Login from "./screens/authentification/login";
import Registre from "./screens/authentification/registre";
import Loading from "./screens/loading/loading";
import Main from "./screens/main";

const App = createSwitchNavigator(
  {
    Loading: Loading,
    Registre: Registre,
    Login: Login,
    Main: Main
  },
  {
    initialRouteName: "Loading"
  }
);
export default App;
