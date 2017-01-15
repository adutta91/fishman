import { createStore } from 'redux';
import {
  CONTENT_LOADED,
  TAB_SELECTED
} from './actions'


const initialState = {
  loaded: false,
  activeTab: 'bio'
}

const AppReducer = (state = initialState, action) => {
  switch(action.type) {
    case CONTENT_LOADED:
      return Object.assign({}, state, { loaded: true });
    case TAB_SELECTED:
      return Object.assign({}, state, { activeTab: action.tab });
    default:
      return state;
  }
}

const AppStore = createStore(AppReducer);
export default AppStore;
