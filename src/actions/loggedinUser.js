

export const loggedinUser = ({ name = "", id = "", email = "" } = {}) => {
    return {
        type: "ADD_USER_DETAILS",
        details: {
            name,
            email,
            id
        }
    }
}