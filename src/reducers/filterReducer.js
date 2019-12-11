
const initialState = {
  course: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_COURSE":
      return { ...state, title: action.course };

    default:
      return state;
  }
};
