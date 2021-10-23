import { createStore } from 'redux';

import rootReducer from '../modules/rootReducer';
import { IMapState } from '../modules/map/types';
import { IUpdatedMapState } from '../modules/updatedMap/types';
import { IScoreState } from '../modules/score/types';

export interface IGlobalReduxState {
  mapReducer: IMapState;
  updatedMapReducer: IUpdatedMapState;
  scoreReducer: IScoreState;
}

export const store = createStore(rootReducer);
