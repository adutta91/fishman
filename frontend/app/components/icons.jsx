import React, { Component } from 'react';

export default class Icons extends Component {
// facebook, Instagram, youtube, twitter, Spotify, iTunes, soundcloud, blogger
  render() {
    return (
      <div className="flex row">
        <i className="icon fa fa-facebook"/>
        <i className="icon fa fa-youtube"/>
        <i className="icon fa fa-twitter"/>
        <i className="icon fa fa-spotify"/>
      </div>
    )
  }
}
