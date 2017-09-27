import React from 'react';
import PropTypes from 'prop-types';

import Container from './Container';
import Text from './Text';

const EmptyView = ({ text }) => {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
};

EmptyView.defaultProps = {
  text: 'Sorry, no results found...'
};

EmptyView.propTypes = {
  text: PropTypes.string
};

export default EmptyView;
