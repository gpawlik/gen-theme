import styled from 'styled-components';

const ImageBox = styled.div`
  height: 100%;
  position: fixed;
  background-color: #eee;
  background-image: ${({ src }) => src ? `url(${src})` : ''};
  background-size: cover;
  background-position: center;
  top: 69px;
  left: 0;
  right: 50%;
  bottom: 0;
`;

export default ImageBox;
