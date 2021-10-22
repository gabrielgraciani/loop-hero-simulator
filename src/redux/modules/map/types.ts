export interface IMapState {
  initialMap: number[][];
  isLoading: boolean;
}

export enum EActionTypes {
  generateMap = 'GENERATE_MAP',
  setIsLoading = 'SET_IS_LOADING',
}

export interface IGenerateMapResponse {
  type: string;
  payload: {
    initialMap: number[][];
  };
}

export interface ISetIsLoadingResponse {
  type: string;
  payload: {
    isLoading: boolean;
  };
}
