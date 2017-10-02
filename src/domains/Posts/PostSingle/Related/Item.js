import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Item = styled(Link)`
  padding: 15px;
  display: flex;
  text-decoration: none;
  justify-content: ${({ align }) => align === 'left' ? 'flex-end' : 'flex-start'};
  color: #999;
`;

export default Item;
