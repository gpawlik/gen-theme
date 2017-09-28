/*eslint-env jest, expect */
import { actionTypes as at } from 'domains/Posts/PostList/constants';
import * as actions from 'domains/Posts/PostList/actions';

describe('Posts actions', () => {
  describe('fetch', () => {
    it('should return type and query', () => {
      const query = 'foo';

      expect(actions.fetch(query)).toEqual({
        type: at.POSTS_FETCH,
        query: 'foo'
      });
    });
  });

  describe('fetchSuccess', () => {
    it('should return type and post results', () => {
      const results = [{
        title: 'foo'
      }];

      expect(actions.fetchSuccess(results)).toEqual({
        type: at.POSTS_FETCH_SUCCESS,
        data: [{
          title: 'foo'
        }]
      });
    });
  });

  describe('fetchError', () => {
    it('should return type and error', () => {
      const error = 'error';

      expect(actions.fetchError(error)).toEqual({
        type: at.POSTS_FETCH_ERROR,
        error
      });
    });
  });
});
