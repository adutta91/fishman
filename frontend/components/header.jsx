import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Icons from './icons';

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

  render() {
    return (
      <div style={this.state.style} className='header'>
        <div className="flex">
          <Icons />
          <input type="text"
            className="input hvr-underline-from-left"
            placeholder="enter email"
            value={this.state.email}
            onChange={this.emailChange.bind(this)} />
        </div>
        <div className="title">danny fishman</div>
      </div>
    )
  }

  checkScroll(e) {
    if ($(document).scrollTop() > 64) {
      this.setState({ style: {backgroundColor: 'rgba(0,0,0,0.05)', boxShadow: '1px 1px 1px 1px lightgray'} });
    } else {
      this.setState({ style: {} });
    }
  }

  emailChange(e) {
    this.setState( {email: e.target.value} );
  }
}
