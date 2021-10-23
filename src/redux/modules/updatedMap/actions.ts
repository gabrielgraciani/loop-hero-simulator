import { IPosition } from '../../../interfaces/Position';
import {
  EActionTypes,
  IGenerateMapResponse,
  ISetHeroAttackPosition,
  ISetEnemyAttackPosition,
  IResetEnemyAttackPosition,
  ISetEnemiesQuantity,
} from './types';

export function updateMap(newMap: number[][]): IGenerateMapResponse {
  return {
    type: EActionTypes.updateMap,
    payload: { newMap },
  };
}

export function setHeroAttackPosition(
  heroAttackPosition?: IPosition,
): ISetHeroAttackPosition {
  return {
    type: EActionTypes.setHeroAttackPosition,
    payload: { heroAttackPosition },
  };
}

export function setEnemyAttackPosition(
  enemyAttackPosition?: IPosition,
): ISetEnemyAttackPosition {
  return {
    type: EActionTypes.setEnemyAttackPosition,
    payload: { enemyAttackPosition },
  };
}

export function resetEnemyAttackPosition(): IResetEnemyAttackPosition {
  return {
    type: EActionTypes.resetEnemyAttackPosition,
  };
}

export function setEnemiesQuantity(
  enemiesQuantity: number,
): ISetEnemiesQuantity {
  return {
    type: EActionTypes.setEnemiesQuantity,
    payload: { enemiesQuantity },
  };
}
