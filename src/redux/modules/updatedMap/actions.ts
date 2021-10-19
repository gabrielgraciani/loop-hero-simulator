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

export function updateMap(newMap: number[][]): IGenerateMapResponse {
  return {
    type: 'UPDATE_MAP',
    payload: { newMap },
  };
}

export function setAttackPosition(
  heroAttackPosition?: IPosition,
): ISetHeroAttackPosition {
  return {
    type: 'SET_HERO_ATTACK_POSITION',
    payload: { heroAttackPosition },
  };
}
