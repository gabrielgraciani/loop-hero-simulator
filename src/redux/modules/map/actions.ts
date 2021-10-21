import { IGenerateMapResponse, EActionTypes } from './types';

export function generateMap(initialMap: number[][]): IGenerateMapResponse {
  return {
    type: EActionTypes.generateMap,
    payload: { initialMap },
  };
}
