import Store from './store';

export const CONTENT_LOADED = 'CONTENT_LOADED';

export const contentLoaded = () => {
  Store.dispatch({
    type: CONTENT_LOADED
  });
};
