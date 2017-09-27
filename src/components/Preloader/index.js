import React from 'react';

import Spinner from 'components/Spinner';
import Container from './Container';

const Preloader = () => {
  return (
    <Container>
      <Spinner />
    </Container>
  );
};

export default Preloader;
