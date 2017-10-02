import React from 'react';

import Container from './Container';
import Wrapper from './Wrapper';
import Logo from 'components/Logo';
import SocialBox from 'components/Social';

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo to="/">Generation Y</Logo>
        <SocialBox />
      </Wrapper>
    </Container>
  );
};

export default Header;
