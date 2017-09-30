import { createSelector } from 'reselect';

const selectPostsDomain = () => state => state.getIn(['postsDomain']);

const selectPrevPost = () => createSelector(
  selectPostsDomain(),
  postsState => {
    let nextPost = {}, nextIndex;
    const currentPostId = postsState.getIn(['postSingle', 'post', 'id']);
    const currentIndex = postsState.getIn(['postsList', 'posts']).findIndex(item => item.get('id') === currentPostId);
    const totalPosts = postsState.getIn(['postsList', 'posts']).size;

    if (currentIndex > -1) {
      if (currentIndex === 0) {
        nextIndex = totalPosts - 1;
      } else if (currentIndex > 0) {
        nextIndex = currentIndex - 1;
      }
      nextPost = postsState.getIn(['postsList', 'posts', nextIndex]).toJS();
    }

    return nextPost;
  }
);

const selectNextPost = () => createSelector(
  selectPostsDomain(),
  postsState => {
    let nextPost = {}, nextIndex;
    const currentPostId = postsState.getIn(['postSingle', 'post', 'id']);
    const currentIndex = postsState.getIn(['postsList', 'posts']).findIndex(item => item.get('id') === currentPostId);
    const totalPosts = postsState.getIn(['postsList', 'posts']).size;

    if (currentIndex > -1) {
      if (currentIndex < totalPosts - 1) {
        nextIndex = currentIndex + 1;
      } else if (currentIndex < totalPosts) {
        nextIndex = 0;
      }
      nextPost = postsState.getIn(['postsList', 'posts', nextIndex]).toJS();
    }

    return nextPost;
  }
);

export {
  selectPrevPost,
  selectNextPost
};
