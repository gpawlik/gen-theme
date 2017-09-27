import { actionTypes as at } from './constants';

export const fetchSingle = postId => ({
  type: at.POSTS_FETCH_SINGLE,
  postId
});

export const fetchSingleSuccess = data => ({
  type: at.POSTS_FETCH_SINGLE_SUCCESS,
  data
});

export const fetchSingleError = error => ({
  type: at.POSTS_FETCH_SINGLE_ERROR,
  error
});
