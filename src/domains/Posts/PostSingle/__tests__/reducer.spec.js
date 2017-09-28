import { fromJS } from 'immutable';

import * as actions from 'domains/Posts/PostSingle/actions';
import postReducer from 'domains/Posts/PostSingle/reducer';

describe('PostSingle reducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = fromJS({
      post: {},
      isLoading: false
    });
  });

  it('should return the initial state', () => {
    const expectedResult = initialState;

    expect(postReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should process type POSTS_SINGLE_FETCH', () => {
    const expectedResult = initialState
      .set('isLoading', true);

    const action = actions.fetchSingle();

    expect(postReducer(initialState, action)).toEqual(expectedResult);
  });

  it('should process type POSTS_SINGLE_FETCH_SUCCESS', () => {
    const data = {
      title: 'foo'
    };
    const expectedResult = initialState
      .set('post', fromJS(data))
      .set('isLoading', false);

    const action = actions.fetchSingleSuccess(data);

    expect(postReducer(initialState, action)).toEqual(expectedResult);
  });

  it('should process type POSTS_SINGLE_FETCH_ERROR', () => {
    const error = 'error';
    const expectedResult = initialState
      .set('isLoading', false);

    const action = actions.fetchSingleError(error);

    expect(postReducer(initialState, action)).toEqual(expectedResult);
  });
});
