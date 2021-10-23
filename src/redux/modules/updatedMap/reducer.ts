import { Reducer } from 'redux';

import { EActionTypes, IUpdatedMapState } from './types';

const INITIAL_STATE: IUpdatedMapState = {
  updatedMap: [],
  heroAttackPosition: undefined,
  enemyAttackPosition: [],
  enemiesQuantity: 0,
};

export const updatedMapReducer: Reducer<IUpdatedMapState> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case EActionTypes.updateMap: {
      const { newMap } = action.payload;

      return {
        ...state,
        updatedMap: newMap,
      };
    }

    case EActionTypes.setHeroAttackPosition: {
      const { heroAttackPosition } = action.payload;

      return {
        ...state,
        heroAttackPosition,
      };
    }

    case EActionTypes.setEnemyAttackPosition: {
      const { enemyAttackPosition } = action.payload;

      const newSlimeAttackPosition = state.enemyAttackPosition?.length
        ? [...state.enemyAttackPosition]
        : [];

      return {
        ...state,
        enemyAttackPosition: [...newSlimeAttackPosition, enemyAttackPosition],
      };
    }

    case EActionTypes.resetEnemyAttackPosition: {
      return {
        ...state,
        enemyAttackPosition: [],
      };
    }

    case EActionTypes.setEnemiesQuantity: {
      const { enemiesQuantity } = action.payload;

      return {
        ...state,
        enemiesQuantity,
      };
    }

    default: {
      return state;
    }
  }
};
