import React, { Component } from 'react';
import Icons from './icons';
import AudioPlayer from './audio-player';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import theme from '../app/theme';

const muiTheme = getMuiTheme(theme);

export default class Landing extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showButton: false,
      showIcons: false
    }
  }

  componentDidMount() {
    this.buttonTimer = window.setTimeout(this.showButton.bind(this), 500);
    this.iconTimer = window.setTimeout(this.showIcons.bind(this), 1000);
  }

  componentWillUnmount() {
    window.clearTimeout(this.buttonTimer);
    window.clearTimeout(this.iconTimer);
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div id='landing'>
          <div id="landing-image-wrapper">
            <div id="landing-image" />
          </div>
          <div className="button-wrapper flex column">
            <Icons className="flex column" style={this.iconStyle()} />
            <FlatButton onClick={this.goTo.bind(this, "#")}
              style={this.buttonStyle('grey')}
              label="More Soon"/>
          </div>
          <div id="button-group" className="flex a-center">
            <div className="separator" style={this.fadeStyle()}/>
            <FlatButton onClick={this.goTo.bind(this, "#")}
              style={this.buttonStyle('white')}
              label="Listen"/>
            <FlatButton onClick={this.goTo.bind(this, "#")}
              style={this.buttonStyle('white')}
              label="Watch"/>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }


  showButton() {
    this.setState({ showButton: true });
  }

  showIcons() {
    this.setState({ showIcons: true });
  }

  goTo(link) {
    window.location.href = link;
  }

  fadeStyle() {
    if (this.state.showButton) {
      return  {
        transition: 'all 1s ease-in-out',
        opacity: '1'
      }
    } else {
      return {
        transition: 'all 1s ease-in-out',
        opacity: '0'
      }
    }
  }

  iconStyle() {
    if (this.state.showIcons) {
      return {
        transition: 'all 1s ease-in-out',
        height: '40vh',
        transform: 'scale(1.3)',
        marginBottom: '10vh',
        justifyContent: 'space-around',
        alignItems: 'center'
      }
    } else {
      return {
        opacity: '0',
        transition: 'all 1s ease-in-out',
        marginBottom: '10vh',
        height: '40vh',
        overflow: 'hidden',
        transform: 'scale(1.3)',
        justifyContent: 'space-around',
        alignItems: 'center'
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

  buttonStyle(color) {
    if (this.state.showButton) {
      return {
        opacity: '1',
        width: 'max-content',
        color: color,
        margin: '0 auto',
        border: `2px solid ${color}`,
        lineHeight: '30px',
        transition: 'all 1s ease-in-out',
      }
    } else {
      return {
        opacity: '0',
        color: color,
        border: `2px solid ${color}`,
        margin: '0 auto',
        width: 'max-content',
        lineHeight: '30px',
        transition: 'all 1s ease-in-out'
      }
    }
  }
}
