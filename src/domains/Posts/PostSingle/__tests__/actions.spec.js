/*eslint-env jest, expect */
import { actionTypes as at } from 'domains/Posts/PostSingle/constants';
import * as actions from 'domains/Posts/PostSingle/actions';

describe('Post single actions', () => {
  describe('fetchSingle', () => {
    it('should return type and query', () => {
      const postId = 'foo';

      expect(actions.fetchSingle(postId)).toEqual({
        type: at.POSTS_FETCH_SINGLE,
        postId: 'foo'
      });
    });
  });

  describe('fetchSingleSuccess', () => {
    it('should return type and post results', () => {
      const results = [{
        title: 'foo'
      }];

      expect(actions.fetchSingleSuccess(results)).toEqual({
        type: at.POSTS_FETCH_SINGLE_SUCCESS,
        data: [{
          title: 'foo'
        }]
      });
    });
  });

  describe('fetchSingleError', () => {
    it('should return type and error', () => {
      const error = 'error';

      expect(actions.fetchSingleError(error)).toEqual({
        type: at.POSTS_FETCH_SINGLE_ERROR,
        error
      });
    });
  });
});
