import React, { Component, PropTypes } from 'react';

export default class SongIndex extends Component {

  componentDidMount() {
    // SC.initialize({
    //   client_id: 'YOUR_CLIENT_ID'
    // });
    //
    // var track_url = 'http://soundcloud.com/forss/flickermood';
    // SC.oEmbed(track_url, { auto_play: true }).then(function(oEmbed) {
    //   console.log('oEmbed response: ', oEmbed);
    // });
  }

  render() {
    return (
      <div className="flex">
      <iframe width="100%" height="300" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/88359180&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
      </div>
    )
  }
};

SongIndex.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    src: PropTypes.string,
    description: PropTypes.string
  }))
};
