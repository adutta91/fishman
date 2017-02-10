import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import theme from '../app/theme';

import Tabs from './tabs';

export default class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      style: {},
      email: ''
    }
  }

  componentDidMount() {
    document.addEventListener("scroll", this.checkScroll.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener("scroll");
  }

  checkScroll(e) {
    if ($(document).scrollTop() > 64) {
      this.setState({ style: {
        backgroundColor: '#EEE',
        boxShadow: '1px 1px 1px 1px gray',
        color: 'gray'
      } });
    } else {
      this.setState({ style: { boxShadow: '1px 1px 1px 1px white' } });
    }
  }

  keyPress(e) {
    if (e.key == 'Enter') {
      alert(this.state.email);
    }
  }

  emailChange(e) {
    this.setState( {email: e.target.value} );
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
        <div style={this.state.style} className='header'>
          <div className="left flex">
            <div className="title">Danny Fishman</div>
            <Tabs />
          </div>
          <TextField
            style={{right: '100px'}}
            hintText="eg. danny@fishman.poo"
            floatingLabelText="email"
            value={this.state.email}
            onChange={this.emailChange.bind(this)}
            onKeyPress={this.keyPress.bind(this)}/>
        </div>
      </MuiThemeProvider>
    )
  }
}
