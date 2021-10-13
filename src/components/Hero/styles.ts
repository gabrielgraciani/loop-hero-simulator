import styled, { keyframes, css } from 'styled-components';

import { IStyledHeroProps } from './types';

const heroAnimation = keyframes`
  from {
    background-position-x: 0;
  }
  to {
    background-position-x: -336px;
  }
`;

const Container = styled.div<IStyledHeroProps>`
  width: 84px;
  height: 84px;
  transform: scale(2);

  ${({ direction }) =>
    direction === 'DOWN' &&
    css`
      background: url('images/hero/hero_idle_down.png') no-repeat;
      animation: ${heroAnimation} 0.5s steps(4) infinite;
    `}

  ${({ direction }) =>
    direction === 'UP' &&
    css`
      background: url('images/hero/hero_idle_up.png') no-repeat;
      animation: ${heroAnimation} 0.5s steps(4) infinite;
    `}
  ${({ direction }) =>
    direction === 'LEFT' &&
    css`
      background: url('images/hero/hero_idle_left.png') no-repeat;
      animation: ${heroAnimation} 0.5s steps(4) infinite;
    `}
  ${({ direction }) =>
    direction === 'RIGHT' &&
    css`
      background: url('images/hero/hero_idle_right.png') no-repeat;
      animation: ${heroAnimation} 0.5s steps(4) infinite;
    `}

  ${({ isAttacking }) =>
    isAttacking &&
    css`
      background: url('images/hero/hero_attack_down.png') no-repeat;
      animation: ${heroAnimation} 1s steps(4) infinite;
    `}
`;

export { Container };
