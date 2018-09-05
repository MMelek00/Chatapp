import * as Expo from "expo";
import React, { Component } from "react";
//import { StyleProvider } from "native-base";
//import { Provider } from "react-redux";

//import configureStore from "./configureStore";
import App from "../App";
import * as firebase from "firebase";

//const store = configureStore();
const firebaseConfig = {
  apiKey: "AIzaSyA51fNIZF9OYWXQFVh8hmsaekMmmQDaHzQ",
  authDomain: "princeapp-f99b8.firebaseapp.com",
  databaseURL: "https://princeapp-f99b8.firebaseio.com",
  projectId: "princeapp-f99b8",
  storageBucket: "princeapp-f99b8.appspot.com",
  messagingSenderId: "79288961689"
};
export default class Setup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }
  componentWillMount() {
    this.loadFonts();
    firebase.initializeApp(firebaseConfig);
  }
  async loadFonts() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });

    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      //<Provider store={store}>
      <App />
      //</Provider>
    );
  }
}
