import React, { Component } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import { fetch } from 'domains/Posts/PostList/actions';
import {
  selectPrevPost,
  selectNextPost
} from './selector';

import Container from './Container';

export class RelatedPosts extends Component {
  constructor(props) {
    super(props);

    this.handlePostNavigation = this.handlePostNavigation.bind(this);
  }

  handlePostNavigation(event) {
    const { postPrev, postNext } = this.props;
    const { id: prevId } = postPrev;
    const { id: nextId } = postNext;

    if (event.keyCode === 39) {
      if (nextId) {
        this.props.history.push(`/post/${nextId}`);
      }
    } else if (event.keyCode === 37) {
      if (prevId) {
        this.props.history.push(`/post/${prevId}`);
      }
    }
  }

  componentDidMount() {
    if (!this.props.postPrev.length || !this.props.postNext.length) {
      this.props.onPostsFetch();
    }
    document.addEventListener('keydown', this.handlePostNavigation, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handlePostNavigation, false);
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RelatedPosts));
