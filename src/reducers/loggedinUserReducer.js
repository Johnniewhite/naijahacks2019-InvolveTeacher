

const initialState = [];

export default (state = initialState, action ) => {

    switch(action.type) {
        case "ADD_USER_DETAILS":
            return [...state, ...action.details];

            default:
          return state
    }
}