import { createStore } from 'redux';

import rootReducer from '../modules/rootReducer';
import { IMapState } from '../modules/map/types';

export interface IGlobalReduxState {
  mapReducer: IMapState;
}

export const store = createStore(rootReducer);
