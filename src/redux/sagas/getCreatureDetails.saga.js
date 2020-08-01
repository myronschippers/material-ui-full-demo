import { put as dispatch } from 'redux-saga/effects';
import axios from 'axios';

function* getCreatureDetails(action) {
  try {
    const creatureResp = yield axios.get(`/api/creatures/details/${action.payload}`);
    yield dispatch({
      type: 'SET_CREATURE_DETAILS',
      payload: creatureResp.data,
    });
  } catch(err) {
    console.log('ERROR:', err);
    yield dispatch({
      type: 'ERROR_MESSAGE',
      payload: `There was an error getting details on the requested creature.`,
    });
  }
}

export default getCreatureDetails;