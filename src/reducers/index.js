import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import member from "./member";
import status from "./status";

export default combineReducers({
  form: formReducer,
  member,
  status
});
