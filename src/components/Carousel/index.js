import React from 'react';

import Container from './Container';
import Track from './Track';
import Item from 'components/ItemsList/Item';

import './style.css';

const SimpleSlider = ({ data, position }) => {

  const items = data.map(({ id, title, featuredImageUrlThumbnail }) => {
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
      <Track items={data.length} width={500} position={position}>
        {items}
      </Track>
    </Container>
  );
};

export default SimpleSlider;
