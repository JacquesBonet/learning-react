import C from "../constants";
import {v4} from "uuid";

export const addColor = (title, color) =>
    ({
        type: C.ADD_COLOR,
        payload: {
            id: v4(),
            title,
            color,
            rating: 0,
            timestamp: new Date().toString()
        }
    })

export const removeColor = id =>
    ({
        type: C.REMOVE_COLOR,
        payload: {
            id
        }
    })

export const rateColor = (id, rating) =>
    ({
        type: C.UPDATE_COLOR,
        payload: {
            id,
            rating
        }
    })

export const sortColors = sortBy =>
    ({
        type: "SORT_COLORS",
        payload: {
            sortBy
        }
    })
