import React from 'react';
import { create } from 'react-test-renderer';

import Spinner from '../';

const initialProps = {};

const mockComponent = props => {
  const finalProps = {
    ...initialProps,
    ...props
  };

  return (
    <Spinner {...finalProps} />
  );
};

describe('Spinner', () => {
  it('should render with the default props', () => {
    const tree = create(mockComponent()).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render with custom width and height', () => {
    const props = {
      width: 10,
      height: 10
    };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
