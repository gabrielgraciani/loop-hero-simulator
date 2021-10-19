import { Reducer } from 'redux';

import { IUpdatedMapState } from './types';

const INITIAL_STATE: IUpdatedMapState = {
  updatedMap: [],
  heroAttackPosition: undefined,
  slimeAttackPosition: [],
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

    case 'SET_SLIME_ATTACK_POSITION': {
      const { slimeAttackPosition } = action.payload;

      const newSlimeAttackPosition = state.slimeAttackPosition?.length
        ? [...state.slimeAttackPosition]
        : [];

      return {
        ...state,
        slimeAttackPosition: [...newSlimeAttackPosition, slimeAttackPosition],
      };
    }

    case 'RESET_SLIME_ATTACK_POSITION': {
      return {
        ...state,
        slimeAttackPosition: [],
      };
    }

    default: {
      return state;
    }
  }
};
