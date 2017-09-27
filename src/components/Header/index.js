import React from 'react';

import Container from './Container';
import Wrapper from './Wrapper';
import Logo from 'components/Logo';

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo to="/">Generation Y</Logo>
      </Wrapper>
    </Container>
  );
};

export default Header;
