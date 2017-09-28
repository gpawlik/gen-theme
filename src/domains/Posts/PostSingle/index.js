import React, { Component } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { fetchSingle } from './actions';
import { selectCurrentPost, selectIsLoading } from './selector';

import Preloader from 'components/Preloader';

export class PostList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onPostFetch(this.props.match.params.id);
  }

  render() {
    const { post, isLoading } = this.props;

    if (!post.title || !post.content) {
      return (<div />);
    }

    return (
      <div>
        {isLoading && <Preloader />}
        <p>{post.title.rendered}</p>
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
