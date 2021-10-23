import {
  EActionTypes,
  IScore,
  ISetScoreResponse,
  ISetGamerOverResponse,
} from './types';

export function setScore(score: IScore): ISetScoreResponse {
  return {
    type: EActionTypes.setScore,
    payload: { score },
  };
}

export function setGameOver(gameOver: boolean): ISetGamerOverResponse {
  return {
    type: EActionTypes.setGameOver,
    payload: { gameOver },
  };
}
