import { combineReducers } from 'redux';

import { mapReducer } from './map/reducer';
import { updatedMapReducer } from './updatedMap/reducer';
import { scoreReducer } from './score/reducer';

export default combineReducers({
  mapReducer,
  updatedMapReducer,
  scoreReducer,
});
