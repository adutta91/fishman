import React from 'react';

import Bio from '../components/bio';
import SongIndex from '../components/song-index';
import AudioPlayer from '../components/audio-player';

export const songTracks = [
  {
    title: "Kim (Flying Blind)",
    src: "https://www.youtube.com/embed/QEgBf6oDh04"
  },
  {
    title: "Honey Won't You Stay",
    src: "https://www.youtube.com/embed/-5y4ykx9V9s"
  }
];

export const videos = [
  {
    src: 'https://www.youtube.com/embed/-5y4ykx9V9s',
    title: "Honey Won't You Stay"
  },
  {
    src: 'https://www.youtube.com/embed/QEgBf6oDh04',
    title: "Kim (Flying Blind)"
  }
];

export const tabs = {
  bio: <Bio />,
  // listen: <SongIndex songs={songs}/>,
  // contact: <SongIndex songs={songs}/>
};
