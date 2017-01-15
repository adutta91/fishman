import React from 'react';

import Bio from '../components/bio';
import VideoList from '../components/video-list';


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
  videos: <VideoList videos={videos} />
};
