import { createStore } from 'redux';

import rootReducer from '../modules/rootReducer';
import { IMapState } from '../modules/map/types';
import { IUpdatedMapState } from '../modules/updatedMap/types';

export interface IGlobalReduxState {
  mapReducer: IMapState;
  updatedMapReducer: IUpdatedMapState;
}

export const store = createStore(rootReducer);
