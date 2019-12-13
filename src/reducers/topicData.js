

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
      case "TOPICS_ID":
        return [...action.topics]
  
      default:
        return state;
    }
  };
  