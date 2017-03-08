import { render } from 'react-dom';
import React, { Component } from 'react';
import { Provider } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin';
import Store from './app/store';

import { Router, Route, browserHistory } from 'react-router';

import LandingContainer from './containers/landing-container';
import Main from './components/main';
import AppContainer from './containers/app-container';

injectTapEventPlugin();

const routes = (
  <Provider store={Store}>
    <Router history={browserHistory}>
      <Route path='/' component={LandingContainer} />
      <Route path='/main' component={AppContainer} />
    </Router>
  </Provider>
);

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#fishman-app-main');
  render(routes, root);
});
