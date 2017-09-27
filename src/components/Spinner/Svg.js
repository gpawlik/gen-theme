import styled, { keyframes } from 'styled-components';

const rotator = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(270deg); }
`;

const Svg = styled.svg`
  animation: ${rotator} 1.4s linear infinite;
`;

export default Svg;
