import { createAction } from 'redux-actions';

import { actionTypes as at } from './constants';

export const fetchFeaturedImage = createAction(
  at.POSTS_FEATURED_IMAGE_FETCH, imageId => ({ imageId })
);

export const fetchFeaturedImageSuccess = createAction(
  at.POSTS_FEATURED_IMAGE_FETCH_SUCCESS, data => ({ data })
);

export const fetchFeaturedImageError = createAction(
  at.POSTS_FEATURED_IMAGE_FETCH_ERROR, error => ({ error })
);
