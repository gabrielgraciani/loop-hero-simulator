import { combineReducers } from 'redux';

import { mapReducer } from './map/reducer';
import { updatedMapReducer } from './updatedMap/reducer';

export default combineReducers({
  mapReducer,
  updatedMapReducer,
});
