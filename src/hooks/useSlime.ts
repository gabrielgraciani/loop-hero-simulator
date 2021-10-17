import { useEffect, useState } from 'react';

import { attackDurationMS, heroInitialLife } from '../config/Constants';

import { IPosition } from '../interfaces/Position';
import { IDirections } from '../interfaces/Directions';

import { randomNumber } from '../utils/helper';

interface IUseHeroResponse {
  x: number;
  y: number;
  direction: IDirections;
  handleAttack: () => void;
  isAttacking: boolean;
  isBlocked: boolean;
  isDead: boolean;
  life: number;
  handleReceiveDamage: () => void;
}

interface IUseHeroProps {
  initialPosition: IPosition;
}

export const useSlime = ({
  initialPosition,
}: IUseHeroProps): IUseHeroResponse => {
  const [isAttacking, setIsAttacking] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);
  // TODO remove this eslint disable rule when i make the death function
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isDead, setIsDead] = useState(false);
  const [life, setLife] = useState(heroInitialLife);

  function handleAttack() {
    setIsAttacking(true);
    setIsBlocked(true);
  }

  function handleReceiveDamage() {
    const randomDamage = randomNumber({ min: 1, max: 50 });

    setLife(oldLife => {
      const result = oldLife - randomDamage;
      if (result <= 0) {
        setIsDead(true);
        setIsBlocked(true);
        return 0;
      }

      return result;
    });
  }

  useEffect(() => {
    if (isAttacking) {
      setTimeout(() => {
        setIsAttacking(false);
        setIsBlocked(false);
      }, attackDurationMS);
    }
  }, [isAttacking]);

  return {
    x: initialPosition.x,
    y: initialPosition.y,
    direction: 'LEFT',
    handleAttack,
    isAttacking,
    isBlocked,
    isDead,
    life,
    handleReceiveDamage,
  };
};
