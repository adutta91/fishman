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
      return (
        <div key={idx}>
          <iframe style={this.iframeStyle()} key={idx} width="560" height="315" src={video.src} frameBorder="0" allowFullScreen></iframe>
          <p className='flex j-center' style={{color: 'white', marginTop: '15px'}}>{video.title}</p>
        </div>
      )

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

VideoCarousel.propTypes = {};
