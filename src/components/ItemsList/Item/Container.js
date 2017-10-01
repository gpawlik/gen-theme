import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { colors } from 'variables';

const Container = styled(Link)`
  background-color: ${colors.DOVE_GRAY};
  padding: 15px;
  margin: 5px;
  display: flex;
  align-items: center;
  max-width: 300px;
  height: 320px;
  flex: 1;
  text-decoration: none;
  background-image: ${({ imageUrl }) => imageUrl ? `url(${imageUrl})` : ''};
  background-size: cover;
  background-position: center;
`;

export default Container;
