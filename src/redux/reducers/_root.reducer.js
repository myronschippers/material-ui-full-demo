import { combineReducers } from 'redux';

// REDUCERS
import creatureList from './creatureList.reducer';
import creatureDetails from './creatureDetails.reducer';
import error from './error.reducer';

const rootReducer = combineReducers({
  // add any reducers here
  creatureList,
  creatureDetails,
  error,
});

export default rootReducer;