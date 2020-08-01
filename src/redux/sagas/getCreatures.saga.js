import { put as dispatch } from 'redux-saga/effects';
import axios from 'axios';

function* getCreatures(action) {
  try {
    const creatures = yield axios.get('/api/creatures');
    yield dispatch({
      type: 'SET_CREATURE_LIST',
      payload: creatures.data,
    });
  } catch(err) {
    console.log('ERROR:', err);
  }
}

export default getCreatures;