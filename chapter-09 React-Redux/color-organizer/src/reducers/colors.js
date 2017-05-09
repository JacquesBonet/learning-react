import C from "../constants";


export const colors = (state = [], action) => {
    switch (action.type) {
        case C.ADD_COLOR :
            return [
                ...state,
                action.payload
            ]
        case C.UPDATE_COLOR :
            return state.map(c => {
                    if (c.id === action.payload.id)
                        return {...c, ...action.payload}
                    else
                        return c
                }
            )
        case C.REMOVE_COLOR :
            return state.filter(
                c => c.id !== action.payload.id
            )
        default:
            return state
    }
}

