import { createStore } from 'redux';
import {
  CONTENT_LOADED
} from './actions'


const initialState = {
  loaded: false
}

const AppReducer = (state = initialState, action) => {
  switch(action.type) {
    case CONTENT_LOADED:
      return Object.assign({}, state, loaded: true);
    default:
      return state;
  }
}

const AppStore = createStore(AppReducer);
export default AppStore;
