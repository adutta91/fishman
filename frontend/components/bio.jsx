import React, { Component } from 'react';

import Carousel from 'nuka-carousel';

export default class Bio extends Component {
  render() {
    return (
      <div id='bio'>
        <div style={{ margin: '40px 0' }}>
        <Carousel>
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1"/>
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2"/>
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3"/>
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4"/>
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5"/>
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6"/>
        </Carousel>
        </div>
        <p className="text">
          I won't pretend like anyone else put this bio about me together by
          writing in the 3rd person, and I don't have any press clippings to
          describe or swoon over my music. But I kind of prefer it that way.
          This way it's my story, and I'm telling it directly to you.
        </p>
        <p className="text">
          My name is <a>Danny Fishman</a>. I'm a New York City based singer-
          songwriter. I've been playing music my whole life and been writing songs
          for about half of it now. I love all of it.
        </p>
        <p className="text">
          Over the past seven years, I've written ten songs that I'm really,
          really proud of. Each one turned those moments into something I could
          cherish, instead of regret. They made coals into diamonds.
        </p>
        <p className="text">
          Sharing these songs with other people has made me happy, so I figured
          I'd see if I could make a career out of it. I hope you enjoy them.
        </p>
        <p className="text">Thanks for stopping by.</p>
        <p className="text"><em>- Danny</em></p>
      </div>
    )
  }
};
