import { fromJS } from 'immutable';

import { actionTypes as at } from './constants';

const initialState = fromJS({
  posts: [],
  isLoading: false
});

export default (state = initialState, action) => {
  switch (action.type) {
    case at.POSTS_FETCH:
      return state.set('isLoading', true);
    case at.POSTS_FETCH_SUCCESS:
      return state
        .set('posts', fromJS(action.payload.data))
        .set('isLoading', false);
    case at.POSTS_FETCH_ERROR:
      return state.set('isLoading', false);
    default:
      return state;
  }
};
