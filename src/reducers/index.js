import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import member from "./member";
import status from "./status";
const rehydrated = (state = false, action) => {
  switch (action.type) {
    case "persist/REHYDRATE":
      return true;
    default:
      return state;
  }
};

export default {
  form: formReducer,
  member,
  status,
  rehydrated
};
