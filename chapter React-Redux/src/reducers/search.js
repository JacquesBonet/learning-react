export const search = (state = [], action) => {
    switch (action.type) {

        case "SEARCH":
            return [...action.values]

        default:
            return state
    }
}