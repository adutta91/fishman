import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './header';

export default class Main extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div id="main">
          <Header />
        </div>
      </MuiThemeProvider>
    )
  }
}
