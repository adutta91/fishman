import React, { Component, PropTypes } from 'react';
import CircularProgress from 'material-ui/CircularProgress';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import theme from '../app/theme';

import { playSong } from '../app/actions';

const muiTheme = getMuiTheme(theme);

export default class AudioPlayer extends Component {

  constructor(props) {
    super(props);
    var audio = new Audio(this.props.audioSrc);
    audio.load();
    this.state = {
      completed : 0,
      audio : audio,
      playing : false
    };
  }

  componentDidMount() {
    this.interval = window.setInterval(this.progress.bind(this), 100);
    if (this.props.play) {
      const song = {
        title : this.props.title,
        src : this.props.audioSrc
      };
      playSong(song);
      this.toggle();
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
    this.state.audio.pause()
    playSong(null);
  }

  componentWillReceiveProps(next) {
    if (next.currSong !== this.props.title) {
      this.state.audio.pause();
      this.setState({ playing : false });
    }
  }

  progress() {
    if (!this.state.audio) return;
    let time = (this.state.audio.currentTime / this.state.audio.duration) * 100;
    this.setState({ completed : time });
  }

  toggle(e) {
    const audio = this.state.audio;
    const song = {
      title: this.props.title,
      src: this.props.audioSrc
    };
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
        opacity: 0
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
    if (this.state.completed === 100) playSong(null);
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div id='audio-player'>
          <div className='audio-wrapper flex a-center j-center'>
            <CircularProgress
              mode="determinate"
              style={this.progressStyle()}
              value={this.state.completed} />
            <i style={{ position: 'relative', right: '33px', cursor: 'pointer' }}
              className={`fa ${this.state.playing ? "fa-pause" : "fa-play"} fa-2x`}
              onClick={this.toggle.bind(this)}/>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
};

AudioPlayer.propTypes = {
  audioSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  currSong: PropTypes.string,
  play: PropTypes.bool
};
