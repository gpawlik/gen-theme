import React from 'react';
import { create } from 'react-test-renderer';

import EmptyView from '../';

const initialProps = {};

const mockComponent = props => {
  const finalProps = {
    ...initialProps,
    ...props
  };

  return (
    <EmptyView {...finalProps} />
  );
};

describe('EmptyView', () => {
  it('should render with the default props', () => {
    const tree = create(mockComponent()).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render with custom text', () => {
    const props = {
      text: 'foo'
    };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
