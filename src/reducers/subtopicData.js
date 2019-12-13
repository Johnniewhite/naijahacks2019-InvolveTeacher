

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
      case "SUBTOPICS_ID":
        return [...action.subTopics]
  
      default:
        return state;
    }
  };
  