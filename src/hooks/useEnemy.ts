import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, useCallback } from 'react';
import { IScoreState } from '../redux/modules/score/types';
import { EMapFloor } from '../enum/MapFloor';

import {
  attackDurationMS,
  deathDurationMS,
  enemyMoveDurationMS,
  heroInitialLife,
} from '../config/Constants';

import { EDirections } from '../enum/Directions';
import { EWalker } from '../enum/Walker';
import { EEnemeyAction } from '../enum/EnemyAction';

import { IPosition } from '../interfaces/Position';
import { IDirections } from '../interfaces/Directions';

import {
  setHeroAttackPosition,
  updateMap,
  resetEnemyAttackPosition,
  setEnemyAttackPosition,
  setEnemiesQuantity,
} from '../redux/modules/updatedMap/actions';
import { setScore } from '../redux/modules/score/actions';
import { IUpdatedMapState } from '../redux/modules/updatedMap/types';
import { IGlobalReduxState } from '../redux/store';

import { useInterval } from './useInterval';

import {
  handleNextPosition,
  isValidMovement,
  randomNumber,
} from '../utils/helper';

interface IUseEnemyResponse {
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

interface IUseEnemyProps {
  initialPosition: IPosition;
}

export const useEnemy = ({
  initialPosition,
}: IUseEnemyProps): IUseEnemyResponse => {
  const dispatch = useDispatch();
  const { updatedMap, heroAttackPosition, enemiesQuantity } = useSelector<
    IGlobalReduxState,
    IUpdatedMapState
  >(state => state.updatedMapReducer);
  const { score } = useSelector<IGlobalReduxState, IScoreState>(
    state => state.scoreReducer,
  );

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
    const { isNextMovementValid } = isValidMovement({
      map: updatedMap,
      nextPosition,
      walker: EWalker.ENEMY,
    });

    if (isNextMovementValid) {
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

  const handleAttack = useCallback(() => {
    setIsAttacking(true);
    setIsBlocked(true);

    let enemyAttackPositionY = position.y;
    let enemyAttackPositionX = position.x;

    switch (direction) {
      case EDirections.DOWN: {
        enemyAttackPositionY += 1;
        break;
      }
      case EDirections.UP: {
        enemyAttackPositionY -= 1;
        break;
      }
      case EDirections.LEFT: {
        enemyAttackPositionX -= 1;
        break;
      }
      case EDirections.RIGHT: {
        enemyAttackPositionX += 1;
        break;
      }

      default: {
        break;
      }
    }

    const attackPosition = {
      x: enemyAttackPositionX,
      y: enemyAttackPositionY,
    };

    dispatch(setEnemyAttackPosition(attackPosition));
  }, [direction, dispatch, position]);

  const handleReceiveDamage = useCallback(() => {
    const randomDamage = randomNumber({ min: 1, max: 50 });
    dispatch(setHeroAttackPosition(undefined));

    setLife(oldLife => {
      const result = oldLife - randomDamage;
      if (result <= 0) {
        setIsDead(true);
        setIsBlocked(true);

        setTimeout(() => {
          const newMap = [...updatedMap];

          newMap[position.y][position.x] = EMapFloor.FLOOR;

          dispatch(updateMap(newMap));
          dispatch(setEnemiesQuantity(enemiesQuantity - 1));

          const newScore = {
            enemiesKilled: score.enemiesKilled + 1,
            mapsGenerated: score.mapsGenerated,
          };
          dispatch(setScore(newScore));
          setIsAfterDeathAnimation(true);
        }, deathDurationMS);
        return 0;
      }

      return result;
    });
  }, [dispatch, enemiesQuantity, position, score, updatedMap]);

  const generateRandomEnemyAction = useCallback(() => {
    if (isBlocked) {
      return;
    }

    const randomAction: EEnemeyAction = randomNumber({ min: 0, max: 1 });

    if (randomAction === EEnemeyAction.MOVE) {
      handleMove();
    } else {
      handleAttack();
    }
  }, [handleAttack, handleMove, isBlocked]);

  useEffect(() => {
    if (isAttacking) {
      setTimeout(() => {
        setIsAttacking(false);
        setIsBlocked(false);
      }, attackDurationMS);
    } else {
      dispatch(resetEnemyAttackPosition());
    }
  }, [dispatch, isAttacking]);

  useInterval(() => {
    generateRandomEnemyAction();
  }, enemyMoveDurationMS);

  useEffect(() => {
    if (heroAttackPosition && !isDead) {
      if (
        heroAttackPosition.x === position.x &&
        heroAttackPosition.y === position.y
      ) {
        handleReceiveDamage();
      }
    }
  }, [heroAttackPosition, handleReceiveDamage, position, isDead]);

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
