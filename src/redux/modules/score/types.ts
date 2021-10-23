export interface IScore {
  enemiesKilled: number;
  mapsGenerated: number;
}

export interface IScoreState {
  gameOver: boolean;
  score: IScore;
}

export enum EActionTypes {
  setScore = 'SET_SCORE',
  setGameOver = 'SET_GAME_OVER',
}

export interface ISetScoreResponse {
  type: string;
  payload: {
    score: IScore;
  };
}

export interface ISetGamerOverResponse {
  type: string;
  payload: {
    gameOver: boolean;
  };
}
