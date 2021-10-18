import { IPosition } from '../../../interfaces/Position';

interface IGenerateMapResponse {
  type: string;
  payload: {
    newMap: number[][];
  };
}

interface ISetAttackPosition {
  type: string;
  payload: {
    attackPosition?: IPosition;
  };
}

export function updateMap(newMap: number[][]): IGenerateMapResponse {
  return {
    type: 'UPDATE_MAP',
    payload: { newMap },
  };
}

export function setAttackPosition(
  attackPosition?: IPosition,
): ISetAttackPosition {
  return {
    type: 'SET_ATTACK_POSITION',
    payload: { attackPosition },
  };
}
