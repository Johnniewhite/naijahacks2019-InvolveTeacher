

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
      case "COURSESLIST":
        return [...action.courses]
  
      default:
        return state;
    }
  };
  