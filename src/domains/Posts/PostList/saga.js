import { call, put, fork, takeLatest } from 'redux-saga/effects';

import { fetchPosts } from './service';
import { fetchSuccess, fetchError } from './actions';
import { actionTypes as at} from './constants';

export function* fetchAllPosts() {
  try {
    const result = yield call(fetchPosts);

    yield put(fetchSuccess(result));
  } catch (err) {
    yield put(fetchError(err));
  }
}

export function* postsWatcher() {
  yield fork(takeLatest, at.POSTS_FETCH, fetchAllPosts);
}
