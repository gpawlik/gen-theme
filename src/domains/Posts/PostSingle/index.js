import React, { Component } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { fetchSingle } from './actions';
import {
  selectCurrentPost,
  selectIsLoading
} from './selector';

import Content from './Content';
import Related from './Related';
import Preloader from 'components/Preloader';

export class PostList extends Component {
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
    const { post = {}, postNext, isLoading } = this.props;
    const { title = {}, content = {}, date_gmt } = post;

    return (
      <div>
        {isLoading && <Preloader />}
        <p>n: {postNext}</p>
        <Content
          title={title}
          content={content}
          date={date_gmt}
        />
        <Related />
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
