import { fromJS } from 'immutable';

import { actionTypes as at } from './constants';
import { actionTypes as atf } from './Featured/constants';

const initialState = fromJS({
  post: {},
  isLoading: false
});

export default (state = initialState, action) => {
  switch (action.type) {
    case at.POSTS_FETCH_SINGLE:
      return state.set('isLoading', true);
    case at.POSTS_FETCH_SINGLE_SUCCESS:
      return state
        .set('post', fromJS(action.payload.data))
        .set('isLoading', false);
    case at.POSTS_FETCH_SINGLE_ERROR:
      return state.set('isLoading', false);
    case atf.POSTS_FEATURED_IMAGE_FETCH_SUCCESS:
      return state
        .setIn(['post', 'featuredImageUrl'], action.payload.data);
    default:
      return state;
  }
};
