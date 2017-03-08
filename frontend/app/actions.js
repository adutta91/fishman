import Store from './store';

export const CONTENT_LOADED = 'CONTENT_LOADED';
export const TAB_SELECTED = 'TAB_SELECTED';
export const SONG_PLAYING = 'SONG_PLAYING';

export const contentLoaded = () => {
  Store.dispatch({
    type: CONTENT_LOADED
  });
};

export const tabSelected = (tab) => {
  Store.dispatch({
    type: TAB_SELECTED,
    tab
  });
};

export const playSong = (song) => {
  Store.dispatch({
    type: SONG_PLAYING,
    song
  });
};
