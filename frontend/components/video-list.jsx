import React, { Component, PropTypes } from 'react';

import Video from './video';

export default class VideoList extends Component {

  renderVideos() {
    if (!this.props.videos) return null;
    return this.props.videos.map((video, idx) => {
      return (
        <div key={idx}>
          <Video src={video.src} featured={video.featured} key={idx} />
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        { this.renderVideos() }
      </div>
    );
  }
};

VideoList.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      featured: PropTypes.bool
    })
  ).isRequired
};
