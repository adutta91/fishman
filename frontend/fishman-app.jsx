import { render } from 'react-dom';
import React, { Component } from 'react';
import { Provider } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin';
import Store from './app/store';

import { Router, Route, browserHistory } from 'react-router';

import Landing from './components/landing';
import Main from './components/main';
import AppContainer from './containers/app-container';

injectTapEventPlugin();

const routes = (
  <Provider store={Store}>
    <Router history={browserHistory}>
      <Route path='/' component={Landing} />
      <Route path='/main' component={AppContainer} />
    </Router>
  </Provider>
)

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#fishman-app-main');
  render(routes, root);
});
