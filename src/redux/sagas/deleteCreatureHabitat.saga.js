import { put as dispatch } from 'redux-saga/effects';
import axios from 'axios';

function* deleteCreatureAttribute(action) {
  try {
    yield axios.delete(
      `/api/creatures/${action.payload.creatureId}/habitat/${action.payload.habitat.id}`
    );
    yield dispatch({
      type: 'GET_CREATURE_DETAILS',
      payload: action.payload.creatureId,
    });
  } catch(err) {
    console.log('ERROR:', err);
    yield dispatch({
      type: 'ERROR_MESSAGE',
      payload: `There was an error removing the creature's habitat.`,
    });
  }
}

export default deleteCreatureAttribute;