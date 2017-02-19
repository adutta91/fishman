import React, { Component, PropTypes } from 'react';
import CircularProgress from 'material-ui/CircularProgress';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import theme from '../app/theme';

const muiTheme = getMuiTheme(theme);

export default class AudioPlayer extends Component {

  constructor(props) {
    super(props);
    var audio = new Audio(this.props.audioSrc);
    // var audio = new Audio('');
    audio.load();
    this.state = {
      completed : 0,
      audio : audio,
      playing : false
    };
  }

  componentDidMount() {
    this.interval = window.setInterval(this.progress.bind(this), 100);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  progress() {
    if (!this.state.audio) return;
    this.setState({ completed : (this.state.audio.currentTime / this.state.audio.duration) * 100 });
  }

  toggle(e) {
    const audio = this.state.audio;
    if (this.state.playing) {
      audio.pause();
      this.setState({ audio : audio, playing : false });
    } else {
      audio.play();
      this.setState({ audio : audio, playing : true });
    }
  }

  progressStyle() {
    if (this.state.completed === 0) {
      return {
        display: 'none'
      };
    }
    return {
      transform: `rotate(270deg) scale(2)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    };
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className='audio-player flex a-center j-between'>
          <div className='audio-wrapper flex a-center j-center'>
            <CircularProgress
              style={this.progressStyle()}
              value={this.state.completed} />
            <i style={{ color: 'white', position: 'relative', right: `${this.state.playing ? '33px' : '29px'}`, cursor: 'pointer' }}
              className={`fa ${this.state.playing ? "fa-pause" : "fa-play"} fa-2x`}
              onClick={this.toggle.bind(this)}/>
          </div>
          <div className='audio-wrapper flex a-center j-center'>
          <CircularProgress
          style={this.progressStyle()}
          mode='determinate'
          value={this.state.completed} />
          <i style={{ color: 'white', position: 'relative', right: `${this.state.playing ? '33px' : '29px'}`, cursor: 'pointer' }}
          className={`fa ${this.state.playing ? "fa-pause" : "fa-play"} fa-2x`}
          onClick={this.toggle.bind(this)}/>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
};

AudioPlayer.propTypes = {
  audioSrc: PropTypes.string
};
