import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

import Container from './Container';

export class RelatedPosts extends Component {
  constructor(props) {
    super(props);

    this.handlePostNavigation = this.handlePostNavigation.bind(this);
  }

  handlePostNavigation(event) {
    const { prevId, nextId } = this.props;

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
    document.addEventListener('keydown', this.handlePostNavigation, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handlePostNavigation, false);
  }

  render() {
    const { prevId, prevTitle, nextId, nextTitle } = this.props;

    return (
      <Container>
        <div>
          <Link to={`/post/${prevId}`}>{prevTitle}</Link>
        </div>
        <div>
          <Link to={`/post/${nextId}`}>{nextTitle}</Link>
        </div>
      </Container>
    );
  }
}

export default withRouter(RelatedPosts);
