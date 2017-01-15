import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';

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
        backgroundColor: 'lightblue',
        boxShadow: '1px 1px 1px 1px lightgray',
        color: 'gray'
      } });
    } else {
      this.setState({ style: {} });
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
      <div style={this.state.style} className='header'>
        <div className="flex">
          <TextField
            hintText="eg. danny@fishman.poo"
            floatingLabelText="email"
            value={this.state.email}
            onChange={this.emailChange.bind(this)}
            onKeyPress={this.keyPress.bind(this)}/>
        </div>
        <div className="title">danny fishman</div>
      </div>
    )
  }
}
