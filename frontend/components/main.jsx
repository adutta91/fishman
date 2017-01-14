import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './header';

export default class Main extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div id="main">
          <Header />
          <h3 style={{marginTop: '20%', marginLeft: '50%', color: 'black'}}>Danny is a poop</h3>
        </div>
      </MuiThemeProvider>
    )
  }
}
