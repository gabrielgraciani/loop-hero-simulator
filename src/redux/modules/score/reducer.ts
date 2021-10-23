import { Reducer } from 'redux';

import { EActionTypes, IScoreState } from './types';

const INITIAL_STATE: IScoreState = {
  gameOver: false,
  score: {
    enemiesKilled: 0,
    mapsGenerated: 0,
  },
};

export const scoreReducer: Reducer<IScoreState> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case EActionTypes.setScore: {
      const { score } = action.payload;

      return {
        ...state,
        score,
      };
    }
    case EActionTypes.setGameOver: {
      const { gameOver } = action.payload;

      return {
        ...state,
        gameOver,
      };
    }

    default: {
      return state;
    }
  }
};
