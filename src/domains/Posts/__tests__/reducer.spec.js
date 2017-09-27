import { fromJS } from 'immutable';

import * as actions from 'domains/Posts/actions';
import postsReducer from 'domains/Posts/reducer';

describe('ABTest reducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = fromJS({
      posts: [],
      isLoading: false
    });
  });

  it('should return the initial state', () => {
    const expectedResult = initialState;

    expect(postsReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should process type POSTS_FETCH', () => {
    const expectedResult = initialState
      .set('isLoading', true);

    const action = actions.fetch();

    expect(postsReducer(initialState, action)).toEqual(expectedResult);
  });

  it('should process type POSTS_FETCH_SUCCESS', () => {
    const data = [{
      title: 'foo'
    }];
    const expectedResult = initialState
      .set('posts', fromJS(data))
      .set('isLoading', false);

    const action = actions.fetchSuccess(data);

    expect(postsReducer(initialState, action)).toEqual(expectedResult);
  });

  it('should process type POSTS_FETCH_ERROR', () => {
    const error = 'error';
    const expectedResult = initialState
      .set('isLoading', false);

    const action = actions.fetchError(error);

    expect(postsReducer(initialState, action)).toEqual(expectedResult);
  });
});
