import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { colors } from 'variables';

const Title = styled(Link)`
  font-size: 20px;
  font-weight: 600;
  color: ${colors.MIDNIGHT_BLUE};
  text-decoration: none;
  margin-bottom: 5px;

  &:hover {
    color: ${colors.GREEN_SEA}
  }
`;

export default Title;
