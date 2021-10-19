import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, useCallback } from 'react';

import { attackDurationMS, heroInitialLife } from '../config/Constants';

import { EDirections } from '../enum/Directions';
import { EWalker } from '../enum/Walker';
import { EMapFloor } from '../enum/MapFloor';

import { IPosition } from '../interfaces/Position';
import { IDirections } from '../interfaces/Directions';

import {
  updateMap,
  setHeroAttackPosition,
  resetSlimeAttackPosition,
} from '../redux/modules/updatedMap/actions';
import { IUpdatedMapState } from '../redux/modules/updatedMap/types';
import { IGlobalReduxState } from '../redux/store';

import {
  handleNextPosition,
  isValidMovement,
  randomNumber,
} from '../utils/helper';

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
  const dispatch = useDispatch();
  const { updatedMap, slimeAttackPosition } = useSelector<
    IGlobalReduxState,
    IUpdatedMapState
  >(state => state.updatedMapReducer);

  const [position, setPosition] = useState(initialPosition);
  const [direction, setDirection] = useState<IDirections>(EDirections.DOWN);
  const [isAttacking, setIsAttacking] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);
  const [isDead, setIsDead] = useState(false);
  const [life, setLife] = useState(heroInitialLife);

  const handleMove = useCallback(
    (directionParam: EDirections, walker: EWalker) => {
      const nextPosition = handleNextPosition({
        direction: directionParam,
        currentPosition: position,
      });
      const nextMovementIsValid = isValidMovement({
        map: updatedMap,
        nextPosition,
        walker,
      });

      if (nextMovementIsValid) {
        const newMapState = [...updatedMap];

        const currentValue = newMapState[position.y][position.x];

        newMapState[position.y][position.x] = EMapFloor.FLOOR;
        newMapState[nextPosition.y][nextPosition.x] = currentValue;

        dispatch(updateMap(newMapState));

        setPosition(nextPosition);
      }
      setDirection(directionParam);
    },
    [dispatch, position, updatedMap],
  );

  function handleAttack() {
    setIsAttacking(true);
    setIsBlocked(true);

    let heroAttackPositionY = position.y;
    let heroAttackPositionX = position.x;

    switch (direction) {
      case EDirections.DOWN: {
        heroAttackPositionY += 1;
        break;
      }
      case EDirections.UP: {
        heroAttackPositionY -= 1;
        break;
      }
      case EDirections.LEFT: {
        heroAttackPositionX -= 1;
        break;
      }
      case EDirections.RIGHT: {
        heroAttackPositionX += 1;
        break;
      }

      default: {
        break;
      }
    }

    const attackPosition = {
      x: heroAttackPositionX,
      y: heroAttackPositionY,
    };

    dispatch(setHeroAttackPosition(attackPosition));
  }

  const handleReceiveDamage = useCallback(() => {
    dispatch(resetSlimeAttackPosition());
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
  }, [dispatch]);

  useEffect(() => {
    if (isAttacking) {
      const id = setTimeout(() => {
        setIsAttacking(false);
        setIsBlocked(false);
      }, attackDurationMS);

      return () => clearTimeout(id);
    }

    return undefined;
  }, [isAttacking]);

  useEffect(() => {
    if (slimeAttackPosition?.length && !isDead) {
      const foundHeroPositionWhenSlimeAttack = slimeAttackPosition.find(
        slimeAttack => {
          return slimeAttack.x === position.x && slimeAttack.y === position.y;
        },
      );

      if (foundHeroPositionWhenSlimeAttack) {
        handleReceiveDamage();
      }
    }
  }, [
    slimeAttackPosition,
    handleReceiveDamage,
    isDead,
    position.x,
    position.y,
  ]);

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
