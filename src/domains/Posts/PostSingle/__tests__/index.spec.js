import React from 'react';
import { shallow, mount } from 'enzyme';

import ItemsList from 'components/ItemsList/List';
import { PostSingle, mapDispatchToProps } from '../index';
import { fetchSingle } from 'domains/Posts/PostSingle/actions';

describe('<PostSingle />', () => {
  it.skip('should render the post list', () => {
    const renderedComponent = shallow(
      <PostSingle post={{}} />
    );

    expect(renderedComponent.contains(<ItemsList data={[]} />)).toEqual(true);
  });

  it.skip('should render fetch the posts on mount', () => {
    const fetchSpy = jest.fn();

    mount(
      <PostSingle
        post={{}}
        onPostFetch={fetchSpy}
      />
    );
    expect(fetchSpy).toHaveBeenCalled();
  });

  describe('handlePostFetch', () => {
    it('should be injected', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);

      expect(result.onPostFetch).toBeDefined();
    });

    it('should dispatch post fetch when called', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);

      result.onPostFetch();
      expect(dispatch).toHaveBeenCalledWith(fetchSingle());
    });

    it('should dispatch post fetch with custom value if called', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      const value = 'foo';

      result.onPostFetch(value);
      expect(dispatch).toHaveBeenCalledWith(fetchSingle('foo'));
    });
  });

});
