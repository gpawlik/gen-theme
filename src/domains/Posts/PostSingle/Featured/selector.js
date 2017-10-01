/*import { createSelector } from 'reselect';

const selectPostDomain = () => state => state.getIn(['postsDomain', 'postSingle']);

const selectFeaturedImageUrl = () => createSelector(
  selectPostDomain(),
  postsState => {
    if (postsState.get('post').has('featuredImageUrl')) {
      return postsState.getIn(['post', 'featuredImageUrl']).toJS();
    }
  }
);

export {
  selectFeaturedImageUrl
};*/
