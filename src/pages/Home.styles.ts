import styled from 'styled-components';

import { Colors } from '../styles/Colors';

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

const Square = styled.div<{ floor: number }>`
  width: 4.8rem;
  height: 4.8rem;
  background: url(images/floor/floor${({ floor }) => floor}.png) no-repeat;
  border: 0.1rem solid blue;

  &.wallTop {
    background: url(images/wall/wall.png) no-repeat;
  }
  &.wallLeft {
    background: url(images/wall/wall.png) no-repeat;
    transform: rotate(-90deg);
  }
  &.wallRight {
    background: url(images/wall/wall.png) no-repeat;
    transform: rotate(90deg);
  }
  &.wallBottom {
    background: url(images/wall/wall.png) no-repeat;
    transform: rotate(-180deg);
  }

  &.cornerLeftTop {
    background: url(images/wall/wallCorner.png) no-repeat;
    transform: rotate(0);
  }
  &.cornerRightTop {
    background: url(images/wall/wallCorner.png) no-repeat;
    transform: rotate(90deg);
  }
  &.cornerLeftBottom {
    background: url(images/wall/wallCorner.png) no-repeat;
    transform: rotate(-90deg);
  }
  &.cornerRightBottom {
    background: url(images/wall/wallCorner.png) no-repeat;
    transform: rotate(-180deg);
  }
`;

const Header = styled.div`
  display: flex;
  width: calc(100% - 10rem);
  align-items: center;
  justify-content: space-between;
`;

const DebuggerButton = styled.button`
  width: 12rem;
  background: transparent;
  border-radius: 0.4rem;
  border: 0.2rem solid ${Colors.light_gray};
  font-size: 1.6rem;
  padding: 0.2rem;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Title = styled.h1`
  font-size: 3.2rem;
`;

const Author = styled.span`
  padding-bottom: 0.4rem;
  margin-left: 2rem;
  font-style: italic;
`;

export {
  Container,
  SquaresContainer,
  SquareRowContainer,
  Square,
  DebuggerButton,
  Header,
  Title,
  Author,
  TextContainer,
};
