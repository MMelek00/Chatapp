import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import Users from "./users";
export default combineReducers({
  Users,
  form: formReducer
});
