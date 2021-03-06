import React from 'react';
import { create } from 'react-test-renderer';

import Item from '../';

const initialProps = {};

const mockComponent = props => {
  const finalProps = {
    ...initialProps,
    ...props
  };

  return (
    <Item {...finalProps} />
  );
};

describe.skip('ItemsList/Item', () => {
  it('should render with the default props', () => {
    const tree = create(mockComponent()).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render with custom props', () => {
    const props = {
      title: 'foo',
      thumbnail: 'bar',
      href: 'baz',
      ingredients: 'faz'
    };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
