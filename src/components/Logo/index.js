import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { colors } from 'variables';

const Logo = styled(Link)`
  display: block;
  font-family: 'Arial';
  font-size: 32px;
  color: ${({ color }) => color ? color : colors.WHITE};
  text-decoration: none;
  padding: 0.5em 0;
`;

export default Logo;
