import React from 'react';

import Bio from '../components/bio';
import SongIndex from '../components/song-index';
import AudioPlayer from '../components/audio-player';

export const songTracks = [
  {
    title: "Honey Won't You Stay",
    src: "http://res.cloudinary.com/dzyfczxnr/video/upload/v1488865244/fishman/honey.mp3"
  },
  {
    title: "Try Again",
    src: "http://res.cloudinary.com/dzyfczxnr/video/upload/v1495396712/Try%20Again.m4a"
  },
  {
    title: "Shadow of a Man",
    src: "http://res.cloudinary.com/dzyfczxnr/video/upload/v1495397101/Shadow%20of%20a%20man.m4a"
  }
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
