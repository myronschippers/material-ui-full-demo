import { combineReducers } from 'redux';

// REDUCERS
import creatureList from './creatureList.reducer';
import creatureDetails from './creatureDetails.reducer'

const rootReducer = combineReducers({
  // add any reducers here
  creatureList,
  creatureDetails,
});

export default rootReducer;