export const sort = (state = "SORTED_BY_DATE", action) => {
    switch (action.type) {
        case "SORT_COLORS":
            return action.payload.sortBy
        default :
            return state
    }
}