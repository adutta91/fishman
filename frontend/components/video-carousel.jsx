import React, { Component, PropTypes } from 'react';

import Carousel from 'nuka-carousel';

import { videos } from '../app/data';

export default class VideoCarousel extends Component {

  iframeStyle() {
    return {
      marginLeft: '66px'
    };
  }

  renderVideos() {
    return videos.map((video, idx) => {
      return <iframe style={this.iframeStyle()} key={idx} width="560" height="315" src={video.src} frameborder="0" allowfullscreen></iframe>
    });
  }

  render() {
    return (
      <Carousel>
        { this.renderVideos() }
      </Carousel>
    );
  }
};

VideoCarousel.propTypes = {

};
