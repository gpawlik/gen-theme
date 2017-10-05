import { fromJS } from 'immutable';

import { actionTypes as at } from './constants';

const initialState = fromJS({
  posts: [],
  isLoading: false,
  scrollPosition: 0
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
    case at.POSTS_SCROLL_UP: {
      const currentPosition = state.get('scrollPosition');
      const newPosition = currentPosition + 1 < 0 ? currentPosition + 1 : 0;

      return state.set('scrollPosition', newPosition);
    }
    case at.POSTS_SCROLL_DOWN: {
      const currentPosition = state.get('scrollPosition');
      const minPosition = (state.get('posts').size - 1.5) * -50;
      const newPosition = currentPosition - 1 > minPosition ? currentPosition - 1 : minPosition;

      return state.set('scrollPosition', newPosition);
    }
    default:
      return state;
  }
};
