import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { colors } from 'variables';

const Container = styled(Link)`
  background-color: ${colors.DOVE_GRAY};
  padding: 15px;
  margin: 5px;
  align-items: center;
  width: 500px;
  float: left;
  display: block;
  height: 320px;
  text-decoration: none;
  background-image: ${({ background }) => background ? `url(${background})` : ''};
  background-size: cover;
  background-position: center;
`;

export default Container;
