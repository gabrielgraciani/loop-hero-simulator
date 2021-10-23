import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, useCallback } from 'react';
import { IScoreState } from '../redux/modules/score/types';

import { attackDurationMS, heroInitialLife } from '../config/Constants';

import { EDirections } from '../enum/Directions';
import { EWalker } from '../enum/Walker';
import { EMapFloor } from '../enum/MapFloor';

import { IPosition } from '../interfaces/Position';
import { IDirections } from '../interfaces/Directions';

import {
  updateMap,
  setHeroAttackPosition,
  resetEnemyAttackPosition,
} from '../redux/modules/updatedMap/actions';
import { setGameOver, setScore } from '../redux/modules/score/actions';
import { setIsLoading } from '../redux/modules/map/actions';
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
  const { updatedMap, enemyAttackPosition, enemiesQuantity } = useSelector<
    IGlobalReduxState,
    IUpdatedMapState
  >(state => state.updatedMapReducer);
  const { score } = useSelector<IGlobalReduxState, IScoreState>(
    state => state.scoreReducer,
  );

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
      const {
        isNextMovementValid,
        isNextMovementKillWalker,
        isNextMovementIsDoor,
      } = isValidMovement({
        map: updatedMap,
        nextPosition,
        walker,
      });

      if (isNextMovementIsDoor && enemiesQuantity === 0) {
        const newScore = {
          enemiesKilled: score.enemiesKilled,
          mapsGenerated: score.mapsGenerated + 1,
        };
        dispatch(setScore(newScore));
        dispatch(setIsLoading(true));
      }

      if (isNextMovementValid) {
        const newMapState = [...updatedMap];

        const currentValue = newMapState[position.y][position.x];

        newMapState[position.y][position.x] =
          currentValue === EMapFloor.DOOR ? EMapFloor.DOOR : EMapFloor.FLOOR;
        newMapState[nextPosition.y][nextPosition.x] = currentValue;

        dispatch(updateMap(newMapState));

        setPosition(nextPosition);
      }
      setDirection(directionParam);

      if (isNextMovementKillWalker) {
        setIsDead(true);
      }
    },
    [dispatch, enemiesQuantity, position, score, updatedMap],
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
    dispatch(resetEnemyAttackPosition());
    const randomDamage = randomNumber({ min: 1, max: 50 });

    setLife(oldLife => {
      const result = oldLife - randomDamage;
      if (result <= 0) {
        setIsDead(true);
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
    if (enemyAttackPosition?.length && !isDead) {
      const foundHeroPositionWhenSlimeAttack = enemyAttackPosition.find(
        slimeAttack => {
          return slimeAttack.x === position.x && slimeAttack.y === position.y;
        },
      );

      if (foundHeroPositionWhenSlimeAttack) {
        handleReceiveDamage();
      }
    }
  }, [
    enemyAttackPosition,
    handleReceiveDamage,
    isDead,
    position.x,
    position.y,
  ]);

  useEffect(() => {
    if (isDead) {
      setIsBlocked(true);
      setLife(0);
      dispatch(setGameOver(true));
    }
  }, [dispatch, isDead]);

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
