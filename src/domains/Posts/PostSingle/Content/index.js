import React from 'react';
import PropTypes from 'prop-types';

import Container from './Container';
import Title from './Title';
import ImageBox from './ImageBox';
import PostMeta from 'domains/Posts/PostSingle/PostMeta';
import Related from 'domains/Posts/PostSingle/Related';
import Flex from 'components/Layout/Flex';
import FlexItem from 'components/Layout/FlexItem';

const Content = ({ title, content, date, imageUrl, prevPost = {}, nextPost = {} }) => {
  return (
    <Flex>
      <FlexItem>
        <ImageBox
          src={imageUrl}
        />
      </FlexItem>
      <FlexItem>
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
        <Related
          prevId={prevPost.id}
          prevTitle={prevPost.title}
          nextId={nextPost.id}
          nextTitle={nextPost.title}
        />
      </FlexItem>
    </Flex>
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
