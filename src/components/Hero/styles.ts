import styled, { keyframes, css } from 'styled-components';

import { IDirections } from '../../interfaces/Directions';
import {
  attackDurationMS,
  deathDurationMS,
  idleDurationMS,
  heroSize,
} from '../../utils/helper';

import { IStyledHeroProps } from './types';

const heroAnimation = keyframes`
  from {
    background-position-x: 0;
  }
  to {
    background-position-x: -33.6rem;
  }
`;

const directionAnimation = (
  direction: IDirections,
  isAttacking: boolean,
  isDead: boolean,
) => {
  if (isAttacking) {
    return css`
      background: ${`url('images/hero/hero_attack_${direction}.png') no-repeat`};
      animation: ${heroAnimation} ${attackDurationMS / 1000}s steps(4) infinite;
    `;
  }

  if (isDead) {
    return css`
      background: url('images/hero/hero_death.png') no-repeat;
      animation: ${heroAnimation} ${deathDurationMS / 1000}s steps(4) forwards;
      animation-iteration-count: 4;
    `;
  }

  return css`
    background: ${`url('images/hero/hero_idle_${direction}.png') no-repeat`};
    animation: ${heroAnimation} ${idleDurationMS / 1000}s steps(4) infinite;
  `;
};

const Container = styled.div<IStyledHeroProps>`
  width: ${`${heroSize / 10}rem`};
  height: ${`${heroSize / 10}rem`};
  left: ${({ horizontalPosition }) =>
    `${(horizontalPosition * heroSize) / 10}rem`};
  top: ${({ vericalPosition }) => `${(vericalPosition * heroSize) / 10}rem`};
  position: absolute;
  transform: scale(2);
  transition: all 0.3s ease;

  ${props =>
    directionAnimation(props.direction, props.isAttacking, props.isDead)}
`;

export { Container };
