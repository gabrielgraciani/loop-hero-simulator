import styled from 'styled-components';

import { tileSize } from '../../config/Constants';

const Container = styled.div<{ floor: number }>`
  width: ${tileSize / 10}rem;
  height: ${tileSize / 10}rem;
  background: url(images/floor/floor${({ floor }) => floor}.png) no-repeat;
  border: 0.1rem solid #45280e;

  &.noBorder {
    border: 0;
  }

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

export { Container };
