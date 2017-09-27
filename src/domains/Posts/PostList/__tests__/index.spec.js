import React from 'react';
import { shallow, mount } from 'enzyme';

import ItemsList from 'components/ItemsList/List';
import { PostList, mapDispatchToProps } from '../index';
import { fetch } from 'domains/Posts/actions';

describe('<PostList />', () => {
  it('should render the post list', () => {
    const renderedComponent = shallow(
      <PostList posts={[]} />
    );

    expect(renderedComponent.contains(<ItemsList data={[]} />)).toEqual(true);
  });

  it('should render fetch the posts on mount', () => {
    const fetchSpy = jest.fn();

    mount(
      <PostList
        posts={[]}
        onPostsFetch={fetchSpy}
      />
    );
    expect(fetchSpy).toHaveBeenCalled();
  });

  describe('handlePostsFetch', () => {
    it('should be injected', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);

      expect(result.onPostsFetch).toBeDefined();
    });

    it('should dispatch posts fetch when called', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);

      result.onPostsFetch();
      expect(dispatch).toHaveBeenCalledWith(fetch());
    });

    it('should dispatch posts fetch with custom value if called', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      const value = 'foo';

      result.onPostsFetch(value);
      expect(dispatch).toHaveBeenCalledWith(fetch('foo'));
    });
  });

});
