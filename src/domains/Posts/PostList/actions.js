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

export const scrollDirection = createAction(
  at.POSTS_SCROLL, value => ({ value })
);

export const scrollUp = createAction(
  at.POSTS_SCROLL_UP
);

export const scrollDown = createAction(
  at.POSTS_SCROLL_DOWN
);
