import { combineReducers } from 'redux-immutable';

import postsReducer from './PostList/reducer';
import postReducer from './PostSingle/reducer';

export default combineReducers({
  postsList: postsReducer,
  postSingle: postReducer
});
