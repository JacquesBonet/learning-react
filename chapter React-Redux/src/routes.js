import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// Containers
import Full from './containers/Full/'

import Dashboard from './views/Dashboard/'
import News from './containers/News/News'
import Details from './views/News/Details/'

export default (
  <Router history={hashHistory}>
    <Route path="/" name="Home" component={Full}>
      <IndexRoute component={Dashboard}/>
      <Route path="dashboard" name="Dashboard" component={Dashboard}/>
      <Route path="news" name="News">
        <IndexRoute component={News}/>
        <Route path="details" name="Details" component={Details}/>
      </Route>
    </Route>
  </Router>
);
