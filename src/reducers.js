import { combineReducers } from 'redux-immutable';

import postsReducer from 'domains/Posts/reducer';

export default combineReducers({
  postsDomain: postsReducer
});
