import { createSelector } from 'reselect';

const selectPostSingleDomain = () => state => state.getIn(['postsDomain', 'postSingle']);

const selectCurrentPost = () => createSelector(
  selectPostSingleDomain(),
  postState => postState.get('post').toJS()
);

const selectIsLoading = () => createSelector(
  selectPostSingleDomain(),
  postState => postState.get('isLoading')
);

export {
  selectCurrentPost,
  selectIsLoading
};
