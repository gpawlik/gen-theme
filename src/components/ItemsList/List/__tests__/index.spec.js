import React from 'react';
import { create } from 'react-test-renderer';

import List from '../';

jest.mock('components/ItemsList/EmptyView', () => 'EmptyView');
jest.mock('components/ItemsList/Item', () => 'Item');

const initialProps = {
  data: []
};

const mockComponent = props => {
  const finalProps = {
    ...initialProps,
    ...props
  };

  return (
    <List {...finalProps} />
  );
};

describe('ItemsList/List', () => {
  it('should render an empty view with the default props', () => {
    const tree = create(mockComponent()).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render a list with custom props', () => {
    const props = {
      data: [{
        title: 'foo',
        thumbnail: 'bar',
        href: 'baz',
        ingredients: 'faz'
      }]
    };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
