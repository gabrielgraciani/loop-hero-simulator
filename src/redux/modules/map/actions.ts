interface IGenerateMapResponse {
  type: string;
  payload: {
    initialMap: number[][];
  };
}

export function generateMap(initialMap: number[][]): IGenerateMapResponse {
  return {
    type: 'GENERATE_MAP',
    payload: { initialMap },
  };
}
