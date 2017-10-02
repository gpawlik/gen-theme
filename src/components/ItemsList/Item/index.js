import React from 'react';
import PropTypes from 'prop-types';

import Container from './Container';
import InfoBox from './InfoBox';
import Title from './Title';

const Item = ({ id, title, imageUrl }) => {
  return (
    <Container to={`/post/${id}`} background={imageUrl}>
      <InfoBox>
        <Title>{title}</Title>
      </InfoBox>
    </Container>
  );
};

Item.propTypes = {
  title: PropTypes.string
};

Item.defaultProps = {
  title: ''
};

export default Item;
