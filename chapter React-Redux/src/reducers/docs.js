import {
    CREATE_SUCCESS,
    DELETE_SUCCESS,
    UPDATE_SUCCESS,
    READ_SUCCESS
} from "../constants/docs";

export default function docs(state, path, action) {
    if (action.path && action.path !== path)
        return state

    switch (action.type) {

        case READ_SUCCESS:
            return action.docs

        case CREATE_SUCCESS:
        case UPDATE_SUCCESS:
            if (state instanceof Array) {
                var found = false
                let res = state.map(doc => {
                    if (doc.id === action.id) {
                        found = true
                        return action
                    }
                    else
                        return doc
                })
                if (found)
                    return res
                else
                    return [...state, action]
            }
            else
                return {...state, ...action}

        case DELETE_SUCCESS:
            if (state instanceof Array)
                return state.filter(doc => {
                    return doc.id !== action.id
                })
            else
                return state

        default:
            return state
    }
}


function id() {
    return Math.random().toString(36).substring(7)
}