import { Reducer } from 'redux';

import { IUpdatedMapState } from './types';

const INITIAL_STATE: IUpdatedMapState = {
  updatedMap: [],
  heroAttackPosition: undefined,
  enemyAttackPosition: [],
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

    case 'SET_ENEMY_ATTACK_POSITION': {
      const { enemyAttackPosition } = action.payload;

      const newSlimeAttackPosition = state.enemyAttackPosition?.length
        ? [...state.enemyAttackPosition]
        : [];

      return {
        ...state,
        enemyAttackPosition: [...newSlimeAttackPosition, enemyAttackPosition],
      };
    }

    case 'RESET_ENEMY_ATTACK_POSITION': {
      return {
        ...state,
        enemyAttackPosition: [],
      };
    }

    default: {
      return state;
    }
  }
};
