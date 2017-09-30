import { createAction } from 'redux-actions';

import { actionTypes as at } from './constants';

export const fetch = createAction(
  at.POSTS_FETCH
);

export const fetchSuccess = createAction(
  at.POSTS_FETCH_SUCCESS, data => ({ data })
);

export const fetchError = createAction(
  at.POSTS_FETCH_ERROR, error => ({ error })
);
