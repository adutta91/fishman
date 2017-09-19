import React, { Component, PropTypes } from 'react';

import { tourDates } from '../app/data';

export default class TourDates extends Component {

  renderSongs() {
    if (!tourDates.length) return (<div className="date">Return Soon For Upcoming tours!</div>)
    return tourDates.map((song, idx) => {
      return (<div key={idx} className="date">date</div>);
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

TourDates.propTypes = {
  song : PropTypes.shape({
    src: PropTypes.string,
    title: PropTypes.string
  })
};
