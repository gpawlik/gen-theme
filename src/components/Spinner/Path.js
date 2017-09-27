import styled, { keyframes } from 'styled-components';

import { colors } from 'variables';

const offset = 100;

const dash = keyframes`
  0% { stroke-dashoffset: ${offset}; }
  50% {
    stroke-dashoffset: ${offset}/4;
    transform:rotate(135deg);
  }
  100% {
    stroke-dashoffset: ${offset};
    transform:rotate(450deg);
  }
`;

const Path = styled.circle`
  stroke: ${colors.GREEN_SEA};
  stroke-width: 6;
  stroke-linecap: round;
  stroke-dasharray: ${offset};
  stroke-dashoffset: 0;
  transform-origin: center;
  animation: ${dash} 1.4s ease-in-out infinite;
`;

export default Path;
