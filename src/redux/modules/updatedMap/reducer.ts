import { Reducer } from 'redux';

import { IUpdatedMapState } from './types';

const INITIAL_STATE: IUpdatedMapState = {
  updatedMap: [],
  heroAttackPosition: undefined,
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

    case 'SET_HERO_ATTACK_POSITION': {
      const { heroAttackPosition } = action.payload;

      return {
        ...state,
        heroAttackPosition,
      };
    }

    default: {
      return state;
    }
  }
};
