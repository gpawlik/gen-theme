import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchFeaturedImage } from './actions';
import ImageBox from './ImageBox';

export class FeaturedImage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    const { imageId, onFeaturedFetch } = this.props;
    const { imageId: nextImageId, imageUrl: nextImageUrl } = nextProps;

    if (nextImageId && imageId !== nextImageId && !nextImageUrl) {
      onFeaturedFetch(nextImageId);
    }
  }

  render() {
    const { imageUrl } = this.props;

    return (
      <ImageBox src={imageUrl} />
    );
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    onFeaturedFetch: imageId => {
      dispatch(fetchFeaturedImage(imageId));
    }
  };
};

export default connect(null, mapDispatchToProps)(FeaturedImage);
