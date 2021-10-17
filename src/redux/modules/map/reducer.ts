import { Reducer } from 'redux';

import { IMapState } from './types';

const INITIAL_STATE: IMapState = {
  initialMap: [],
  updatedMap: [],
};

export const mapReducer: Reducer<IMapState> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case 'GENERATE_MAP': {
      const { initialMap } = action.payload;

      return {
        ...state,
        initialMap,
        updatedMap: initialMap,
      };
    }

    default: {
      return state;
    }
  }
};
