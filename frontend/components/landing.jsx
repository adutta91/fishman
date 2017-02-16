import React, { Component } from 'react';
import Icons from './icons';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Landing extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showButton: false,
      showTitle: false
    }
  }

  componentDidMount() {
    this.buttonTimer = window.setTimeout(this.showButton.bind(this), 500);
  }

  componentWillUnmount() {
    window.clearTimeout(this.buttonTimer);
  }

  render() {
    return (
      <MuiThemeProvider>
        <div id='landing'>
          <div id="landing-image-wrapper">
            <div id="landing-image" />
          </div>
          <div className="button-wrapper flex column">
            <Icons className="flex column" style={this.iconStyle()} />
            <FlatButton onClick={this.goTo.bind(this, "/main")}
              style={this.buttonStyle()}
              label="Enter"/>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }

  renderButton() {
    if (this.state.showButton) {
      return (
        <FlatButton onClick={() => { console.log('hi'); }}
            style={this.buttonStyle()}
            label="Enter"
            rippleColor="blue"/>
      )
    } else {
      return null;
    }
  }

  showButton() {
    this.setState({ showButton: true });
  }

  showTitle() {
    this.setState({ showTitle: true });
  }

  goTo(link) {
    window.location.href = link;
  }

  iconStyle() {
    if (this.state.showTitle) {
      return {

      }
    } else {
      return {
        opacity: '0',
        color: 'white',
        transition: 'all 1s ease-in-out'
      }
    }
  }

  titleStyle() {
    if (this.state.showTitle) {
      return {
        position: 'fixed',
        top: '33%',
        color: 'white',
        width: '100%',
        margin: '0 auto',
        opacity: '1',
        transition: 'all 1s ease-in-out',
        textShadow: '2px 2px 10px black'
      }
    } else {
      return {
        opacity: '0',
        color: 'white',
        transition: 'all 1s ease-in-out'
      }
    }
  }

  buttonStyle() {
    if (this.state.showButton) {
      return {
        opacity: '1',
        width: 'max-content',
        color: 'white',
        margin: '0 auto',
        border: '2px solid white',
        lineHeight: '30px',
        transition: 'all 1s ease-in-out',
      }
    } else {
      return {
        opacity: '0',
        color: 'white',
        border: '2px solid white',
        margin: '0 auto',
        width: 'max-content',
        lineHeight: '30px',
        transition: 'all 1s ease-in-out'
      }
    }
  }
}
