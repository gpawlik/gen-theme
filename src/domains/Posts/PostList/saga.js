import { call, put, fork, takeLatest, throttle } from 'redux-saga/effects';

import { fetchPosts } from './service';
import { fetchSuccess, fetchError, scrollUp, scrollDown } from './actions';
import { actionTypes as at} from './constants';

export function* fetchAllPosts() {
  try {
    const result = yield call(fetchPosts);

    yield put(fetchSuccess(result));
  } catch (err) {
    yield put(fetchError(err));
  }
}

export function* scrollPosts({ payload }) {
  if (payload.value > 0) {
    yield put(scrollUp());
  } else {
    yield put(scrollDown());
  }
}

export function* postsWatcher() {
  yield fork(takeLatest, at.POSTS_FETCH, fetchAllPosts);
  yield throttle(0, at.POSTS_SCROLL, scrollPosts);
}
