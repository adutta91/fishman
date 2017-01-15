import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './header';
import Bio from './bio';

export default class Main extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div id="main">
          <Header />
          <Bio />
        </div>
      </MuiThemeProvider>
    )
  }
}
