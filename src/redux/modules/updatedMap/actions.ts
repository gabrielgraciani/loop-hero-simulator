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

interface ISetSlimeAttackPosition {
  type: string;
  payload: {
    slimeAttackPosition?: IPosition;
  };
}

interface IResetSlimeAttackPosition {
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

export function setSlimeAttackPosition(
  slimeAttackPosition?: IPosition,
): ISetSlimeAttackPosition {
  return {
    type: 'SET_SLIME_ATTACK_POSITION',
    payload: { slimeAttackPosition },
  };
}

export function resetSlimeAttackPosition(): IResetSlimeAttackPosition {
  return {
    type: 'RESET_SLIME_ATTACK_POSITION',
  };
}
