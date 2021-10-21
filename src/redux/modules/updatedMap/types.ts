import { IPosition } from '../../../interfaces/Position';

export interface IUpdatedMapState {
  updatedMap: number[][];
  heroAttackPosition?: IPosition;
  enemyAttackPosition?: IPosition[];
  enemiesQuantity: number;
}

export enum EActionTypes {
  updateMap = 'UPDATE_MAP',
  setHeroAttackPosition = 'SET_HERO_ATTACK_POSITION',
  setEnemyAttackPosition = 'SET_ENEMY_ATTACK_POSITION',
  resetEnemyAttackPosition = 'RESET_ENEMY_ATTACK_POSITION',
  setEnemiesQuantity = 'SET_ENEMIES_QUANTITY',
}

export interface IGenerateMapResponse {
  type: string;
  payload: {
    newMap: number[][];
  };
}

export interface ISetHeroAttackPosition {
  type: string;
  payload: {
    heroAttackPosition?: IPosition;
  };
}

export interface ISetEnemyAttackPosition {
  type: string;
  payload: {
    enemyAttackPosition?: IPosition;
  };
}

export interface IResetEnemyAttackPosition {
  type: string;
}

export interface ISetEnemiesQuantity {
  type: string;
  payload: {
    enemiesQuantity: number;
  };
}
