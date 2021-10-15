import styled, { keyframes, css } from 'styled-components';

import { IDirections } from '../../interfaces/Directions';
import {
  attackDurationMS,
  deathDurationMS,
  idleDurationMS,
  tileSize,
} from '../../config/Constants';

import { Colors } from '../../styles/Colors';

import { IStyledHeroProps, IStyledLifeProps } from './types';

const heroAnimation = keyframes`
  from {
    background-position-x: 0;
  }
  to {
    background-position-x: -19.2rem;
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
      animation: ${heroAnimation} ${deathDurationMS / 1000}s steps(4) infinite;
    `;
  }

  return css`
    background: ${`url('images/hero/hero_idle_${direction}.png') no-repeat`};
    animation: ${heroAnimation} ${idleDurationMS / 1000}s steps(4) infinite;
  `;
};

const Container = styled.div<IStyledHeroProps>`
  width: ${`${tileSize / 10}rem`};
  height: ${`${tileSize / 10}rem`};
  left: ${({ horizontalPosition }) =>
    `${(horizontalPosition * tileSize) / 10}rem`};
  top: ${({ vericalPosition }) => `${(vericalPosition * tileSize) / 10}rem`};
  position: absolute;
  transition: all 0.3s ease;

  ${props =>
    directionAnimation(props.direction, props.isAttacking, props.isDead)}
`;

const LifeContainer = styled.div<IStyledLifeProps>`
  position: absolute;
  bottom: -1rem;
  left: 50%;
  transform: translate(-50%, 0);

  width: calc(100% + 4rem);
  height: 1.6rem;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${Colors.life_empty};
  border: 0.1rem solid ${Colors.gray};
  border-radius: 0.2rem;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: ${({ life }) => `${life}%`};
    height: 100%;
    background: ${Colors.life};
    z-index: -1;
    transition: all 0.3s ease;
  }
`;

export { Container, LifeContainer };
