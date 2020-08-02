import { put as dispatch } from 'redux-saga/effects';
import axios from 'axios';

function* saveCreatureHabitat(action) {
  try {
    yield axios.post(
      `/api/creatures/habitat/${action.payload.creatureId}`,
      { habitatId: action.payload.habitatId }
    );
    yield dispatch({
      type: 'GET_CREATURE_DETAILS',
      payload: action.payload.creatureId,
    });
  } catch(err) {
    console.log('ERROR:', err);
    yield dispatch({
      type: 'ERROR_MESSAGE',
      payload: `There was an error saving a new habitat for the creature.`,
    });
  }
}

export default saveCreatureHabitat;