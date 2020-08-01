import { put as dispatch } from 'redux-saga/effects';
import axios from 'axios';

function* saveCreatureAttribute(action) {
  try {
    yield axios.post(
      `/api/creatures/attribute/${action.payload.creatureId}`,
      { attributeId: action.payload.attributeId }
    );
    yield dispatch({
      type: 'GET_CREATURE_DETAILS',
      payload: action.payload.creatureId,
    });
  } catch(err) {
    console.log('ERROR:', err);
    yield dispatch({
      type: 'ERROR_MESSAGE',
      payload: `There was an error saving a new attribute for the creature.`,
    });
  }
}

export default saveCreatureAttribute;