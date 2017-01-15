import React, { Component, PropTypes } from 'react';

export default class Video extends Component {

  render() {
    return (
      <div>
        <iframe width="560" height="315" src={this.props.src} frameBorder="0" allowFullScreen></iframe>
      </div>
    )
  }

};

Video.propTypes = {
  src: PropTypes.string.isRequired
};
