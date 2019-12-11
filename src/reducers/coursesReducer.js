
const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
      case "ADD_COURSES":
        return [...state, ...action.courses]
  
      default:
        return state;
    }
  };
  