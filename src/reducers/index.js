import { combineReducers } from "redux-immutable";
import loginReducer from "./loginReducer";

export default function index() {
  return combineReducers({
    user: loginReducer,
  });
}
