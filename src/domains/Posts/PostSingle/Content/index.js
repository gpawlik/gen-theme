import React from 'react';
import PropTypes from 'prop-types';

import Container from './Container';
import Title from './Title';
import PostMeta from 'domains/Posts/PostSingle/PostMeta';

const Content = ({ title, content }) => {
  return (
    <Container>
      <Title>{title.rendered}</Title>
      <PostMeta commentsNumber={5} />
      <div dangerouslySetInnerHTML={{ __html: content.rendered }}></div>
    </Container>
  );
};

Content.propTypes = {
  title: PropTypes.shape({
    rendered: PropTypes.string
  }),
  content: PropTypes.shape({
    rendered: PropTypes.string
  })
};

Content.defaultProps = {
  title: {},
  content: {}
};

export default Content;
