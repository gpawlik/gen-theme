import React from 'react';
import PropTypes from 'prop-types';

import Container from './Container';
import InfoBox from './InfoBox';
import Title from './Title';

const Item = ({ id, title }) => {
  return (
    <Container to={`/post/${id}`}>
      <InfoBox>
        <Title>{title}</Title>
      </InfoBox>
    </Container>
  );
};

Item.propTypes = {
  title: PropTypes.object,
  excerpt: PropTypes.object
};

Item.defaultProps = {
  title: {},
  excerpt: {}
};

export default Item;
