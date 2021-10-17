import { Reducer } from 'redux';

import { IUpdatedMapState } from './types';

const INITIAL_STATE: IUpdatedMapState = {
  updatedMap: [],
};

export const updatedMapReducer: Reducer<IUpdatedMapState> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case 'UPDATE_MAP': {
      const { newMap } = action.payload;

      return {
        ...state,
        updatedMap: newMap,
      };
    }

    default: {
      return state;
    }
  }
};
