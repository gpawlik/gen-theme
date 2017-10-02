import { call, put, fork, select, takeLatest } from 'redux-saga/effects';

import { fetchPost } from './service';
import { fetchSingleSuccess, fetchSingleError } from './actions';
import { actionTypes as at} from './constants';
import { selectPosts } from 'domains/Posts/PostList/selector';

export function* fetchSinglePost({ payload }) {
  try {
    const postId = parseInt(payload.postId, 10);
    const posts = yield(select(selectPosts()));
    const postFromStore = posts.find(item => item.id === postId);
    const result = postFromStore ? postFromStore : yield call(fetchPost, postId);

    yield put(fetchSingleSuccess(result));
  } catch (err) {
    yield put(fetchSingleError(err));
  }
}

export function* postWatcher() {
  yield fork(takeLatest, at.POSTS_FETCH_SINGLE, fetchSinglePost);
}
