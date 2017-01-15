import React, { Component } from 'react';

export default class Icons extends Component {
  render() {
    return (
      <div className="flex a-end row" style={{ margin: '0 30px 0 10px' }}>
        <i onClick={this.goTo.bind(this, "https://www.facebook.com/dannyfishmanmusic/")} className="icon fa fa-facebook-official"/>
        <i onClick={this.goTo.bind(this, "https://www.youtube.com/channel/UCKEqnVJK5vtEBSXRQu1gzig")} className="icon fa fa-youtube"/>
        <i onClick={this.goTo.bind(this, "https://twitter.com/dannythefishman")} className="icon fa fa-twitter"/>
        <i onClick={this.goTo.bind(this, "https://www.instagram.com/dannyfishmanmusic/")} className="icon fa fa-instagram"/>
        <i onClick={this.goTo.bind(this, "https://soundcloud.com/danny-fishman")} className="icon fa fa-soundcloud"/>
        {/*  dannyfishmanmusic.tumblr.com */}
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
