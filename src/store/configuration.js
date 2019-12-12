import { createStore, combineReducers } from "redux";
import coursesReducer from "../reducers/coursesReducer";
import authReducer from "../reducers/auth";
import loggedinUserReducer from "../reducers/loggedinUserReducer";

export default () => {
  const store = createStore(combineReducers({
      courses: coursesReducer,
      auth: authReducer,
      loggedInUsers: loggedinUserReducer
  }));
  return store;
};
