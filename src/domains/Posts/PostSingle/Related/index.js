import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Container from './Container';
import ItemBox from './ItemBox';
import Item from './Item';

export class RelatedPosts extends Component {
  constructor(props) {
    super(props);

    this.handlePostNavigation = this.handlePostNavigation.bind(this);
  }

  handlePostNavigation(event) {
    const { prevId, nextId, history } = this.props;
    const { keyCode } = event;

    if (keyCode === 37 && nextId) {
      history.push(`/post/${nextId}`);
    } else if (keyCode === 39 && prevId) {
      history.push(`/post/${prevId}`);
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
        <ItemBox>
          <Item to={`/post/${nextId}`}>{nextTitle}</Item>
        </ItemBox>
        <ItemBox>
          <Item to={`/post/${prevId}`} align="left">{prevTitle}</Item>
        </ItemBox>
      </Container>
    );
  }
}

export default withRouter(RelatedPosts);
