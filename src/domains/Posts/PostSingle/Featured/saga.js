import { call, put, fork, takeLatest } from 'redux-saga/effects';

import { fetchFeatured } from './service';
import { fetchFeaturedImageSuccess, fetchFeaturedImageError } from './actions';
import { actionTypes as at} from './constants';

export function* fetchFeaturedImage({ payload }) {
  try {
    if (!payload.imageId) {
      throw new Error('Featured image Id missing.');
    }
    const result = yield call(fetchFeatured, payload.imageId);

    yield put(fetchFeaturedImageSuccess(result.source_url));
  } catch (err) {
    yield put(fetchFeaturedImageError(err));
  }
}

export function* featuredImageWatcher() {
  yield fork(takeLatest, at.POSTS_FEATURED_IMAGE_FETCH, fetchFeaturedImage);
}
