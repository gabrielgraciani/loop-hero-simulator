import { Reducer } from 'redux';

import { IUpdatedMapState } from './types';

const INITIAL_STATE: IUpdatedMapState = {
  updatedMap: [],
  attackPosition: undefined,
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

    case 'SET_ATTACK_POSITION': {
      const { attackPosition } = action.payload;

      return {
        ...state,
        attackPosition,
      };
    }

    default: {
      return state;
    }
  }
};
