import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 40rem;
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  top: 0;
  left: 0;
`;

const Image = styled.div<{ image: string }>`
  background: url(images/${({ image }) => image}.png) no-repeat;
  width: 1rem;
  height: 1rem;
  visibility: hidden;
`;

export { Container, Image };
