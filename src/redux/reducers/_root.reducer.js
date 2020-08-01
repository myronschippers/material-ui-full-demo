import { combineReducers } from 'redux';

// REDUCERS
import creatureListReducer from './creatureList.reducer';

const rootReducer = combineReducers({
  // add any reducers here
  creatureListReducer,
});

export default rootReducer;