import { postsWatcher } from 'domains/Posts/PostList/saga';
import { postWatcher } from 'domains/Posts/PostSingle/saga';

export default function* rootSaga() {
  yield [
    postsWatcher(),
    postWatcher()
  ];
}
