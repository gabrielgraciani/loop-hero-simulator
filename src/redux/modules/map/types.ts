export interface IMapState {
  initialMap: number[][];
}

export enum EActionTypes {
  generateMap = 'GENERATE_MAP',
}

export interface IGenerateMapResponse {
  type: string;
  payload: {
    initialMap: number[][];
  };
}
