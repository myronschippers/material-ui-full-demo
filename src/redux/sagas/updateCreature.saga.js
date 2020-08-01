import { put as dispatch } from 'redux-saga/effects';
import axios from 'axios';

function* getCreatureDetails(action) {
  try {
    const creatureResp = yield axios.post(`/api/creatures/details/${action.payload}`, action.payload);
    yield dispatch({
      type: 'GET_CREATURE_DETAILS',
    });
  } catch(err) {
    console.log('ERROR:', err);
  }
}

export default getCreatureDetails;