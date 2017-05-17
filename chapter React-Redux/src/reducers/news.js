import {NEWS} from "../constants/news";
import crudReducer  from './docs';

const initialState = {
    source: "",
    articles: []
}


export default function news(state = initialState, action) {
    return crudReducer(state, NEWS, action);
}