import { put } from 'redux-saga/effects';

import { fetchSuccess, fetchError } from '../actions';
import { fetchAllPosts } from '../saga';

const query = 'foo';

describe('fetchPosts Saga', () => {
  let fetchPostsGenerator;

  beforeEach(() => {
    fetchPostsGenerator = fetchAllPosts({ query });

    const callDescriptor = fetchPostsGenerator.next(query).value;

    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the fetchSuccess action if it requests the data successfully', () => {
    const response = [{
      title: 'foo'
    }];
    const putDescriptor = fetchPostsGenerator.next(response).value;

    expect(putDescriptor).toEqual(put(fetchSuccess(response, query)));
  });

  it('should call the fetchError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = fetchPostsGenerator.throw(response).value;

    expect(putDescriptor).toEqual(put(fetchError(response)));
  });
});
