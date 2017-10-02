import React, { Component } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { fetchSingle } from './actions';
import {
  selectCurrentPost,
  selectIsLoading
} from './selector';

import Content from './Content';
import Preloader from 'components/Preloader';

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
    const { currentPost = {}, isLoading } = this.props;
    const {
      title,
      content,
      date_gmt,
      featuredImageUrl,
      prevPost,
      nextPost
    } = currentPost;

    return (
      <div>
        {isLoading && <Preloader />}
        <Content
          title={title}
          content={content}
          date={date_gmt}
          imageUrl={featuredImageUrl}
          prevPost={prevPost}
          nextPost={nextPost}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentPost: selectCurrentPost(),
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
