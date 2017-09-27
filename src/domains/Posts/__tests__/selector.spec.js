import { fromJS } from 'immutable';

import {
  selectPosts,
  selectIsLoading
} from 'domains/Posts/selector';

describe('Posts selector', () => {
  describe('selectPosts', () => {
    const selector = selectPosts();

    it('should return correctly posts from postsStore', () => {
      const store = {
        posts: [{
          title: 'foo'
        }]
      };
      const state = fromJS({
        postsDomain: fromJS(store)
      });

      expect(selector(state)).toEqual(store.posts);
    });
  });

  describe('selectIsLoading', () => {
    const selector = selectIsLoading();

    it('should return correctly isLoading from postsStore', () => {
      const store = {
        isLoading: false
      };
      const state = fromJS({
        postsDomain: fromJS(store)
      });

      expect(selector(state)).toEqual(store.isLoading);
    });
  });
});
