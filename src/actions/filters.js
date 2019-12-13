
export const search = ({text = ""} = {}) => {
    return {
        type: "TEXT",
        text
    }
}

