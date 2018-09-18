import { createStore } from "redux";

import combineReducers from "../reducers/index";
const configureStore = () => {
  const store = createStore(combineReducers);
  return { store };
};

export default configureStore;
