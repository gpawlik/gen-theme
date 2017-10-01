import { postsWatcher } from 'domains/Posts/PostList/saga';
import { postWatcher } from 'domains/Posts/PostSingle/saga';
import { featuredImageWatcher } from 'domains/Posts/PostSingle/Featured/saga';

export default function* rootSaga() {
  yield [
    postsWatcher(),
    postWatcher(),
    featuredImageWatcher()
  ];
}
