import { render } from 'react-dom';
import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Landing from './app/components/landing.jsx';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div id="app-main">
          <Landing />
        </div>
      </MuiThemeProvider>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#root');
  render(<App />, root);
});
