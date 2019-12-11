import { createStore, combineReducers } from "redux";
import coursesReducer from "../reducers/coursesReducer";

export default () => {
  const store = createStore(combineReducers({
      courses: coursesReducer
  }));
  return store;
};
