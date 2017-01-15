import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './header';
import Footer from './footer';
import Bio from './bio';

export default class Main extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div id="main">
          <Header />
          <Bio />
          <Footer />
        </div>
      </MuiThemeProvider>
    )
  }
}
