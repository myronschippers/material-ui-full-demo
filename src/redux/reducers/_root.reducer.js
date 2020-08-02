import { combineReducers } from 'redux';

// REDUCERS
import creatureList from './creatureList.reducer';
import creatureDetails from './creatureDetails.reducer';
import error from './error.reducer';
import allAttributes from './allAttributes.reducer';
import allHabitats from './allHabitats.reducer';
import allTypes from './allTypes.reducer';

const rootReducer = combineReducers({
  // add any reducers here
  creatureList,
  creatureDetails,
  error,
  allAttributes,
  allHabitats,
  allTypes,
});

export default rootReducer;