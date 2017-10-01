import React from 'react';
import PropTypes from 'prop-types';

import Container from './Container';
import Title from './Title';
import PostMeta from 'domains/Posts/PostSingle/PostMeta';

const Content = ({ title, content, date }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <PostMeta
        commentsNumber={5}
        date={date}
      />
      <section
        className="post-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Container>
  );
};

Content.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string
};

Content.defaultProps = {
  title: '',
  content: ''
};

export default Content;
