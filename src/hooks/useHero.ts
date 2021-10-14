import { useEffect, useState } from 'react';

import { IDirections } from '../interfaces/Directions';

import { attackDurationMS } from '../utils/helper';

export const useHero = () => {
  const [position, setPosition] = useState({ x: 5, y: 5 });
  const [direction, setDirection] = useState<IDirections>('DOWN');
  const [isAttacking, setIsAttacking] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);
  // TODO remove this eslint disable rule when i make the death function
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isDead, setIsDead] = useState(false);

  function moveLeft() {
    setDirection('LEFT');
    setPosition(pos => ({
      x: pos.x - 1,
      y: pos.y,
    }));
  }

  function moveRight() {
    setDirection('RIGHT');
    setPosition(pos => ({
      x: pos.x + 1,
      y: pos.y,
    }));
  }

  function moveDown() {
    setDirection('DOWN');
    setPosition(pos => ({
      x: pos.x,
      y: pos.y + 1,
    }));
  }

  function moveUp() {
    setDirection('UP');
    setPosition(pos => ({
      x: pos.x,
      y: pos.y - 1,
    }));
  }

  function handleAttack() {
    setIsAttacking(true);
    setIsBlocked(true);
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
    positionHorizontal: position.x,
    positionVertical: position.y,
    direction,
    moveLeft,
    moveRight,
    moveDown,
    moveUp,
    handleAttack,
    isAttacking,
    isBlocked,
    isDead,
  };
};
