// @flow
// import { AsyncStorage } from "react-native";
import { createStore } from "redux";
//import thunk from "redux-thunk";
//import { persistStore } from "redux-persist";
import reducer from "../reducers";
const configureStore = () => {
  const store = createStore(reducer);
  return { store };
};
export default configureStore;
