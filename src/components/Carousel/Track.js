import styled from 'styled-components';

const Container = styled.div`
  transform: ${({ position, items, width }) => {
    const maxPosition = items * width;
    const newPosition = position * 10;

    return `translate3d(${newPosition}px, 0, 0)`;
  }};
  width: ${({ items, width }) => items * width * 1.2 + 'px'};
  display: flex;
  /*transition: .1s ease-in-out;*/
`;

export default Container;
