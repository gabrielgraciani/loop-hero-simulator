import styled, { keyframes } from 'styled-components';

import { attackDurationMS, tileSize } from '../../config/Constants';

import { IStyledTrapProps } from './types';

const trapAnimation = keyframes`
  from {
    background-position-x: 0;
  }
  to {
    background-position-x: -38.4rem;
  }
`;

const Container = styled.div<IStyledTrapProps>`
  width: ${`${tileSize / 10}rem`};
  height: ${`${tileSize / 10}rem`};
  position: absolute;
  top: ${({ y }) => `${(y * tileSize) / 10}rem`};
  left: ${({ x }) => `${(x * tileSize) / 10}rem`};
  background: url(images/trap.png) no-repeat;
  animation: ${trapAnimation} ${attackDurationMS / 1000}s steps(8) infinite;
`;

export { Container };
