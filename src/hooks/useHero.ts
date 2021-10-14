import { useEffect, useState } from 'react';

import { IDirections } from '../interfaces/Directions';

export const useHero = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState<IDirections>('DOWN');
  const [isAttacking, setIsAttacking] = useState(false);

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
  }

  useEffect(() => {
    if (isAttacking) {
      setTimeout(() => {
        setIsAttacking(false);
      }, 1000);
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
  };
};
