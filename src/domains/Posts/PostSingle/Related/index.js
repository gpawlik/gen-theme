import React, { Component } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetch } from 'domains/Posts/PostList/actions';
import {
  selectPrevPost,
  selectNextPost
} from './selector';

import Container from './Container';

export class RelatedPosts extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.postPrev.length || !this.props.postNext.length) {
      this.props.onPostsFetch();
    }
  }

  render() {
    const { postPrev, postNext } = this.props;
    const { id: prevId, title: prevTitle = {} } = postPrev;
    const { id: nextId, title: nextTitle = {} } = postNext;

    return (
      <Container>
        <div>
          <p>
            <Link to={`/post/${prevId}`}>{prevTitle.rendered}</Link>
          </p>
        </div>
        <div>
          <p>
            <Link to={`/post/${nextId}`}>{nextTitle.rendered}</Link>
          </p>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  postPrev: selectPrevPost(),
  postNext: selectNextPost()
});

export const mapDispatchToProps = dispatch => {
  return {
    onPostsFetch: () => {
      dispatch(fetch());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RelatedPosts);
