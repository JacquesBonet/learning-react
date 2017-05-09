import {applyMiddleware, createStore} from "redux";
import rootReducers from "../reducers/rootReducers";
import saver from "../middleware/saver";
import logger from "../middleware/logger";
import stateData from "../../data/initialState";
const storeFactory = () =>
    (
        createStore(
            rootReducers,
            (localStorage['redux-store']) ?
                JSON.parse(localStorage['redux-store']) :
                stateData,
            applyMiddleware(logger, saver)
        )
    )

export default storeFactory