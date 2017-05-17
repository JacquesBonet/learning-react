import {combineReducers} from "redux";
import {search} from "./search";
import news from "./news";


export default combineReducers({
    search,
    news
});