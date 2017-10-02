import React, { Component } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { fetch } from './actions';
import { selectPosts, selectIsLoading } from './selector';

import ItemsList from 'components/ItemsList/List';
import Preloader from 'components/Preloader';
import Container from './Wrapper';

export class PostList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { staticContext } = this.props;

    if (staticContext) {
      staticContext.head.push(
        <meta name="description" content={'Some description'} />
      );
    }
  }

  componentDidMount() {
    const { posts, onPostsFetch } = this.props;

    if (!posts.length) {
      onPostsFetch();
    }
  }

  render() {
    const { posts, isLoading } = this.props;

    return (
      <Container>
        {isLoading && <Preloader />}
        <ItemsList data={posts} />
      </Container>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  posts: selectPosts(),
  isLoading: selectIsLoading()
});

export const mapDispatchToProps = dispatch => {
  return {
    onPostsFetch: () => {
      dispatch(fetch());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
