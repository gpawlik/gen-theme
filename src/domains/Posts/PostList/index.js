import React, { Component } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { fetch, scrollDirection } from './actions';
import { selectPosts, selectIsLoading, selectScrollPosition } from './selector';

import Carousel from 'components/Carousel';
import Preloader from 'components/Preloader';
import Container from './Wrapper';

export class PostList extends Component {
  constructor(props) {
    super(props);
    this.handleWheel = this.handleWheel.bind(this);
  }

  handleWheel(event) {
    event.preventDefault();
    let delta;

    if (event.wheelDelta) {
      delta = event.wheelDelta;
    } else {
      delta = -event.deltaY;
    }

    this.props.onScroll(delta);
  }

  componentWillMount() {
    const { staticContext } = this.props;

    if (staticContext) {
      staticContext.head.push(
        <meta name="description" content={'Some description'} />
      );
    }
  }

  componentWillUnmount() {
    window.removeEventListener('wheel', this.handleWheel);
  }

  componentDidMount() {
    const { posts, onPostsFetch } = this.props;

    if (!posts.length) {
      onPostsFetch();
    }
    window.addEventListener('wheel', this.handleWheel);
  }

  render() {
    const { posts, isLoading, scrollPosition } = this.props;

    return (
      <Container>
        {isLoading && <Preloader />}
        <Carousel
          data={posts}
          position={scrollPosition}
        />
      </Container>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  posts: selectPosts(),
  isLoading: selectIsLoading(),
  scrollPosition: selectScrollPosition()
});

export const mapDispatchToProps = dispatch => {
  return {
    onPostsFetch: () => {
      dispatch(fetch());
    },
    onScroll: value => {
      dispatch(scrollDirection(value));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
