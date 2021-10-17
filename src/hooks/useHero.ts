import { useEffect, useState } from 'react';

import { attackDurationMS, heroInitialLife } from '../config/Constants';

import { EDirections } from '../enum/Directions';
import { EWalker } from '../enum/Walker';

import { IPosition } from '../interfaces/Position';
import { IDirections } from '../interfaces/Directions';

import { randomNumber } from '../utils/helper';
import { useUpdatedMap } from '../contexts/UpdatedMapContext';

interface IUseHeroResponse {
  x: number;
  y: number;
  direction: IDirections;
  handleMove: (directionParam: EDirections, walker: EWalker) => void;
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

export const useHero = ({
  initialPosition,
}: IUseHeroProps): IUseHeroResponse => {
  const { updateMap } = useUpdatedMap();

  const [position, setPosition] = useState(initialPosition);
  const [direction, setDirection] = useState<IDirections>(EDirections.DOWN);
  const [isAttacking, setIsAttacking] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);
  // TODO remove this eslint disable rule when i make the death function
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isDead, setIsDead] = useState(false);
  const [life, setLife] = useState(heroInitialLife);

  function handleMove(directionParam: EDirections, walker: EWalker) {
    const { nextPosition, nextMovementIsValid } = updateMap({
      direction: directionParam,
      currentPosition: position,
      walker,
    });

    if (nextMovementIsValid) {
      setPosition(nextPosition);
    }
    setDirection(directionParam);
  }

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
    x: position.x,
    y: position.y,
    direction,
    handleMove,
    handleAttack,
    isAttacking,
    isBlocked,
    isDead,
    life,
    handleReceiveDamage,
  };
};
