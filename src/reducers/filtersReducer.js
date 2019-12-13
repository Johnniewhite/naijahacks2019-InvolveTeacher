
const initialState = {
  title: ""
}


export default (state = initialState, action) => {
  switch (action.type) {
    case "TEXT":
      return {...state, title:action.text}

    default:
      return state;
  }
};
