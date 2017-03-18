import React, { Component } from 'react';
import Icons from './icons';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import theme from '../app/theme';

import AudioPlayer from './audio-player';
import SongList from './song-list';
import VideoCarousel from './video-carousel';
import ContactInfo from './contact-info';

const muiTheme = getMuiTheme(theme);

export default class Landing extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showButton: false,
      showIcons: false,
      view: null
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

  renderView() {
    if (!this.state.view) return null;
    switch(this.state.view) {
      case 'songs':
        return (<SongList song={this.props.song} />);
      case 'videos':
        return (<VideoCarousel />);
      case 'contact':
        return (<ContactInfo />);
      default:
        return null;
    }
  }

  setView(view) {
    this.setState({ view });
  }

  renderNowPlaying() {
    if (!this.props.song) return null;
    const song = this.props.song;
    return (
      <div className="flex j-between">
        <div className='flex column j-start a-start'>
          <em><strong>Now Playing</strong></em>
          <span className='large'><em><strong>{song.title}</strong></em></span>
        </div>
        <AudioPlayer key={song.title} audioSrc={song.src} title={song.title} currSong={song.title} play={true}/>
      </div>
    );
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div id='landing'>

          <div id="landing-image-wrapper">
            <div id="landing-image" />
          </div>

          <div id='now-playing' style={this.nowPlayingStyle()}>
            { this.renderNowPlaying() }
          </div>

          <div id={`${this.state.view}-view`} style={this.viewStyle()}>
            {this.renderView() }
          </div>

          <div className="button-wrapper flex column">
            <Icons className="flex column" style={this.iconStyle()} />
            <FlatButton onClick={this.goTo.bind(this, "#")}
              style={this.buttonStyle('grey')}
              disabled={true}
              label="More Soon"/>
          </div>

          <div id="button-group" className="flex a-center">
            <div className="separator" style={this.fadeStyle()}/>
            <FlatButton onClick={this.setView.bind(this, "songs")}
              style={this.buttonStyle('white')}
              label="Listen"/>
            <FlatButton onClick={this.setView.bind(this, "videos")}
              style={this.buttonStyle('white')}
              label="Watch"/>
            <span className="contact" style={this.fadeStyle()}>dannyfishman1@gmail.com</span>
            {/* <FlatButton onClick={this.setView.bind(this, "contact")}
              style={this.buttonStyle('gray')}
              disabled={true}
              label="Contact"/> */}
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

  viewStyle() {
    if (this.state.view) {
      return {
        opacity: 1
      };
    } else {
      return {
        opacity: 0
      };
    }
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

  nowPlayingStyle() {
    if (this.props.song) {
      return {
        opacity: 1,
        transition: 'all 3s ease-in-out'
      }
    } else {
      return {
        opacity: 0,
        transition: 'all .3s ease-in-out'
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
