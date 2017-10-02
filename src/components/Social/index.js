import React from 'react';

import Container from './Container';
import SocialItem from './SocialItem';

const Header = () => {
  return (
    <Container>
      <SocialItem type="facebook" />
      <SocialItem type="twitter" />
    </Container>
  );
};

export default Header;
