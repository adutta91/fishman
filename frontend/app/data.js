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
    src: 'https://www.youtube.com/watch?v=-5y4ykx9V9s',
    title: "Honey Won't You Stay"
  },
  {
    src: 'https://www.youtube.com/watch?v=QEgBf6oDh04',
    title: "Kim (Flying Blind)"
  }
];

export const tabs = {
  bio: <Bio />,
  // listen: <SongIndex songs={songs}/>,
  // contact: <SongIndex songs={songs}/>
};
