import React, { Component } from 'react';

export default class Icons extends Component {
  render() {
    return (
      <div className="flex row">
        <i onClick={this.goTo.bind(this, "http://google.com")} className="icon fa fa-facebook-official"/>
        <i onClick={this.goTo.bind(this, "http://google.com")} className="icon fa fa-youtube"/>
        <i onClick={this.goTo.bind(this, "http://google.com")} className="icon fa fa-twitter"/>
        <i onClick={this.goTo.bind(this, "http://google.com")} className="icon fa fa-spotify"/>
        <i onClick={this.goTo.bind(this, "http://google.com")} className="icon fa fa-instagram"/>
        <i onClick={this.goTo.bind(this, "http://google.com")} className="icon fa fa-soundcloud"/>
      </div>
    )
  }

  goTo(link) {
    window.open(
      link,
      "_blank"
    )
  }
}
