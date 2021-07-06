import { combineReducers } from "redux";
import authReducer from "./authReducer";
import thingsReducer from "./thingsReducer";

const bigR = combineReducers({
  thingsReducer,
  authReducer,
});

export default bigR;
