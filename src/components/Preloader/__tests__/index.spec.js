import React from 'react';
import { create } from 'react-test-renderer';

import Preloader from '../';

const initialProps = {};

const mockComponent = props => {
  const finalProps = {
    ...initialProps,
    ...props
  };

  return (
    <Preloader {...finalProps} />
  );
};

describe('Preloader', () => {
  it('should render with the default props', () => {
    const tree = create(mockComponent()).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
