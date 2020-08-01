import { put as dispatch } from 'redux-saga/effects';
import axios from 'axios';

function* updateCreature(action) {
  try {
    yield axios.put(`/api/creatures/details/${action.payload.id}`, action.payload);
    yield dispatch({
      type: 'GET_CREATURE_DETAILS',
      payload: action.payload.id,
    });
  } catch(err) {
    console.log('ERROR:', err);
    yield dispatch({
      type: 'ERROR_MESSAGE',
      payload: `There was an error updating the ${action.payload.name} creature.`,
    });
  }
}

export default updateCreature;