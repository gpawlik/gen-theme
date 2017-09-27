import { actionTypes as at } from './constants';

export const fetch = query => ({
  type: at.POSTS_FETCH,
  query
});

export const fetchSuccess = data => ({
  type: at.POSTS_FETCH_SUCCESS,
  data
});

export const fetchError = error => ({
  type: at.POSTS_FETCH_ERROR,
  error
});
