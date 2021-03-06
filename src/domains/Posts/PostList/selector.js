import { createSelector } from 'reselect';

const selectPostsDomain = () => state => state.getIn(['postsDomain', 'postsList']);

const selectPosts = () => createSelector(
  selectPostsDomain(),
  postsState => postsState.get('posts').toJS()
);

const selectIsLoading = () => createSelector(
  selectPostsDomain(),
  postsState => postsState.get('isLoading')
);

export {
  selectPosts,
  selectIsLoading
};
