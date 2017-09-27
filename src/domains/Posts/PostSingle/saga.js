import { call, put, fork, takeLatest } from 'redux-saga/effects';

import { fetchPost } from './service';
import { fetchSingleSuccess, fetchSingleError } from './actions';
import { actionTypes as at} from './constants';

export function* fetchSinglePost({ postId }) {
  try {
    const result = yield call(fetchPost, postId);

    yield put(fetchSingleSuccess(result));
  } catch (err) {
    yield put(fetchSingleError(err));
  }
}

export function* postWatcher() {
  yield fork(takeLatest, at.POSTS_FETCH_SINGLE, fetchSinglePost);
}
