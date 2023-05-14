import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { isCollapsed } from "./isCollapsed";

const rootReducer = combineReducers({
  user: userReducer,
  handlerAdd: isCollapsed,
});

export default rootReducer;
