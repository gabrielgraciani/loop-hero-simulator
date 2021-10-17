interface IGenerateMapResponse {
  type: string;
  payload: {
    newMap: number[][];
  };
}

export function updateMap(newMap: number[][]): IGenerateMapResponse {
  return {
    type: 'UPDATE_MAP',
    payload: { newMap },
  };
}
