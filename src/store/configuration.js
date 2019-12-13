import { createStore, combineReducers } from "redux";
import coursesReducer from "../reducers/coursesReducer";
import authReducer from "../reducers/auth";
import loggedinUserReducer from "../reducers/loggedinUserReducer";
import topicData from "../reducers/topicData";
import subtopicData from "../reducers/subtopicData";
import filtersReducer from "../reducers/filtersReducer";
import coursenames from "../reducers/coursenames";

export default () => {
  const store = createStore(combineReducers({
      courses: coursesReducer,
      auth: authReducer,
      loggedInUsers: loggedinUserReducer,
      topicData: topicData,
      subtopicData: subtopicData,
      filter: filtersReducer,
      subjectNames: coursenames
  }));
  return store;
};
