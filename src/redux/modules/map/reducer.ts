import { Reducer } from 'redux';

import { EActionTypes, IMapState } from './types';

const INITIAL_STATE: IMapState = {
  initialMap: [],
  isLoading: true,
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
      };
    }

    case EActionTypes.setIsLoading: {
      const { isLoading } = action.payload;

      return {
        ...state,
        isLoading,
      };
    }

    default: {
      return state;
    }
  }
};
