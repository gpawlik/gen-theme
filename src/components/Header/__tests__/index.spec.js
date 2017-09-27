import React from 'react';
import { create } from 'react-test-renderer';

import Header from '../';

const initialProps = {};

const mockComponent = props => {
  const finalProps = {
    ...initialProps,
    ...props
  };

  return (
    <Header {...finalProps} />
  );
};

describe('Header', () => {
  it('should render with the default props', () => {
    const tree = create(mockComponent()).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
