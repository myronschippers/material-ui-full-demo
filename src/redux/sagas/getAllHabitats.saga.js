import { put as dispatch } from 'redux-saga/effects';
import axios from 'axios';

function* getAllHabitats(action) {
  try {
    const response = yield axios.get('/api/habitat');
    yield dispatch({
      type: 'SET_ALL_HABITATS',
      payload: response.data,
    });
  } catch(err) {
    console.log('ERROR:', err);
    yield dispatch({
      type: 'ERROR_MESSAGE',
      payload: `There was an error retrieving the list of habitats.`,
    });
  }
}

export default getAllHabitats;