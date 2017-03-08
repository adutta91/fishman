import { createStore } from 'redux';
import {
  CONTENT_LOADED,
  TAB_SELECTED,
  SONG_PLAYING
} from './actions'


const initialState = {
  loaded: false,
  activeTab: 'bio',
  song: null
}

const AppReducer = (state = initialState, action) => {
  switch(action.type) {
    case CONTENT_LOADED:
      return Object.assign({}, state, { loaded: true });
    case TAB_SELECTED:
      return Object.assign({}, state, { activeTab: action.tab });
    case SONG_PLAYING:
      console.log(action.song);
      return Object.assign({}, state, { song: action.song });
    default:
      return state;
  }
}

const AppStore = createStore(AppReducer);
export default AppStore;
