import { fromJS } from 'immutable';

import {
  selectCurrentPost,
  selectIsLoading
} from 'domains/Posts/PostSingle/selector';

describe('Post single selector', () => {
  describe('selectCurrentPost', () => {
    const selector = selectCurrentPost();

    it('should return correctly posts from postsStore', () => {
      const store = {
        post: {
          title: 'foo'
        }
      };
      const state = fromJS({
        postsDomain: {
          postSingle: fromJS(store)
        }
      });

      expect(selector(state)).toEqual(store.post);
    });
  });

  describe('selectIsLoading', () => {
    const selector = selectIsLoading();

    it('should return correctly isLoading from postsStore', () => {
      const store = {
        isLoading: false
      };
      const state = fromJS({
        postsDomain: {
          postSingle: fromJS(store)
        }
      });

      expect(selector(state)).toEqual(store.isLoading);
    });
  });
});
