import { put } from 'redux-saga/effects';

import { fetchSingleSuccess, fetchSingleError } from '../actions';
import { fetchSinglePost } from '../saga';

const payload = {
  postId: 'foo'
};

describe('fetchSinglePost Saga', () => {
  let fetchPostGenerator;

  beforeEach(() => {
    fetchPostGenerator = fetchSinglePost({ payload });

    const callDescriptor = fetchPostGenerator.next(payload.postId).value;

    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the fetchSuccess action if it requests the data successfully', () => {
    const response = [{
      title: 'foo'
    }];
    const putDescriptor = fetchPostGenerator.next(response).value;

    expect(putDescriptor).toEqual(put(fetchSingleSuccess(response)));
  });

  it('should call the fetchError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = fetchPostGenerator.throw(response).value;

    expect(putDescriptor).toEqual(put(fetchSingleError(response)));
  });
});
