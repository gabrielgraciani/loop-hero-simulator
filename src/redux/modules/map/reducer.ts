import { Reducer } from 'redux';

import { EActionTypes, IMapState } from './types';

const INITIAL_STATE: IMapState = {
  initialMap: [],
};

export const mapReducer: Reducer<IMapState> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case EActionTypes.generateMap: {
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
