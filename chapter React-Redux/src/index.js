import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Router, hashHistory } from 'react-router';
import {Provider} from "react-redux";
import reducers from './reducers/index'

import routes from './routes';
const myStore = createStore(reducers)

ReactDOM.render(
    <Provider store={myStore}>
        <Router routes={routes} history={hashHistory} />
    </Provider>,
    document.getElementById('root')
);
