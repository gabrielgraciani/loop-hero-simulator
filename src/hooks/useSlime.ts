import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, useCallback } from 'react';
import { EMapFloor } from '../enum/MapFloor';

import {
  attackDurationMS,
  deathDurationMS,
  enemyMoveDurationMS,
  heroInitialLife,
} from '../config/Constants';

import { EDirections } from '../enum/Directions';
import { EWalker } from '../enum/Walker';

import { IPosition } from '../interfaces/Position';
import { IDirections } from '../interfaces/Directions';

import {
  setAttackPosition,
  updateMap,
} from '../redux/modules/updatedMap/actions';
import { IUpdatedMapState } from '../redux/modules/updatedMap/types';
import { IGlobalReduxState } from '../redux/store';

import useInterval from './useInterval';

import {
  handleNextPosition,
  isValidMovement,
  randomNumber,
} from '../utils/helper';

interface IUseHeroResponse {
  x: number;
  y: number;
  direction: IDirections;
  handleMove: () => void;
  handleAttack: () => void;
  isAttacking: boolean;
  isBlocked: boolean;
  isDead: boolean;
  life: number;
  handleReceiveDamage: () => void;
  isAfterDeathAnimation: boolean;
}

interface IUseHeroProps {
  initialPosition: IPosition;
}

export const useSlime = ({
  initialPosition,
}: IUseHeroProps): IUseHeroResponse => {
  const dispatch = useDispatch();
  const { updatedMap, attackPosition } = useSelector<
    IGlobalReduxState,
    IUpdatedMapState
  >(state => state.updatedMapReducer);

  const [position, setPosition] = useState(initialPosition);
  const [direction, setDirection] = useState<IDirections>(EDirections.LEFT);
  const [isAttacking, setIsAttacking] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);
  const [isDead, setIsDead] = useState(false);
  const [life, setLife] = useState(heroInitialLife);
  const [isAfterDeathAnimation, setIsAfterDeathAnimation] = useState(false);

  const handleMove = useCallback(() => {
    const random = Math.floor(Math.random() * 4);
    const directionArray = Object.values(EDirections);
    const randomDirection = directionArray[random];

    const nextPosition = handleNextPosition({
      direction: randomDirection,
      currentPosition: position,
    });
    const nextMovementIsValid = isValidMovement({
      map: updatedMap,
      nextPosition,
      walker: EWalker.ENEMY,
    });

    if (nextMovementIsValid) {
      const newMapState = [...updatedMap];

      const currentValue = newMapState[position.y][position.x];

      newMapState[position.y][position.x] = EMapFloor.FLOOR;
      newMapState[nextPosition.y][nextPosition.x] = currentValue;

      dispatch(updateMap(newMapState));

      setPosition(nextPosition);
    }
    setDirection(
      randomDirection === EDirections.DOWN || randomDirection === EDirections.UP
        ? EDirections.LEFT
        : randomDirection,
    );
  }, [dispatch, position, updatedMap]);

  function handleAttack() {
    setIsAttacking(true);
    setIsBlocked(true);
  }

  const handleReceiveDamage = useCallback(() => {
    const randomDamage = randomNumber({ min: 1, max: 50 });
    dispatch(setAttackPosition(undefined));

    setLife(oldLife => {
      const result = oldLife - randomDamage;
      if (result <= 0) {
        setIsDead(true);
        setIsBlocked(true);

        setTimeout(() => {
          const newMap = [...updatedMap];

          newMap[position.y][position.x] = EMapFloor.FLOOR;

          dispatch(updateMap(newMap));
          setIsAfterDeathAnimation(true);
        }, deathDurationMS);
        return 0;
      }

      return result;
    });
  }, [dispatch, position.x, position.y, updatedMap]);

  useEffect(() => {
    if (isAttacking) {
      setTimeout(() => {
        setIsAttacking(false);
        setIsBlocked(false);
      }, attackDurationMS);
    }
  }, [isAttacking]);

  useInterval(() => {
    handleMove();
  }, enemyMoveDurationMS);

  useEffect(() => {
    if (attackPosition && !isDead) {
      if (attackPosition.x === position.x && attackPosition.y === position.y) {
        handleReceiveDamage();
      }
    }
  }, [attackPosition, handleReceiveDamage, position, isDead]);

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
    isAfterDeathAnimation,
  };
};
