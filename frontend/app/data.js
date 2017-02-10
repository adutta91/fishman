import React from 'react';

import Bio from '../components/bio';
import SongIndex from '../components/song-index';


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


export const songs = [
  {
    title: 'Descent Into Madness',
    src: 'https://www.youtube.com/embed/Us77l6cr7so',
    description: ''
  },
  {
    title: 'Descent Into Madness',
    src: 'https://www.youtube.com/embed/Us77l6cr7so',
    description: ''
  },
  {
    title: 'Descent Into Madness',
    src: 'https://www.youtube.com/embed/Us77l6cr7so',
    description: ''
  },
  {
    title: 'Descent Into Madness',
    src: 'https://www.youtube.com/embed/Us77l6cr7so',
    description: ''
  },
  {
    title: 'Descent Into Madness',
    src: 'https://www.youtube.com/embed/Us77l6cr7so',
    description: ''
  }
];

export const tabs = {
  bio: <Bio />,
  listen: <SongIndex songs={songs}/>,
  contact: <SongIndex songs={songs}/>
};
