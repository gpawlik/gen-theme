import { createAction } from 'redux-actions';

import { actionTypes as at } from './constants';

export const fetchSingle = createAction(
  at.POSTS_FETCH_SINGLE, postId => ({ postId })
);

export const fetchSingleSuccess = createAction(
  at.POSTS_FETCH_SINGLE_SUCCESS, data => ({ data })
);

export const fetchSingleError = createAction(
  at.POSTS_FETCH_SINGLE_ERROR, error => ({ error })
);
