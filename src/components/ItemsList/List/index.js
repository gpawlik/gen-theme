import React from 'react';
import PropTypes from 'prop-types';

import Container from './Container';
import Item from 'components/ItemsList/Item';
import EmptyView from 'components/ItemsList/EmptyView';

const List = ({ data }) => {
  const results = data.map(({ id, title, featuredImageUrlThumbnail }) => {
    return (
      <Item
        id={id}
        title={title}
        imageUrl={featuredImageUrlThumbnail}
        key={id}
      />
    );
  });

  return (
    <Container>
      {data.length ? results : <EmptyView />}
    </Container>
  );
};

List.propTypes = {
  data: PropTypes.array.isRequired
};

export default List;
