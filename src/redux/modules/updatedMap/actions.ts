import { IPosition } from '../../../interfaces/Position';

interface IGenerateMapResponse {
  type: string;
  payload: {
    newMap: number[][];
  };
}

interface ISetHeroAttackPosition {
  type: string;
  payload: {
    heroAttackPosition?: IPosition;
  };
}

interface ISetEnemyAttackPosition {
  type: string;
  payload: {
    enemyAttackPosition?: IPosition;
  };
}

interface IResetEnemyAttackPosition {
  type: string;
}

export function updateMap(newMap: number[][]): IGenerateMapResponse {
  return {
    type: 'UPDATE_MAP',
    payload: { newMap },
  };
}

export function setHeroAttackPosition(
  heroAttackPosition?: IPosition,
): ISetHeroAttackPosition {
  return {
    type: 'SET_HERO_ATTACK_POSITION',
    payload: { heroAttackPosition },
  };
}

export function setEnemyAttackPosition(
  enemyAttackPosition?: IPosition,
): ISetEnemyAttackPosition {
  return {
    type: 'SET_ENEMY_ATTACK_POSITION',
    payload: { enemyAttackPosition },
  };
}

export function resetEnemyAttackPosition(): IResetEnemyAttackPosition {
  return {
    type: 'RESET_ENEMY_ATTACK_POSITION',
  };
}
