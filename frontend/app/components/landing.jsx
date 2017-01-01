import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';

export default class Landing extends Component {
  render() {
    return (
      <div id='landing'>
        <div id="landing-image-wrapper">
          <div id="landing-image" />
        </div>
        <FlatButton onClick={() => { console.log('hi'); }} style={this.buttonStyle()} label="Enter"/>
      </div>
    )
  }

  buttonStyle() {
    return {
      position: 'fixed',
      top: '200px',
      left: '200px',
      border: '2px solid white',
      color: 'white'
    }
  }
}
