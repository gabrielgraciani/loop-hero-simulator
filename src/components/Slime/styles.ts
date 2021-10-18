import styled, { keyframes, css } from 'styled-components';

import { IDirections } from '../../interfaces/Directions';
import {
  attackDurationMS,
  deathDurationMS,
  idleDurationMS,
  tileSize,
} from '../../config/Constants';

import { Colors } from '../../styles/Colors';

import { IStyledSlimeProps, IStyledLifeProps } from './types';

const slimeAttackAnimation = keyframes`
  from {
    background-position-x: 0;
  }
  to {
    background-position-x: -31rem;
  }
`;

const slimeIdleAnimation = keyframes`
  from {
    background-position-x: 0;
  }
  to {
    background-position-x: -24.8rem;
  }
`;

const backgroundAnimation = (isAttacking: boolean, isDead: boolean) => {
  if (isAttacking) {
    return css`
      animation: ${slimeAttackAnimation} ${attackDurationMS / 1000}s steps(5)
        infinite;
    `;
  }

  if (isDead) {
    return css`
      animation: ${slimeIdleAnimation} ${deathDurationMS / 1000}s steps(4)
        infinite;
    `;
  }

  return css`
    animation: ${slimeIdleAnimation} ${idleDurationMS / 1000}s steps(4) infinite;
  `;
};

function getBackground(
  direction: IDirections,
  isAttacking: boolean,
  isDead: boolean,
) {
  if (isAttacking) {
    return `url(images/slime/slime_attack_${direction}.png) no-repeat`;
  }

  if (isDead) {
    return `url(images/slime/slime_death.png) no-repeat`;
  }

  return `url(images/slime/slime_idle_${direction}.png) no-repeat`;
}

const Container = styled.div.attrs((props: IStyledSlimeProps) => {
  const backgroundTeste = getBackground(
    props.direction,
    props.isAttacking,
    props.isDead,
  );

  return {
    style: {
      left: `calc(${(props.x * tileSize) / 10}rem - ${0.7}rem)`,
      top: `${(props.y * tileSize) / 10}rem`,
      background: backgroundTeste,
    },
  };
})<IStyledSlimeProps>`
  width: ${`${tileSize / 10 + 1}rem`};
  height: ${`${tileSize / 10}rem`};
  position: absolute;
  z-index: 9;
  display: ${({ isAfterDeathAnimation }) =>
    isAfterDeathAnimation ? 'none' : 'block'};

  ${props => backgroundAnimation(props.isAttacking, props.isDead)}
`;

const LifeContainer = styled.div<IStyledLifeProps>`
  position: absolute;
  bottom: -2rem;
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
