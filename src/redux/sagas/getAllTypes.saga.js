import { put as dispatch } from 'redux-saga/effects';
import axios from 'axios';

function* getAllTypes(action) {
  try {
    const response = yield axios.get('/api/types');
    yield dispatch({
      type: 'SET_ALL_TYPES',
      payload: response.data,
    });
  } catch(err) {
    console.log('ERROR:', err);
    yield dispatch({
      type: 'ERROR_MESSAGE',
      payload: `There was an error retrieving the list of types.`,
    });
  }
}

export default getAllTypes;