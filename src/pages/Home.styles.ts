import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SquaresContainer = styled.div`
  position: relative;
`;

const SquareRowContainer = styled.div`
  display: flex;
`;

const Square = styled.div`
  width: 4.8rem;
  height: 4.8rem;
  background: #c0c0c0;
  border: 0.1rem solid blue;
`;

export { Container, SquaresContainer, SquareRowContainer, Square };
