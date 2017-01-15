import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Header from './header';
import Footer from './footer';
import Bio from './bio';
import VideoList from './video-list';

import theme from '../app/theme';

import { videos, tabs } from '../app/data';

const muiTheme = getMuiTheme(theme);

export default class Main extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div id="main">
          <Header />
          { tabs[this.props.activeTab] }
          <Footer />
        </div>
      </MuiThemeProvider>
    )
  }
}
