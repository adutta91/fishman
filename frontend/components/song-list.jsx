import React, { Component, PropTypes } from 'react';

import { playSong } from '../app/actions';

import { songTracks } from '../app/data';

export default class SongList extends Component {

  playSong(song) {
    playSong(song);
  }

  renderSongs() {
    return songTracks.map((song, idx) => {
      return (<div key={idx} onClick={this.playSong.bind(this, song)} className="song">{song.title}</div>);
    });
  }

  render() {
    return (
      <div id="song-list" className="flex column a-start j-start">
        { this.renderSongs() }
      </div>
    );
  }
};

SongList.propTypes = {
  song : PropTypes.shape({
    src: PropTypes.string,
    title: PropTypes.string
  })
};
