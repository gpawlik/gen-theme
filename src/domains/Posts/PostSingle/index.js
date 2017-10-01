import React, { Component } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { fetchSingle } from './actions';
import {
  selectCurrentPost,
  selectIsLoading
} from './selector';

import Featured from './Featured';
import Content from './Content';
import Related from './Related';
import Preloader from 'components/Preloader';
import Flex from 'components/Layout/Flex';
import FlexItem from 'components/Layout/FlexItem';

export class Post extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onPostFetch(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.props.onPostFetch(nextProps.match.params.id);
    }
  }

  render() {
    const { post = {}, isLoading } = this.props;
    const {
      title = {},
      content = {},
      featured_media,
      date_gmt,
      featuredImageUrl
    } = post;

    return (
      <Flex>
        {isLoading && <Preloader />}
        <FlexItem>
          <Featured
            imageUrl={featuredImageUrl}
            imageId={featured_media}
          />
        </FlexItem>
        <FlexItem>
          <Content
            title={title}
            content={content}
            date={date_gmt}
          />
          <Related />
        </FlexItem>
      </Flex>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  post: selectCurrentPost(),
  isLoading: selectIsLoading()
});

export const mapDispatchToProps = dispatch => {
  return {
    onPostFetch: postId => {
      dispatch(fetchSingle(postId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
