import React from 'react';

import Bio from '../components/bio';
import SongIndex from '../components/song-index';
import AudioPlayer from '../components/audio-player';

export const songTracks = [
  {
    title: "Kim (Flying Blind)",
    src: "http://res.cloudinary.com/dzyfczxnr/video/upload/v1487468933/Kim.m4a"
  },
  {
    title: "Honey Won't You Stay",
    src: "http://res.cloudinary.com/dzyfczxnr/video/upload/v1488865244/honey.mp3"
  }
];

export const videos = [
  {
    src: 'https://www.youtube.com/embed/Us77l6cr7so',
    featured: true
  },
  {
    src: 'https://www.youtube.com/embed/zp6ftcrVKgc'
  },
  {
    src: 'https://www.youtube.com/embed/-Bb3gCpSDko'
  },
  {
    src: 'https://www.youtube.com/embed/sh95UqBrJnc'
  },
  {
    src: 'https://www.youtube.com/embed/-Bb3gCpSDko'
  }
];

export const tabs = {
  bio: <Bio />,
  // listen: <SongIndex songs={songs}/>,
  // contact: <SongIndex songs={songs}/>
};
