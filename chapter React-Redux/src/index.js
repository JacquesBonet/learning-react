import React from "react";
import ReactDOM from "react-dom";
import {applyMiddleware, createStore} from "redux";
import {hashHistory, Router} from "react-router";
import {Provider} from "react-redux";
import reducers from "./reducers/index";
import fetchMiddleware from "./middleware/Fetch";

import routes from "./routes";

const myMiddlewares = [fetchMiddleware]
const myStore = createStore(
    reducers,
    applyMiddleware(...myMiddlewares)
)

ReactDOM.render(
    <Provider store={myStore}>
        <Router routes={routes} history={hashHistory}/>
    </Provider>,
    document.getElementById('root')
);
