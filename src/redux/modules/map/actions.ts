import {
  IGenerateMapResponse,
  EActionTypes,
  ISetIsLoadingResponse,
} from './types';

export function generateMap(initialMap: number[][]): IGenerateMapResponse {
  return {
    type: EActionTypes.generateMap,
    payload: { initialMap },
  };
}

export function setIsLoading(isLoading: boolean): ISetIsLoadingResponse {
  return {
    type: EActionTypes.setIsLoading,
    payload: { isLoading },
  };
}
