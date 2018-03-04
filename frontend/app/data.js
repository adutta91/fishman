import React from 'react';

import Bio from '../components/bio';
import SongIndex from '../components/song-index';
import AudioPlayer from '../components/audio-player';

export const songTracks = [
  {
    title: "Who Do You Love",
    src: "http://res.cloudinary.com/dzyfczxnr/video/upload/v1497412846/Who%20Do%20You%20Love.m4a"
  }
];

export const tourDates = [
  
];

export const videos = [
  {
    src: 'https://www.youtube.com/embed/OK5j3ds7qkQ',
    title: "Honey Won't You Stay"
  },
  {
    src: 'https://www.youtube.com/embed/ayd0gUK435Y',
    title: "Shadow of a Man"
  },
  {
    src: 'https://www.youtube.com/embed/P9AFh3b2tTw',
    title: "Try Again"
  }
];

export const tabs = {
  bio: <Bio />,
  // listen: <SongIndex songs={songs}/>,
  // contact: <SongIndex songs={songs}/>
};


export const data = {
  email : 'dannyfishmanmusic@gmail.com'
};
