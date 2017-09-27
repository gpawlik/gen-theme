import React from 'react';
import PropTypes from 'prop-types';

import Container from './Container';
import InfoBox from './InfoBox';
import Title from './Title';
import Info from './Info';

const Item = ({ id, title, excerpt }) => {
  return (
    <Container>
      <InfoBox>
        <Title to={`/post/${id}`}>{title}</Title>
        <Info>{excerpt}</Info>
      </InfoBox>
    </Container>
  );
};

Item.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  href: PropTypes.string,
  ingredients: PropTypes.string
};

Item.defaultProps = {
  title: {},
  excerpt: {}
};

export default Item;
